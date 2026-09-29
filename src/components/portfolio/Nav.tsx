import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { profile } from "@/data/profile";

export function Nav() {
  const [open, setOpen] = useState(false);
  const [current, setCurrent] = useState("work");

  useEffect(() => {
    const nodes = profile.nav
      .map((item) => document.getElementById(item.id))
      .filter((node): node is HTMLElement => node !== null);

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible?.target.id) setCurrent(visible.target.id);
      },
      { rootMargin: "-20% 0px -70% 0px", threshold: 0 },
    );

    nodes.forEach((node) => observer.observe(node));
    return () => observer.disconnect();
  }, []);

  return (
    <header className="sticky top-0 z-30 px-4 pt-4 sm:px-6">
      <div className="glass-strong mx-auto flex max-w-6xl items-center justify-between rounded-2xl px-3 py-2 sm:px-4">
        <a href="#top" className="flex min-h-11 items-center gap-3 rounded-xl px-2">
          <span className="grid size-9 place-items-center rounded-xl bg-accent-deep font-display text-lg text-accent-soft">
            Л
          </span>
          <span className="text-sm font-semibold tracking-wide">{profile.handle}</span>
        </a>

        <nav className="hidden items-center gap-1 md:flex" aria-label="Разделы">
          {profile.nav.map((item) => (
            <a
              key={item.id}
              href={item.href}
              className={
                current === item.id
                  ? "min-h-11 rounded-xl bg-accent px-4 py-2 text-sm font-semibold text-on-accent"
                  : "min-h-11 rounded-xl px-4 py-2 text-sm text-muted hover:text-fg"
              }
              aria-current={current === item.id ? "true" : undefined}
            >
              {item.label}
            </a>
          ))}
        </nav>

        <button
          type="button"
          className="grid size-11 place-items-center rounded-xl text-fg md:hidden"
          aria-expanded={open}
          aria-controls="mobile-nav"
          onClick={() => setOpen((value) => !value)}
        >
          <span className="sr-only">{open ? "Закрыть меню" : "Открыть меню"}</span>
          {open ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </div>

      {open ? (
        <nav
          id="mobile-nav"
          className="glass-strong mx-auto mt-2 flex max-w-6xl flex-col rounded-2xl p-2 md:hidden"
          aria-label="Разделы"
        >
          {profile.nav.map((item) => (
            <a
              key={item.id}
              href={item.href}
              className="flex min-h-11 items-center rounded-xl px-4 text-base font-medium"
              onClick={() => setOpen(false)}
            >
              {item.label}
            </a>
          ))}
        </nav>
      ) : null}
    </header>
  );
}
