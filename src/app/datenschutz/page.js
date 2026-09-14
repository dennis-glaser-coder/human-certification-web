import Link from 'next/link';
import SiteHeader from '../../components/SiteHeader';
import SiteFooter from '../../components/SiteFooter';
import { canonical, SOCIAL_IMAGE } from '../../lib/seo';

export const metadata = {
  title: 'Datenschutz',
  description: 'Datenschutzhinweise von Made by Human und der D&G Handels GmbH.',
  alternates: { canonical: canonical('/datenschutz') },
  openGraph: {
    type: 'website',
    locale: 'de_DE',
    siteName: 'Made by Human',
    title: 'Datenschutz | Made by Human',
    description: 'Datenschutzhinweise von Made by Human und der D&G Handels GmbH.',
    url: canonical('/datenschutz'),
    images: [SOCIAL_IMAGE],
  },
};

export default function DatenschutzPage() {
  return (
    <main className="legalPage privacyPage">
      <SiteHeader />

      <section className="pageHero shell legalHero privacyHero">
        <div className="eyebrow">DATENSCHUTZ</div>
        <h1>Wie wir mit personenbezogenen Daten umgehen.</h1>
        <p className="lead">
          Wir verarbeiten nur Daten, die für den Betrieb der Website, das öffentliche Register
          oder die Bearbeitung einer Zertifizierungsanfrage gebraucht werden.
        </p>
        <p className="legalStatus">Stand: 14.09.2026</p>
      </section>

      <section className="shell privacyContent">
        <section className="privacySection">
          <span>01 · VERANTWORTLICHER</span>
          <h2>Wer für die Datenverarbeitung verantwortlich ist.</h2>
          <div className="privacyContactCard">
            <strong>D&G Handels GmbH</strong>
            <address>
              Hohenloher Weg 44<br />
              33102 Paderborn<br />
              Deutschland
            </address>
            <dl>
              <div><dt>E-Mail</dt><dd><a href="mailto:info@madebyhuman.org">info@madebyhuman.org</a></dd></div>
              <div><dt>Telefon</dt><dd><a href="tel:+49525154491922">05251 / 54491922</a></dd></div>
            </dl>
            <Link href="/impressum">Zum Impressum →</Link>
          </div>
          <p>
            Datenschutzbezogene Anliegen können per E-Mail, telefonisch oder schriftlich an die oben
            genannten Kontaktdaten gerichtet werden.
          </p>
        </section>

        <section className="privacySection">
          <span>02 · BESUCH DER WEBSITE</span>
          <h2>Technische Daten beim Aufruf der Website.</h2>
          <p>
            Die Website wird derzeit über GitHub Pages ausgeliefert. Beim Aufruf einer GitHub-Pages-Seite
            protokolliert GitHub nach eigener Dokumentation die IP-Adresse des Besuchers zu Sicherheitszwecken.
            Weitere technisch notwendige Verbindungsdaten können im Rahmen der Bereitstellung und Absicherung
            des Dienstes verarbeitet werden.
          </p>
          <div className="privacyFacts">
            <div><strong>Zweck</strong><p>Sichere und zuverlässige Auslieferung der Website.</p></div>
            <div><strong>Rechtsgrundlage</strong><p>Art. 6 Abs. 1 lit. f DSGVO.</p></div>
            <div><strong>Berechtigtes Interesse</strong><p>Betrieb, Stabilität und Schutz der Website vor Missbrauch und Angriffen.</p></div>
            <div><strong>Empfänger</strong><p>GitHub, Inc. bzw. die von GitHub eingesetzten Unternehmen und Dienstleister.</p></div>
          </div>
          <p>
            GitHub verarbeitet Daten auch außerhalb der Europäischen Union. GitHub erklärt, für Übermittlungen
            aus der EU unter anderem das EU-U.S. Data Privacy Framework und Standardvertragsklauseln der
            Europäischen Kommission zu nutzen. Eigene Server-Logdateien führen wir auf dieser Website nicht.
          </p>
          <p className="privacySourceLine">
            Weitere Informationen:
            {' '}
            <a href="https://docs.github.com/en/pages/getting-started-with-github-pages/what-is-github-pages" target="_blank" rel="noreferrer">GitHub Pages</a>
            {' · '}
            <a href="https://docs.github.com/en/site-policy/privacy-policies/github-general-privacy-statement" target="_blank" rel="noreferrer">GitHub Privacy Statement</a>
          </p>
        </section>

        <section className="privacySection">
          <span>03 · ÖFFENTLICHES REGISTER</span>
          <h2>Register und Prüfung einer Zertifizierungs-ID.</h2>
          <p>
            Das öffentliche Register und die Prüfung einer Zertifizierungs-ID greifen auf unser
            Supabase-Backend zu. Dabei wird eine technische Verbindung zu Supabase aufgebaut.
            Für die Nutzung der Registersuche müssen Besucher keine Kontaktdaten eingeben.
          </p>
          <p>
            Öffentlich angezeigt werden nur Informationen, die zum jeweiligen Zertifizierungsdatensatz
            gehören, zum Beispiel Hersteller, Produkt oder Produktfamilie, Produktionsorte,
            Standardfassung, Zertifizierungs-ID, Status und Gültigkeit. Kontaktdaten aus einer
            Zertifizierungsanfrage werden nicht über das öffentliche Register bereitgestellt.
          </p>
          <div className="privacyFacts">
            <div><strong>Zweck</strong><p>Öffentliche Prüfbarkeit einer Zertifizierung und ihres aktuellen Status.</p></div>
            <div><strong>Rechtsgrundlage für Besucherzugriffe</strong><p>Art. 6 Abs. 1 lit. f DSGVO.</p></div>
            <div><strong>Berechtigtes Interesse</strong><p>Transparenz und überprüfbare Nutzung des Zertifizierungszeichens.</p></div>
            <div><strong>Empfänger</strong><p>Supabase, Inc. als technischer Dienstleister.</p></div>
          </div>
          <p>
            Soweit veröffentlichte Hersteller- oder Standortangaben im Einzelfall personenbezogen sind,
            erfolgt die Veröffentlichung im Rahmen der Zertifizierung zur transparenten und eindeutigen
            Zuordnung des Zeichens. Rechtsgrundlage ist je nach Einzelfall Art. 6 Abs. 1 lit. b DSGVO
            und/oder Art. 6 Abs. 1 lit. f DSGVO.
          </p>
        </section>

        <section className="privacySection">
          <span>04 · ZERTIFIZIERUNGSANFRAGE</span>
          <h2>Welche Daten wir über das Anfrageformular erhalten.</h2>
          <p>
            Wenn Sie eine Zertifizierungsanfrage senden, verarbeiten wir die Angaben, die Sie im Formular
            eintragen. Pflichtangaben sind Unternehmen, Ansprechpartner, E-Mail-Adresse, Produkt oder
            Produktfamilie, Produktionsorte und eine kurze Beschreibung des Herstellungsprozesses.
            Optional können Website, Produktkategorie, Angaben zu externer Fertigung und vorhandenen
            Belegen ergänzt werden.
          </p>
          <div className="privacyFacts">
            <div><strong>Zweck</strong><p>Prüfung und Bearbeitung Ihrer Zertifizierungsanfrage sowie Vorbereitung weiterer Schritte.</p></div>
            <div><strong>Rechtsgrundlage</strong><p>Art. 6 Abs. 1 lit. b DSGVO, soweit vorvertragliche Maßnahmen betroffen sind; im geschäftlichen Kontakt ergänzend Art. 6 Abs. 1 lit. f DSGVO.</p></div>
            <div><strong>Berechtigtes Interesse</strong><p>Bearbeitung geschäftlicher Anfragen und Zuordnung zu Unternehmen und Produkt.</p></div>
            <div><strong>Empfänger</strong><p>D&G Handels GmbH und Supabase, Inc. als technischer Auftragsverarbeiter.</p></div>
          </div>
          <p>
            Die Formulardaten werden nicht öffentlich angezeigt. Die für die Website verwendete
            Datenbank ist so konfiguriert, dass öffentliche Besucher Zertifizierungsanfragen absenden,
            aber nicht auslesen können.
          </p>
          <p>
            Wir speichern Anfragedaten nur so lange, wie sie für die Bearbeitung, eine mögliche
            anschließende Geschäfts- oder Zertifizierungsbeziehung und gegebenenfalls die
            Geltendmachung oder Abwehr von Rechtsansprüchen benötigt werden. Entstehen gesetzliche
            Aufbewahrungspflichten, kann eine längere Speicherung erforderlich sein.
          </p>
        </section>

        <section className="privacySection">
          <span>05 · SUPABASE</span>
          <h2>Wo Formular- und Registerdaten technisch verarbeitet werden.</h2>
          <p>
            Für Datenbank und öffentliche Registerfunktionen nutzen wir Supabase. Das aktuelle
            Made-by-Human-Projekt ist in der Region Frankfurt am Main
            (<code>eu-central-1</code>) eingerichtet. Nach den Supabase-Unterlagen werden die
            primären Projektdaten eines in einer festen EU-Region angelegten Projekts in dieser
            Region gespeichert.
          </p>
          <p>
            Anbieter ist Supabase, Inc. Supabase stellt für die Verarbeitung im Auftrag ein
            Data Processing Addendum zur Verfügung. Für mögliche internationale Übermittlungen
            sieht dieses unter anderem die Standardvertragsklauseln der Europäischen Kommission vor.
            Supabase kann weitere Unterauftragnehmer für Infrastruktur und Betrieb einsetzen.
          </p>
          <p className="privacySourceLine">
            Weitere Informationen:
            {' '}
            <a href="https://supabase.com/docs/guides/security/gdpr-compliance" target="_blank" rel="noreferrer">Supabase und DSGVO</a>
            {' · '}
            <a href="https://supabase.com/docs/guides/platform/regions" target="_blank" rel="noreferrer">Supabase Regionen</a>
            {' · '}
            <a href="https://supabase.com/legal/dpa" target="_blank" rel="noreferrer">Supabase DPA</a>
          </p>
        </section>

        <section className="privacySection">
          <span>06 · BILDER</span>
          <h2>Produktionsbilder werden lokal über die Website ausgeliefert.</h2>
          <p>
            Die auf der Website verwendeten Produktionsbilder werden aktuell als lokale Dateien
            über unsere Website bereitgestellt. Beim bloßen Aufruf einer Seite wird deshalb keine
            zusätzliche Verbindung zu Unsplash aufgebaut.
          </p>
          <p>
            Externe Quellseiten, die in unserer internen Bilddokumentation genannt werden, werden
            nur aufgerufen, wenn ein Nutzer einen solchen Link ausdrücklich öffnet.
          </p>
        </section>

        <section className="privacySection">
          <span>07 · COOKIES & TRACKING</span>
          <h2>Google Analytics nur nach Ihrer Einwilligung.</h2>
          <p>
            Wir verwenden Google Analytics 4, um zu verstehen, wie unsere Website genutzt wird,
            welche Seiten aufgerufen werden und über welche Kanäle Besucher zu uns gelangen.
            Anbieter für Nutzer im Europäischen Wirtschaftsraum ist Google Ireland Limited.
            Google Analytics wird auf dieser Website erst geladen, wenn Sie im Datenschutz-Dialog
            ausdrücklich in die Statistikmessung einwilligen.
          </p>
          <p>
            Bei aktivierter Statistik können insbesondere Seitenaufrufe, Sitzungsdaten, ungefähre
            Standortinformationen sowie Browser- und Geräteinformationen verarbeitet werden. Google
            Analytics verwendet eigene Cookies wie <code>_ga</code> und <code>_ga_&lt;container-id&gt;</code>,
            um Nutzer und Sitzungen zu unterscheiden. Die Standardlaufzeit dieser Cookies beträgt
            nach Angaben von Google bis zu zwei Jahre und kann durch Browserbeschränkungen verkürzt werden.
          </p>
          <p>
            Für Nutzer in der EU, der Schweiz und dem Vereinigten Königreich werden nach Angaben von Google
            einzelne IP-Adressen nicht in Google Analytics protokolliert oder gespeichert. Die IP-Adresse
            wird dort unter anderem zur Ableitung grober Standortinformationen verwendet und anschließend
            verworfen. Eine Verarbeitung durch Google-Unternehmen und Dienstleister kann auch außerhalb
            der Europäischen Union stattfinden.
          </p>
          <div className="privacyFacts">
            <div><strong>Zweck</strong><p>Reichweitenmessung, Analyse der Website-Nutzung und Verbesserung unseres Angebots.</p></div>
            <div><strong>Rechtsgrundlage</strong><p>Ihre Einwilligung nach Art. 6 Abs. 1 lit. a DSGVO; soweit Informationen auf Ihrem Endgerät gespeichert oder ausgelesen werden, zusätzlich § 25 Abs. 1 TDDDG.</p></div>
            <div><strong>Empfänger</strong><p>Google Ireland Limited sowie verbundene Unternehmen und von Google eingesetzte Dienstleister.</p></div>
            <div><strong>Widerruf</strong><p>Sie können Ihre Auswahl jederzeit über „Datenschutz-Einstellungen“ am unteren Seitenrand ändern.</p></div>
          </div>
          <p>
            Ohne Einwilligung wird das Google-Analytics-Tag nicht geladen. Wenn Sie eine bereits erteilte
            Einwilligung widerrufen, wird die Statistikmessung für zukünftige Seitenaufrufe deaktiviert.
            Die Rechtmäßigkeit der bis zum Widerruf erfolgten Verarbeitung bleibt unberührt.
          </p>
          <p>
            Unabhängig davon verwenden wir für die Darstellung keine extern nachgeladenen Google-Fonts im Browser;
            die verwendeten Schriftdateien werden durch das Website-Build lokal bereitgestellt. Ein Meta Pixel
            oder vergleichbares Marketing-Tracking setzen wir derzeit nicht ein.
          </p>
          <p className="privacySourceLine">
            Weitere Informationen:
            {' '}
            <a href="https://support.google.com/analytics/answer/12017362?hl=de" target="_blank" rel="noreferrer">Google Analytics: Daten und Datenschutz in der EU</a>
            {' · '}
            <a href="https://support.google.com/analytics/answer/11397207?hl=de" target="_blank" rel="noreferrer">Google Analytics: Cookies</a>
            {' · '}
            <a href="https://policies.google.com/privacy?hl=de" target="_blank" rel="noreferrer">Google Datenschutzerklärung</a>
          </p>
        </section>

        <section className="privacySection">
          <span>08 · SPEICHERDAUER</span>
          <h2>Wir speichern Daten nicht länger als nötig.</h2>
          <p>
            Für personenbezogene Daten gilt grundsätzlich: Wir löschen oder anonymisieren sie,
            sobald der jeweilige Zweck entfällt und keine gesetzlichen Aufbewahrungspflichten oder
            überwiegenden Gründe für eine weitere Speicherung bestehen.
          </p>
          <p>
            Öffentliche Zertifizierungs- und Statusinformationen können auch nach Ablauf, Aussetzung
            oder Widerruf einer Zertifizierung weiter im Register sichtbar bleiben, soweit dies für
            die Nachvollziehbarkeit des Zertifizierungsstatus erforderlich und rechtlich zulässig ist.
            Dabei veröffentlichen wir nur die für die Zertifizierung erforderlichen Angaben.
          </p>
        </section>

        <section className="privacySection">
          <span>09 · IHRE RECHTE</span>
          <h2>Welche Datenschutzrechte Sie haben.</h2>
          <p>Nach Maßgabe der DSGVO können Ihnen insbesondere folgende Rechte zustehen:</p>
          <ul className="privacyRights">
            <li>Auskunft über die zu Ihrer Person verarbeiteten Daten nach Art. 15 DSGVO,</li>
            <li>Berichtigung unrichtiger Daten nach Art. 16 DSGVO,</li>
            <li>Löschung nach Art. 17 DSGVO,</li>
            <li>Einschränkung der Verarbeitung nach Art. 18 DSGVO,</li>
            <li>Datenübertragbarkeit nach Art. 20 DSGVO, soweit die gesetzlichen Voraussetzungen vorliegen,</li>
            <li>Widerspruch gegen Verarbeitungen auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO nach Art. 21 DSGVO.</li>
          </ul>
          <p>
            Soweit eine Verarbeitung auf einer Einwilligung beruht, kann diese Einwilligung
            jederzeit mit Wirkung für die Zukunft widerrufen werden.
          </p>
          <p>
            Eine ausschließlich automatisierte Entscheidung mit rechtlicher oder vergleichbar erheblicher
            Wirkung findet über diese Website nicht statt. Zertifizierungsentscheidungen werden nicht
            allein automatisiert getroffen.
          </p>
        </section>

        <section className="privacySection">
          <span>10 · BESCHWERDERECHT</span>
          <h2>Sie können sich an eine Datenschutzaufsichtsbehörde wenden.</h2>
          <p>
            Wenn Sie der Ansicht sind, dass die Verarbeitung Ihrer personenbezogenen Daten gegen
            Datenschutzrecht verstößt, haben Sie das Recht, sich bei einer Datenschutzaufsichtsbehörde
            zu beschweren. Für den Sitz der D&G Handels GmbH ist insbesondere folgende Behörde zuständig:
          </p>
          <div className="privacyContactCard compact">
            <strong>Landesbeauftragte für Datenschutz und Informationsfreiheit Nordrhein-Westfalen</strong>
            <address>
              Kavalleriestraße 2–4<br />
              40213 Düsseldorf<br />
              Deutschland
            </address>
            <p>E-Mail: poststelle@ldi.nrw.de</p>
          </div>
        </section>

        <section className="privacySection">
          <span>11 · SICHERHEIT</span>
          <h2>Schutz der Daten.</h2>
          <p>
            Wir setzen technische und organisatorische Maßnahmen ein, um personenbezogene Daten
            vor Verlust, unbefugtem Zugriff und unzulässiger Veränderung zu schützen. Die Übertragung
            der Website und der eingesetzten Backend-Dienste erfolgt verschlüsselt über HTTPS.
          </p>
          <p>
            Der Zugriff auf nicht öffentliche Anfragedaten ist nicht für Besucher der Website freigegeben.
            Die öffentlich abrufbaren Registerdaten sind davon technisch getrennt.
          </p>
        </section>

        <section className="privacySection privacyClosing">
          <span>12 · ÄNDERUNGEN</span>
          <h2>Diese Hinweise werden mit der Website weiterentwickelt.</h2>
          <p>
            Wenn sich Hosting, eingesetzte Dienstleister, Formulare, Tracking oder andere
            Datenverarbeitungen ändern, passen wir diese Datenschutzhinweise entsprechend an.
            Maßgeblich ist die jeweils auf dieser Seite veröffentlichte Fassung.
          </p>
        </section>
      </section>

      <SiteFooter />
    </main>
  );
}
