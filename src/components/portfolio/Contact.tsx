import { ArrowUpRight, Github, Instagram } from "lucide-react";
import { profile } from "@/data/profile";

const icons = {
  github: Github,
  instagram: Instagram,
} as const;

export function Contact() {
  return (
    <section id="contact" className="mx-auto max-w-6xl scroll-mt-28 px-5 py-12 sm:px-6">
      <div className="glass rounded-3xl p-6 sm:p-8">
        <p className="text-sm font-medium text-accent">Контакты</p>
        <h2 className="mt-3 max-w-xl font-display text-4xl text-balance text-fg sm:text-5xl">
          Открыта к задачам по интерфейсам и небольшим продуктам
        </h2>
        <p className="mt-4 max-w-xl text-pretty text-muted">
          Код лежит на GitHub. Коротко написать удобнее в Instagram.
        </p>

        <ul className="mt-8 grid gap-3 sm:grid-cols-2">
          {profile.contacts.map((contact) => {
            const Icon = icons[contact.id as keyof typeof icons];
            return (
              <li key={contact.id}>
                <a
                  href={contact.href}
                  target="_blank"
                  rel="noreferrer"
                  className="glass flex min-h-20 items-center gap-4 rounded-2xl px-4 py-4 transition-shadow duration-200 hover:shadow-card-hover"
                >
                  <span className="grid size-11 shrink-0 place-items-center rounded-xl bg-accent-deep text-accent-soft">
                    {Icon ? <Icon className="size-5" /> : null}
                  </span>
                  <span className="min-w-0 flex-1">
                    <span className="block text-sm text-muted">{contact.hint}</span>
                    <span className="block truncate text-base font-semibold text-fg">
                      {contact.value}
                    </span>
                  </span>
                  <ArrowUpRight className="size-5 shrink-0 text-accent" />
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
