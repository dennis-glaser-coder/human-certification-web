import IndustryCertificationPage from '../../../components/IndustryCertificationPage';
import { canonical, SOCIAL_IMAGE } from '../../../lib/seo';

export const metadata = {
  title: 'Textilien zertifizieren lassen | Made by Human',
  description: 'Zertifizierung für Textilien und Bekleidung mit nachweisbar menschlich ausgeführten, produktprägenden Herstellungsschritten.',
  alternates: { canonical: canonical('/zertifizierung/textilien') },
  openGraph: { title: 'Textilien zertifizieren lassen | Made by Human', description: 'Zertifizierung für textile Produkte und menschlich geprägte Herstellung.', url: canonical('/zertifizierung/textilien'), images: [SOCIAL_IMAGE] },
};

const processSteps = [
  ['Zuschnitt & Vorbereitung', 'Geprüft werden kann, wie Stoffe, Schnittteile und weitere Komponenten für das konkrete Produkt vorbereitet werden.'],
  ['Nähen, Stricken & Montage', 'Wesentlich ist, welche Fertigungs- und Verbindungsschritte tatsächlich durch Menschen ausgeführt werden.'],
  ['Veredelung & Finish', 'Besticken, Bedrucken, Waschen, Ausrüsten oder andere Veredelungen können den Charakter des fertigen Produkts wesentlich prägen.'],
];

const proofPoints = [
  ['01', 'Produkt oder Kollektion abgrenzen', 'Das konkrete Produkt oder eine nachvollziehbar einheitliche Produktfamilie wird für die Prüfung festgelegt.'],
  ['02', 'Produktionsorte erfassen', 'Eigene Fertigung und externe Produktionsschritte werden mit den jeweiligen Standorten dokumentiert.'],
  ['03', 'Arbeitsschritte belegen', 'Geeignete Unterlagen und Prozessnachweise zeigen, welche wesentlichen Schritte tatsächlich menschlich ausgeführt werden.'],
];

const faq = [
  ['Kann Bekleidung zertifiziert werden?', 'Ja, wenn der Herstellungsprozess des konkreten Produkts nachvollziehbar dokumentiert ist und die wesentlichen produktprägenden Schritte durch Menschen ausgeführt werden.'],
  ['Ist eine Nähmaschine erlaubt?', 'Ja. Technische Hilfsmittel und Maschinen können eingesetzt werden. Entscheidend ist, wie der wesentliche Fertigungsprozess tatsächlich ausgeführt wird.'],
  ['Kann eine ganze Kollektion zertifiziert werden?', 'Das kann möglich sein, wenn die Produkte einen ausreichend einheitlichen Herstellungsprozess haben und der Zertifizierungsumfang klar abgegrenzt werden kann.'],
];

export default function Page() {
  return <IndustryCertificationPage slug="textilien" eyebrow="TEXTILIEN · BEKLEIDUNG · MODE" title="Textilien und Bekleidung nachvollziehbar zertifizieren." lead="Made by Human macht sichtbar, wenn Menschen die wesentlichen Fertigungs- und Veredelungsschritte eines textilen Produkts ausführen. Geprüft werden Produktumfang, Produktionsorte, Herstellungsprozess und geeignete Nachweise." industryName="Textilien" processSteps={processSteps} proofPoints={proofPoints} faq={faq} />;
}
