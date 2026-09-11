import IndustryCertificationPage from '../../../components/IndustryCertificationPage';
import { canonical, SOCIAL_IMAGE } from '../../../lib/seo';

export const metadata = {
  title: 'Lederwaren zertifizieren lassen | Made by Human',
  description: 'Zertifizierung für Taschen und Lederwaren mit nachweisbar menschlich ausgeführten, produktprägenden Herstellungsschritten.',
  alternates: { canonical: canonical('/zertifizierung/lederwaren') },
  openGraph: { title: 'Lederwaren zertifizieren lassen | Made by Human', description: 'Zertifizierung für Taschen, Kleinlederwaren und menschlich geprägte Herstellung.', url: canonical('/zertifizierung/lederwaren'), images: [SOCIAL_IMAGE] },
};

const processSteps = [
  ['Zuschnitt & Vorbereitung', 'Relevant ist, wie Leder, Futter und weitere Komponenten vorbereitet und für das konkrete Produkt zugeschnitten werden.'],
  ['Nähen & Fügen', 'Geprüft wird, welche Näh-, Klebe-, Falz-, Kanten- und Montageschritte tatsächlich durch Menschen ausgeführt werden.'],
  ['Kanten & Finish', 'Färben, Polieren, Prägen, Versiegeln und weitere Finish-Schritte können den Charakter des fertigen Produkts wesentlich bestimmen.'],
];

const proofPoints = [
  ['01', 'Produktumfang festlegen', 'Tasche, Accessoire oder klar abgegrenzte Produktfamilie werden für die Prüfung definiert.'],
  ['02', 'Herstellungsprozess dokumentieren', 'Werkstatt, Produktionsorte, externe Fertigung und die wesentlichen Arbeitsschritte werden nachvollziehbar erfasst.'],
  ['03', 'Nachweise zuordnen', 'Geeignete Unterlagen und Prozessnachweise werden dem konkret zertifizierten Produkt zugeordnet.'],
];

const faq = [
  ['Können handgefertigte Taschen zertifiziert werden?', 'Ja, wenn die wesentlichen produktprägenden Herstellungsschritte durch Menschen ausgeführt und nachvollziehbar dokumentiert werden können.'],
  ['Sind Nähmaschinen und Pressen erlaubt?', 'Ja. Maschinen können die menschliche Arbeit unterstützen. Entscheidend ist, wie die wesentlichen Herstellungsschritte tatsächlich ausgeführt werden.'],
  ['Kann eine Serie von Lederwaren gemeinsam zertifiziert werden?', 'Das kann möglich sein, wenn Herstellungsprozess und Produktfamilie ausreichend einheitlich und klar abgegrenzt sind.'],
];

export default function Page() {
  return <IndustryCertificationPage slug="lederwaren" eyebrow="LEDERWAREN · TASCHEN · ACCESSOIRES" title="Handgefertigte Lederwaren nachvollziehbar zertifizieren." lead="Bei Taschen und Lederwaren prägen Zuschnitt, Fügen, Nähen und Finish häufig den Charakter des Produkts. Made by Human prüft diese wesentlichen Arbeitsschritte, den konkreten Herstellungsprozess und geeignete Nachweise." industryName="Lederwaren" processSteps={processSteps} proofPoints={proofPoints} faq={faq} />;
}
