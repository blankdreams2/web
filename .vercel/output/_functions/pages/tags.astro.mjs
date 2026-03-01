import { c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_v3yWdH_B.mjs';
import { $ as $$Layout, a as $$Breadcrumbs, b as $$Link, d as $$Icon } from '../chunks/Layout_CfgLFcEj.mjs';
import { $ as $$PageHead } from '../chunks/PageHead_DQNRM4qn.mjs';
import { b as badgeVariants } from '../chunks/badge_FkkX4EQ5.mjs';
import { p as getSortedTags } from '../chunks/data-utils_B611coWT.mjs';
export { renderers } from '../renderers.mjs';

const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const sortedTags = await getSortedTags();
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "class": "max-w-3xl" }, { "default": async ($$result2) => renderTemplate`  ${maybeRenderHead()}<div class="mt-3 mb-6 text-center"> <h2 class="text-foreground text-xl font-bold">Tags</h2> <div class="mt-2"> ${renderComponent($$result2, "Breadcrumbs", $$Breadcrumbs, { "items": [{ label: "Tags", icon: "lucide:tags" }] })} </div> </div> <div class="flex flex-col gap-4"> <div class="flex flex-wrap gap-2"> ${sortedTags.map(({ tag, count }) => renderTemplate`${renderComponent($$result2, "Link", $$Link, { "href": `/tags/${tag}`, "class": badgeVariants({ variant: "muted" }) }, { "default": async ($$result3) => renderTemplate` ${renderComponent($$result3, "Icon", $$Icon, { "name": "lucide:hash", "class": "size-3" })} ${tag}<span class="text-muted-foreground ml-1.5">(${count})</span> ` })}`)} </div> </div> `, "head": async ($$result2) => renderTemplate`${renderComponent($$result2, "PageHead", $$PageHead, { "slot": "head", "title": "Tags" })}` })}`;
}, "/home/blank_dreams/code/blog/src/pages/tags/index.astro", void 0);

const $$file = "/home/blank_dreams/code/blog/src/pages/tags/index.astro";
const $$url = "/tags";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
