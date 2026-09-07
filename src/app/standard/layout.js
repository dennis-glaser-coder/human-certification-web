import { canonical } from '../../lib/seo';

export const metadata = {
  title: 'Standard für menschliche Herstellung',
  description:
    'Kriterien, Geltungsbereich, Nachweise und Entscheidungsregeln des Made by Human Standards für nachweisbar menschlich gefertigte physische Produkte.',
  alternates: {
    canonical: canonical('/standard'),
  },
  openGraph: {
    title: 'Standard | Made by Human',
    description:
      'Der öffentliche Made by Human Standard mit Kriterien, Abgrenzungen und Entscheidungsregeln.',
    url: canonical('/standard'),
  },
};

export default function StandardLayout({ children }) {
  return children;
}
