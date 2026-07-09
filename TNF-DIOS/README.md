# TNF Design Intelligence OS（TNF-DIOS）

## TNF-DIOSの目的

TNF-DIOSは、LP・会社ホームページ・サービスサイト・SNS投稿・提案資料など、
形式の異なるあらゆるアウトプットに転用できる「AIデザイン制作OS」です。

TNF-Web-Design-OSが主にWebサイト制作（LP・コーポレート・サービスサイト）に特化していたのに対し、
TNF-DIOSはそれをさらに拡張し、「16人のAI社員」というメタファーで役割を明確に分担させながら、
ブランド戦略〜ビジュアル設計〜UI/UX〜モーション〜実装〜レビューまでを一気通貫でAI駆動化することを
目的とします。案件の種類（Web/SNS/資料/バナー）に関わらず、同じ設計思想・同じ品質基準で
アウトプットを生み出せる状態を作ります。

## 使い方

1. **00_CORE** でOS全体の思想（Vision / Design Constitution / UX・UI・Motion原則）を確認する
2. **01_AI_EMPLOYEES** から、今回のタスクに必要な役割（AI社員）のmdファイルを読み込み、
   その役割になりきってAIに作業させる
3. **02_STYLE_DNA** から近いブランドDNA（Apple / Linear / Stripe等）を選び、方向性の参照にする
4. **03_VISUAL_DNA_LIBRARY** から業種別のビジュアル方向性を選定する
5. **04_UI_UX_LIBRARY** と **05_MOTION_LIBRARY** を組み合わせて画面設計・動き設計を行う
6. **06_PROMPTS** から使用するAIツール（Claude / Claude Code / Fable / GPT Image / Midjourney / Flux）
   に応じたプロンプトを取得する
7. **07_PROJECT_TEMPLATES** で案件の種類（LP/コーポレート/サービスサイト/SNS/提案資料/バナー）に
   応じたテンプレートを選ぶ
8. **08_EXPORT** で最終的な出力形式（HTML/Tailwind/React/Next.js/WordPress/STUDIO/Canva/Figma）
   に応じた実装ルールを参照する
9. **09_ASSETS** に生成物・ムードボード・参考資料・スクリーンショットを蓄積し、ナレッジを資産化する

## AI社員の役割

TNF-DIOSでは16人のAI社員が、実際の制作会社の組織構造を模して連携します。

| AI社員 | 役割 |
|---|---|
| CEO_AI | 全体方針の意思決定、各AI社員への指示統括 |
| Brand_Strategist_AI | ブランド戦略・ポジショニングの設計 |
| Design_Architect_AI | サイト構造・情報設計（IA）の設計 |
| Senior_UI_Designer_AI | 画面単位のUI設計・仕上げ |
| UX_Researcher_AI | ユーザー課題の分析、体験設計の検証 |
| Visual_Director_AI | ビジュアル全体のディレクション・世界観統括 |
| Photography_Director_AI | 写真・画像表現の方向性設計 |
| Color_Designer_AI | 配色設計・カラーシステム構築 |
| Typography_Designer_AI | タイポグラフィ設計・書体選定 |
| Motion_Designer_AI | アニメーション・モーション設計 |
| Interaction_Designer_AI | インタラクション（操作体験）設計 |
| Prompt_Engineer_AI | 各AIツール向けプロンプトの設計・最適化 |
| Style_DNA_Manager_AI | ブランドDNA・スタイルライブラリの管理 |
| Frontend_Engineer_AI | HTML/CSS/フレームワークへの実装 |
| Design_Reviewer_AI | 品質基準に基づくデザインレビュー |
| Creative_Director_AI | 全体のクリエイティブ品質の最終承認 |

タスクの規模に応じて、必要な役割のみを呼び出して使うことができます
（小規模なLP制作ならDesign_Architect_AI + Senior_UI_Designer_AI + Frontend_Engineer_AIの3役割で完結、
大規模なブランドリニューアルなら16役割すべてを順に稼働、など）。

## 4日間のFable活用計画

### Day 1：ブランド方向性とスタイルDNAの選定
- 案件のブランド概要をBrand_Strategist_AIとVisual_Director_AIで整理
- 02_STYLE_DNA / 03_VISUAL_DNA_LIBRARY から近い方向性を選定
- Fableで方向性確認用のラフイメージを3〜5パターン生成し、トンマナを確定

### Day 2：セクション別ビジュアルの本生成
- 確定したトンマナをもとに、06_PROMPTS/Fable のプロンプトテンプレートを個別カスタマイズ
- Hero・Concept・主要機能紹介など、セクションごとに必要なビジュアルをFableで生成
- 生成物を09_ASSETS/Fable_Exports に格納し、命名規則を統一

### Day 3：バリエーション出しとブラッシュアップ
- 各ビジュアルについて光・構図・トーンのバリエーションを追加生成
- Design_Reviewer_AIの品質基準でセルフレビューし、ブランド一貫性を確認
- 採用カットを確定し、09_ASSETS/Moodboards にまとめる

### Day 4：実装への統合と最終調整
- Frontend_Engineer_AIが08_EXPORT配下のテンプレートに画像を統合
- 全体を通してVisual_Director_AI・Creative_Director_AIが最終レビュー
- 制作過程で得た知見をFableプロンプトテンプレートにフィードバックし、ライブラリを更新

## ClaudeとClaude Codeの使い分け

- **Claude（対話・文章生成）**: ブランド戦略の壁打ち、コピーライティング、構成案の検討、
  デザインレビューのフィードバック、AI社員としての役割ロールプレイなど、
  「考える・書く・議論する」タスクに使用する
- **Claude Code（実装・ファイル操作）**: リポジトリ内のmdファイル・テンプレートの作成/編集、
  HTML/CSS/Reactなど実際のコード生成、複数ファイルにまたがる一括編集、
  Gitへのコミット・プッシュなど、「作る・保存する・実行する」タスクに使用する

原則として、方向性が固まっていない企画段階はClaudeで議論し、方向性が確定してから
Claude Codeで実装・ファイル生成に移行する。生成された成果物のレビューは再びClaudeに戻して
壁打ちする、という往復を繰り返すことでスピードと品質を両立する。

## どのプロジェクトにも転用する方法

1. **07_PROJECT_TEMPLATES** から案件種別（LP/コーポレート/サービスサイト/SNS/提案資料/バナー）
   に対応するフォルダを選び、その中に案件専用のサブフォルダを作成する
2. 00_CORE〜06_PROMPTSまでのライブラリ群は共通資産として一切変更せず「参照」するのみとし、
   案件固有の情報は07_PROJECT_TEMPLATES以下と09_ASSETS以下にのみ書き込む
3. 案件で新しく確立した型（新しいセクションパターン、新しいDNA、新しい業種のビジュアル方向性等）は、
   案件終了後に04_UI_UX_LIBRARY・02_STYLE_DNA・03_VISUAL_DNA_LIBRARYへ汎用化して還元する
4. これにより、OS全体が案件をこなすたびに賢くなり、次の案件の初速がさらに上がる状態を維持する
