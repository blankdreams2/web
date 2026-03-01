import { v as createVNode, F as Fragment, aH as __astro_tag_component__ } from './astro/server_v3yWdH_B.mjs';
import 'clsx';

const frontmatter = {
  "title": "OSU CTF 2025 — Writeups",
  "description": "Overview of my OSU CTF 2025 writeups and links to OSINT, Misc, and Web challenges.",
  "date": "2025-01-05T00:00:00.000Z",
  "tags": ["2025", "osu", "ctf"],
  "category": "ctf"
};
function getHeadings() {
  return [{
    "depth": 1,
    "slug": "osu-ctf-2025--overview",
    "text": "OSU CTF 2025 — Overview"
  }, {
    "depth": 2,
    "slug": "notes",
    "text": "Notes"
  }];
}
function _createMdxContent(props) {
  const _components = {
    a: "a",
    code: "code",
    h1: "h1",
    h2: "h2",
    li: "li",
    p: "p",
    ul: "ul",
    ...props.components
  };
  return createVNode(Fragment, {
    children: [createVNode(_components.h1, {
      id: "osu-ctf-2025--overview",
      children: "OSU CTF 2025 — Overview"
    }), "\n", createVNode(_components.p, {
      children: "This is the hub for all my OSU CTF 2025 writeups. Use the sidebar to navigate, or jump into a category:"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: createVNode(_components.a, {
          href: "/blog/osu/osint",
          children: "OSINT"
        })
      }), "\n", createVNode(_components.li, {
        children: createVNode(_components.a, {
          href: "/blog/osu/misc",
          children: "Misc"
        })
      }), "\n", createVNode(_components.li, {
        children: createVNode(_components.a, {
          href: "/blog/osu/web",
          children: "Web"
        })
      }), "\n"]
    }), "\n", createVNode(_components.h2, {
      id: "notes",
      children: "Notes"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: ["Subposts here are grouped under the ", createVNode(_components.code, {
          children: "osu"
        }), " parent page, so any deeper paths like ", createVNode(_components.code, {
          children: "osu/osint/..."
        }), " will show in the OSU sidebar."]
      }), "\n", createVNode(_components.li, {
        children: ["Use the ", createVNode(_components.code, {
          children: "order"
        }), " field in frontmatter if you want to control ordering for posts with the same date."]
      }), "\n"]
    })]
  });
}
function MDXContent(props = {}) {
  const {wrapper: MDXLayout} = props.components || ({});
  return MDXLayout ? createVNode(MDXLayout, {
    ...props,
    children: createVNode(_createMdxContent, {
      ...props
    })
  }) : _createMdxContent(props);
}

const url = "src/content/blog/osu/index.mdx";
const file = "/home/blank_dreams/code/blog/src/content/blog/osu/index.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/home/blank_dreams/code/blog/src/content/blog/osu/index.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, Content as default, file, frontmatter, getHeadings, url };
