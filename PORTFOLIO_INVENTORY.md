# Portfolio 完整內容備份

> 重構前的完整原始內容備份，保留所有段落原文、圖片路徑、連結與結構。

---

## 網站基本資訊

- **作者：** 孫睦桓（SUN, MU HUAN / Miles）
- **學校：** 國立臺灣師範大學圖文傳播學系碩士班
- **研究主題：** AI 與色彩生成模型
- **背景：** 內容行銷、使用者研究、數位產品設計
- **所在地：** 台北市，台灣

---

## 首頁（`src/pages/index.astro`）

顯示內容：
- 大標題：**SUN, MU HUAN**（兩行）
- 可合作狀態徽章（`AvailableForWork` 元件）
- 主要 CTA 按鈕：**View recent work** → `/projects`
- 導覽列按鈕：Blog（→ `/coming-soon`）、About（→ `/about`）、Contact（→ `/contact`）
- 動態 Warp 背景（`WarpBackground`），色彩：`#09090b`, `#27272a`, `#52525b`

---

## About 頁（`src/pages/about.astro`）

### 自我介紹段落
> 我是**孫睦桓（Miles）**，目前就讀於國立臺灣師範大學圖文傳播學系碩士班，研究主題聚焦於 AI 與色彩生成模型。
>
> 我的背景橫跨內容行銷、使用者研究與數位產品設計，熱愛觀察市場變化、理解使用者需求，並用技術與設計打造具影響力的解方。

- **Resume 連結：** https://milessun.my.canva.site/resume

### 經歷
- Gogolook 內容行銷實習生
- NISSAN 校園大使
- MSI 校園大使
- Intel 校園大使
- Wreadit 校園大使

---

## Contact 頁（`src/pages/contact.astro`）

- **Email：** milessun0507@gmail.com
- **Instagram：** https://www.instagram.com/haha.amg/
- **Threads：** https://www.threads.com/@haha.amg
- **GitHub：** https://github.com/hahaamg
- **所在地：** 台北市，台灣

---

## 作品列表（`src/pages/projects.astro`）

### 分類篩選項目
全部 / 網站經營 / 程式開發 / 學術/產品研究 / 行銷/商業企劃

### 作品陣列資料（完整原始）

```
title: "邁爾斯的影響世界"
description: "專注於 SEO、UI/UX 與數據分析，讓旅遊部落格年流量成長 66%。"
image: kmileshowcover.webp
link: "/projects/kmileshow"
category: "網站經營"

title: "n8n 自動化行銷報表"
description: "運用 n8n 無程式碼自動化，串接多平台 API，快速產出行銷報表並優化工作流程。"
image: n8ncover.webp
link: "/projects/n8n"
category: "網站經營"

title: "部落格 RAG 系統"
description: "結合 RAG 技術，實現部落格內容即時搜尋與智能問答，優化知識管理"
image: ragcover.webp
link: "/projects/rag"
category: "網站經營"

title: "天氣星晴 AI 生活助理"
description: "打造 LINE Bot 一站式提供星座運勢、穿搭建議與天氣視覺化互動體驗。"
image: weather_horoscopecover.webp
link: "/projects/weather_horoscope"
category: "程式開發"

title: "LingoDrop｜個人化字典"
description: "一滴一字，累積你的語言力。隨手收藏遇見的詞彙與句子。"
image: Lingodrop.webp
link: "/projects/Lingodrop"
category: "程式開發"

title: "元宇宙產品研究"
description: "聚焦元宇宙平台 UGC 與跨國用戶研究，分析創作者行為、回饋與產品優化建議。"
image: metaversecover.webp
link: "/projects/metaverse"
category: "學術/產品研究"

title: "食用昆蟲：蟲蟲探險隊"
description: "產品設計與數位行銷推廣昆蟲飲食，結合市場調研與健康理念，探索永續新可能。"
image: eatbugscover.webp
link: "/projects/eatbugs"
category: "行銷/商業企劃"
```

---

## 作品詳情頁（完整原文）

---

### 1. 邁爾斯的影響世界

**檔案：** `src/pages/projects/kmileshow.astro`
**圖片：** `src/assets/kmileshowcompic.webp`
**標籤：** 優化 SEO、改善 UI / UX、提升網站自然流量
**外部連結：** https://kmileshow.com

#### 完整內文

自國中以來，我持續經營個人旅遊部落格「邁爾斯的影響世界」，累積約 70 萬總觀看次數。為提升網站在國際搜尋市場的可見度與成長性，我主動學習 SEO 優化策略與關鍵字研究，透過 Google Analytics 與 Google Search Console 精準掌握流量來源與使用者行為，根據指標變化調整內容主題與佈局。2024 年整體網站流量相較 2023 成長 66%，並成功提升使用者平均停留時間 12%。

在規劃新主題時，我會以 SEO 為核心進行市場需求與內容機會分析。首先透過 Ubersuggest 探查關鍵字的搜尋量與 SEO 難度，初步評估市場潛力後，再觀察 Google 搜尋結果的前幾名網站，針對競品內容的結構、時效性與切入角度進行比較。若發現現有內容多為過時資訊、片段內容，或缺乏完整切角，我便會以「市場缺口」為切入點撰寫優化內容。文章發布後，會持續透過 Google Search Console 追蹤流量與排名變化，並根據數據調整內文佈局與 Meta 描述策略。

此外，我亦自製多種廣告卡片版位模組，依據不同旅遊場景與目標族群設計展示邏輯與排序策略，讓廣告內容更貼近用戶需求並提升轉換效率。模仿旅遊平台風格的廣告卡片模組，結合視覺化資訊架構與品牌識別色（如：Klook 橘、KKday 藍），呈現推薦景點或票券商品。每張卡片包含圖片、簡介、價格優惠與導購按鈕，提升資訊吸收效率與點擊意願。

我也曾受邀於 Podcast 節目中分享自身經營歷程與實作觀察，反映出內容背後的使用者洞察與市場敏銳度。這些歷程讓我熟悉從內容調研到發布後數據分析的完整流程，同時使我具備跨語言市場資料搜尋與整理能力。

#### 網站願景段落

旅行不僅僅是一趟行程，更是一種啟發性的體驗。邁爾斯的影響世界將帶你探索世界的美麗，「讓你感受到旅行的真正魅力，讓你不再只是旅行者，更是一位開拓者」在每個不同的角落，開拓眼界、拓展視野、尋找刺激，發掘自己的感受與意義。

---

### 2. n8n 自動化行銷報表

**檔案：** `src/pages/projects/n8n.astro`
**圖片：** `src/assets/n8npic.png`
**標籤：** 自動化、API 整合、GA + GSC

#### 完整內文

為提升部落格的數據追蹤效率，我設計並實作一套以 n8n 為核心的自動化報表流程，解決需頻繁登入 Google Search Console 手動抓取流量數據的痛點，避免資料遺漏並優化行銷決策效率。此專案整合多個平台 API，包括 Google Analytics 與 Search Console，透過 OAuth2 認證、Webhook 排程與 Google Sheets 儲存機制，自動生成每週流量與關鍵字排名報表。

我更進一步導入 LLM 分析摘要結果，協助判讀每週 SEO 表現，並定時歸檔至 Google Drive。這不僅大幅節省 80% 的人工作業時間，也讓我在實作過程中熟悉 以數據驅動產品優化的日常營運節奏與工具鏈整合。此系統目前仍持續運行，作為我評估內容策略與廣告轉換成效的重要依據。

---

### 3. 部落格 RAG 系統

**檔案：** `src/pages/projects/rag.astro`
**圖片：** `src/assets/ragpic.png`
**標籤：** AI 工作流、LLM 應用、智慧檢索

> **注意：** 頁面標題誤植為「n8n 自動化行銷報表」，重構時需修正為「部落格 RAG 系統」。

#### 完整內文

為優化部落格內部知識搜尋與歷史文章內容重用，我設計並實作一套 Retrieval-Augmented Generation（RAG）智慧知識庫系統，結合語意檢索與大語言模型（LLM）生成摘要，支援內部快速查找、內容整合與資料重組，預計將顯著提升編輯與內容決策效率。

系統基於 LangChain 串接 FAISS 向量資料庫與 E5 Embedding 模型進行向量化處理，搭配 Groq API 提供的 LLaMA-3-70B 進行自然語言回應。透過文章段落斷句、語意向量建立與語義相似度搜尋，可實現「問答式內容檢索」與「多篇內容聚合摘要」，進一步支援內容策略評估與主題整理。

例如，當使輸入「釜山有哪些旅遊景點時？」，系統會即時從網站中抽取相關資料並生成回應，像是：「釜山是一個充滿活力和魅力的城市，以下是我們根據資料整理出的一些旅遊景點：海雲台、SPA LAND、釜山塔、松島海上纜車、釜山煙火節、西面市場、釜山 X the SKY 觀景台……」等具體建議。這類智慧化應用不僅大幅減少人工搜尋與彙整時間，也強化了部落格內容的知識重組能力與互動性延展性。

---

### 4. 天氣星晴 LINE Bot

**檔案：** `src/pages/projects/weather_horoscope.astro`
**圖片：** `src/assets/weather_horoscopepic.png`
**標籤：** LINE Bot、API 整合、多模態
**產品簡報：** https://www.canva.com/design/DAGYxjACYpA/FY_OYnX4JcU44Vpq0HyVyA/view?utm_content=DAGYxjACYpA&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=h3c9bc2a57c

#### 完整內文

「天氣星晴」是一款結合即時資料與多種生成式 AI 技術的 LINE 聊天機器人，提供使用者星座運勢查詢、穿搭建議與天氣視覺化三合一的互動體驗，專為「重視生活風格與趣味體驗」的年輕用戶打造，讓原本零散的每日資訊（如：穿什麼、會下雨嗎、今天運勢好嗎？）變得一站式、智慧化、可視化。

#### 市場觀察與痛點洞察

調查市面上主流天氣與星座查詢服務，如中央氣象局、Yahoo 天氣、DailyHoroscope、LINE Weather 等，普遍存在以下痛點：

- **缺乏整合體驗：** 天氣、運勢、穿搭多由不同 App 提供，切換不便
- **資訊缺乏趣味與互動性：** 多為靜態圖文、缺乏個人化
- **缺乏視覺化設計：** 天氣或運勢資訊多為列表式呈現，閱讀負擔大

我們觀察到近年使用者對 AI 聊天機器人的接受度持續上升，但**真正能提供「即時資訊」與「個人化互動」的產品仍相對稀少**。因此，我們嘗試結合多項工具與技術模組，包括：即時網頁爬蟲、影像分析 API、視覺資訊生成系統，打造一個具備整合性、趣味性與高互動性的生活資訊型聊天機器人，讓使用者在與機器人對話的過程中，獲得實用、個人化且具視覺吸引力的資訊回應。

#### 產品設計與技術落地

本專案聚焦於「使用者日常會問，但未被整合解決」的問題，設計出以下三大核心功能：

1. **星座運勢查詢（資訊即時 + 自動抓取）**
   - 使用者點選星座後，系統透過自動化網頁爬蟲爬取當日運勢，回傳整合後摘要
   - 解決傳統 App 不即時、需手動查找的問題

2. **穿搭建議（影像分析 + LLM 生成）**
   - 使用者上傳穿搭照，YOLO 模型辨識衣物類型與色彩主調
   - 結合星座運勢與穿搭語料，LLM 生成個性化建議（如：「今日建議選擇更亮眼的配件來強化自信運勢」）

3. **天氣視覺化資訊（API + 圖文生成）**
   - 用戶輸入地點，透過 OpenWeatherMap API 抓取天氣資訊
   - 系統判斷白天/夜晚與天氣情況，自動套用畫風模板 + 文字渲染（地點、溫度、天氣簡述），生成平面風格天氣圖並回傳

#### 技術架構總覽

- YOLOv11 + OpenCV：衣物辨識、圖片分析
- ngrok：LINE webhook server 建置
- Gemini API：穿搭語句生成
- OpenWeatherMap API：天氣即時查詢
- Pillow + 自製模板圖庫：動態圖像生成

---

### 5. LingoDrop

**檔案：** `src/pages/projects/Lingodrop.astro`
**圖片：** `src/assets/Lingodrop_mockup.png`
**標籤：** 語言學習、產品設計、Mobile App
**外部連結：** https://lingodropapp.zeabur.app/

#### 完整內文（頁面標題）
LingoDrop：將日常語言輸入轉化為個人學習素材庫

#### 完整內文

現有的語言學習 App 多採「被動接收」模式，使用者只能學習官方預設的罐頭單字或簡單語句，這些內容缺乏生活感，難以與真實情境產生共鳴，學習動機難以維持。

LingoDrop 的誕生源於一個核心理念：「最好的教材，源自你自己的生活。」在追美劇、聽 Podcast 或瀏覽社群媒體時，常遇到「這個字好實用」的瞬間的瞬間，才是學習動機最強烈的時刻，卻因缺乏便捷的記錄方式而讓這些素材白白流失。LingoDrop 讓使用者從被動的接收者轉變為主動的建構者，透過建立屬於自己的「情境字典」，將零散的語言輸入凝聚成高價值的個人化學習資產。

---

### 6. 元宇宙產品研究

**檔案：** `src/pages/projects/metaverse.astro`
**圖片：** `src/assets/metaversepic.webp`
**標籤：** UGC 研究、使用者研究、跨文化訪談

#### 完整內文（頁面標題）
元宇宙產品研究 × 海外使用者需求訪談

#### 副標題
國科會大專生研究計畫｜元宇宙平台對使用者自創內容設計與實踐之分析

#### 完整內文

因應元宇宙議題在全球的關注與討論，我主動申請國科會大專生研究計畫，發起一項聚焦於使用者生成內容（UGC）實踐歷程與平台設計策略的研究，深入探討虛擬平台如何支援使用者在數位空間中進行創作，並進一步比較不同性別使用者的互動行為與體驗回饋差異，以提供平台設計與產品優化的實證依據。

研究執行過程中，我從產品設計與用戶觀察雙重視角出發，完成以下任務：

- **使用者需求調研與平台分析：** 針對 Spatial 平台進行功能設計、介面架構與創作支援模組的訪談研究，並透過使用者的問卷調查，了解使用者對於平台的體驗感受。
- **跨國使用者深度訪談：** 透過 Butter 線上訪談工具，與多位來自台灣與海外的創作者對談，探討其在元宇宙中的創作動機、使用習慣、對功能設計的實際評價與潛在痛點。
- **質量整合與產品建議產出：** 結合問卷量化資料與訪談質性洞察，歸納出平台應優化的產品支援面向，並針對素材自由度、協作互動流程、UX 回饋機制等提出具體改進建議，提供平台開發者參考。

此計畫不僅填補了當時在 UGC 互動設計研究上的實證空缺，也讓我實際參與了一場以使用者觀點驅動的產品研究歷程。在過程中，我深刻累積了國際化使用者溝通經驗、資料整合與產品洞察產出能力，並培養了以嚴謹邏輯拆解複雜問題的研究思維。

---

### 7. 蟲蟲探險隊

**檔案：** `src/pages/projects/eatbugs.astro`
**封面圖：** `src/assets/eatbugscover.webp`（`eatbugscover.png` 備用）
**標籤：** 永續飲食、產品設計、數位行銷
**Instagram：** https://www.instagram.com/eatbugs_/
**YouTube Demo：** https://www.youtube.com/embed/KaObC65bCPc?si=wr-w_9Usew7qZth2&autoplay=1&mute=1

> **注意：** eatbugs.astro 引用的是 `metaversepic.png`（應為 eatbugs 相關圖片，可能是 bug），重構時需確認。

#### 完整內文（頁面標題）
蟲蟲探險隊：以數據與創意翻轉食用昆蟲印象

#### 完整內文

為了回應未來可能面臨的糧食短缺與永續飲食議題，我們以「食用昆蟲」為主題，發起一項涵蓋產品設計與數位行銷的整合專案，目標是以創新、健康、趣味的方式推廣昆蟲食品，降低大眾的排斥感，並探索其市場潛力。

專案初期，我們透過問卷調查與街頭訪問釐清目標受眾輪廓，發現年輕族群對健康飲食有高度關注，但對昆蟲食品存有認知落差與心理抗拒。為確保策略規劃的科學性，我們邀請台大實驗林研究員作為顧問，參考文獻與實驗資料進行產品發想與市場切入點的研擬。

我們依此進行以下實作：

- **產品概念開發：** 看準健康餐盒市場的成長趨勢，設計一系列以「清淡 × 高蛋白」為核心的昆蟲調味料概念產品，以降低進食門檻並提升日常使用情境的接受度。
- **數位行銷規劃：** 制定包含教育性內容行銷與趣味化社群推廣的雙軌策略，主打「營養 × 環保 × 新奇」概念，結合短影音、限動互動與懶人包設計，提升話題參與與轉傳率。
- **成效追蹤與回饋收集：** 三個月內累積自然觸及超過 5,000 位使用者，並透過留言與互動統整使用者回饋，回推優化建議與消費者溝通語調調整。

此外，在成果發表活動中，我們也實際進行一場體驗式行銷測試：現場炸製蠶蛹並提供給觀展者試吃。這樣的操作雖具挑戰性，但有效激起觀眾的參與與討論，也讓我們獲得大量第一手的接受度觀察與現場回饋，進一步驗證了「教育性推廣結合實際體驗」對於降低心理抗拒的正向影響。

本專案讓我實際參與從市場調研 → 產品設計 → 行銷執行 → 成效分析的完整流程，累積了在跨領域溝通、用戶洞察轉化與創新觀點商品化等方面的經驗。

---

## 文章（Articles）完整備份

**資料夾：** `src/content/articles/`
**Schema：** `src/content/config.ts`

---

### 文章 1：Make Something Heavy

**檔案：** `src/content/articles/1-make-something-heavy.md`

```
isDraft: false
title: Make Something Heavy
snippet: We're creating more than ever, but it weighs nothing.
slug: make-something-heavy
author: Anu Atluru
category: Craft
readingDuration: 1
pubDate: 2025 3 9
coverAlt: Women Holding Things - Maira Kalman, 2022.
originalLink: https://www.workingtheorys.com/p/make-something-heavy
cover: https://substackcdn.com/image/fetch/f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2Facc54571-c711-44a0-a529-a501d8565466_680x878.jpeg
```

#### 完整內文

**Make Something Heavy.**
We're creating more than ever, but it weighs nothing.

**We instinctively tie weight to value.**
Gold is solid. Wood is dense. And back when we still printed things on paper, a heavy stapler was a luxury.

If something is heavy, we assume it matters. And often, it does. Weight signals quality, durability, presence, permanence.

Even the objects we choose reflect this. At first, we buy cheap, lightweight furniture—easy to build, easy to trash. But eventually, **we want weight.** A solid oak table. A leather armchair. Something built to last. Heavy things comfort us—a weighted blanket stills the body, a heavy door makes a home feel secure.

Winners of major awards almost always say the same thing as they lift the trophy: 'Wow! It's so heavy.' As though the weight itself validates the achievement. Simple logic: Light achievements beget light awards. Heavy achievements beget heavy awards.

We accept this in the physical world.

But online, we forget.

**The internet is (mostly) a machine for light things.**
**The modern makers' machine does not want you to create heavy things.** It runs on the internet—powered by social media, fueled by mass appeal, and addicted to speed. It thrives on spikes, scrolls, and screenshots. It resists weight and avoids friction. It does not care for patience, deliberation, or anything but production.

It doesn't care what you create, only that you keep creating. Make more. Make faster. Make lighter. (Make slop if you have too.) Make something that can be consumed in a breath and discarded just as quickly. Heavy things take time. And here, time is a tax. And so, we oblige—everyone does.

**We create more than ever, but it weighs nothing.**

**AI now promises results without the reckoning, but frictionless creation leads to weightless rewards.** No one dreams of merely pushing a button to generate their magnum opus. The output matters, but the intention, the struggle, the care is what makes it count —what gives it weight.

Of course, there's a range from light to heavy, and not all light things are bad. An entire economy thrives on lightness. Memes, breaking news, and celebrity drama shape culture in spades. But movement isn't meaning. A million views doesn't make a pound of significance. **Light things shape culture, but rarely shape us.**

**Creation isn't just about output. It's a process of becoming. The best work shapes the maker as much as the audience. A founder builds a startup to prove they can. A writer wrestles an idea into clarity. You don't just create heavy things. You become someone who can.**

---

### 文章 2：friction is the feature

**檔案：** `src/content/articles/2-friction-is-the-feature.md`

```
isDraft: false
title: friction is the feature
snippet: in a world where everything is free, nothing is valued.
slug: friction-is-the-feature
author: signull
category: AI
readingDuration: 1
pubDate: 2025 4 12
coverAlt: friction is the feature cover
originalLink: https://signull.substack.com/p/friction-is-the-feature
cover: https://substackcdn.com/image/fetch/w_1456,c_limit,f_webp,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2Faf9f6d5e-b688-4c8b-b243-3f55362cccc5_1024x1024.png
```

#### 完整內文

**friction is the feature**
in a world where everything is free, nothing is valued.

scroll, like, forget.

read, nod, move on.

infinite content. zero weight.

but the moment you add friction, everything fucking thing changes.

i didn't add a paywall to gatekeep. i added it to filter.

because when people pay, they pay attention.

they bring themselves to the table.

they read slower. think longer. feel more.

they invest, not just money, but meaning.

skin in the game isn't about dollars.

it's about care.

---

### 文章 3：AI adoption is a UX problem

**檔案：** `src/content/articles/3-ai-adoption-is-a-ux-problem.md`

```
isDraft: false
title: AI adoption is a UX problem
snippet: We have plenty of intelligence. The problem is making it usable
slug: ai-adoption-is-a-ux-problem
author: Nan Yu
category: AI
readingDuration: 1
pubDate: 2025 4 10
coverAlt: Tobi Lutke - Shopify CEO - I heard this internal memo of mine is being leaked right now, so here it is
originalLink: https://thenanyu.com/ux.html
cover: https://pbs.twimg.com/media/Gn7z7RcbEAAr118?format=jpg&name=medium
```

#### 完整內文

**AI adoption is a UX problem**
> We have plenty of intelligence. The problem is making it usable

Toby Lütke, CEO of Shopify, just made the rounds on Twitter with an internal memo that he sent to his company. In it, he basically tells all of his employees that the time to mass adopt AI in their business is now. No matter which job or role you're in, you need to be using AI all the time, every day, or risk damaging your performance review.

This echoes what I've heard from other CEOs in and around tech — they recognize the usefulness and productivity gains on offer from AI tools like ChatGPT and Claude. But for some reason, that isn't enough for their employees to actually adopt them at scale. They have to be threatened with bad reviews.

The AI tools that seem to spread by themselves within workforces are things like Cursor for interactive coding and Granola for automated note-taking. These tools are casually dismissed as "GPT wrappers" by some industry commentators — after all, ChatGPT (or Sonnet or Gemini or Llama or Deepseek) is doing all the "real work", right?

People who take this perspective seem to be throwing away all the lessons we've learned about software distribution. It's like they saw Instagram and waived it off as an "ImageMagick wrapper"... or Dropbox as an "rsync wrapper".

Those products won because they made powerful, highly technical tools accessible through thoughtful design. The biggest barrier to mass AI adoption is not capability or intelligence; we have those in spades. **It's UX.**

---

## 圖片資源完整清單

### `src/assets/`

| 檔案名稱 | 用途 | 對應作品 |
|----------|------|----------|
| `kmileshowcover.webp` | 作品列表封面 | 邁爾斯的影響世界 |
| `kmileshowcompic.webp` | 作品詳情主圖 | 邁爾斯的影響世界 |
| `kmileshowcompic.png` | 作品詳情主圖（PNG 備用） | 邁爾斯的影響世界 |
| `n8ncover.webp` | 作品列表封面 | n8n 自動化行銷報表 |
| `n8npic.png` | 作品詳情主圖 | n8n 自動化行銷報表 |
| `ragcover.webp` | 作品列表封面 | 部落格 RAG 系統 |
| `ragpic.png` | 作品詳情主圖 | 部落格 RAG 系統 |
| `weather_horoscopecover.webp` | 作品列表封面 | 天氣星晴 |
| `weather_horoscopepic.png` | 作品詳情主圖 | 天氣星晴 |
| `Lingodrop.webp` | 作品列表封面 | LingoDrop |
| `Lingodrop_mockup.png` | 作品詳情主圖 | LingoDrop |
| `metaversecover.webp` | 作品列表封面 | 元宇宙產品研究 |
| `metaversepic.webp` | 作品詳情主圖 | 元宇宙產品研究 |
| `eatbugscover.webp` | 作品列表封面 | 蟲蟲探險隊 |
| `eatbugscover.png` | 作品列表封面（PNG 備用） | 蟲蟲探險隊 |
| `astro.svg` | UI - Framework logo | — |
| `background.svg` | UI - 背景元素 | — |
| `ac-generator.jpg` | **未使用**，建議刪除 | — |
| `electro-magnetic-motor.jpg` | **未使用**，建議刪除 | — |
| `fluid-propulsion.jpg` | **未使用**，建議刪除 | — |

### `public/`

| 檔案名稱 | 用途 |
|----------|------|
| `favicon.svg` | 網站圖示 |
| `logo.png` | 網站 Logo |
| `social-image.webp` | Social Preview 圖（OG Image） |

---

## 已知 Bug（重構時修正）

| 位置 | 問題 | 修正方式 |
|------|------|----------|
| `src/pages/projects/rag.astro` 第 7 行 | 頁面 `<h1>` 標題誤植為「n8n 自動化行銷報表」 | 改為「部落格 RAG 系統」 |
| `src/pages/projects/eatbugs.astro` 第 3 行 | import 的是 `metaversepic.png`（而非 eatbugs 圖片） | 改為 import `eatbugscover.webp` 或正確的 eatbugs 詳情圖 |
| `src/pages/contact.astro` 第 21 行 | Email href 多打一個 `m`（`gmail.comm`） | 改為 `milessun0507@gmail.com` |

---

## 技術架構現況

| 項目 | 版本/技術 |
|------|-----------|
| Framework | Astro 5.7.5 |
| Output | SSR（server），Vercel adapter |
| Styling | Tailwind CSS 4.1.4 |
| Interactive | React 19.1.0 |
| Animation | Motion |
| Background shader | Paper Design Shaders（warp-background） |
| Image processing | Sharp |
| Package name | nikola-tesla |

### 頁面路由

| 路由 | 檔案 |
|------|------|
| `/` | `src/pages/index.astro` |
| `/projects` | `src/pages/projects.astro` |
| `/projects/kmileshow` | `src/pages/projects/kmileshow.astro` |
| `/projects/n8n` | `src/pages/projects/n8n.astro` |
| `/projects/rag` | `src/pages/projects/rag.astro` |
| `/projects/weather_horoscope` | `src/pages/projects/weather_horoscope.astro` |
| `/projects/Lingodrop` | `src/pages/projects/Lingodrop.astro` |
| `/projects/metaverse` | `src/pages/projects/metaverse.astro` |
| `/projects/eatbugs` | `src/pages/projects/eatbugs.astro` |
| `/about` | `src/pages/about.astro` |
| `/contact` | `src/pages/contact.astro` |
| `/blog` | `src/pages/blog/index.astro` |
| `/blog/[...slug]` | `src/pages/blog/[...slug].astro` |
| `/coming-soon` | `src/pages/coming-soon.astro` |

### 元件清單

**React（`src/components/`）**
- `ProjectList.tsx` — 作品列表 + 分類篩選
- `ProjectCard.tsx` — 單一作品卡片
- `navigation.tsx` — 導覽列
- `warp-background.tsx` — 動態背景 Shader

**Astro（`src/components/`）**
- `h1.astro` — 標題
- `link.astro` — 連結（多 variant）
- `footer.astro` — 頁尾
- `available.astro` — 可合作狀態徽章
- `external-link.astro` — 外部連結
- `prose.astro` — Markdown 容器

**Layouts（`src/layouts/`）**
- `RootLayout.astro` — 主要 Layout（首頁用）
- `InfoLayout.astro` — 內容頁面 Layout（所有子頁用）
