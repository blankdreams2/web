import { d as createAstro, c as createComponent, m as maybeRenderHead, b as addAttribute, r as renderComponent, a as renderTemplate, e as renderScript } from '../chunks/astro/server_v3yWdH_B.mjs';
import { $ as $$BlogCard, a as $$BlogTitle } from '../chunks/BlogTitle_DMGIBhLT.mjs';
import { g as groupPostsByYear, a as getAllPostsAndSubposts, i as isSubpost } from '../chunks/data-utils_CmMo04gt.mjs';
import { f as formatDateShort } from '../chunks/consts_RqznFRTQ.mjs';
import { b as badgeVariants } from '../chunks/badge_FkkX4EQ5.mjs';
import { d as $$Icon, $ as $$Layout } from '../chunks/Layout_yZGE3sl7.mjs';
/* empty css                                 */
import { $ as $$PageHead } from '../chunks/PageHead_DQNRM4qn.mjs';
import { S as SpinCar } from '../chunks/SpinCar_D5iMoVvZ.mjs';
export { renderers } from '../renderers.mjs';

const $$Astro$1 = createAstro("https://vankythien.dev");
const $$BlogCalendar = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$BlogCalendar;
  const { parentPosts } = Astro2.props;
  const postsByYear = groupPostsByYear(parentPosts);
  const years = Object.keys(postsByYear).sort((a, b) => parseInt(b) - parseInt(a));
  return renderTemplate`${maybeRenderHead()}<div class="flex min-h-[calc(100vh-18rem)] flex-col" id="blog-calendar" style="view-transition-name: blog-calendar-content"> ${years.map((year, yearIndex) => renderTemplate`<section class="relative flex flex-col"${addAttribute(year, "data-blog-year")}> <!-- Year header with timeline accent --> <div class="mb-8 flex items-baseline gap-4"> <div class="bg-primary/15 text-primary ring-primary/20 flex size-14 shrink-0 items-center justify-center rounded-2xl font-bold tabular-nums ring-1"> ${year} </div> <div class="text-muted-foreground text-sm font-medium uppercase tracking-wider"> ${postsByYear[year].length} post${postsByYear[year].length === 1 ? "" : "s"} </div> <div class="bg-border h-px flex-1"></div> </div> <!-- Posts with date badges --> <ul class="flex flex-col gap-8"> ${postsByYear[year].map((post) => renderTemplate`<li class="relative" data-blog-post${addAttribute(post.data.tags?.join(",") ?? "", "data-tags")}> <div class="mb-2 flex items-center gap-2"> <time${addAttribute(post.data.date.toISOString(), "datetime")} class="text-muted-foreground bg-muted/60 rounded-lg px-2.5 py-1 text-xs font-medium tabular-nums"> ${formatDateShort(post.data.date)} </time> </div> ${renderComponent($$result, "BlogCard", $$BlogCard, { "entry": post })} </li>`)} </ul> <!-- Divider between years --> ${yearIndex < years.length - 1 && renderTemplate`<div class="border-border my-16 border-t" aria-hidden></div>`} </section>`)} </div>`;
}, "/home/blank_dreams/code/blog/src/components/blog/BlogCalendar.astro", void 0);

const $$Astro = createAstro("https://vankythien.dev");
const $$BlogTagFilter = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$BlogTagFilter;
  const { posts } = Astro2.props;
  const tagCounts = /* @__PURE__ */ new Map();
  for (const post of posts) {
    post.data.tags?.forEach((tag) => {
      tagCounts.set(tag, (tagCounts.get(tag) ?? 0) + 1);
    });
  }
  const sortedTags = [...tagCounts.entries()].sort((a, b) => {
    const countDiff = b[1] - a[1];
    return countDiff !== 0 ? countDiff : a[0].localeCompare(b[0]);
  }).map(([tag, count]) => ({ tag, count }));
  return renderTemplate`${maybeRenderHead()}<div class="mb-8" id="blog-tag-filter" data-astro-cid-3ulvxnho> <div class="text-muted-foreground mb-3 text-xs font-medium uppercase tracking-wider" data-astro-cid-3ulvxnho>
Filter by tag
</div> <div class="flex flex-wrap gap-2" data-astro-cid-3ulvxnho> <button type="button"${addAttribute(badgeVariants({ variant: "muted" }), "class")} data-filter-tag="all" data-active="true" data-astro-cid-3ulvxnho> ${renderComponent($$result, "Icon", $$Icon, { "name": "lucide:layout-grid", "class": "size-3", "data-astro-cid-3ulvxnho": true })}
All
</button> ${sortedTags.map(({ tag, count }) => renderTemplate`<button type="button"${addAttribute(badgeVariants({ variant: "muted" }), "class")}${addAttribute(tag, "data-filter-tag")} data-active="false" data-astro-cid-3ulvxnho> ${renderComponent($$result, "Icon", $$Icon, { "name": "lucide:hash", "class": "size-3", "data-astro-cid-3ulvxnho": true })} ${tag} <span class="text-muted-foreground/80" data-astro-cid-3ulvxnho>(${count})</span> </button>`)} </div> </div>   ${renderScript($$result, "/home/blank_dreams/code/blog/src/components/blog/BlogTagFilter.astro?astro&type=script&index=0&lang.ts")}`;
}, "/home/blank_dreams/code/blog/src/components/blog/BlogTagFilter.astro", void 0);

const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const allPosts = await getAllPostsAndSubposts();
  const parentPosts = allPosts.filter((p) => !isSubpost(p.id));
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "class": "max-w-3xl" }, { "default": async ($$result2) => renderTemplate`  ${renderComponent($$result2, "BlogTitle", $$BlogTitle, { "title": "\u30BA\u30E9\u3058\u3083\u306A\u3044\uFF01\u6842\u3060\uFF01", "breadcrumbItems": [
    { href: "/blog", label: "Blog", icon: "lucide:library-big" },
    { label: "All", icon: "lucide:book-copy" }
  ] })} ${renderComponent($$result2, "BlogTagFilter", $$BlogTagFilter, { "posts": parentPosts })} ${renderComponent($$result2, "BlogCalendar", $$BlogCalendar, { "parentPosts": parentPosts })} ${renderComponent($$result2, "SpinCar", SpinCar, { "client:load": true, "client:component-hydration": "load", "client:component-path": "@/components/blog/SpinCar", "client:component-export": "SpinCar" })} `, "head": async ($$result2) => renderTemplate`${renderComponent($$result2, "PageHead", $$PageHead, { "slot": "head", "title": "Blog" })}` })}`;
}, "/home/blank_dreams/code/blog/src/pages/blog/index.astro", void 0);

const $$file = "/home/blank_dreams/code/blog/src/pages/blog/index.astro";
const $$url = "/blog";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
