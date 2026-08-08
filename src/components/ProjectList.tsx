import { useState } from "react";
import ProjectCard from "./ProjectCard";

const categories = [
  "全部", "產品設計", "技術開發", "數據驅動成長", "使用者研究"
];

export default function ProjectList({ projects }: { projects: any[] }) {
  const [selected, setSelected] = useState("全部");
  const filtered = selected === "全部"
    ? projects
    : projects.filter(p => p.category === selected);

  return (
    <>
      <div className="flex flex-wrap gap-2 mt-6 mb-8">
        {categories.map(cat => (
          <button
            key={cat}
            type="button"
            className={`px-4 py-1 rounded-full border border-zinc-400 text-zinc-400 hover:bg-zinc-700 hover:text-white transition ${selected === cat ? 'bg-zinc-700 text-white' : ''}`}
            onClick={() => setSelected(cat)}
          >
            {cat}
          </button>
        ))}
      </div>
      <div className="mt-4 sm:mt-12 grid grid-cols-1 sm:max-md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-x-6 gap-y-12">
        {filtered.map((project) => (
          <ProjectCard key={project.title} {...project} />
        ))}
      </div>
    </>
  );
}
