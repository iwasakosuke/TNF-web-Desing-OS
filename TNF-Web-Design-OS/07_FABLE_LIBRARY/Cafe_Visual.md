# Cafe_Visual — Fableプロンプトライブラリ（VERDEブランド）

`01_BRAND_SYSTEM/VERDE.md` の世界観（natural Italian cafe, warm ivory and olive green tones,
soft morning sunlight, film-like grain, terracotta accents）を基準に、各カテゴリのプロンプトを統一する。
すべてのプロンプトは英語で記述し、末尾に共通のスタイルサフィックスを付与する運用とする。

**共通スタイルサフィックス（全プロンプトに付加）**:
```
, natural Italian cafe aesthetic, warm ivory and olive green color palette,
soft natural morning light, film-like grain, shallow depth of field,
unpretentious elegance, editorial photography style, no text, no watermark
```

---

## 外観

```
Exterior facade of a small Italian-style neighborhood cafe called "Cafe Verde",
warm ivory painted walls, olive green awning and window frames, terracotta pots
with small olive trees by the entrance, wooden signage with minimal typography,
morning sunlight casting soft shadows on the pavement, a quiet European street,
wide shot, eye-level angle
```

## 店内

```
Interior of a small Italian cafe, warm ivory walls, olive green accent details,
wooden counter and shelving with coffee bags and ceramic cups, soft morning
sunlight streaming through large windows, a few empty wooden tables and chairs,
cozy and minimal atmosphere, no people, wide angle shot
```

## 料理

```
Close-up of a rustic panini sandwich and a small side salad on a ceramic plate,
placed on a wooden table with warm natural light from the side, terracotta
napkin and olive branch as garnish, shallow depth of field, top-down 45 degree angle
```

## コーヒー

```
Close-up of a cappuccino in a ceramic cup with delicate latte art, steam rising,
placed on a wooden table near a sunlit window, olive green saucer, soft warm
morning light, shallow depth of field, 45 degree angle shot
```

## モーニング

```
A breakfast table set on a sunlit terrace, croissants, a cappuccino, and fresh
orange juice arranged on a wooden table, morning sunlight casting long soft
shadows, linen napkin, small potted herb plant on the table, cozy relaxed
morning atmosphere, eye-level angle
```

## ランチ

```
A light lunch plate with a panini, mixed greens, and a glass of sparkling water,
served on a wooden table on a cafe terrace, soft midday natural light, olive
branch decoration, terracotta tableware accents, top-down angle
```

## 植物

```
Close-up of a small potted olive branch and dried herbs on a wooden windowsill,
soft morning sunlight casting gentle shadows, warm ivory wall in the background,
minimal composition, negative space on one side for text overlay
```

## 手元

```
Close-up of hands carefully pouring hot water over coffee grounds in a pour-over
dripper, steam rising, warm morning sunlight from the side, wooden counter
surface, shallow depth of field, focus on the hands and dripper
```

## 余白素材

```
Minimal flat lay of a linen napkin, a small ceramic cup, and a sprig of dried
herbs on a warm ivory textured surface, soft natural light, large empty negative
space for text placement, muted olive and terracotta color accents, top-down angle
```

---

## 使用ガイドライン

- 生成後、彩度・コントラストが強すぎる場合は「muted tones, slightly desaturated」を追加して再生成する
- 人物を含めたい場合は `a person's hands only, no face visible` のように顔出しを避ける指定を推奨
- 縦長（Hero用）/ 正方形（Gallery用）など比率が必要な場合はプロンプト末尾に
  `vertical composition, 4:5 aspect ratio` 等を追加する
- 生成画像は `02_LP_SYSTEM/Cafe_LP.md` の各セクションの「使用画像」欄と対応させて管理する
