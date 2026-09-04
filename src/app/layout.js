import './globals.css';

export const metadata = {
  title: 'Human Certification — nachweisbar menschlich gefertigt',
  description: 'Ein unabhängiger Standard für nachvollziehbar menschlich gefertigte Produkte.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="de">
      <body>{children}</body>
    </html>
  );
}
