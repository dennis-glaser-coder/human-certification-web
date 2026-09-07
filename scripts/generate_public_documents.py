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
LOGO = ROOT / 'public' / 'brand' / 'made-by-human-logo.png'
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
    'title': ParagraphStyle('title', parent=ss['Title'], fontName=SERIF, fontSize=24, leading=28, textColor=INK, spaceAfter=10),
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

def brand_logo():
    if not LOGO.exists():
        return None
    logo = Image(str(LOGO))
    max_w, max_h = 37*mm, 37*mm
    scale = min(max_w / logo.imageWidth, max_h / logo.imageHeight)
    logo.drawWidth = logo.imageWidth * scale
    logo.drawHeight = logo.imageHeight * scale
    return logo

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
    canvas.drawRightString(w-18*mm, h-11.4*mm, f'MADE BY HUMAN  /  {doc_id}')
    canvas.setFont(SANS, 6.2); canvas.setFillColor(MUTED)
    canvas.drawString(18*mm, 10.5*mm, f'{short_title}  ·  {status}')
    canvas.restoreState()

def title_block(title, subtitle, doc_id, status, details):
    left = [
        P('STANDARD FÜR MENSCHLICHE HERSTELLUNG' if 'STD' in doc_id else 'ZERTIFIZIERUNGSSCHEMA', 'eyebrow'),
        P(title,'title'), P(subtitle,'subtitle'),
        P('Kontrolliertes Dokument. Dokument-ID, Version und Stand ermöglichen eine eindeutige Referenzierung der veröffentlichten Fassung.','small')
    ]
    logo = brand_logo()
    right = ([logo, Spacer(1,3*mm), P(doc_id,'tableb')] if logo else [P('MADE BY HUMAN','tableb'), P(doc_id,'tableb')])
    t = Table([[left, right]], colWidths=[123*mm, 47*mm])
    t.setStyle(TableStyle([
        ('BACKGROUND',(0,0),(0,0),PAPER), ('BACKGROUND',(1,0),(1,0),WHITE), ('LINEBEFORE',(1,0),(1,0),0.7,STONE), ('VALIGN',(0,0),(-1,-1),'TOP'),
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
        [P('0.1','table'), P('04.09.2026','table'), P('Veröffentlicht','table'), P(change,'table')]
    ]
    t=Table(data,colWidths=[25*mm,32*mm,38*mm,75*mm], repeatRows=1)
    t.setStyle(TableStyle([
        ('BACKGROUND',(0,0),(-1,0),INK), ('LINEBELOW',(0,1),(-1,-1),0.45,STONE), ('VALIGN',(0,0),(-1,-1),'TOP'),
        ('LEFTPADDING',(0,0),(-1,-1),2*mm), ('RIGHTPADDING',(0,0),(-1,-1),2*mm),
        ('TOPPADDING',(0,0),(-1,-1),2*mm), ('BOTTOMPADDING',(0,0),(-1,-1),2*mm),
    ]))
    return [P('Versionen & Änderungen','h1'),t,Spacer(1,4*mm)]

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
    path=OUT/'made-by-human-standard-0-1.pdf'
    doc=SimpleDocTemplate(str(path),pagesize=A4,rightMargin=18*mm,leftMargin=18*mm,topMargin=20*mm,bottomMargin=16*mm,title='Made by Human Standard 0.1',author='Made by Human')
    story=[]
    story += title_block('Standard 0.1','Kriterien für physische Produkte, bei denen die entscheidenden Herstellungsschritte nachweislich von Menschen ausgeführt werden.','MBH-STD-0.1','Veröffentlicht',[
        ('Version','0.1'),('Stand','04.09.2026'),('Geltungsbereich','Physische Produkte'),('Dokumentstatus','Veröffentlicht')
    ])
    story += doc_control('Veröffentlichte Fassung des Standards.')
    story += [P('1  Zweck','h1'),P('Der Standard legt fest, wann menschliche Arbeit ein physisches Produkt wesentlich prägt und ausreichend belegt ist, sodass eine Zertifizierung nach Made by Human möglich ist.'),P('Die Kennzeichnung bezieht sich ausschließlich auf die menschliche Herstellung des geprüften Produkts. Sie ist keine allgemeine Aussage über Qualität, Nachhaltigkeit, Herkunft oder die gesellschaftliche Wirkung eines Unternehmens.')]
    story += [P('2  Geltungsbereich','h1'),P('Geprüft wird ein klar benanntes physisches Produkt oder eine klar benannte Produktfamilie mit dem dazugehörigen Herstellungsprozess.'),P('Der Standard gilt branchenübergreifend. Entscheidend ist nicht die Produktkategorie, sondern ob das Produkt und die entscheidenden Herstellungsschritte klar beschrieben und belegt werden können.'),P('2.1  Nicht Gegenstand dieser Fassung','h2')]
    for x in ['Herkunftsland oder "Made in"-Aussagen','Bio-, Fairtrade- oder allgemeine Nachhaltigkeitsaussagen','Unternehmensgröße oder Eigentümerstruktur','eine allgemeine Bewertung des gesamten Unternehmens','die Aussage, dass Maschinen oder digitale Werkzeuge grundsätzlich unzulässig seien']:
        story.append(bullet(x))
    story += [P('3  Begriffe','h1')]
    defs=[('Produkt','Ein physisches Endprodukt oder eine eindeutig abgegrenzte Produktfamilie, auf die sich die Prüfung bezieht.'),('Wesentliche Herstellungsschritte','Arbeitsschritte, die für die Entstehung, Formgebung, Verbindung, Funktion oder produktprägende Fertigstellung des Endprodukts wesentlich sind.'),('Menschliche Ausführung','Unmittelbare Ausführung eines wesentlichen Herstellungsschritts durch Menschen. Maschinen können als Werkzeug oder Unterstützung eingesetzt werden.'),('Automatisierter Teilprozess','Ein Prozessschritt, der durch programmierte oder automatisierte Technik ausgeführt wird. Seine Zulässigkeit hängt davon ab, ob wesentliche produktprägende menschliche Arbeit weiterhin erforderlich ist.'),('Fremdfertigung','Wesentliche Herstellungsschritte, die außerhalb des antragstellenden Unternehmens ausgeführt werden.'),('Rückverfolgbarkeit','Eindeutige Zuordnung wichtiger Produktionsschritte, Standorte und externer Fertigung zum geprüften Produkt.')]
    for term,desc in defs: story.append(P(f'<b><font color="#294C77">{term}:</font></b> {desc}'))
    story += [P('4  Prüfkriterien','h1'), criteria_table([
        ('1','Produktentstehung','Durch menschliche Arbeit entsteht aus Materialien oder Komponenten das verkaufsfertige Endprodukt.'),
        ('2','Menschliche Ausführung','Die wesentlichen produktprägenden Herstellungsschritte werden tatsächlich unmittelbar durch Menschen ausgeführt.'),
        ('3','Fachliche Prägung','Relevante Schritte erfordern Erfahrung, Fähigkeit oder bewusste menschliche Entscheidungen.'),
        ('4','Automatisierungsgrenze','Technik kann unterstützen. Eine weitgehend autonome Produktentstehung erfüllt das Kriterium nicht.'),
        ('5','Rückverfolgbarkeit','Produktionsorte, Zulieferer und wichtige externe Fertigung müssen eindeutig zum geprüften Produkt zugeordnet werden können.'),
        ('6','Nachweisbarkeit','Die Angaben zum Herstellungsprozess müssen durch geeignete Informationen und Unterlagen prüfbar sein.')
    ])]
    story += [PageBreak(),P('5  Entscheidungsregel','h1'),callout('Praktischer Kerntest','Würde ohne die menschlichen Herstellungsschritte bereits im Wesentlichen dasselbe verkaufsfertige Produkt vorliegen?'),Spacer(1,4*mm),P('Ist die Antwort im konkreten Fall im Wesentlichen "ja", spricht das gegen eine Zertifizierung. Prägt menschliche Arbeit die Entstehung des Endprodukts wesentlich, werden die übrigen Kriterien und Belege geprüft.')]
    story += [P('6  Nachweise','h1'),P('Welche Belege nötig sind, hängt vom Produkt und vom Herstellungsprozess ab. Eine Selbstauskunft allein reicht für die Prüfung nicht aus.')]
    for x in ['Prozessbeschreibungen und Arbeitsabläufe','Produktionsunterlagen, Stücklisten oder andere Fertigungsunterlagen','Angaben zu Produktionsstandorten und wichtiger externer Fertigung','geeignete Fotos, Videos oder Beobachtungen vor Ort, die die tatsächliche Ausführung zeigen','Auftrags-, Lieferanten- oder andere Unterlagen, wenn sie für die Zuordnung zum Produkt nötig sind','Gespräche oder fachliche Erläuterungen, wenn ein Produktionsschritt genauer eingeordnet werden muss']:
        story.append(bullet(x))
    story += [P('7  Nicht zertifizierbare Konstellationen','h1')]
    for x in ['Ein fertiges oder weitgehend fertiges Produkt wird lediglich importiert, umetikettiert, umverpackt oder mit einem eigenen Logo versehen.','Die wesentlichen produktprägenden Schritte werden weitgehend autonom ausgeführt und die menschliche Tätigkeit beschränkt sich auf Überwachung, Materialzufuhr oder Verpackung.','Die verbleibende manuelle Bearbeitung ist nur geringfügig und verändert ein bereits im Wesentlichen fertiges industrielles Produkt nicht entscheidend.','Wichtige Herstellungsschritte oder externe Fertigung können nicht ausreichend belegt werden.']:
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
    story += [P('9  Bezug zur Zertifizierung und zum öffentlichen Register','h1'),P('Eine Zertifizierungsentscheidung bezieht sich immer auf ein klar benanntes Produkt oder eine Produktfamilie, die angewendete Standardversion und den geprüften Herstellungsprozess.'),P('Bei positiver Entscheidung erhält die Zertifizierung eine eindeutige ID. Der öffentliche Registereintrag zeigt mindestens Hersteller, Produkt, Standardversion, Status und Gültigkeit.'),P('10  Änderungen am Herstellungsprozess','h1'),P('Wichtige Änderungen am Produkt, an Produktionsstandorten, externer Fertigung oder entscheidenden Herstellungsschritten müssen gemeldet werden. Je nach Änderung kann eine erneute Prüfung nötig sein.'),P('11  Status dieser Fassung','h1'),P('Version 0.1 ist die veröffentlichte Fassung dieses Dokuments. Änderungen an Kriterien, Anforderungen an Belege oder Grenzfällen werden in einer neuen Version festgehalten.'),P('Änderungen an Kriterien, Anforderungen an Belege und Grenzfällen erhalten eine neue Version.')]
    doc.build(story,onFirstPage=lambda c,d: header_footer(c,d,'MBH-STD-0.1','Standard','Version 0.1 · Veröffentlicht'),onLaterPages=lambda c,d: header_footer(c,d,'MBH-STD-0.1','Standard','Version 0.1 · Veröffentlicht'))

def build_scheme():
    path=OUT/'made-by-human-certification-scheme-0-1.pdf'
    doc=SimpleDocTemplate(str(path),pagesize=A4,rightMargin=18*mm,leftMargin=18*mm,topMargin=20*mm,bottomMargin=16*mm,title='Made by Human Zertifizierungsschema 0.1',author='Made by Human')
    story=[]
    story += title_block('Zertifizierungsschema 0.1','Regelwerk für Rollen, Prüfprozess, Zertifizierungsentscheidung, Statusänderungen, Register und Markennutzung.','MBH-SCH-0.1','Veröffentlicht',[
        ('Version','0.1'),('Stand','04.09.2026'),('Bezug','Made by Human Standard 0.1'),('Dokumentstatus','Veröffentlicht')
    ])
    story += doc_control('Veröffentlichte Fassung des Zertifizierungssystems.')
    story += [P('1  Zweck und Status','h1'),P('Dieses Dokument beschreibt die Funktionsweise des Made by Human Zertifizierungssystems getrennt vom eigentlichen Produktstandard.'),P('Es regelt nicht, welche Produkteigenschaft erfüllt sein muss - das ist Aufgabe des Standards. Es beschreibt, wie Antrag, Prüfung, fachliche Kontrolle, Entscheidung, Register, Statusänderungen und Markennutzung strukturiert sind.'),P('Version 0.1 beschreibt Rollen, Zuständigkeiten und Abläufe des Zertifizierungssystems.'),P('2  Rollen im System','h1')]
    roles=[('Systeminhaber','verantwortet Standard, Marke, Dokumente, Register und die Regeln des Zertifizierungssystems.'),('Prüfung','prüft Produkt und Herstellungsprozess anhand der geltenden Anforderungen und hält die Belege fest.'),('Fachprüfung','prüft, ob das Prüfergebnis vollständig und fachlich schlüssig ist, und klärt offene Punkte.'),('Zertifizierungsentscheidung','trifft auf Grundlage des geprüften Ergebnisses die Entscheidung über Freigabe, Ablehnung, Aussetzung, Erneuerung oder Widerruf.'),('Öffentliches Register','veröffentlicht die Informationen, die Käufer und Geschäftspartner zur Zertifizierung prüfen können, sowie den aktuellen Status.')]
    for n,d in roles: story.append(P(f'<b><font color="#294C77">{n}:</font></b> {d}'))
    story += [callout('Wichtiger Statushinweis','Prüfung, fachliche Kontrolle und Zertifizierungsentscheidung sind getrennte Rollen. Von Akkreditierung oder externer Unabhängigkeit sprechen wir nur, wenn sie tatsächlich besteht und belegt werden kann.'),Spacer(1,4*mm),P('3  Antrag und Umfang der Zertifizierung','h1')]
    for x in ['Der Antrag nennt Unternehmen, Produkt oder Produktfamilie und die wichtigen Herstellungsorte.','Vor der Prüfung wird klar festgelegt, welche Produkte, Varianten und Produktionsprozesse zur Zertifizierung gehören.','Wichtige externe Fertigung und Zulieferprozesse werden einbezogen, wenn sie für die menschliche Herstellung des Produkts entscheidend sind.','Vor der Prüfung wird festgelegt, welche Standardversion gilt.']:
        story.append(bullet(x))
    story += [P('4  Prüfprozess','h1'),criteria_table([('1','Was wird zertifiziert?','Produkt, Produktfamilie und Herstellungsorte festlegen.'),('2','Herstellung erfassen','Die wichtigen Herstellungsschritte und externe Fertigung erfassen.'),('3','Belege','Unterlagen und Informationen zur tatsächlichen Herstellung prüfen.'),('4','Prüfung','Den Herstellungsprozess anhand der Kriterien des Standards bewerten.'),('5','Fachprüfung','Prüfergebnis fachlich kontrollieren und offene Fragen klären.'),('6','Entscheidung','Über die Zertifizierung entscheiden und bei Freigabe den Status registrieren.')]),PageBreak(),P('5  Zertifizierungsentscheidung','h1'),P('Eine positive Entscheidung ist nur möglich, wenn klar ist, wofür die Zertifizierung gilt, die Kriterien erfüllt sind und die nötigen Belege vorliegen.'),P('Offene Abweichungen können je nach Bedeutung zu Nachforderungen, Ablehnung oder einer späteren Wiederholungs- bzw. Ergänzungsprüfung führen.'),P('6  Zertifizierungsstatus','h1')]
    for n,d in [('Aktiv','Zertifizierung ist innerhalb des festgelegten Umfangs und Zeitraums gültig.'),('Ausgesetzt','Nutzung des Zeichens ist vorübergehend eingeschränkt oder untersagt, bis die Ursache geklärt ist.'),('Abgelaufen','Gültigkeitszeitraum ist beendet und wurde nicht rechtzeitig erneuert.'),('Widerrufen','Zertifizierung wurde beendet; das Zeichen darf für das betroffene Produkt nicht weiter genutzt werden.')]: story.append(P(f'<b><font color="#294C77">{n}:</font></b> {d}'))
    story += [P('7  Gültigkeit, Änderungen und Erneuerung','h1'),P('Gültigkeitsdauer, Erneuerung und mögliche Nachprüfungen werden im jeweiligen Registereintrag und in den geltenden Verfahrensregeln festgehalten.'),P('Wichtige Änderungen am zertifizierten Produkt, Produktionsstandort, Herstellungsprozess oder an externer Fertigung müssen gemeldet werden. Bis zur Klärung kann der Status angepasst werden.'),P('8  Öffentliches Register','h1'),P('Jede freigegebene Kennzeichnung führt zu einem öffentlichen Registereintrag. Die Zertifizierungs-ID verbindet Zeichen und Register eindeutig.'),P('Der öffentliche Registereintrag zeigt mindestens Zertifizierungs-ID, Hersteller, Produkt oder Produktfamilie, Standardversion, Status, Gültigkeit und wichtige Statusänderungen.'),P('9  Markennutzung','h1'),P('Das Zeichen darf nur für das zertifizierte Produkt und bei gültigem Status verwendet werden. Die genauen Regeln stehen in einem eigenen Dokument zur Markennutzung.'),P('Das Zeichen darf nicht den Eindruck erwecken, dass das gesamte Unternehmen, andere Produkte oder ungeprüfte Eigenschaften zertifiziert sind.'),P('10  Beschwerden, Einsprüche und Zeichenmissbrauch','h1'),P('10.1  Beschwerden','h2'),P('Beschwerden können die Durchführung, Kommunikation oder Funktionsweise des Zertifizierungssystems betreffen. Eingang, Prüfung, Maßnahmen und Abschluss werden festgehalten.'),P('10.2  Einsprüche','h2'),P('Ein Einspruch richtet sich gegen eine konkrete Zertifizierungsentscheidung. Er soll von einer Person oder Funktion geprüft werden, die die angefochtene Entscheidung nicht allein getroffen hat.'),P('10.3  Zeichenmissbrauch','h2'),P('Unberechtigte oder irreführende Nutzung des Zeichens sowie die Nutzung für nicht zertifizierte Produkte wird festgehalten und verfolgt. Mögliche Maßnahmen reichen von einer Korrekturaufforderung über Aussetzung bis zum Widerruf und weiteren rechtlichen Schritten.'),callout('Keine vorgetäuschte Unabhängigkeit','Solange die endgültige Organisationsstruktur nicht eingerichtet ist, behaupten wir nicht, dass Beschwerden oder Einsprüche bereits von einer unabhängigen externen Stelle entschieden werden.'),Spacer(1,4*mm),P('11  Interessenkonflikte und Unparteilichkeit','h1'),P('Rollen, Freigaben und fachliche Kontrolle werden so organisiert, dass wirtschaftliche Interessen eines Antragstellers die Entscheidung nicht bestimmen.'),P('Mögliche Interessenkonflikte klären wir vor einer Prüfung und halten sie fest.'),P('12  Versionen und Änderungen','h1'),P('Standard, Zertifizierungsschema, Markennutzungsregeln und Verfahrensregeln haben einen festen Versionsstand. Änderungen werden mit Version, Datum, Status und Grund festgehalten.'),P('Öffentliche Registereinträge zeigen, welche Standardversion angewendet wurde.'),P('13  Status dieser Fassung','h1'),P('Zertifizierungsschema 0.1 ist die veröffentlichte Fassung. Von Akkreditierung oder externer Unabhängigkeit sprechen wir nur, wenn sie für die jeweilige Funktion tatsächlich besteht und belegt werden kann.'),P('Änderungen an Verantwortlichkeiten, Gültigkeit, Überwachung sowie Verfahren für Beschwerden und Einsprüche werden in einer neuen Version festgehalten.')]
    doc.build(story,onFirstPage=lambda c,d: header_footer(c,d,'MBH-SCH-0.1','Zertifizierungsschema','Version 0.1 · Veröffentlicht'),onLaterPages=lambda c,d: header_footer(c,d,'MBH-SCH-0.1','Zertifizierungsschema','Version 0.1 · Veröffentlicht'))

if __name__ == '__main__':
    build_standard()
    build_scheme()
