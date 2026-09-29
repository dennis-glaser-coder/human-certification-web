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
  if (element.matches('.brandTrace')) return '65ms';
  if (element.matches('h1')) return '130ms';
  if (element.matches('.lead, .desireHeroLead, .buyerHeroLead, .whyHeroLead')) return '195ms';
  if (element.matches('.desireHeroActions, .manufacturerHeroActions, .buyerHeroActions, .whyHeroActions, .salesHeroActions')) return '260ms';
  return '0ms';
}

export default function MotionSystem() {
  useEffect(() => {
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
    const prepStyle = document.getElementById('mbh-motion-prep');

    let revealObserver;
    let mediaObserver;
    let mutationObserver;

    const showEverything = () => {
      document.querySelectorAll(
        '.mbh-motion-hero-part, .mbh-motion-reveal, .mbh-motion-media'
      ).forEach((element) => element.classList.add('is-visible'));

      prepStyle?.remove();
    };

    if (reduceMotion.matches) {
      showEverything();
      return undefined;
    }

    revealObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add('is-visible');
        revealObserver.unobserve(entry.target);
      });
    }, {
      threshold: 0.20,
      rootMargin: '0px 0px -12% 0px',
    });

    mediaObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add('is-visible');
        mediaObserver.unobserve(entry.target);
      });
    }, {
      threshold: 0.16,
      rootMargin: '0px 0px -10% 0px',
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

      selectWithin(scope, REVEAL_GROUPS).forEach((element) => {
        if (
          element.dataset.mbhRevealReady === 'true' ||
          element.closest('.desireHero, .manufacturerHeroArt, .whyHero, .buyerHero, .pageHero')
        ) return;

        element.dataset.mbhRevealReady = 'true';
        element.classList.add('mbh-motion-reveal');
        revealObserver.observe(element);
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

    /*
     * The inline preparation style prevents a flash before hydration.
     * Once every initial hero node has its persistent motion class,
     * the temporary style can safely disappear.
     */
    prepStyle?.remove();

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
      if (event.matches) showEverything();
    };

    reduceMotion.addEventListener?.('change', handlePreference);

    return () => {
      revealObserver?.disconnect();
      mediaObserver?.disconnect();
      mutationObserver?.disconnect();
      reduceMotion.removeEventListener?.('change', handlePreference);
      prepStyle?.remove();
    };
  }, []);

  return null;
}
