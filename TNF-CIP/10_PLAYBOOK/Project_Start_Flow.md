# Project_Start_Flow

Client Brief確定後、Design_Production_Flowが着手できる状態に整えるまでの
案件立ち上げフロー。

## 目的

「誰が」「何を参照して」「何を作るか」を制作着手前に固定し、
Design_Production_Flow開始後の方向転換（＝手戻り）を最小化すること。

## フェーズ

### Phase 1: 案件オーナー設定
- **担当**: Master_Creative_Director_AI
- **入力**: Client_Intake_Flowで確定したClient Brief
- **やること**: 本案件のMaster_Creative_Director_AIを案件オーナーとして確定し、
  AI_Employee_Responsibility_Map.mdに基づき稼働させるDivision・AI社員を選定する
  （小規模案件は最小構成、大規模案件はフル構成で稼働）
- **出力**: 稼働AI社員リスト
- **完了条件**: Design/Visual/Motion/Development/Copy各Divisionの担当が
  最低1名ずつ指名されている

### Phase 2: 参照DNA選定
- **担当**: Visual_Director_AI（提案） → Master_Creative_Director_AI（承認）
- **入力**: Client Briefのブランド情報（トーン希望、参照ブランド、NGイメージ）
- **やること**: 03_STYLE_DNAと04_VISUAL_DNAから、最も近いDNAを1〜2件選定する。
  既存DNAに合致しない場合は「新規DNA検討」フラグを立て、
  Style_DNA_Manager_AIに新規パターン起票を依頼する
- **出力**: 参照DNAリスト
- **完了条件**: 参照DNAが最低1件確定している（新規の場合はStyle_DNA_Manager_AIへの
  起票依頼が発行されている）

### Phase 3: プロジェクトフォルダ作成
- **担当**: Claude_Code_Engineer_AI
- **入力**: 案件種別、クライアント名
- **やること**: 08_PROJECT_TEMPLATES配下の該当カテゴリに、案件専用サブフォルダを
  `08_PROJECT_TEMPLATES/{種別}/{クライアント名スラッグ}/` 命名規則で作成する
- **出力**: 案件専用フォルダ（GitHub_Save_Flow.mdの命名規則に準拠）
- **完了条件**: フォルダが作成され、Client Briefのコピーが格納されている

### Phase 4: キックオフ確定
- **担当**: Master_Creative_Director_AI
- **入力**: Phase 1〜3の成果物
- **やること**: 稼働AI社員・参照DNA・納期・未確定事項の解消方針を
  「キックオフサマリー」としてまとめ、全稼働AI社員に共有する
- **出力**: キックオフサマリー
- **完了条件**: 稼働AI社員全員がキックオフサマリーを参照できる状態

## 出力フォーマット（キックオフサマリー）

```markdown
## Project Kickoff Summary

### 案件名 / クライアント / 案件種別
### 案件オーナー: Master_Creative_Director_AI
### 稼働AI社員
- Strategy: [担当]
- Design: [担当]
- Visual: [担当]
- Motion: [担当]
- Copy: [担当]
- Development: [担当]
- QA: [担当]

### 参照ブランドDNA
- [03_STYLE_DNA / 04_VISUAL_DNA の該当ファイル]

### North Star Message（Design_Architect_AIが後続で確定）
[未確定 → Design_Production_Flow Phase 1で確定]

### 納期・マイルストーン
- 一次デザイン提出: [日付]
- レビュー完了: [日付]
- 納品: [日付]

### 未確定事項の解消方針
[Client_Intake_Flowから引き継いだ未確定事項について、いつ・誰が確定させるか]
```

## 完了条件（このFlow全体）

- 稼働AI社員が全Division分（最低限Design/Visual/Development）指名されている
- 参照DNAが確定している（新規起票の場合はその旨が明記されている）
- 案件専用フォルダが作成されている
- キックオフサマリーが発行されている

## 次フェーズへの引き継ぎ

- キックオフサマリーをDesign_Production_FlowのPhase 1（Design_Architect_AI）に渡す
- 参照DNAはVisual_Director_AIの世界観ブリーフ作成の前提として引き継ぐ

## NG例

```
「とりあえずデザインから始めよう」と、担当AI社員も参照DNAも決めないまま
Senior_UI_Designer_AIに直接レイアウト作成を依頼する。
```
情報設計（Design_Architect_AI）を飛ばして着手すると、後で構成そのものを
作り直す必要が生じやすい。

## 良い例

```
Client Briefのトーン希望が「ラグジュアリー×落ち着いた雰囲気」だったため、
Visual_Director_AIがAesop_DNA.mdを一次候補として提案。
Master_Creative_Director_AIが承認し、キックオフサマリーに反映した上で
Design_Architect_AIに着手を指示。
```
参照DNAを制作着手前に確定させることで、Design_Production_Flow全体の
方向性がぶれない。
