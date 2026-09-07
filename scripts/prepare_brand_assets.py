from pathlib import Path
from PIL import Image, ImageChops

ROOT = Path(__file__).resolve().parent.parent
SOURCE = ROOT / "IMG_1070.png"
OUT = ROOT / "public" / "brand"
OUT.mkdir(parents=True, exist_ok=True)

if not SOURCE.exists():
    raise SystemExit("IMG_1070.png not found at repository root")

img = Image.open(SOURCE).convert("RGBA")
w, h = img.size

# Build a foreground mask that works with either transparency or a flat background.
alpha = img.getchannel("A")
if alpha.getextrema()[0] < 250:
    mask = alpha.point(lambda a: 255 if a > 20 else 0)
else:
    corners = [img.getpixel((0, 0))[:3], img.getpixel((w-1, 0))[:3], img.getpixel((0, h-1))[:3], img.getpixel((w-1, h-1))[:3]]
    bg = tuple(sum(c[i] for c in corners) // len(corners) for i in range(3))
    rgb = img.convert("RGB")
    mask = Image.new("L", (w, h), 0)
    px = rgb.load()
    mp = mask.load()
    for y in range(h):
        for x in range(w):
            r, g, b = px[x, y]
            if abs(r-bg[0]) + abs(g-bg[1]) + abs(b-bg[2]) > 48:
                mp[x, y] = 255

bbox = mask.getbbox()
if not bbox:
    raise SystemExit("Could not detect logo artwork in IMG_1070.png")

def padded(box, pad):
    l, t, r, b = box
    return (max(0, l-pad), max(0, t-pad), min(w, r+pad), min(h, b+pad))

# Trimmed full master logo.
full_box = padded(bbox, max(12, int(min(w, h) * 0.025)))
full_logo = img.crop(full_box)
full_logo.save(OUT / "made-by-human-logo.png", optimize=True)
full_logo.save(OUT / "made-by-human-logo.webp", "WEBP", quality=92, method=6)

# Social preview: exact approved full logo on the CI paper background.
social = Image.new("RGBA", (1200, 630), (243, 240, 232, 255))
social_logo = full_logo.copy()
social_logo.thumbnail((610, 500), Image.Resampling.LANCZOS)
social.alpha_composite(
    social_logo,
    ((social.width - social_logo.width) // 2, (social.height - social_logo.height) // 2),
)
social.convert("RGB").save(OUT / "made-by-human-social.png", optimize=True)

# Search/browser icon: keep the complete approved logo inside a square field.
favicon = Image.new("RGBA", (512, 512), (243, 240, 232, 255))
favicon_logo = full_logo.copy()
favicon_logo.thumbnail((450, 430), Image.Resampling.LANCZOS)
favicon.alpha_composite(
    favicon_logo,
    ((favicon.width - favicon_logo.width) // 2, (favicon.height - favicon_logo.height) // 2),
)
favicon.convert("RGB").save(OUT / "made-by-human-favicon.png", optimize=True)

# Find distinct horizontal artwork bands (wordmark above, seal below).
l, t, r, b = bbox
row_counts = []
for y in range(t, b):
    row = mask.crop((l, y, r, y+1))
    row_counts.append(sum(1 for v in row.getdata() if v > 0))

threshold = max(2, int((r-l) * 0.002))
active = [i for i, c in enumerate(row_counts) if c >= threshold]
runs = []
if active:
    start = prev = active[0]
    for v in active[1:]:
        if v - prev > max(8, int(h * 0.01)):
            runs.append((start, prev+1))
            start = v
        prev = v
    runs.append((start, prev+1))

if len(runs) < 2:
    # Safe fallback: split around the largest quiet gap in the middle half.
    occup = row_counts
    mid_start = int(len(occup) * 0.22)
    mid_end = int(len(occup) * 0.62)
    quiet = min(range(mid_start, mid_end), key=lambda i: occup[i])
    runs = [(0, quiet), (quiet+1, len(occup))]

# First significant band is the wordmark; last significant band is the round seal.
word_run = runs[0]
seal_run = runs[-1]

def component_bbox(run):
    y1 = t + run[0]
    y2 = t + run[1]
    sub = mask.crop((l, y1, r, y2))
    sb = sub.getbbox()
    if not sb:
        return (l, y1, r, y2)
    sl, st, sr, sbot = sb
    return (l+sl, y1+st, l+sr, y1+sbot)

word_box = padded(component_bbox(word_run), max(10, int(min(w, h) * 0.018)))
seal_box_raw = component_bbox(seal_run)

# Wordmark crop for compact header/footer use.
img.crop(word_box).save(OUT / "made-by-human-wordmark.png", optimize=True)

# Make a square seal crop, centered on the detected seal artwork.
sl, st, sr, sb = seal_box_raw
cx = (sl + sr) / 2
cy = (st + sb) / 2
side = max(sr-sl, sb-st) * 1.10
half = side / 2
seal_box = (
    max(0, int(cx-half)),
    max(0, int(cy-half)),
    min(w, int(cx+half)),
    min(h, int(cy+half)),
)
seal = img.crop(seal_box)
# Pad to a true square if clipping at the image edge occurred.
sw, sh = seal.size
if sw != sh:
    size = max(sw, sh)
    canvas = Image.new("RGBA", (size, size), (0, 0, 0, 0))
    canvas.alpha_composite(seal, ((size-sw)//2, (size-sh)//2))
    seal = canvas
seal.save(OUT / "made-by-human-seal.png", optimize=True)

print("Prepared:", OUT / "made-by-human-logo.png")
print("Prepared:", OUT / "made-by-human-logo.webp")
print("Prepared:", OUT / "made-by-human-social.png")
print("Prepared:", OUT / "made-by-human-favicon.png")
print("Prepared:", OUT / "made-by-human-wordmark.png")
print("Prepared:", OUT / "made-by-human-seal.png")
