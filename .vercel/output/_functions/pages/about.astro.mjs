import { c as createComponent, m as maybeRenderHead, r as renderComponent, a as renderTemplate, b as addAttribute } from '../chunks/astro/server_v3yWdH_B.mjs';
import { jsx, jsxs, Fragment } from 'react/jsx-runtime';
import { useGLTF, Center, OrbitControls } from '@react-three/drei';
import { Canvas, useFrame } from '@react-three/fiber';
import * as React from 'react';
import React__default, { useRef, useState, useEffect, Suspense } from 'react';
import { $ as $$Image } from '../chunks/_astro_assets_BFlWmnoX.mjs';
import * as TooltipPrimitive from '@radix-ui/react-tooltip';
import { c as cn, L as LIGHT_UNDERLINE, D as DARK_UNDERLINE, G as GITHUB_API_BASE_URL, a as GITHUB_ACCOUNTS, b as GITHUB_USER_QUERY, R as REPO_URL } from '../chunks/consts_RqznFRTQ.mjs';
import clsx from 'clsx';
import { motion, animate, useInView, AnimatePresence } from 'framer-motion';
import { annotate } from 'rough-notation';
import 'rough-notation/lib/model.js';
import { Gamepad2, Laptop2, Building2 } from 'lucide-react';
import axios from 'axios';
import { $ as $$Layout, a as $$Breadcrumbs } from '../chunks/Layout_yZGE3sl7.mjs';
import { SiTailwindcss, SiVite, SiKeras, SiTensorflow, SiPytorch, SiCss3, SiHtml5, SiJavascript, SiRust, SiOpenjdk, SiPython, SiCplusplus, SiEthereum, SiFirebase, SiZapier, SiDocker, SiMongodb, SiExpress, SiNextdotjs, SiReact, SiFigma, SiSupabase, SiTypescript, SiVuedotjs, SiNuxtdotjs, SiCloudflare, SiLinux, SiBootstrap, SiPhp } from 'react-icons/si';
import { BsMicrosoftTeams } from 'react-icons/bs';
import { $ as $$PageHead } from '../chunks/PageHead_DQNRM4qn.mjs';
export { renderers } from '../renderers.mjs';

const TREE_BASE_Y = -0.8;
function Computer() {
  const groupRef = useRef(null);
  const { scene } = useGLTF("/3d/computer.glb");
  useFrame((state) => {
    if (!groupRef.current) return;
    const t = state.clock.elapsedTime;
    groupRef.current.position.y = -0.4 + Math.sin(t * 0.6) * 0.05;
    groupRef.current.rotation.y = Math.sin(t * 0.3) * 0.08;
  });
  return /* @__PURE__ */ jsx("group", { ref: groupRef, position: [1, 1, 0.4], children: /* @__PURE__ */ jsx("primitive", { object: scene, scale: 65e-4 }) });
}
function Tree() {
  const groupRef = useRef(null);
  const { scene } = useGLTF("/3d/tree.glb");
  useFrame((state) => {
    if (!groupRef.current) return;
    const t = state.clock.elapsedTime;
    groupRef.current.position.y = TREE_BASE_Y + Math.sin(t * 0.5) * 0.06;
    groupRef.current.rotation.z = Math.sin(t * 0.4) * 0.03;
  });
  return /* @__PURE__ */ jsx("group", { ref: groupRef, position: [-1.1, TREE_BASE_Y, 0.3], children: /* @__PURE__ */ jsx(Center, { children: /* @__PURE__ */ jsx("primitive", { object: scene, scale: 75e-4 }) }) });
}
const canvasClass = "absolute top-1/2 left-1/2 size-[min(100%,400px)] min-h-[280px] min-w-[280px] -translate-x-1/2 -translate-y-1/2 sm:min-h-[360px] sm:min-w-[360px]";
function AboutScene() {
  return /* @__PURE__ */ jsx("div", { className: "pointer-events-none absolute inset-0 z-20 overflow-visible", children: /* @__PURE__ */ jsx("div", { className: canvasClass, children: /* @__PURE__ */ jsxs(
    Canvas,
    {
      camera: { position: [0, 0, 2.5], fov: 75 },
      gl: { antialias: true, alpha: true },
      children: [
        /* @__PURE__ */ jsx("ambientLight", { intensity: 1 }),
        /* @__PURE__ */ jsx("directionalLight", { position: [5, 5, 5], intensity: 1.5 }),
        /* @__PURE__ */ jsx(Computer, {}),
        /* @__PURE__ */ jsx(Tree, {})
      ]
    }
  ) }) });
}

const LOCATION = "Guangzhou, China";
const TIMEZONE = "Asia/Shanghai";
function LiveClock() {
  const [time, setTime] = useState("00:00:00");
  useEffect(() => {
    const update = () => {
      const now = /* @__PURE__ */ new Date();
      const formatter = new Intl.DateTimeFormat("en-CA", {
        timeZone: TIMEZONE,
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: false
      });
      setTime(formatter.format(now));
    };
    update();
    const id = setInterval(update, 1e3);
    return () => clearInterval(id);
  }, []);
  return /* @__PURE__ */ jsxs("div", { className: "flex flex-col items-center gap-1 font-mono", children: [
    /* @__PURE__ */ jsx("span", { className: "text-muted-foreground text-2xl tabular-nums sm:text-3xl", children: time }),
    /* @__PURE__ */ jsxs("span", { className: "text-muted-foreground/80 text-sm", children: [
      "in ",
      LOCATION
    ] })
  ] });
}

const $$AboutHero = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<section class="bg-grid-pattern relative mb-8 flex min-w-0 flex-col items-center gap-6 overflow-hidden p-6 pb-4 text-center"> ${renderComponent($$result, "LiveClock", LiveClock, { "client:load": true, "client:component-hydration": "load", "client:component-path": "@/components/about/LiveClock", "client:component-export": "default" })} <!-- polaroid centered, computer & tree float around --> <div class="relative z-10 flex min-h-[200px] items-center justify-center sm:min-h-[260px]"> <div class="group relative z-10 -rotate-2 bg-white p-3 pb-12 shadow-lg transition-transform duration-300 hover:scale-105 hover:rotate-[-4deg] hover:shadow-xl"> ${renderComponent($$result, "Image", $$Image, { "src": "/static/coffee.png", "alt": "blank_dreams", "class": "relative block h-auto w-44 shadow-sm sm:w-48", "width": 200, "height": 200 })} <p class="font-caveat absolute bottom-3 left-1/2 -translate-x-1/2 text-sm whitespace-nowrap text-neutral-800">
just the letter T.
</p> </div> ${renderComponent($$result, "AboutScene", AboutScene, { "client:load": true, "client:component-hydration": "load", "client:component-path": "@/components/about/AboutScene", "client:component-export": "AboutScene" })} </div> <h1 class="font-bon-vivant pt-2 text-4xl font-bold sm:text-6xl md:text-7xl">
who's <br> <span class="text-accent font-display -mt-6 block min-w-0 overflow-hidden text-ellipsis text-3xl font-black sm:-mt-8 sm:text-5xl md:text-6xl">
blank_dreams?
</span> </h1> </section>`;
}, "/home/blank_dreams/code/blog/src/components/about/AboutHero.astro", void 0);

const TooltipProvider = TooltipPrimitive.Provider;
const Tooltip = TooltipPrimitive.Root;
const TooltipTrigger = TooltipPrimitive.Trigger;
const TooltipContent = React.forwardRef(({ className, sideOffset = 4, ...props }, ref) => /* @__PURE__ */ jsx(TooltipPrimitive.Portal, { children: /* @__PURE__ */ jsx(
  TooltipPrimitive.Content,
  {
    ref,
    sideOffset,
    className: cn(
      "tooltip-fade z-50 overflow-hidden rounded-md bg-primary px-3 py-1.5 text-xs text-primary-foreground origin-[--radix-tooltip-content-transform-origin]",
      className
    ),
    ...props
  }
) }));
TooltipContent.displayName = TooltipPrimitive.Content.displayName;

const TITLE_JP = "何でもは知らないわよ、知ってることだけ。";
const TOOLTIP = "I don't know everything. I just know what I know. — Hanekawa Tsubasa";
function AboutPageTitle({ children }) {
  return /* @__PURE__ */ jsxs("div", { className: "mt-3 mb-6 text-center", children: [
    /* @__PURE__ */ jsx(TooltipProvider, { children: /* @__PURE__ */ jsxs(Tooltip, { children: [
      /* @__PURE__ */ jsx(TooltipTrigger, { asChild: true, children: /* @__PURE__ */ jsx("h2", { className: "font-editorial text-foreground cursor-help text-xl font-bold", children: TITLE_JP }) }),
      /* @__PURE__ */ jsx(
        TooltipContent,
        {
          side: "top",
          className: "max-w-sm px-4 py-2.5 text-center font-serif text-sm whitespace-normal",
          children: TOOLTIP
        }
      )
    ] }) }),
    children && /* @__PURE__ */ jsx("div", { className: "mt-2", children })
  ] });
}

function Calendar({ data }) {
  const [selectContribution, setSelectContribution] = useState({
    count: null,
    date: null
  });
  const weeks = data?.weeks ?? [];
  const months = data?.months?.map((month) => {
    const filterContributionDay = weeks.filter(
      (week) => week.firstDay.slice(0, 7) === month.firstDay.slice(0, 7)
    ).map((item) => item.contributionDays).flat(1);
    const getContributionsByMonth = filterContributionDay.reduce(
      (previousValue, currentValue) => previousValue + currentValue.contributionCount,
      0
    );
    return {
      ...month,
      contributionsCount: getContributionsByMonth
    };
  }) ?? [];
  const ACCENT_PALETTE = [
    "var(--contribution-1)",
    "var(--contribution-2)",
    "var(--contribution-3)",
    "var(--contribution-4)"
  ];
  const getAccentColor = (_githubColor, contributionCount) => {
    const level = contributionCount <= 1 ? 0 : contributionCount <= 3 ? 1 : contributionCount <= 6 ? 2 : 3;
    return ACCENT_PALETTE[level];
  };
  const contributionColors = ACCENT_PALETTE;
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsxs("div", { className: "relative flex flex-col", children: [
      /* @__PURE__ */ jsx("ul", { className: "text-muted-foreground flex justify-end gap-[3px] overflow-hidden text-xs font-medium md:justify-start", children: months.map((month) => /* @__PURE__ */ jsx(
        "li",
        {
          style: { minWidth: Math.max(14.3 * month.totalWeeks, 20) },
          children: month.name
        },
        month.firstDay
      )) }),
      /* @__PURE__ */ jsx("div", { className: "flex justify-start gap-[3px] overflow-hidden", children: weeks?.map((week) => /* @__PURE__ */ jsx("div", { children: week.contributionDays.map((contribution) => {
        const backgroundColor = contribution.contributionCount > 0 ? getAccentColor(
          contribution.color,
          contribution.contributionCount
        ) : void 0;
        const getRandomDelayAnimate = Math.random() * week.contributionDays.length * 0.15;
        return /* @__PURE__ */ jsx(
          motion.span,
          {
            initial: "initial",
            animate: "animate",
            variants: {
              initial: { opacity: 0, translateY: -20 },
              animate: {
                opacity: 1,
                translateY: 0,
                transition: { delay: getRandomDelayAnimate }
              }
            },
            className: "my-[2px] block h-[12px] w-[12px] rounded-sm",
            style: {
              backgroundColor: backgroundColor ?? "var(--contribution-empty)"
            },
            onMouseEnter: () => setSelectContribution({
              count: contribution.contributionCount,
              date: contribution.date
            }),
            onMouseLeave: () => setSelectContribution({ count: null, date: null })
          },
          contribution.date
        );
      }) }, week.firstDay)) })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "flex flex-wrap items-center justify-between gap-2", children: [
      /* @__PURE__ */ jsxs("div", { className: "text-muted-foreground flex items-center gap-2 text-sm font-medium", children: [
        /* @__PURE__ */ jsx("span", { children: "Less" }),
        /* @__PURE__ */ jsxs("ul", { className: "flex gap-1", children: [
          /* @__PURE__ */ jsx(
            motion.li,
            {
              className: "h-[10px] w-[10px] rounded-sm",
              style: { backgroundColor: "var(--contribution-empty)" }
            }
          ),
          contributionColors.map((item, index) => /* @__PURE__ */ jsx(
            motion.li,
            {
              initial: "initial",
              animate: "animate",
              variants: {
                initial: { opacity: 0 },
                animate: {
                  opacity: 1,
                  transition: { delay: index * 0.3 }
                }
              },
              className: "h-[10px] w-[10px] rounded-sm",
              style: { backgroundColor: item }
            },
            item
          ))
        ] }),
        /* @__PURE__ */ jsx("span", { children: "More" })
      ] }),
      /* @__PURE__ */ jsxs(
        "div",
        {
          className: clsx(
            `${selectContribution?.date ? "opacity-100" : "opacity-0"}`,
            "bg-muted text-foreground rounded px-2 text-sm"
          ),
          children: [
            selectContribution?.count,
            " contributions on",
            " ",
            selectContribution?.date
          ]
        }
      )
    ] })
  ] });
}

const AnimateCounter = ({ total, ...rest }) => {
  const countRef = useRef(null);
  const initialCount = 0;
  useEffect(() => {
    const count = countRef.current;
    const controls = animate(initialCount, total, {
      duration: 1,
      onUpdate: (value) => {
        if (count) {
          count.textContent = Math.floor(value).toString();
        }
      }
    });
    return () => controls.stop();
  }, [total]);
  return /* @__PURE__ */ jsx("span", { ...rest, ref: countRef, "data-testid": "counter" });
};

function OverviewItem({
  label,
  value,
  unit = ""
}) {
  return /* @__PURE__ */ jsxs("div", { className: "border-border bg-muted/30 flex flex-col self-center rounded-xl border px-4 py-3", children: [
    /* @__PURE__ */ jsx("span", { className: "text-muted-foreground text-sm font-medium", children: label }),
    /* @__PURE__ */ jsxs("div", { children: [
      /* @__PURE__ */ jsx(
        AnimateCounter,
        {
          className: "text-accent text-xl font-medium lg:text-2xl",
          total: value
        }
      ),
      unit && /* @__PURE__ */ jsxs("span", { className: "text-muted-foreground text-sm font-medium", children: [
        " ",
        unit
      ] })
    ] })
  ] });
}

function Overview({ data }) {
  const totalContributions = data?.totalContributions || 0;
  const weeks = data?.weeks || [];
  const totalThisWeekContribution = weeks[weeks.length - 1]?.contributionDays?.map((item) => item.contributionCount)?.reduce(
    (previousValue, currentValue) => previousValue + currentValue,
    0
  ) || 0;
  const totalContributionList = weeks.map(
    (week) => week.contributionDays.map(
      (contributionDay) => contributionDay.contributionCount
    )
  ).flat();
  const bestContribution = Math.max(...totalContributionList) || 0;
  const averageContribution = totalContributions / totalContributionList.length;
  return /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-2 gap-3 py-2 sm:grid-cols-4", children: [
    /* @__PURE__ */ jsx(OverviewItem, { label: "Total", value: totalContributions }),
    /* @__PURE__ */ jsx(OverviewItem, { label: "This Week", value: totalThisWeekContribution }),
    /* @__PURE__ */ jsx(OverviewItem, { label: "Best Day", value: bestContribution }),
    /* @__PURE__ */ jsx(OverviewItem, { label: "Average", value: averageContribution, unit: "/ day" })
  ] });
}

function Contributions({ githubData }) {
  return /* @__PURE__ */ jsxs("section", { className: "flex flex-col gap-y-2", children: [
    !githubData && /* @__PURE__ */ jsx("div", { className: "dark:text-neutral-400", children: "No Data" }),
    githubData && /* @__PURE__ */ jsxs("div", { className: "space-y-3", children: [
      /* @__PURE__ */ jsx(Overview, { data: githubData }),
      /* @__PURE__ */ jsx(Calendar, { data: githubData })
    ] })
  ] });
}

function Highlighter({
  children,
  action = "highlight",
  color = "#ffd1dc",
  strokeWidth = 1.5,
  animationDuration = 600,
  iterations = 2,
  padding = 2,
  multiline = true,
  isView = false
}) {
  const elementRef = useRef(null);
  const annotationRef = useRef(null);
  const isInView = useInView(elementRef, {
    once: true,
    margin: "-10%"
  });
  const shouldShow = !isView || isInView;
  useEffect(() => {
    if (!shouldShow) return;
    const element = elementRef.current;
    if (!element) return;
    const annotationConfig = {
      type: action,
      color,
      strokeWidth,
      animationDuration,
      iterations,
      padding,
      multiline
    };
    const annotation = annotate(element, annotationConfig);
    annotationRef.current = annotation;
    annotationRef.current.show();
    const resizeObserver = new ResizeObserver(() => {
      annotation.hide();
      annotation.show();
    });
    resizeObserver.observe(element);
    resizeObserver.observe(document.body);
    return () => {
      if (element) {
        annotate(element, { type: action }).remove();
        resizeObserver.disconnect();
      }
    };
  }, [
    shouldShow,
    action,
    color,
    strokeWidth,
    animationDuration,
    iterations,
    padding,
    multiline
  ]);
  return /* @__PURE__ */ jsx("span", { ref: elementRef, className: "relative inline-block bg-transparent", children });
}

function Paragraph({
  tag,
  answer,
  customAnswer,
  dir = "ltr",
  children
}) {
  const [underlineColor, setUnderlineColor] = React__default.useState(LIGHT_UNDERLINE);
  const [highlightKey, setHighlightKey] = React__default.useState(0);
  React__default.useEffect(() => {
    const handler = () => setHighlightKey((k) => k + 1);
    document.addEventListener("astro:page-load", handler);
    return () => document.removeEventListener("astro:page-load", handler);
  }, []);
  React__default.useEffect(() => {
    const getIsDark = () => document.documentElement.classList.contains("dark");
    const apply = () => setUnderlineColor(getIsDark() ? DARK_UNDERLINE : LIGHT_UNDERLINE);
    apply();
    const observer = new MutationObserver(apply);
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"]
    });
    return () => observer.disconnect();
  }, []);
  const tagAlignment = dir === "rtl" ? "text-right" : "text-left";
  return /* @__PURE__ */ jsx("div", { className: "flex h-full w-full flex-col items-center justify-center", children: /* @__PURE__ */ jsxs("div", { className: "flex w-full max-w-3xl flex-col border-b border-slate-700 pt-1 pb-2 dark:border-slate-400", children: [
    /* @__PURE__ */ jsxs(
      "p",
      {
        className: `pb-2 font-display text-xl text-black dark:text-white ${tagAlignment}`,
        children: [
          tag === "rpg maker games" && /* @__PURE__ */ jsx(Gamepad2, { className: "mt-1 mr-1.5 inline-block h-5 w-5 animate-pulse" }),
          tag === "chào, or hi there" && /* @__PURE__ */ jsx(Laptop2, { className: "mt-1 mr-1.5 inline-block h-5 w-5" }),
          /* @__PURE__ */ jsx(
            Highlighter,
            {
              action: "underline",
              color: underlineColor,
              strokeWidth: 2,
              isView: false,
              children: tag || "Lorem ipsum dolor sit amet."
            },
            highlightKey
          )
        ]
      }
    ),
    customAnswer || children ? /* @__PURE__ */ jsx(
      "p",
      {
        className: `pb-2 font-sans text-[15px] font-medium tracking-wide text-black dark:font-light dark:text-muted-foreground ${tagAlignment}`,
        children: customAnswer ?? children
      }
    ) : /* @__PURE__ */ jsx("p", { className: "pb-2 font-sans text-[15px] text-gray-500 opacity-80 dark:text-muted-foreground", children: answer || "Consectetur adipiscing elit, sed do eiusmod tempor incididunt." })
  ] }) });
}

async function getGithubData() {
  try {
    const now = /* @__PURE__ */ new Date();
    const to = now.toISOString();
    const from = new Date(now);
    from.setFullYear(from.getFullYear() - 1);
    const fromStr = from.toISOString();
    const response = await axios.post(
      GITHUB_API_BASE_URL,
      {
        query: GITHUB_USER_QUERY,
        variables: {
          username: GITHUB_ACCOUNTS.username,
          from: fromStr,
          to
        }
      },
      {
        headers: {
          Authorization: `bearer ${GITHUB_ACCOUNTS.token}`
        }
      }
    );
    return response.data?.data?.user?.contributionsCollection?.contributionCalendar ?? null;
  } catch (err) {
    const status = axios.isAxiosError(err) ? err.response?.status : null;
    const msg = status === 401 ? "Invalid or expired GITHUB_TOKEN" : "GitHub API request failed";
    console.warn(`[github] ${msg} — contributions will be hidden`);
    return null;
  }
}

const $$AboutSections = createComponent(async ($$result, $$props, $$slots) => {
  const githubData = await getGithubData();
  return renderTemplate`${maybeRenderHead()}<section class="flex flex-col gap-8 px-2"> ${renderComponent($$result, "Paragraph", Paragraph, { "client:load": true, "tag": "ch\xE0o, or hi there", "dir": "ltr", "client:component-hydration": "load", "client:component-path": "@/components/about/Paragraph.tsx", "client:component-export": "default" }, { "default": async ($$result2) => renderTemplate`
The name is <span class="text-highlight font-semibold">T</span> and I'm a <span class="text-highlight font-semibold">${`grad student`}</span> at
<span class="font-semibold text-[#c10e2f]">UNLV</span>, a <span class="font-semibold text-[#facc15]">2x hackathon</span> winner, and a <span class="font-semibold text-[#facc15]">10x CTF</span> winner (across different
    competitions). I've been doing this coding thing for a bit now and the result can't describe how much
    I enjoy it. Right now I'm really into
<span class="text-accent font-semibold">Cybersecurity</span> and <span class="text-accent font-semibold">RPG Maker Games</span> ${` \u2014 I'm also broke (classic :D).`}` })} ${renderComponent($$result, "Paragraph", Paragraph, { "client:load": true, "tag": "currently?", "dir": "rtl", "client:component-hydration": "load", "client:component-path": "@/components/about/Paragraph.tsx", "client:component-export": "default" }, { "default": async ($$result2) => renderTemplate`${`Limbus Company.`}${renderComponent($$result2, "Contributions", Contributions, { "client:load": true, "githubData": githubData, "client:component-hydration": "load", "client:component-path": "@/components/about/contributions/Contributions", "client:component-export": "default" })} ` })} ${renderComponent($$result, "Paragraph", Paragraph, { "client:load": true, "tag": "outside of school", "dir": "ltr", "client:component-hydration": "load", "client:component-path": "@/components/about/Paragraph.tsx", "client:component-export": "default" }, { "default": async ($$result2) => renderTemplate`${`I'm also fascinated with `}<span class="text-highlight font-semibold">mathematics</span> ${` and wish to make a career out of it someday. Things I love include: `}<span class="font-semibold text-[#eb8033] dark:text-[#C4A484]">coffee</span> ${`, dark mode, and cats.`}` })} ${renderComponent($$result, "Paragraph", Paragraph, { "client:load": true, "tag": "rpg maker games", "dir": "rtl", "client:component-hydration": "load", "client:component-path": "@/components/about/Paragraph.tsx", "client:component-export": "default" }, { "default": async ($$result2) => renderTemplate`${`Words can't describe how big of a fan I am of this subculture, which had its heyday in the early 2010s. I'm still actively playing these games and, hopefully, one day, `}<span class="text-accent font-semibold">I will create one myself</span> ${`. Some of my personal favorites is in the dashboard.`}` })} ${renderComponent($$result, "Paragraph", Paragraph, { "client:load": true, "tag": "Source Code", "dir": "ltr", "client:component-hydration": "load", "client:component-path": "@/components/about/Paragraph.tsx", "client:component-export": "default" }, { "default": async ($$result2) => renderTemplate`${`I hope you enjoy my website. The source code for this site is available on `}<a${addAttribute(REPO_URL, "href")} target="_blank" rel="noopener noreferrer" class="text-accent decoration-accent font-semibold underline underline-offset-2 hover:opacity-80">
@blankdreams2/web
</a> ` })} </section>`;
}, "/home/blank_dreams/code/blog/src/components/about/AboutSections.astro", void 0);

function MonikaModel() {
  const { scene } = useGLTF("/3d/monika.glb");
  return /* @__PURE__ */ jsx(Center, { children: /* @__PURE__ */ jsx("group", { rotation: [0, Math.PI, 0], children: /* @__PURE__ */ jsx("primitive", { object: scene, scale: 0.55 }) }) });
}
function SpinMonika() {
  return /* @__PURE__ */ jsx("section", { className: "flex flex-col items-center py-12", children: /* @__PURE__ */ jsxs("div", { className: "bg-muted/30 relative h-64 w-full max-w-md rounded-xl border dark:bg-neutral-900/50", children: [
    /* @__PURE__ */ jsx("span", { className: "font-editorial text-muted-foreground absolute bottom-2 left-3 text-sm", children: "just monika" }),
    /* @__PURE__ */ jsxs(
      Canvas,
      {
        camera: { position: [0, 0, 3], fov: 50 },
        gl: { antialias: true, alpha: true },
        className: "size-full rounded-xl",
        children: [
          /* @__PURE__ */ jsx("ambientLight", { intensity: 1 }),
          /* @__PURE__ */ jsx("directionalLight", { position: [5, 5, 5], intensity: 1.5 }),
          /* @__PURE__ */ jsx(Suspense, { fallback: null, children: /* @__PURE__ */ jsx(MonikaModel, {}) }),
          /* @__PURE__ */ jsx(OrbitControls, { enableZoom: false, enablePan: false })
        ]
      }
    )
  ] }) });
}

const TECH_ICON_MAP = {
  PHP: SiPhp,
  Bootstrap: SiBootstrap,
  Linux: SiLinux,
  Cloudflare: SiCloudflare,
  Nuxt: SiNuxtdotjs,
  Vue: SiVuedotjs,
  TypeScript: SiTypescript,
  Supabase: SiSupabase,
  UX: SiFigma,
  React: SiReact,
  "Next.js": SiNextdotjs,
  Express: SiExpress,
  MongoDB: SiMongodb,
  Docker: SiDocker,
  Zapier: SiZapier,
  Firebase: SiFirebase,
  Blockchain: SiEthereum,
  "C++": SiCplusplus,
  "C/C++": SiCplusplus,
  Python: SiPython,
  Java: SiOpenjdk,
  Rust: SiRust,
  JavaScript: SiJavascript,
  HTML: SiHtml5,
  CSS: SiCss3,
  PyTorch: SiPytorch,
  TensorFlow: SiTensorflow,
  Keras: SiKeras,
  "Microsoft Teams": BsMicrosoftTeams,
  // 'Zapier': TbBrandZapier,
  Vite: SiVite,
  "Tailwind CSS": SiTailwindcss
};
function TechIcon({
  name,
  className = "size-3.5"
}) {
  const Icon = TECH_ICON_MAP[name];
  if (!Icon) return null;
  return /* @__PURE__ */ jsx(Icon, { className, "aria-hidden": true });
}

const INITIAL_COUNT = 3;
const ExperienceItem = ({ exp }) => {
  return /* @__PURE__ */ jsxs("li", { className: "relative flex gap-6", children: [
    /* @__PURE__ */ jsx(
      "div",
      {
        className: "bg-muted/50 relative z-10 mt-1 flex size-12 shrink-0 items-center justify-center overflow-hidden rounded-full",
        "aria-hidden": true,
        children: exp.logo ? /* @__PURE__ */ jsx("img", { src: exp.logo, alt: "", className: "size-full object-contain bg-white" }) : /* @__PURE__ */ jsx(Building2, { className: "text-accent size-6", strokeWidth: 1.5 })
      }
    ),
    /* @__PURE__ */ jsxs("div", { className: "flex min-w-0 flex-1 flex-col gap-1 pb-2", children: [
      /* @__PURE__ */ jsx("div", { className: "flex flex-wrap items-center justify-between gap-2", children: /* @__PURE__ */ jsx("h3", { className: "font-bold", children: exp.role }) }),
      /* @__PURE__ */ jsx("p", { className: "text-muted-foreground", children: exp.company }),
      /* @__PURE__ */ jsxs("p", { className: "text-muted-foreground text-sm", children: [
        exp.duration,
        " · ",
        exp.location
      ] }),
      /* @__PURE__ */ jsx("p", { className: "text-muted-foreground mt-2 text-sm leading-relaxed", children: exp.description }),
      exp.technologies && exp.technologies.length > 0 && /* @__PURE__ */ jsx("div", { className: "mt-3 flex flex-wrap gap-2", children: exp.technologies.map((tech) => /* @__PURE__ */ jsxs(
        "span",
        {
          className: "bg-muted inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs",
          children: [
            /* @__PURE__ */ jsx(TechIcon, { name: tech }),
            tech
          ]
        },
        tech
      )) })
    ] })
  ] });
};
function ExperienceTimeline({ experiences }) {
  const [expanded, setExpanded] = useState(false);
  const initial = experiences.slice(0, INITIAL_COUNT);
  const rest = experiences.slice(INITIAL_COUNT);
  const hasMore = rest.length > 0;
  return /* @__PURE__ */ jsxs("section", { className: "mt-16", children: [
    /* @__PURE__ */ jsxs("h2", { className: "text-5xl font-bold", children: [
      "Experience",
      /* @__PURE__ */ jsx("span", { className: "text-accent", children: "." })
    ] }),
    /* @__PURE__ */ jsxs("p", { className: "text-muted-foreground mb-6 text-2xl", children: [
      "Where I've",
      " ",
      /* @__PURE__ */ jsx("span", { className: "text-foreground decoration-accent font-serif italic underline underline-offset-4", children: "Worked" }),
      " ",
      "so far."
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "relative", children: [
      /* @__PURE__ */ jsx(
        "div",
        {
          className: "bg-border absolute top-2 bottom-2 left-6 w-px",
          "aria-hidden": true
        }
      ),
      /* @__PURE__ */ jsxs("ul", { className: "flex flex-col gap-8", children: [
        initial.map((exp, i) => /* @__PURE__ */ jsx(ExperienceItem, { exp }, `${exp.company}-${exp.role}-${i}`)),
        /* @__PURE__ */ jsx(AnimatePresence, { initial: false, children: expanded && /* @__PURE__ */ jsx(
          motion.div,
          {
            initial: { height: 0, opacity: 0 },
            animate: { height: "auto", opacity: 1 },
            exit: { height: 0, opacity: 0 },
            transition: { duration: 0.35, ease: [0.4, 0, 0.2, 1] },
            className: "flex flex-col gap-8 overflow-hidden",
            children: rest.map((exp, i) => /* @__PURE__ */ jsx(
              ExperienceItem,
              {
                exp
              },
              `${exp.company}-${exp.role}-${i}`
            ))
          }
        ) })
      ] }),
      hasMore && /* @__PURE__ */ jsx("div", { className: "mt-6 flex justify-center", children: /* @__PURE__ */ jsxs(
        "button",
        {
          type: "button",
          onClick: () => setExpanded(!expanded),
          className: "text-muted-foreground hover:text-foreground group inline-flex items-center gap-2 text-sm transition-colors",
          children: [
            expanded ? "Show less" : `See ${rest.length} more`,
            /* @__PURE__ */ jsx(
              motion.span,
              {
                animate: { rotate: expanded ? 180 : 0 },
                transition: { duration: 0.25 },
                children: "▼"
              }
            )
          ]
        }
      ) })
    ] })
  ] });
}

const EXPERIENCES = [
  {
    role: "Losgistic",
    company: "Company A",
    duration: "March 2026 - Present",
    location: "Remote",
    description: "Responsible for the logistic and transportation of goods and services.",
    logo: "/static/coffee.png",
    technologies: ["Brain"]
  },
  {
    role: "Software Engineer",
    company: "New Harbor",
    duration: "Sep 2024 - May 2025",
    location: "Remote",
    description: "Building a cybersecurity platform. Full-stack work with modern Vue ecosystem.",
    logo: "/experience/newharbor_logo.jpg",
    technologies: [
      "TypeScript",
      "Nuxt",
      "Vue",
      "Supabase",
      "UX",
      "Tailwind CSS"
    ]
  },
  {
    role: "Lead Engineer",
    company: "Cyber Clinic",
    duration: "Feb 2024 - Dec 2025",
    location: "Las Vegas, NV",
    description: "Handling both internal and external projects while leading the software development team. Using PHP, Bootstrap, Microsoft Teams, etc.",
    logo: "/experience/cyberclinic.png",
    technologies: [
      "PHP",
      "Bootstrap",
      "Linux",
      "Cloudflare",
      "Microsoft Teams"
    ]
  },
  {
    role: "Software Engineer I",
    company: "DecentRE Labs",
    duration: "Jan 2023 - Oct 2024",
    location: "Remote",
    description: "Developed and maintained 4 production software products at DecentRE Labs, owning UX/UI, API integrations, and backend data ingestion/export pipelines end-to-end.",
    logo: "/experience/decentrepx.png",
    technologies: [
      "TypeScript",
      "React",
      "Zapier",
      "Next.js",
      "Express",
      "MongoDB",
      "Docker"
    ]
  },
  {
    role: "Software Engineer Intern",
    company: "DecentRE Labs",
    duration: "Dec 2022 - Jun 2023",
    location: "Hybrid",
    description: "Developed and maintained an online auction platform for residential real estate.",
    logo: "/experience/decentrepx.png",
    technologies: [
      "TypeScript",
      "React",
      "Zapier",
      "Firebase",
      "Blockchain",
      "Python",
      "Vite"
    ]
  },
  // {
  //   role: 'President',
  //   company: 'UNLV Association for Computing Machinery',
  //   duration: '2025',
  //   location: 'Las Vegas, NV',
  //   description:
  //     'Leadership, project management, campus outreach. Leading the ACM chapter.',
  // },
  {
    role: "Teaching Assistant",
    company: "University of Nevada, Las Vegas",
    duration: "2025",
    location: "Las Vegas, NV",
    description: "OOP Course Assistant (C++, Java, Python); graded assignments and provided support during lab sessions and office hours.",
    logo: "/experience/unlv.jpg",
    technologies: ["C++", "Python", "Java", "Linux", "Ubuntu"]
  },
  {
    role: "Undergraduate Tutor",
    company: "University of Nevada, Las Vegas",
    duration: "2025",
    location: "Las Vegas, NV",
    description: "Provided tutoring services for faculty and students with various computer science topics.",
    logo: "/experience/unlv.jpg",
    technologies: [
      "C/C++",
      "Python",
      "Java",
      "Rust",
      "JavaScript",
      "HTML",
      "CSS",
      "Linux"
    ]
  },
  {
    role: "Undergraduate Research Assistant",
    company: "IIS Lab, University of Nevada, Las Vegas",
    duration: "2025",
    location: "Las Vegas, NV",
    description: "Helped with research on deep learning and generative AI in cybersecurity.",
    logo: "/experience/iislab.png",
    technologies: ["Python", "PyTorch", "TensorFlow", "Keras"]
  }
];

const $$Index = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "class": "max-w-3xl" }, { "default": ($$result2) => renderTemplate`  ${renderComponent($$result2, "AboutPageTitle", AboutPageTitle, { "client:load": true, "client:component-hydration": "load", "client:component-path": "@/components/about/AboutPageTitle", "client:component-export": "default" }, { "default": ($$result3) => renderTemplate` ${renderComponent($$result3, "Breadcrumbs", $$Breadcrumbs, { "items": [{ label: "About", icon: "lucide:info" }] })} ` })} ${renderComponent($$result2, "AboutHero", $$AboutHero, {})} ${renderComponent($$result2, "AboutSections", $$AboutSections, {})} ${renderComponent($$result2, "ExperienceTimeline", ExperienceTimeline, { "client:load": true, "experiences": EXPERIENCES, "client:component-hydration": "load", "client:component-path": "@/components/home/ExperienceTimeline", "client:component-export": "ExperienceTimeline" })} ${renderComponent($$result2, "SpinMonika", SpinMonika, { "client:load": true, "client:component-hydration": "load", "client:component-path": "@/components/about/SpinMonika", "client:component-export": "SpinMonika" })} `, "head": ($$result2) => renderTemplate`${renderComponent($$result2, "PageHead", $$PageHead, { "slot": "head", "title": "About" })}` })}`;
}, "/home/blank_dreams/code/blog/src/pages/about/index.astro", void 0);

const $$file = "/home/blank_dreams/code/blog/src/pages/about/index.astro";
const $$url = "/about";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
