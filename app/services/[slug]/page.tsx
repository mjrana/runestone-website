import { sanityClient } from "@/lib/sanity.client";
import { SERVICE_QUERY } from "@/lib/queries";
import { pickLocale } from "@/lib/localization";
import { RichTextRenderer } from "@/components/RichTextRenderer";

interface Props {
  params: { slug: string };
}

export default async function ServiceDetailPage({ params }: Props) {
  const service = await sanityClient.fetch(SERVICE_QUERY, {
    slug: params.slug
  });

  if (!service) {
    return <div className="text-sm text-slate-400">Service not found.</div>;
  }

  return (
    <article className="space-y-6">
      <header className="space-y-2">
        <p className="text-xs uppercase tracking-[0.2em] text-runestone-teal">
          {service.category}
        </p>
        <h1 className="text-2xl font-semibold text-slate-50">
          {pickLocale(service.name)}
        </h1>
      </header>
      <RichTextRenderer value={service.body} />
    </article>
  );
}
