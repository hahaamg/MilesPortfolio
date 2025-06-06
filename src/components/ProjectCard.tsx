import { useState } from "react";

interface ProjectCardProps {
  title: string;
  description: string;
  image: any;
  details?: string;
  link: string;
}

export default function ProjectCard({ title, description, image, details, link }: ProjectCardProps) {
  // Astro 靜態資產會是物件，直接用 image 會有 src 屬性
  // 若是字串路徑則直接用
  const imgSrc = typeof image === 'object' && image !== null && 'src' in image ? image.src : image;
  return (
    <div className="border rounded-lg p-4 mb-4 shadow transition bg-zinc-900/80">
      <div className="font-bold text-lg mb-2 text-white">{title}</div>
      <img src={imgSrc} alt={title} className="aspect-video w-full object-center object-cover rounded-lg shadow-lg my-4" />
      <div className="text-gray-400 mb-2">{description}</div>
      <a
        href={link}
        className="text-blue-400 underline text-sm hover:text-blue-200 transition"
        target="_self"
      >
        Read more
      </a>
    </div>
  );
}