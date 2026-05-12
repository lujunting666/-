import { ExternalLink, Github } from "lucide-react";

interface ProjectCardProps {
  name: string;
  description: string;
  tech: string[];
  githubUrl?: string;
  liveUrl?: string;
}

export default function ProjectCard({
  name,
  description,
  tech,
  githubUrl,
  liveUrl,
}: ProjectCardProps) {
  return (
    <div className="group p-6 rounded-xl bg-white dark:bg-slate-800 border border-gray-200 dark:border-slate-700 hover:shadow-lg hover:border-primary-300 dark:hover:border-primary-700 transition-all duration-300">
      <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">
        {name}
      </h3>
      <p className="text-gray-600 dark:text-slate-400 mb-4 line-clamp-3">
        {description}
      </p>
      <div className="flex flex-wrap gap-2 mb-4">
        {tech.map((t) => (
          <span
            key={t}
            className="px-2 py-1 text-xs font-medium rounded-md bg-gray-100 dark:bg-slate-700 text-gray-600 dark:text-slate-300"
          >
            {t}
          </span>
        ))}
      </div>
      <div className="flex gap-3">
        {githubUrl && (
          <a
            href={githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-sm text-gray-600 dark:text-slate-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
          >
            <Github className="w-4 h-4" />
            Source
          </a>
        )}
        {liveUrl && (
          <a
            href={liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-sm text-gray-600 dark:text-slate-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
          >
            <ExternalLink className="w-4 h-4" />
            Live Demo
          </a>
        )}
      </div>
    </div>
  );
}
