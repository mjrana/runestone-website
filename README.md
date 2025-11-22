# Runestone Intelligence · Next.js + Sanity Starter

This is a minimal, production-oriented starter for:

- Next.js (App Router, TypeScript, Tailwind)
- Sanity CMS (your schema bundle goes in `/sanity/schemas`)
- Server Components that fetch content via GROQ
- Basic pages: Home, Services, Service detail, Blog, Blog post, Contact

## 1. Setup

1. Make sure you have created your Sanity project and added the schema directory we generated earlier.
2. In this project, create a `.env.local` file:

```bash
NEXT_PUBLIC_SANITY_PROJECT_ID=yourProjectId
NEXT_PUBLIC_SANITY_DATASET=production
SANITY_API_TOKEN=optionalIfYouNeedWrite
```

3. Install dependencies:

```bash
npm install
```

4. Run dev server:

```bash
npm run dev
```

The homepage will try to fetch the `homePage` document from Sanity, plus services and blog posts.

## 2. Connect schemas

In your Sanity project (`sanity` folder), point `sanity.config.ts` schema to the schema bundle we exported earlier (`schemas/index.ts`).

After that, create:

- One `siteSettings` doc
- One `navigation` doc
- One `homePage` doc
- Some `service` docs
- Some `blogPost` docs

## 3. Next steps

- Wire metrics, logoCloud, FAQ and hero variants properly on the frontend
- Add language switching and full i18n routing
- Deploy to Firebase Hosting, Vercel or Cloud Run with your preferred pipeline
