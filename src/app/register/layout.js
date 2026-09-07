import { canonical, SOCIAL_IMAGE } from '../../lib/seo';

export const metadata = {
  title: 'Öffentliches Register – Zertifizierungen prüfen',
  description:
    'Öffentliches Register für Made by Human Zertifizierungen. Zertifizierungs-ID, Hersteller, Produkt und aktuellen Status prüfen.',
  alternates: {
    canonical: canonical('/register'),
  },
  openGraph: {
    title: 'Öffentliches Register | Made by Human',
    description:
      'Öffentliche Zertifizierungsdaten mit ID, Hersteller, Produkt, Standardfassung, Gültigkeit und Status.',
    url: canonical('/register'),
    images: [SOCIAL_IMAGE],
  },
};

export default function RegisterLayout({ children }) {
  return children;
}
