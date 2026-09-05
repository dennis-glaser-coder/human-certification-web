'use client';

import { useEffect, useState } from 'react';
import { QRCodeSVG } from 'qrcode.react';

export default function CertificationQr({ publicId }) {
  const [url, setUrl] = useState('');

  useEffect(() => {
    if (!publicId) return;
    const base = process.env.GITHUB_PAGES === 'true' ? '/human-certification-web' : '';
    setUrl(`${window.location.origin}${base}/c/${encodeURIComponent(publicId)}`);
  }, [publicId]);

  if (!url) return null;

  return (
    <div className="certificateQr">
      <div className="certificateQrCode">
        <QRCodeSVG
          value={url}
          size={154}
          level="M"
          bgColor="#FFFFFF"
          fgColor="#111820"
          title={`Zertifizierung ${publicId} prüfen`}
        />
      </div>
      <div className="certificateQrCopy">
        <span>QR-VERIFIZIERUNG</span>
        <strong>Direkt zum öffentlichen Datensatz</strong>
        <p>Der QR-Code verweist ausschließlich auf diesen Zertifizierungsdatensatz.</p>
        <a href={url}>{url.replace(/^https?:\/\//, '')}</a>
      </div>
    </div>
  );
}
