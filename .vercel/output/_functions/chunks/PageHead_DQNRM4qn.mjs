import { d as createAstro, c as createComponent, b as addAttribute, a as renderTemplate } from './astro/server_v3yWdH_B.mjs';
import 'clsx';
import { S as SITE } from './consts_RqznFRTQ.mjs';

const $$Astro = createAstro("https://vankythien.dev");
const $$PageHead = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$PageHead;
  const {
    title = SITE.title,
    description = SITE.description,
    noindex = false
  } = Astro2.props;
  const image = new URL("/static/1200x630.png", Astro2.site);
  return renderTemplate`<title>${`${title} | ${SITE.title}`}</title><meta name="description"${addAttribute(description, "content")}><link rel="canonical"${addAttribute(SITE.href, "href")}>${noindex && renderTemplate`<meta name="robots" content="noindex, nofollow">`}<meta property="og:title"${addAttribute(title, "content")}><meta property="og:description"${addAttribute(description, "content")}><meta property="og:image"${addAttribute(image, "content")}><meta property="og:image:alt"${addAttribute(title, "content")}><meta property="og:type" content="website"><meta property="og:locale"${addAttribute(SITE.locale, "content")}><meta property="og:site_name"${addAttribute(SITE.title, "content")}><meta property="og:url"${addAttribute(Astro2.url, "content")}><meta name="twitter:title"${addAttribute(title, "content")}><meta name="twitter:description"${addAttribute(description, "content")}><meta name="twitter:image"${addAttribute(image, "content")}><meta name="twitter:image:alt"${addAttribute(title, "content")}><meta name="twitter:card" content="summary_large_image">`;
}, "/home/blank_dreams/code/blog/src/components/shared/PageHead.astro", void 0);

export { $$PageHead as $ };
