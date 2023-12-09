import AvatarImage from '@/assets/avatars/avatar-02.jpg';
import AvatarImage02 from '@/assets/avatars/avatar-03.png';
import AvatarImage03 from '@/assets/avatars/avatar-04.png';
import EventLocationImage from '@/assets/event-location.jpg';
import FeederImageBanner from '@/assets/category-banner/01.jpg';
import MethodFeederBanner from '@/assets/category-banner/02.jpg';
import PlavanaBanner from '@/assets/category-banner/03.jpg';
import CarpBanner from '@/assets/category-banner/04.jpg';
import EventBannerBg from '@/assets/event-banner/event-banner-bg.jpg';

export const CATEGORIES = [
  {
    id: 1,
    title: 'Feeder',
    bgImage: FeederImageBanner,
    url: '/',
  },
  {
    id: 2,
    title: 'Method feeder',
    bgImage: MethodFeederBanner,
    url: '/',
  },
  {
    id: 3,
    title: 'Plávaná',
    bgImage: PlavanaBanner,
    url: '/',
  },
  {
    id: 4,
    title: 'Kapor',
    bgImage: CarpBanner,
    url: '/',
  },
];

export const EVENTS_DATA = [
  {
    id: 1,
    image: EventLocationImage,
    badgeData: {
      badgeText: 'LRU METHOD FEEDER',
      badgeTextColor: '#6B7280',
      badgeBgColor: '#F3F4F6',
    },
    title: 'Method King Feeder Cup',
    location: 'Rybník Dolný Bar',
    startDate: '22. 7.',
    endDate: '24. 7. 2023',
    progressBarData: {
      maxCapacity: 50,
      registered: 10,
    },
  },
  {
    id: 2,
    image: EventLocationImage,
    badgeData: {
      badgeText: 'LRU METHOD FEEDER',
      badgeTextColor: '#6B7280',
      badgeBgColor: '#F3F4F6',
    },
    title: 'Method King Feeder Cup',
    location: 'Rybník Dolný Bar',
    startDate: '22. 7.',
    endDate: '24. 7. 2023',
    progressBarData: {
      maxCapacity: 50,
      registered: 10,
    },
  },
  {
    id: 3,
    image: EventLocationImage,
    badgeData: {
      badgeText: 'LRU METHOD FEEDER',
      badgeTextColor: '#6B7280',
      badgeBgColor: '#F3F4F6',
    },
    title: 'Method King Feeder Cup',
    location: 'Rybník Dolný Bar',
    startDate: '22. 7.',
    endDate: '24. 7. 2023',
    progressBarData: {
      maxCapacity: 50,
      registered: 10,
    },
  },
  {
    id: 4,
    image: EventLocationImage,
    badgeData: {
      badgeText: 'LRU METHOD FEEDER',
      badgeTextColor: '#6B7280',
      badgeBgColor: '#F3F4F6',
    },
    title: 'Method King Feeder Cup',
    location: 'Rybník Dolný Bar',
    startDate: '22. 7.',
    endDate: '24. 7. 2023',
    progressBarData: {
      maxCapacity: 50,
      registered: 10,
    },
  },
];

export const EVENTS_FINISHED_DATA = [
  {
    id: 1,
    image: EventLocationImage,
    badgeData: {
      badgeText: 'LRU METHOD FEEDER',
      badgeTextColor: '#6B7280',
      badgeBgColor: '#F3F4F6',
    },
    title: 'Method King Feeder Cup',
    location: 'Rybník Dolný Bar',
    startDate: '22. 7.',
    endDate: '24. 7. 2023',
    progressBarData: {
      maxCapacity: 50,
      registered: 10,
    },
    isFinished: true,
  },
  {
    id: 2,
    image: EventLocationImage,
    badgeData: {
      badgeText: 'LRU METHOD FEEDER',
      badgeTextColor: '#6B7280',
      badgeBgColor: '#F3F4F6',
    },
    title: 'Method King Feeder Cup',
    location: 'Rybník Dolný Bar',
    startDate: '22. 7.',
    endDate: '24. 7. 2023',
    progressBarData: {
      maxCapacity: 50,
      registered: 10,
    },
    isFinished: true,
  },
  {
    id: 3,
    image: EventLocationImage,
    badgeData: {
      badgeText: 'LRU METHOD FEEDER',
      badgeTextColor: '#6B7280',
      badgeBgColor: '#F3F4F6',
    },
    title: 'Method King Feeder Cup',
    location: 'Rybník Dolný Bar',
    startDate: '22. 7.',
    endDate: '24. 7. 2023',
    progressBarData: {
      maxCapacity: 50,
      registered: 10,
    },
    isFinished: true,
  },
  {
    id: 4,
    image: EventLocationImage,
    badgeData: {
      badgeText: 'LRU METHOD FEEDER',
      badgeTextColor: '#6B7280',
      badgeBgColor: '#F3F4F6',
    },
    title: 'Method King Feeder Cup',
    location: 'Rybník Dolný Bar',
    startDate: '22. 7.',
    endDate: '24. 7. 2023',
    progressBarData: {
      maxCapacity: 50,
      registered: 10,
    },
    isFinished: true,
  },
];

export const EVENT_BANNER_DATA = {
  id: 12,
  bgImage: EventBannerBg,
  title: 'Majstrovstvá sveta',
  location: 'Rybník Dolný Bar',
  badgeData: {
    badgeText: 'LRU METHOD FEEDER',
    badgeTextColor: '#FFF',
    badgeBgColor: '#EAB308',
  },
  startDate: '22. 7.',
  endDate: '24. 7. 2023',
};

export const NEWS_PREVIEW = [
  {
    id: 1,
    image: EventLocationImage,
    title: 'Recept na opatrné ryby alebo ako ma zasvätili do tajomstiev mŕtvych ramien',
    badgeData: [
      {
        badgeText: 'LRU METHOD FEEDER',
        badgeTextColor: '#6B7280',
        badgeBgColor: '#F3F4F6',
      },
      {
        badgeText: 'Zahraničné preteky',
        badgeTextColor: '#A855F7',
        badgeBgColor: '#FAF5FF',
      },
      {
        badgeText: 'Preteky jednotlivcov',
        badgeTextColor: '#10B981',
        badgeBgColor: '#ECFDF5',
      },
    ],
    articlePreviewText: 'Priznám sa, že som vyrastal na mŕtvych ramenách. Tieto vody mi prirástli k srdcu a stále sa tam vraciam. V čase, keď som bol chlapcom, sme techniku, aká je dnes, vôbec nepoznali. Snáď miliónkrát som si predstavoval, ako to asi vyzerá pod vodou.',
    charPreviewLimit: 100,
    authorData: {
      avatar: AvatarImage,
      authorName: 'Redakcia',
    }
  },
  {
    id: 2,
    image: EventLocationImage,
    title: 'Rybárska duša',
    badgeData: [
      {
        badgeText: 'LRU METHOD FEEDER',
        badgeTextColor: '#6B7280',
        badgeBgColor: '#F3F4F6',
      },
      {
        badgeText: 'Zahraničné preteky',
        badgeTextColor: '#A855F7',
        badgeBgColor: '#FAF5FF',
      },
      {
        badgeText: 'Preteky jednotlivcov',
        badgeTextColor: '#10B981',
        badgeBgColor: '#ECFDF5',
      },
    ],
    articlePreviewText: 'Občas si kladiem otázku: “Čo ma ťahá späť k vode?” Ak by som sa vrátil na začiatok svojho príbehu, tak by to bolo nadšenie z rýb ako tvorov.',
    charPreviewLimit: 100,
    authorData: {
      avatar: AvatarImage,
      authorName: 'Redakcia',
    }
  },
];

export const TABLE_DATA_SK = {
  tableHeader: ['MENO', 'NÁZOV PRETEKU', 'MESTO', 'ROK'],
  tableBody: [
    {
      name: 'Denis Rovensky',
      photo: AvatarImage02,
      eventName: 'Majstrovstva sveta KLUBOV v IRSKU',
      eventLocation: 'Istambul, Turecko',
      eventYear: 2021,
    },
    {
      name: 'Marek Gabona',
      photo: AvatarImage03,
      eventName: '2.liga METHOD 1.kolo',
      eventLocation: 'Male, Maldivi',
      eventYear: 2023,
    },
    {
      name: 'Jozef Kucera',
      photo: AvatarImage,
      eventName: '1. liga METHOD 1.kolo',
      eventLocation: 'Aljaška, USA',
      eventYear: 2040,
    },
    {
      name: 'Milos Galnoci ml.',
      photo: AvatarImage02,
      eventName: 'DIVIZIA Vychod FEEDER 1.kolo',
      eventLocation: 'Košice, Slovensko',
      eventYear: 2022,
    },
  ],
};

export const TABLE_DATA_WORLD = {
  tableHeader: ['MENO', 'NÁZOV PRETEKU', 'MESTO', 'ROK'],
  tableBody: [
    {
      name: 'Denis Rovensky',
      photo: AvatarImage02,
      eventName: 'Majstrovstva sveta KLUBOV v IRSKU',
      eventLocation: 'Istambul, Turecko',
      eventYear: 2021,
    },
    {
      name: 'Marek Gabona',
      photo: AvatarImage03,
      eventName: '2.liga METHOD 1.kolo',
      eventLocation: 'Male, Maldivi',
      eventYear: 2023,
    },
    {
      name: 'Jozef Kucera',
      photo: AvatarImage,
      eventName: '1. liga METHOD 1.kolo',
      eventLocation: 'Aljaška, USA',
      eventYear: 2040,
    },
    {
      name: 'Milos Galnoci ml.',
      photo: AvatarImage02,
      eventName: 'DIVIZIA Vychod FEEDER 1.kolo',
      eventLocation: 'Košice, Slovensko',
      eventYear: 2022,
    },
  ],
};