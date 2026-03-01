import { c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_v3yWdH_B.mjs';
import { $ as $$Layout, a as $$Breadcrumbs, b as $$Link, c as buttonVariants } from '../chunks/Layout_yZGE3sl7.mjs';
import { $ as $$PageHead } from '../chunks/PageHead_DQNRM4qn.mjs';
import { c as cn } from '../chunks/consts_RqznFRTQ.mjs';
export { renderers } from '../renderers.mjs';

const $$404 = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "class": "max-w-3xl" }, { "default": ($$result2) => renderTemplate`  ${maybeRenderHead()}<div class="mt-3 mb-6 text-center"> <h2 class="text-foreground text-xl font-bold">404: Page not found</h2> <div class="mt-2"> ${renderComponent($$result2, "Breadcrumbs", $$Breadcrumbs, { "items": [{ label: "???", icon: "lucide:circle-help" }] })} </div> </div> <section class="flex flex-col items-center justify-center gap-y-4 text-center"> <div class="max-w-md"> <p class="prose mb-4">Oops! The page you're looking for doesn't exist.</p> </div> ${renderComponent($$result2, "Link", $$Link, { "href": "/", "class": cn(buttonVariants({ variant: "outline" }), "flex gap-x-1.5 group") }, { "default": ($$result3) => renderTemplate` <span class="transition-transform group-hover:-translate-x-1">&larr;</span> Go to home page
` })} </section> `, "head": ($$result2) => renderTemplate`${renderComponent($$result2, "PageHead", $$PageHead, { "slot": "head", "title": "404" })}` })}`;
}, "/home/blank_dreams/code/blog/src/pages/404.astro", void 0);

const $$file = "/home/blank_dreams/code/blog/src/pages/404.astro";
const $$url = "/404";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$404,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
