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
    <aside className="heroVerify" aria-label="Zertifizierung prüfen">
      <div className="heroVerifyHeader">
        <span>ZERTIFIZIERUNG PRÜFEN</span>
        <span>PUBLIC REGISTER</span>
      </div>

      <div className="heroVerifyBody">
        <h2>Ist ein Produkt wirklich zertifiziert?</h2>
        <p>Jede öffentliche Zertifizierung kann über ihre eindeutige ID überprüft werden.</p>

        <form onSubmit={submit} className="heroVerifyForm">
          <label htmlFor="hero-certificate-id">Zertifizierungs-ID</label>
          <div>
            <input
              id="hero-certificate-id"
              value={value}
              onChange={(event) => setValue(event.target.value)}
              placeholder="z. B. HC-DEMO-0001"
              autoComplete="off"
            />
            <button type="submit">Prüfen</button>
          </div>
        </form>

        <Link className="heroDemoLink" href="/c/HC-DEMO-0001">
          Demo-Datensatz ansehen →
        </Link>
      </div>

      <div className="heroVerifyFooter">
        <strong>ÖFFENTLICH SICHTBAR</strong>
        <span>Hersteller · Produkt · Standard · Status · Gültigkeit · Historie</span>
      </div>
    </aside>
  );
}
