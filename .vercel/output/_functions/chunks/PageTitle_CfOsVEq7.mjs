import { d as createAstro, c as createComponent, m as maybeRenderHead, a as renderTemplate, f as renderSlot } from './astro/server_v3yWdH_B.mjs';
import 'clsx';

const $$Astro = createAstro("https://vankythien.dev");
const $$PageTitle = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$PageTitle;
  const { titleJP, subTitle } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="mt-3 mb-6 text-center"> <h2 class="text-foreground text-xl font-bold"> ${titleJP ?? ""} </h2> ${subTitle && renderTemplate`<p class="text-muted-foreground mt-1 font-sans">${subTitle}</p>`} <div class="mt-2"> ${renderSlot($$result, $$slots["breadcrumbs"])} </div> </div>`;
}, "/home/blank_dreams/code/blog/src/components/home/PageTitle.astro", void 0);

export { $$PageTitle as $ };
