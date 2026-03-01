import { v as createVNode, F as Fragment, aH as __astro_tag_component__ } from './astro/server_v3yWdH_B.mjs';
import 'clsx';

const frontmatter = {
  "title": "corCTF",
  "description": "Placeholder for corCTF writeups.",
  "date": "2025-07-22T00:00:00.000Z",
  "tags": ["2025", "ctf"],
  "category": "ctf"
};
function getHeadings() {
  return [{
    "depth": 1,
    "slug": "corctf",
    "text": "corCTF"
  }];
}
function _createMdxContent(props) {
  const _components = {
    h1: "h1",
    p: "p",
    ...props.components
  };
  return createVNode(Fragment, {
    children: [createVNode(_components.h1, {
      id: "corctf",
      children: "corCTF"
    }), "\n", createVNode(_components.p, {
      children: "Placeholder content. Fill with your writeups later."
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

const url = "src/content/blog/corctf/index.mdx";
const file = "/home/blank_dreams/code/blog/src/content/blog/corctf/index.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/home/blank_dreams/code/blog/src/content/blog/corctf/index.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, Content as default, file, frontmatter, getHeadings, url };
