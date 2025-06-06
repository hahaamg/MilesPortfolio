import { useState } from "react";
import ProjectCard from "./ProjectCard";

const categories = [
  "全部", "網站經營", "程式開發", "學術/產品研究", "行銷/商業企劃"
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
      <div className="mt-4 sm:mt-12 grid [grid-template-columns:repeat(auto-fit,minmax(200px,1fr))] gap-8">
        {filtered.map((project) => (
          <ProjectCard key={project.title} {...project} />
        ))}
      </div>
    </>
  );
}
