# Made by Human

Website und technischer Prototyp für das Made by Human Zertifizierungssystem für physische Produkte mit nachweisbar menschlicher Herstellung.

## Aktueller Stand

### Öffentliche Website
- Produktion unter `https://madebyhuman.org`
- HTTPS und Weiterleitung von `www.madebyhuman.org` aktiv
- Markenauftritt Made by Human nach der verbindlichen CI
- Startseite sowie Seiten für Hersteller und Käufer
- öffentlicher Standard und Dokumentenregister
- öffentliches Zertifizierungsregister
- Zertifizierungs-ID prüfen
- öffentliche Zertifikatsansicht
- Status-Historie je Zertifizierung
- Hersteller-Anfrageformular
- Impressum und Datenschutzhinweise
- responsive Darstellung für Desktop und Mobile

### Supabase
- `standard_versions`
- `manufacturers`
- `products`
- `certifications`
- `manufacturer_interests`
- `certification_events`
- Row Level Security aktiv
- öffentliche Registerdaten lesbar
- Hersteller-Anfragen öffentlich nur schreibbar, nicht lesbar
- technischer Demodatensatz: `HC-DEMO-0001`

### SEO / Launch
- Canonicals, Sitemap, Open Graph und QR-Ziele verwenden `https://madebyhuman.org`
- Google-Indexierung ist freigegeben
- Sitemap ist in der Google Search Console eingereicht
- strukturierte Daten für Website und Betreiber sind hinterlegt
- eigener quadratischer Favicon-Asset und Social-Preview-Asset
- lokalisierte WebP-Bilder reduzieren externe Requests und Dateigröße

## Stack
- Next.js 16
- React 19
- Supabase
- GitHub Pages / GitHub Actions

## Lokal starten
1. `.env.example` nach `.env.local` kopieren.
2. Supabase URL und Publishable Key eintragen.
3. `npm ci`
4. `npm run dev`

## Produktionskonfiguration

```env
NEXT_PUBLIC_SITE_URL=https://madebyhuman.org
NEXT_PUBLIC_SITE_INDEXABLE=true
NEXT_PUBLIC_BASE_PATH=
```

## Noch offen
- Herkunft/Nutzungsrecht der lokal übernommenen Bildmotive final dokumentieren oder Motive ersetzen
- vor der ersten echten Zertifizierung interne Zuständigkeiten für Prüfung, Kontrolle und Entscheidung verbindlich dokumentieren

## Demo
`HC-DEMO-0001` ist ausschließlich ein technischer Demodatensatz und ausdrücklich keine echte Zertifizierung.

## Corporate Identity
Die verbindliche Web-CI liegt unter `docs/CI.md`.

Richtung: **Modern Human Standard / Editorial Certification**
