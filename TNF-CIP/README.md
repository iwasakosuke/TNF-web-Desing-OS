# TNF-CIP（Trigger Nexus Forge Creative Intelligence Platform）

## TNF-CIPの目的

TNF-CIPは、AIクリエイティブ制作会社としての「社内OS」です。LP・会社ホームページ・
サービスサイトだけでなく、SNS投稿・提案資料・バナー・動画まで、形式を問わず
あらゆるアウトプットを一貫した品質基準で高速制作できる制作基盤を目指します。

これまでのTNF-Web-Design-OS（Web制作特化）、TNF-DIOS（AI社員16名によるデザインOS）を
発展させ、TNF-CIPでは「会社組織」というメタファーをさらに一段深め、10の事業部
（Division）が明確な責任範囲を持ちながら連携し、Master_Creative_Director_AIを頂点とする
指揮系統のもとで、あらゆるクリエイティブ案件を処理できる体制を構築します。

## 使い方

1. **00_COMPANY_CORE** で会社全体の思想（Vision / Mission / Quality Standard /
   Design Constitution）を確認する
2. **01_DIVISIONS** から、案件に関わる事業部（Strategy / Design / Visual / Motion /
   Copy / Development / Research / Asset / QA / Innovation Lab）を特定し、
   各事業部の責任範囲・連携ルールを確認する
3. **02_AI_EMPLOYEES** から、実際にタスクを遂行するAI社員のマニュアルを読み込み、
   その人格・判断基準になりきってAIに作業させる
4. **03_STYLE_DNA** と **04_VISUAL_DNA** から、案件に合うブランド原則・業種別ビジュアル
   方向性を選定する
5. **05_UI_UX_SYSTEM** と **06_MOTION_SYSTEM** で画面設計・動き設計を行う
6. **07_PROMPTS** から使用するAIツール別（Claude / Claude Code / Fable / GPT Image /
   Midjourney / Flux）のプロンプトテンプレートを取得する
7. **08_PROJECT_TEMPLATES** で案件種別（LP/コーポレート/サービスサイト/SNS/提案資料/
   バナー）に応じたテンプレートを使用する
8. **09_ASSETS** に生成物・ムードボード・参考資料・スクリーンショットを蓄積し、
   会社全体のナレッジとして資産化する

## 部署構成

TNF-CIPは以下10の事業部（Division）から構成される、実在の制作会社を模した組織です。

| 事業部 | 責任範囲 |
|---|---|
| Strategy_Division | ブランド戦略・情報設計・案件全体の方針決定 |
| Design_Division | UI設計・レイアウト・デザインシステムの構築 |
| Visual_Division | 世界観・配色・写真・ビジュアル表現の統括 |
| Motion_Division | アニメーション・インタラクション設計 |
| Copy_Division | コピーライティング・トーン設計 |
| Development_Division | HTML/CSS/フレームワークへの実装 |
| Research_Division | ユーザー調査・競合分析・市場理解 |
| Asset_Division | 画像・DNA・プロンプトライブラリの資産管理 |
| QA_Division | 品質基準への準拠レビュー・最終チェック |
| Innovation_Lab | 新しい表現・新しいAIツールの実験と組織への還元 |

各事業部には02_AI_EMPLOYEESに定義されたAI社員が所属し、Master_Creative_Director_AIが
事業部横断で指揮を執ります。小規模案件では必要な事業部・AI社員のみを稼働させ、
大規模案件では全事業部を順に連携させる、という柔軟な運用を前提とします。

## 4日間のFable活用計画

### Day 1：方向性決定とスタイルDNA選定
- Strategy_DivisionとVisual_Divisionが案件のブランド概要を整理
- 03_STYLE_DNA / 04_VISUAL_DNA から近い方向性を選定
- Fableで方向性確認用のラフイメージを3〜5パターン生成し、トンマナを確定

### Day 2：セクション別ビジュアルの本生成
- 確定したトンマナをもとに、07_PROMPTS/Fable のプロンプトテンプレートを個別カスタマイズ
- Hero・主要機能紹介など、必要なビジュアルをFableでセクションごとに生成
- 生成物を09_ASSETS/Fable_Exports に格納し、命名規則を統一

### Day 3：バリエーション出しとブラッシュアップ
- 光・構図・トーンのバリエーションを追加生成し、Visual_Divisionが選定
- QA_Divisionの品質基準でセルフレビューし、ブランド一貫性を確認
- 採用カットを確定し、09_ASSETS/Moodboards にまとめる

### Day 4：実装への統合と最終調整
- Development_Divisionが08_PROJECT_TEMPLATES配下のテンプレートに画像を統合
- Master_Creative_Director_AIが全体を最終レビュー
- 制作過程で得た知見をAsset_Division経由でFableプロンプトライブラリにフィードバック

## ClaudeとClaude Codeの使い分け

- **Claude（対話・文章生成）**: ブランド戦略の壁打ち、コピーライティング、構成案の検討、
  デザインレビューのフィードバック、各AI社員としてのロールプレイなど、
  「考える・書く・議論する」タスクに使用する
- **Claude Code（実装・ファイル操作）**: リポジトリ内のmdファイル・テンプレートの作成/編集、
  HTML/CSS/Reactなど実際のコード生成、複数ファイルにまたがる一括編集、
  Gitへのコミット・プッシュなど、「作る・保存する・実行する」タスクに使用する

方向性が固まっていない企画段階はClaudeで議論し、方向性が確定してからClaude Codeで
実装・ファイル生成に移行する。生成された成果物のレビューは再びClaudeに戻して
壁打ちする、という往復を繰り返すことでスピードと品質を両立する。
