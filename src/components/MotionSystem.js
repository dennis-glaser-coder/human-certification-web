'use client';

import { useEffect } from 'react';

const HERO_ROOTS = [
  '.desireHeroCopy',
  '.manufacturerHeroArtCopy',
  '.whyHeroCopy',
  '.buyerHeroGrid > div:first-child',
  '.pageHero',
  '.verifyPageIntro',
  '.salesHeroCopy',
  '.aboutStoryHero',
].join(',');

const HERO_PARTS = [
  '.premiumEyebrow',
  '.eyebrow',
  '.brandTrace',
  'h1',
  '.lead',
  '.desireHeroLead',
  '.buyerHeroLead',
  '.whyHeroLead',
  '.desireHeroActions',
  '.manufacturerHeroActions',
  '.buyerHeroActions',
  '.whyHeroActions',
  '.salesHeroActions',
].join(',');

/* Only two deliberate section reveals remain on the homepage. */
const FEATURE_REVEALS = [
  '.compactHome .homeProofUseGrid',
  '.compactHome .homeProcessGrid',
].join(',');

/* Large editorial imagery is the recurring Made by Human motion signature. */
const EDITORIAL_MEDIA = [
  '.desireHeroVisual',
  '.manufacturerHeroArtVisual',
  '.whyHeroVisual figure',
  '.compactAudit figure',
  '.manufacturerEvidencePhoto',
  '.markUseRealExample figure',
  '.documentaryFigure',
  '.buyerAudit figure',
].join(',');

function selectWithin(scope, selector) {
  const found = [];

  if (scope instanceof Element && scope.matches(selector)) {
    found.push(scope);
  }

  if (scope.querySelectorAll) {
    found.push(...scope.querySelectorAll(selector));
  }

  return found;
}

function heroDelay(element) {
  if (element.matches('.brandTrace')) return '45ms';
  if (element.matches('h1')) return '70ms';
  if (element.matches('.lead, .desireHeroLead, .buyerHeroLead, .whyHeroLead')) return '125ms';
  if (element.matches('.desireHeroActions, .manufacturerHeroActions, .buyerHeroActions, .whyHeroActions, .salesHeroActions')) return '180ms';
  return '0ms';
}

export default function MotionSystem() {
  useEffect(() => {
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');

    let featureObserver;
    let mediaObserver;
    let mutationObserver;

    const revealAll = () => {
      document.querySelectorAll(
        '.mbh-motion-hero-part, .mbh-motion-feature, .mbh-motion-media'
      ).forEach((element) => element.classList.add('is-visible'));
    };

    if (reducedMotion.matches) {
      document.documentElement.classList.remove('mbh-motion-ready');
      revealAll();
      return undefined;
    }

    featureObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add('is-visible');
        featureObserver.unobserve(entry.target);
      });
    }, {
      threshold: 0.18,
      rootMargin: '0px 0px -10% 0px',
    });

    mediaObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add('is-visible');
        mediaObserver.unobserve(entry.target);
      });
    }, {
      threshold: 0.14,
      rootMargin: '0px 0px -8% 0px',
    });

    const enhance = (scope = document) => {
      selectWithin(scope, HERO_ROOTS).forEach((root) => {
        if (root.dataset.mbhHeroReady === 'true') return;
        root.dataset.mbhHeroReady = 'true';

        Array.from(root.children)
          .filter((child) => child.matches(HERO_PARTS))
          .forEach((element) => {
            element.classList.add('mbh-motion-hero-part');
            if (element.matches('h1')) element.classList.add('mbh-motion-headline');
            element.style.setProperty('--mbh-motion-delay', heroDelay(element));
          });
      });

      selectWithin(scope, FEATURE_REVEALS).forEach((element) => {
        if (element.dataset.mbhFeatureReady === 'true') return;
        element.dataset.mbhFeatureReady = 'true';
        element.classList.add('mbh-motion-feature');
        featureObserver.observe(element);
      });

      selectWithin(scope, EDITORIAL_MEDIA).forEach((element) => {
        if (element.dataset.mbhMediaReady === 'true') return;
        element.dataset.mbhMediaReady = 'true';
        element.classList.add('mbh-motion-media');

        if (element.closest('.desireHero, .manufacturerHeroArt, .whyHero')) {
          window.requestAnimationFrame(() => element.classList.add('is-visible'));
        } else {
          mediaObserver.observe(element);
        }
      });

      selectWithin(scope, 'a[href]').forEach((link) => {
        if ((link.textContent || '').includes('→')) {
          link.dataset.mbhArrowLink = 'true';
        }
      });
    };

    enhance(document);

    window.requestAnimationFrame(() => {
      window.requestAnimationFrame(() => {
        document.querySelectorAll('.mbh-motion-hero-part').forEach((element) => {
          element.classList.add('is-visible');
        });
      });
    });

    mutationObserver = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        mutation.addedNodes.forEach((node) => {
          if (node instanceof Element) enhance(node);
        });
      });
    });

    mutationObserver.observe(document.body, {
      childList: true,
      subtree: true,
    });

    const handlePreference = (event) => {
      if (!event.matches) return;
      document.documentElement.classList.remove('mbh-motion-ready');
      revealAll();
      featureObserver?.disconnect();
      mediaObserver?.disconnect();
    };

    reducedMotion.addEventListener?.('change', handlePreference);

    return () => {
      featureObserver?.disconnect();
      mediaObserver?.disconnect();
      mutationObserver?.disconnect();
      reducedMotion.removeEventListener?.('change', handlePreference);
    };
  }, []);

  return null;
}
