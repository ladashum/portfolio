import { profile } from "@/data/profile";

export function Footer() {
  return (
    <footer className="mx-auto flex max-w-6xl flex-col gap-3 px-5 py-10 text-sm text-muted sm:flex-row sm:items-center sm:justify-between sm:px-6">
      <p>© 2026 {profile.name}</p>
      <a href="#top" className="min-h-11 inline-flex items-center text-fg">
        Наверх
      </a>
    </footer>
  );
}
