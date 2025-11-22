import Link from "next/link";
import { sanityClient } from "@/lib/sanity.client";
import { SERVICES_QUERY } from "@/lib/queries";
import { pickLocale } from "@/lib/localization";

export default async function ServicesPage() {
  const services = await sanityClient.fetch(SERVICES_QUERY);

  return (
    <div className="space-y-6">
      <header className="space-y-2">
        <h1 className="text-2xl font-semibold text-slate-50">Services</h1>
        <p className="text-sm text-slate-300">
          A focused portfolio of AI, analytics and governance services designed
          around execution and regulatory reality.
        </p>
      </header>

      <div className="grid gap-4 md:grid-cols-2">
        {services?.map((service: any) => (
          <Link
            key={service._id}
            href={`/services/${service.slug.current}`}
            className="group rounded-2xl border border-slate-800 bg-slate-900/40 p-4 hover:border-runestone-teal/60"
          >
            <div className="text-xs uppercase tracking-[0.2em] text-runestone-teal">
              {service.category}
            </div>
            <h2 className="mt-2 text-lg font-semibold text-slate-50">
              {pickLocale(service.name)}
            </h2>
            <p className="mt-2 text-xs text-slate-300">
              {pickLocale(service.shortDescription)}
            </p>
          </Link>
        ))}
      </div>
    </div>
  );
}
