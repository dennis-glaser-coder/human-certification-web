import { canonical } from '../../lib/seo';

export const metadata = {
  title: 'Transparenz & Governance',
  description:
    'Grundsätze für Standardversionen, Prüfung, Zertifizierungsentscheidung, Statusänderungen, Markennutzung und öffentliche Verifizierung bei Made by Humans.',
  alternates: {
    canonical: canonical('/transparenz'),
  },
  openGraph: {
    title: 'Transparenz & Governance | Made by Humans',
    description:
      'Regeln und Zuständigkeiten hinter Standard, Prüfung, Register und Markennutzung.',
    url: canonical('/transparenz'),
  },
};

export default function TransparencyLayout({ children }) {
  return children;
}
