import { IBM_Plex_Sans, Source_Serif_4 } from 'next/font/google';
import './globals.css';
import './final.css';
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
        url: canonical('/brand/IMG_1053.png'),
        alt: 'Made by Humans – Vor-Ort-Prüfung menschlicher Herstellung',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Made by Humans | Zertifizierung für menschliche Herstellung',
    description: DEFAULT_DESCRIPTION,
    images: [canonical('/brand/IMG_1053.png')],
  },
  icons: {
    icon: canonical('/brand/made-by-humans-seal.png'),
    apple: canonical('/brand/made-by-humans-seal.png'),
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
      <body className={`${ibmPlexSans.variable} ${sourceSerif.variable}`}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd).replace(/</g, '\\u003c') }}
        />
        {children}
      </body>
    </html>
  );
}
