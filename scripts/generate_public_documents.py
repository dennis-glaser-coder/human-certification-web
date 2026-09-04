from pathlib import Path
from reportlab.lib import colors
from reportlab.lib.pagesizes import A4
from reportlab.lib.styles import getSampleStyleSheet, ParagraphStyle
from reportlab.lib.units import mm
from reportlab.platypus import SimpleDocTemplate, Paragraph, Spacer, Table, TableStyle, PageBreak, Image, KeepTogether
from reportlab.pdfbase.ttfonts import TTFont
from reportlab.pdfbase import pdfmetrics

ROOT = Path(__file__).resolve().parents[1]
OUT = ROOT / 'public' / 'documents'
SEAL = ROOT / 'public' / 'brand' / 'made-by-humans-seal.png'
OUT.mkdir(parents=True, exist_ok=True)

INK = colors.HexColor('#111820')
BLUE = colors.HexColor('#294C77')
PAPER = colors.HexColor('#F3F0E8')
STONE = colors.HexColor('#C8C5BD')
ACCENT = colors.HexColor('#B7793C')
MUTED = colors.HexColor('#667078')
WHITE = colors.white

for name, path in [
    ('MBSans', '/usr/share/fonts/truetype/dejavu/DejaVuSans.ttf'),
    ('MBSansBold', '/usr/share/fonts/truetype/dejavu/DejaVuSans-Bold.ttf'),
    ('MBSerif', '/usr/share/fonts/truetype/dejavu/DejaVuSerif.ttf'),
]:
    try:
        pdfmetrics.registerFont(TTFont(name, path))
    except Exception:
        pass

SANS = 'MBSans' if 'MBSans' in pdfmetrics.getRegisteredFontNames() else 'Helvetica'
SANS_B = 'MBSansBold' if 'MBSansBold' in pdfmetrics.getRegisteredFontNames() else 'Helvetica-Bold'
SERIF = 'MBSerif' if 'MBSerif' in pdfmetrics.getRegisteredFontNames() else 'Times-Roman'

ss = getSampleStyleSheet()
ST = {
    'eyebrow': ParagraphStyle('eyebrow', parent=ss['Normal'], fontName=SANS_B, fontSize=7.5, leading=9, textColor=BLUE, spaceAfter=7),
    'title': ParagraphStyle('title', parent=ss['Title'], fontName=SERIF, fontSize=28, leading=32, textColor=INK, spaceAfter=10),
    'subtitle': ParagraphStyle('subtitle', parent=ss['Normal'], fontName=SANS, fontSize=10.5, leading=16, textColor=MUTED, spaceAfter=14),
    'h1': ParagraphStyle('h1', parent=ss['Heading1'], fontName=SERIF, fontSize=18, leading=22, textColor=INK, spaceBefore=12, spaceAfter=8),
    'h2': ParagraphStyle('h2', parent=ss['Heading2'], fontName=SANS_B, fontSize=10.5, leading=14, textColor=BLUE, spaceBefore=9, spaceAfter=5),
    'body': ParagraphStyle('body', parent=ss['BodyText'], fontName=SANS, fontSize=8.7, leading=13, textColor=INK, spaceAfter=6),
    'small': ParagraphStyle('small', parent=ss['BodyText'], fontName=SANS, fontSize=6.6, leading=9, textColor=MUTED, spaceAfter=4),
    'table': ParagraphStyle('table', parent=ss['BodyText'], fontName=SANS, fontSize=7.3, leading=10, textColor=INK),
    'tableb': ParagraphStyle('tableb', parent=ss['BodyText'], fontName=SANS_B, fontSize=7.3, leading=10, textColor=BLUE),
    'white': ParagraphStyle('white', parent=ss['BodyText'], fontName=SANS_B, fontSize=7, leading=9, textColor=WHITE),
    'callout': ParagraphStyle('callout', parent=ss['BodyText'], fontName=SERIF, fontSize=14, leading=19, textColor=INK),
}

def P(text, style='body'):
    return Paragraph(text, ST[style])

def bullet(text):
    return Table([[P('•', 'tableb'), P(text, 'body')]], colWidths=[4*mm, 163*mm], style=TableStyle([
        ('VALIGN',(0,0),(-1,-1),'TOP'), ('LEFTPADDING',(0,0),(-1,-1),0), ('RIGHTPADDING',(0,0),(-1,-1),0),
        ('TOPPADDING',(0,0),(-1,-1),0), ('BOTTOMPADDING',(0,0),(-1,-1),2),
    ]))

def header_footer(canvas, doc, doc_id, short_title, status):
    canvas.saveState()
    w, h = A4
    canvas.setStrokeColor(STONE); canvas.setLineWidth(0.5)
    canvas.line(18*mm, h-14*mm, w-18*mm, h-14*mm)
    canvas.setFont(SANS_B, 6.8); canvas.setFillColor(BLUE)
    canvas.drawRightString(w-18*mm, h-11.4*mm, f'MADE BY HUMANS  /  {doc_id}')
    canvas.setFont(SANS, 6.2); canvas.setFillColor(MUTED)
    canvas.drawString(18*mm, 10.5*mm, f'{short_title}  ·  Version 0.1  ·  {status}')
    canvas.restoreState()

def title_block(title, subtitle, doc_id, status, details):
    left = [
        P('STANDARD FÜR MENSCHLICHE HERSTELLUNG' if 'STD' in doc_id else 'CERTIFICATION SCHEME', 'eyebrow'),
        P(title,'title'), P(subtitle,'subtitle'),
        P('Dokumentenstatus: Arbeitsfassung. Dieses Dokument begründet keine öffentliche kommerzielle Zertifizierung und keine Akkreditierung.','small')
    ]
    right = [Image(str(SEAL), width=34*mm, height=34*mm), Spacer(1,4*mm), P('MADE BY HUMANS','white'), P(doc_id,'white')] if SEAL.exists() else [P('MADE BY HUMANS','white'), P(doc_id,'white')]
    t = Table([[left, right]], colWidths=[123*mm, 47*mm])
    t.setStyle(TableStyle([
        ('BACKGROUND',(0,0),(0,0),PAPER), ('BACKGROUND',(1,0),(1,0),INK), ('VALIGN',(0,0),(-1,-1),'TOP'),
        ('LEFTPADDING',(0,0),(0,0),6*mm), ('RIGHTPADDING',(0,0),(0,0),5*mm), ('TOPPADDING',(0,0),(0,0),5*mm), ('BOTTOMPADDING',(0,0),(0,0),5*mm),
        ('ALIGN',(1,0),(1,0),'CENTER'), ('LEFTPADDING',(1,0),(1,0),5*mm), ('RIGHTPADDING',(1,0),(1,0),5*mm), ('TOPPADDING',(1,0),(1,0),4*mm),
    ]))
    meta = [['Dokument-ID', doc_id], ['Status', status]] + details
    mt = Table([[P(k,'small'), P(v,'tableb' if k in ('Dokument-ID','Status') else 'table')] for k,v in meta], colWidths=[42*mm,128*mm])
    mt.setStyle(TableStyle([
        ('LINEBELOW',(0,0),(-1,-1),0.45,STONE), ('VALIGN',(0,0),(-1,-1),'TOP'),
        ('LEFTPADDING',(0,0),(-1,-1),2*mm), ('RIGHTPADDING',(0,0),(-1,-1),2*mm),
        ('TOPPADDING',(0,0),(-1,-1),2.2*mm), ('BOTTOMPADDING',(0,0),(-1,-1),2.2*mm),
    ]))
    return [t, Spacer(1,8*mm), mt, Spacer(1,8*mm)]

def doc_control(change):
    data = [
        [P('Version','white'), P('Datum','white'), P('Status','white'), P('Änderung','white')],
        [P('0.1','table'), P('04.09.2026','table'), P('Arbeitsfassung','table'), P(change,'table')]
    ]
    t=Table(data,colWidths=[25*mm,32*mm,38*mm,75*mm], repeatRows=1)
    t.setStyle(TableStyle([
        ('BACKGROUND',(0,0),(-1,0),INK), ('LINEBELOW',(0,1),(-1,-1),0.45,STONE), ('VALIGN',(0,0),(-1,-1),'TOP'),
        ('LEFTPADDING',(0,0),(-1,-1),2*mm), ('RIGHTPADDING',(0,0),(-1,-1),2*mm),
        ('TOPPADDING',(0,0),(-1,-1),2*mm), ('BOTTOMPADDING',(0,0),(-1,-1),2*mm),
    ]))
    return [P('Dokumentenlenkung','h1'),t,Spacer(1,4*mm)]

def callout(label, text):
    t=Table([[P(label.upper(),'eyebrow')],[P(text,'callout')]],colWidths=[166*mm])
    t.setStyle(TableStyle([
        ('BACKGROUND',(0,0),(-1,-1),PAPER), ('LINEBEFORE',(0,0),(0,-1),2,ACCENT),
        ('LEFTPADDING',(0,0),(-1,-1),3*mm), ('RIGHTPADDING',(0,0),(-1,-1),3*mm),
        ('TOPPADDING',(0,0),(-1,-1),2*mm), ('BOTTOMPADDING',(0,0),(-1,-1),2*mm),
    ]))
    return KeepTogether(t)

def criteria_table(rows):
    data=[[P('#','white'),P('Prüfbereich','white'),P('Anforderung','white')]]
    for num,title,copy in rows:
        data.append([P(num,'table'),P(title,'tableb'),P(copy,'table')])
    t=Table(data,colWidths=[10*mm,48*mm,112*mm],repeatRows=1)
    t.setStyle(TableStyle([
        ('BACKGROUND',(0,0),(-1,0),INK), ('LINEBELOW',(0,1),(-1,-1),0.4,STONE), ('VALIGN',(0,0),(-1,-1),'TOP'),
        ('LEFTPADDING',(0,0),(-1,-1),2*mm), ('RIGHTPADDING',(0,0),(-1,-1),2*mm),
        ('TOPPADDING',(0,0),(-1,-1),1.7*mm), ('BOTTOMPADDING',(0,0),(-1,-1),1.7*mm),
    ]))
    return t

def build_standard():
    path=OUT/'made-by-humans-standard-0-1.pdf'
    doc=SimpleDocTemplate(str(path),pagesize=A4,rightMargin=18*mm,leftMargin=18*mm,topMargin=20*mm,bottomMargin=16*mm,title='Made by Humans Arbeitsstandard 0.1',author='Made by Humans')
    story=[]
    story += title_block('Arbeitsstandard 0.1','Kriterien für physische Produkte, deren wesentliche Herstellungsschritte nachweislich durch Menschen ausgeführt werden.','MBH-STD-0.1','Arbeitsfassung - in Validierung',[
        ('Version','0.1'),('Stand','04.09.2026'),('Geltungsbereich','Physische Produkte'),('Kommerzielle Gültigkeit','Keine - öffentliche Zertifikatsvergabe noch nicht gestartet')
    ])
    story += doc_control('Erste öffentliche Arbeitsfassung zur Validierung an realen Produktionsfällen.')
    story += [P('1  Zweck','h1'),P('Der Standard beschreibt, wann die menschliche Herstellung eines physischen Produkts so wesentlich, nachvollziehbar und belegbar ist, dass diese Eigenschaft zertifiziert kommuniziert werden kann.'),P('Die Kennzeichnung soll eine eng definierte Produkteigenschaft überprüfbar machen. Sie ist keine pauschale Aussage über die Qualität, Nachhaltigkeit, Herkunft oder gesellschaftliche Wirkung eines Unternehmens.')]
    story += [P('2  Geltungsbereich','h1'),P('Bewertet wird ein definiertes physisches Produkt oder eine klar abgegrenzte Produktfamilie und der zugehörige Herstellungsprozess.'),P('Der Standard ist branchenübergreifend angelegt. Für die erste Validierung stehen insbesondere Lederwaren, Schmuck, Möbel und Holzprodukte, Keramik und Glas, Mode und Textil sowie Wohnaccessoires im Fokus.'),P('2.1  Nicht Gegenstand dieser Fassung','h2')]
    for x in ['Herkunftsland oder "Made in"-Aussagen','Bio-, Fairtrade- oder allgemeine Nachhaltigkeitsaussagen','Unternehmensgröße oder Eigentümerstruktur','eine allgemeine Bewertung des gesamten Unternehmens','die Aussage, dass Maschinen oder digitale Werkzeuge grundsätzlich unzulässig seien']:
        story.append(bullet(x))
    story += [P('3  Begriffe','h1')]
    defs=[('Produkt','Ein physisches Endprodukt oder eine eindeutig abgegrenzte Produktfamilie, auf die sich die Prüfung bezieht.'),('Wesentliche Herstellungsschritte','Arbeitsschritte, die für die Entstehung, Formgebung, Verbindung, Funktion oder produktprägende Fertigstellung des Endprodukts wesentlich sind.'),('Menschliche Ausführung','Unmittelbare Ausführung eines wesentlichen Herstellungsschritts durch Menschen. Maschinen können als Werkzeug oder Unterstützung eingesetzt werden.'),('Automatisierter Teilprozess','Ein Prozessschritt, der durch programmierte oder automatisierte Technik ausgeführt wird. Seine Zulässigkeit hängt davon ab, ob wesentliche produktprägende menschliche Arbeit weiterhin erforderlich ist.'),('Fremdfertigung','Wesentliche Herstellungsschritte, die außerhalb des antragstellenden Unternehmens ausgeführt werden.'),('Rückverfolgbarkeit','Nachvollziehbare Zuordnung relevanter Produktionsschritte, Standorte und Fremdfertigung zum geprüften Produkt.')]
    for term,desc in defs: story.append(P(f'<b><font color="#294C77">{term}:</font></b> {desc}'))
    story += [P('4  Prüfkriterien','h1'), criteria_table([
        ('1','Produktentstehung','Durch menschliche Arbeit entsteht aus Materialien oder Komponenten das verkaufsfertige Endprodukt.'),
        ('2','Menschliche Ausführung','Die wesentlichen produktprägenden Herstellungsschritte werden tatsächlich unmittelbar durch Menschen ausgeführt.'),
        ('3','Fachliche Prägung','Relevante Schritte erfordern Erfahrung, Fähigkeit oder bewusste menschliche Entscheidungen.'),
        ('4','Automatisierungsgrenze','Technik kann unterstützen. Eine weitgehend autonome Produktentstehung erfüllt das Kriterium nicht.'),
        ('5','Rückverfolgbarkeit','Relevante Produktionsorte, Zulieferer und wesentliche Fremdfertigung müssen nachvollziehbar zugeordnet werden können.'),
        ('6','Nachweisbarkeit','Die Angaben zum Herstellungsprozess müssen durch geeignete Informationen und Unterlagen prüfbar sein.')
    ])]
    story += [PageBreak(),P('5  Entscheidungsregel','h1'),callout('Praktischer Kerntest','Würde ohne die menschlichen Herstellungsschritte bereits im Wesentlichen dasselbe verkaufsfertige Produkt vorliegen?'),Spacer(1,4*mm),P('Ist die Antwort im konkreten Produktionsfall im Wesentlichen "ja", spricht dies gegen eine Zertifizierbarkeit. Ist die menschliche Arbeit für die Entstehung des Endprodukts wesentlich, wird anhand der übrigen Kriterien und Nachweise weiter geprüft.')]
    story += [P('6  Nachweise','h1'),P('Art und Umfang der Nachweise richten sich nach Produkt, Prozess und Risikoprofil. Die Prüfung soll nicht allein auf einer Selbstauskunft beruhen.')]
    for x in ['Prozessbeschreibungen und Arbeitsabläufe','Produktionsunterlagen, Stücklisten oder Fertigungsdokumentation','Angaben zu Produktionsstandorten und wesentlicher Fremdfertigung','geeignete Foto-, Video- oder Vor-Ort-Nachweise zur tatsächlichen Ausführung','Auftrags-, Lieferanten- oder sonstige Unterlagen, soweit sie für die Rückverfolgbarkeit erforderlich sind','Interviews oder fachliche Erläuterungen, wenn sie zur Einordnung eines Produktionsschritts notwendig sind']:
        story.append(bullet(x))
    story += [P('7  Nicht zertifizierbare Konstellationen','h1')]
    for x in ['Ein fertiges oder weitgehend fertiges Produkt wird lediglich importiert, umetikettiert, umverpackt oder mit einem eigenen Logo versehen.','Die wesentlichen produktprägenden Schritte werden weitgehend autonom ausgeführt und die menschliche Tätigkeit beschränkt sich auf Überwachung, Materialzufuhr oder Verpackung.','Die verbleibende manuelle Bearbeitung ist nur geringfügig und verändert ein bereits im Wesentlichen fertiges industrielles Produkt nicht entscheidend.','Wesentliche Herstellungsschritte oder Fremdfertigung können nicht ausreichend nachvollziehbar belegt werden.']:
        story.append(bullet(x))
    story += [P('8  Grenzfälle','h1')]
    cases=[
        [P('Beispiel','white'),P('Einordnung','white'),P('Begründung','white')],
        [P('Ledertasche: Zuschnitt und Fertigung durch Menschen','table'),P('Grundsätzlich zertifizierbar','tableb'),P('Die menschliche Herstellung prägt die Entstehung des Endprodukts.','table')],
        [P('Ledertasche: digitaler Zuschnitt, manuelle Montage und Finish','table'),P('Einzelfall grundsätzlich zertifizierbar','tableb'),P('Der digitale Teilprozess ersetzt nicht die wesentlichen weiteren Herstellungsschritte.','table')],
        [P('Fertige Importtasche mit eigenem Label','table'),P('Nicht zertifizierbar','tableb'),P('Das verkaufsfertige Produkt existiert bereits vor dem eigenen Arbeitsschritt.','table')],
        [P('Tisch: CNC-Zuschnitt, manuelle Anpassung, Montage und Finish','table'),P('Grundsätzlich zertifizierbar','tableb'),P('Der automatisierte Zuschnitt ist ein Teilprozess; weitere wesentliche Herstellungsschritte erfolgen durch Menschen.','table')],
        [P('Tisch weitgehend automatisch gefertigt, nur Finish von Hand','table'),P('Nicht zertifizierbar','tableb'),P('Die verbleibende menschliche Tätigkeit ist für die Produktentstehung nicht mehr wesentlich.','table')],
    ]
    ct=Table(cases,colWidths=[58*mm,58*mm,54*mm],repeatRows=1)
    ct.setStyle(TableStyle([('BACKGROUND',(0,0),(-1,0),INK),('LINEBELOW',(0,1),(-1,-1),0.4,STONE),('VALIGN',(0,0),(-1,-1),'TOP'),('LEFTPADDING',(0,0),(-1,-1),2*mm),('RIGHTPADDING',(0,0),(-1,-1),2*mm),('TOPPADDING',(0,0),(-1,-1),1.7*mm),('BOTTOMPADDING',(0,0),(-1,-1),1.7*mm)]))
    story.append(ct)
    story += [P('9  Bezug zur Zertifizierung und zum Public Register','h1'),P('Eine spätere Zertifizierungsentscheidung soll sich auf ein konkret abgegrenztes Produkt oder eine Produktfamilie, die angewendete Standardversion und den geprüften Herstellungsprozess beziehen.'),P('Bei positiver Entscheidung soll die Kennzeichnung mit einer eindeutigen Zertifizierungs-ID verknüpft werden. Der öffentliche Registereintrag soll mindestens Hersteller, Produkt, Standardversion, Status sowie Gültigkeitsinformationen ausweisen.'),P('10  Änderungen am Herstellungsprozess','h1'),P('Wesentliche Änderungen an Produkt, Produktionsstandorten, Fremdfertigung oder produktprägenden Herstellungsschritten sollen meldepflichtig sein. Je nach Bedeutung kann eine erneute Prüfung oder Anpassung des Zertifizierungsumfangs erforderlich werden.'),P('11  Status dieser Fassung','h1'),P('Version 0.1 ist eine öffentliche Arbeitsfassung. Sie dient der Validierung an realen Produktionsfällen und stellt noch keine endgültige kommerzielle Zertifizierungsnorm dar.'),P('Kriterien, Nachweisanforderungen und Grenzfälle können auf Basis der Validierung präzisiert werden. Änderungen werden versioniert dokumentiert.')]
    doc.build(story,onFirstPage=lambda c,d: header_footer(c,d,'MBH-STD-0.1','Arbeitsstandard','Arbeitsfassung - in Validierung'),onLaterPages=lambda c,d: header_footer(c,d,'MBH-STD-0.1','Arbeitsstandard','Arbeitsfassung - in Validierung'))

def build_scheme():
    path=OUT/'made-by-humans-certification-scheme-0-1.pdf'
    doc=SimpleDocTemplate(str(path),pagesize=A4,rightMargin=18*mm,leftMargin=18*mm,topMargin=20*mm,bottomMargin=16*mm,title='Made by Humans Certification Scheme 0.1',author='Made by Humans')
    story=[]
    story += title_block('Certification Scheme 0.1','Arbeitsfassung für Rollen, Prüfprozess, Zertifizierungsentscheidung, Statusverwaltung, Register und Markennutzung.','MBH-SCH-0.1','Arbeitsfassung - Zielstruktur in Validierung',[
        ('Version','0.1'),('Stand','04.09.2026'),('Bezug','Made by Humans Arbeitsstandard 0.1'),('Kommerzielle Gültigkeit','Keine - Zielstruktur vor finaler rechtlicher und organisatorischer Ausgestaltung')
    ])
    story += doc_control('Erste strukturierte Fassung des vorgesehenen Zertifizierungssystems.')
    story += [P('1  Zweck und Status','h1'),P('Dieses Dokument beschreibt die vorgesehene Funktionsweise des Made by Humans Zertifizierungssystems getrennt vom eigentlichen Produktstandard.'),P('Es regelt nicht, welche Produkteigenschaft erfüllt sein muss - das ist Aufgabe des Arbeitsstandards. Es beschreibt, wie Antrag, Prüfung, Review, Entscheidung, Register, Statusänderungen und Markennutzung strukturiert werden sollen.'),P('Version 0.1 ist eine Zielstruktur. Rechtliche und organisatorische Verantwortlichkeiten werden vor dem öffentlichen kommerziellen Start final festgelegt.'),P('2  Rollen im System','h1')]
    roles=[('Scheme-Inhaber','verantwortet Standard, Marke, Dokumentenlenkung, Registermodell und Regeln des Zertifizierungssystems.'),('Prüfung / Audit','bewertet den konkreten Produkt- und Herstellungsprozess gegen die anwendbaren Anforderungen und dokumentiert die Nachweise.'),('Review','prüft die Vollständigkeit und fachliche Plausibilität des Prüfergebnisses und dokumentiert offene Punkte.'),('Zertifizierungsentscheidung','überführt das geprüfte Ergebnis in eine dokumentierte Entscheidung über Freigabe, Ablehnung, Aussetzung, Erneuerung oder Widerruf.'),('Public Register','veröffentlicht die für Käufer und Geschäftspartner relevanten Zertifizierungsinformationen und den aktuellen Status.')]
    for n,d in roles: story.append(P(f'<b><font color="#294C77">{n}:</font></b> {d}'))
    story += [callout('Wichtiger Statushinweis','Die konkrete organisatorische Trennung und rechtliche Verantwortlichkeit dieser Rollen ist noch nicht final festgelegt. Es wird derzeit keine Unabhängigkeit oder Akkreditierung behauptet.'),Spacer(1,4*mm),P('3  Antrag und Scope','h1')]
    for x in ['Antragsteller benennt Unternehmen, Produkt oder Produktfamilie und relevante Herstellungsorte.','Der Zertifizierungsumfang wird so abgegrenzt, dass klar ist, welche Produkte, Varianten und Produktionsprozesse erfasst sind.','Wesentliche Fremdfertigung und relevante Zulieferprozesse werden in den Scope aufgenommen, soweit sie für die zertifizierte Eigenschaft erforderlich sind.','Vor der Prüfung wird geklärt, welche Standardversion anzuwenden ist.']:
        story.append(bullet(x))
    story += [P('4  Prüfprozess','h1'),criteria_table([('1','Scope','Produkt, Produktfamilie und Herstellungsorte abgrenzen.'),('2','Prozessaufnahme','Wesentliche Herstellungsschritte und Fremdfertigung erfassen.'),('3','Nachweise','Unterlagen und Informationen zur tatsächlichen Ausführung prüfen.'),('4','Audit','Produktionsfall gegen die Kriterien des Standards bewerten.'),('5','Review','Prüfergebnis fachlich kontrollieren und offene Punkte klären.'),('6','Entscheidung','Zertifizierungsstatus dokumentiert festlegen und bei Freigabe registrieren.')]),PageBreak(),P('5  Zertifizierungsentscheidung','h1'),P('Eine positive Entscheidung soll nur erfolgen, wenn Scope, Prüfkriterien und erforderliche Nachweise ausreichend geklärt sind.'),P('Offene Abweichungen können je nach Bedeutung zu Nachforderungen, Ablehnung oder einem späteren Wiederholungs- bzw. Ergänzungsaudit führen.'),P('6  Zertifizierungsstatus','h1')]
    for n,d in [('Aktiv','Zertifizierung ist innerhalb des festgelegten Umfangs und Zeitraums gültig.'),('Ausgesetzt','Nutzung des Zeichens ist vorübergehend eingeschränkt oder untersagt, bis die Ursache geklärt ist.'),('Abgelaufen','Gültigkeitszeitraum ist beendet und wurde nicht rechtzeitig erneuert.'),('Widerrufen','Zertifizierung wurde beendet; weitere Nutzung des Zeichens für den betroffenen Scope ist unzulässig.')]: story.append(P(f'<b><font color="#294C77">{n}:</font></b> {d}'))
    story += [P('7  Gültigkeit, Änderungen und Erneuerung','h1'),P('Eine endgültige Laufzeit ist in Version 0.1 noch nicht festgelegt. Vor dem kommerziellen Start werden Gültigkeitsdauer, Erneuerungslogik und risikobasierte Nachprüfungen definiert.'),P('Wesentliche Änderungen am zertifizierten Produkt, Produktionsstandort, Herstellungsprozess oder an relevanter Fremdfertigung sollen meldepflichtig sein. Der Zertifizierungsstatus kann bis zur Bewertung der Änderung angepasst werden.'),P('8  Public Register','h1'),P('Jede freigegebene Kennzeichnung soll auf einen öffentlich prüfbaren Datensatz verweisen. Die Zertifizierungs-ID dient als eindeutige Verbindung zwischen Zeichen und Register.'),P('Der öffentliche Datensatz soll mindestens Zertifizierungs-ID, Hersteller, Produkt oder Produktfamilie, Standardversion, Status, Gültigkeitsinformationen und relevante Statusänderungen enthalten.'),P('9  Markennutzung','h1'),P('Die Nutzung des Zeichens ist an den zertifizierten Scope und den aktuellen Zertifizierungsstatus gebunden. Die Markennutzungsregeln werden als separates Dokument geführt.'),P('Das Zeichen darf nicht so verwendet werden, dass der Eindruck entsteht, das gesamte Unternehmen, nicht erfasste Produkte oder andere Eigenschaften seien zertifiziert.'),P('10  Beschwerden, Einsprüche und Zeichenmissbrauch','h1'),P('10.1  Beschwerden','h2'),P('Beschwerden betreffen die Durchführung, Kommunikation oder Funktionsweise des Zertifizierungssystems. Eingang, Prüfung, Maßnahmen und Abschluss sollen dokumentiert werden.'),P('10.2  Einsprüche','h2'),P('Ein Einspruch richtet sich gegen eine konkrete Zertifizierungsentscheidung. Das Verfahren soll sicherstellen, dass der Einspruch von einer Person oder Funktion bewertet wird, die nicht allein die angefochtene Entscheidung getroffen hat.'),P('10.3  Zeichenmissbrauch','h2'),P('Unberechtigte, irreführende oder scope-fremde Nutzung des Zeichens soll dokumentiert und verfolgt werden. Mögliche Maßnahmen reichen von Korrekturaufforderung über Aussetzung bis zum Widerruf und weiteren rechtlichen Schritten.'),callout('Keine vorgetäuschte Unabhängigkeit','Solange die endgültige Governance-Struktur nicht eingerichtet ist, wird nicht behauptet, dass Beschwerden oder Einsprüche bereits durch eine unabhängige externe Instanz entschieden werden.'),Spacer(1,4*mm),P('11  Interessenkonflikte und Unparteilichkeit','h1'),P('Für den kommerziellen Betrieb sollen Rollen, Freigaben und Review so organisiert werden, dass wirtschaftliche Interessen eines Antragstellers die Zertifizierungsentscheidung nicht bestimmen.'),P('Potenzielle Interessenkonflikte sollen vor einer Prüfung identifiziert und dokumentiert werden. Die endgültige Governance-Regelung wird vor Start des kommerziellen Systems veröffentlicht.'),P('12  Dokumentenlenkung','h1'),P('Standard, Scheme, Markennutzungsregeln und Governance-Verfahren werden versioniert geführt. Änderungen werden mit Version, Datum, Status und Änderungsgrund dokumentiert.'),P('Öffentliche Zertifizierungsdatensätze sollen auf die jeweils angewendete Standardversion verweisen.'),P('13  Status dieser Fassung','h1'),P('Certification Scheme 0.1 ist eine öffentliche Arbeitsfassung zur Strukturierung und Validierung des vorgesehenen Systems. Sie begründet keine Akkreditierung und keine öffentliche kommerzielle Zertifizierungsberechtigung.'),P('Vor dem kommerziellen Start werden insbesondere Rechtsrahmen, organisatorische Verantwortlichkeiten, Gültigkeits- und Überwachungslogik sowie Verfahren für Beschwerden und Einsprüche finalisiert.')]
    doc.build(story,onFirstPage=lambda c,d: header_footer(c,d,'MBH-SCH-0.1','Certification Scheme','Arbeitsfassung - Zielstruktur in Validierung'),onLaterPages=lambda c,d: header_footer(c,d,'MBH-SCH-0.1','Certification Scheme','Arbeitsfassung - Zielstruktur in Validierung'))

if __name__ == '__main__':
    build_standard()
    build_scheme()
