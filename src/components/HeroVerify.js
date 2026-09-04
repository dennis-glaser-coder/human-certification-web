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
        <span>VERIFIZIERUNGS-PROTOTYP</span>
        <span>PUBLIC REGISTER</span>
      </div>

      <div className="heroVerifyBody">
        <div className="heroVerifyKicker">BEISPIEL-DATENSATZ</div>
        <h2>Zertifizierung verifizieren.</h2>
        <p>So soll später über eine eindeutige Zertifizierungs-ID öffentlich geprüft werden können, welcher Datensatz zu einem Produkt gehört.</p>

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
        <strong>GEPLANTE ÖFFENTLICHE INFORMATIONEN</strong>
        <span>Hersteller · Produkt · Standard · Status · Gültigkeit · Historie</span>
      </div>
    </aside>
  );
}
