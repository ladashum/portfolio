/** Карточки работ. Порядок массива — порядок на странице. */

export type ProjectKind = "web" | "bot" | "learn";

export type ProjectShot = {
  src: string;
  alt: string;
};

export type Project = {
  slug: string;
  title: string;
  repoName?: string;
  year: string;
  kind: ProjectKind;
  summary: string;
  stack: string[];
  repo?: string;
  live?: string;
  liveLabel?: string;
  shots?: ProjectShot[];
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
    title: "Аркана",
    year: "2026",
    kind: "bot",
    summary:
      "Бот раскладов в Max: карта дня, расклад на три карты и на вопрос, подписка и баланс. Подключены база данных и оплата.",
    stack: ["Python", "API", "ЮKassa", "База данных"],
    live: "https://max.ru/id770479002692_bot",
    liveLabel: "Бот",
    shots: [
      { src: "/work/arkana-1.jpg", alt: "Стартовый экран бота Аркана в Max: меню раскладов и подписка" },
      { src: "/work/arkana-2.jpg", alt: "Готовый расклад Арканы с общим выводом" },
    ],
    access: "private",
  },
  {
    slug: "photo-bot",
    title: "Faceo",
    year: "2026",
    kind: "bot",
    summary:
      "Telegram-бот фотосессий: загрузка снимка, выбор стиля, готовый кадр, баланс и покупка генераций. Подключены API и оплата.",
    stack: ["Python", "python-telegram-bot", "API"],
    shots: [
      { src: "/work/faceo-1.jpg", alt: "Стартовое меню Faceo: фотосессия, покупка генераций, баланс" },
      { src: "/work/faceo-2.jpg", alt: "Faceo принимает фото и готовит садовую фотосессию" },
      { src: "/work/faceo-3.jpg", alt: "Готовый кадр Faceo и файл в оригинальном качестве" },
    ],
    access: "private",
  },
  {
    slug: "flower-bot",
    title: "Цветочный бот",
    year: "2026",
    kind: "bot",
    summary: "Цветочный магазин в Telegram: каталог, корзина и оформление заказа.",
    stack: ["Python", "Telegram WebApp", "HTML"],
    live: "https://t.me/flowflowflowerbot",
    liveLabel: "Бот",
    access: "private",
  },
];
