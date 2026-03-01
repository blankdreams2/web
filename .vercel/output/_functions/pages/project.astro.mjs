import { c as createComponent, m as maybeRenderHead, r as renderComponent, a as renderTemplate } from '../chunks/astro/server_v3yWdH_B.mjs';
import { $ as $$Layout, a as $$Breadcrumbs } from '../chunks/Layout_yZGE3sl7.mjs';
import { $ as $$PageTitle } from '../chunks/PageTitle_CfOsVEq7.mjs';
import { $ as $$PageHead } from '../chunks/PageHead_DQNRM4qn.mjs';
import { jsxs, jsx } from 'react/jsx-runtime';
import { useSensors, useSensor, PointerSensor, KeyboardSensor, DndContext, closestCenter } from '@dnd-kit/core';
import { arrayMove, useSortable, SortableContext, rectSortingStrategy } from '@dnd-kit/sortable';
import * as React from 'react';
import { Suspense } from 'react';
import { c as cn, e as getBentoSize } from '../chunks/consts_RqznFRTQ.mjs';
import { CSS } from '@dnd-kit/utilities';
import { GripVertical } from 'lucide-react';
import { n as getAllProjects } from '../chunks/data-utils_CmMo04gt.mjs';
import { OrbitControls, useGLTF, Center } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
export { renderers } from '../renderers.mjs';

const useBentoOrder = ({
  projects,
  storageKey = "project-order"
}) => {
  const [order, setOrder] = React.useState(() => {
    if (typeof window === "undefined") return projects.map((p) => p.id);
    try {
      const stored = localStorage.getItem(storageKey);
      if (stored) {
        const parsed = JSON.parse(stored);
        const valid = parsed.filter((id) => projects.some((p) => p.id === id));
        const newIds = projects.filter((p) => !valid.includes(p.id)).map((p) => p.id);
        return [...valid, ...newIds];
      }
    } catch {
    }
    return projects.map((p) => p.id);
  });
  React.useEffect(() => {
    const newIds = projects.filter((p) => !order.includes(p.id)).map((p) => p.id);
    if (newIds.length > 0) {
      setOrder((prev) => [...prev, ...newIds]);
    }
  }, [projects, order]);
  const orderedProjects = React.useMemo(() => {
    const byId = new Map(projects.map((p) => [p.id, p]));
    return order.map((id) => byId.get(id)).filter(Boolean);
  }, [projects, order]);
  const handleDragEnd = (event) => {
    const { active, over } = event;
    if (!over || active.id === over.id) return;
    setOrder((prev) => {
      const oldIndex = prev.indexOf(active.id);
      const newIndex = prev.indexOf(over.id);
      if (oldIndex === -1 || newIndex === -1) return prev;
      const next = arrayMove(prev, oldIndex, newIndex);
      try {
        localStorage.setItem(storageKey, JSON.stringify(next));
      } catch {
      }
      return next;
    });
  };
  return { order, orderedProjects, handleDragEnd };
};

const BentoPlaceholder = () => {
  const [clicked, setClicked] = React.useState(false);
  return /* @__PURE__ */ jsxs(
    "div",
    {
      "data-bento-placeholder": true,
      className: "flex min-h-[10rem] items-center justify-center",
      children: [
        /* @__PURE__ */ jsx(
          "button",
          {
            type: "button",
            onClick: () => setClicked((c) => !c),
            className: cn(
              "bg-muted/50 hover:bg-muted hover:border-accent focus:ring-accent focus:ring-offset-background flex size-16 items-center justify-center rounded-full border-2 border-dashed transition-all duration-300 hover:scale-110 hover:border-solid focus:ring-2 focus:ring-offset-2 focus:outline-none",
              clicked && "border-accent bg-accent/20 scale-125"
            ),
            "aria-label": "Easter egg",
            children: /* @__PURE__ */ jsx(
              "span",
              {
                className: cn(
                  "text-muted-foreground text-2xl transition-transform duration-300",
                  clicked && "rotate-180"
                ),
                children: "✦"
              }
            )
          }
        ),
        /* @__PURE__ */ jsx("style", { children: `
        @keyframes bento-pulse {
          0%, 100% { opacity: 0.7; }
          50% { opacity: 1; }
        }
        [data-bento-placeholder] button {
          animation: bento-pulse 2.5s ease-in-out infinite;
        }
        [data-bento-placeholder] button:hover {
          animation: none;
        }
      ` })
      ]
    }
  );
};

const PLACEHOLDER_IMAGE = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="400" height="300" viewBox="0 0 400 300"%3E%3Crect fill="%23999" width="400" height="300"/%3E%3Ctext fill="%23666" x="50%25" y="50%25" dominant-baseline="middle" text-anchor="middle" font-size="24"%3Eplaceholder%3C/text%3E%3C/svg%3E';
const formatDate = (iso) => {
  if (!iso) return "";
  const d = new Date(iso);
  return Intl.DateTimeFormat("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric"
  }).format(d);
};
const BentoCard = ({
  project,
  size,
  isDragging,
  attributes,
  listeners,
  setNodeRef,
  style
}) => {
  const isWide = size === "wide";
  return /* @__PURE__ */ jsxs(
    "div",
    {
      ref: setNodeRef,
      style,
      className: cn(
        "group bg-background relative flex h-full min-h-0 overflow-visible rounded-xl border transition-shadow",
        isDragging && "z-50 opacity-90 shadow-xl",
        !isDragging && "hover:bg-muted/50 hover:shadow-md"
      ),
      children: [
        /* @__PURE__ */ jsxs(
          "a",
          {
            href: project.caseStudy ? `/project/${project.id}` : project.link,
            target: project.caseStudy ? void 0 : "_blank",
            rel: project.caseStudy ? void 0 : "noopener noreferrer",
            className: cn(
              "relative flex h-full min-h-0 overflow-hidden",
              isWide && "flex-col gap-2 p-4 sm:flex-row sm:gap-3",
              size === "tall" && "flex-col gap-2 p-3",
              size === "small" && "flex-col gap-1.5 p-3 sm:flex-row sm:gap-2 sm:p-4"
            ),
            children: [
              /* @__PURE__ */ jsx(
                "div",
                {
                  className: cn(
                    "bg-muted flex shrink-0 items-center justify-center overflow-hidden rounded-lg",
                    isWide && "aspect-video w-full sm:h-full sm:min-h-0 sm:w-56 sm:max-w-[45%] sm:flex-1",
                    size === "tall" && "aspect-video w-full sm:h-28 sm:min-h-0 sm:flex-1",
                    size === "small" && "aspect-video w-full sm:h-20 sm:w-28"
                  ),
                  children: /* @__PURE__ */ jsx(
                    "img",
                    {
                      src: project.image ?? PLACEHOLDER_IMAGE,
                      alt: project.name,
                      className: "size-full object-cover"
                    }
                  )
                }
              ),
              /* @__PURE__ */ jsxs("div", { className: "min-h-0 min-w-0 flex-1 overflow-hidden", children: [
                /* @__PURE__ */ jsx(
                  "h3",
                  {
                    className: cn(
                      "font-medium",
                      isWide ? "text-lg sm:text-xl" : "text-sm sm:text-base"
                    ),
                    children: project.name
                  }
                ),
                /* @__PURE__ */ jsx(
                  "p",
                  {
                    className: cn(
                      "text-muted-foreground leading-relaxed",
                      isWide ? "mt-2 line-clamp-2 text-xs sm:line-clamp-3 sm:text-sm" : "mt-1.5 line-clamp-2 text-xs"
                    ),
                    children: project.description
                  }
                ),
                (project.startDate || project.endDate) && /* @__PURE__ */ jsx("p", { className: "text-muted-foreground/70 mt-2 flex items-center gap-x-1.5 text-xs", children: /* @__PURE__ */ jsxs("span", { children: [
                  formatDate(project.startDate),
                  project.endDate ? ` → ${formatDate(project.endDate)}` : " → Present"
                ] }) }),
                project.tags.length > 0 && /* @__PURE__ */ jsx("div", { className: "mt-3 flex flex-wrap gap-2", children: project.tags.slice(0, isWide ? 6 : 3).map((tag) => /* @__PURE__ */ jsx(
                  "span",
                  {
                    className: "bg-muted text-muted-foreground rounded-md px-2 py-0.5 text-xs",
                    children: tag
                  },
                  tag
                )) }),
                /* @__PURE__ */ jsxs("span", { className: "text-muted-foreground group-hover:text-accent mt-3 inline-flex items-center gap-1 text-xs transition-colors", children: [
                  project.caseStudy ? "Read case study" : "Visit",
                  /* @__PURE__ */ jsx(
                    "svg",
                    {
                      className: "size-3.5",
                      fill: "none",
                      viewBox: "0 0 24 24",
                      stroke: "currentColor",
                      children: /* @__PURE__ */ jsx(
                        "path",
                        {
                          strokeLinecap: "round",
                          strokeLinejoin: "round",
                          strokeWidth: 2,
                          d: project.caseStudy ? "M9 5l7 7-7 7" : "M7 17L17 7M17 7H7M17 7v10"
                        }
                      )
                    }
                  )
                ] })
              ] })
            ]
          }
        ),
        /* @__PURE__ */ jsx(
          "img",
          {
            src: project.image ?? PLACEHOLDER_IMAGE,
            alt: "",
            "aria-hidden": true,
            className: "border-border bg-background pointer-events-none absolute top-0 left-1/2 z-30 w-48 -translate-x-1/2 -translate-y-2 rounded-lg border object-cover opacity-0 shadow-xl transition-all duration-300 ease-out group-hover:-translate-y-4 group-hover:opacity-100"
          }
        ),
        /* @__PURE__ */ jsx(
          "button",
          {
            type: "button",
            className: "hover:bg-muted/80 absolute top-3 right-3 z-20 rounded-md p-1.5 opacity-0 transition-opacity group-hover:opacity-100",
            "aria-label": "Drag to reorder",
            ...attributes,
            ...listeners ?? {},
            children: /* @__PURE__ */ jsx(GripVertical, { className: "text-muted-foreground size-4" })
          }
        )
      ]
    }
  );
};

const SortableBentoCard = ({
  project,
  order
}) => {
  const sortIndex = order.indexOf(project.id);
  const size = getBentoSize(sortIndex);
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
    isDragging
  } = useSortable({ id: project.id });
  const style = {
    transform: CSS.Transform.toString(transform),
    transition
  };
  const gridClass = {
    wide: "sm:col-span-2",
    tall: "sm:row-span-2",
    small: ""
  }[size];
  return /* @__PURE__ */ jsx("div", { className: cn("min-h-0", gridClass), children: /* @__PURE__ */ jsx(
    BentoCard,
    {
      project,
      size,
      isDragging,
      attributes,
      listeners,
      setNodeRef,
      style
    }
  ) });
};

const BentoProjectGrid = ({
  projects,
  storageKey = "project-order"
}) => {
  const { order, orderedProjects, handleDragEnd } = useBentoOrder({
    projects,
    storageKey
  });
  const sensors = useSensors(
    useSensor(PointerSensor, {
      activationConstraint: { distance: 8 }
    }),
    useSensor(KeyboardSensor)
  );
  return /* @__PURE__ */ jsx(
    DndContext,
    {
      sensors,
      collisionDetection: closestCenter,
      onDragEnd: handleDragEnd,
      children: /* @__PURE__ */ jsx(SortableContext, { items: order, strategy: rectSortingStrategy, children: /* @__PURE__ */ jsxs(
        "div",
        {
          className: "grid auto-rows-[minmax(10rem,1fr)] grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-4 lg:grid-cols-3",
          role: "list",
          children: [
            orderedProjects.map((project) => /* @__PURE__ */ jsx(
              SortableBentoCard,
              {
                project,
                order
              },
              project.id
            )),
            /* @__PURE__ */ jsx(BentoPlaceholder, {})
          ]
        }
      ) })
    }
  );
};

const serializeProject = (p) => {
  const img = p.data.image;
  let imageSrc = null;
  if (img) {
    if (typeof img === "string") {
      imageSrc = img.startsWith("/public") ? img.slice(7) : img;
    } else if (typeof img === "object" && img !== null && "src" in img) {
      imageSrc = img.src ?? null;
    }
  }
  return {
    id: p.id,
    name: p.data.name,
    description: p.data.description,
    link: p.data.link,
    image: imageSrc,
    tags: p.data.tags ?? [],
    startDate: p.data.startDate?.toISOString() ?? null,
    endDate: p.data.endDate?.toISOString() ?? null,
    caseStudy: p.data.caseStudy ?? false
  };
};

const $$ProjectSection = createComponent(async ($$result, $$props, $$slots) => {
  const allProjects = await getAllProjects();
  const serializedProjects = allProjects.map(serializeProject);
  return renderTemplate`${maybeRenderHead()}<section class="flex flex-col"> ${renderComponent($$result, "BentoProjectGrid", BentoProjectGrid, { "projects": serializedProjects, "client:load": true, "client:component-hydration": "load", "client:component-path": "/home/blank_dreams/code/blog/src/components/project/BentoProjectGrid", "client:component-export": "BentoProjectGrid" })} </section>`;
}, "/home/blank_dreams/code/blog/src/components/project/ProjectSection.astro", void 0);

function BanhmyModel() {
  const { scene } = useGLTF("/3d/banhmy.glb");
  return /* @__PURE__ */ jsx(Center, { children: /* @__PURE__ */ jsx("primitive", { object: scene, scale: 0.8 }) });
}
function SpinBanhmy() {
  return /* @__PURE__ */ jsx("section", { className: "flex flex-col items-center py-12", children: /* @__PURE__ */ jsxs("div", { className: "relative h-64 w-full max-w-md rounded-xl border bg-muted/30 dark:bg-neutral-900/50", children: [
    /* @__PURE__ */ jsx("span", { className: "font-editorial text-muted-foreground absolute bottom-2 left-3 text-sm", children: "kitchen closed." }),
    /* @__PURE__ */ jsxs(
      Canvas,
      {
        camera: { position: [6, 0, 1], fov: 50 },
        gl: { antialias: true, alpha: true },
        className: "size-full rounded-xl",
        children: [
          /* @__PURE__ */ jsx("ambientLight", { intensity: 1 }),
          /* @__PURE__ */ jsx("directionalLight", { position: [5, 5, 5], intensity: 1.5 }),
          /* @__PURE__ */ jsx(Suspense, { fallback: null, children: /* @__PURE__ */ jsx(BanhmyModel, {}) }),
          /* @__PURE__ */ jsx(OrbitControls, { enableZoom: false, enablePan: false })
        ]
      }
    )
  ] }) });
}

const $$Index = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "class": "max-w-5xl" }, { "default": ($$result2) => renderTemplate`  ${renderComponent($$result2, "PageTitle", $$PageTitle, { "titleJP": "\u6CE8\u76EE\u30D7\u30ED\u30B8\u30A7\u30AF\u30C8\u3002" }, { "breadcrumbs": ($$result3) => renderTemplate`${renderComponent($$result3, "Breadcrumbs", $$Breadcrumbs, { "slot": "breadcrumbs", "items": [{ label: "project", icon: "lucide:sparkle" }] })}` })} ${renderComponent($$result2, "ProjectSection", $$ProjectSection, {})} ${renderComponent($$result2, "SpinBanhmy", SpinBanhmy, { "client:load": true, "client:component-hydration": "load", "client:component-path": "@/components/project/SpinBanhmy", "client:component-export": "SpinBanhmy" })} `, "head": ($$result2) => renderTemplate`${renderComponent($$result2, "PageHead", $$PageHead, { "slot": "head", "title": "project" })}` })}`;
}, "/home/blank_dreams/code/blog/src/pages/project/index.astro", void 0);

const $$file = "/home/blank_dreams/code/blog/src/pages/project/index.astro";
const $$url = "/project";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
