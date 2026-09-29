/** Карточки работ. Порядок массива — порядок на странице. */

export type ProjectKind = "web" | "bot" | "learn";

export type Project = {
  slug: string;
  title: string;
  repoName: string;
  year: string;
  kind: ProjectKind;
  summary: string;
  stack: string[];
  repo: string;
  live?: string;
  access: "public" | "private";
};

export const kindLabel: Record<ProjectKind, string> = {
  web: "Сайт",
  bot: "Бот",
  learn: "Тренажёр",
};

export const filters: { id: "all" | ProjectKind; label: string }[] = [
  { id: "all", label: "Все" },
  { id: "web", label: "Сайты" },
  { id: "bot", label: "Боты" },
  { id: "learn", label: "Тренажёры" },
];

export const projects: Project[] = [
  {
    slug: "cherdak-loft",
    title: "Чердак",
    repoName: "cherdak-loft",
    year: "2026",
    kind: "web",
    summary:
      "Сайт светлого лофта для детских праздников. React и TypeScript, адаптивная вёрстка, опубликовано на Vercel.",
    stack: ["React", "TypeScript", "Vite"],
    repo: "https://github.com/ladashum/cherdak-loft",
    live: "https://cherdak-loft.vercel.app",
    access: "public",
  },
  {
    slug: "nodes-studio",
    title: "Nodes",
    repoName: "nodes-studio",
    year: "2026",
    kind: "web",
    summary:
      "Сайт-визитка веб-студии по макету Figma: токены, главная, ленивая страница контактов и 404.",
    stack: ["React", "Vite", "CSS Modules", "Figma"],
    repo: "https://github.com/ladashum/nodes-studio",
    live: "https://nodes-studio.vercel.app",
    access: "public",
  },
  {
    slug: "my-site",
    title: "Услуги и боты",
    repoName: "my-site",
    year: "2026",
    kind: "web",
    summary:
      "Адаптивный сайт услуг: липкая навигация, секции, модальная форма заявки. Собран на React и Vite.",
    stack: ["React", "Vite", "CSS"],
    repo: "https://github.com/ladashum/my-site",
    live: "https://my-site-two-cyan.vercel.app",
    access: "public",
  },
  {
    slug: "nihongo",
    title: "Nihongo",
    repoName: "Nihongo",
    year: "2026",
    kind: "learn",
    summary:
      "Изучение японского в браузере: хирагана, катакана, числа, частицы, глаголы и тренажёр. Озвучка через Web Speech API.",
    stack: ["HTML", "CSS", "JavaScript"],
    repo: "https://github.com/ladashum/Nihongo",
    live: "https://nihongo-ladashum1.vercel.app",
    access: "public",
  },
  {
    slug: "hangul",
    title: "Хангыль",
    repoName: "Hangul",
    year: "2026",
    kind: "learn",
    summary:
      "Три уровня корейского: алфавит, основы и глаголы. Карточки, фразы и озвучка, всё на клиенте.",
    stack: ["HTML", "CSS", "JavaScript"],
    repo: "https://github.com/ladashum/Hangul",
    access: "public",
  },
  {
    slug: "max-arkana",
    title: "Max Arkana",
    repoName: "max-arkana",
    year: "2026",
    kind: "bot",
    summary:
      "Бот раскладов для Max, Telegram и VK: колода, сценарии запросов, база, подписки и оплата. Тексты собирает Groq.",
    stack: ["Python", "Groq", "оплата"],
    repo: "https://github.com/ladashum/max-arkana",
    access: "private",
  },
  {
    slug: "photo-bot",
    title: "Photo bot",
    repoName: "Photo_bot",
    year: "2026",
    kind: "bot",
    summary:
      "Telegram-бот для фото: загрузка снимка, выбор стиля, генерация через Replicate. Рядом подключён Groq.",
    stack: ["Python", "python-telegram-bot", "Replicate"],
    repo: "https://github.com/ladashum/Photo_bot",
    access: "private",
  },
  {
    slug: "flower-bot",
    title: "Flower bot",
    repoName: "flower-bot",
    year: "2026",
    kind: "bot",
    summary:
      "Демо цветочного магазина в Telegram: каталог, корзина, оформление. Шаг оплаты оставлен заглушкой.",
    stack: ["HTML", "Telegram WebApp", "Python"],
    repo: "https://github.com/ladashum/flower-bot",
    access: "public",
  },
];
