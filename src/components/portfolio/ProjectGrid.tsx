import { useMemo, useState } from "react";
import { filters, projects, type ProjectKind } from "@/data/projects";
import { ProjectCard } from "@/components/portfolio/ProjectCard";

export function ProjectGrid() {
  const [active, setActive] = useState<"all" | ProjectKind>("all");
  const visible = useMemo(
    () => (active === "all" ? projects : projects.filter((project) => project.kind === active)),
    [active],
  );

  return (
    <section id="work" className="mx-auto max-w-6xl scroll-mt-28 px-5 py-12 sm:px-6">
      <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="text-sm font-medium text-accent">Работы</p>
          <h2 className="mt-3 font-display text-4xl text-balance text-fg">С GitHub</h2>
        </div>
        <div className="flex flex-wrap gap-2" role="tablist" aria-label="Фильтр проектов">
          {filters.map((filter) => {
            const count =
              filter.id === "all"
                ? projects.length
                : projects.filter((project) => project.kind === filter.id).length;
            const selected = active === filter.id;
            return (
              <button
                key={filter.id}
                type="button"
                role="tab"
                aria-selected={selected}
                onClick={() => setActive(filter.id)}
                className={
                  selected
                    ? "min-h-11 rounded-full bg-accent px-4 text-sm font-semibold text-on-accent"
                    : "glass min-h-11 rounded-full px-4 text-sm text-fg"
                }
              >
                {filter.label}
                <span className="ml-2 tabular-nums">{count}</span>
              </button>
            );
          })}
        </div>
      </div>

      <div className="mt-8 grid gap-4 md:grid-cols-2">
        {visible.map((project) => (
          <ProjectCard
            key={project.slug}
            project={project}
            index={projects.findIndex((item) => item.slug === project.slug) + 1}
          />
        ))}
      </div>
    </section>
  );
}
