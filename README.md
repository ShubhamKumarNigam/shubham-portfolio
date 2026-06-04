# Dr. Shubham Kumar Nigam – Academic Portfolio

A premium, modern, interactive personal academic website built with Next.js, TypeScript, Tailwind CSS, and Framer Motion.

## Setup

```bash
npm install
npm run dev
```

The site runs at `http://localhost:3000`.

## Build & Lint

```bash
npm run build
npm run lint
```

## Link Validation

```bash
npm run check-links
```

This script scans `src/data/profile.ts` for empty links, `href="#"`, malformed URLs, placeholder links, and duplicates.

## Profile Photo

Place your profile photo at:

```
public/images/shubham-profile.jpg
```

If the image is missing, the UI shows a beautiful fallback avatar with initials "SKN".

## Updating Content

All website content lives in:

```
src/data/profile.ts
```

- **Publications**: Add to the `publications` array with real links only.
- **Projects**: Add to the `projects` array.
- **Working Projects**: Add to the `workingProjects` array.
- **Datasets & Models**: Add to the `datasetsModels` array.
- **Talks**: Add to the `talks` array.
- **Achievements**: Add to the `achievements` array.
- **Teaching**: Add to the `teaching` array.
- **Research Areas**: Add to the `researchAreas` array.

Only include link buttons when real URLs are available. For recently accepted or under-review work without public links, omit the link field—the UI will not show a button.

## Publication Links

When adding publication links, use verified URLs:

- **ACL Anthology**: `https://aclanthology.org/YYYY.venue-id/`
- **arXiv**: `https://arxiv.org/abs/XXXX.XXXXX`
- **GitHub**: Repository URL
- **HuggingFace**: Dataset or model URL
- **Proceedings**: Conference proceedings page

Run `npm run check-links` after adding new links to catch any issues.

## Email Integration

The contact form supports Resend (preferred) or EmailJS.

1. Copy `.env.example` to `.env.local`:
   ```bash
   cp .env.example .env.local
   ```
2. Fill in your API keys.
3. Update `src/app/api/contact/route.ts` to use your chosen provider.

## Deployment

### Vercel

1. Push to GitHub.
2. Import into Vercel.
3. Set environment variables in Vercel dashboard.
4. Deploy.

### Custom Domain

1. In Vercel project settings, go to **Domains**.
2. Add your custom domain (e.g., `shubhamkumarnigam.com`).
3. Update DNS records as instructed.
4. Update `metadata` in `src/app/layout.tsx` and `sitemap.ts` with your domain.

## Project Structure

```
src/
  app/              # Next.js App Router pages
  components/       # Reusable React components
  data/
    profile.ts      # Central data file
  lib/
    utils.ts        # cn() utility
    linkValidator.ts # Link validation script
  styles/
    globals.css     # Tailwind + custom styles
public/
  images/
    shubham-profile.jpg
```

## License

MIT
