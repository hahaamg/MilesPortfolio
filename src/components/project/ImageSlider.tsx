import { useEffect, useRef, useState } from "react";

interface Props {
  images: { src: string; alt: string }[];
}

export default function ImageSlider({ images }: Props) {
  const [current, setCurrent] = useState(0);
  const [expanded, setExpanded] = useState(false);
  const [english, setEnglish] = useState(false);
  const dialog = useRef<HTMLDialogElement>(null);
  const multiple = images.length > 1;
  const prev = () => setCurrent((i) => (i - 1 + images.length) % images.length);
  const next = () => setCurrent((i) => (i + 1) % images.length);
  const text = english
    ? { zoom: "Enlarge image", close: "Close image", prev: "Previous image", next: "Next image", image: "Image" }
    : { zoom: "放大圖片", close: "關閉圖片", prev: "上一張圖片", next: "下一張圖片", image: "圖片" };

  useEffect(() => {
    setEnglish(document.documentElement.lang === "en");
  }, []);

  useEffect(() => {
    if (!expanded || !dialog.current) return;
    const element = dialog.current;
    const previousOverflow = document.body.style.overflow;
    element.showModal();
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = previousOverflow;
      element.close();
    };
  }, [expanded]);

  if (!images.length) return null;

  const arrow = (direction: "prev" | "next") => (
    <svg aria-hidden="true" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d={direction === "prev" ? "m15 18-6-6 6-6" : "m9 18 6-6-6-6"} />
    </svg>
  );
  const controlClass = "w-10 h-10 flex items-center justify-center rounded-full bg-zinc-900/80 border border-zinc-600 text-zinc-100 hover:bg-zinc-700 focus-visible:outline-2 focus-visible:outline-white focus-visible:outline-offset-2";

  return (
    <div className="relative w-full group mb-6">
      <button type="button" onClick={() => setExpanded(true)} aria-label={`${text.zoom}: ${images[current].alt}`} className="relative block w-full cursor-zoom-in overflow-hidden rounded-lg focus-visible:outline-2 focus-visible:outline-white focus-visible:outline-offset-4">
        <img src={images[current].src} alt={images[current].alt} className="w-full object-cover" />
        <span className="absolute right-3 top-3 rounded-full bg-zinc-900/80 border border-zinc-600 px-3 py-1 text-xs text-white">{text.zoom}</span>
      </button>

      {multiple && <>
        <button type="button" onClick={prev} aria-label={text.prev} className={`absolute left-3 top-1/2 -translate-y-1/2 ${controlClass}`}>{arrow("prev")}</button>
        <button type="button" onClick={next} aria-label={text.next} className={`absolute right-3 top-1/2 -translate-y-1/2 ${controlClass}`}>{arrow("next")}</button>
        <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex rounded-full bg-zinc-900/70 px-1">
          {images.map((image, i) => <button key={image.src} type="button" onClick={() => setCurrent(i)} aria-label={`${text.image} ${i + 1}: ${image.alt}`} aria-pressed={i === current} className="flex h-7 w-7 items-center justify-center rounded-full focus-visible:outline-2 focus-visible:outline-white">
            <span className={`h-1.5 rounded-full ${i === current ? "bg-white w-4" : "bg-zinc-400 w-1.5"}`} />
          </button>)}
        </div>
      </>}

      <dialog ref={dialog} aria-label={text.zoom} onCancel={() => setExpanded(false)} onClose={() => setExpanded(false)} onKeyDown={(event) => {
        if (!multiple) return;
        if (event.key === "ArrowLeft") { event.preventDefault(); prev(); }
        if (event.key === "ArrowRight") { event.preventDefault(); next(); }
      }} className="fixed inset-0 m-0 h-dvh max-h-none w-screen max-w-none border-0 bg-zinc-950/95 p-4 text-zinc-100 sm:p-6 backdrop:bg-black/80">
        <div className="flex h-full flex-col gap-4">
          <div className="flex shrink-0 items-center justify-between gap-4">
            <p className="text-sm">{images[current].alt}{multiple && ` · ${current + 1} / ${images.length}`}</p>
            <button type="button" autoFocus onClick={() => setExpanded(false)} className="shrink-0 rounded-full border border-zinc-500 px-4 py-2 text-sm hover:bg-zinc-800 focus-visible:outline-2 focus-visible:outline-white">{text.close} ×</button>
          </div>
          <div className="flex min-h-0 flex-1 items-center justify-center" onClick={(event) => { if (event.target === event.currentTarget) setExpanded(false); }}>
            {expanded && <img src={images[current].src} alt={images[current].alt} className="max-h-full max-w-full object-contain" />}
          </div>
          {multiple && <div className="flex shrink-0 items-center justify-center gap-6">
            <button type="button" onClick={prev} aria-label={text.prev} className={controlClass}>{arrow("prev")}</button>
            <span className="text-sm" aria-live="polite">{current + 1} / {images.length}</span>
            <button type="button" onClick={next} aria-label={text.next} className={controlClass}>{arrow("next")}</button>
          </div>}
        </div>
      </dialog>
    </div>
  );
}
