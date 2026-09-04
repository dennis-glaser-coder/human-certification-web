import { canonical } from '../../lib/seo';

export const metadata = {
  title: 'Zertifizierung für Hersteller',
  description:
    'Informationen für Hersteller, Manufakturen und Marken, die physische Produkte und ihre Herstellungsprozesse zur Validierung des Made by Humans Standards vorstellen möchten.',
  alternates: {
    canonical: canonical('/fuer-hersteller'),
  },
  openGraph: {
    title: 'Zertifizierung für Hersteller | Made by Humans',
    description:
      'Herstellungsprozess, Nachweise und Prüfablauf für physische Produkte mit wesentlicher menschlicher Fertigung.',
    url: canonical('/fuer-hersteller'),
  },
};

export default function ManufacturerLayout({ children }) {
  return children;
}
