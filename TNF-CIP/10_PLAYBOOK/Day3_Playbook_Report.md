# Day3_Playbook_Report

Trigger Nexus Forge Day3の作業報告。目的は「AI社員が実案件で迷わず動けるように、
案件開始から納品までの標準手順を作ること」。

## 1. 現状調査の結果

TNF-Web-Design-OS / TNF-DIOS / TNF-CIPの3リポジトリ配下を横断的に検索したが、
Playbook・Workflow・Flowに該当するファイルは**1件も存在しなかった**。

一方で、以下のファイルには部分的に「手順」に相当する記述がすでに存在していた。

- `02_AI_EMPLOYEES/*.md` 各ファイルの「他AI社員への引き継ぎ方法」節
  （個々のAI社員視点での前後関係は書かれているが、案件全体を通した時系列フローは
  どこにも存在しなかった）
- `00_COMPANY_CORE/QUALITY_STANDARD.md` の出力フォーマット（レビュー判定の型）
- ルート`README.md`の「4日間のFable活用計画」（Fable運用に限定した時系列手順）

## 2. 重複整理

「他AI社員への引き継ぎ方法」節と新設Playbookの間で、内容が完全に重複しないよう
役割を分離した。

| ファイル | 担う内容 |
|---|---|
| 02_AI_EMPLOYEES/各AI社員ファイル | そのAI社員**個別**の判断基準・入出力仕様・品質基準 |
| 10_PLAYBOOK/各Flowファイル | **案件全体**を通した時系列の手順・フェーズ間の受け渡し |

AI社員ファイル側は変更していない（既存の「引き継ぎ方法」節はそのまま活かし、
Playbook側から参照する形にした）。これにより「同じことが2箇所に別の言葉で
書かれて食い違う」リスクを避けた。

## 3. 洗い出した不足

調査の結果、以下3点が構造的な不足として判明した。

1. **01_DIVISIONS（10部署）が全ファイル見出しのみ**で、どのAI社員がどのDivisionに
   所属するかという一次情報が存在しなかった
2. **Research_DivisionとInnovation_Labに専任AI社員が未定義**
   （TNF-DIOS側にはUX_Researcher_AIという類似役割が存在するが、TNF-CIPには未移植）
3. **08_PROJECT_TEMPLATESが全カテゴリ空フォルダ**で、実案件フォルダの命名規則・
   構成が定義されていなかった

これらはPlaybook整備の過程で必ず必要になる情報だったため、
`AI_Employee_Responsibility_Map.md`内で**提案**として整理した（詳細は同ファイル参照）。
正式な組織定義として確定させるには、01_DIVISIONS各ファイルへの反映と
Master_Creative_Director_AIの承認が必要。

## 4. 作成したファイル

`TNF-CIP/10_PLAYBOOK/` を新設し、以下9ファイルを作成した。

| ファイル | 内容 |
|---|---|
| README.md | Playbook全体の索引・全体フロー概観・運用ルール |
| Client_Intake_Flow.md | 問い合わせ〜Client Brief確定までの受付フロー（3フェーズ） |
| Project_Start_Flow.md | ブリーフ確定〜キックオフまでの立ち上げフロー（4フェーズ） |
| Design_Production_Flow.md | 情報設計〜実装までの制作フロー（6フェーズ、既存AI社員マニュアルの引き継ぎ方法を時系列に統合） |
| Review_Flow.md | QUALITY_STANDARD準拠レビュー〜統合レビューのフロー（4フェーズ） |
| Delivery_Flow.md | 納品パッケージ作成〜案件クローズのフロー（4フェーズ、ナレッジ還元を含む） |
| GitHub_Save_Flow.md | 保存先判定・命名規則・コミット規約・ブランチ運用ルール |
| AI_Employee_Responsibility_Map.md | AI社員×Divisionの担当範囲マップ（提案）と組織上のギャップの明記 |
| Real_Client_Usage_Checklist.md | 全Flowを1本に統合した、実案件でそのまま使えるチェックリスト |

あわせて、TNF-CIPルート`README.md`の「使い方」節に、10_PLAYBOOKへの導線を
1項目追記した（既存の8項目・全体構成は変更していない）。

## 5. 提案・要承認事項（構造を変えずに提案のみ行った箇所）

以下は本Playbookを機能させる上で有効と考えられるが、既存構造を壊さない方針の
もと、実行はせず**提案に留めた**。

1. **AI社員↔Division対応の正式化**: 現在提案マップ（10_PLAYBOOK内）のみに存在する。
   01_DIVISIONS各ファイルへの反映をMaster_Creative_Director_AI承認のもと
   別セッションで実施することを推奨
2. **Research_Division / Innovation_Labへの専任AI社員新設可否の判断**:
   当面は兼務（UX_Designer_AI, Master_Creative_Director_AI）で運用する提案としたが、
   案件数が増えた場合は専任化を検討すべき
3. **08_PROJECT_TEMPLATESの実運用**: GitHub_Save_Flow.mdで命名規則を定義したが、
   実際のクライアント案件フォルダはまだ1件も作成されていない。次の実案件で
   本Playbookを試験運用し、フローの過不足を検証することを推奨

## 6. 次のアクション（提案）

- 実際の（もしくは模擬の）クライアント案件で本Playbookを一度通しで運用し、
  Real_Client_Usage_Checklistの過不足を検証する
- 検証結果をもとに、01_DIVISIONSの本格的な作り込みに着手する
- Research_Division / Innovation_Labの専任AI社員要否を、案件実績をもとに判断する

## GitHub保存

本Day3の全成果物は`10_PLAYBOOK/`配下にコミットし、GitHub_Save_Flow.mdの
規約に従ってプッシュ済み（詳細はコミット履歴を参照）。
