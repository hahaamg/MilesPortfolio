interface ProjectCardProps {
  title: string;
  description: string;
  image: any;
  link: string;
  category: string;
}

export default function ProjectCard({ title, description, image, link, category }: ProjectCardProps) {
  const imgSrc = typeof image === 'object' && image !== null && 'src' in image ? image.src : image;

  return (
    <a href={link} className="group flex flex-col gap-4">
      <div className="relative overflow-hidden rounded-lg">
        <img
          src={imgSrc}
          alt={title}
          className="aspect-video w-full object-cover object-center transition-transform duration-500 ease-in-out group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/50 transition-all duration-300 flex items-center justify-center">
          <span className="text-white text-sm tracking-widest uppercase opacity-0 group-hover:opacity-100 transition-opacity duration-300 border border-white/60 px-4 py-2 rounded-full">
            View Project
          </span>
        </div>
      </div>

      <div className="flex flex-col gap-2">
        <span className="w-fit px-3 py-0.5 border border-zinc-700 rounded-full text-zinc-500 text-xs tracking-widest uppercase">
          {category}
        </span>
        <h2 className="text-zinc-100 font-medium text-base leading-snug group-hover:text-white transition-colors duration-200">{title}</h2>
        <p className="text-zinc-500 text-sm leading-relaxed">{description}</p>
      </div>
    </a>
  );
}
