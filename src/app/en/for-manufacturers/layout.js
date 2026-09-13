import { canonical, SOCIAL_IMAGE } from '../../../lib/seo';

export const metadata = {
  title: 'Certification for manufacturers',
  description: 'Request Made by Human certification for a physical product whose defining production steps are carried out by people.',
  alternates: {
    canonical: canonical('/en/for-manufacturers'),
    languages: { 'de-DE': canonical('/fuer-hersteller'), en: canonical('/en/for-manufacturers') },
  },
  openGraph: {
    title: 'Certification for manufacturers | Made by Human',
    description: 'On-site verification and a public certification record for qualifying physical products.',
    url: canonical('/en/for-manufacturers'),
    images: [SOCIAL_IMAGE],
  },
};

export default function Layout({ children }) {
  return children;
}
