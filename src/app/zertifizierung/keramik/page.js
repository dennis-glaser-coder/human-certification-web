import IndustryCertificationPage from '../../../components/IndustryCertificationPage';
import { canonical, SOCIAL_IMAGE } from '../../../lib/seo';

export const metadata = {
  title: 'Keramik zertifizieren lassen | Made by Human',
  description: 'Zertifizierung für Keramik und handgefertigte Keramikprodukte mit nachweisbar menschlich ausgeführten, produktprägenden Herstellungsschritten.',
  alternates: { canonical: canonical('/zertifizierung/keramik') },
  openGraph: { title: 'Keramik zertifizieren lassen | Made by Human', description: 'Zertifizierung für handgefertigte Keramik und menschlich geprägte Herstellung.', url: canonical('/zertifizierung/keramik'), images: [SOCIAL_IMAGE] },
};

const processSteps = [
  ['Formgebung', 'Drehen, Aufbauen, Gießen mit manueller Weiterbearbeitung oder andere Formgebungsverfahren können den Charakter des Produkts wesentlich prägen.'],
  ['Bearbeitung & Dekor', 'Abdrehen, Schneiden, Ansetzen, Bemalen, Glasieren und vergleichbare Schritte werden im konkreten Herstellungsprozess betrachtet.'],
  ['Brennen & Finish', 'Technische Brennprozesse schließen eine Zertifizierung nicht aus. Entscheidend ist, welche wesentlichen produktprägenden Schritte Menschen tatsächlich ausführen.'],
];

const proofPoints = [
  ['01', 'Produkt oder Serie festlegen', 'Gefäß, Geschirr, Dekorationsobjekt oder klar abgegrenzte Produktfamilie werden für die Prüfung definiert.'],
  ['02', 'Werkstattprozess dokumentieren', 'Formgebung, Bearbeitung, Dekor, Brennprozess, Produktionsorte und mögliche externe Schritte werden erfasst.'],
  ['03', 'Menschliche Arbeit belegen', 'Geeignete Prozessnachweise zeigen, welche wesentlichen Schritte tatsächlich durch Menschen ausgeführt werden.'],
];

const faq = [
  ['Kann handgedrehte Keramik zertifiziert werden?', 'Ja, wenn die wesentlichen Herstellungsschritte des konkreten Produkts nachvollziehbar menschlich ausgeführt und dokumentiert werden.'],
  ['Ist ein Brennofen erlaubt?', 'Ja. Technische Prozesse wie das Brennen können Teil der Herstellung sein. Entscheidend ist die Rolle des Menschen bei den wesentlichen produktprägenden Arbeitsschritten.'],
  ['Kann eine Geschirrserie gemeinsam zertifiziert werden?', 'Das kann möglich sein, wenn Herstellungsprozess und Produktfamilie ausreichend einheitlich sind und der Zertifizierungsumfang klar abgegrenzt werden kann.'],
];

export default function Page() {
  return <IndustryCertificationPage slug="keramik" eyebrow="KERAMIK · TÖPFEREI · DEKORATION" title="Handgefertigte Keramik nachvollziehbar zertifizieren." lead="Formgebung, Bearbeitung und Dekor machen menschliche Arbeit bei Keramik häufig unmittelbar sichtbar. Made by Human prüft den konkreten Herstellungsprozess, die wesentlichen Arbeitsschritte und geeignete Nachweise." industryName="Keramik" processSteps={processSteps} proofPoints={proofPoints} faq={faq} />;
}
