'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

// Calm, editorial motion: content below the fold rises in once, the header
// tightens after the first scroll. Nothing here changes content; without JS
// or with reduced motion everything stays exactly as rendered.

const MAX_DEPTH = 4;
const MAX_PER_SECTION = 28;
const SPLIT_MIN_HEIGHT = 220;
const STAGGER_MS = 70;
const STAGGER_MAX_MS = 350;
const SETTLE_MS = 1000;
const SKIP_TAGS = new Set(['SCRIPT', 'STYLE', 'TEMPLATE', 'BR', 'INPUT', 'SELECT', 'TEXTAREA', 'BUTTON', 'LABEL']);
const LEAF_TAGS = new Set(['P', 'H1', 'H2', 'H3', 'H4', 'FIGURE', 'IMG', 'PICTURE', 'TABLE', 'FORM', 'DL', 'BLOCKQUOTE', 'DETAILS', 'A', 'SVG', 'CANVAS']);

function isHorizontalScroller(style) {
  return style.overflowX === 'auto' || style.overflowX === 'scroll';
}

function collectTargets(root, viewportBottom) {
  const targets = [];

  function visit(element, depth) {
    for (const child of element.children) {
      if (targets.length >= MAX_PER_SECTION) return;
      if (SKIP_TAGS.has(child.tagName)) continue;

      const style = getComputedStyle(child);
      if (style.display === 'none' || style.visibility === 'hidden') continue;
      if (style.position === 'fixed' || style.position === 'sticky' || style.position === 'absolute') continue;

      const rect = child.getBoundingClientRect();
      if (rect.height === 0 || rect.width === 0) continue;
      // Already on screen: never hide what the visitor can see.
      if (rect.top < viewportBottom) {
        if (rect.bottom > viewportBottom && child.children.length > 1 && depth < MAX_DEPTH && !LEAF_TAGS.has(child.tagName)) {
          visit(child, depth + 1);
        }
        continue;
      }

      const isLayout = style.display.includes('grid') || style.display.includes('flex');
      const canSplit =
        depth < MAX_DEPTH &&
        !LEAF_TAGS.has(child.tagName) &&
        !isHorizontalScroller(style) &&
        child.children.length > 1 &&
        child.children.length <= 14 &&
        (isLayout || rect.height > SPLIT_MIN_HEIGHT);

      if (canSplit) {
        visit(child, depth + 1);
      } else {
        targets.push(child);
      }
    }
  }

  visit(root, 0);
  return targets;
}

export default function MotionController() {
  const pathname = usePathname();

  // Header state after the first scroll.
  useEffect(() => {
    const root = document.documentElement;
    let frame = 0;

    function update() {
      frame = 0;
      root.classList.toggle('is-scrolled', window.scrollY > 16);
    }

    function onScroll() {
      if (!frame) frame = window.requestAnimationFrame(update);
    }

    update();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', onScroll);
      if (frame) window.cancelAnimationFrame(frame);
    };
  }, []);

  // Reveal on scroll, re-run for every page.
  useEffect(() => {
    const root = document.documentElement;
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (reduceMotion.matches || !('IntersectionObserver' in window)) return undefined;

    root.classList.add('js-motion');

    const timers = new Set();
    const tagged = [];
    const viewportBottom = window.innerHeight;
    const sections = document.querySelectorAll('main > section:not(:first-of-type)');

    for (const section of sections) {
      for (const element of collectTargets(section, viewportBottom)) {
        const transform = getComputedStyle(element).transform;
        element.setAttribute('data-reveal', transform && transform !== 'none' ? 'fade' : 'rise');
        tagged.push(element);
      }
    }

    function settle(element) {
      element.removeAttribute('data-reveal');
      element.classList.remove('is-revealed');
      element.style.removeProperty('--reveal-delay');
    }

    const observer = new IntersectionObserver(
      (entries) => {
        const entering = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top || a.boundingClientRect.left - b.boundingClientRect.left);

        entering.forEach((entry, index) => {
          const element = entry.target;
          const delay = Math.min(index * STAGGER_MS, STAGGER_MAX_MS);
          observer.unobserve(element);
          element.style.setProperty('--reveal-delay', delay + 'ms');
          element.classList.add('is-revealed');
          element.setAttribute('data-shown', '');
          const timer = window.setTimeout(() => {
            timers.delete(timer);
            settle(element);
          }, delay + SETTLE_MS);
          timers.add(timer);
        });
      },
      { rootMargin: '0px 0px -6% 0px', threshold: 0 }
    );

    tagged.forEach((element) => observer.observe(element));

    function revealAll() {
      tagged.forEach(settle);
    }
    window.addEventListener('beforeprint', revealAll);

    return () => {
      observer.disconnect();
      timers.forEach((timer) => window.clearTimeout(timer));
      window.removeEventListener('beforeprint', revealAll);
      revealAll();
    };
  }, [pathname]);

  return null;
}
