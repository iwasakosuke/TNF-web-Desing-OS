# AI_Employee_Responsibility_Map

02_AI_EMPLOYEES（12名）と01_DIVISIONS（10部署）の対応関係を整理したマップ。

> **本ファイルの位置づけについて**: 01_DIVISIONSの各ファイルは現時点で見出しのみの
> 骨組みであり、「どのAI社員がどのDivisionに所属するか」を定義した一次情報は
> まだ存在しない。本マップはPlaybook整備にあたり必要になったため
> **提案として**整理したものであり、正式な組織定義として確定させるには
> Master_Creative_Director_AIの承認、および01_DIVISIONS各ファイルへの反映が必要。

## 対応マップ（提案）

| Division | 主担当AI社員 | 補助・兼務 |
|---|---|---|
| Strategy_Division | Brand_Strategist_AI | CEO_AI（クライアント折衝） |
| Design_Division | Design_Architect_AI, Senior_UI_Designer_AI | UX_Designer_AI |
| Visual_Division | Visual_Director_AI | Style_DNA_Manager_AI（DNA整合確認） |
| Motion_Division | Motion_Designer_AI | — |
| Copy_Division | Copywriter_AI | — |
| Development_Division | Claude_Code_Engineer_AI | — |
| Research_Division | **未配置（提案: UX_Designer_AIが兼務）** | — |
| Asset_Division | Style_DNA_Manager_AI | — |
| QA_Division | Design_Reviewer_AI | Master_Creative_Director_AI（統合レビュー） |
| Innovation_Lab | **未配置（提案: Master_Creative_Director_AIが暫定オーナー）** | — |

Master_Creative_Director_AIとCEO_AIは特定のDivisionに属さず、全Division横断の
統括・渉外機能として位置づける。

## 判明した組織上のギャップ（提案・要検討）

1. **Research_Divisionに専任AI社員が存在しない**
   現状、ユーザー調査・競合分析を専任で担うAI社員が02_AI_EMPLOYEESに定義されていない。
   TNF-DIOS（姉妹OS）にはUX_Researcher_AIという専任役割が存在するため、
   TNF-CIPにも同様の役割を新設するか、当面UX_Designer_AIが兼務するか、
   方針決定が必要。本Playbookでは暫定的に「UX_Designer_AIが兼務」として運用する。

2. **Innovation_Labに専任AI社員が存在しない**
   新しい表現・新しいAIツールの実験は、現状どのAI社員の責任範囲にも
   明記されていない。案件と直接紐づかない探索的な仕事のため、
   稼働の優先順位付けがあいまいになりやすい。本Playbookでは暫定的に
   Master_Creative_Director_AIが「実験提起の窓口」を兼務する運用とする。

3. **01_DIVISIONSの10ファイルすべてが見出しのみ**
   Division単位の責任範囲・ルールが文書化されていないため、
   本マップのようなAI社員単位の情報からDivision側を逆算している状態。
   中長期的には01_DIVISIONS各ファイルを本マップと整合する形で作り込む必要がある。

## 担当範囲の要約（AI社員別）

| AI社員 | 一言でいう役割 | 主な入力元 | 主な出力先 |
|---|---|---|---|
| Master_Creative_Director_AI | 全社統合レビューと出荷判断 | 各Divisionの成果物 | CEO_AI, クライアント |
| CEO_AI | クライアント窓口・一次受付 | クライアント問い合わせ | Brand_Strategist_AI |
| Brand_Strategist_AI | ヒアリングとブリーフ化 | クライアント情報 | Design_Architect_AI |
| Design_Architect_AI | 情報設計・構成 | Client Brief | Senior_UI_Designer_AI, Visual_Director_AI |
| Senior_UI_Designer_AI | UIレイアウト・グリッド | サイトマップ+世界観ブリーフ | Motion_Designer_AI, Claude_Code_Engineer_AI |
| UX_Designer_AI | 利用体験・導線検証、簡易リサーチ | サイトマップ | Senior_UI_Designer_AI |
| Visual_Director_AI | 世界観・配色・写真方針 | North Star Message | Senior_UI_Designer_AI, Style_DNA_Manager_AI |
| Motion_Designer_AI | モーション・インタラクション設計 | コンポーネント状態一覧 | Claude_Code_Engineer_AI |
| Copywriter_AI | コピーライティング | North Star Message+世界観ブリーフ | Claude_Code_Engineer_AI |
| Claude_Code_Engineer_AI | 実装（HTML/CSS/フレームワーク） | レイアウト+モーション+コピー | Design_Reviewer_AI |
| Style_DNA_Manager_AI | DNAライブラリの管理・汎用化 | 案件終了報告 | 03_STYLE_DNA, 04_VISUAL_DNA |
| Design_Reviewer_AI | QUALITY_STANDARD準拠判定 | 実装成果物 | Master_Creative_Director_AI |

## 良い例（本マップの使い方）

```
小規模なバナー制作案件では、フル10Division・12AI社員を稼働させず、
「Design_Architect_AI（簡易構成）→ Visual_Director_AI → Claude_Code_Engineer_AI →
Design_Reviewer_AI」の最小構成で回す。本マップを見て、どのAI社員を
省略しても品質基準を満たせるか、Master_Creative_Director_AIが判断する。
```

## NG例

```
Divisionの割り当てを確認せず、たまたま手が空いていたAI社員に
専門外の判断（例: Copywriter_AIにモーション設計）を依頼する。
```
役割マップを無視した割り当ては、各AI社員マニュアルに定義された専門の
判断基準を経由しないアウトプットを生み、品質のばらつきを招く。

## 更新ルール

- 本マップの変更は、01_DIVISIONS各ファイルの正式な作り込みが完了した時点で、
  そちらを一次情報として本マップを追従させる
- Research_Division / Innovation_Labへの専任AI社員新設が決定した場合、
  02_AI_EMPLOYEESに新規ファイルを追加し、本マップを更新する
