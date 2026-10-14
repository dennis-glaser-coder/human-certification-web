# Zertifizierungen nach Standard 1.1 anlegen

Produkte eigener und verbundener Unternehmen können nach Standard und Zertifizierungsschema 1.1 regulär zertifiziert werden. Die Kriterien, Nachweise, Vor-Ort-Prüfung, Fachprüfung und dokumentierte Zertifizierungsentscheidung bleiben erforderlich.

## Daten und Kontext

Die Registerdaten liegen im bestehenden Supabase-Projekt `human-certification`. Neue Einträge werden über einen autorisierten Verwaltungszugang angelegt; die öffentliche Website erhält keine Schreibberechtigung.

1. Hersteller beziehungsweise Marke unter `manufacturers` anlegen. Einen abweichenden rechtlichen Betreiber in `legal_name` eintragen.
2. Das Produkt oder die eindeutig abgegrenzte Produktfamilie unter `products` dem Hersteller zuordnen.
3. Unter `certifications` das Produkt und die tatsächlich angewandte Fassung aus `standard_versions` referenzieren. Die IDs aus den vorhandenen Datensätzen übernehmen.
4. Umfang und Produktionsorte dokumentieren. Eine eindeutige reale `public_id` nach dem internen Vergabeverfahren verwenden; `HC-DEMO-0001` bleibt ausschließlich ein Beispiel.
5. Bei verbundenen Unternehmen `certification_context = connected_standard` setzen und die konkrete Verbindung in `relationship_disclosure` beschreiben. Ohne Offenlegung weist die Datenbank den Eintrag zurück.
6. Den Bearbeitungsstand zunächst mit `draft` beziehungsweise `under_review` führen. Erst nach positiver dokumentierter Entscheidung den Status `active` mit Ausstellungs- und Gültigkeitsdatum setzen. Der regelmäßige Gültigkeitszeitraum beträgt zwölf Monate.
7. Die Entscheidung und spätere Statusänderungen unter `certification_events` dokumentieren. Nur ausdrücklich zur Veröffentlichung geeignete Inhalte als öffentlich markieren.

`standard` bezeichnet eine reguläre Bewertung ohne besonderen verbundenen Kontext. Der Status `pilot` ist für eine Erprobung ohne reguläre Zertifizierungsentscheidung vorgesehen. `connected_pilot` bleibt für historische verbundene Pilotfälle erhalten und erlaubt keinen aktiven Status. Eine spätere reguläre Zertifizierung erfordert eine neue dokumentierte Entscheidung; bestehende Pilotfälle werden nicht automatisch umgestellt.

## Öffentlicher Nachweis

Der dauerhafte Nachweislink lautet `https://madebyhuman.org/zertifikat/?id=` gefolgt von der URL-kodierten tatsächlichen Register-ID. Hersteller, rechtlicher Betreiber soweit abweichend, Produktumfang, Produktionsorte, Standardfassung, Status, Gültigkeit und die Verbindung sind öffentlich einsehbar. Der QR-Code verwendet den vorhandenen Nachweisweg.

Nach der Veröffentlichung den Eintrag im deutschen und englischen Register sowie über die ID-Prüfung kontrollieren. Das Siegel darf erst bei einer aktiven regulären Zertifizierung für den benannten Umfang genutzt werden. Interne Prüfunterlagen und personenbezogene Angaben gehören nicht in öffentliche Notizfelder.
