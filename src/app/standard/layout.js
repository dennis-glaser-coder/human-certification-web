import { canonical } from '../../lib/seo';

export const metadata = {
  title: 'Standard für menschlich gefertigte Produkte',
  description:
    'Kriterien und Abgrenzungen für physische Produkte, deren wesentliche Herstellungsschritte nachweislich durch Menschen ausgeführt werden.',
  alternates: {
    canonical: canonical('/standard'),
  },
  openGraph: {
    title: 'Standard für menschlich gefertigte Produkte | Made by Humans',
    description:
      'Kriterien, Nachweise und Abgrenzungen für die Zertifizierung menschlich gefertigter physischer Produkte.',
    url: canonical('/standard'),
  },
};

export default function StandardLayout({ children }) {
  return children;
}
