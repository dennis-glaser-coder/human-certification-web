import { canonical } from '../../lib/seo';

export const metadata = {
  title: 'Öffentliches Register – Zertifizierungen prüfen',
  description:
    'Öffentliches Register für Made by Humans Zertifizierungen. Zertifizierungs-ID, Hersteller, Produkt und aktuellen Status prüfen.',
  alternates: {
    canonical: canonical('/register'),
  },
  openGraph: {
    title: 'Öffentliches Register | Made by Humans',
    description:
      'Öffentliche Zertifizierungsdaten mit ID, Hersteller, Produkt, Standardfassung, Gültigkeit und Status.',
    url: canonical('/register'),
  },
};

export default function RegisterLayout({ children }) {
  return children;
}
