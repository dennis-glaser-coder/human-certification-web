import './globals.css';

export const metadata = {
  title: {
    default: 'Human Certification — Standardprojekt',
    template: '%s · Human Certification',
  },
  description: 'Ein unabhängiges Standardprojekt für nachvollziehbar menschlich gefertigte physische Produkte.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="de">
      <body>{children}</body>
    </html>
  );
}
