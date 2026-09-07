from pathlib import Path
from PIL import Image
import cv2
import numpy as np

ROOT = Path(__file__).resolve().parent.parent
BRAND = ROOT / "public" / "brand"
MASTER = BRAND / "made-by-human-logo.png"
LEATHER_SOURCE = BRAND / "IMG_1037.png"
TEXTILE_SOURCE = BRAND / "IMG_1047.png"
LEATHER_OUT = BRAND / "IMG_1037_mbh.png"
TEXTILE_OUT = BRAND / "IMG_1047_mbh.png"
LEATHER_WEBP = BRAND / "IMG_1037_mbh.webp"
TEXTILE_WEBP = BRAND / "IMG_1047_mbh.webp"
EXTRA_WEBP = [
    (BRAND / "IMG_1039.png", BRAND / "IMG_1039.webp"),
    (BRAND / "IMG_1040.png", BRAND / "IMG_1040.webp"),
    (BRAND / "IMG_1053.png", BRAND / "IMG_1053.webp"),
]

for path in (MASTER, LEATHER_SOURCE, TEXTILE_SOURCE):
    if not path.exists():
        raise SystemExit(f"Missing required source: {path}")

# Use the exact master logo generated from IMG_1070.png.
logo_rgba = np.array(Image.open(MASTER).convert("RGBA"))
gray = cv2.cvtColor(logo_rgba[:, :, :3], cv2.COLOR_RGB2GRAY)
source_alpha = logo_rgba[:, :, 3].astype(np.float32) / 255.0
ink = ((255 - gray).astype(np.float32) / 255.0) * source_alpha
ink = np.clip((ink - 0.04) / 0.92, 0, 1)
logo_mask = (ink * 255).astype(np.uint8)
ys, xs = np.where(logo_mask > 12)
logo_mask = logo_mask[ys.min():ys.max() + 1, xs.min():xs.max() + 1]


def texture_fill(rect, region, sample_region, seed):
    arr = rect.copy().astype(np.float32)
    x1, y1, x2, y2 = region
    sx1, sy1, sx2, sy2 = sample_region
    sample = arr[sy1:sy2, sx1:sx2, :]
    median = np.median(sample.reshape(-1, 3), axis=0)
    residual = sample - cv2.GaussianBlur(sample, (0, 0), 3)
    std = np.maximum(np.std(residual.reshape(-1, 3), axis=0), 1.2)

    h = y2 - y1
    w = x2 - x1
    rng = np.random.default_rng(seed)
    noise = rng.normal(0, 1, (h, w, 3)) * std.reshape(1, 1, 3)
    noise = cv2.GaussianBlur(noise.astype(np.float32), (0, 0), 0.45)
    fill = median.reshape(1, 1, 3) + noise

    yy = np.minimum(np.arange(h) + 1, np.arange(h, 0, -1))
    xx = np.minimum(np.arange(w) + 1, np.arange(w, 0, -1))
    feather = np.clip(np.minimum(yy[:, None], xx[None, :]) / 8, 0, 1)

    old = arr[y1:y2, x1:x2]
    arr[y1:y2, x1:x2] = old * (1 - feather[:, :, None]) + fill * feather[:, :, None]
    return np.clip(arr, 0, 255).astype(np.uint8)


def add_logo(rect, xyxy, color, opacity=0.95):
    arr = rect.astype(np.float32)
    x1, y1, x2, y2 = map(int, xyxy)
    h = y2 - y1
    w = x2 - x1
    mask = cv2.resize(logo_mask, (w, h), interpolation=cv2.INTER_AREA).astype(np.float32) / 255.0
    mask *= opacity
    ink_color = np.array(color, np.float32)
    region = arr[y1:y2, x1:x2]
    arr[y1:y2, x1:x2] = region * (1 - mask[:, :, None]) + ink_color * mask[:, :, None]
    return np.clip(arr, 0, 255).astype(np.uint8)


def edit_tag(base, quad, size, erase_region, sample_region, logo_rect, color, seed):
    width, height = size
    src = np.float32(quad)
    dst = np.float32([[0, 0], [width - 1, 0], [width - 1, height - 1], [0, height - 1]])
    matrix = cv2.getPerspectiveTransform(src, dst)
    inverse = cv2.getPerspectiveTransform(dst, src)

    rect = cv2.warpPerspective(base, matrix, (width, height), flags=cv2.INTER_CUBIC)
    rect = texture_fill(rect, erase_region, sample_region, seed)
    rect = add_logo(rect, logo_rect, color)

    warped = cv2.warpPerspective(rect, inverse, (base.shape[1], base.shape[0]), flags=cv2.INTER_CUBIC)
    polygon = np.zeros(base.shape[:2], np.uint8)
    cv2.fillConvexPoly(polygon, np.array(quad, np.int32), 255)
    polygon = cv2.GaussianBlur(polygon, (0, 0), 0.55).astype(np.float32) / 255.0

    return np.clip(
        base.astype(np.float32) * (1 - polygon[:, :, None]) +
        warped.astype(np.float32) * polygon[:, :, None],
        0, 255
    ).astype(np.uint8)


def add_box_label(base):
    # Opaque paper label deliberately covers the old round "Made by Humans" sticker.
    # The artwork itself is the exact master logo; it is never regenerated.
    label_w, label_h = 134, 150
    sample = base[565:710, 850:980].astype(np.float32)
    median = np.median(sample.reshape(-1, 3), axis=0)
    rng = np.random.default_rng(44)
    noise = rng.normal(0, 1, (label_h, label_w, 3)) * 1.2
    label = np.clip(median.reshape(1, 1, 3) + 8 + noise, 0, 255).astype(np.uint8)
    cv2.rectangle(
        label, (0, 0), (label_w - 1, label_h - 1),
        tuple(int(v) for v in np.clip(median - 10, 0, 255)), 1
    )

    logo_w, logo_h = 92, 115
    mask = cv2.resize(logo_mask, (logo_w, logo_h), interpolation=cv2.INTER_AREA).astype(np.float32) / 255.0
    mask *= 0.95
    x0 = (label_w - logo_w) // 2
    y0 = (label_h - logo_h) // 2
    region = label[y0:y0 + logo_h, x0:x0 + logo_w].astype(np.float32)
    color = np.array([58, 45, 32], np.float32)
    label[y0:y0 + logo_h, x0:x0 + logo_w] = np.clip(
        region * (1 - mask[:, :, None]) + color * mask[:, :, None], 0, 255
    ).astype(np.uint8)

    src = np.float32([[0, 0], [label_w - 1, 0], [label_w - 1, label_h - 1], [0, label_h - 1]])
    dst = np.float32([(982, 558), (1111, 563), (1112, 711), (982, 705)])
    matrix = cv2.getPerspectiveTransform(src, dst)
    warped = cv2.warpPerspective(label, matrix, (base.shape[1], base.shape[0]), flags=cv2.INTER_CUBIC)

    polygon = np.zeros(base.shape[:2], np.uint8)
    cv2.fillConvexPoly(polygon, np.array(dst, np.int32), 255)
    polygon = cv2.GaussianBlur(polygon, (0, 0), 0.6).astype(np.float32) / 255.0

    return np.clip(
        base.astype(np.float32) * (1 - polygon[:, :, None]) +
        warped.astype(np.float32) * polygon[:, :, None],
        0, 255
    ).astype(np.uint8)


def save_webp(image, path, max_width=1600):
    if not isinstance(image, Image.Image):
        image = Image.fromarray(image)
    image = image.convert("RGB")
    if image.width > max_width:
        height = round(image.height * max_width / image.width)
        image = image.resize((max_width, height), Image.Resampling.LANCZOS)
    image.save(path, "WEBP", quality=88, method=6)


# Leather photo: preserve the original image completely except for the existing hang-tag print.
leather = np.array(Image.open(LEATHER_SOURCE).convert("RGB"))
leather = edit_tag(
    leather,
    [(1320, 603), (1395, 607), (1395, 716), (1318, 713)],
    (180, 260),
    (8, 125, 176, 258),
    (18, 48, 164, 120),
    (18, 72, 162, 248),
    (47, 35, 25),
    11,
)
Image.fromarray(leather).save(LEATHER_OUT, quality=97, subsampling=0)
save_webp(leather, LEATHER_WEBP)

# Textile photo: preserve the exact original scene/profile, replace only old brand applications.
textile = np.array(Image.open(TEXTILE_SOURCE).convert("RGB"))
textile = edit_tag(
    textile,
    [(526, 674), (657, 700), (554, 895), (395, 852)],
    (220, 320),
    (8, 90, 214, 315),
    (10, 10, 210, 92),
    (25, 72, 195, 302),
    (60, 46, 32),
    19,
)
textile = add_box_label(textile)
Image.fromarray(textile).save(TEXTILE_OUT, quality=97, subsampling=0)
save_webp(textile, TEXTILE_WEBP)

for source, output in EXTRA_WEBP:
    if source.exists():
        save_webp(Image.open(source), output)

print("Prepared:", LEATHER_OUT)
print("Prepared:", TEXTILE_OUT)
print("Prepared web:", LEATHER_WEBP)
print("Prepared web:", TEXTILE_WEBP)
