import { sanityClient } from "@/lib/sanity.client";
import { BLOG_POST_QUERY } from "@/lib/queries";
import { pickLocale } from "@/lib/localization";
import { RichTextRenderer } from "@/components/RichTextRenderer";

interface Props {
  params: { slug: string };
}

export default async function BlogPostPage({ params }: Props) {
  const post = await sanityClient.fetch(BLOG_POST_QUERY, {
    slug: params.slug
  });

  if (!post) {
    return <div className="text-sm text-slate-400">Article not found.</div>;
  }

  const title = pickLocale(post.title);
  const excerpt = pickLocale(post.excerpt);

  return (
    <article className="space-y-6">
      <header className="space-y-2">
        <div className="text-xs text-slate-400">
          {post.publishedAt
            ? new Date(post.publishedAt).toLocaleDateString()
            : "Draft"}
        </div>
        <h1 className="text-2xl font-semibold text-slate-50">{title}</h1>
        {excerpt && (
          <p className="text-sm text-slate-300 max-w-2xl">{excerpt}</p>
        )}
        {post.authorName && (
          <div className="text-xs text-slate-400">
            By {post.authorName}
          </div>
        )}
      </header>
      <RichTextRenderer value={post.body} />
    </article>
  );
}
