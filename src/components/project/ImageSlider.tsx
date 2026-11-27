import { useCallback, useEffect, useMemo, useRef, useState } from "react";

interface SliderImage {
  src: string;
  /** Width-descriptor srcset built by ProjectGallery.astro. */
  srcSet?: string;
  /** Larger variant used only by the zoomed dialog. */
  fullSrc?: string;
  width?: number;
  height?: number;
  alt: string;
  light?: boolean;
}

interface Props {
  images: SliderImage[];
}

// The aside column is full width on a phone and ~40% of the viewport from the
// lg breakpoint up, which is where the browser picks a srcset variant from.
const INLINE_SIZES = "(min-width: 1024px) 40vw, 100vw";

/**
 * Decode an image off the main thread and resolve once it is ready to paint.
 *
 * Switching slides used to block for ~1s because the browser both fetched and
 * decoded the new image during the click. Priming it in the background means
 * the bitmap is already in the decoded-image cache, so the swap is a paint.
 */
function preload(image: SliderImage | undefined) {
  if (!image) return;
  const element = new Image();
  if (image.srcSet) {
    element.srcset = image.srcSet;
    element.sizes = INLINE_SIZES;
  }
  element.src = image.src;
  // decode() rejects if the element is detached mid-flight; nothing to do.
  element.decode?.().catch(() => {});
}

export default function ImageSlider({ images }: Props) {
  const [current, setCurrent] = useState(0);
  const [expanded, setExpanded] = useState(false);
  const [english, setEnglish] = useState(false);
  const dialog = useRef<HTMLDialogElement>(null);
  const multiple = images.length > 1;
  const prev = useCallback(
    () => setCurrent((i) => (i - 1 + images.length) % images.length),
    [images.length],
  );
  const next = useCallback(
    () => setCurrent((i) => (i + 1) % images.length),
    [images.length],
  );
  const text = english
    ? { zoom: "Enlarge image", close: "Close image", prev: "Previous image", next: "Next image", image: "Image" }
    : { zoom: "放大圖片", close: "關閉圖片", prev: "上一張圖片", next: "下一張圖片", image: "圖片" };

  useEffect(() => {
    setEnglish(document.documentElement.lang === "en");
  }, []);

  // Warm the slides either side of the current one, so the common case —
  // stepping through with the arrows — never waits on a decode. Runs when the
  // main thread is next free so it cannot compete with the first paint.
  const neighbours = useMemo(() => {
    if (!multiple) return [];
    const n = images.length;
    return [images[(current + 1) % n], images[(current - 1 + n) % n]];
  }, [images, current, multiple]);

  useEffect(() => {
    if (!neighbours.length) return;
    const w = window as unknown as {
      requestIdleCallback?: (cb: () => void) => number;
      cancelIdleCallback?: (id: number) => void;
    };
    const run = () => neighbours.forEach(preload);
    // requestIdleCallback where available (Safari still lacks it), else a
    // short timeout; both keep the preload out of the click's critical path.
    if (w.requestIdleCallback && w.cancelIdleCallback) {
      const handle = w.requestIdleCallback(run);
      return () => w.cancelIdleCallback!(handle);
    }
    const handle = window.setTimeout(run, 200);
    return () => clearTimeout(handle);
  }, [neighbours]);

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

  const active = images[current];

  const arrow = (direction: "prev" | "next") => (
    <svg aria-hidden="true" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d={direction === "prev" ? "m15 18-6-6 6-6" : "m9 18 6-6-6-6"} />
    </svg>
  );
  const controlClass = "w-10 h-10 flex items-center justify-center rounded-full bg-zinc-900/80 border border-zinc-600 text-zinc-100 hover:bg-zinc-700 focus-visible:outline-2 focus-visible:outline-white focus-visible:outline-offset-2";

  return (
    <div className="relative w-full group mb-6">
      <button type="button" onClick={() => setExpanded(true)} aria-label={`${text.zoom}: ${active.alt}`} className="relative block w-full cursor-zoom-in overflow-hidden rounded-xl focus-visible:outline-2 focus-visible:outline-white focus-visible:outline-offset-4">
        {/* Fixed aspect box so the panel keeps one height across slides. */}
        <span className={`flex aspect-[16/10] w-full items-center justify-center overflow-hidden rounded-xl ${active.light ? "bg-white" : "bg-zinc-900"}`}>
          <img
            src={active.src}
            srcSet={active.srcSet}
            sizes={active.srcSet ? INLINE_SIZES : undefined}
            width={active.width}
            height={active.height}
            alt={active.alt}
            /* The first slide is above the fold on every project page, so it
               loads eagerly; the rest are primed by the preload effect. */
            loading={current === 0 ? "eager" : "lazy"}
            decoding="async"
            className="max-h-full max-w-full rounded-xl object-contain"
          />
        </span>
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
            <p className="text-sm">{active.alt}{multiple && ` · ${current + 1} / ${images.length}`}</p>
            <button type="button" autoFocus onClick={() => setExpanded(false)} className="shrink-0 rounded-full border border-zinc-500 px-4 py-2 text-sm hover:bg-zinc-800 focus-visible:outline-2 focus-visible:outline-white">{text.close} ×</button>
          </div>
          <div className="flex min-h-0 flex-1 items-center justify-center" onClick={(event) => { if (event.target === event.currentTarget) setExpanded(false); }}>
            {expanded && <img
              /* The zoomed view gets the large variant; until it arrives the
                 inline one is already decoded, so there is no blank frame. */
              src={active.fullSrc ?? active.src}
              alt={active.alt}
              decoding="async"
              className={`max-h-full max-w-full object-contain ${active.light ? "rounded-xl bg-white p-4" : ""}`}
            />}
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
