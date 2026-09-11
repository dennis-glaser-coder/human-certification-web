import IndustryCertificationPage from '../../../components/IndustryCertificationPage';
import { canonical, SOCIAL_IMAGE } from '../../../lib/seo';

export const metadata = {
  title: 'Schmuck zertifizieren lassen | Made by Human',
  description: 'Zertifizierung für handgefertigten Schmuck: Made by Human prüft produktprägende menschliche Arbeitsschritte, Herstellungsprozess und Nachweise.',
  alternates: { canonical: canonical('/zertifizierung/schmuck') },
  openGraph: { title: 'Schmuck zertifizieren lassen | Made by Human', description: 'Zertifizierung für handgefertigten Schmuck und nachweisbar menschliche Herstellung.', url: canonical('/zertifizierung/schmuck'), images: [SOCIAL_IMAGE] },
};

const processSteps = [
  ['Formgebung & Bearbeitung', 'Relevant können Sägen, Feilen, Biegen, Schmieden, Gießen mit manueller Weiterbearbeitung oder vergleichbare prägende Schritte sein.'],
  ['Fassen, Löten & Montieren', 'Geprüft wird, welche Verbindungen, Fassungen und Montageschritte tatsächlich durch Menschen ausgeführt werden.'],
  ['Oberfläche & Finish', 'Polieren, Mattieren, Gravieren, Strukturieren oder andere Finish-Schritte können den Charakter des fertigen Schmuckstücks wesentlich prägen.'],
];

const proofPoints = [
  ['01', 'Produkt und Serie festlegen', 'Einzelstück, Kollektion oder klar definierte Produktfamilie werden für die Prüfung abgegrenzt.'],
  ['02', 'Werkstattprozess dokumentieren', 'Arbeitsschritte, Werkzeuge, Maschinen, Produktionsorte und mögliche externe Fertigung werden nachvollziehbar erfasst.'],
  ['03', 'Nachweise bewerten', 'Geeignete Unterlagen, Prozessaufnahmen oder weitere Belege werden dem Zertifizierungsumfang zugeordnet.'],
];

const faq = [
  ['Kann handgefertigter Schmuck zertifiziert werden?', 'Ja, wenn die wesentlichen produktprägenden Herstellungsschritte durch Menschen ausgeführt und nachvollziehbar belegt werden können.'],
  ['Sind Maschinen in der Schmuckherstellung erlaubt?', 'Ja. Werkzeuge und Maschinen dürfen unterstützen. Entscheidend ist, ob die wesentlichen produktprägenden Schritte weiterhin durch Menschen ausgeführt werden.'],
  ['Kann eine ganze Schmuckkollektion zertifiziert werden?', 'Eine klar abgegrenzte Produktfamilie kann grundsätzlich gemeinsam betrachtet werden, wenn Herstellungsprozess und Zertifizierungsumfang ausreichend einheitlich und nachvollziehbar sind.'],
];

export default function Page() {
  return <IndustryCertificationPage slug="schmuck" eyebrow="SCHMUCK · GOLDSCHMIEDE · ACCESSOIRES" title="Handgefertigten Schmuck nachvollziehbar zertifizieren." lead="Made by Human macht sichtbar, wenn menschliche Arbeit den Charakter eines Schmuckstücks wesentlich prägt. Geprüft werden der konkrete Herstellungsprozess, die relevanten Arbeitsschritte und geeignete Nachweise." industryName="Schmuck" processSteps={processSteps} proofPoints={proofPoints} faq={faq} />;
}
