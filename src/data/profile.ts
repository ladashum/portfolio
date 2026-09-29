/** Имя, текст «обо мне» и контакты. Новая строка в contacts сразу появляется в блоке. */
export const profile = {
  name: "Лада Назаренко",
  handle: "ladashum",
  role: "Frontend, веб-дизайн, цифровые продукты",
  kicker: "Портфолио · 2026",
  lead: "Сайты на React, боты и учебные тренажёры. Ниже восемь репозиториев: у каждого стек, ссылка на код и живой адрес, если он есть.",
  about: [
    "Делаю интерфейсы и небольшие продукты: лендинги, визитки студий, ботов для Telegram, Max и VK, тренажёры языков с озвучкой в браузере.",
    "Фронтенд и веб-дизайн — диплом РЭУ им. Плеханова. В работе Figma, вёрстка, React и Python. Код собираю с AI: читаю изменения, правлю и довожу до ссылки, которую можно открыть.",
  ],
  skills: [
    "React",
    "TypeScript",
    "JavaScript",
    "HTML / CSS",
    "Figma",
    "Vite",
    "Python",
    "Telegram-боты",
  ],
  contacts: [
    {
      id: "github",
      label: "GitHub",
      value: "github.com/ladashum",
      href: "https://github.com/ladashum",
      hint: "Код проектов",
    },
    {
      id: "instagram",
      label: "Instagram",
      value: "@ladashum",
      href: "https://instagram.com/ladashum",
      hint: "Написать можно сюда",
    },
  ],
  nav: [
    { href: "#work", id: "work", label: "Работы" },
    { href: "#about", id: "about", label: "Обо мне" },
    { href: "#contact", id: "contact", label: "Контакты" },
  ],
} as const;
