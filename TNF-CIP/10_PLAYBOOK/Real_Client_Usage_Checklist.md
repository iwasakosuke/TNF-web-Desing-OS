# Real_Client_Usage_Checklist

実案件で「案件開始〜納品」まで、このチェックリスト1枚を上から順に消化すれば
迷わず進められる統合チェックリスト。各項目の詳細は対応するFlowファイルを参照。

## 使い方

- 案件ごとにこのファイルをコピーし、案件フォルダ（
  `08_PROJECT_TEMPLATES/{種別}/{クライアント名}/00_Checklist.md`）に保存する
- チェックが付けられない項目がある場合、次のフェーズに進まない
- 「担当」列のAI社員が実施し、Master_Creative_Director_AIが随時進捗を確認する

---

## Phase A: Client Intake（→ Client_Intake_Flow.md）

- [ ] 案件種別を1つに特定した（担当: CEO_AI）
- [ ] Client Briefの必須項目をすべて埋めた、または未確定を明示した（担当: Brand_Strategist_AI）
- [ ] Master_Creative_Director_AIの承認を得た

## Phase B: Project Start（→ Project_Start_Flow.md）

- [ ] 案件オーナー（Master_Creative_Director_AI）を確定した
- [ ] Design/Visual/Development各Divisionの担当を最低1名指名した
- [ ] 参照ブランドDNA（03_STYLE_DNA / 04_VISUAL_DNA）を1件以上確定した
- [ ] 案件専用フォルダを命名規則通りに作成した（→ GitHub_Save_Flow.md）
- [ ] キックオフサマリーを発行し、稼働AI社員全員に共有した

## Phase C: Design Production（→ Design_Production_Flow.md）

- [ ] セクション構成・North Star Message・主CTAを確定した（Design_Architect_AI）
- [ ] 世界観ブリーフ（配色・書体・写真方針）を確定した（Visual_Director_AI）
- [ ] 世界観ブリーフ確定「後」にUIレイアウトへ着手した（順序厳守）
- [ ] グリッド・タイポグラフィスケール・コンポーネントを確定した（Senior_UI_Designer_AI）
- [ ] モーション仕様（目的・duration・easing）を確定した（Motion_Designer_AI）
- [ ] コピーを確定した（Copywriter_AI）
- [ ] 375/768/1440で実装した（Claude_Code_Engineer_AI）

## Phase D: Review（→ Review_Flow.md）

- [ ] QUALITY_STANDARD 構造層チェックに合格した
- [ ] QUALITY_STANDARD 表現層チェックに合格した
- [ ] QUALITY_STANDARD 体験層チェックに合格した
- [ ] QUALITY_STANDARD 語調層チェックに合格した
- [ ] Master_Creative_Director_AIの統合レビュー（Division間整合性）に合格した
- [ ] CEO_AIの実務チェック（誤字・法的表記等）に合格した

## Phase E: Delivery（→ Delivery_Flow.md）

- [ ] 納品パッケージ5項目（Brief/Kickoff/Design Docs/Review Records/Final/Handoff）が揃っている
- [ ] Handoff_Notesがクライアントの言葉で（社内用語なしで）書かれている
- [ ] クライアントに引き渡し、受領確認を得た
- [ ] Style_DNA_Manager_AIがライブラリ更新の要否を判定した（「更新なし」も可）
- [ ] Master_Creative_Director_AIに案件クローズ報告をした

## Phase F: GitHub Save（各Phaseと並行 → GitHub_Save_Flow.md）

- [ ] 成果物を正しいカテゴリフォルダに保存した
- [ ] ファイル名が命名規則に準拠している
- [ ] コミットメッセージが規約（要約+背景+Co-Authored-By）に従っている
- [ ] リモートへのプッシュが完了している
- [ ] 納品確定時に最終コミットを実施した

---

## 品質基準（このチェックリスト運用自体の合否）

- 全チェック項目が「実施済み」または「明示的にスキップ理由あり」のいずれかである
  （空欄のまま次フェーズに進んでいる状態は不可）
- Phase C（制作）でPhase順序（世界観確定→レイアウト着手）が守られている
- Phase D（レビュー）で4層すべてが個別に判定されている（一括「良い」判定は不可）

## NG例

```
納期が迫っていたため、Phase D(Review)のチェックを飛ばしてPhase E(Delivery)に進む。
```
QUALITY_STANDARDを経由しない納品は、DESIGN_CONSTITUTIONが定める品質保証の
仕組み全体を無効化する。納期逼迫時こそ、Review_Flowの簡略版（構造層+表現層のみ等）
を明示的に選択し、省略した層をHandoff_Notesに正直に記録する。

## 良い例

```
小規模バナー案件のため、AI_Employee_Responsibility_Mapの最小構成
（Design_Architect_AI簡易版→Visual_Director_AI→Claude_Code_Engineer_AI→
Design_Reviewer_AI）で運用。Phase Cのモーション項目は「本案件は対象外」と
明示してスキップし、他項目はすべて実施。
```
省略する場合も「明示的にスキップ理由を記録する」ことで、チェックリストの
運用としては健全に保たれている。
