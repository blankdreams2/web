import { r as readingTime, i as calculateWordCountFromHtml } from './consts_RqznFRTQ.mjs';
import { g as getCollection, r as renderEntry } from './_astro_content_CgJaixmG.mjs';

async function getAllPosts() {
  const posts = await getCollection("blog");
  return posts.filter((post) => !post.data.draft && !isSubpost(post.id)).sort((a, b) => b.data.date.valueOf() - a.data.date.valueOf());
}
async function getAllPostsAndSubposts() {
  const posts = await getCollection("blog");
  return posts.filter((post) => !post.data.draft).sort((a, b) => b.data.date.valueOf() - a.data.date.valueOf());
}
async function getAllProjects() {
  const projects = await getCollection("projects");
  return projects.sort((a, b) => {
    const startA = a.data.startDate?.getTime() ?? 0;
    const startB = b.data.startDate?.getTime() ?? 0;
    if (startB !== startA) return startB - startA;
    const endA = a.data.endDate?.getTime() ?? 0;
    const endB = b.data.endDate?.getTime() ?? 0;
    return endB - endA;
  });
}
async function getFeaturedProjects() {
  const { FEATURED_PROJECT_NAMES } = await import('./consts_RqznFRTQ.mjs').then(n => n.j);
  const all = await getAllProjects();
  return all.filter((p) => FEATURED_PROJECT_NAMES.includes(p.data.name));
}
async function getAllTags() {
  const posts = await getAllPosts();
  return posts.reduce((acc, post) => {
    post.data.tags?.forEach((tag) => {
      acc.set(tag, (acc.get(tag) || 0) + 1);
    });
    return acc;
  }, /* @__PURE__ */ new Map());
}
async function getAdjacentPosts(currentId) {
  const allPosts = await getAllPosts();
  if (isSubpost(currentId)) {
    const parentId = getParentId(currentId);
    const allPosts2 = await getAllPosts();
    const parent = allPosts2.find((post) => post.id === parentId) || null;
    const posts = await getCollection("blog");
    const subposts = posts.filter(
      (post) => isSubpost(post.id) && getParentId(post.id) === parentId && !post.data.draft
    ).sort((a, b) => {
      const dateDiff = a.data.date.valueOf() - b.data.date.valueOf();
      if (dateDiff !== 0) return dateDiff;
      const orderA = a.data.order ?? 0;
      const orderB = b.data.order ?? 0;
      return orderA - orderB;
    });
    const currentIndex2 = subposts.findIndex((post) => post.id === currentId);
    if (currentIndex2 === -1) {
      return { newer: null, older: null, parent };
    }
    return {
      newer: currentIndex2 < subposts.length - 1 ? subposts[currentIndex2 + 1] : null,
      older: currentIndex2 > 0 ? subposts[currentIndex2 - 1] : null,
      parent
    };
  }
  const parentPosts = allPosts.filter((post) => !isSubpost(post.id));
  const currentIndex = parentPosts.findIndex((post) => post.id === currentId);
  if (currentIndex === -1) {
    return { newer: null, older: null, parent: null };
  }
  return {
    newer: currentIndex > 0 ? parentPosts[currentIndex - 1] : null,
    older: currentIndex < parentPosts.length - 1 ? parentPosts[currentIndex + 1] : null,
    parent: null
  };
}
async function getPostsByTag(tag) {
  const posts = await getAllPosts();
  return posts.filter((post) => post.data.tags?.includes(tag));
}
async function getSortedTags() {
  const tagCounts = await getAllTags();
  return [...tagCounts.entries()].map(([tag, count]) => ({ tag, count })).sort((a, b) => {
    const countDiff = b.count - a.count;
    return countDiff !== 0 ? countDiff : a.tag.localeCompare(b.tag);
  });
}
function getParentId(subpostId) {
  return subpostId.split("/")[0];
}
async function getSubpostsForParent(parentId) {
  const posts = await getCollection("blog");
  return posts.filter(
    (post) => !post.data.draft && isSubpost(post.id) && getParentId(post.id) === parentId
  ).sort((a, b) => {
    const dateDiff = a.data.date.valueOf() - b.data.date.valueOf();
    if (dateDiff !== 0) return dateDiff;
    const orderA = a.data.order ?? 0;
    const orderB = b.data.order ?? 0;
    return orderA - orderB;
  });
}
function groupPostsByYear(posts) {
  return posts.reduce(
    (acc, post) => {
      const year = post.data.date.getFullYear().toString();
      (acc[year] ??= []).push(post);
      return acc;
    },
    {}
  );
}
async function hasSubposts(postId) {
  const subposts = await getSubpostsForParent(postId);
  return subposts.length > 0;
}
function isSubpost(postId) {
  return typeof postId === "string" && postId.includes("/");
}
async function getParentPost(subpostId) {
  if (!isSubpost(subpostId)) {
    return null;
  }
  const parentId = getParentId(subpostId);
  const allPosts = await getAllPosts();
  return allPosts.find((post) => post.id === parentId) || null;
}
async function getPostById(postId) {
  const allPosts = await getAllPostsAndSubposts();
  return allPosts.find((post) => post.id === postId) || null;
}
async function getSubpostCount(parentId) {
  const subposts = await getSubpostsForParent(parentId);
  return subposts.length;
}
async function getCombinedReadingTime(postId) {
  const post = await getPostById(postId);
  if (!post) return readingTime(0);
  let totalWords = calculateWordCountFromHtml(post.body);
  if (!isSubpost(postId)) {
    const subposts = await getSubpostsForParent(postId);
    for (const subpost of subposts) {
      totalWords += calculateWordCountFromHtml(subpost.body);
    }
  }
  return readingTime(totalWords);
}
async function getPostReadingTime(postId) {
  const post = await getPostById(postId);
  if (!post) return readingTime(0);
  const wordCount = calculateWordCountFromHtml(post.body);
  return readingTime(wordCount);
}
async function getTOCSections(postId) {
  const post = await getPostById(postId);
  if (!post) return [];
  const parentId = isSubpost(postId) ? getParentId(postId) : postId;
  const parentPost = isSubpost(postId) ? await getPostById(parentId) : post;
  if (!parentPost) return [];
  const sections = [];
  const { headings: parentHeadings } = await renderEntry(parentPost);
  if (parentHeadings.length > 0) {
    sections.push({
      type: "parent",
      title: "Overview",
      headings: parentHeadings.map((heading) => ({
        slug: heading.slug,
        text: heading.text,
        depth: heading.depth
      }))
    });
  }
  const subposts = await getSubpostsForParent(parentId);
  for (const subpost of subposts) {
    const { headings: subpostHeadings } = await renderEntry(subpost);
    if (subpostHeadings.length > 0) {
      sections.push({
        type: "subpost",
        title: subpost.data.title,
        headings: subpostHeadings.map((heading, index) => ({
          slug: heading.slug,
          text: heading.text,
          depth: heading.depth,
          isSubpostTitle: index === 0
        })),
        subpostId: subpost.id
      });
    }
  }
  return sections;
}

export { getAllPostsAndSubposts as a, getParentId as b, getPostById as c, getSubpostsForParent as d, getParentPost as e, getPostReadingTime as f, groupPostsByYear as g, getCombinedReadingTime as h, isSubpost as i, getAdjacentPosts as j, hasSubposts as k, getSubpostCount as l, getTOCSections as m, getAllProjects as n, getAllPosts as o, getSortedTags as p, getAllTags as q, getPostsByTag as r, getFeaturedProjects as s };
