import { canonical } from '../../lib/seo';

export const metadata = {
  title: 'Public Register – Zertifizierungen prüfen',
  description:
    'Öffentliches Register für Made by Humans Zertifizierungen. Zertifizierungs-ID, Hersteller, Produkt und aktuellen Status prüfen.',
  alternates: {
    canonical: canonical('/register'),
  },
  openGraph: {
    title: 'Public Register | Made by Humans',
    description:
      'Öffentliche Zertifizierungsdaten mit ID, Hersteller, Produkt und Status.',
    url: canonical('/register'),
  },
};

export default function RegisterLayout({ children }) {
  return children;
}
