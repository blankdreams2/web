import { d as createAstro, c as createComponent, m as maybeRenderHead, a as renderTemplate, b as addAttribute, r as renderComponent } from '../chunks/astro/server_v3yWdH_B.mjs';
import { $ as $$Layout, a as $$Breadcrumbs } from '../chunks/Layout_CfgLFcEj.mjs';
import 'clsx';
import { jsx, jsxs } from 'react/jsx-runtime';
import { OrbitControls, useGLTF, Center } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import { Suspense } from 'react';
import { $ as $$PageTitle } from '../chunks/PageTitle_CfOsVEq7.mjs';
import { $ as $$PageHead } from '../chunks/PageHead_DQNRM4qn.mjs';
import { s as supabase } from '../chunks/supabase_zIeUbVyh.mjs';
export { renderers } from '../renderers.mjs';

const $$Astro$1 = createAstro("https://vankythien.dev");
const $$Guestbook = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Guestbook;
  const { messages, error } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="flex flex-col gap-6"> <form action="/api/guestbook" method="post" class="flex flex-col gap-3"> <div class="flex flex-col gap-2 sm:flex-row sm:gap-2"> <input type="text" name="name" placeholder="Name (optional)" maxlength="100" class="border-border bg-background placeholder:text-muted-foreground focus:border-ring focus:ring-ring/20 flex-1 rounded-md border px-3 py-2 text-sm outline-none focus:ring-2"> <input type="email" name="email" placeholder="Email (optional)" maxlength="255" class="border-border bg-background placeholder:text-muted-foreground focus:border-ring focus:ring-ring/20 flex-1 rounded-md border px-3 py-2 text-sm outline-none focus:ring-2"> </div> <div class="flex gap-2"> <input type="text" name="message" placeholder="Leave a message..." maxlength="500" required class="border-border bg-background placeholder:text-muted-foreground focus:border-ring focus:ring-ring/20 min-h-14 flex-1 rounded-md border px-3 py-3 text-sm outline-none focus:ring-2"> <button type="submit" class="bg-primary text-primary-foreground hover:bg-primary/90 inline-flex h-9 shrink-0 items-center justify-center rounded-md px-4 text-sm font-medium transition-colors">
Post
</button> </div> </form> ${error && renderTemplate`<p class="text-destructive text-sm">${decodeURIComponent(error)}</p>`} ${!messages?.length ? renderTemplate`<p class="text-muted-foreground text-sm">No messages yet. Be the first!</p>` : renderTemplate`<ul class="flex flex-col gap-3"> ${messages.map((msg) => renderTemplate`<li class="border-border bg-muted/30 rounded-lg border px-4 py-3 text-sm"> ${(msg.name || msg.email) && renderTemplate`<p class="font-display text-accent mb-1 text-xs font-medium"> ${msg.name} ${msg.name && msg.email && " \xB7 "}  </p>`} <p class="text-foreground">${msg.message}</p> <time class="text-muted-foreground mt-1 block text-right text-xs"${addAttribute(msg.created_at, "datetime")}> ${new Date(msg.created_at).toLocaleString(void 0, {
    dateStyle: "medium",
    timeStyle: "short"
  })} </time> </li>`)} </ul>`} </div>`;
}, "/home/blank_dreams/code/blog/src/components/guestbook/Guestbook.astro", void 0);

function MailboxModel() {
  const { scene } = useGLTF("/3d/mailbox.glb");
  return /* @__PURE__ */ jsx(Center, { children: /* @__PURE__ */ jsx("primitive", { object: scene, scale: 0.75 }) });
}
function SpinMail() {
  return /* @__PURE__ */ jsx("section", { className: "flex flex-col items-center py-12", children: /* @__PURE__ */ jsxs("div", { className: "bg-muted/30 relative h-64 w-full max-w-md rounded-xl border dark:bg-neutral-900/50", children: [
    /* @__PURE__ */ jsx("span", { className: "font-editorial text-muted-foreground absolute bottom-2 left-3 text-sm", children: "drop a letter" }),
    /* @__PURE__ */ jsxs(
      Canvas,
      {
        camera: { position: [3, 1, 3], fov: 50 },
        gl: { antialias: true, alpha: true },
        className: "size-full rounded-xl",
        children: [
          /* @__PURE__ */ jsx("ambientLight", { intensity: 1 }),
          /* @__PURE__ */ jsx("directionalLight", { position: [5, 5, 5], intensity: 1.5 }),
          /* @__PURE__ */ jsx(Suspense, { fallback: null, children: /* @__PURE__ */ jsx(MailboxModel, {}) }),
          /* @__PURE__ */ jsx(OrbitControls, { enableZoom: false, enablePan: false })
        ]
      }
    )
  ] }) });
}

const $$Astro = createAstro("https://vankythien.dev");
const prerender = false;
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  const { data: messages } = await supabase.from("guestbook").select("id, message, created_at, name, email").order("created_at", { ascending: false }).limit(100);
  const error = Astro2.url.searchParams.get("error");
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "class": "max-w-2xl" }, { "default": async ($$result2) => renderTemplate`  ${renderComponent($$result2, "PageTitle", $$PageTitle, { "titleJP": "\u30BA\u30E9\u3058\u3083\u306A\u3044\uFF01\u6842\u3060\uFF01" }, { "breadcrumbs": async ($$result3) => renderTemplate`${renderComponent($$result3, "Breadcrumbs", $$Breadcrumbs, { "slot": "breadcrumbs", "items": [{ label: "Guestbook", icon: "lucide:book-open" }] })}` })} ${renderComponent($$result2, "Guestbook", $$Guestbook, { "messages": messages ?? [], "error": error })} ${renderComponent($$result2, "SpinMail", SpinMail, { "client:load": true, "client:component-hydration": "load", "client:component-path": "@/components/guestbook/SpinMail", "client:component-export": "SpinMail" })} `, "head": async ($$result2) => renderTemplate`${renderComponent($$result2, "PageHead", $$PageHead, { "slot": "head", "title": "\u30BA\u30E9\u3058\u3083\u306A\u3044\uFF01\u6842\u3060\uFF01" })}` })}`;
}, "/home/blank_dreams/code/blog/src/pages/guestbook/index.astro", void 0);

const $$file = "/home/blank_dreams/code/blog/src/pages/guestbook/index.astro";
const $$url = "/guestbook";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  prerender,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
