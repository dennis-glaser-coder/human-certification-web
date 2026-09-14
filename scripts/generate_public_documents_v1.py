from reportlab.lib.pagesizes import A4
from reportlab.lib.units import mm
from reportlab.platypus import SimpleDocTemplate, Spacer, PageBreak

from generate_public_documents import OUT, P, bullet, callout, criteria_table, title_block, header_footer


def build_standard_v1():
    path = OUT / 'made-by-human-standard-1-0.pdf'
    doc = SimpleDocTemplate(str(path), pagesize=A4, rightMargin=18*mm, leftMargin=18*mm, topMargin=20*mm, bottomMargin=16*mm, title='Made by Human Standard 1.0', author='Made by Human')
    story = []
    story += title_block('Standard 1.0', 'Verbindliche Kriterien für nachweisbar menschliche Herstellung physischer Produkte.', 'MBH-STD-1.0', 'Veröffentlicht', [
        ('Version', '1.0'), ('Stand', '14.09.2026'), ('Geltungsbereich', 'Aufgenommene physische Produkte'), ('Dokumentstatus', 'Veröffentlicht')
    ])
    story += [P('1  Zweck und Aussagegrenze', 'h1'), P('Der Standard beschreibt, wann menschliche Arbeit ein physisches Produkt so wesentlich prägt und ausreichend belegt ist, dass es mit Made by Human zertifiziert werden kann.'), P('Die Zertifizierung bezieht sich ausschließlich auf die menschliche Herstellung innerhalb des festgelegten Zertifizierungsumfangs. Sie ist keine Aussage zu Herkunftsland, Nachhaltigkeit, Bio- oder Fairtrade-Eigenschaften, allgemeiner Produktqualität, Produktsicherheit, gesetzlicher Konformität oder Unternehmensgröße.')]
    story += [P('2  Geltungsbereich', 'h1'), P('Geprüft wird ein klar benanntes physisches Produkt oder eine klar benannte Produktfamilie mit den dazugehörigen wesentlichen Herstellungsprozessen, Produktionsorten und relevanter Fremdfertigung.'), P('Lebensmittel, Arzneimittel, Medizinprodukte und vergleichbar stark regulierte Produktkategorien werden in Version 1.0 nicht aufgenommen.')]
    story += [P('3  Produktprägende Herstellungsschritte', 'h1'), P('Produktprägend sind Herstellungsschritte, die Form, Konstruktion, Funktion, Oberfläche, individuelle Ausführung oder eine andere wesentliche Eigenschaft des verkaufsfertigen Produkts erzeugen oder wesentlich verändern.'), P('Reines Verpacken, Etikettieren, Kommissionieren, Kontrollieren oder ein nur geringfügiges Finish reicht allein nicht aus.')]
    story += [P('4  Prüfkriterien', 'h1'), criteria_table([
        ('1', 'Produktentstehung', 'Durch menschliche Arbeit entsteht aus Materialien oder Komponenten das verkaufsfertige Endprodukt.'),
        ('2', 'Menschliche Ausführung', 'Die wesentlichen produktprägenden Herstellungsschritte werden tatsächlich unmittelbar durch Menschen ausgeführt oder in ihrer konkreten Ausführung durch menschliche Entscheidungen bestimmt.'),
        ('3', 'Fachliche Prägung', 'Relevante Schritte erfordern Erfahrung, Fähigkeit oder bewusste menschliche Entscheidungen.'),
        ('4', 'Automatisierungsgrenze', 'Technik und Maschinen dürfen unterstützen. Eine weitgehend autonome Produktentstehung erfüllt den Standard nicht.'),
        ('5', 'Rückverfolgbarkeit', 'Produktionsorte, Zulieferer und wichtige externe Fertigung müssen eindeutig zum zertifizierten Umfang zugeordnet werden können.'),
        ('6', 'Nachweisbarkeit', 'Angaben zur Herstellung müssen durch geeignete Informationen, Unterlagen und die Vor-Ort-Prüfung ausreichend belegt sein.')
    ])]
    story += [P('5  Bestehensregel', 'h1'), P('Eine Zertifizierung wird nur erteilt, wenn alle für den konkreten Zertifizierungsumfang anwendbaren Muss-Kriterien erfüllt sind und keine Ausschlussbedingung vorliegt. Sind die menschlichen Tätigkeiten für die Entstehung des verkaufsfertigen Produkts nur untergeordnet, erfüllt das Produkt den Standard nicht.')]
    story += [P('6  Entscheidungsregel', 'h1'), callout('Kerntest', 'Würde ohne die menschlichen Herstellungsschritte bereits im Wesentlichen dasselbe verkaufsfertige Produkt vorliegen?'), Spacer(1, 4*mm), P('Wird diese Frage mit Ja beantwortet und fehlt eine andere wesentliche menschliche Prägung der Produktentstehung, erfüllt das Produkt den Standard nicht.')]
    story += [PageBreak(), P('7  Nachweise und Vor-Ort-Prüfung', 'h1'), P('Eine reine Selbstauskunft reicht nicht aus. Geeignete Belege können Prozessbeschreibungen, Produktionsunterlagen, Angaben zu Standorten und Fremdfertigung, Bild- und Videonachweise sowie weitere geeignete Unterlagen sein.'), P('Die Angaben werden mit einer Vor-Ort-Prüfung des maßgeblichen Herstellungsprozesses abgeglichen. Wesentliche ausgelagerte Schritte werden in die Bewertung einbezogen; bei Bedarf sind zusätzliche Nachweise oder eine Prüfung am externen Produktionsort erforderlich.')]
    story += [P('8  Gültigkeit und Verlängerung', 'h1'), P('Eine positive Zertifizierung gilt grundsätzlich zwölf Monate ab Ausstellungsdatum. Vor einer Verlängerung erfolgt eine erneute Bewertung. Art und Umfang richten sich nach Änderungen, dem bisherigen Prüfverlauf und offenen Feststellungen. Ein vollständiges Vor-Ort-Audit ist nicht automatisch jährlich erforderlich, kann aber verlangt werden.')]
    story += [P('9  Änderungen während der Gültigkeit', 'h1'), P('Wesentliche Änderungen an Herstellungsschritten, Automatisierungsgrad, Produktionsorten, Fremdfertigung oder Zertifizierungsumfang müssen Made by Human unverzüglich gemeldet werden. Made by Human entscheidet über Fortbestand, Nachprüfung, Erweiterung oder eine erforderliche Aussetzung.')]
    story += [P('10  Verbundene Unternehmen und Interessenkonflikte', 'h1'), P('Gesellschaftsrechtliche, wirtschaftliche oder personelle Verbindungen zwischen Systeminhaber, an der Prüfung beteiligten Personen und Antragsteller werden dokumentiert. Besteht eine Verbindung zum Systeminhaber, wird sie im öffentlichen Zertifizierungsdatensatz transparent gemacht.'), P('Solche Fälle werden nicht als unabhängige Drittzertifizierung oder als unabhängig zertifiziert bezeichnet. Soweit organisatorisch möglich, werden Prüfung, fachliche Kontrolle und Zertifizierungsentscheidung personell getrennt.')]
    story += [P('11  Status und Markennutzung', 'h1'), P('Nur eine aktive Zertifizierung berechtigt zur Nutzung des Made by Human Zeichens für den ausdrücklich zertifizierten Umfang. Bei Aussetzung, Ablauf oder Widerruf endet die Berechtigung nach Maßgabe der geltenden Markennutzungsregeln.')]
    story += [P('12  Versionen und Änderungen', 'h1'), P('Version 1.0 ist die erste verbindliche Fassung für reale Zertifizierungen. Änderungen an Geltungsbereich, Kriterien, Beleganforderungen oder Entscheidungsregeln werden versioniert. Die frühere Fassung 0.1 bleibt als historische Vorabfassung auffindbar.')]
    doc.build(story, onFirstPage=lambda c,d: header_footer(c,d,'MBH-STD-1.0','Standard','Version 1.0 · Veröffentlicht'), onLaterPages=lambda c,d: header_footer(c,d,'MBH-STD-1.0','Standard','Version 1.0 · Veröffentlicht'))


def build_scheme_v1():
    path = OUT / 'made-by-human-certification-scheme-1-0.pdf'
    doc = SimpleDocTemplate(str(path), pagesize=A4, rightMargin=18*mm, leftMargin=18*mm, topMargin=20*mm, bottomMargin=16*mm, title='Made by Human Zertifizierungsschema 1.0', author='Made by Human')
    story = []
    story += title_block('Zertifizierungsschema 1.0', 'Regelwerk für Antrag, Prüfung, Entscheidung, Gültigkeit, Überwachung, Register und Markennutzung.', 'MBH-SCH-1.0', 'Veröffentlicht', [
        ('Version', '1.0'), ('Stand', '14.09.2026'), ('Bezug', 'Made by Human Standard 1.0'), ('Dokumentstatus', 'Veröffentlicht')
    ])
    story += [P('1  Zweck', 'h1'), P('Das Zertifizierungsschema beschreibt, wie Made by Human Standard 1.0 angewendet wird. Es regelt Antrag, Festlegung des Zertifizierungsumfangs, Prüfung, fachliche Kontrolle, Entscheidung, Gültigkeit, Änderungen, Verlängerung, Register und Zeichennutzung.')]
    story += [P('2  Rollen', 'h1')]
    for name, text in [('Systeminhaber','verantwortet Standard, Marke, Dokumente, Register und Systemregeln.'), ('Prüfung','prüft Produkt und Herstellungsprozess und hält Feststellungen und Belege fest.'), ('Fachprüfung','kontrolliert Vollständigkeit und fachliche Schlüssigkeit des Prüfergebnisses.'), ('Zertifizierungsentscheidung','entscheidet über Freigabe, Ablehnung, Aussetzung, Verlängerung oder Widerruf.'), ('Öffentliches Register','zeigt den veröffentlichten Zertifizierungsumfang und aktuellen Status.')]:
        story.append(P(f'<b>{name}:</b> {text}'))
    story += [P('3  Ablauf', 'h1'), criteria_table([
        ('1','Anfrage und Umfang','Produkt oder Produktfamilie, Produktionsorte und wesentliche Fremdfertigung festlegen.'),
        ('2','Herstellung erfassen','Wesentliche Herstellungsschritte und Automatisierungsgrad erfassen.'),
        ('3','Nachweise und Vor-Ort-Prüfung','Unterlagen mit der tatsächlichen Produktion abgleichen.'),
        ('4','Bewertung','Alle anwendbaren Muss-Kriterien des Standards bewerten.'),
        ('5','Fachprüfung','Prüfergebnis kontrollieren und offene Punkte klären.'),
        ('6','Entscheidung und Register','Entscheidung dokumentieren und bei Freigabe den aktiven Status veröffentlichen.')
    ])]
    story += [P('4  Gültigkeit und Überwachung', 'h1'), P('Eine positive Zertifizierung gilt grundsätzlich zwölf Monate ab Ausstellungsdatum. Vor der Verlängerung erfolgt eine erneute Bewertung. Ein vollständiges jährliches Vor-Ort-Audit ist nicht automatisch erforderlich, kann aber je nach Änderungen, Risiko oder bisherigen Feststellungen verlangt werden.')]
    story += [P('5  Änderungspflicht', 'h1'), P('Wesentliche Änderungen an Produkt, Herstellungsschritten, Automatisierungsgrad, Produktionsorten oder Fremdfertigung müssen unverzüglich gemeldet werden. Made by Human bewertet die Auswirkungen und entscheidet über Fortbestand, Nachprüfung, Erweiterung oder Aussetzung.')]
    story += [P('6  Status', 'h1')]
    for name, text in [('Aktiv','Zertifizierung ist innerhalb des veröffentlichten Umfangs und Zeitraums gültig.'), ('Ausgesetzt','Zeichennutzung ist bis zur Klärung vorübergehend nicht zulässig.'), ('Abgelaufen','Gültigkeitszeitraum ist beendet und nicht verlängert.'), ('Widerrufen','Zertifizierung ist beendet; die Zeichennutzung ist nicht mehr zulässig.')]:
        story.append(P(f'<b>{name}:</b> {text}'))
    story += [P('7  Verbundene Unternehmen und Interessenkonflikte', 'h1'), P('Gesellschaftsrechtliche, wirtschaftliche oder personelle Verbindungen werden dokumentiert. Eine Verbindung zum Systeminhaber wird im öffentlichen Datensatz offengelegt. Solche Fälle werden nicht als unabhängige Drittzertifizierung bezeichnet. Soweit organisatorisch möglich, werden Prüfung, fachliche Kontrolle und Entscheidung personell getrennt.')]
    story += [P('8  Beschwerden, Einsprüche und Zeichenmissbrauch', 'h1'), P('Beschwerden, Einsprüche gegen Entscheidungen und unberechtigte Zeichennutzung werden getrennt erfasst, auf mögliche Interessenkonflikte geprüft, bewertet und mit Ergebnis dokumentiert.')]
    story += [P('9  Öffentliches Register und Markennutzung', 'h1'), P('Der Registereintrag zeigt mindestens Zertifizierungs-ID, Hersteller, Produkt oder Produktfamilie, Standardversion, Status, Gültigkeit und den festgelegten Umfang. Das Zeichen darf nur bei aktivem Status und nur für den zertifizierten Umfang verwendet werden.')]
    story += [P('10  Transparenzgrenze', 'h1'), P('Made by Human behauptet keine Akkreditierung oder externe Unabhängigkeit, solange diese Eigenschaft nicht tatsächlich besteht und belegt werden kann.')]
    doc.build(story, onFirstPage=lambda c,d: header_footer(c,d,'MBH-SCH-1.0','Zertifizierungsschema','Version 1.0 · Veröffentlicht'), onLaterPages=lambda c,d: header_footer(c,d,'MBH-SCH-1.0','Zertifizierungsschema','Version 1.0 · Veröffentlicht'))


if __name__ == '__main__':
    build_standard_v1()
    build_scheme_v1()
