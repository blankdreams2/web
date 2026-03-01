import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

function cn(...inputs) {
  return twMerge(clsx(inputs));
}
function formatDate(date) {
  return Intl.DateTimeFormat("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric"
  }).format(date);
}
function formatDateShort(date) {
  return Intl.DateTimeFormat("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric"
  }).format(date);
}
function calculateWordCountFromHtml(html) {
  if (!html) return 0;
  const textOnly = html.replace(/<[^>]+>/g, "");
  return textOnly.split(/\s+/).filter(Boolean).length;
}
function readingTime(wordCount) {
  const readingTimeMinutes = Math.max(1, Math.round(wordCount / 200));
  return `${readingTimeMinutes} min read`;
}
function getHeadingMargin(depth) {
  const margins = {
    3: "ml-4",
    4: "ml-8",
    5: "ml-12",
    6: "ml-16"
  };
  return margins[depth] || "";
}

const SITE = {
  title: "blank_dreams",
  description: "Personal blog by T — school work, UI/UX, rpg maker games, and CTFs.",
  href: "https://vankythien.dev",
  author: "T",
  locale: "en-US",
  featuredPostCount: 2,
  postsPerPage: 3,
  projectsPerPage: 3
};
const FEATURED_PROJECT_NAMES = [
  "Bad Decicions Inc.",
  "Barbell",
  "Cyber Clinic"
];
const REPO_URL = "https://github.com/blankdreams2/website";
const NAV_LINKS = [
  {
    href: "/",
    label: "/home"
  },
  {
    href: "/about",
    label: "/about"
  },
  {
    href: "/project",
    label: "/project"
  },
  {
    href: "/blog",
    label: "/blog"
  },
  {
    href: "/guestbook",
    label: "/guestbook"
  }
];
const SOCIAL_LINKS = [
  {
    href: "https://github.com/blankdreams2",
    label: "GitHub"
  },
  {
    href: "https://www.linkedin.com/in/thien-nguyen-2a4a37234/",
    label: "LinkedIn"
  },
  {
    href: "https://discordapp.com/users/481754320778428418",
    label: "Discord"
  },
  {
    href: "mailto:nein@nein.nein",
    label: "Email"
  },
  {
    href: "/rss.xml",
    label: "RSS"
  }
];
const ICON_MAP = {
  Website: "lucide:globe",
  GitHub: "lucide:github",
  LinkedIn: "lucide:linkedin",
  Twitter: "lucide:twitter",
  Discord: "simple-icons:discord",
  Email: "lucide:mail",
  RSS: "lucide:rss"
};
const LIGHT_UNDERLINE = "#D87787";
const DARK_UNDERLINE = "#b620e0";
const BENTO_PATTERN = [
  "wide",
  "small",
  "small",
  "wide",
  "small",
  "small",
  "tall",
  "small",
  "small",
  "wide"
];
const getBentoSize = (index) => BENTO_PATTERN[index % BENTO_PATTERN.length];
const GITHUB_API_BASE_URL = "https://api.github.com/graphql";
const GITHUB_ACCOUNTS = {
  username: "blankdreams2",
  token: "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",
  endpoint: "/api/github?type=personal",
  type: "personal",
  is_active: true
};
const GITHUB_USER_QUERY = `query($username: String!, $from: DateTime!, $to: DateTime!) {
    user(login: $username) {
      contributionsCollection(from: $from, to: $to) {
        contributionCalendar {
          colors
          totalContributions
          months {
            firstDay
            name
            totalWeeks
          }
          weeks {
            contributionDays {
              color
              contributionCount
              date
            }
            firstDay
          }
        }
      }
    }
  }`;

const consts = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  BENTO_PATTERN,
  DARK_UNDERLINE,
  FEATURED_PROJECT_NAMES,
  GITHUB_ACCOUNTS,
  GITHUB_API_BASE_URL,
  GITHUB_USER_QUERY,
  ICON_MAP,
  LIGHT_UNDERLINE,
  NAV_LINKS,
  REPO_URL,
  SITE,
  SOCIAL_LINKS,
  getBentoSize
}, Symbol.toStringTag, { value: 'Module' }));

export { DARK_UNDERLINE as D, GITHUB_API_BASE_URL as G, ICON_MAP as I, LIGHT_UNDERLINE as L, NAV_LINKS as N, REPO_URL as R, SITE as S, GITHUB_ACCOUNTS as a, GITHUB_USER_QUERY as b, cn as c, formatDate as d, getBentoSize as e, formatDateShort as f, getHeadingMargin as g, SOCIAL_LINKS as h, calculateWordCountFromHtml as i, consts as j, readingTime as r };
