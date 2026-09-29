import { useEffect, useState } from "react";
import { ArrowUpRight, X } from "lucide-react";
import { kindLabel, type Project, type ProjectShot } from "@/data/projects";

export function ProjectCard({ project, index }: { project: Project; index: number }) {
  const [shot, setShot] = useState<ProjectShot | null>(null);

  useEffect(() => {
    if (!shot) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setShot(null);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [shot]);

  return (
    <article className="glass flex h-full min-w-0 flex-col rounded-3xl p-5 transition-shadow duration-200 hover:shadow-card-hover sm:p-6">
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
      {project.repoName ? <p className="mt-1 text-sm text-accent-soft">{project.repoName}</p> : null}
      <p className="mt-4 flex-1 text-pretty text-muted">{project.summary}</p>

      {project.shots?.length ? (
        <ul className="mt-5 flex min-w-0 gap-3 overflow-x-auto pb-1">
          {project.shots.map((item) => (
            <li key={item.src} className="shrink-0">
              <button
                type="button"
                onClick={() => setShot(item)}
                className="block overflow-hidden rounded-2xl shadow-card"
              >
                <img
                  src={item.src}
                  alt={item.alt}
                  className="h-72 w-auto max-w-none object-cover object-top"
                />
              </button>
            </li>
          ))}
        </ul>
      ) : null}

      <ul className="mt-5 flex flex-wrap gap-2">
        {project.stack.map((item) => (
          <li key={item} className="rounded-full px-3 py-1 text-xs text-fg shadow-card">
            {item}
          </li>
        ))}
        {project.repo && project.access === "private" ? (
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
            {project.liveLabel ?? "Сайт"}
            <ArrowUpRight className="size-4" />
          </a>
        ) : null}
        {project.repo ? (
          <a
            href={project.repo}
            target="_blank"
            rel="noreferrer"
            className="inline-flex min-h-11 items-center gap-1 rounded-xl px-4 text-sm font-semibold text-fg shadow-card"
          >
            Код
            <ArrowUpRight className="size-4" />
          </a>
        ) : null}
      </div>

      {shot ? (
        <div
          className="fixed inset-0 z-50 grid place-items-center bg-bg/80 p-4 backdrop-blur-sm"
          role="dialog"
          aria-modal="true"
          aria-label={shot.alt}
          onClick={() => setShot(null)}
        >
          <button
            type="button"
            className="absolute top-4 right-4 grid size-11 place-items-center rounded-xl bg-fg text-bg"
            onClick={() => setShot(null)}
          >
            <span className="sr-only">Закрыть</span>
            <X className="size-5" />
          </button>
          <img
            src={shot.src}
            alt={shot.alt}
            className="max-h-[88vh] w-auto max-w-full rounded-2xl"
            onClick={(event) => event.stopPropagation()}
          />
        </div>
      ) : null}
    </article>
  );
}
