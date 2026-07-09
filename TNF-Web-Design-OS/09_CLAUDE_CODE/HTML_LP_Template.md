# HTML_LP_Template — Claude Code実装ルール（VERDEブランド / Cafe LP）

## 概要

`01_BRAND_SYSTEM/VERDE.md` と `02_LP_SYSTEM/Cafe_LP.md` の内容を、静的HTML/CSSに落とし込むための
実装ルールと雛形。フレームワーク非依存のPlain HTML + CSSを基本とし、そのままブラウザで確認できる
1ファイル構成を初期テンプレートとする。

## 使い方

1. 本ファイル末尾の雛形HTMLを `index.html` としてそのまま保存する
2. `[IMAGE: ...]` コメントの箇所に、`07_FABLE_LIBRARY/Cafe_Visual.md` で生成した画像パスを差し込む
3. 店名・住所・料金などのプレースホルダー（`〇〇`）を実際の情報に置き換える
4. ブラウザで開いて確認し、レスポンシブ（375px / 768px / 1440px）で崩れがないかチェックする

## 実装ルール

1. **CSS変数でブランドトークンを管理**: 色・フォント・余白の基準値は `:root` にCSS変数として定義し、
   本文中では変数のみを参照する。ブランド変更時はこの変数ブロックの書き換えだけで対応できるようにする。
2. **セクション単位で完結させる**: 各セクションは `<section>` タグで独立させ、内部で完結するスタイルにする。
   前後のセクションに依存するCSS（隣接セレクタでの上書き等）は避ける。
3. **フォントは2階層まで**: 見出し用セリフ体・本文用サンセリフ体の2種類のみを使用し、
   ウェイトはRegular(400)/Semibold(600)の2段階に絞る。
4. **画像は必ずaltを付与する**: 装飾目的の画像でも空alt（`alt=""`）を明示し、意味のある画像には
   内容を説明するaltを入れる。
5. **アニメーションは最小限**: スクロールフェードイン程度に留め、`prefers-reduced-motion` に配慮する。

## レスポンシブ対応

- ブレークポイント: `768px`（タブレット以下）、`480px`（モバイル）の2段階
- モバイルファーストではなく、デスクトップを基準に `max-width` メディアクエリで縮小対応する
  （既存デザインがデスクトップ想定で作られるOSの運用に合わせるため）
- グリッド系セクション（Menu, Gallery）はデスクトップ3〜4カラム→タブレット2カラム→モバイル1カラム
- Heroのフォントサイズは `clamp()` を使い、画面幅に応じて滑らかに縮小させる
- タップ領域（ボタン・リンク）は最小44px四方を確保する

## セクション構成

雛形HTMLは `02_LP_SYSTEM/Cafe_LP.md` の順序に完全準拠する。

```
Header（固定ナビ）
├── Hero
├── Concept
├── Menu
├── Morning
├── Lunch
├── About
├── Gallery
├── Access
├── CTA
Footer
```

## class命名

BEM風の命名規則を簡略化した独自ルールを採用する。

- セクション単位: `.section-{name}`（例: `.section-hero`, `.section-menu`）
- 要素単位: `.{section}__{element}`（例: `.hero__title`, `.menu__card`）
- 状態・修飾: `.{block}--{modifier}`（例: `.btn--primary`, `.btn--outline`）
- 共通ユーティリティ: `.container`（最大幅+中央寄せ）, `.section-inner`（縦方向の余白統一）

## 画像差し替えルール

1. すべての画像は `/images/` 配下のパスで仮置きする（例: `/images/hero-exterior.jpg`）
2. ファイル名は `{セクション名}-{内容}.jpg` で統一する（例: `menu-cappuccino.jpg`）
3. 画像の直前に `<!-- [IMAGE: Fableプロンプト参照カテゴリ] -->` のHTMLコメントを残し、
   どのFableプロンプトカテゴリで生成すべきかを明示する
4. 差し替え後は `alt` テキストも実際の内容に合わせて更新する
5. Hero画像のみ `loading="eager"`、それ以外は `loading="lazy"` を指定する

## 最初に作るCafe LPのHTML雛形

```html
<!DOCTYPE html>
<html lang="ja">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Cafe Verde | 自家焙煎のイタリアンカフェ</title>
<style>
  :root {
    --color-bg: #F7F3EA;
    --color-primary: #5B6B4F;
    --color-dark: #3B2A20;
    --color-accent: #C4784E;
    --color-cream: #EFE9DC;
    --font-serif: "Fraunces", "Noto Serif JP", serif;
    --font-sans: "Work Sans", "Noto Sans JP", sans-serif;
    --space-section: 120px;
    --space-section-mobile: 64px;
  }

  * { box-sizing: border-box; margin: 0; padding: 0; }

  body {
    background: var(--color-bg);
    color: var(--color-dark);
    font-family: var(--font-sans);
    line-height: 1.8;
    -webkit-font-smoothing: antialiased;
  }

  h1, h2, h3 { font-family: var(--font-serif); font-weight: 600; line-height: 1.4; }

  img { max-width: 100%; display: block; }

  a { color: inherit; text-decoration: none; }

  .container {
    max-width: 1120px;
    margin: 0 auto;
    padding: 0 80px;
  }

  .section-inner {
    padding: var(--space-section) 0;
  }

  /* Header */
  .header {
    position: fixed;
    top: 0; left: 0; right: 0;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 24px 80px;
    z-index: 100;
    background: rgba(247, 243, 234, 0.85);
    backdrop-filter: blur(6px);
  }
  .header__logo { font-family: var(--font-serif); font-size: 20px; font-weight: 600; }
  .header__nav { display: flex; gap: 32px; font-size: 14px; }

  /* Hero */
  .section-hero {
    position: relative;
    height: 100vh;
    min-height: 640px;
    display: flex;
    align-items: center;
    color: #F7F3EA;
  }
  .hero__bg {
    position: absolute; inset: 0;
    background: var(--color-dark);
    /* [IMAGE: 外観 or 店内] */
  }
  .hero__bg img { width: 100%; height: 100%; object-fit: cover; opacity: 0.85; }
  .hero__overlay {
    position: absolute; inset: 0;
    background: linear-gradient(180deg, rgba(59,42,32,0.2) 0%, rgba(59,42,32,0.55) 100%);
  }
  .hero__content {
    position: relative;
    max-width: 640px;
    padding: 0 80px;
  }
  .hero__title {
    font-size: clamp(32px, 5vw, 56px);
    margin-bottom: 24px;
  }
  .hero__subtitle {
    font-size: 18px;
    margin-bottom: 40px;
  }

  /* Buttons */
  .btn {
    display: inline-block;
    padding: 16px 36px;
    border-radius: 999px;
    font-size: 15px;
    font-weight: 600;
    transition: opacity 0.2s ease;
  }
  .btn--primary { background: var(--color-accent); color: #F7F3EA; }
  .btn--outline { border: 1px solid var(--color-dark); color: var(--color-dark); }
  .btn:hover { opacity: 0.85; }

  /* Concept */
  .section-concept .container {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 64px;
    align-items: center;
  }
  .concept__title { font-size: 28px; margin-bottom: 24px; color: var(--color-primary); }
  .concept__text { font-size: 15px; }

  /* Menu */
  .section-menu { background: var(--color-cream); }
  .menu__heading { text-align: center; font-size: 28px; margin-bottom: 64px; color: var(--color-primary); }
  .menu__grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 32px;
  }
  .menu__card { background: var(--color-bg); border-radius: 12px; overflow: hidden; }
  .menu__card img { aspect-ratio: 4 / 3; object-fit: cover; }
  .menu__card-body { padding: 24px; }
  .menu__card-name { font-family: var(--font-serif); font-size: 18px; margin-bottom: 8px; }
  .menu__card-desc { font-size: 14px; margin-bottom: 12px; }
  .menu__card-price { font-size: 14px; font-weight: 600; color: var(--color-accent); }
  .menu__footer { text-align: center; margin-top: 56px; }

  /* Morning / Lunch (shared layout) */
  .section-split .container {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 64px;
    align-items: center;
  }
  .section-split.reverse .container { direction: rtl; }
  .section-split.reverse .container > * { direction: ltr; }
  .split__title { font-size: 26px; margin-bottom: 20px; color: var(--color-primary); }
  .split__text { font-size: 15px; margin-bottom: 32px; }

  /* About */
  .section-about { background: var(--color-cream); }
  .about__grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 40px;
    text-align: center;
  }
  .about__item-title { font-family: var(--font-serif); font-size: 18px; margin-bottom: 12px; color: var(--color-primary); }
  .about__item-text { font-size: 14px; }

  /* Gallery */
  .gallery__heading { text-align: center; font-size: 28px; margin-bottom: 56px; color: var(--color-primary); }
  .gallery__grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 16px;
  }
  .gallery__grid img { aspect-ratio: 1 / 1; object-fit: cover; border-radius: 8px; }

  /* Access */
  .section-access { background: var(--color-cream); }
  .access__grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 64px;
    align-items: center;
  }
  .access__map { aspect-ratio: 4 / 3; background: var(--color-dark); border-radius: 12px; }
  .access__title { font-size: 26px; margin-bottom: 24px; color: var(--color-primary); }
  .access__row { font-size: 14px; margin-bottom: 8px; }

  /* CTA */
  .section-cta {
    background: var(--color-primary);
    color: #F7F3EA;
    text-align: center;
  }
  .cta__title { font-size: 28px; margin-bottom: 16px; }
  .cta__subtitle { font-size: 15px; margin-bottom: 40px; }
  .cta__buttons { display: flex; gap: 16px; justify-content: center; }
  .section-cta .btn--outline { border-color: #F7F3EA; color: #F7F3EA; }

  /* Footer */
  .footer {
    background: var(--color-dark);
    color: var(--color-cream);
    text-align: center;
    padding: 40px 80px;
    font-size: 13px;
  }

  /* Responsive */
  @media (max-width: 768px) {
    .container { padding: 0 24px; }
    .header { padding: 20px 24px; }
    .header__nav { display: none; }
    :root { --space-section: var(--space-section-mobile); }
    .section-concept .container,
    .section-split .container,
    .access__grid { grid-template-columns: 1fr; }
    .section-split.reverse .container { direction: ltr; }
    .menu__grid, .about__grid { grid-template-columns: repeat(2, 1fr); }
    .gallery__grid { grid-template-columns: repeat(2, 1fr); }
  }

  @media (max-width: 480px) {
    .menu__grid, .about__grid, .gallery__grid { grid-template-columns: 1fr; }
    .hero__content { padding: 0 24px; }
  }
</style>
</head>
<body>

  <header class="header">
    <div class="header__logo">Cafe Verde</div>
    <nav class="header__nav">
      <a href="#menu">Menu</a>
      <a href="#morning">Morning</a>
      <a href="#access">Access</a>
    </nav>
  </header>

  <!-- Hero -->
  <section class="section-hero">
    <div class="hero__bg">
      <!-- [IMAGE: 外観 または 店内 プロンプトで生成] -->
      <img src="/images/hero-exterior.jpg" alt="Cafe Verdeの外観、朝の自然光が差し込む店先" loading="eager">
    </div>
    <div class="hero__overlay"></div>
    <div class="hero__content">
      <h1 class="hero__title">一杯のエスプレッソに、<br>イタリアの朝を。</h1>
      <p class="hero__subtitle">自家焙煎の豆と、丁寧な手仕事から生まれる、Cafe Verdeのモーニング。</p>
      <a href="#menu" class="btn btn--primary">メニューを見る</a>
    </div>
  </section>

  <!-- Concept -->
  <section class="section-concept">
    <div class="container section-inner">
      <div class="concept__text-block">
        <h2 class="concept__title">豆と向き合う時間が、<br>私たちの一日のはじまりです。</h2>
        <p class="concept__text">
          Cafe Verdeは、イタリアで学んだ自家焙煎の技術と、地元の食材を大切にする姿勢から生まれました。
          忙しい朝でも、一杯のコーヒーが特別な時間になるように。派手さより、丁寧さを。
          それが私たちの変わらないコンセプトです。
        </p>
      </div>
      <div class="concept__image">
        <!-- [IMAGE: 手元] -->
        <img src="/images/concept-hands.jpg" alt="豆をドリップするスタッフの手元" loading="lazy">
      </div>
    </div>
  </section>

  <!-- Menu -->
  <section class="section-menu" id="menu">
    <div class="container section-inner">
      <h2 class="menu__heading">Menu</h2>
      <div class="menu__grid">
        <div class="menu__card">
          <!-- [IMAGE: コーヒー] -->
          <img src="/images/menu-espresso.jpg" alt="エスプレッソ" loading="lazy">
          <div class="menu__card-body">
            <div class="menu__card-name">Espresso</div>
            <p class="menu__card-desc">深煎りの自家焙煎豆で淹れる、濃厚な一杯。</p>
            <div class="menu__card-price">¥480</div>
          </div>
        </div>
        <div class="menu__card">
          <!-- [IMAGE: コーヒー] -->
          <img src="/images/menu-cappuccino.jpg" alt="カプチーノ" loading="lazy">
          <div class="menu__card-body">
            <div class="menu__card-name">Cappuccino</div>
            <p class="menu__card-desc">きめ細やかなフォームミルクとの絶妙なバランス。</p>
            <div class="menu__card-price">¥550</div>
          </div>
        </div>
        <div class="menu__card">
          <!-- [IMAGE: 料理] -->
          <img src="/images/menu-croissant.jpg" alt="クロワッサン" loading="lazy">
          <div class="menu__card-body">
            <div class="menu__card-name">Croissant</div>
            <p class="menu__card-desc">毎朝焼き上げる、バターの香り豊かな一品。</p>
            <div class="menu__card-price">¥380</div>
          </div>
        </div>
      </div>
      <div class="menu__footer">
        <a href="#" class="btn btn--outline">全メニューを見る</a>
      </div>
    </div>
  </section>

  <!-- Morning -->
  <section class="section-split" id="morning">
    <div class="container section-inner">
      <div class="split__image">
        <!-- [IMAGE: モーニング] -->
        <img src="/images/morning-terrace.jpg" alt="テラス席で楽しむモーニングセット" loading="lazy">
      </div>
      <div class="split__text-block">
        <h2 class="split__title">静かな朝は、Cafe Verdeで。</h2>
        <p class="split__text">
          7:00〜10:30、モーニングセットをご用意しています。焼きたてパンと本日のコーヒーで、
          一日を穏やかに始めませんか。
        </p>
        <a href="#" class="btn btn--outline">モーニングセットを見る</a>
      </div>
    </div>
  </section>

  <!-- Lunch -->
  <section class="section-split reverse" id="lunch">
    <div class="container section-inner">
      <div class="split__text-block">
        <h2 class="split__title">午後の活力に、軽やかな一皿を。</h2>
        <p class="split__text">
          11:30〜14:30はランチタイム。季節野菜のパニーニやサラダプレートなど、
          軽やかで満足感のあるメニューをご用意しています。
        </p>
        <a href="#" class="btn btn--outline">ランチメニューを見る</a>
      </div>
      <div class="split__image">
        <!-- [IMAGE: ランチ] -->
        <img src="/images/lunch-panini.jpg" alt="パニーニとサラダのランチプレート" loading="lazy">
      </div>
    </div>
  </section>

  <!-- About -->
  <section class="section-about">
    <div class="container section-inner">
      <div class="about__grid">
        <div class="about__item">
          <div class="about__item-title">自家焙煎</div>
          <p class="about__item-text">毎週、店内の焙煎機で豆を焼き上げています。</p>
        </div>
        <div class="about__item">
          <div class="about__item-title">産地直送</div>
          <p class="about__item-text">生産者と直接つながる豆だけを選定。</p>
        </div>
        <div class="about__item">
          <div class="about__item-title">丁寧な一杯</div>
          <p class="about__item-text">バリスタが一杯ずつハンドドリップで仕上げます。</p>
        </div>
      </div>
    </div>
  </section>

  <!-- Gallery -->
  <section class="section-gallery">
    <div class="container section-inner">
      <h2 class="gallery__heading">Cafe Verdeの、いつもの風景。</h2>
      <div class="gallery__grid">
        <!-- [IMAGE: 店内] --><img src="/images/gallery-1.jpg" alt="" loading="lazy">
        <!-- [IMAGE: 植物] --><img src="/images/gallery-2.jpg" alt="" loading="lazy">
        <!-- [IMAGE: 手元] --><img src="/images/gallery-3.jpg" alt="" loading="lazy">
        <!-- [IMAGE: 料理] --><img src="/images/gallery-4.jpg" alt="" loading="lazy">
        <!-- [IMAGE: コーヒー] --><img src="/images/gallery-5.jpg" alt="" loading="lazy">
        <!-- [IMAGE: 余白素材] --><img src="/images/gallery-6.jpg" alt="" loading="lazy">
      </div>
    </div>
  </section>

  <!-- Access -->
  <section class="section-access" id="access">
    <div class="container section-inner">
      <div class="access__grid">
        <div class="access__map">
          <!-- Googleマップ埋め込み想定 -->
        </div>
        <div class="access__info">
          <h2 class="access__title">Cafe Verdeへ。</h2>
          <p class="access__row">〇〇県〇〇市〇〇1-2-3</p>
          <p class="access__row">営業時間：7:00〜18:00（L.O. 17:30）</p>
          <p class="access__row">定休日：毎週水曜日</p>
          <p class="access__row">アクセス：〇〇駅から徒歩5分</p>
          <div style="margin-top: 24px;">
            <a href="#" class="btn btn--outline">地図アプリで開く</a>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- CTA -->
  <section class="section-cta">
    <div class="container section-inner">
      <h2 class="cta__title">今日という日を、一杯のコーヒーから。</h2>
      <p class="cta__subtitle">Cafe Verdeで、あなたのお越しをお待ちしています。</p>
      <div class="cta__buttons">
        <a href="#access" class="btn btn--primary">アクセスを確認する</a>
        <a href="#" class="btn btn--outline">Instagramをフォローする</a>
      </div>
    </div>
  </section>

  <footer class="footer">
    &copy; 2026 Cafe Verde. All rights reserved.
  </footer>

</body>
</html>
```
