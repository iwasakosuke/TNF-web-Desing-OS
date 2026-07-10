# Design_Production_Flow

キックオフサマリー確定後、一次成果物（Review_Flowに提出できる状態）が
完成するまでの制作フロー。TNF-CIPの創造的作業の中核であり、
02_AI_EMPLOYEES各ファイルの「他AI社員への引き継ぎ方法」を時系列に統合したものが本フローである。

## 目的

Design_Architect_AI → Senior_UI_Designer_AI / Visual_Director_AI → Motion_Designer_AI →
Copywriter_AI → Claude_Code_Engineer_AI という担当の連鎖を、後戻りなく一直線に進めること。
各AI社員個別マニュアルの判断基準・品質基準は変更しない。本フローは「その基準を
どの順序で適用するか」だけを定義する。

## フェーズ

### Phase 1: 情報設計
- **担当**: Design_Architect_AI（Design_Division）
- **入力**: キックオフサマリー
- **やること**: セクション構成・North Star Message・主CTAを確定する
  （詳細は02_AI_EMPLOYEES/Design_Architect_AI.md準拠）
- **出力**: サイトマップ / セクション構成
- **完了条件**: Design_Architect_AI.mdの品質基準（セクション数6〜9、存在理由明記等）を満たす

### Phase 2: 世界観確定（Phase 1と一部並走可）
- **担当**: Visual_Director_AI（Visual_Division）
- **入力**: North Star Message、Project_Start_Flowで確定した参照DNA
- **やること**: 世界観ブリーフ（配色・書体・写真方針）を確定する
  （詳細は02_AI_EMPLOYEES/Visual_Director_AI.md準拠）
- **出力**: 世界観ブリーフ
- **完了条件**: Visual_Director_AI.mdの品質基準（形容詞のみの指示がない等）を満たす

### Phase 3: UIレイアウト設計
- **担当**: Senior_UI_Designer_AI（Design_Division）
- **入力**: Phase 1のサイトマップ + Phase 2の世界観ブリーフ
- **やること**: グリッド・タイポグラフィスケール・コンポーネント選定を確定する
  （詳細は02_AI_EMPLOYEES/Senior_UI_Designer_AI.md準拠）
- **出力**: セクション別レイアウト仕様
- **完了条件**: Senior_UI_Designer_AI.mdの品質基準（グリッド整合、コンポーネント統一等）を満たす
- **重要**: 世界観ブリーフ確定前にレイアウトだけ着手することを禁止する
  （Senior_UI_Designer_AI.mdの禁止事項に準拠）

### Phase 4: モーション設計
- **担当**: Motion_Designer_AI（Motion_Division）
- **入力**: Phase 1の「スクロールで魅せたい瞬間」優先度リスト + Phase 3のコンポーネント状態一覧
- **やること**: 要素別モーション仕様を確定する
  （詳細は02_AI_EMPLOYEES/Motion_Designer_AI.md準拠）
- **出力**: モーション仕様書
- **完了条件**: Motion_Designer_AI.mdの品質基準（目的明記、reduced-motion対応等）を満たす

### Phase 5: コピー確定（Phase 3・4と並走可）
- **担当**: Copywriter_AI（Copy_Division）
- **入力**: Phase 1のNorth Star Message + Phase 2の世界観ブリーフ（コピーの口調方針）
- **やること**: 各セクションの実コピーを確定する
- **出力**: セクション別コピー
- **完了条件**: DESIGN_CONSTITUTION.mdの語調基準（誇張表現の禁止等）を満たす

### Phase 6: 実装
- **担当**: Claude_Code_Engineer_AI（Development_Division）
- **入力**: Phase 3のレイアウト仕様 + Phase 4のモーション仕様 + Phase 5のコピー
- **やること**: HTML/CSS（必要に応じてTailwind/React等）に実装する。
  数値化されていない指示がある場合は着手せず、担当AI社員に差し戻す
- **出力**: 実装コード（一次成果物）
- **完了条件**: 375/768/1440で崩れがなく、指定コンポーネント・モーションが再現されている

## 品質基準

- 各Phaseの完了条件を満たさないまま次Phaseに進んでいない
  （特にPhase 2→3の順序は厳守。世界観確定前のレイアウト着手は禁止）
- Phase間の引き継ぎ資料が、各AI社員マニュアルの「出力フォーマット」に準拠している
- 00_COMPANY_CORE/DESIGN_CONSTITUTION.mdの5軸に違反している要素がない

## NG例

```
納期優先のため、Senior_UI_Designer_AIがVisual_Director_AIの世界観ブリーフを待たず
「とりあえず一般的な配色」でレイアウトを進行。後から配色が世界観と合わず、
レイアウトごと作り直しになった。
```
フェーズの順序を無視した並走が、結果的に最大の手戻りを生んだ典型例。

## 良い例

```
Phase 1(情報設計)とPhase 2(世界観確定)を並走させ、両者が完成した時点で
Master_Creative_Director_AIが簡易照合(North Star Messageと世界観のトーンが
矛盾しないか)を実施してからPhase 3に進行。手戻りゼロで完了。
```
並走可能なフェーズ（1と2、3・4と5）を正しく見極めつつ、依存関係のあるフェーズ
（2→3）は厳守したことで、スピードと安全性を両立している。

## 次フェーズへの引き継ぎ

- Phase 6の実装コードをReview_Flowに提出する
- 各Phaseの成果物（サイトマップ、世界観ブリーフ、レイアウト仕様、モーション仕様、
  コピー）はすべて09_ASSETSまたは案件フォルダに保存し、Review_Flowでの
  差し戻し対応時に参照できるようにする
