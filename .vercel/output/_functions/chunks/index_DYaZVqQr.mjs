import { v as createVNode, F as Fragment, aH as __astro_tag_component__ } from './astro/server_v3yWdH_B.mjs';
import 'clsx';

const frontmatter = {
  "title": "OSU CTF 2025 — Web",
  "description": "Web security challenges from OSU CTF 2025 with notes and exploits.",
  "date": "2025-01-08T00:00:00.000Z",
  "tags": ["2025", "osu", "web", "ctf"],
  "category": "ctf"
};
function getHeadings() {
  return [{
    "depth": 1,
    "slug": "web-challenges",
    "text": "Web Challenges"
  }, {
    "depth": 2,
    "slug": "example-simple-login",
    "text": "Example: Simple Login"
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
      id: "web-challenges",
      children: "Web Challenges"
    }), "\n", createVNode(_components.p, {
      children: "Web challenge writeups live here. Create one file per challenge, or keep a single page with multiple sections—both work."
    }), "\n", createVNode(_components.h2, {
      id: "example-simple-login",
      children: "Example: Simple Login"
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

const url = "src/content/blog/osu/web/index.mdx";
const file = "/home/blank_dreams/code/blog/src/content/blog/osu/web/index.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/home/blank_dreams/code/blog/src/content/blog/osu/web/index.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, Content as default, file, frontmatter, getHeadings, url };
