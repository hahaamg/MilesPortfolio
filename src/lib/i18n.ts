export type Locale = 'zh' | 'en';

export function getLocaleFromPath(pathname: string): Locale {
  if (pathname === '/en' || pathname.startsWith('/en/')) {
    return 'en';
  }
  return 'zh';
}

export function getLocalizedPath(pathname: string, targetLocale: Locale): string {
  // Normalize pathname: remove duplicate slashes, remove trailing slash unless root
  let cleanPath = pathname.replace(/\/+/g, '/');
  if (cleanPath.length > 1 && cleanPath.endsWith('/')) {
    cleanPath = cleanPath.slice(0, -1);
  }

  const currentLocale = getLocaleFromPath(cleanPath);

  if (currentLocale === targetLocale) {
    return cleanPath;
  }

  if (targetLocale === 'en') {
    // Going from zh to en
    if (cleanPath === '/' || cleanPath === '') {
      return '/en';
    }
    return `/en${cleanPath}`;
  } else {
    // Going from en to zh
    if (cleanPath === '/en') {
      return '/';
    }
    const stripped = cleanPath.replace(/^\/en/, '');
    return stripped === '' ? '/' : stripped;
  }
}

export const ui = {
  zh: {
    nav: {
      home: 'Home',
      projects: 'Projects',
      about: 'About',
      contact: 'Contact',
      menu: 'Menu',
      close: 'Close',
      viewRecentWork: 'View recent work',
    },
    projects: {
      title: 'Projects',
      allCategory: '全部',
      categories: ['全部', '產品設計', '技術開發', '數據驅動成長', '使用者研究'],
      viewProject: '查看專案',
      backToProjects: 'Back to Projects',
    },
    footer: {
      home: 'Home',
      projects: 'Projects',
      about: 'About',
      contact: 'Contact',
    },
    contact: {
      title: 'Contact Info',
      city: '台北市',
      country: '台灣',
    },
    available: "⚡ Something's always in progress",
  },
  en: {
    nav: {
      home: 'Home',
      projects: 'Projects',
      about: 'About',
      contact: 'Contact',
      menu: 'Menu',
      close: 'Close',
      viewRecentWork: 'View recent work',
    },
    projects: {
      title: 'Projects',
      allCategory: 'All',
      categories: ['All', 'Product Design', 'Engineering', 'Data-Driven Growth', 'User Research'],
      viewProject: 'View Project',
      backToProjects: 'Back to Projects',
    },
    footer: {
      home: 'Home',
      projects: 'Projects',
      about: 'About',
      contact: 'Contact',
    },
    contact: {
      title: 'Contact Info',
      city: 'Taipei',
      country: 'Taiwan',
    },
    available: "⚡ Something's always in progress",
  },
} as const;
