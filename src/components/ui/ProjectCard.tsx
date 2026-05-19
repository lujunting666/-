import Image from "next/image";
import { ExternalLink, Github, Play, Image as ImageIcon } from "lucide-react";

interface ProjectCardProps {
  name: string;
  description: string;
  tech: string[];
  githubUrl?: string;
  liveUrl?: string;
  image?: string;
  video?: string;
}

export default function ProjectCard({
  name,
  description,
  tech,
  githubUrl,
  liveUrl,
  image,
  video,
}: ProjectCardProps) {
  return (
    <div className="group p-6 rounded-xl bg-white dark:bg-slate-800 border border-gray-200 dark:border-slate-700 hover:shadow-lg hover:border-primary-300 dark:hover:border-primary-700 transition-all duration-300">
      {/* 项目图片/视频预览 */}
      {image && (
        <div className="relative -mx-6 -mt-6 mb-4 overflow-hidden rounded-t-xl">
          <Image
            src={image}
            alt={`${name} 截图`}
            width={600}
            height={320}
            className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
          />
          {video && (
            <div className="absolute inset-0 flex items-center justify-center bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className="p-3 rounded-full bg-white/90 text-primary-600 shadow-lg">
                <Play className="w-6 h-6 fill-current" />
              </div>
            </div>
          )}
        </div>
      )}

      {/* 无图片时的占位 */}
      {!image && (
        <div className="relative -mx-6 -mt-6 mb-4 h-24 flex items-center justify-center bg-gradient-to-br from-primary-50 to-primary-100 dark:from-slate-700 dark:to-slate-800 rounded-t-xl">
          <ImageIcon className="w-8 h-8 text-primary-300 dark:text-slate-600" />
        </div>
      )}

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
            源代码
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
            在线演示
          </a>
        )}
      </div>
    </div>
  );
}