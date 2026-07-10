# Review_Flow

Design_Production_Flowの一次成果物を、納品可能な品質まで引き上げるレビュー・
差し戻しフロー。

## 目的

「なんとなくOK」を排除し、00_COMPANY_CORE/QUALITY_STANDARD.mdの4層基準に
機械的に準拠した成果物だけが次工程（Delivery_Flow）に進める状態を作ること。

## フェーズ

### Phase 1: 一次レビュー（層別チェック）
- **担当**: Design_Reviewer_AI（QA_Division）
- **入力**: Design_Production_Flowの一次成果物一式
- **やること**: QUALITY_STANDARD.mdの構造層・表現層・体験層・語調層を順に判定する。
  構造層が1つでも未達なら、他層を採点せず即座に不合格として差し戻す
- **出力**: QUALITY_STANDARD判定結果（合格/条件付き合格/不合格）
- **完了条件**: 4層すべての判定が明記され、不合格・条件付き合格の場合は
  項目単位の具体的な修正指示が付いている

### Phase 2: 差し戻し対応
- **担当**: 指摘対象のAI社員（Design_Architect_AI / Senior_UI_Designer_AI /
  Visual_Director_AI / Motion_Designer_AI / Copywriter_AI / Claude_Code_Engineer_AI）
- **入力**: Phase 1の判定結果
- **やること**: 指摘項目のみを修正する（無関係な箇所への手を広げない）
- **出力**: 修正版成果物
- **完了条件**: 指摘項目がすべて解消されている

### Phase 3: 統合レビュー
- **担当**: Master_Creative_Director_AI
- **入力**: Phase 1で合格した成果物、または Phase 2の修正版
- **やること**: Division間の整合性（Visual×Motion、Copy×Visual等）を横断チェックする
  （詳細は02_AI_EMPLOYEES/Master_Creative_Director_AI.md準拠）
- **出力**: Master Review判定（出荷可/条件付き出荷可/差し戻し）
- **完了条件**: 全Divisionペアの整合性チェックが実施され、判定が明記されている

### Phase 4: クライアントプレビュー判断
- **担当**: CEO_AI
- **入力**: Phase 3で「出荷可」判定を得た成果物
- **やること**: クライアントに見せる前の最終確認（誤字、法的表記漏れ等の実務チェック）
- **出力**: クライアントプレビュー許可
- **完了条件**: 実務チェック項目に不備がない

## レビュー往復のルール

- 差し戻しは最大3ラウンドを目安とする。3ラウンドを超えて同じ項目の指摘が
  繰り返される場合、Master_Creative_Director_AIが直接介入し、
  該当AI社員のマニュアル自体に問題がないかを疑う
- 差し戻しは必ず「項目単位」で行い、成果物全体の作り直しを安易に指示しない
- 同一の指摘が複数案件で3回以上繰り返される場合、Style_DNA_Manager_AIに
  「この失敗パターンをDNAライブラリの禁止事項に明記すべきか」を提起する
  （QUALITY_STANDARD.mdの運用ルールに準拠）

## 完了条件（このFlow全体）

- Design_Reviewer_AIの4層判定が「合格」になっている
- Master_Creative_Director_AIの統合レビューが「出荷可」になっている
- CEO_AIのクライアントプレビュー許可が出ている

## 次フェーズへの引き継ぎ

- 「出荷可」判定と全レビュー記録をDelivery_Flowに引き継ぐ
- レビュー記録（指摘〜修正の履歴）は09_ASSETSまたは案件フォルダに保存し、
  Real_Client_Usage_Checklistの実績データとして蓄積する

## NG例

```
Design_Reviewer_AIが「全体的に良いと思います」とだけコメントし、
QUALITY_STANDARDの4層チェックを実施せず合格判定を出す。
```
判定根拠が示されておらず、QUALITY_STANDARD運用として無効。
本来なら不合格になるはずの構造層の崩れを見逃すリスクがある。

## 良い例

```
Design_Reviewer_AIが構造層で「375px幅時にPricingカードが横スクロールする」を検知し、
即座に不合格判定。表現層以降は採点せずClaude_Code_Engineer_AIに差し戻し。
修正後の再レビューで構造層合格を確認してから表現層以降を採点し、最終的に合格。
```
構造層優先の原則を守ることで、無駄な採点コストをかけずに致命的な問題を
早期に検知できている。
