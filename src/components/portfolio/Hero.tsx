import { profile } from "@/data/profile";
import { projects } from "@/data/projects";

export function Hero() {
  const live = projects.filter((project) => project.live).length;
  const bots = projects.filter((project) => project.kind === "bot").length;
  const stats = [
    { value: String(projects.length), label: "проектов в подборке" },
    { value: String(live), label: "с живой ссылкой" },
    { value: String(bots), label: "бота" },
  ];

  return (
    <section id="top" className="mx-auto max-w-6xl px-5 pt-16 pb-8 sm:px-6 sm:pt-24">
      <p className="text-sm font-medium text-accent">{profile.kicker}</p>
      <h1 className="mt-4 max-w-3xl font-display text-5xl leading-tight text-balance text-fg sm:text-7xl">
        {profile.name}
      </h1>
      <p className="mt-4 max-w-xl text-base text-pretty text-muted sm:text-lg">{profile.role}</p>
      <p className="mt-4 max-w-2xl text-pretty text-fg">{profile.lead}</p>

      <div className="mt-8 flex flex-col gap-3 sm:flex-row">
        <a
          href="#work"
          className="inline-flex min-h-11 items-center justify-center rounded-xl bg-accent px-5 text-sm font-semibold text-on-accent"
        >
          Смотреть работы
        </a>
        <a
          href="#contact"
          className="glass inline-flex min-h-11 items-center justify-center rounded-xl px-5 text-sm font-semibold text-fg"
        >
          Контакты
        </a>
      </div>

      <dl className="mt-10 grid gap-3 sm:grid-cols-3">
        {stats.map((stat) => (
          <div key={stat.label} className="glass rounded-2xl px-5 py-4">
            <dt className="text-sm text-muted">{stat.label}</dt>
            <dd className="mt-1 font-display text-3xl text-fg tabular-nums">{stat.value}</dd>
          </div>
        ))}
      </dl>
    </section>
  );
}
