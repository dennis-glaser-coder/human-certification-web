import { canonical } from '../../../lib/seo';

export const metadata = {
  title: 'Public register',
  description: 'Check Made by Human certifications publicly by certification ID, manufacturer or product.',
  alternates: {
    canonical: canonical('/en/register'),
    languages: { 'de-DE': canonical('/register'), en: canonical('/en/register') },
  },
};

export default function Layout({ children }) {
  return children;
}
