import Link from "next/link";
import { sanityClient } from "@/lib/sanity.client";
import { BLOG_LIST_QUERY } from "@/lib/queries";
import { pickLocale } from "@/lib/localization";

export default async function BlogPage() {
  const posts = await sanityClient.fetch(BLOG_LIST_QUERY);

  return (
    <div className="space-y-6">
      <header className="space-y-2">
        <h1 className="text-2xl font-semibold text-slate-50">Insights</h1>
        <p className="text-sm text-slate-300">
          Essays and notes on AI strategy, governance, nearshore delivery and
          real-world implementations.
        </p>
      </header>

      <div className="space-y-4">
        {posts?.map((post: any) => (
          <Link
            key={post._id}
            href={`/blog/${post.slug.current}`}
            className="block rounded-2xl border border-slate-800 bg-slate-900/40 p-4 hover:border-runestone-teal/60"
          >
            <div className="text-xs text-slate-400">
              {post.publishedAt
                ? new Date(post.publishedAt).toLocaleDateString()
                : "Draft"}
            </div>
            <h2 className="mt-1 text-lg font-semibold text-slate-50">
              {pickLocale(post.title)}
            </h2>
            <p className="mt-1 text-xs text-slate-300">
              {pickLocale(post.excerpt)}
            </p>
            {post.authorName && (
              <div className="mt-2 text-[11px] text-slate-400">
                By {post.authorName}
              </div>
            )}
          </Link>
        ))}
      </div>
    </div>
  );
}
