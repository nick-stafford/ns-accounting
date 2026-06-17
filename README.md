# Denver CPA Website

A modern, fast, single-page marketing site for a Denver CPA firm.
Built with **Next.js 16 + Tailwind v4 + TypeScript**.

## View it locally

```bash
npm run dev
```

Then open http://localhost:3000

## ✏️ Edit the content (the important part)

**Everything you'd want to change lives in ONE file:**

```
src/config/site.ts
```

Firm name, CPA name, phone, email, Calendly link, services, stats,
testimonials, FAQ — all there. Items marked `// ⚠️` are placeholders to
replace with the real details. You don't need to touch any other code.

### To connect the booking button

1. Set up a free event at [calendly.com](https://calendly.com)
2. Copy your event link
3. Paste it into `calendlyUrl` in `src/config/site.ts`

Every "Book a consultation" button on the site uses it automatically.

### To add the headshot

1. Drop the photo in the `public/` folder (e.g. `public/headshot.jpg`)
2. In `src/components/About.tsx`, replace the placeholder block with:
   `<img src="/headshot.jpg" alt="..." className="h-full w-full object-cover" />`

## 🎨 Brand colors

Defined in `src/app/globals.css` under `@theme` — change `--color-forest`
and `--color-lime` to rebrand the whole site instantly.

## 🚀 Deploy (free)

The site is fully static. Easiest path:

1. Push this folder to a GitHub repo
2. Go to [vercel.com](https://vercel.com), "Import Project", pick the repo
3. Click Deploy — done. Add the custom domain in Vercel's dashboard.

## Structure

```
src/
  config/site.ts        ← ALL content lives here
  app/
    layout.tsx          ← fonts, SEO metadata
    page.tsx            ← assembles the sections
    globals.css         ← design tokens / brand colors
  components/           ← Hero, Services, Workflow, About, FAQ, etc.
```
