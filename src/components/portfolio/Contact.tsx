import { ArrowUpRight, Github } from "lucide-react";
import { profile } from "@/data/profile";

function TelegramIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true" fill="currentColor">
      <path d="M21.94 4.3 18.7 19.52c-.24 1.08-.88 1.34-1.78.84l-4.92-3.63-2.38 2.29c-.26.26-.48.48-.98.48l.35-4.98 9.06-8.19c.4-.35-.08-.54-.61-.2L6.1 13.3 1.27 11.79c-1.05-.33-1.07-1.05.22-1.55L20.6 3.3c.87-.33 1.63.2 1.34 1Z" />
    </svg>
  );
}

const icons = {
  github: Github,
  telegram: TelegramIcon,
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
          Открытый код — на GitHub. Написать можно в Telegram: @ladashum.
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
