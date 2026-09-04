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
    <aside className="heroVerify" aria-label="Zertifizierung verifizieren">
      <div className="heroVerifyHeader">
        <span>VERIFIZIERUNG</span>
        <span>PUBLIC REGISTER</span>
      </div>

      <div className="heroVerifyBody">
        <div className="heroVerifyKicker">ZERTIFIZIERUNGSSTATUS</div>
        <h2>Zertifizierung verifizieren.</h2>
        <p>Über die eindeutige Zertifizierungs-ID lassen sich Status, Produkt, Hersteller und Gültigkeit öffentlich prüfen.</p>

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
          Beispiel-Datensatz öffnen →
        </Link>
      </div>

      <div className="heroVerifyFooter">
        <strong>ÖFFENTLICH NACHVOLLZIEHBAR</strong>
        <span>Hersteller · Produkt · Standard · Status · Gültigkeit · Historie</span>
      </div>
    </aside>
  );
}
