import { v as createVNode, F as Fragment, aH as __astro_tag_component__ } from './astro/server_v3yWdH_B.mjs';
import 'clsx';

const frontmatter = {
  "title": "2025 Post",
  "description": "This is a dummy post written in the year 2025.",
  "date": "2025-10-29T00:00:00.000Z",
  "tags": ["v1.0.0"],
  "image": "./banner.png",
  "authors": ["dreams"],
  "draft": true
};
function getHeadings() {
  return [];
}
function _createMdxContent(props) {
  const _components = {
    p: "p",
    ...props.components
  };
  return createVNode(_components.p, {
    children: "This is a dummy post written in the year 2025."
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
const url = "src/content/blog/2025/index.mdx";
const file = "/home/blank_dreams/code/blog/src/content/blog/2025/index.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/home/blank_dreams/code/blog/src/content/blog/2025/index.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, Content as default, file, frontmatter, getHeadings, url };
