import { v as createVNode, F as Fragment, aH as __astro_tag_component__ } from './astro/server_v3yWdH_B.mjs';
import 'clsx';

const frontmatter = {
  "title": "OSU CTF 2025 — OSINT",
  "description": "OSINT challenges from OSU CTF 2025 with step-by-step reasoning.",
  "date": "2025-01-06T00:00:00.000Z",
  "tags": ["2025", "osu", "osint", "ctf"],
  "category": "ctf"
};
function getHeadings() {
  return [{
    "depth": 1,
    "slug": "osint-challenges",
    "text": "OSINT Challenges"
  }, {
    "depth": 2,
    "slug": "example-find-me-if-you-can",
    "text": "Example: Find Me If You Can"
  }];
}
function _createMdxContent(props) {
  const _components = {
    h1: "h1",
    h2: "h2",
    p: "p",
    ...props.components
  };
  return createVNode(Fragment, {
    children: [createVNode(_components.h1, {
      id: "osint-challenges",
      children: "OSINT Challenges"
    }), "\n", createVNode(_components.p, {
      children: "Welcome to the OSINT category. Below are individual challenge writeups. You can create more files in this folder (or subfolders) and they’ll appear in the OSU sidebar automatically."
    }), "\n", createVNode(_components.h2, {
      id: "example-find-me-if-you-can",
      children: "Example: Find Me If You Can"
    }), "\n", createVNode(_components.p, {
      children: "Walkthrough placeholder."
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

const url = "src/content/blog/osu/osint/index.mdx";
const file = "/home/blank_dreams/code/blog/src/content/blog/osu/osint/index.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/home/blank_dreams/code/blog/src/content/blog/osu/osint/index.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, Content as default, file, frontmatter, getHeadings, url };
