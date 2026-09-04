import './globals.css';

export const metadata = {
  title: {
    default: 'Made by Humans — Standard für menschliche Herstellung',
    template: '%s · Made by Humans',
  },
  description: 'Standard in Entwicklung für physische Produkte, deren wesentliche Herstellungsschritte nachweislich von Menschen ausgeführt werden.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="de">
      <body>{children}</body>
    </html>
  );
}
