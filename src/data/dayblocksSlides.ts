import dayblocksCover from "../assets/DayBlocks cover.png";

// Slides exported from the DayBlocks proposal deck. Drop a PNG with one of
// these names into src/assets/dayblocks/ and it shows up in the slider in this
// order; missing files are skipped, so the page still builds without them.
const files = import.meta.glob<{ default: ImageMetadata }>(
  "../assets/dayblocks/*.png",
  { eager: true },
);

const slides: { name: string; zh: string; en: string }[] = [
  { name: "cover", zh: "DayBlocks 主視覺", en: "DayBlocks key visual" },
  { name: "problem", zh: "目前數位日記的三個不便", en: "Three problems with today's journaling apps" },
  { name: "genz", zh: "Z 世代用數據策展人生", en: "Gen Z curates life with data" },
  { name: "vision", zh: "讓「完整的自己」被看見", en: "Let your whole self be seen" },
  { name: "solution", zh: "三大功能：模組化卡片、輕社交、數據洞察", en: "Three pillars: modular cards, light social, insights" },
  { name: "dashboard", zh: "自由拼裝的日常儀表板", en: "A daily dashboard you assemble yourself" },
  { name: "dashboard2", zh: "Onboarding、Strava 卡片與好友動態", en: "Onboarding, Strava card and friends feed" },
  { name: "heatmap", zh: "熱力圖與個人軌跡", en: "Habit heatmap and personal stats" },
];

export function dayblocksImages(lang: "zh" | "en") {
  const found = slides
    .map((s) => ({ mod: files[`../assets/dayblocks/${s.name}.png`], alt: s[lang] }))
    .filter((s) => s.mod)
    // Hand back the ImageMetadata itself: ProjectGallery.astro needs the
    // original's dimensions to build a srcset, which `.src` alone discards.
    .map((s) => ({ src: s.mod.default, alt: s.alt, light: true }));

  return found.length > 0
    ? found
    : [{ src: dayblocksCover, alt: "DayBlocks" }];
}
