import './globals.css';

export const metadata = {
  title: {
    default: 'Made by Humans — Independent Certification Standard',
    template: '%s · Made by Humans',
  },
  description: 'Ein moderner, überprüfbarer Zertifizierungsstandard für nachvollziehbare menschliche Wertschöpfung.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="de">
      <body>{children}</body>
    </html>
  );
}
