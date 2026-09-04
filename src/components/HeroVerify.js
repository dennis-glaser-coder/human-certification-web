'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

export default function HeroVerify() {
  const [value, setValue] = useState('');
  const router = useRouter();

  function submit(event) {
    event.preventDefault();
    const id = value.trim().toUpperCase();
    if (!id) return;
    router.push(`/pruefen?id=${encodeURIComponent(id)}`);
  }

  return (
    <div className="verifyModule">
      <div className="verifyModuleHead">
        <strong>ZERTIFIZIERUNGS-ID PRÜFEN</strong>
        <span>PUBLIC REGISTER</span>
      </div>

      <form onSubmit={submit} className="verifyModuleForm">
        <label htmlFor="hero-certificate-id">ID eingeben</label>
        <div>
          <input
            id="hero-certificate-id"
            value={value}
            onChange={(event) => setValue(event.target.value)}
            placeholder="Zertifizierungs-ID"
            autoComplete="off"
          />
          <button type="submit">Prüfen</button>
        </div>
      </form>

      <div className="verifyModuleFoot">
        <span>Öffentliche Verifizierung über eindeutige Zertifizierungs-ID.</span>
        <Link href="/register">Zum Register →</Link>
      </div>
    </div>
  );
}
