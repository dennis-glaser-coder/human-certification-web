'use client';

import { useEffect, useState } from 'react';
import { QRCodeSVG } from 'qrcode.react';

export default function CertificationQr({ publicId }) {
  const [url, setUrl] = useState('');

  useEffect(() => {
    if (!publicId) return;

    const configuredSite = process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/+$/, '');
    const base = process.env.NEXT_PUBLIC_ASSET_BASE || '';
    const site = configuredSite || `${window.location.origin}${base}`;

    setUrl(`${site}/zertifikat/?id=${encodeURIComponent(publicId)}`);
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
        <span>QR-CODE</span>
        <strong>Direkt zum öffentlichen Registereintrag</strong>
        <p>Der QR-Code führt genau zu diesem Zertifizierungseintrag.</p>
        <a href={url}>{url.replace(/^https?:\/\//, '')}</a>
      </div>
    </div>
  );
}
