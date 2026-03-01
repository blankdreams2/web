import { S as SITE } from '../chunks/consts_RqznFRTQ.mjs';
import rss from '@astrojs/rss';
import { o as getAllPosts } from '../chunks/data-utils_CmMo04gt.mjs';
export { renderers } from '../renderers.mjs';

async function GET(context) {
  try {
    const posts = await getAllPosts();
    return rss({
      title: SITE.title,
      description: SITE.description,
      site: context.site ?? SITE.href,
      items: posts.map((post) => ({
        title: post.data.title,
        description: post.data.description,
        pubDate: post.data.date,
        link: `/blog/${post.id}/`
      }))
    });
  } catch (error) {
    console.error("Error generating RSS feed:", error);
    return new Response("Error generating RSS feed", { status: 500 });
  }
}

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  GET
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
