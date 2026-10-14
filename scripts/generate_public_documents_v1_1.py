from reportlab.lib.pagesizes import A4
from reportlab.lib.units import mm
from reportlab.lib.styles import ParagraphStyle
from reportlab.platypus import SimpleDocTemplate, Spacer, PageBreak, Paragraph

from generate_public_documents import OUT, P, ST, callout, criteria_table, title_block, header_footer


SCHEME_STYLES = {
    **ST,
    'h1': ParagraphStyle('schemeHeading', parent=ST['h1'], fontSize=16, leading=20, spaceBefore=9, spaceAfter=6, keepWithNext=True),
    'body': ParagraphStyle('schemeBody', parent=ST['body'], leading=12.5, spaceAfter=5),
}


def scheme_p(text, style='body'):
    return Paragraph(text, SCHEME_STYLES[style])


def version_footer(canvas, doc, doc_id, short_title, status):
    header_footer(canvas, doc, doc_id, short_title, status)
    canvas.saveState()
    canvas.setFont('Helvetica', 6.2)
    canvas.drawRightString(A4[0] - 18*mm, 10.5*mm, f'Seite {doc.page}')
    canvas.restoreState()


def build_standard_v1():
    path = OUT / 'made-by-human-standard-1-1.pdf'
    doc = SimpleDocTemplate(str(path), pagesize=A4, rightMargin=18*mm, leftMargin=18*mm, topMargin=20*mm, bottomMargin=16*mm, title='Made by Human Standard 1.1', author='Made by Human')
    story = []
    story += title_block('Standard 1.1', 'Verbindliche Kriterien für nachweisbar menschliche Herstellung physischer Produkte.', 'MBH-STD-1.1', 'Veröffentlicht', [
        ('Version', '1.1'), ('Stand', '14.10.2026'), ('Geltungsbereich', 'Aufgenommene physische Produkte'), ('Dokumentstatus', 'Veröffentlicht')
    ])
    story += [P('1  Zweck und Aussagegrenze', 'h1'), P('Der Standard beschreibt, wann menschliche Arbeit ein physisches Produkt so wesentlich prägt und ausreichend belegt ist, dass es mit Made by Human zertifiziert werden kann.'), P('Die Zertifizierung bezieht sich ausschließlich auf die menschliche Herstellung innerhalb des festgelegten Zertifizierungsumfangs. Sie ist keine Aussage zu Herkunftsland, Nachhaltigkeit, Bio- oder Fairtrade-Eigenschaften, allgemeiner Produktqualität, Produktsicherheit, gesetzlicher Konformität oder Unternehmensgröße.')]
    story += [P('2  Geltungsbereich', 'h1'), P('Geprüft wird ein klar benanntes physisches Produkt oder eine klar benannte Produktfamilie mit den dazugehörigen wesentlichen Herstellungsprozessen, Produktionsorten und relevanter Fremdfertigung.'), P('Lebensmittel, Arzneimittel und Medizinprodukte werden in Version 1.1 nicht aufgenommen. Weitere Produktkategorien können vor Annahme eines Antrags ausgeschlossen werden, wenn eine Verwechslungsgefahr mit gesetzlich vorgeschriebenen Sicherheits- oder Konformitätsprüfungen besteht.')]
    story += [P('3  Produktfamilien', 'h1'), P('Mehrere Varianten dürfen nur dann in einem Zertifizierungsumfang zusammengefasst werden, wenn ihre wesentlichen produktprägenden Herstellungsschritte, der Automatisierungsgrad, die maßgeblichen Produktionsorte und die relevante Fremdfertigung im Wesentlichen übereinstimmen. Abweichende Herstellungswege müssen gesondert bewertet werden.')]
    story += [P('4  Produktprägende Herstellungsschritte', 'h1'), P('Produktprägend sind Herstellungsschritte, die Form, Konstruktion, Funktion, Oberfläche, individuelle Ausführung oder eine andere wesentliche Eigenschaft des verkaufsfertigen Produkts erzeugen oder wesentlich verändern.'), P('Reines Verpacken, Etikettieren, Kommissionieren, Kontrollieren oder ein nur geringfügiges Finish reicht allein nicht aus.')]
    story += [P('5  Prüfkriterien', 'h1'), criteria_table([
        ('1', 'Produktentstehung', 'Durch menschliche Arbeit entsteht aus Materialien oder Komponenten das verkaufsfertige Endprodukt.'),
        ('2', 'Menschliche Ausführung', 'Die wesentlichen produktprägenden Herstellungsschritte werden tatsächlich unmittelbar durch Menschen ausgeführt oder in ihrer konkreten Ausführung durch menschliche Entscheidungen bestimmt.'),
        ('3', 'Menschliche Prägung', 'Bei den wesentlichen Schritten beeinflussen unmittelbare menschliche Ausführung, Können oder Urteil das Ergebnis. Bloßes Starten, Überwachen oder Entnehmen aus einem ansonsten autonomen Prozess genügt nicht.'),
        ('4', 'Automatisierungsgrenze', 'Technik und Maschinen dürfen unterstützen. Eine weitgehend autonome Produktentstehung erfüllt den Standard nicht.'),
        ('5', 'Rückverfolgbarkeit', 'Produktionsorte, Zulieferer und wichtige externe Fertigung müssen eindeutig zum zertifizierten Umfang zugeordnet werden können.'),
        ('6', 'Nachweisbarkeit', 'Angaben zur Herstellung müssen durch geeignete Informationen, Unterlagen und die Vor-Ort-Prüfung ausreichend belegt sein.')
    ])]
    story += [P('6  Bestehensregel', 'h1'), P('Eine reguläre Zertifizierung wird nur erteilt, wenn alle für den konkreten Zertifizierungsumfang anwendbaren Muss-Kriterien erfüllt sind und keine Ausschlussbedingung vorliegt. Sind die menschlichen Tätigkeiten für die Entstehung des verkaufsfertigen Produkts nur untergeordnet, erfüllt das Produkt den Standard nicht.')]
    story += [P('7  Entscheidungsregel', 'h1'), callout('Kerntest', 'Würde ohne die menschlichen Herstellungsschritte bereits im Wesentlichen dasselbe verkaufsfertige Produkt vorliegen?'), Spacer(1, 4*mm), P('Wird diese Frage mit Ja beantwortet und fehlt eine andere wesentliche menschliche Prägung der Produktentstehung, erfüllt das Produkt den Standard nicht.')]
    story += [PageBreak(), P('8  Nachweise und Vor-Ort-Prüfung', 'h1'), P('Eine reine Selbstauskunft reicht nicht aus. Geeignete Belege können Prozessbeschreibungen, Produktionsunterlagen, Angaben zu Standorten und Fremdfertigung, Bild- und Videonachweise sowie weitere geeignete Unterlagen sein.'), P('Die Angaben werden mit einer Vor-Ort-Prüfung des maßgeblichen Herstellungsprozesses abgeglichen. Wesentliche ausgelagerte Schritte werden in die Bewertung einbezogen; bei Bedarf sind zusätzliche Nachweise oder eine Prüfung am externen Produktionsort erforderlich.')]
    story += [P('9  Gültigkeit und Verlängerung', 'h1'), P('Eine positive reguläre Zertifizierung gilt grundsätzlich zwölf Monate ab Ausstellungsdatum. Vor einer Verlängerung erfolgt eine erneute Bewertung. Art und Umfang richten sich nach Änderungen, dem bisherigen Prüfverlauf und offenen Feststellungen. Ein vollständiges Vor-Ort-Audit ist nicht automatisch jährlich erforderlich, kann aber verlangt werden.')]
    story += [P('10  Änderungen während der Gültigkeit', 'h1'), P('Wesentliche Änderungen an Herstellungsschritten, Automatisierungsgrad, Produktionsorten, Fremdfertigung oder Zertifizierungsumfang müssen Made by Human unverzüglich gemeldet werden. Made by Human entscheidet über Fortbestand, Nachprüfung, Erweiterung oder eine erforderliche Aussetzung.')]
    story += [P('11  Zertifizierung verbundener Unternehmen', 'h1'), P('Auch Produkte des Systeminhabers und von Unternehmen unter gemeinsamer rechtlicher oder wirtschaftlicher Kontrolle können regulär zertifiziert werden. Eine wirtschaftliche, gesellschaftsrechtliche oder personelle Verbindung ist für sich genommen kein Ausschlussgrund. Es gelten dieselben Anforderungen an Herstellung, Nachweise, Vor-Ort-Prüfung, Fachprüfung und Zertifizierungsentscheidung. Die Verbindung wird im öffentlichen Register offengelegt; die Zertifizierung wird nicht als unabhängige Drittprüfung dargestellt. Bei positiver Entscheidung und aktivem Status darf das Zeichen für den zertifizierten Umfang genutzt werden.'), P('Eine Pilotprüfung dient ausschließlich der Erprobung des Standards oder Prüfprozesses, solange keine reguläre Zertifizierungsentscheidung vorliegt. Sie berechtigt nicht zur Zeichennutzung. Eine Unternehmensverbindung allein begründet keinen Pilotstatus. Bestehende Pilotprüfungen werden nicht automatisch in aktive Zertifizierungen umgewandelt.')]
    story += [P('12  Status und Markennutzung', 'h1'), P('Nur eine aktive reguläre Zertifizierung berechtigt zur Nutzung des Made by Human Zeichens für den ausdrücklich zertifizierten Umfang. Eine Pilotprüfung sowie eine ausgesetzte, abgelaufene oder widerrufene Zertifizierung berechtigen nicht zur Zeichennutzung.')]
    story += [P('13  Versionen und Änderungen', 'h1'), P('Version 1.1 erlaubt die reguläre Zertifizierung verbundener Unternehmen mit öffentlicher Offenlegung. Version 1.0 bleibt im Archiv erhalten. Änderungen an Geltungsbereich, Kriterien, Beleganforderungen oder Entscheidungsregeln werden versioniert. Die frühere Fassung 0.1 bleibt als historische Vorabfassung auffindbar.')]
    doc.build(story, onFirstPage=lambda c,d: version_footer(c,d,'MBH-STD-1.1','Standard','Version 1.1 · Veröffentlicht'), onLaterPages=lambda c,d: version_footer(c,d,'MBH-STD-1.1','Standard','Version 1.1 · Veröffentlicht'))


def build_scheme_v1():
    path = OUT / 'made-by-human-certification-scheme-1-1.pdf'
    doc = SimpleDocTemplate(str(path), pagesize=A4, rightMargin=18*mm, leftMargin=18*mm, topMargin=20*mm, bottomMargin=16*mm, title='Made by Human Zertifizierungsschema 1.1', author='Made by Human')
    story = []
    story += title_block('Zertifizierungsschema 1.1', 'Regelwerk für Antrag, Prüfung, Entscheidung, Gültigkeit, Überwachung, Register und Markennutzung.', 'MBH-SCH-1.1', 'Veröffentlicht', [
        ('Version', '1.1'), ('Stand', '14.10.2026'), ('Bezug', 'Made by Human Standard 1.1'), ('Dokumentstatus', 'Veröffentlicht')
    ])
    story += [scheme_p('1  Zweck', 'h1'), scheme_p('Das Zertifizierungsschema beschreibt, wie Made by Human Standard 1.1 angewendet wird. Es regelt Antrag, Festlegung des Zertifizierungsumfangs, Prüfung, fachliche Kontrolle, Entscheidung, Gültigkeit, Änderungen, Verlängerung, Register und Zeichennutzung.')]
    story += [scheme_p('2  Rollen und Entscheidungstrennung', 'h1')]
    for name, text in [('Systeminhaber','verantwortet Standard, Marke, Dokumente, Register und Systemregeln.'), ('Prüfung','prüft Produkt und Herstellungsprozess und hält Feststellungen und Belege fest.'), ('Fachprüfung','kontrolliert Vollständigkeit und fachliche Schlüssigkeit des Prüfergebnisses.'), ('Zertifizierungsentscheidung','entscheidet über Freigabe, Ablehnung, Aussetzung, Verlängerung oder Widerruf; bei regulären Zertifizierungen entscheidet nicht allein die Person, die die maßgebliche Vor-Ort-Prüfung durchgeführt hat.'), ('Öffentliches Register','zeigt den veröffentlichten Zertifizierungsumfang und aktuellen Status.')]:
        story.append(scheme_p(f'<b>{name}:</b> {text}'))
    story += [scheme_p('3  Kompetenz', 'h1'), scheme_p('Prüfung, Fachprüfung und Entscheidung werden Personen zugewiesen, deren Kenntnisse und Erfahrung für den jeweiligen Produkt- und Herstellungsprozess ausreichend sind. Wenn spezielles Fachwissen erforderlich ist, wird zusätzliche interne oder externe Fachkompetenz einbezogen und dokumentiert.')]
    story += [scheme_p('4  Ablauf', 'h1'), criteria_table([
        ('1','Anfrage und Umfang','Produkt oder Produktfamilie, Produktionsorte und wesentliche Fremdfertigung festlegen.'),
        ('2','Herstellung erfassen','Wesentliche Herstellungsschritte und Automatisierungsgrad erfassen.'),
        ('3','Nachweise und Vor-Ort-Prüfung','Unterlagen mit der tatsächlichen Produktion abgleichen.'),
        ('4','Bewertung','Alle anwendbaren Muss-Kriterien des Standards bewerten.'),
        ('5','Fachprüfung','Prüfergebnis kontrollieren und offene Punkte klären.'),
        ('6','Entscheidung und Register','Entscheidung dokumentieren und bei Freigabe einer regulären Zertifizierung den aktiven Status veröffentlichen.')
    ])]
    story += [scheme_p('5  Gültigkeit und Überwachung', 'h1'), scheme_p('Eine positive reguläre Zertifizierung gilt grundsätzlich zwölf Monate ab Ausstellungsdatum. Vor der Verlängerung erfolgt eine erneute Bewertung. Ein vollständiges jährliches Vor-Ort-Audit ist nicht automatisch erforderlich, kann aber je nach Änderungen oder bisherigen Feststellungen verlangt werden.')]
    story += [scheme_p('6  Änderungspflicht', 'h1'), scheme_p('Wesentliche Änderungen an Produkt, Herstellungsschritten, Automatisierungsgrad, Produktionsorten oder Fremdfertigung müssen unverzüglich gemeldet werden. Made by Human bewertet die Auswirkungen und entscheidet über Fortbestand, Nachprüfung, Erweiterung oder Aussetzung.')]
    story += [scheme_p('7  Status regulärer Zertifizierungen', 'h1')]
    for name, text in [('Aktiv','Zertifizierung ist innerhalb des veröffentlichten Umfangs und Zeitraums gültig.'), ('Ausgesetzt','Zeichennutzung ist bis zur Klärung vorübergehend nicht zulässig.'), ('Abgelaufen','Gültigkeitszeitraum ist beendet und nicht verlängert.'), ('Widerrufen','Zertifizierung ist beendet; die Zeichennutzung ist nicht mehr zulässig.')]:
        story.append(scheme_p(f'<b>{name}:</b> {text}'))
    story += [scheme_p('8  Zertifizierung verbundener Unternehmen', 'h1'), scheme_p('Auch Produkte des Systeminhabers und von Unternehmen unter gemeinsamer rechtlicher oder wirtschaftlicher Kontrolle können regulär zertifiziert werden. Eine wirtschaftliche, gesellschaftsrechtliche oder personelle Verbindung ist für sich genommen kein Ausschlussgrund. Es gelten dieselben Anforderungen an Herstellung, Nachweise, Vor-Ort-Prüfung, Fachprüfung und Zertifizierungsentscheidung. Die Verbindung wird im öffentlichen Register offengelegt; die Zertifizierung wird nicht als unabhängige Drittprüfung dargestellt. Bei positiver Entscheidung und aktivem Status darf das Zeichen für den zertifizierten Umfang genutzt werden.'), scheme_p('Eine Pilotprüfung dient ausschließlich der Erprobung des Standards oder Prüfprozesses, solange keine reguläre Zertifizierungsentscheidung vorliegt. Sie berechtigt nicht zur Zeichennutzung. Eine Unternehmensverbindung allein begründet keinen Pilotstatus. Bestehende Pilotprüfungen werden nicht automatisch in aktive Zertifizierungen umgewandelt.')]
    story += [scheme_p('9  Beschwerden, Einsprüche und Zeichenmissbrauch', 'h1'), scheme_p('Beschwerden, Einsprüche gegen Entscheidungen und unberechtigte Zeichennutzung werden getrennt erfasst, auf mögliche Interessenkonflikte geprüft, bewertet und mit Ergebnis dokumentiert. Ein Einspruch wird nicht allein von der Person abschließend beurteilt, die die angefochtene Entscheidung getroffen hat.')]
    story += [scheme_p('10  Öffentliches Register und Markennutzung', 'h1'), scheme_p('Reguläre Zertifizierungen und Pilotprüfungen werden im Register klar voneinander unterschieden. Das Zertifizierungszeichen darf nur bei aktivem Status einer regulären Zertifizierung und nur für den zertifizierten Umfang verwendet werden. Made by Human behauptet keine Akkreditierung, solange diese Eigenschaft nicht tatsächlich besteht und belegt werden kann.')]
    doc.build(story, onFirstPage=lambda c,d: version_footer(c,d,'MBH-SCH-1.1','Zertifizierungsschema','Version 1.1 · Veröffentlicht'), onLaterPages=lambda c,d: version_footer(c,d,'MBH-SCH-1.1','Zertifizierungsschema','Version 1.1 · Veröffentlicht'))


if __name__ == '__main__':
    build_standard_v1()
    build_scheme_v1()
