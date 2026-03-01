import { s as supabase } from '../../chunks/supabase_zIeUbVyh.mjs';
export { renderers } from '../../renderers.mjs';

const prerender = false;
const POST = async ({ request, redirect }) => {
  const formData = await request.formData();
  const message = formData.get("message")?.toString()?.trim().slice(0, 500);
  const name = formData.get("name")?.toString()?.trim().slice(0, 100) || null;
  const email = formData.get("email")?.toString()?.trim().slice(0, 255) || null;
  if (!message) {
    return redirect("/guestbook?error=Message+required");
  }
  const { error } = await supabase.from("guestbook").insert({ message, name, email });
  if (error) {
    return redirect("/guestbook?error=" + encodeURIComponent(error.message));
  }
  return redirect("/guestbook");
};

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  POST,
  prerender
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
