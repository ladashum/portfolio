/** Имя, текст «обо мне» и контакты. Новая строка в contacts сразу появляется в блоке. */
export const profile = {
  name: "Лада Назаренко",
  handle: "ladashum",
  role: "Frontend, веб-дизайн, цифровые продукты",
  kicker: "Портфолио · 2026",
  lead: "Сайты на React, боты и учебные тренажёры. У каждой работы стек, а у ботов — живая ссылка или скриншоты.",
  about: [
    "Делаю интерфейсы и небольшие продукты: лендинги, визитки студий, ботов для Telegram, Max и VK, тренажёры языков с озвучкой в браузере.",
    "Фронтенд и веб-дизайн — диплом РЭУ им. Плеханова. В работе Figma, вёрстка, React и Python. Подключаю API, ЮKassa, базы данных, оплату и сценарии внутри ботов.",
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
    "API",
    "ЮKassa",
    "Базы данных",
  ],
  contacts: [
    {
      id: "github",
      label: "GitHub",
      value: "github.com/ladashum",
      href: "https://github.com/ladashum",
      hint: "Код открытых проектов",
    },
    {
      id: "telegram",
      label: "Telegram",
      value: "@ladashum",
      href: "https://t.me/ladashum",
      hint: "Написать в Telegram",
    },
  ],
  nav: [
    { href: "#work", id: "work", label: "Работы" },
    { href: "#about", id: "about", label: "Обо мне" },
    { href: "#contact", id: "contact", label: "Контакты" },
  ],
} as const;
