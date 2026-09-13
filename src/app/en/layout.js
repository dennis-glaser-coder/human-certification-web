import { canonical, SOCIAL_IMAGE } from '../../lib/seo';

export const metadata = {
  title: {
    default: 'Made by Human | Certification for human production',
    template: '%s | Made by Human',
  },
  description: 'Made by Human verifies whether the defining production steps of a physical product are actually carried out by people. On-site verification, a clear standard and a public register.',
  alternates: {
    canonical: canonical('/en'),
    languages: {
      'de-DE': canonical('/'),
      en: canonical('/en'),
      'x-default': canonical('/'),
    },
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    siteName: 'Made by Human',
    title: 'Made by Human | Certification for human production',
    description: 'On-site verification for physical products whose defining production steps are carried out by people.',
    url: canonical('/en'),
    images: [SOCIAL_IMAGE],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Made by Human | Certification for human production',
    description: 'On-site verification for physical products whose defining production steps are carried out by people.',
    images: [SOCIAL_IMAGE],
  },
};

export default function EnglishLayout({ children }) {
  return children;
}
