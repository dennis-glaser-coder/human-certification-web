# Human Certification Web

Neutraler technischer Arbeitstitel für das Siegelprojekt. Der finale Markenname und das finale Siegeldesign sind bewusst noch nicht fest im Code verankert.

## Aktueller Stand

### Öffentliche Website
- Premium-Startseite für das Zertifizierungsprojekt
- Standard-Übersicht mit klar gekennzeichneter Arbeitsversion
- Herstellerseite mit Pilot-Interessentenformular
- öffentliches Zertifizierungsregister
- einzelne Zertifizierungs-ID prüfen
- eigene öffentliche Zertifikatsseite unter `/c/[id]`
- öffentliche Status-Historie je Zertifizierung
- vollständig responsive Grundgestaltung

### Supabase
- `standard_versions`
- `manufacturers`
- `products`
- `certifications`
- `manufacturer_interests`
- `certification_events`
- Row Level Security aktiv
- öffentliche Registerdaten lesbar
- Hersteller-Anfragen nur schreibbar, nicht öffentlich lesbar
- technischer Demo-Eintrag: `HC-DEMO-0001`

### Repository
- Datenbankschema unter `supabase/migrations/`
- gepinnte Paketversionen
- `package-lock.json`
- automatische Buildprüfung über GitHub Actions

## Stack
- Next.js 16
- React 19
- Supabase
- GitHub Actions

## Lokal starten
1. `.env.example` nach `.env.local` kopieren.
2. Supabase URL und Publishable Key eintragen.
3. `npm ci`
4. `npm run dev`

## Vor öffentlichem Launch noch offen
- finaler Markenname
- finales Siegel / Logo
- finaler Standardtext und Auditregeln
- endgültige Gesellschaft / Anbieterkennzeichnung
- Impressum und Datenschutzerklärung
- finale Domain und Hosting
- E-Mail-/CRM-Prozess für eingehende Pilotanfragen

## Demo
`HC-DEMO-0001` ist ausschließlich ein technischer Demodatensatz und ausdrücklich keine echte Zertifizierung.
