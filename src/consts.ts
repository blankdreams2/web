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

export const NAV_LINKS: SocialLink[] = [
  {
    href: '/blog',
    label: 'blog',
  },
  {
    href: '/project',
    label: 'project',
  },
  {
    href: '/about',
    label: 'about',
  },
  {
    href: '/guestbook',
    label: 'guestbook',
  },
]

export const SOCIAL_LINKS: SocialLink[] = [
  {
    href: 'https://github.com/thienguen',
    label: 'GitHub',
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
  Email: 'lucide:mail',
  RSS: 'lucide:rss',
}
