import { profile } from "@/data/profile";

export function About() {
  return (
    <section id="about" className="mx-auto max-w-6xl scroll-mt-28 px-5 py-12 sm:px-6">
      <div className="glass grid gap-8 rounded-3xl p-6 sm:p-8 lg:grid-cols-5">
        <div className="lg:col-span-3">
          <p className="text-sm font-medium text-accent">Обо мне</p>
          <h2 className="mt-3 font-display text-4xl text-balance text-fg">Как я работаю</h2>
          <div className="mt-5 space-y-4 text-pretty text-muted">
            {profile.about.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </div>
        <ul className="flex flex-wrap content-start gap-2 lg:col-span-2">
          {profile.skills.map((skill) => (
            <li
              key={skill}
              className="rounded-full bg-accent-deep px-4 py-2 text-sm font-medium text-accent-soft"
            >
              {skill}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
