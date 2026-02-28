import type { IconMap, SocialLink, Site } from '@/types'

export const SITE: Site = {
  title: 'blank_dreams',
  description: 'Personal blog by T — code, UI/UX, rpg maker games, and CTFs.',
  href: 'https://vankythien.dev',
  author: 'T',
  locale: 'en-US',
  featuredPostCount: 2,
  postsPerPage: 3,
}

export const REPO_URL = 'https://github.com/blankdreams2/website'

export const NAV_LINKS: SocialLink[] = [
  // {
  //   href: '/',
  //   label: 'home',
  // },
  {
    href: '/about',
    label: '/about',
  },
  {
    href: '/project',
    label: '/project',
  },
  {
    href: '/blog',
    label: '/blog',
  },
  {
    href: '/guestbook',
    label: '/guestbook',
  },
]

export const SOCIAL_LINKS: SocialLink[] = [
  {
    href: 'https://github.com/blankdreams2',
    label: 'GitHub',
  },
  {
    href: 'https://www.linkedin.com/in/thien-nguyen-2a4a37234/',
    label: 'LinkedIn',
  },
  {
    href: 'https://discordapp.com/users/481754320778428418',
    label: 'Discord',
  },
  {
    href: 'mailto:nein@nein.nein',
    label: 'Email',
  },
  {
    href: '/rss.xml',
    label: 'RSS',
  },
]

export const ICON_MAP: IconMap = {
  Website: 'lucide:globe',
  GitHub: 'lucide:github',
  LinkedIn: 'lucide:linkedin',
  Twitter: 'lucide:twitter',
  Discord: 'simple-icons:discord',
  Email: 'lucide:mail',
  RSS: 'lucide:rss',
}

// forgot what is this for.
export const LIGHT_UNDERLINE = '#D87787'
export const DARK_UNDERLINE = '#b620e0'
