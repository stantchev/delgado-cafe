<div align="center">

<br />

```
██████╗ ███████╗██╗      ██████╗  █████╗ ██████╗  ██████╗
██╔══██╗██╔════╝██║     ██╔════╝ ██╔══██╗██╔══██╗██╔═══██╗
██║  ██║█████╗  ██║     ██║  ███╗███████║██║  ██║██║   ██║
██║  ██║██╔══╝  ██║     ██║   ██║██╔══██║██║  ██║██║   ██║
██████╔╝███████╗███████╗╚██████╔╝██║  ██║██████╔╝╚██████╔╝
╚═════╝ ╚══════╝╚══════╝ ╚═════╝ ╚═╝  ╚═╝╚═════╝  ╚═════╝
```

### ☕ Café & Pizzeria · Козлодуй, България

<br />

[![Next.js](https://img.shields.io/badge/Next.js-14.2-black?style=for-the-badge&logo=next.js&logoColor=white)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.x-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)
[![Framer Motion](https://img.shields.io/badge/Framer_Motion-11-black?style=for-the-badge&logo=framer&logoColor=white)](https://www.framer.com/motion/)

<br />

[![License](https://img.shields.io/badge/license-MIT-C9A84C?style=flat-square)](LICENSE)
[![Node](https://img.shields.io/badge/node-%3E%3D18.0-brightgreen?style=flat-square&logo=node.js)](https://nodejs.org/)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen?style=flat-square)](CONTRIBUTING.md)
[![Schema.org](https://img.shields.io/badge/Schema.org-Mega_Rich-orange?style=flat-square)](https://schema.org/)

<br />

> **"Кафе, което остава в съзнанието."**
>
> Production-ready MVP за кафе-пицария. Тъмен дизайн, glassmorphism, Framer Motion анимации,
> mega-rich Schema.org SEO и лоялна карта без backend — всичко в Next.js 14 App Router.

<br />

[🚀 Live Demo](https://delgado-cafe.bg) · [📋 Меню](https://delgado-cafe.bg/menu) · [🎴 Club](https://delgado-cafe.bg/loyalty) · [🐛 Issues](../../issues) · [✨ Pull Requests](../../pulls)

<br />

---

</div>

## 📸 Скрийншоти

<div align="center">

| 🏠 Начало | 🍕 Меню | 🎴 Loyalty |
|:---------:|:-------:|:----------:|
| Hero · About · Location | Filter · Cards · Skeletons | QR · Stamps · Stats |

</div>

---

## ⚡ Quick Start

```bash
# Клонирай
git clone https://github.com/YOUR_USERNAME/delgado-cafe.git
cd delgado-cafe

# Инсталирай
npm install

# Стартирай dev сървър
npm run dev
```

Отвори **[http://localhost:3000](http://localhost:3000)** ✅

---

## 🗂️ Структура на проекта

```
delgado/
├── 📁 src/
│   ├── 📁 app/                          # Next.js App Router
│   │   ├── 📄 layout.tsx                # Root layout · шрифтове · global metadata
│   │   ├── 📄 page.tsx                  # Начална страница
│   │   ├── 📄 globals.css               # Tailwind · glass · noise · gold utilities
│   │   ├── 📄 not-found.tsx             # Персонализирана 404
│   │   ├── 📄 sitemap.ts                # Auto-генериран sitemap.xml
│   │   ├── 📄 robots.ts                 # robots.txt
│   │   ├── 📄 manifest.ts               # Web App Manifest
│   │   ├── 📁 menu/
│   │   │   ├── 📄 page.tsx              # Пълно меню с категории
│   │   │   └── 📄 loading.tsx           # Skeleton loading state
│   │   ├── 📁 coffee-kozloduy/
│   │   │   └── 📄 page.tsx              # SEO landing · FAQ schema · Article
│   │   ├── 📁 pizza-kozloduy/
│   │   │   └── 📄 page.tsx              # SEO landing за пица · доставка
│   │   ├── 📁 loyalty/
│   │   │   └── 📄 page.tsx              # DelGado Club · лоялна карта
│   │   └── 📁 contact/
│   │       └── 📄 page.tsx              # Контакти · форма · работно време
│   │
│   ├── 📁 components/
│   │   ├── 📁 layout/
│   │   │   ├── 📄 Navbar.tsx            # Sticky nav · mobile menu
│   │   │   └── 📄 Footer.tsx            # Footer · hours · links
│   │   ├── 📁 sections/                 # Homepage sections (Server Components)
│   │   │   ├── 📄 HeroSection.tsx       # Full-screen hero · CTA · Open badge
│   │   │   ├── 📄 FeaturedMenuSection.tsx
│   │   │   ├── 📄 AboutSection.tsx      # История · stats
│   │   │   └── 📄 LocationSection.tsx   # Адрес · часове · карта
│   │   └── 📁 ui/
│   │       ├── 📄 FadeIn.tsx            # Motion wrappers (Client)
│   │       ├── 📄 MenuCard.tsx          # Карта за меню позиция (Server)
│   │       ├── 📄 MenuFilterClient.tsx  # Категории филтър (Client)
│   │       ├── 📄 LoyaltyCardClient.tsx # Лоялна карта + QR (Client)
│   │       ├── 📄 OpenNowBadge.tsx      # Live отворено/затворено (Client)
│   │       ├── 📄 ContactForm.tsx       # Контактна форма (Client)
│   │       └── 📄 Skeleton.tsx          # Loading skeletons (Server)
│   │
│   ├── 📁 lib/
│   │   ├── 📄 data.ts                   # Меню · работно време · контакт
│   │   ├── 📄 schema.ts                 # Mega Rich Schema.org @graph
│   │   └── 📄 utils.ts                  # isOpenNow · formatPrice · labels
│   │
│   └── 📁 types/
│       └── 📄 index.ts                  # TypeScript типове
│
├── 📄 next.config.mjs
├── 📄 tailwind.config.ts
├── 📄 tsconfig.json
└── 📄 package.json
```

---

## 🌐 Страници

| Маршрут | Описание | Компоненти |
|---------|----------|-----------|
| `/` | Начална страница | Hero · Featured · About · Location |
| `/menu` | Пълно меню с филтър | 5 категории · 31 позиции |
| `/coffee-kozloduy` | SEO landing за кафе | FAQ · Reviews · Features |
| `/pizza-kozloduy` | SEO landing за пица | Pizza grid · CTA · FAQ |
| `/loyalty` | DelGado Club | QR card · Stamps · Stats |
| `/contact` | Контакти | Форма · Карта · Часове |

---

## 🔍 SEO Архитектура

Всяка страница има собствен **Schema.org `@graph`** с множество свързани обекти.

### Типове схеми по страница

<details>
<summary><strong>/ Начало</strong> — 4 обекта</summary>

```json
{
  "@graph": [
    { "@type": ["CafeOrCoffeeShop", "FoodEstablishment", "LocalBusiness"] },
    { "@type": "WebSite", "potentialAction": { "@type": "SearchAction" } },
    { "@type": "WebPage", "breadcrumb": "BreadcrumbList" },
    { "@type": "ImageObject", "representativeOfPage": true }
  ]
}
```
</details>

<details>
<summary><strong>/menu</strong> — 3 обекта</summary>

```json
{
  "@graph": [
    { "@type": "Menu", "hasMenuSection": ["Кафе", "Пици", "Десерти", "Закуска", "Напитки"] },
    { "@type": "WebPage" },
    { "@type": "ItemList", "name": "Препоръчани позиции" }
  ]
}
```
</details>

<details>
<summary><strong>/coffee-kozloduy</strong> — 5 обекта</summary>

```json
{
  "@graph": [
    { "@type": ["CafeOrCoffeeShop", "FoodEstablishment", "LocalBusiness"] },
    { "@type": "FAQPage", "mainEntity": ["8 въпроса → Featured Snippets"] },
    { "@type": "WebPage", "speakable": "SpeakableSpecification" },
    { "@type": "Article" },
    { "@type": "Event", "eventSchedule": "Събота специална закуска" }
  ]
}
```
</details>

<details>
<summary><strong>/contact</strong> — 4 обекта</summary>

```json
{
  "@graph": [
    { "@type": "Organization", "contactPoint": ["telephone", "email"] },
    { "@type": "WebPage" },
    { "@type": "Place", "amenityFeature": ["Wi-Fi", "Parking", "Delivery", "..."] },
    { "@type": "WebSite", "potentialAction": "SearchAction" }
  ]
}
```
</details>

### Ключови SEO характеристики

```
✅ AggregateRating + Reviews         →  ⭐ звезди в Google резултатите
✅ FAQPage (8 въпроса)               →  Featured Snippets
✅ SearchAction                      →  SiteLinksSearchBox
✅ SpeakableSpecification            →  Гласово търсене (Alexa, Google)
✅ OpeningHoursSpecification         →  "Отворено сега" в Maps
✅ MenuItem с цени в EUR             →  Rich карти за ястия
✅ BreadcrumbList на всяка страница  →  Breadcrumbs в SERP
✅ WebSite + WebPage + Article       →  Пълен Knowledge Graph
✅ Place с 8 amenityFeature          →  Детайлен Maps профил
✅ Event schema                      →  Google Events
```

---

## 🎴 Loyalty Card — без backend

**`/loyalty`** е напълно serverless лоялна карта.

```
┌─────────────────────────────────────────────┐
│           Как работи                         │
│                                             │
│  Клиент                      Касиер         │
│  ───────                     ───────        │
│  localStorage ──► QR Code ──► Scan ──► ✅  │
│                                             │
│  • Данните живеят на телефона на клиента    │
│  • QR = base64(JSON snapshot)               │
│  • Без регистрация, без парола, без сървър  │
└─────────────────────────────────────────────┘
```

| Функция | Детайл |
|---------|--------|
| ☕ Кафе stamps | 10 → 1 безплатно |
| 🍕 Пица stamps | 8 → 1 безплатна |
| 📲 QR код | `api.qrserver.com` · gold on dark |
| 📊 Статистики | Общо посещения · спестени награди |
| 👑 Нива | Начинаещ → Редовен → Почетен → Легенда |
| 🔒 Поверителност | 100% localStorage · нула сървърни данни |

> **Production tip:** Премахни `// DEV helper – remove in production` блока в `LoyaltyCardClient.tsx` преди deploy.

---

## 🧠 Client vs. Server Components

```
Server Components (default)     Client Components ('use client')
───────────────────────────     ───────────────────────────────
├── app/page.tsx                ├── Navbar.tsx          (scroll state)
├── app/menu/page.tsx           ├── HeroSection.tsx     (motion)
├── app/contact/page.tsx        ├── FadeIn.tsx          (useInView)
├── app/loyalty/page.tsx        ├── MenuFilterClient.tsx(useState)
├── MenuCard.tsx                ├── LoyaltyCardClient.tsx(localStorage)
├── Skeleton.tsx                ├── OpenNowBadge.tsx    (time calc)
├── Footer.tsx                  └── ContactForm.tsx     (form state)
└── FeaturedMenuSection.tsx
```

---

## 🎨 Дизайн система

### Цветова палитра

```
Background   #0D0803   ████  Почти черно
Espresso     #1A0A00   ████  Дълбоко кафяво
Ash          #2A2118   ████  Тъмно сиво-кафяво
Smoke        #3D3328   ████  Средно сиво-кафяво
Gold         #C9A84C   ████  Основен акцент
Gold Light   #E8C97A   ████  Hover злато
Cream        #F5ECD7   ████  Основен текст
```

### Шрифтове

| Шрифт | Употреба | Тегло |
|-------|----------|-------|
| **Playfair Display** | Заглавия, brand | 400–900 |
| **Cormorant Garamond** | Тяло текст, описания | 300–700 |
| **DM Mono** | Labels, цени, badges | 300–500 |

### CSS Utilities (globals.css)

```css
.glass          /* backdrop-blur + rgba border */
.glass-strong   /* по-плътен blur за navbar/overlay */
.gold-gradient  /* text gradient: #C9A84C → #E8C97A → #C9A84C */
.gold-border    /* 1px solid rgba(201, 168, 76, 0.3) */
.noise-overlay  /* SVG noise texture върху body */
.shimmer-bg     /* skeleton loading animation */
```

---

## 📦 Менюто в числа

```
☕  Кафе         6 позиции   Еспресо · Капучино · Флат Уайт · Пур Овър · Cold Brew · Лате
🍕  Пици         6 позиции   Маргарита · Прошуто · Куатро Формаджи · Диавола · Вег · Капричоза
🍰  Десерти      4 позиции   Тирамису · Чийзкейк · Кроасан · Шоколадова торта
🍳  Закуска      3 позиции   Авокадо тост · Гранола бол · Яйца Бенедикт
🥤  Напитки      6 позиции   Кока-Кола · Портокалов сок · Лимонада · Айс тий · Вода · Смути
─────────────────────────────────────────────────────────────────
    ОБЩО        25 позиции   Цени в EUR (€2.50 – €17.50)
```

---

## ⚙️ Конфигурация

### `src/lib/data.ts`
Централното място за всички данни — **единствения файл, който трябва да редактираш** за реален бизнес.

```typescript
// Добави/редактирай меню позиции
export const MENU_ITEMS: MenuItem[] = [ ... ]

// Работно време
export const WORKING_HOURS: WorkingHours[] = [ ... ]

// Контактна информация
export const CONTACT_INFO = {
  address: 'ул. Христо Ботев 14, Козлодуй 3320',
  phone: '+359 893 123 456',
  email: 'hello@delgado-cafe.bg',
  lat: 43.7808,
  lng: 23.7234,
}
```

### `src/lib/schema.ts`
Mega Rich Schema.org конфигурация. Смени `BASE_URL`, `LOGO_URL`, `OG_IMAGE`.

### `next.config.mjs`
`remotePatterns` за Unsplash. При използване на собствени изображения — премахни или обнови.

---

## 🚀 Deploy

### Vercel (препоръчително)

```bash
npm install -g vercel
vercel --prod
```

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/YOUR_USERNAME/delgado-cafe)

### Ръчен build

```bash
npm run build    # .next/ папка
npm run start    # production сървър на :3000
```

### Environment Variables

Няма задължителни env variables — проектът работи без `.env` файл.

> Ако добавяш analytics, плащания или email: създай `.env.local` и не го commit-вай.

---

## 🔧 Scripts

```bash
npm run dev      # Dev сървър на localhost:3000 с hot reload
npm run build    # Production build
npm run start    # Стартира production build
npm run lint     # ESLint проверка
```

---

## 📋 TODO / Roadmap

```
 ✅ Next.js 14 App Router
 ✅ TypeScript + Tailwind + Framer Motion
 ✅ 6 страници (Home · Menu · Coffee SEO · Pizza SEO · Loyalty · Contact)
 ✅ Mega Rich Schema.org JSON-LD @graph
 ✅ Serverless loyalty карта с QR
 ✅ EUR валута (€)
 ✅ Open Now badge (real-time)
 ✅ Loading skeletons
 ✅ Sitemap + robots.txt
 ✅ Mobile-first responsive
 ✅ Accessibility (ARIA, semantic HTML)

 ⬜ Google Business Profile верификация
 ⬜ Реални снимки (replace Unsplash)
 ⬜ Онлайн поръчка за доставка
 ⬜ Интеграция с Glovo / Wolt
 ⬜ Email newsletter (Resend / Mailchimp)
 ⬜ Blog раздел за SEO съдържание
 ⬜ Многоезичност (bg / en)
 ⬜ PWA + Add to Home Screen
 ⬜ Dark/Light mode toggle
 ⬜ Google Analytics 4
```

---

## 🤝 Contributing

Pull requests са добре дошли! За значителни промени — отвори Issue първо.

```bash
# Fork → Clone → Branch
git checkout -b feature/my-feature

# Промени → Commit
git commit -m "feat: add my feature"

# Push → Pull Request
git push origin feature/my-feature
```

---

## 📄 Лиценз

```
MIT License — свободно ползване, модификация и дистрибуция.
© 2026 DelGado Café & Pizzeria, Козлодуй
```

---

<div align="center">

**Направено с ☕ и 🍕 в Козлодуй**

[![](https://img.shields.io/badge/Next.js-App_Router-black?style=flat-square&logo=next.js)](https://nextjs.org/)
[![](https://img.shields.io/badge/Schema.org-@graph-orange?style=flat-square)](https://schema.org/)
[![](https://img.shields.io/badge/Loyalty_Card-No_Backend-C9A84C?style=flat-square)](src/components/ui/LoyaltyCardClient.tsx)
[![](https://img.shields.io/badge/Currency-EUR_€-blue?style=flat-square)](src/lib/utils.ts)

</div>
