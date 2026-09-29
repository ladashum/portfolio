import { ArrowUpRight } from "lucide-react";
import { kindLabel, type Project } from "@/data/projects";

export function ProjectCard({ project, index }: { project: Project; index: number }) {
  return (
    <article className="glass flex h-full flex-col rounded-3xl p-5 transition-shadow duration-200 hover:shadow-card-hover sm:p-6">
      <div className="flex items-start justify-between gap-4">
        <p className="font-display text-2xl text-accent tabular-nums">
          {String(index).padStart(2, "0")}
        </p>
        <p className="text-right text-sm text-muted">
          {kindLabel[project.kind]}
          <span className="mx-2 text-muted">/</span>
          <span className="tabular-nums">{project.year}</span>
        </p>
      </div>

      <h3 className="mt-6 font-display text-3xl text-balance text-fg">{project.title}</h3>
      <p className="mt-1 text-sm text-accent-soft">{project.repoName}</p>
      <p className="mt-4 flex-1 text-pretty text-muted">{project.summary}</p>

      <ul className="mt-5 flex flex-wrap gap-2">
        {project.stack.map((item) => (
          <li key={item} className="rounded-full px-3 py-1 text-xs text-fg shadow-card">
            {item}
          </li>
        ))}
        {project.access === "private" ? (
          <li className="rounded-full bg-accent-deep px-3 py-1 text-xs text-accent-soft">
            закрытый репозиторий
          </li>
        ) : null}
      </ul>

      <div className="mt-6 flex flex-wrap gap-2">
        {project.live ? (
          <a
            href={project.live}
            target="_blank"
            rel="noreferrer"
            className="inline-flex min-h-11 items-center gap-1 rounded-xl bg-accent px-4 text-sm font-semibold text-on-accent"
          >
            Сайт
            <ArrowUpRight className="size-4" />
          </a>
        ) : null}
        <a
          href={project.repo}
          target="_blank"
          rel="noreferrer"
          className="inline-flex min-h-11 items-center gap-1 rounded-xl px-4 text-sm font-semibold text-fg shadow-card"
        >
          Код
          <ArrowUpRight className="size-4" />
        </a>
      </div>
    </article>
  );
}
