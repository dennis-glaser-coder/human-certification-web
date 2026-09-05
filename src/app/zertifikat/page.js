'use client';

import { useEffect, useState } from 'react';
import CertificateClient from '../c/[id]/CertificateClient';

export default function CertificateLookupPage() {
  const [id, setId] = useState(null);

  useEffect(() => {
    const value = new URLSearchParams(window.location.search).get('id');
    setId(value ? value.toUpperCase() : '');
  }, []);

  if (id === null) return null;
  return <CertificateClient id={id} />;
}
