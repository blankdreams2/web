import { c as createComponent, m as maybeRenderHead, r as renderComponent, a as renderTemplate, d as createAstro, b as addAttribute } from '../chunks/astro/server_v3yWdH_B.mjs';
import { b as $$Link, d as $$Icon, $ as $$Layout, a as $$Breadcrumbs } from '../chunks/Layout_yZGE3sl7.mjs';
import { $ as $$Image } from '../chunks/_astro_assets_BFlWmnoX.mjs';
import { jsx, jsxs } from 'react/jsx-runtime';
import { useGLTF, OrbitControls, Center } from '@react-three/drei';
import { Canvas, useFrame } from '@react-three/fiber';
import { useRef, Suspense } from 'react';
import { $ as $$PageTitle } from '../chunks/PageTitle_CfOsVEq7.mjs';
import { B as Badge } from '../chunks/badge_FkkX4EQ5.mjs';
import { c as cn, d as formatDate } from '../chunks/consts_RqznFRTQ.mjs';
import { s as getFeaturedProjects } from '../chunks/data-utils_CmMo04gt.mjs';
import { $ as $$PageHead } from '../chunks/PageHead_DQNRM4qn.mjs';
export { renderers } from '../renderers.mjs';

function CupCoffee() {
  const groupRef = useRef(null);
  const { scene } = useGLTF("/3d/cupcoffee.glb");
  useFrame((state) => {
    if (!groupRef.current) return;
    const t = state.clock.elapsedTime;
    groupRef.current.position.y = -0.6 + Math.sin(t * 0.6) * 0.04;
    groupRef.current.rotation.z = Math.sin(t * 0.4) * 0.015;
  });
  return /* @__PURE__ */ jsx("group", { ref: groupRef, position: [0.3, 0, 1.8], children: /* @__PURE__ */ jsx("primitive", { object: scene, scale: 1.3 }) });
}
function CoffeeMachine() {
  const groupRef = useRef(null);
  const { scene } = useGLTF("/3d/coffeemachine.glb");
  useFrame((state) => {
    if (!groupRef.current) return;
    const t = state.clock.elapsedTime;
    groupRef.current.position.y = -0.5 + Math.sin(t * 0.8) * 0.06;
    groupRef.current.rotation.z = -0.08 + Math.sin(t * 0.5) * 0.02;
  });
  return /* @__PURE__ */ jsx("group", { ref: groupRef, position: [1, -1, 0.55], children: /* @__PURE__ */ jsx("primitive", { object: scene, scale: 0.5 }) });
}
function Burger() {
  const groupRef = useRef(null);
  const { scene } = useGLTF("/3d/burger.glb");
  useFrame((state) => {
    if (!groupRef.current) return;
    const t = state.clock.elapsedTime;
    groupRef.current.position.y = -0.9 + Math.sin(t * 0.55) * 0.05;
    groupRef.current.rotation.z = Math.sin(t * 0.45) * 0.03;
  });
  return /* @__PURE__ */ jsx("group", { ref: groupRef, position: [-0.9, 0, 1], children: /* @__PURE__ */ jsx("primitive", { object: scene, scale: 0.04 }) });
}
function CoffeeScene() {
  return /* @__PURE__ */ jsx("div", { className: "absolute -right-20 -bottom-6 z-10 size-96 overflow-visible", children: /* @__PURE__ */ jsx("div", { className: "size-full min-h-[192px] min-w-[192px] sm:min-h-[300px] sm:min-w-[300px]", children: /* @__PURE__ */ jsxs(
    Canvas,
    {
      camera: { position: [-0.2, 0.6, 3.5], fov: 60 },
      gl: { antialias: true, alpha: true },
      children: [
        /* @__PURE__ */ jsx("ambientLight", { intensity: 1 }),
        /* @__PURE__ */ jsx("directionalLight", { position: [5, 5, 5], intensity: 1.5 }),
        /* @__PURE__ */ jsx(CupCoffee, {}),
        /* @__PURE__ */ jsx(CoffeeMachine, {}),
        /* @__PURE__ */ jsx(Burger, {})
      ]
    }
  ) }) });
}

const $$Hero = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<section class="bg-grid-pattern relative flex min-h-[70vh] flex-col items-center justify-center gap-y-6 overflow-visible"> <!-- polaroid centered, cup overlaps bottom-right, machine floats outside --> <div class="relative z-10"> <div id="profile-image-container" class="group relative rotate-2 bg-white p-3 pb-12 shadow-lg transition-transform duration-300 hover:scale-105 hover:rotate-3"> ${renderComponent($$result, "Image", $$Image, { "src": "/static/coffee.png", "alt": "blank_dreams", "class": "relative block h-auto w-44 sm:w-52", "width": 200, "height": 200 })} <p class="font-caveat absolute bottom-3 left-1/2 -translate-x-1/2 text-sm whitespace-nowrap text-neutral-800">
nope, thats not me 🐧
</p> <!-- cup overlaps polaroid, machine floats right outside --> ${renderComponent($$result, "CoffeeScene", CoffeeScene, { "client:load": true, "client:component-hydration": "load", "client:component-path": "/home/blank_dreams/code/blog/src/components/home/CoffeeScene", "client:component-export": "CoffeeScene" })} </div> </div> <!-- chào intro --> <div class="flex flex-col items-center text-center"> <p class="font-editorial text-muted-foreground text-xl italic sm:text-2xl">Chào, I'm</p> <h1 class="-mt-1 mb-3 text-accent font-display text-5xl  font-bold tracking-tight sm:text-7xl">
blank_dreams.
</h1> <!-- after chao, put the Developer ✦ Engineer --> <div class="flex flex-col items-center text-center"> <p class="font-editorial text-muted-foreground text-xl italic sm:text-2xl">
Developer ✦ Designer
</p> </div> </div> <!-- TODO: command + k --> <p class="text-muted-foreground flex items-center gap-2 text-sm">
Press
<kbd class="rounded border border-white/20 bg-white/10 px-2 py-0.5 font-mono text-xs">Ctrl</kbd>
+ K to start
</p> <!-- equalizer --> <div class="equalizer"> <span class="left"></span> <span class="middle"></span> <span class="right"></span> </div> </section>`;
}, "/home/blank_dreams/code/blog/src/components/home/Hero.astro", void 0);

const $$Astro = createAstro("https://vankythien.dev");
const $$ProjectCard = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$ProjectCard;
  const { project, featured = false } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div${addAttribute(cn(
    "hover:bg-muted/50 rounded-xl border transition-colors duration-300 ease-in-out",
    featured ? "p-6" : "p-4"
  ), "class")}> ${renderComponent($$result, "Link", $$Link, { "href": project.data.caseStudy ? `/project/${project.id}` : project.data.link, "class": cn("group flex gap-4", featured ? "flex-col" : "flex-col sm:flex-row"), "external": !project.data.caseStudy }, { "default": ($$result2) => renderTemplate` <div${addAttribute(cn(
    "bg-muted flex shrink-0 items-center justify-center overflow-hidden rounded-lg",
    featured ? "aspect-video w-full" : "aspect-video w-full sm:w-48 sm:h-36"
  ), "class")}> ${project.data.image ? renderTemplate`${renderComponent($$result2, "Image", $$Image, { "src": project.data.image, "alt": project.data.name, "width": featured ? 600 : 300, "height": featured ? 340 : 108, "class": "size-full object-cover" })}` : renderTemplate`<span class="text-muted-foreground text-4xl">📦</span>`} </div> <div class="min-w-0 grow"> <h3${addAttribute(cn("font-medium", featured ? "mb-2 text-xl" : "mb-1 text-lg"), "class")}> ${project.data.name} </h3> <p${addAttribute(cn(
    "text-muted-foreground leading-relaxed",
    featured ? "mb-3 text-base line-clamp-3" : "mb-2 text-sm"
  ), "class")}> ${project.data.description} </p> ${project.data.startDate && renderTemplate`<p class="text-muted-foreground/70 mb-2 flex items-center gap-x-1.5 text-xs"> <span class="flex items-center gap-x-1.5"> ${renderComponent($$result2, "Icon", $$Icon, { "name": "lucide:calendar", "class": "size-3" })} <span> ${formatDate(project.data.startDate)} ${project.data.endDate ? ` \u2192 ${formatDate(project.data.endDate)}` : " \u2192 Present"} </span> </span> </p>`} ${project.data.tags && renderTemplate`<div class="flex flex-wrap gap-2"> ${project.data.tags.map((tag) => renderTemplate`${renderComponent($$result2, "Badge", Badge, { "variant": "muted" }, { "default": ($$result3) => renderTemplate`${tag}` })}`)} </div>`} <div class="mt-2 flex items-center gap-2 text-sm"> <span class="text-muted-foreground group-hover:text-accent transition-colors"> ${project.data.caseStudy ? "Read case study" : "Visit"} </span> ${renderComponent($$result2, "Icon", $$Icon, { "name": project.data.caseStudy ? "lucide:chevron-right" : "lucide:arrow-up-right", "class": "text-muted-foreground group-hover:text-accent size-3.5 transition-colors" })} </div> </div> ` })} </div>`;
}, "/home/blank_dreams/code/blog/src/components/ProjectCard.astro", void 0);

const $$ProjectsSection = createComponent(async ($$result, $$props, $$slots) => {
  const featuredProjects = await getFeaturedProjects();
  return renderTemplate`${maybeRenderHead()}<section class="flex flex-col"> <h2 class="text-5xl font-bold">
Projects<span class="text-accent">.</span> </h2> <p class="text-muted-foreground mb-6 text-2xl">
Stuff, I've${" "} <span class="text-foreground decoration-accent font-serif italic underline underline-offset-4">
Built
</span>${" "}
ehm...recently
</p> <ul class="flex flex-col gap-6"> ${featuredProjects.map((project) => renderTemplate`<li> ${renderComponent($$result, "ProjectCard", $$ProjectCard, { "project": project })} </li>`)} </ul> <div class="mt-6 flex justify-center"> ${renderComponent($$result, "Link", $$Link, { "href": "/project", "class": "text-muted-foreground hover:text-foreground group inline-flex items-center gap-2 text-sm transition-colors" }, { "default": async ($$result2) => renderTemplate`
See all projects
${renderComponent($$result2, "Icon", $$Icon, { "name": "lucide:chevron-right", "class": "size-4 transition-transform group-hover:translate-x-1" })} ` })} </div> </section>`;
}, "/home/blank_dreams/code/blog/src/components/home/ProjectsSection.astro", void 0);

function CatModel() {
  const { scene } = useGLTF("/3d/cat.glb");
  return /* @__PURE__ */ jsx(Center, { children: /* @__PURE__ */ jsx("primitive", { object: scene, scale: 0.5 }) });
}
function SpinCat() {
  return /* @__PURE__ */ jsx("section", { className: "flex flex-col items-center py-12", children: /* @__PURE__ */ jsxs("div", { className: "relative h-64 w-full max-w-md rounded-xl bg-muted/30 dark:bg-neutral-900/50", children: [
    /* @__PURE__ */ jsx("span", { className: "font-editorial text-muted-foreground absolute bottom-2 left-3 text-sm", children: "spin the boy" }),
    /* @__PURE__ */ jsxs(
      Canvas,
      {
        camera: { position: [0, 0, 3], fov: 50 },
        gl: { antialias: true, alpha: true },
        className: "size-full rounded-xl",
        children: [
          /* @__PURE__ */ jsx("ambientLight", { intensity: 1 }),
          /* @__PURE__ */ jsx("directionalLight", { position: [5, 5, 5], intensity: 1.5 }),
          /* @__PURE__ */ jsx(Suspense, { fallback: null, children: /* @__PURE__ */ jsx(CatModel, {}) }),
          /* @__PURE__ */ jsx(OrbitControls, { enableZoom: false, enablePan: false })
        ]
      }
    )
  ] }) });
}

const $$Index = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "class": "max-w-3xl" }, { "default": ($$result2) => renderTemplate`  ${renderComponent($$result2, "PageTitle", $$PageTitle, { "titleJP": "\u30DB\u30FC\u30E0\u30DA\u30FC\u30B8\u3002" }, { "breadcrumbs": ($$result3) => renderTemplate`${renderComponent($$result3, "Breadcrumbs", $$Breadcrumbs, { "slot": "breadcrumbs", "items": [{ label: "home", icon: "lucide:home" }] })}` })} ${renderComponent($$result2, "Hero", $$Hero, {})} ${renderComponent($$result2, "ProjectsSection", $$ProjectsSection, {})} ${renderComponent($$result2, "SpinCat", SpinCat, { "client:load": true, "client:component-hydration": "load", "client:component-path": "@/components/home/SpinCat", "client:component-export": "SpinCat" })} `, "head": ($$result2) => renderTemplate`${renderComponent($$result2, "PageHead", $$PageHead, { "slot": "head", "title": "Home" })}` })}`;
}, "/home/blank_dreams/code/blog/src/pages/index.astro", void 0);

const $$file = "/home/blank_dreams/code/blog/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
