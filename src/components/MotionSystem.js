'use client';

import { useEffect } from 'react';

const EASE = 'cubic-bezier(0.22, 1, 0.36, 1)';

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

const REVEAL_GROUPS = [
  '.homeProblemCompact',
  '.desireSectionHead',
  '.homeProofUseGrid',
  '.desireAuditCopy',
  '.homeConsumerCopy',
  '.homeVerifyCompact',
  '.homeProcessHead',
  '.homeProcessGrid',
  '.homeFinalCta',
  '.sectionIntro',
  '.manufacturerMetaGrid',
  '.manufacturerBenefitGrid',
  '.manufacturerFitGrid',
  '.manufacturerEvidenceList',
  '.manufacturerProcessGrid',
  '.manufacturerFaqGrid',
  '.manufacturerApplicationGrid',
  '.buyerMeaningLead',
  '.buyerMeaningGrid',
  '.buyerVerifyCopy',
  '.buyerBoundaryGrid',
  '.buyerFaqGrid',
  '.buyerFinalGrid',
  '.whySectionHead',
  '.whyBenefitGrid',
  '.whyCustomersIntro',
  '.whyCustomerList',
  '.whyComparisonTable',
  '.standardMetaBar',
  '.criteriaGrid',
  '.decisionRuleInner',
  '.scopeExclusionGrid',
  '.standardClose',
  '.documentProofGrid',
  '.documentRegistry',
  '.versionPolicyGrid',
  '.aboutOriginStatement',
  '.aboutOriginStory',
  '.aboutPurposeGrid',
  '.aboutPrinciplesGrid',
  '.aboutArchitectureIntro',
  '.aboutArchitectureGrid',
  '.aboutBoundariesGrid',
  '.markUseMetaGrid',
  '.markUseRealExampleCopy',
  '.markUseRules',
  '.markUseRuleGrid',
  '.markUseApplicationGrid',
  '.markUseProhibitedGrid',
  '.procedureMetaGrid',
  '.procedureGrid',
  '.procedureIntegrityGrid',
  '.procedureRecordGrid',
  '.integrityMetaGrid',
  '.transparencyPrinciplesGrid',
  '.integrityRolesIntro',
  '.integrityRolesGrid',
  '.governanceDocumentsGrid',
  '.integrityClaimBoundaryGrid',
  '.verifyTrustStrip',
  '.verifySearch',
  '.verificationRecord',
  '.registerTrustBar',
  '.registerToolbar',
  '.registerList',
].join(',');

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

function heroDelay(element) {
  if (element.matches('h1')) return 50;
  if (element.matches('.lead, .desireHeroLead, .buyerHeroLead, .whyHeroLead')) return 100;
  if (element.matches('.desireHeroActions, .manufacturerHeroActions, .buyerHeroActions, .whyHeroActions, .salesHeroActions')) return 150;
  return 0;
}

function finishClean(animation, element, properties = []) {
  animation.finished
    .then(() => {
      properties.forEach((property) => {
        element.style[property] = '';
      });
      animation.cancel();
    })
    .catch(() => {});
}

export default function MotionSystem() {
  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    const activeAnimations = new Set();
    const pendingReveal = new Set();
    const pendingMedia = new Set();

    let revealObserver;
    let mediaObserver;

    const trackAnimation = (animation) => {
      activeAnimations.add(animation);
      animation.finished.finally(() => activeAnimations.delete(animation)).catch(() => {});
      return animation;
    };

    const playReveal = (element) => {
      if (!element || element.dataset.mbhMotionPlayed === 'true') return;
      element.dataset.mbhMotionPlayed = 'true';
      pendingReveal.delete(element);

      const animation = trackAnimation(element.animate(
        [
          { opacity: 0, translate: '0 16px' },
          { opacity: 1, translate: '0 0' },
        ],
        {
          duration: 400,
          easing: EASE,
          fill: 'both',
        }
      ));

      finishClean(animation, element, ['opacity', 'translate']);
    };

    const playMedia = (element, immediate = false) => {
      if (!element || element.dataset.mbhMediaPlayed === 'true') return;
      element.dataset.mbhMediaPlayed = 'true';
      pendingMedia.delete(element);

      const wrapperAnimation = trackAnimation(element.animate(
        [
          { opacity: 0.84, clipPath: 'inset(0 0 18% 0)' },
          { opacity: 1, clipPath: 'inset(0 0 0 0)' },
        ],
        {
          duration: 600,
          delay: immediate ? 30 : 0,
          easing: EASE,
          fill: 'both',
        }
      ));
      finishClean(wrapperAnimation, element, ['opacity', 'clipPath']);

      const image = element.matches('img') ? element : element.querySelector('img');
      if (image) {
        const imageAnimation = trackAnimation(image.animate(
          [
            { scale: '1.025' },
            { scale: '1' },
          ],
          {
            duration: 600,
            delay: immediate ? 30 : 0,
            easing: EASE,
            fill: 'both',
          }
        ));
        finishClean(imageAnimation, image, ['scale']);
      }
    };

    const playHero = (root) => {
      if (!root || root.dataset.mbhHeroPlayed === 'true') return;
      root.dataset.mbhHeroPlayed = 'true';

      const parts = Array.from(root.children).filter((child) => child.matches(HERO_PARTS));

      parts.forEach((element) => {
        const isHeadline = element.matches('h1');
        const delay = heroDelay(element);
        const from = isHeadline
          ? { opacity: 0, translate: '0 18px', clipPath: 'inset(0 0 20% 0)' }
          : { opacity: 0, translate: '0 16px' };
        const to = isHeadline
          ? { opacity: 1, translate: '0 0', clipPath: 'inset(0 0 0 0)' }
          : { opacity: 1, translate: '0 0' };

        const animation = trackAnimation(element.animate([from, to], {
          duration: isHeadline ? 500 : 450,
          delay,
          easing: EASE,
          fill: 'both',
        }));

        finishClean(animation, element, isHeadline
          ? ['opacity', 'translate', 'clipPath']
          : ['opacity', 'translate']
        );
      });
    };

    const makeObservers = () => {
      if (mediaQuery.matches) return;

      revealObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          revealObserver.unobserve(entry.target);
          playReveal(entry.target);
        });
      }, {
        threshold: 0.12,
        rootMargin: '0px 0px -10% 0px',
      });

      mediaObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          mediaObserver.unobserve(entry.target);
          playMedia(entry.target);
        });
      }, {
        threshold: 0.12,
        rootMargin: '0px 0px -8% 0px',
      });
    };

    const prepareReveal = (element) => {
      if (
        !element ||
        element.dataset.mbhMotionManaged === 'true' ||
        element.closest('.desireHero, .manufacturerHeroArt, .whyHero, .buyerHero, .pageHero')
      ) return;

      element.dataset.mbhMotionManaged = 'true';

      if (mediaQuery.matches) return;

      const rect = element.getBoundingClientRect();
      if (rect.top < window.innerHeight * 0.92 && rect.bottom > 0) {
        playReveal(element);
        return;
      }

      element.style.opacity = '0';
      element.style.translate = '0 16px';
      pendingReveal.add(element);
      revealObserver?.observe(element);
    };

    const prepareMedia = (element) => {
      if (!element || element.dataset.mbhMediaManaged === 'true') return;
      element.dataset.mbhMediaManaged = 'true';

      if (mediaQuery.matches) return;

      const isHeroMedia = Boolean(element.closest('.desireHero, .manufacturerHeroArt, .whyHero'));
      if (isHeroMedia) {
        playMedia(element, true);
        return;
      }

      const rect = element.getBoundingClientRect();
      if (rect.top < window.innerHeight * 0.92 && rect.bottom > 0) {
        playMedia(element);
        return;
      }

      element.style.opacity = '0';
      element.style.clipPath = 'inset(0 0 18% 0)';
      pendingMedia.add(element);
      mediaObserver?.observe(element);
    };

    const enhance = (scope = document) => {
      if (!(scope instanceof Document || scope instanceof Element)) return;

      const heroRoots = scope.matches?.(HERO_ROOTS)
        ? [scope]
        : Array.from(scope.querySelectorAll(HERO_ROOTS));
      heroRoots.forEach((root) => {
        if (!mediaQuery.matches) playHero(root);
      });

      const groups = scope.matches?.(REVEAL_GROUPS)
        ? [scope]
        : Array.from(scope.querySelectorAll(REVEAL_GROUPS));
      groups.forEach(prepareReveal);

      const media = scope.matches?.(EDITORIAL_MEDIA)
        ? [scope]
        : Array.from(scope.querySelectorAll(EDITORIAL_MEDIA));
      media.forEach(prepareMedia);

      const links = scope.matches?.('a[href]')
        ? [scope]
        : Array.from(scope.querySelectorAll('a[href]'));
      links.forEach((link) => {
        if ((link.textContent || '').includes('→')) {
          link.dataset.mbhArrowLink = 'true';
        }
      });
    };

    const revealEverything = () => {
      revealObserver?.disconnect();
      mediaObserver?.disconnect();

      pendingReveal.forEach((element) => {
        element.style.opacity = '';
        element.style.translate = '';
      });
      pendingMedia.forEach((element) => {
        element.style.opacity = '';
        element.style.clipPath = '';
      });
      pendingReveal.clear();
      pendingMedia.clear();

      activeAnimations.forEach((animation) => animation.cancel());
      activeAnimations.clear();
    };

    makeObservers();
    enhance(document);

    const mutationObserver = new MutationObserver((mutations) => {
      if (mediaQuery.matches) return;
      mutations.forEach((mutation) => {
        mutation.addedNodes.forEach((node) => {
          if (node instanceof Element) enhance(node);
        });
      });
    });

    mutationObserver.observe(document.body, { childList: true, subtree: true });

    const handleMotionPreference = (event) => {
      if (event.matches) {
        revealEverything();
      } else {
        makeObservers();
        enhance(document);
      }
    };

    mediaQuery.addEventListener?.('change', handleMotionPreference);

    return () => {
      mutationObserver.disconnect();
      revealObserver?.disconnect();
      mediaObserver?.disconnect();
      mediaQuery.removeEventListener?.('change', handleMotionPreference);
      revealEverything();
    };
  }, []);

  return null;
}
