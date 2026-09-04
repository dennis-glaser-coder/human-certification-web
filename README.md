# Human Certification Web

Neutraler technischer Arbeitstitel für das Siegelprojekt. Der finale Markenname kann später ohne grundlegenden Umbau ersetzt werden.

## Stack
- Next.js
- React
- Supabase

## Bereiche
- Startseite
- Standard
- Für Hersteller
- Öffentliches Zertifizierungsregister / Siegel prüfen
- Supabase-Datenmodell für Hersteller, Produkte, Standards und Zertifizierungen

## Lokal starten
1. `.env.example` nach `.env.local` kopieren.
2. Supabase URL und Publishable Key eintragen.
3. `npm install`
4. `npm run dev`

## Supabase
Das bestehende Projekt `human-certification` enthält die Tabellen:
- `standard_versions`
- `manufacturers`
- `products`
- `certifications`

RLS ist aktiviert. Die Initialstruktur liegt zusätzlich unter `supabase/migrations/` und ist damit im Repository dokumentiert.
