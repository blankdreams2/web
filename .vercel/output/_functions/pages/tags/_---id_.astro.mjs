import { d as createAstro, c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead } from '../../chunks/astro/server_v3yWdH_B.mjs';
import { a as $$BlogTitle, $ as $$BlogCard } from '../../chunks/BlogTitle_DMGIBhLT.mjs';
import { $ as $$PageHead } from '../../chunks/PageHead_DQNRM4qn.mjs';
import { $ as $$Layout } from '../../chunks/Layout_yZGE3sl7.mjs';
import { q as getAllTags, r as getPostsByTag } from '../../chunks/data-utils_CmMo04gt.mjs';
export { renderers } from '../../renderers.mjs';

const $$Astro = createAstro("https://vankythien.dev");
async function getStaticPaths() {
  const tagMap = await getAllTags();
  const uniqueTags = Array.from(tagMap.keys());
  return Promise.all(
    uniqueTags.map(async (tag) => {
      const posts = await getPostsByTag(tag);
      return {
        params: { id: tag },
        props: {
          tag,
          posts
        }
      };
    })
  );
}
const $$ = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$;
  const { tag, posts } = Astro2.props;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "class": "max-w-3xl" }, { "default": async ($$result2) => renderTemplate`  ${renderComponent($$result2, "BlogTitle", $$BlogTitle, { "title": `#${tag}`, "breadcrumbItems": [
    { href: "/tags", label: "Tags", icon: "lucide:tags" },
    { label: tag, icon: "lucide:tag" }
  ] })}  ${maybeRenderHead()}<ul class="flex flex-col gap-y-4"> ${posts?.map((post) => renderTemplate`<li> ${renderComponent($$result2, "BlogCard", $$BlogCard, { "entry": post })} </li>`)} </ul> `, "head": async ($$result2) => renderTemplate`${renderComponent($$result2, "PageHead", $$PageHead, { "slot": "head", "title": `Posts tagged with "${tag}"`, "description": `A collection of posts tagged with ${tag}.`, "noindex": true })}` })}`;
}, "/home/blank_dreams/code/blog/src/pages/tags/[...id].astro", void 0);

const $$file = "/home/blank_dreams/code/blog/src/pages/tags/[...id].astro";
const $$url = "/tags/[...id]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$,
  file: $$file,
  getStaticPaths,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
