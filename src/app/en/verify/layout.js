import { canonical } from '../../../lib/seo';

export const metadata = {
  title: 'Verify certification',
  description: 'Verify a Made by Human certification ID and view the corresponding public certification data.',
  alternates: {
    canonical: canonical('/en/verify'),
    languages: { 'de-DE': canonical('/pruefen'), en: canonical('/en/verify') },
  },
};

export default function Layout({ children }) {
  return children;
}
