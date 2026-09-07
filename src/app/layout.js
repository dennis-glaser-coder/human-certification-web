import { IBM_Plex_Sans, Source_Serif_4 } from 'next/font/google';
import './globals.css';
import './final.css';
import {
  canonical,
  DEFAULT_DESCRIPTION,
  FAVICON_IMAGE,
  LOGO_IMAGE,
  SITE_INDEXABLE,
  SITE_NAME,
  SITE_URL,
  SOCIAL_IMAGE,
} from '../lib/seo';

export const metadata = {
  metadataBase: new URL(SITE_URL + '/'),
  title: {
    default: 'Made by Human | Siegel für menschliche Herstellung',
    template: '%s | Made by Human',
  },
  description: DEFAULT_DESCRIPTION,
  applicationName: SITE_NAME,
  alternates: {
    canonical: canonical('/'),
  },
  robots: {
    index: SITE_INDEXABLE,
    follow: true,
    googleBot: {
      index: SITE_INDEXABLE,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'de_DE',
    url: canonical('/'),
    siteName: SITE_NAME,
    title: 'Made by Human | Siegel für menschliche Herstellung',
    description: DEFAULT_DESCRIPTION,
    images: [
      {
        url: SOCIAL_IMAGE,
        width: 1200,
        height: 630,
        alt: 'Made by Human – Zertifizierung für menschliche Herstellung',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Made by Human | Siegel für menschliche Herstellung',
    description: DEFAULT_DESCRIPTION,
    images: [SOCIAL_IMAGE],
  },
  icons: {
    icon: FAVICON_IMAGE,
    apple: FAVICON_IMAGE,
  },
};

export const viewport = {
  themeColor: '#F3F0E8',
  colorScheme: 'light',
};

const ibmPlexSans = IBM_Plex_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-sans',
  display: 'swap',
});

const sourceSerif = Source_Serif_4({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  variable: '--font-serif',
  display: 'swap',
});

const organizationId = canonical('/') + '#organization';

const organizationJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  '@id': organizationId,
  name: SITE_NAME,
  legalName: 'D&G Handels GmbH',
  url: canonical('/'),
  logo: {
    '@type': 'ImageObject',
    url: LOGO_IMAGE,
  },
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Hohenloher Weg 44',
    postalCode: '33102',
    addressLocality: 'Paderborn',
    addressCountry: 'DE',
  },
  vatID: 'DE335791582',
  identifier: {
    '@type': 'PropertyValue',
    propertyID: 'Handelsregister',
    value: 'Amtsgericht Paderborn · HRB 14807',
  },
};

const websiteJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  '@id': canonical('/') + '#website',
  name: SITE_NAME,
  url: canonical('/'),
  description: DEFAULT_DESCRIPTION,
  inLanguage: 'de-DE',
  publisher: {
    '@id': organizationId,
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="de">
      <body className={`${ibmPlexSans.variable} ${sourceSerif.variable}`}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify([organizationJsonLd, websiteJsonLd]).replace(/</g, '\\u003c') }}
        />
        {children}
      </body>
    </html>
  );
}
