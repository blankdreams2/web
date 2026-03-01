import { d as createAstro, c as createComponent, b as addAttribute, a as renderTemplate, m as maybeRenderHead, r as renderComponent, e as renderScript, F as Fragment } from '../../chunks/astro/server_v3yWdH_B.mjs';
import { c as buttonVariants, b as $$Link, d as $$Icon, $ as $$Layout, a as $$Breadcrumbs, B as Button } from '../../chunks/Layout_yZGE3sl7.mjs';
import { S as SpinCar } from '../../chunks/SpinCar_D5iMoVvZ.mjs';
import 'clsx';
import { S as SITE, c as cn, g as getHeadingMargin, d as formatDate } from '../../chunks/consts_RqznFRTQ.mjs';
import { i as isSubpost, b as getParentId, c as getPostById, d as getSubpostsForParent, e as getParentPost, f as getPostReadingTime, h as getCombinedReadingTime, j as getAdjacentPosts, k as hasSubposts, l as getSubpostCount, m as getTOCSections, a as getAllPostsAndSubposts } from '../../chunks/data-utils_CmMo04gt.mjs';
import { jsxs, jsx } from 'react/jsx-runtime';
import 'react';
import { ScrollArea as ScrollArea$1 } from 'radix-ui';
import { b as badgeVariants } from '../../chunks/badge_FkkX4EQ5.mjs';
import { $ as $$Image } from '../../chunks/_astro_assets_BFlWmnoX.mjs';
import { r as renderEntry } from '../../chunks/_astro_content_CgJaixmG.mjs';
export { renderers } from '../../renderers.mjs';

const $$Astro$6 = createAstro("https://vankythien.dev");
const $$PostHead = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$6, $$props, $$slots);
  Astro2.self = $$PostHead;
  const { post } = Astro2.props;
  const title = post.data?.title || SITE.title;
  const description = post.data?.description || SITE.description;
  const image = new URL("/static/1200x630.png", Astro2.site);
  const author = post.data?.authors && post.data?.authors.length > 0 ? post.data.authors.join(", ") : SITE.author;
  return renderTemplate`<title>${`${title} | ${SITE.title}`}</title><meta name="title"${addAttribute(`${title} | ${SITE.title}`, "content")}><meta name="description"${addAttribute(description, "content")}><link rel="canonical"${addAttribute(SITE.href, "href")}>${isSubpost(post.id) && renderTemplate`<meta name="robots" content="noindex">`}<meta property="og:title"${addAttribute(title, "content")}><meta property="og:description"${addAttribute(description, "content")}><meta property="og:image"${addAttribute(post?.data?.image?.src ? `${SITE.href}${post.data.image.src}` : image, "content")}><meta property="og:image:alt"${addAttribute(title, "content")}><meta property="og:type" content="website"><meta property="og:locale"${addAttribute(SITE.locale, "content")}><meta property="og:site_name"${addAttribute(SITE.title, "content")}><meta property="og:url"${addAttribute(Astro2.url, "content")}><meta property="og:author"${addAttribute(author, "content")}><meta name="twitter:title"${addAttribute(title, "content")}><meta name="twitter:description"${addAttribute(description, "content")}><meta property="twitter:image"${addAttribute(post?.data?.image?.src ? `${SITE.href}${post?.data?.image?.src}` : image, "content")}><meta name="twitter:image:alt"${addAttribute(title, "content")}><meta name="twitter:card" content="summary_large_image"><meta name="twitter:creator"${addAttribute(author, "content")}>${post?.data?.tags && post?.data?.tags.map((tag) => {
    return renderTemplate`<meta property="article:tag"${addAttribute(tag, "content")}>`;
  })}`;
}, "/home/blank_dreams/code/blog/src/components/blog/PostHead.astro", void 0);

const $$Astro$5 = createAstro("https://vankythien.dev");
const $$PostNavigation = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$5, $$props, $$slots);
  Astro2.self = $$PostNavigation;
  const { newerPost, olderPost, parentPost } = Astro2.props;
  const isSubpost = !!parentPost;
  return renderTemplate`${maybeRenderHead()}<nav${addAttribute(cn(
    "col-start-2 grid grid-cols-1 gap-4",
    isSubpost ? "sm:grid-cols-3" : "sm:grid-cols-2"
  ), "class")}> ${renderComponent($$result, "Link", $$Link, { "href": olderPost ? `/blog/${olderPost.id}#post-title` : "#", "class": cn(
    buttonVariants({ variant: "outline" }),
    "rounded-lg group flex items-center justify-start size-full",
    !olderPost && "pointer-events-none opacity-50 cursor-not-allowed"
  ), "aria-disabled": !olderPost }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Icon", $$Icon, { "name": "lucide:arrow-left", "class": "mr-2 size-4 transition-transform group-hover:-translate-x-1" })} <div class="flex flex-col items-start overflow-hidden text-wrap"> <span class="text-muted-foreground text-left text-xs"> ${isSubpost ? "Previous Subpost" : "Previous Post"} </span> <span class="w-full text-left text-sm text-balance text-ellipsis"> ${olderPost?.data.title || (isSubpost ? "No older subpost" : "You're at the oldest post!")} </span> </div> ` })} ${isSubpost && renderTemplate`${renderComponent($$result, "Link", $$Link, { "href": parentPost ? `/blog/${parentPost.id}#post-title` : "#", "class": cn(
    buttonVariants({ variant: "outline" }),
    "group flex size-full items-center justify-center rounded-lg",
    !parentPost && "pointer-events-none cursor-not-allowed opacity-50"
  ) }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Icon", $$Icon, { "name": "lucide:corner-left-up", "class": "mr-2 size-4 transition-transform group-hover:-translate-y-1" })} <div class="flex flex-col items-center overflow-hidden text-wrap"> <span class="text-muted-foreground text-center text-xs">
Parent Post
</span> <span class="w-full text-center text-sm text-balance text-ellipsis"> ${parentPost?.data.title || "No parent post"} </span> </div> ` })}`} ${renderComponent($$result, "Link", $$Link, { "href": newerPost ? `/blog/${newerPost.id}#post-title` : "#", "class": cn(
    buttonVariants({ variant: "outline" }),
    "rounded-lg group flex items-center justify-end size-full",
    !newerPost && "pointer-events-none opacity-50 cursor-not-allowed"
  ), "aria-disabled": !newerPost }, { "default": ($$result2) => renderTemplate` <div class="flex flex-col items-end overflow-hidden text-wrap"> <span class="text-muted-foreground text-right text-xs"> ${isSubpost ? "Next Subpost" : "Next Post"} </span> <span class="w-full text-right text-sm text-balance text-ellipsis"> ${newerPost?.data.title || (isSubpost ? "No newer subpost" : "You're at the newest post!")} </span> </div> ${renderComponent($$result2, "Icon", $$Icon, { "name": "lucide:arrow-right", "class": "ml-2 size-4 transition-transform group-hover:translate-x-1" })} ` })} </nav>`;
}, "/home/blank_dreams/code/blog/src/components/blog/PostNavigation.astro", void 0);

function ScrollArea({
  className,
  children,
  ...props
}) {
  return /* @__PURE__ */ jsxs(
    ScrollArea$1.Root,
    {
      "data-slot": "scroll-area",
      className: cn("relative", className),
      ...props,
      children: [
        /* @__PURE__ */ jsx(
          ScrollArea$1.Viewport,
          {
            "data-slot": "scroll-area-viewport",
            className: "ring-ring/10 dark:ring-ring/20 dark:outline-ring/40 outline-ring/50 size-full rounded-[inherit] transition-[color,box-shadow] focus-visible:ring-4 focus-visible:outline-1",
            children
          }
        ),
        /* @__PURE__ */ jsx(ScrollBar, {}),
        /* @__PURE__ */ jsx(ScrollArea$1.Corner, {})
      ]
    }
  );
}
function ScrollBar({
  className,
  orientation = "vertical",
  ...props
}) {
  return /* @__PURE__ */ jsx(
    ScrollArea$1.ScrollAreaScrollbar,
    {
      "data-slot": "scroll-area-scrollbar",
      orientation,
      className: cn(
        "flex touch-none p-px transition-colors select-none",
        orientation === "vertical" && "h-full w-2.5 border-l border-l-transparent",
        orientation === "horizontal" && "h-2.5 flex-col border-t border-t-transparent",
        className
      ),
      ...props,
      children: /* @__PURE__ */ jsx(
        ScrollArea$1.ScrollAreaThumb,
        {
          "data-slot": "scroll-area-thumb",
          className: "bg-border relative flex-1 rounded-full"
        }
      )
    }
  );
}

const $$Astro$4 = createAstro("https://vankythien.dev");
const $$SubpostsHeader = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$SubpostsHeader;
  const { parentId } = Astro2.props;
  const currentPostId = Astro2.params.id;
  const isCurrentSubpost = isSubpost(currentPostId);
  const rootParentId = isCurrentSubpost ? getParentId(currentPostId) : parentId;
  const currentPost = !isCurrentSubpost ? await getPostById(currentPostId) : null;
  const subposts = await getSubpostsForParent(rootParentId);
  const parentPost = isCurrentSubpost ? await getParentPost(currentPostId) : null;
  const activePost = parentPost || currentPost;
  const isActivePost = activePost?.id === currentPostId;
  const activePostReadingTime = activePost ? await getPostReadingTime(activePost.id) : null;
  const activePostCombinedReadingTime = activePost && subposts.length > 0 ? await getCombinedReadingTime(activePost.id) : null;
  const subpostsWithReadingTime = await Promise.all(
    subposts.map(async (subpost) => ({
      ...subpost,
      readingTime: await getPostReadingTime(subpost.id)
    }))
  );
  const currentSubpostDetails = isCurrentSubpost ? subpostsWithReadingTime.find((subpost) => subpost.id === currentPostId) : null;
  return renderTemplate`${activePost && subposts.length > 0 && renderTemplate`${maybeRenderHead()}<div id="mobile-subposts-container" class="w-full xl:hidden"><details class="group"><summary class="flex w-full cursor-pointer items-center justify-between"><div class="mx-auto flex w-full max-w-3xl items-center px-4 py-3"><div class="relative mr-2 size-4">${renderComponent($$result, "Icon", $$Icon, { "name": currentSubpostDetails ? "lucide:file-text" : isActivePost ? "lucide:book-open-text" : "lucide:book-open", "class": "size-4 flex-shrink-0", "aria-hidden": "true" })}</div><div class="flex flex-grow flex-col truncate text-sm"><span class="text-muted-foreground truncate">${currentSubpostDetails ? currentSubpostDetails.data.title : activePost?.data.title}</span></div><span class="text-muted-foreground ml-2">${renderComponent($$result, "Icon", $$Icon, { "name": "lucide:chevron-down", "class": "h-4 w-4 transition-transform duration-200 group-open:rotate-180" })}</span></div></summary>${renderComponent($$result, "ScrollArea", ScrollArea, { "client:load": true, "className": "mx-auto max-w-3xl", "data-subposts-header-scroll": true, "client:component-hydration": "load", "client:component-path": "@/components/ui/scroll-area", "client:component-export": "ScrollArea" }, { "default": async ($$result2) => renderTemplate`<div class="max-h-[30vh]"><ul class="flex list-none flex-col gap-y-1 px-4 pb-4">${activePost && renderTemplate`<li>${isActivePost ? renderTemplate`<div class="text-foreground bg-muted mobile-subposts-active-item flex items-center gap-2 rounded-md px-2 py-1.5 text-sm font-medium">${renderComponent($$result2, "Icon", $$Icon, { "name": "lucide:book-open-text", "class": "size-4 flex-shrink-0", "aria-hidden": "true" })}<div class="flex flex-col"><span class="line-clamp-2">${activePost.data.title}</span>${activePostReadingTime && renderTemplate`<span class="text-muted-foreground/80 text-xs">${activePostReadingTime}${activePostCombinedReadingTime && activePostCombinedReadingTime !== activePostReadingTime && renderTemplate`<span>${" "}
(${activePostCombinedReadingTime} total)
</span>`}</span>`}</div></div>` : renderTemplate`<a${addAttribute(`/blog/${activePost.id}`, "href")} class="mobile-subposts-link hover:text-foreground text-muted-foreground hover:bg-muted/50 flex items-center gap-2 rounded-md px-2 py-1.5 text-sm transition-colors">${renderComponent($$result2, "Icon", $$Icon, { "name": "lucide:book-open", "class": "size-4 flex-shrink-0", "aria-hidden": "true" })}<div class="flex flex-col"><span class="line-clamp-2">${activePost.data.title}</span>${activePostReadingTime && renderTemplate`<span class="text-muted-foreground/80 hover:text-foreground/80 text-xs">${activePostReadingTime}${activePostCombinedReadingTime && activePostCombinedReadingTime !== activePostReadingTime && renderTemplate`<span>${" "}
(${activePostCombinedReadingTime} total)
</span>`}</span>`}</div></a>`}</li>`}${subpostsWithReadingTime.length > 0 && renderTemplate`<div class="ml-4 space-y-1">${subpostsWithReadingTime.map(
    (subpost) => currentPostId === subpost.id ? renderTemplate`<div class="text-foreground bg-muted mobile-subposts-active-item flex items-center gap-2 rounded-md px-2 py-1.5 text-sm font-medium">${renderComponent($$result2, "Icon", $$Icon, { "name": "lucide:file-text", "class": "size-4 flex-shrink-0", "aria-hidden": "true" })}<div class="flex flex-col"><span class="line-clamp-2">${subpost.data.title}</span><span class="text-muted-foreground/80 text-xs">${subpost.readingTime}</span></div></div>` : renderTemplate`<a${addAttribute(`/blog/${subpost.id}`, "href")} class="mobile-subposts-link hover:text-foreground text-muted-foreground hover:bg-muted/50 flex items-center gap-2 rounded-md px-2 py-1.5 text-sm transition-colors">${renderComponent($$result2, "Icon", $$Icon, { "name": "lucide:file", "class": "size-4 flex-shrink-0", "aria-hidden": "true" })}<div class="flex flex-col"><span class="line-clamp-2">${subpost.data.title}</span><span class="text-muted-foreground/80 hover:text-foreground/80 text-xs">${subpost.readingTime}</span></div></a>`
  )}</div>`}</ul></div>` })}</details></div>`}${renderScript($$result, "/home/blank_dreams/code/blog/src/components/blog/SubpostsHeader.astro?astro&type=script&index=0&lang.ts")}`;
}, "/home/blank_dreams/code/blog/src/components/blog/SubpostsHeader.astro", void 0);

const $$Astro$3 = createAstro("https://vankythien.dev");
const $$SubpostsSidebar = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$SubpostsSidebar;
  const { parentId } = Astro2.props;
  const currentPostId = Astro2.params.id;
  const isCurrentSubpost = isSubpost(currentPostId);
  const rootParentId = isCurrentSubpost ? getParentId(currentPostId) : parentId;
  const currentPost = !isCurrentSubpost ? await getPostById(currentPostId) : null;
  const subposts = await getSubpostsForParent(rootParentId);
  const parentPost = isCurrentSubpost ? await getParentPost(currentPostId) : null;
  const activePost = parentPost || currentPost;
  const isActivePost = activePost?.id === currentPostId;
  const activePostReadingTime = activePost ? await getPostReadingTime(activePost.id) : null;
  const activePostCombinedReadingTime = activePost && subposts.length > 0 ? await getCombinedReadingTime(activePost.id) : null;
  const subpostsWithReadingTime = await Promise.all(
    subposts.map(async (subpost) => ({
      ...subpost,
      readingTime: await getPostReadingTime(subpost.id)
    }))
  );
  return renderTemplate`${maybeRenderHead()}<div id="subposts-sidebar-container" class="hidden w-full min-w-0 xl:block"> ${renderComponent($$result, "ScrollArea", ScrollArea, { "client:load": true, "className": "flex max-h-[20rem] flex-col overflow-y-auto", "data-subposts-sidebar-scroll": true, "client:component-hydration": "load", "client:component-path": "@/components/ui/scroll-area", "client:component-export": "ScrollArea" }, { "default": async ($$result2) => renderTemplate` <div class="px-4"> <ul class="space-y-1"> ${activePost && renderTemplate`<li> ${isActivePost ? renderTemplate`<div class="text-foreground bg-muted subposts-sidebar-active-item flex min-w-0 items-center gap-2 rounded-md py-1.5 pr-3 pl-2 text-sm font-medium text-pretty"> ${renderComponent($$result2, "Icon", $$Icon, { "name": "lucide:book-open-text", "class": "size-4 shrink-0", "aria-hidden": "true" })} <div class="flex flex-col"> <span class="min-w-0 text-pretty wrap-break-word">${activePost.data.title}</span> ${activePostReadingTime && renderTemplate`<span class="text-muted-foreground/80 text-xs"> ${activePostReadingTime} ${activePostCombinedReadingTime && activePostCombinedReadingTime !== activePostReadingTime && renderTemplate`<span> (${activePostCombinedReadingTime} total)</span>`} </span>`} </div> </div>` : renderTemplate`${renderComponent($$result2, "Link", $$Link, { "href": `/blog/${activePost.id}#post-title`, "class": "hover:text-foreground text-muted-foreground hover:bg-muted/50 subposts-sidebar-link flex min-w-0 items-center gap-2 rounded-md px-2 py-1.5 text-sm text-pretty transition-colors" }, { "default": async ($$result3) => renderTemplate` ${renderComponent($$result3, "Icon", $$Icon, { "name": "lucide:book-open", "class": "size-4 shrink-0", "aria-hidden": "true" })} <div class="flex flex-col"> <span class="min-w-0 text-pretty wrap-break-word">${activePost.data.title}</span> ${activePostReadingTime && renderTemplate`<span class="text-muted-foreground/80 text-xs"> ${activePostReadingTime} ${activePostCombinedReadingTime && activePostCombinedReadingTime !== activePostReadingTime && renderTemplate`<span> (${activePostCombinedReadingTime} total)</span>`} </span>`} </div> ` })}`} </li>`} ${subpostsWithReadingTime.length > 0 && renderTemplate`<li class="ml-4 space-y-1"> ${subpostsWithReadingTime.map(
    (subpost) => currentPostId === subpost.id ? renderTemplate`<div class="text-foreground bg-muted subposts-sidebar-active-item flex min-w-0 items-center gap-2 rounded-md px-2 py-1.5 text-sm font-medium text-pretty"> ${renderComponent($$result2, "Icon", $$Icon, { "name": "lucide:file-text", "class": "size-4 shrink-0", "aria-hidden": "true" })} <div class="flex flex-col"> <span class="min-w-0 text-pretty wrap-break-word">${subpost.data.title}</span> <span class="text-muted-foreground/80 text-xs">${subpost.readingTime}</span> </div> </div>` : renderTemplate`${renderComponent($$result2, "Link", $$Link, { "href": `/blog/${subpost.id}`, "class": "hover:text-foreground text-muted-foreground hover:bg-muted/50 subposts-sidebar-link flex min-w-0 items-center gap-2 rounded-md px-2 py-1.5 text-sm text-pretty transition-colors" }, { "default": async ($$result3) => renderTemplate` ${renderComponent($$result3, "Icon", $$Icon, { "name": "lucide:file", "class": "size-4 shrink-0", "aria-hidden": "true" })} <div class="flex flex-col"> <span class="min-w-0 text-pretty wrap-break-word">${subpost.data.title}</span> <span class="text-muted-foreground/80 text-xs">${subpost.readingTime}</span> </div> ` })}`
  )} </li>`} </ul> </div> ` })} </div> ${renderScript($$result, "/home/blank_dreams/code/blog/src/components/blog/SubpostsSidebar.astro?astro&type=script&index=0&lang.ts")}`;
}, "/home/blank_dreams/code/blog/src/components/blog/SubpostsSidebar.astro", void 0);

const $$Astro$2 = createAstro("https://vankythien.dev");
const $$TOCHeader = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$TOCHeader;
  const { headings } = Astro2.props;
  return renderTemplate`${headings && headings.length > 0 && renderTemplate`${maybeRenderHead()}<div id="mobile-toc-container" class="w-full xl:hidden"><details class="group"><summary class="flex w-full cursor-pointer items-center justify-between"><div class="mx-auto flex w-full max-w-3xl items-center px-4 py-3"><div class="relative mr-2 size-4"><svg class="h-4 w-4" viewBox="0 0 24 24"><circle class="text-primary/20" cx="12" cy="12" r="10" fill="none" stroke="currentColor" stroke-width="2"></circle><circle id="mobile-toc-progress-circle" class="text-primary" cx="12" cy="12" r="10" fill="none" stroke="currentColor" stroke-width="2" stroke-dasharray="62.83" stroke-dashoffset="62.83" transform="rotate(-90 12 12)"></circle></svg></div><span id="mobile-toc-current-section" class="text-muted-foreground flex-grow truncate text-sm">
Overview
</span><span class="text-muted-foreground ml-2">${renderComponent($$result, "Icon", $$Icon, { "name": "lucide:chevron-down", "class": "h-4 w-4 transition-transform duration-200 group-open:rotate-180" })}</span></div></summary>${renderComponent($$result, "ScrollArea", ScrollArea, { "client:load": true, "className": "mx-auto max-w-3xl", "data-toc-header-scroll": true, "client:component-hydration": "load", "client:component-path": "@/components/ui/scroll-area", "client:component-export": "ScrollArea" }, { "default": ($$result2) => renderTemplate`<div class="max-h-[30vh]"><ul class="flex list-none flex-col gap-y-2 px-4 pb-4" id="mobile-table-of-contents">${headings.map((heading) => renderTemplate`<li${addAttribute(cn("px-4 text-sm", getHeadingMargin(heading.depth), "text-foreground/60"), "class")}><a${addAttribute(`#${heading.slug}`, "href")} class="mobile-toc-item underline decoration-transparent underline-offset-[3px] transition-colors duration-200 hover:decoration-inherit"${addAttribute(heading.slug, "data-heading-id")}>${heading.text}</a></li>`)}</ul></div>` })}</details></div>`}${renderScript($$result, "/home/blank_dreams/code/blog/src/components/blog/TOCHeader.astro?astro&type=script&index=0&lang.ts")}`;
}, "/home/blank_dreams/code/blog/src/components/blog/TOCHeader.astro", void 0);

const $$Astro$1 = createAstro("https://vankythien.dev");
const $$TOCSidebar = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$TOCSidebar;
  const { sections, currentPostId } = Astro2.props;
  const isCurrentSubpost = isSubpost(currentPostId);
  const parentId = isCurrentSubpost ? getParentId(currentPostId) : currentPostId;
  return renderTemplate`${sections.length > 0 && renderTemplate`${maybeRenderHead()}<div id="toc-sidebar-container" class="sticky top-20 col-start-1 row-span-1 mr-8 ml-auto hidden h-[calc(100vh-5rem)] max-w-md xl:block">${renderComponent($$result, "ScrollArea", ScrollArea, { "client:load": true, "className": "flex max-h-[calc(100vh-8rem)] flex-col overflow-y-auto", "type": "hover", "data-toc-scroll-area": true, "client:component-hydration": "load", "client:component-path": "@/components/ui/scroll-area", "client:component-export": "ScrollArea" }, { "default": ($$result2) => renderTemplate`<div class="flex flex-col gap-2 px-4"><span class="text-lg font-medium">Table of Contents</span>${sections.map((section, index) => {
    const isFirstSubpost = section.type === "subpost" && (index === 0 || sections[index - 1].type === "parent");
    return renderTemplate`${renderComponent($$result2, "Fragment", Fragment, {}, { "default": ($$result3) => renderTemplate`${isFirstSubpost && renderTemplate`<div class="mt-2 flex items-center gap-2"><div class="bg-border h-px flex-1"></div><span class="text-muted-foreground text-xs font-medium">Subposts</span><div class="bg-border h-px flex-1"></div></div>`}${section.type === "parent" ? renderTemplate`<ul class="flex list-none flex-col gap-y-2">${section.headings.map((heading) => renderTemplate`<li${addAttribute(cn(
      "text-sm",
      getHeadingMargin(heading.depth),
      isCurrentSubpost ? "text-foreground/40" : "text-foreground/60"
    ), "class")}><a${addAttribute(
      isCurrentSubpost ? `/blog/${parentId}#${heading.slug}` : `#${heading.slug}`,
      "href"
    )} class="marker:text-foreground/30 list-none underline decoration-transparent underline-offset-[3px] transition-colors duration-200 hover:decoration-inherit"${addAttribute(heading.slug, "data-heading-link")}>${heading.text}</a></li>`)}</ul>` : renderTemplate`<div${addAttribute(cn(
      "rounded-md border p-2",
      section.subpostId === currentPostId ? "bg-muted/50" : ""
    ), "class")}><ul class="flex list-none flex-col gap-y-2"><li${addAttribute(cn(
      "text-xs font-medium",
      section.subpostId === currentPostId ? "text-foreground" : "text-foreground/60"
    ), "class")}><a${addAttribute(
      section.subpostId === currentPostId ? "#" : `/blog/${section.subpostId}`,
      "href"
    )} class="marker:text-foreground/30 list-none underline decoration-transparent underline-offset-[3px] transition-colors duration-200 hover:decoration-inherit"${addAttribute(
      section.subpostId === currentPostId ? "top" : `${section.subpostId}-top`,
      "data-heading-link"
    )}>${section.title}</a></li>${section.headings.map((heading) => renderTemplate`<li${addAttribute(cn(
      "text-xs",
      getHeadingMargin(heading.depth),
      section.subpostId === currentPostId ? "text-foreground/60" : "text-foreground/30"
    ), "class")}><a${addAttribute(
      section.subpostId === currentPostId ? `#${heading.slug}` : `/blog/${section.subpostId}#${heading.slug}`,
      "href"
    )} class="marker:text-foreground/30 hover:text-foreground/60 list-none underline decoration-transparent underline-offset-[3px] transition-colors duration-200 hover:decoration-inherit"${addAttribute(
      section.subpostId === currentPostId ? heading.slug : `${section.subpostId}-${heading.slug}`,
      "data-heading-link"
    )}>${heading.text}</a></li>`)}</ul></div>`}` })}`;
  })}</div>` })}</div>`}${renderScript($$result, "/home/blank_dreams/code/blog/src/components/blog/TOCSidebar.astro?astro&type=script&index=0&lang.ts")}`;
}, "/home/blank_dreams/code/blog/src/components/blog/TOCSidebar.astro", void 0);

const $$Astro = createAstro("https://vankythien.dev");
async function getStaticPaths() {
  const posts = await getAllPostsAndSubposts();
  return posts?.map((post) => ({
    params: { id: post.id },
    props: post
  }));
}
const $$ = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$;
  const post = Astro2.props;
  const currentPostId = Astro2.params.id;
  const { Content, headings } = await renderEntry(post);
  const isCurrentSubpost = isSubpost(currentPostId);
  const navigation = await getAdjacentPosts(currentPostId);
  const parentPost = isCurrentSubpost ? await getParentPost(currentPostId) : null;
  const hasChildPosts = await hasSubposts(currentPostId);
  const subpostCount = !isCurrentSubpost ? await getSubpostCount(currentPostId) : 0;
  const postReadingTime = await getPostReadingTime(currentPostId);
  const combinedReadingTime = hasChildPosts && !isCurrentSubpost ? await getCombinedReadingTime(currentPostId) : null;
  const tocSections = await getTOCSections(currentPostId);
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, {}, { "default": async ($$result2) => renderTemplate`  ${maybeRenderHead()}<section class="grid grid-cols-[minmax(0px,1fr)_min(calc(var(--breakpoint-md)-2rem),100%)_minmax(0px,1fr)] gap-y-6"> <!-- jp title --> <!-- breadcrumbs --> <div class="col-start-2"> <div class="mt-3 mb-6 text-center"> <h2 class="text-foreground text-xl font-bold">${"\u30AD\u30E3\u30D7\u30C1\u30E3\u30FB\u30B6\u30FB\u30D5\u30E9\u30C3\u30B0"}</h2> <div class="mt-2"> ${renderComponent($$result2, "Breadcrumbs", $$Breadcrumbs, { "items": [
    { href: "/blog", label: "Blog", icon: "lucide:library-big" },
    ...isCurrentSubpost && parentPost ? [
      {
        href: `/blog/${parentPost.id}`,
        label: parentPost?.data?.title ?? "Post",
        icon: "lucide:book-open"
      },
      {
        href: `/blog/${currentPostId}`,
        label: post?.data?.title ?? "Post",
        icon: "lucide:file-text"
      }
    ] : [
      {
        href: `/blog/${currentPostId}`,
        label: post?.data?.title ?? "Post",
        icon: "lucide:book-open-text"
      }
    ]
  ] })} </div> </div> </div> <!-- the damn image --> ${post.data?.image && renderTemplate`${renderComponent($$result2, "Image", $$Image, { "src": post.data?.image, "alt": post.data?.title, "width": 1200, "height": 630, "class": "col-span-full mx-auto w-full max-w-5xl object-cover" })}`} <!-- post title and metadata --> <section class="col-start-2 flex flex-col gap-y-6 text-center"> <div class="flex flex-col"> <h1 class="mb-2 scroll-mt-31 text-3xl leading-tight font-medium sm:text-4xl" id="post-title"> ${post.data?.title} </h1> <div class="text-muted-foreground divide-border mb-4 flex flex-col items-center justify-center divide-y text-xs sm:flex-row sm:flex-wrap sm:divide-x sm:divide-y-0 sm:text-sm"> <!-- date --> <div class="flex w-full items-center justify-center gap-2 py-2 sm:w-fit sm:px-2 sm:py-0 first:sm:pl-0 last:sm:pr-0"> <span>${formatDate(post.data?.date)}</span> </div> <!-- reading time --> <div class="flex w-full items-center justify-center gap-2 py-2 sm:w-fit sm:px-2 sm:py-0 first:sm:pl-0 last:sm:pr-0"> <span> ${postReadingTime} ${combinedReadingTime && combinedReadingTime !== postReadingTime && renderTemplate`<span class="text-muted-foreground"> (${combinedReadingTime} total)</span>`} </span> </div> <!-- subposts count --> ${subpostCount > 0 && renderTemplate`<div class="flex w-full items-center justify-center gap-1 py-2 sm:w-fit sm:px-2 sm:py-0 first:sm:pl-0 last:sm:pr-0"> ${renderComponent($$result2, "Icon", $$Icon, { "name": "lucide:file-text", "class": "size-3" })} ${subpostCount} subpost${subpostCount === 1 ? "" : "s"} </div>`} </div> <!-- tags --> <div class="flex flex-wrap justify-center gap-2"> ${post.data?.tags && post.data?.tags.length > 0 && post.data?.tags.map((tag) => renderTemplate`<a${addAttribute(`/tags/${tag}`, "href")}${addAttribute(badgeVariants({ variant: "muted" }), "class")}> ${renderComponent($$result2, "Icon", $$Icon, { "name": "lucide:hash", "class": "size-3" })} ${tag} </a>`)} </div> </div> ${renderComponent($$result2, "PostNavigation", $$PostNavigation, { "newerPost": navigation.newer, "olderPost": navigation.older, "parentPost": isCurrentSubpost ? navigation.parent : void 0 })} </section> <!-- left toc --> ${tocSections.length > 0 && renderTemplate`${renderComponent($$result2, "TOCSidebar", $$TOCSidebar, { "sections": tocSections, "currentPostId": currentPostId })}`} <article class="prose col-start-2 max-w-none"> ${renderComponent($$result2, "Content", Content, {})} </article> ${(hasChildPosts || isCurrentSubpost) && renderTemplate`${renderComponent($$result2, "SubpostsSidebar", $$SubpostsSidebar, { "parentId": isCurrentSubpost ? getParentId(currentPostId) : currentPostId, "className": "w-64" })}`} ${renderComponent($$result2, "PostNavigation", $$PostNavigation, { "newerPost": navigation.newer, "olderPost": navigation.older, "parentPost": isCurrentSubpost ? navigation.parent : void 0 })} </section> ${renderComponent($$result2, "SpinCar", SpinCar, { "client:load": true, "client:component-hydration": "load", "client:component-path": "@/components/blog/SpinCar", "client:component-export": "SpinCar" })} ${renderComponent($$result2, "Button", Button, { "variant": "outline", "size": "icon", "className": "group fixed right-8 bottom-8 z-50 hidden", "id": "scroll-to-top", "title": "Scroll to top", "aria-label": "Scroll to top" }, { "default": async ($$result3) => renderTemplate` ${renderComponent($$result3, "Icon", $$Icon, { "name": "lucide:arrow-up", "class": "mx-auto size-4 transition-all group-hover:-translate-y-0.5" })} ` })} ${renderScript($$result2, "/home/blank_dreams/code/blog/src/pages/blog/[...id].astro?astro&type=script&index=0&lang.ts")} `, "head": async ($$result2) => renderTemplate`${renderComponent($$result2, "PostHead", $$PostHead, { "slot": "head", "post": post })}`, "subposts-navigation": async ($$result2) => renderTemplate`${(hasChildPosts || isCurrentSubpost) && renderTemplate`${renderComponent($$result2, "SubpostsHeader", $$SubpostsHeader, { "slot": "subposts-navigation", "parentId": isCurrentSubpost ? getParentId(currentPostId) : currentPostId })}`}`, "table-of-contents": async ($$result2) => renderTemplate`${headings?.length > 0 && !(isCurrentSubpost && headings.length === 1 && headings[0].text === post.data.title) && renderTemplate`${renderComponent($$result2, "TOCHeader", $$TOCHeader, { "slot": "table-of-contents", "headings": headings })}`}` })} ${renderScript($$result, "/home/blank_dreams/code/blog/src/pages/blog/[...id].astro?astro&type=script&index=1&lang.ts")}`;
}, "/home/blank_dreams/code/blog/src/pages/blog/[...id].astro", void 0);

const $$file = "/home/blank_dreams/code/blog/src/pages/blog/[...id].astro";
const $$url = "/blog/[...id]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$,
  file: $$file,
  getStaticPaths,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
