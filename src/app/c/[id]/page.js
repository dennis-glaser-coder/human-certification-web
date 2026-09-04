import { redirect } from 'next/navigation';

export default async function CertificateShortcut({ params }) {
  const { id } = await params;
  redirect(`/pruefen?id=${encodeURIComponent(id)}`);
}
