import CertificateClient from './CertificateClient';

export function generateStaticParams() {
  return [
    { id: 'HC-DEMO-0001' },
  ];
}

export default async function PublicCertificatePage({ params }) {
  const { id } = await params;
  return <CertificateClient id={decodeURIComponent(id).toUpperCase()} />;
}
