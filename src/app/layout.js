import './globals.css';
import { canonical, DEFAULT_DESCRIPTION, SITE_NAME, SITE_URL } from '../lib/seo';

export const metadata = {
  metadataBase: new URL(SITE_URL + '/'),
  title: {
    default: 'Made by Humans | Zertifizierung für menschliche Herstellung',
    template: '%s | Made by Humans',
  },
  description: DEFAULT_DESCRIPTION,
  applicationName: SITE_NAME,
  alternates: {
    canonical: canonical('/'),
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'de_DE',
    url: canonical('/'),
    siteName: SITE_NAME,
    title: 'Made by Humans | Zertifizierung für menschliche Herstellung',
    description: DEFAULT_DESCRIPTION,
    images: [
      {
        url: canonical('/brand/made-by-humans-seal.png'),
        alt: 'Made by Humans Zertifizierungszeichen',
      },
    ],
  },
  twitter: {
    card: 'summary',
    title: 'Made by Humans | Zertifizierung für menschliche Herstellung',
    description: DEFAULT_DESCRIPTION,
    images: [canonical('/brand/made-by-humans-seal.png')],
  },
  icons: {
    icon: canonical('/brand/made-by-humans-seal.png'),
    apple: canonical('/brand/made-by-humans-seal.png'),
  },
};

const websiteJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: SITE_NAME,
  url: canonical('/'),
  description: DEFAULT_DESCRIPTION,
  inLanguage: 'de-DE',
};

export default function RootLayout({ children }) {
  return (
    <html lang="de">
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd).replace(/</g, '\\u003c') }}
        />
        {children}
      </body>
    </html>
  );
}
