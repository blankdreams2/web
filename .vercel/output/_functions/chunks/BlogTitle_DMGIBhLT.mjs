import { d as createAstro, c as createComponent, m as maybeRenderHead, r as renderComponent, a as renderTemplate } from './astro/server_v3yWdH_B.mjs';
import { b as $$Link, d as $$Icon, a as $$Breadcrumbs } from './Layout_yZGE3sl7.mjs';
import { B as Badge } from './badge_FkkX4EQ5.mjs';
import { i as isSubpost, l as getSubpostCount, d as getSubpostsForParent } from './data-utils_CmMo04gt.mjs';
import { $ as $$Image } from './_astro_assets_BFlWmnoX.mjs';

const $$Astro$1 = createAstro("https://vankythien.dev");
const $$BlogCard = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$BlogCard;
  const { entry } = Astro2.props;
  const subpostCount = !isSubpost(entry?.id) ? await getSubpostCount(entry?.id) : 0;
  const subposts = subpostCount > 0 && !isSubpost(entry?.id) ? await getSubpostsForParent(entry?.id) : [];
  return renderTemplate`${maybeRenderHead()}<div class="hover:bg-muted/50 rounded-xl border p-4 transition-colors duration-300 ease-in-out"> ${renderComponent($$result, "Link", $$Link, { "href": `/${entry.collection}/${entry.id}`, "class": "flex flex-col gap-4 sm:flex-row" }, { "default": async ($$result2) => renderTemplate`${entry.data.image && renderTemplate`<div class="w-full sm:max-w-3xs sm:shrink-0"> ${renderComponent($$result2, "Image", $$Image, { "src": entry.data.image, "alt": entry.data.title, "width": 1200, "height": 630, "class": "object-cover" })} </div>`}<div class="grow"> <h3 class="mb-1 text-lg font-medium">${entry.data.title}</h3> <p class="text-muted-foreground mb-2 text-sm">${entry.data.description}</p> ${entry.data.tags && renderTemplate`<div class="flex flex-wrap gap-2"> ${entry.data.tags.map((tag) => renderTemplate`${renderComponent($$result2, "Badge", Badge, { "variant": "muted", "className": "flex items-center gap-x-1" }, { "default": async ($$result3) => renderTemplate` ${renderComponent($$result3, "Icon", $$Icon, { "name": "lucide:hash", "class": "size-3" })} ${tag}` })}`)} </div>`} </div> ` })} ${subposts.length > 0 && renderTemplate`<div class="mt-3 border-t pt-3"> <div class="text-muted-foreground mb-2 text-xs">Subposts</div> <ul class="list-inside list-disc space-y-1 text-sm"> ${subposts.slice(0, 6).map((sp) => renderTemplate`<li> ${renderComponent($$result, "Link", $$Link, { "href": `/${sp.collection}/${sp.id}`, "class": "hover:text-foreground text-muted-foreground underline-offset-4 hover:underline" }, { "default": async ($$result2) => renderTemplate`${sp.data.title}` })} </li>`)} ${subposts.length > 6 && renderTemplate`<li> ${renderComponent($$result, "Link", $$Link, { "href": `/${entry.collection}/${entry.id}`, "class": "hover:text-foreground text-muted-foreground underline-offset-4 hover:underline" }, { "default": async ($$result2) => renderTemplate`
View all →
` })} </li>`} </ul> </div>`} </div>`;
}, "/home/blank_dreams/code/blog/src/components/blog/BlogCard.astro", void 0);

const $$Astro = createAstro("https://vankythien.dev");
const $$BlogTitle = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$BlogTitle;
  const { title, breadcrumbItems } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="mt-3 mb-6 text-center"> <h2 class="text-foreground text-xl font-bold">${title}</h2> <div class="mt-2"> ${renderComponent($$result, "Breadcrumbs", $$Breadcrumbs, { "items": breadcrumbItems })} </div> </div>`;
}, "/home/blank_dreams/code/blog/src/components/blog/BlogTitle.astro", void 0);

export { $$BlogCard as $, $$BlogTitle as a };
