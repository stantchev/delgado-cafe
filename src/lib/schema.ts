import { MENU_ITEMS, WORKING_HOURS, CONTACT_INFO } from '@/lib/data';

const BASE_URL = 'https://delgado-cafe.bg';
const LOGO_URL = `${BASE_URL}/logo.png`;
const OG_IMAGE = `${BASE_URL}/og-image.jpg`;

const postalAddress = {
  '@type': 'PostalAddress',
  streetAddress: 'ул. Христо Ботев 14',
  addressLocality: 'Козлодуй',
  addressRegion: 'Враца',
  postalCode: '3320',
  addressCountry: 'BG',
};

const geo = {
  '@type': 'GeoCoordinates',
  latitude: CONTACT_INFO.lat,
  longitude: CONTACT_INFO.lng,
};

const openingHoursSpecification = [
  { '@type': 'OpeningHoursSpecification', dayOfWeek: ['Monday','Tuesday','Wednesday','Thursday'], opens: '07:30', closes: '21:00' },
  { '@type': 'OpeningHoursSpecification', dayOfWeek: ['Friday'], opens: '07:30', closes: '22:00' },
  { '@type': 'OpeningHoursSpecification', dayOfWeek: ['Saturday'], opens: '08:00', closes: '22:00' },
  { '@type': 'OpeningHoursSpecification', dayOfWeek: ['Sunday'], opens: '09:00', closes: '20:00' },
];

const aggregateRating = {
  '@type': 'AggregateRating',
  ratingValue: '4.9',
  reviewCount: '124',
  bestRating: '5',
  worstRating: '1',
};

const logo = { '@type': 'ImageObject', url: LOGO_URL, width: 300, height: 300 };

const organizationBase = {
  '@type': ['CafeOrCoffeeShop', 'FoodEstablishment', 'LocalBusiness'],
  '@id': `${BASE_URL}/#business`,
  name: 'DelGado Café & Pizzeria',
  alternateName: ['DelGado', 'DelGado Козлодуй', 'DelGado Кафе Пицария', 'Делгадо Козлодуй'],
  description: 'Premium кафе-пицария в центъра на Козлодуй. Specialty еспресо от единичен произход, домашни пици на тънко тесто, артизански десерти и пресни безалкохолни напитки.',
  url: BASE_URL,
  logo,
  image: [OG_IMAGE],
  telephone: '+359893123456',
  email: CONTACT_INFO.email,
  address: postalAddress,
  geo,
  hasMap: `https://maps.google.com/?q=${encodeURIComponent(CONTACT_INFO.address)}`,
  openingHoursSpecification,
  aggregateRating,
  priceRange: '$$',
  currenciesAccepted: 'EUR',
  paymentAccepted: 'Cash, Credit Card, Debit Card',
  servesCuisine: ['Specialty Coffee', 'Italian Pizza', 'Bulgarian', 'Desserts', 'Breakfast', 'Fresh Juices'],
  menu: `${BASE_URL}/menu`,
  foundingDate: '2019',
  areaServed: [
    { '@type': 'City', name: 'Козлодуй' },
    { '@type': 'City', name: 'Враца' },
  ],
  sameAs: [
    'https://www.instagram.com/delgado.cafe',
    'https://www.facebook.com/delgadocafe',
  ],
  amenityFeature: [
    { '@type': 'LocationFeatureSpecification', name: 'Wi-Fi', value: true },
    { '@type': 'LocationFeatureSpecification', name: 'Outdoor Seating', value: true },
    { '@type': 'LocationFeatureSpecification', name: 'Card Payment', value: true },
    { '@type': 'LocationFeatureSpecification', name: 'Takeaway', value: true },
    { '@type': 'LocationFeatureSpecification', name: 'Delivery', value: true },
    { '@type': 'LocationFeatureSpecification', name: 'Wheelchair Accessible', value: true },
    { '@type': 'LocationFeatureSpecification', name: 'Parking', value: true },
    { '@type': 'LocationFeatureSpecification', name: 'Family Friendly', value: true },
  ],
  potentialAction: [
    {
      '@type': 'ReserveAction',
      target: { '@type': 'EntryPoint', urlTemplate: `${BASE_URL}/contact` },
      result: { '@type': 'Reservation', name: 'Маса в DelGado' },
    },
    { '@type': 'ViewAction', target: `${BASE_URL}/menu`, name: 'Виж менюто' },
    {
      '@type': 'OrderAction',
      target: { '@type': 'EntryPoint', urlTemplate: `tel:+359893123456` },
      name: 'Поръчай за вкъщи',
    },
  ],
};

const reviews = [
  {
    '@type': 'Review',
    author: { '@type': 'Person', name: 'Мария Иванова' },
    datePublished: '2024-11-15',
    reviewBody: 'Невероятно кафе! Флат уайтът им е най-добрият, който съм пила в България. Атмосферата е топла и уютна.',
    reviewRating: { '@type': 'Rating', ratingValue: '5', bestRating: '5' },
    itemReviewed: { '@type': 'CafeOrCoffeeShop', name: 'DelGado Café & Pizzeria' },
  },
  {
    '@type': 'Review',
    author: { '@type': 'Person', name: 'Георги Петров' },
    datePublished: '2025-02-03',
    reviewBody: 'Пицата Диавола е просто страхотна – тънко тесто, пикантна, перфектно изпечена. Кафето е топ. Най-доброто място в Козлодуй!',
    reviewRating: { '@type': 'Rating', ratingValue: '5', bestRating: '5' },
    itemReviewed: { '@type': 'CafeOrCoffeeShop', name: 'DelGado Café & Pizzeria' },
  },
  {
    '@type': 'Review',
    author: { '@type': 'Person', name: 'Стефания Колева' },
    datePublished: '2025-01-22',
    reviewBody: 'Маргаритата е класика – тънка, хрупкава, с истинска моцарела. И тирамисуто е просто фантастично. Задължително!',
    reviewRating: { '@type': 'Rating', ratingValue: '5', bestRating: '5' },
    itemReviewed: { '@type': 'CafeOrCoffeeShop', name: 'DelGado Café & Pizzeria' },
  },
];

function buildMenuItems(category: string) {
  return MENU_ITEMS.filter((i) => i.category === category).map((item) => ({
    '@type': 'MenuItem',
    '@id': `${BASE_URL}/menu#${item.id}`,
    name: item.name,
    description: item.description,
    image: item.image,
    offers: {
      '@type': 'Offer',
      price: item.price.toFixed(2),
      priceCurrency: 'EUR',
      availability: 'https://schema.org/InStock',
      url: `${BASE_URL}/menu`,
    },
  }));
}

export function getHomePageSchema() {
  return {
    '@context': 'https://schema.org',
    '@graph': [
      { ...organizationBase, review: reviews },
      {
        '@type': 'WebSite',
        '@id': `${BASE_URL}/#website`,
        url: BASE_URL,
        name: 'DelGado Café & Pizzeria',
        description: 'Официален сайт на DelGado – кафе-пицария в Козлодуй',
        inLanguage: 'bg-BG',
        publisher: { '@id': `${BASE_URL}/#business` },
        potentialAction: {
          '@type': 'SearchAction',
          target: { '@type': 'EntryPoint', urlTemplate: `${BASE_URL}/menu?q={search_term_string}` },
          'query-input': 'required name=search_term_string',
        },
      },
      {
        '@type': 'WebPage',
        '@id': `${BASE_URL}/#webpage`,
        url: BASE_URL,
        name: 'DelGado – Кафе-Пицария | Козлодуй',
        isPartOf: { '@id': `${BASE_URL}/#website` },
        about: { '@id': `${BASE_URL}/#business` },
        description: 'Начална страница на DelGado – кафе и пицария в Козлодуй. Specialty кафе, домашни пици и десерти.',
        inLanguage: 'bg-BG',
        breadcrumb: {
          '@type': 'BreadcrumbList',
          itemListElement: [{ '@type': 'ListItem', position: 1, name: 'Начало', item: BASE_URL }],
        },
      },
      {
        '@type': 'ImageObject',
        '@id': `${BASE_URL}/#hero-image`,
        url: 'https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=1920&q=85',
        caption: 'DelGado Кафе-Пицария – Козлодуй',
        representativeOfPage: true,
      },
    ],
  };
}

export function getMenuPageSchema() {
  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Menu',
        '@id': `${BASE_URL}/menu#menu`,
        name: 'Меню на DelGado Кафе-Пицария Козлодуй',
        description: 'Specialty кафе, пици на тънко тесто, десерти, закуска и безалкохолни напитки.',
        url: `${BASE_URL}/menu`,
        inLanguage: 'bg-BG',
        hasMenuSection: [
          { '@type': 'MenuSection', '@id': `${BASE_URL}/menu#coffee`, name: 'Кафе', description: 'Specialty кафе от единичен произход', hasMenuItem: buildMenuItems('coffee') },
          { '@type': 'MenuSection', '@id': `${BASE_URL}/menu#pizza`, name: 'Пици', description: 'Домашни пици на тънко тесто', hasMenuItem: buildMenuItems('pizza') },
          { '@type': 'MenuSection', '@id': `${BASE_URL}/menu#desserts`, name: 'Десерти', description: 'Домашни десерти и сладкиши', hasMenuItem: buildMenuItems('desserts') },
          { '@type': 'MenuSection', '@id': `${BASE_URL}/menu#breakfast`, name: 'Закуска', description: 'Питателни закуски', hasMenuItem: buildMenuItems('breakfast') },
          { '@type': 'MenuSection', '@id': `${BASE_URL}/menu#drinks`, name: 'Безалкохолни', description: 'Пресни сокове, лимонади, смутита', hasMenuItem: buildMenuItems('drinks') },
        ],
      },
      {
        '@type': 'WebPage',
        '@id': `${BASE_URL}/menu#webpage`,
        url: `${BASE_URL}/menu`,
        name: 'Меню – Кафе, Пици, Десерти | DelGado Козлодуй',
        isPartOf: { '@id': `${BASE_URL}/#website` },
        inLanguage: 'bg-BG',
        breadcrumb: {
          '@type': 'BreadcrumbList',
          itemListElement: [
            { '@type': 'ListItem', position: 1, name: 'Начало', item: BASE_URL },
            { '@type': 'ListItem', position: 2, name: 'Меню', item: `${BASE_URL}/menu` },
          ],
        },
      },
      {
        '@type': 'ItemList',
        name: 'Препоръчани позиции – DelGado',
        itemListElement: MENU_ITEMS.filter((i) => i.featured).map((item, idx) => ({
          '@type': 'ListItem',
          position: idx + 1,
          name: item.name,
          url: `${BASE_URL}/menu#${item.id}`,
          image: item.image,
        })),
      },
    ],
  };
}

export function getCoffeeKozloduySchema() {
  return {
    '@context': 'https://schema.org',
    '@graph': [
      { ...organizationBase, review: reviews, aggregateRating },
      {
        '@type': 'FAQPage',
        '@id': `${BASE_URL}/coffee-kozloduy#faq`,
        mainEntity: [
          { '@type': 'Question', name: 'Какво е specialty кафе?', acceptedAnswer: { '@type': 'Answer', text: 'Specialty кафето е кафе с оценка над 80 точки по скалата на Specialty Coffee Association. DelGado работи с проверени доставчици от Етиопия, Колумбия и Бразилия.' } },
          { '@type': 'Question', name: 'Кога е отворена пицарията DelGado в Козлодуй?', acceptedAnswer: { '@type': 'Answer', text: 'Отворени сме всеки ден: Понеделник–Четвъртък 07:30–21:00, Петък 07:30–22:00, Събота 08:00–22:00, Неделя 09:00–20:00.' } },
          { '@type': 'Question', name: 'Правите ли доставка на пица в Козлодуй?', acceptedAnswer: { '@type': 'Answer', text: 'Да! Приемаме поръчки за доставка на пица в Козлодуй. Обадете се на +359 893 123 456.' } },
          { '@type': 'Question', name: 'Колко струва пицата в DelGado?', acceptedAnswer: { '@type': 'Answer', text: 'Пиците ни варират от €14.00 (Маргарита) до €17.50 (Капричоза). Плащаме в евро.' } },
          { '@type': 'Question', name: 'Имате ли вегетариански пици?', acceptedAnswer: { '@type': 'Answer', text: 'Да, предлагаме Маргарита и Вегетариана – и двете са без месо.' } },
          { '@type': 'Question', name: 'Имате ли безмлечни алтернативи за кафето?', acceptedAnswer: { '@type': 'Answer', text: 'Да! Предлагаме оат, бадемово и соево мляко за всички кафе напитки.' } },
          { '@type': 'Question', name: 'Приемате ли карти?', acceptedAnswer: { '@type': 'Answer', text: 'Да, приемаме всички дебитни и кредитни карти, плащаме в евро.' } },
          { '@type': 'Question', name: 'Има ли паркинг до кафе-пицария DelGado?', acceptedAnswer: { '@type': 'Answer', text: 'Да, в близост до кафе-пицарията има безплатен паркинг на улицата.' } },
        ],
      },
      {
        '@type': 'WebPage',
        '@id': `${BASE_URL}/coffee-kozloduy#webpage`,
        url: `${BASE_URL}/coffee-kozloduy`,
        name: 'Кафе Пицария Козлодуй – DelGado',
        isPartOf: { '@id': `${BASE_URL}/#website` },
        inLanguage: 'bg-BG',
        speakable: { '@type': 'SpeakableSpecification', cssSelector: ['h1', 'h2'] },
        breadcrumb: {
          '@type': 'BreadcrumbList',
          itemListElement: [
            { '@type': 'ListItem', position: 1, name: 'Начало', item: BASE_URL },
            { '@type': 'ListItem', position: 2, name: 'Кафе Козлодуй', item: `${BASE_URL}/coffee-kozloduy` },
          ],
        },
      },
      {
        '@type': 'Article',
        '@id': `${BASE_URL}/coffee-kozloduy#article`,
        headline: 'Кафе Пицария Козлодуй – Защо DelGado е Различно',
        description: 'Пълно ръководство за specialty кафе и домашни пици в Козлодуй.',
        image: OG_IMAGE,
        author: { '@type': 'Organization', name: 'DelGado Café & Pizzeria', url: BASE_URL },
        publisher: { '@type': 'Organization', name: 'DelGado', logo: { '@type': 'ImageObject', url: LOGO_URL } },
        datePublished: '2024-01-01',
        dateModified: new Date().toISOString().split('T')[0],
        inLanguage: 'bg-BG',
        mainEntityOfPage: `${BASE_URL}/coffee-kozloduy`,
      },
    ],
  };
}

export function getContactPageSchema() {
  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        ...organizationBase,
        contactPoint: [
          {
            '@type': 'ContactPoint',
            telephone: '+359893123456',
            contactType: 'customer service',
            areaServed: 'BG',
            availableLanguage: ['Bulgarian', 'English'],
            hoursAvailable: openingHoursSpecification,
          },
          {
            '@type': 'ContactPoint',
            email: CONTACT_INFO.email,
            contactType: 'customer support',
            areaServed: 'BG',
            availableLanguage: ['Bulgarian', 'English'],
          },
        ],
      },
      {
        '@type': 'WebPage',
        '@id': `${BASE_URL}/contact#webpage`,
        url: `${BASE_URL}/contact`,
        name: 'Контакти – DelGado Кафе-Пицария Козлодуй',
        isPartOf: { '@id': `${BASE_URL}/#website` },
        inLanguage: 'bg-BG',
        breadcrumb: {
          '@type': 'BreadcrumbList',
          itemListElement: [
            { '@type': 'ListItem', position: 1, name: 'Начало', item: BASE_URL },
            { '@type': 'ListItem', position: 2, name: 'Контакти', item: `${BASE_URL}/contact` },
          ],
        },
      },
      {
        '@type': 'Place',
        '@id': `${BASE_URL}/contact#place`,
        name: 'DelGado Café & Pizzeria – Козлодуй',
        address: postalAddress,
        geo,
        hasMap: `https://maps.google.com/?q=${encodeURIComponent(CONTACT_INFO.address)}`,
        telephone: '+359893123456',
        openingHoursSpecification,
        amenityFeature: [
          { '@type': 'LocationFeatureSpecification', name: 'Wi-Fi', value: true },
          { '@type': 'LocationFeatureSpecification', name: 'Wheelchair Accessible', value: true },
          { '@type': 'LocationFeatureSpecification', name: 'Outdoor Seating', value: true },
          { '@type': 'LocationFeatureSpecification', name: 'Card Payment', value: true },
          { '@type': 'LocationFeatureSpecification', name: 'Takeaway', value: true },
          { '@type': 'LocationFeatureSpecification', name: 'Delivery', value: true },
          { '@type': 'LocationFeatureSpecification', name: 'Parking', value: true },
          { '@type': 'LocationFeatureSpecification', name: 'Family Friendly', value: true },
        ],
      },
      {
        '@type': 'WebSite',
        url: BASE_URL,
        potentialAction: {
          '@type': 'SearchAction',
          target: { '@type': 'EntryPoint', urlTemplate: `${BASE_URL}/menu?q={search_term_string}` },
          'query-input': 'required name=search_term_string',
        },
      },
    ],
  };
}
