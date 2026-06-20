import { useState } from "react";

interface Props {
  images: { src: string; alt: string }[];
}

export default function ImageSlider({ images }: Props) {
  const [current, setCurrent] = useState(0);

  if (images.length === 1) {
    return (
      <div className="mb-6">
        <img
          src={images[0].src}
          alt={images[0].alt}
          className="w-full rounded-lg object-cover"
        />
      </div>
    );
  }

  const prev = () => setCurrent((i) => (i - 1 + images.length) % images.length);
  const next = () => setCurrent((i) => (i + 1) % images.length);

  return (
    <div className="relative w-full group">
      <div className="overflow-hidden rounded-lg">
        <img
          src={images[current].src}
          alt={images[current].alt}
          className="w-full object-cover transition-opacity duration-300"
        />
      </div>

      <button
        type="button"
        onClick={prev}
        className="absolute left-3 top-1/2 -translate-y-1/2 w-9 h-9 flex items-center justify-center rounded-full bg-zinc-900/70 border border-zinc-700 text-zinc-300 hover:text-zinc-100 hover:border-zinc-500 transition-all duration-200 opacity-0 group-hover:opacity-100"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="m15 18-6-6 6-6"/>
        </svg>
      </button>

      <button
        type="button"
        onClick={next}
        className="absolute right-3 top-1/2 -translate-y-1/2 w-9 h-9 flex items-center justify-center rounded-full bg-zinc-900/70 border border-zinc-700 text-zinc-300 hover:text-zinc-100 hover:border-zinc-500 transition-all duration-200 opacity-0 group-hover:opacity-100"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="m9 18 6-6-6-6"/>
        </svg>
      </button>

      <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5">
        {images.map((_, i) => (
          <button
            key={i}
            type="button"
            onClick={() => setCurrent(i)}
            className={`w-1.5 h-1.5 rounded-full transition-all duration-200 ${i === current ? "bg-zinc-100 w-4" : "bg-zinc-500"}`}
          />
        ))}
      </div>
    </div>
  );
}
