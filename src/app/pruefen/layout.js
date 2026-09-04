import { canonical } from '../../lib/seo';

export const metadata = {
  title: 'Zertifizierungs-ID prüfen',
  description:
    'Made by Humans Zertifizierungs-ID eingeben und den zugehörigen öffentlichen Registereintrag prüfen.',
  alternates: {
    canonical: canonical('/pruefen'),
  },
  openGraph: {
    title: 'Zertifizierungs-ID prüfen | Made by Humans',
    description:
      'Öffentlichen Datensatz einer Made by Humans Kennzeichnung über die Zertifizierungs-ID aufrufen.',
    url: canonical('/pruefen'),
  },
};

export default function VerifyLayout({ children }) {
  return children;
}
