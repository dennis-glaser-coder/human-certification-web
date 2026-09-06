import { canonical } from '../../lib/seo';

export const metadata = {
  title: 'Transparenz & Integrität',
  description:
    'Rollen, Prüfnachweise, Statusverwaltung, Markennutzung, Beschwerden und Integritätsregeln des Made by Humans Zertifizierungssystems.',
  alternates: {
    canonical: canonical('/transparenz'),
  },
  openGraph: {
    title: 'Transparenz & Integrität | Made by Humans',
    description:
      'Nachvollziehbare Regeln für Prüfung, Zertifizierungsentscheidung, Register und Markennutzung.',
    url: canonical('/transparenz'),
  },
};

export default function TransparencyLayout({ children }) {
  return children;
}
