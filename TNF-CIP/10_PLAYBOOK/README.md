# 10_PLAYBOOK

TNF-CIPにおける「案件開始〜納品」までの標準運用手順集。00_COMPANY_COREが
「思想・基準」を、02_AI_EMPLOYEESが「役割ごとの専門判断」を定義するのに対し、
本フォルダは「誰が・いつ・何をするか」という時系列の実行手順を定義する。

AI社員が実案件で迷ったときは、まず本フォルダのフローに立ち返ること。

## ファイル一覧

| ファイル | 内容 |
|---|---|
| Client_Intake_Flow.md | 問い合わせ〜ヒアリング〜ブリーフ確定までの受付フロー |
| Project_Start_Flow.md | ブリーフ確定〜案件キックオフまでの立ち上げフロー |
| Design_Production_Flow.md | 情報設計〜UI〜世界観〜モーション〜実装までの制作フロー |
| Review_Flow.md | QUALITY_STANDARD準拠レビュー〜統合レビューのフロー |
| Delivery_Flow.md | 納品物確定〜クライアント引き渡しのフロー |
| GitHub_Save_Flow.md | 案件データの保存・コミット・ブランチ運用ルール |
| AI_Employee_Responsibility_Map.md | AI社員×事業部(Division)の担当範囲マップ |
| Real_Client_Usage_Checklist.md | 実案件で頭から尻尾まで使える統合チェックリスト |

## 全体フロー概観

```
Client_Intake_Flow
   ↓（ブリーフ確定）
Project_Start_Flow
   ↓（キックオフ完了・担当AI社員アサイン）
Design_Production_Flow
   ↓（一次成果物完成）
Review_Flow ⇄（差し戻しループ）
   ↓（合格）
Delivery_Flow
   ↓（納品完了）
GitHub_Save_Flow（各フェーズと並行して随時実施）
```

## 運用ルール

- 各フローファイルは「フェーズ」「担当」「入力」「出力」「完了条件」「次フェーズへの
  引き継ぎ」の構成で統一する
- 各フローは00_COMPANY_CORE/DESIGN_CONSTITUTION.mdおよびQUALITY_STANDARD.mdに
  矛盾してはならない。矛盾が疑われる場合は本Playbookではなく上位規範を優先する
- フローに存在しない例外対応が発生した場合、Master_Creative_Director_AIが
  その場で判断した上で、後日本Playbookに反映する（属人的な対応を放置しない）
- 本フォルダは案件をこなすたびに改訂される「生きたドキュメント」であり、
  改訂はMaster_Creative_Director_AIの承認を経て行う
