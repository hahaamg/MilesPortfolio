import kmileshowcover from "../assets/kmileshowcover.webp";
import n8ncover from "../assets/n8ncover.webp";
import ragcover from "../assets/ragcover.webp";
import weather_horoscopecover from "../assets/weather_horoscopecover.webp";
import metaversecover from "../assets/metaversecover.webp";
import eatbugscover from "../assets/eatbugscover.webp";
import Lingodrop from "../assets/Lingodrop.webp";
import DayBlocksCover from "../assets/DayBlocks cover.png";
import cvaeCover from "../assets/masterthesis.png";
import fbAutomationCover from "../assets/FB automation.png";
import kahosimCover from "../assets/kahosim/cover.png";

export interface ProjectItem {
  title: string;
  description: string;
  image: any;
  link: string;
  category: string;
}

export const zhCategories = [
  "全部", "產品設計", "技術開發", "數據驅動成長", "使用者研究"
];

export const enCategories = [
  "All", "Product Design", "Engineering", "Data-Driven Growth", "User Research"
];

export const zhProjects: ProjectItem[] = [
  {
    title: "卡好審｜青年補助智慧申請與審核系統",
    description: "2026 梅竹黑客松創客組第二名。實地訪談承辦人拆解 72% 退件痛點，結合前端隱私 OCR 與 LINE 智慧引導，從源頭解決政府補助申請問題。",
    image: kahosimCover,
    link: "/projects/kahosim",
    category: "產品設計"
  },
  {
    title: "DayBlocks｜模組化卡片日記",
    description: "從構想到上架，獨立開發的 iOS 生活記錄 App，結合模組化卡片與輕社交功能。",
    image: DayBlocksCover,
    link: "/projects/dayblocks",
    category: "產品設計"
  },
  {
    title: "LingoDrop｜個人化字典",
    description: "一滴一字，累積你的語言力。隨手收藏遇見的詞彙與句子。",
    image: Lingodrop,
    link: "/projects/Lingodrop",
    category: "產品設計"
  },
  {
    title: "天氣星晴 AI 生活助理",
    description: "打造 LINE Bot 一站式提供星座運勢、穿搭建議與天氣視覺化互動體驗。",
    image: weather_horoscopecover,
    link: "/projects/weather_horoscope",
    category: "產品設計"
  },
  {
    title: "β-CVAE 情緒導向色彩生成",
    description: "以連續情緒維度為條件的色彩組合生成架構，實現情緒控制與風格解耦，成果發表於 ICAIIC 2026。",
    image: cvaeCover,
    link: "/projects/cvae-color",
    category: "技術開發"
  },
  {
    title: "Facebook 爬蟲自動化",
    description: "以 CDP 控制真實 Chrome 繞過反爬機制，爬取 FB 貼文並透過 Gemini 自動結構化，同步至 Google Sheets。",
    image: fbAutomationCover,
    link: "/projects/fb-scraper",
    category: "技術開發"
  },
  {
    title: "部落格 RAG 系統",
    description: "結合 RAG 技術，實現部落格內容即時搜尋與智能問答，優化知識管理",
    image: ragcover,
    link: "/projects/rag",
    category: "技術開發"
  },
  {
    title: "邁爾斯的影響世界",
    description: "專注於 SEO、UI/UX 與數據分析，讓旅遊部落格年流量成長 66%。",
    image: kmileshowcover,
    link: "/projects/kmileshow",
    category: "數據驅動成長"
  },
  {
    title: "n8n 自動化行銷報表",
    description: "運用 n8n 無程式碼自動化，串接多平台 API，快速產出行銷報表並優化工作流程。",
    image: n8ncover,
    link: "/projects/n8n",
    category: "數據驅動成長"
  },
  {
    title: "元宇宙產品研究",
    description: "聚焦元宇宙平台 UGC 與跨國用戶研究，分析創作者行為、回饋與產品優化建議。",
    image: metaversecover,
    link: "/projects/metaverse",
    category: "使用者研究"
  },
  {
    title: "食用昆蟲：蟲蟲探險隊",
    description: "產品設計與數位行銷推廣昆蟲飲食，結合市場調研與健康理念，探索永續新可能。",
    image: eatbugscover,
    link: "/projects/eatbugs",
    category: "使用者研究"
  },
];

export const enProjects: ProjectItem[] = [
  {
    title: "Ka-Ho-Sim | GovTech Subsidy Smart Review System",
    description: "2nd Place at 2026 Meichu Hackathon (Maker Track). Field-researched a 72% rejection bottleneck, building client-side privacy OCR and LINE Bot guidance to fix GovTech subsidies at the source.",
    image: kahosimCover,
    link: "/en/projects/kahosim",
    category: "Product Design"
  },
  {
    title: "DayBlocks | Modular Card Journal",
    description: "From concept to App Store launch—a solo-developed iOS life-tracking app featuring customizable cards and lightweight social interactions.",
    image: DayBlocksCover,
    link: "/en/projects/dayblocks",
    category: "Product Design"
  },
  {
    title: "LingoDrop | Personalized Contextual Dictionary",
    description: "One drop, one word—build your language intuition. Effortlessly capture and organize vocabulary and phrases you encounter in daily life.",
    image: Lingodrop,
    link: "/en/projects/Lingodrop",
    category: "Product Design"
  },
  {
    title: "AstroWeather AI Assistant",
    description: "An integrated LINE Bot combining horoscope insights, outfit recommendations via vision AI, and dynamic weather visualizations.",
    image: weather_horoscopecover,
    link: "/en/projects/weather_horoscope",
    category: "Product Design"
  },
  {
    title: "Emotion-Controllable Color Palette Generation via β-CVAE",
    description: "A generative framework conditioned on continuous emotion dimensions for controllable color palettes and style disentanglement. Presented at ICAIIC 2026.",
    image: cvaeCover,
    link: "/en/projects/cvae-color",
    category: "Engineering"
  },
  {
    title: "Automated Facebook Intelligence Scraper",
    description: "CDP-controlled Chrome bypassing anti-scraping protections, parsing posts into structured data with Gemini AI, and syncing to Google Sheets.",
    image: fbAutomationCover,
    link: "/en/projects/fb-scraper",
    category: "Engineering"
  },
  {
    title: "Blog RAG Intelligent Knowledge System",
    description: "Leveraging RAG for real-time semantic retrieval and intelligent Q&A over blog content, optimizing knowledge management.",
    image: ragcover,
    link: "/en/projects/rag",
    category: "Engineering"
  },
  {
    title: "Miles Impacting the World",
    description: "Growing travel blog annual traffic by 66% through SEO optimization, UI/UX refinement, and data analytics.",
    image: kmileshowcover,
    link: "/en/projects/kmileshow",
    category: "Data-Driven Growth"
  },
  {
    title: "n8n Automated Marketing Reporting Workflow",
    description: "Streamlining multi-platform API integrations with n8n no-code automation to generate marketing reports and optimize workflows.",
    image: n8ncover,
    link: "/en/projects/n8n",
    category: "Data-Driven Growth"
  },
  {
    title: "Metaverse UX Research × Global Creator Interviews",
    description: "Investigating UGC creator behaviors, feedback, and platform design strategies on metaverse platforms to formulate actionable product recommendations.",
    image: metaversecover,
    link: "/en/projects/metaverse",
    category: "User Research"
  },
  {
    title: "EatBugs: Rebranding Edible Insects with Data & Creativity",
    description: "Promoting edible insect foods through product design and digital marketing, combining market research and sustainable nutrition.",
    image: eatbugscover,
    link: "/en/projects/eatbugs",
    category: "User Research"
  },
];
