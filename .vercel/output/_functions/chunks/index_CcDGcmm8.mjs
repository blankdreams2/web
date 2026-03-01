import { v as createVNode, F as Fragment, aH as __astro_tag_component__ } from './astro/server_v3yWdH_B.mjs';
import 'clsx';

const frontmatter = {
  "title": "Learning Notes Placeholder",
  "description": "Placeholder for learning notes and tutorials.",
  "date": "2025-01-02T00:00:00.000Z",
  "tags": ["education"],
  "category": "education"
};
function getHeadings() {
  return [{
    "depth": 1,
    "slug": "learning-notes",
    "text": "Learning Notes"
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
      id: "learning-notes",
      children: "Learning Notes"
    }), "\n", createVNode(_components.p, {
      children: "Placeholder content. Fill with your learning notes and tutorials later."
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

const url = "src/content/blog/education/placeholder/index.mdx";
const file = "/home/blank_dreams/code/blog/src/content/blog/education/placeholder/index.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/home/blank_dreams/code/blog/src/content/blog/education/placeholder/index.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, Content as default, file, frontmatter, getHeadings, url };
