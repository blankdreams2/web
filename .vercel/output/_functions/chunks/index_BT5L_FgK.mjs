import { v as createVNode, F as Fragment, aH as __astro_tag_component__ } from './astro/server_v3yWdH_B.mjs';
import 'clsx';

const frontmatter = {
  "title": "OSU CTF 2025 — Misc",
  "description": "Miscellaneous challenges from OSU CTF 2025.",
  "date": "2025-01-07T00:00:00.000Z",
  "tags": ["2025", "osu", "misc", "ctf"],
  "category": "ctf"
};
function getHeadings() {
  return [{
    "depth": 1,
    "slug": "misc-challenges",
    "text": "Misc Challenges"
  }, {
    "depth": 2,
    "slug": "example-warmup",
    "text": "Example: Warmup"
  }];
}
function _createMdxContent(props) {
  const _components = {
    code: "code",
    h1: "h1",
    h2: "h2",
    p: "p",
    ...props.components
  };
  return createVNode(Fragment, {
    children: [createVNode(_components.h1, {
      id: "misc-challenges",
      children: "Misc Challenges"
    }), "\n", createVNode(_components.p, {
      children: ["This section collects miscellaneous challenges. Add more writeups by creating new ", createVNode(_components.code, {
        children: ".mdx"
      }), " files under this folder."]
    }), "\n", createVNode(_components.h2, {
      id: "example-warmup",
      children: "Example: Warmup"
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

const url = "src/content/blog/osu/misc/index.mdx";
const file = "/home/blank_dreams/code/blog/src/content/blog/osu/misc/index.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/home/blank_dreams/code/blog/src/content/blog/osu/misc/index.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, Content as default, file, frontmatter, getHeadings, url };
