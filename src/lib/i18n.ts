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
      categories: ['全部', '產品規劃與設計', 'AI 與軟體實作', '使用者研究與成長'],
      viewProject: '查看專案',
      backToProjects: 'Back to Projects',
      contents: '目錄',
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
      categories: ['All', 'Product Planning & Design', 'AI & Software Engineering', 'User Research & Growth'],
      viewProject: 'View Project',
      backToProjects: 'Back to Projects',
      contents: 'Contents',
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
