import { sanityClient } from "@/lib/sanity.client";
import { HOMEPAGE_QUERY } from "@/lib/queries";
import { pickLocale } from "@/lib/localization";
import { RichTextRenderer } from "@/components/RichTextRenderer";

export default async function HomePage() {
  const data = await sanityClient.fetch(HOMEPAGE_QUERY);
  const title = pickLocale(data?.title);

  return (
    <div className="space-y-10">
      <section className="grid gap-8 md:grid-cols-2 md:items-center">
        <div className="space-y-5">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-runestone-teal">
            Dubai · Nordics · Dhaka
          </p>
          <h1 className="text-3xl font-semibold tracking-tight text-slate-50 md:text-4xl">
            {title || "AI, data & governance for organisations that think long-term."}
          </h1>
          <p className="text-sm text-slate-300">
            We help boards, CxOs and product teams design, deploy and govern AI
            solutions that are technically sound, regulation-ready and
            commercially defensible.
          </p>
        </div>
        <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-5 text-xs text-slate-300">
          <p className="font-semibold text-slate-200">
            This page is wired to Sanity.
          </p>
          <p className="mt-2">
            Open the <span className="font-mono text-[11px]">homePage</span>{" "}
            document in Sanity Studio to change the content. Deploy the site to
            Firebase Hosting or Vercel when you are ready.
          </p>
        </div>
      </section>

      {data?.sections && data.sections.length > 0 && (
        <section className="space-y-8">
          <h2 className="text-lg font-semibold text-slate-100">
            Homepage sections from CMS
          </h2>
          <RichTextRenderer
            // For now just render richText sections; you can extend with metrics, logoCloud, etc.
            value={data.sections
              .filter((s: any) => s.kind === "richText")
              .flatMap((s: any) => s.richText || [])}
          />
        </section>
      )}
    </div>
  );
}
