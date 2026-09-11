import IndustryCertificationPage from '../../../components/IndustryCertificationPage';
import { canonical, SOCIAL_IMAGE } from '../../../lib/seo';

export const metadata = {
  title: 'Holz & Möbel zertifizieren lassen | Made by Human',
  description: 'Zertifizierung für Möbel und Holzprodukte mit nachweisbar menschlich geprägten Herstellungsschritten.',
  alternates: { canonical: canonical('/zertifizierung/holz-moebel') },
  openGraph: { title: 'Holz & Möbel zertifizieren lassen | Made by Human', description: 'Zertifizierung für Möbel, Tischlerarbeiten und handwerklich geprägte Holzprodukte.', url: canonical('/zertifizierung/holz-moebel'), images: [SOCIAL_IMAGE] },
};

const processSteps = [
  ['Zuschnitt & Formgebung', 'Bearbeitungsschritte wie Sägen, Fräsen oder Drechseln können relevant sein, wenn Menschen den Prozess und das Ergebnis unmittelbar prägen.'],
  ['Verbindungen & Montage', 'Geprüft werden zum Beispiel Fügen, Verleimen, Verschrauben und Montagearbeiten, die das fertige Produkt wesentlich bestimmen.'],
  ['Schleifen & Oberfläche', 'Schleifen, Ölen, Wachsen, Lackieren und andere Oberflächenarbeiten können wesentliche menschliche Herstellungsschritte sein.'],
];

const proofPoints = [
  ['01', 'Produktumfang definieren', 'Möbelstück, Serie oder Produktfamilie werden eindeutig vom übrigen Sortiment abgegrenzt.'],
  ['02', 'Fertigung dokumentieren', 'Werkstatt, Maschinen, Handarbeit, externe Fertigung und Produktionsorte werden nachvollziehbar erfasst.'],
  ['03', 'Prägende Schritte bewerten', 'Entscheidend ist, ob Menschen die wesentlichen produktprägenden Schritte tatsächlich ausführen.'],
];

const faq = [
  ['Sind Maschinen bei der Möbelherstellung erlaubt?', 'Ja. Maschinelle Unterstützung kann zulässig sein. Entscheidend ist, welche Schritte das Produkt prägen und wie Menschen diese tatsächlich ausführen.'],
  ['Sind auch kleinere Holzprodukte geeignet?', 'Ja. Auch andere physische Holzprodukte können geprüft werden, wenn der Herstellungsprozess klar dokumentiert werden kann.'],
  ['Kann eine Möbelserie gemeinsam zertifiziert werden?', 'Das kann möglich sein, wenn die Produkte einen ausreichend einheitlichen Herstellungsprozess haben und die Produktfamilie klar abgegrenzt werden kann.'],
];

export default function Page() {
  return <IndustryCertificationPage slug="holz-moebel" eyebrow="HOLZ · MÖBEL · TISCHLEREI" title="Handgefertigte Möbel und Holzprodukte zertifizieren." lead="Bei Möbeln und Holzprodukten kann menschliche Arbeit vom Zuschnitt bis zum Finish prägend sein. Made by Human prüft, welche wesentlichen Schritte tatsächlich durch Menschen ausgeführt werden und wie der Prozess belegt wird." industryName="Holz & Möbel" processSteps={processSteps} proofPoints={proofPoints} faq={faq} />;
}
