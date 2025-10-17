import { useMemo } from "react";
import { useQuery } from "@tanstack/react-query";
import SEO from "@/components/SEO";
import { journalUrl } from "@/lib/journal";
import type { JournalFeedEntry, JournalFeedResponse } from "@/types/journal";

const CATEGORY_LABELS: Record<string, string> = {
  mind: "Mind",
};

function formatDate(value: string) {
  const date = new Date(value);
  if (Number.isNaN(date.getTime())) return value;
  return date.toLocaleDateString("en-GB", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });
}

export default function TheMindExplored() {
  const { data, isLoading, isError, error } = useQuery<JournalFeedResponse, Error>({
    queryKey: ["journal-feed"],
    queryFn: async () => {
      const response = await fetch(journalUrl("/api/posts.json"));
      if (!response.ok) {
        throw new Error(`Failed to load journal feed (${response.status})`);
      }
      return (await response.json()) as JournalFeedResponse;
    },
  });

  const posts = useMemo(() => {
    const items = data?.posts ?? [];
    return items
      .filter((post) => post.categories.some((category) => category.toLowerCase() === "mind"))
      .sort((a, b) => (a.date < b.date ? 1 : -1));
  }, [data?.posts]);

  return (
    <>
      <SEO
        title="The Mind, Explored."
        description="Doctor-led insights into mindset, performance, and transformation from The Aevia Mind team."
      />
      <div className="bg-secondary min-h-screen py-16">
        <div className="max-w-6xl mx-auto px-4 md:px-6">
          <header className="mb-12 space-y-4">
            <p className="uppercase tracking-[0.3em] text-xs text-foreground/50">Aevia Mind Journal</p>
            <h1 className="text-4xl lg:text-5xl font-serif font-bold mb-6 leading-tight">The Mind, <span className="text-primary">Explored.</span></h1>
            <p className="text-lg md:text-xl text-foreground/70 max-w-3xl">
              Articles for ambitious people pursuing clarity, consistency, and deep-rooted change. Curated by The Aevia Mind team.
            </p>
          </header>

          {isLoading && (
            <div className="grid gap-8 md:grid-cols-2">
              {Array.from({ length: 4 }).map((_, index) => (
                <div key={index} className="rounded-3xl bg-white/60 border border-foreground/10 shadow-sm p-6 animate-pulse">
                  <div className="h-48 w-full rounded-2xl bg-foreground/10 mb-4" />
                  <div className="h-4 w-24 bg-foreground/10 rounded-full mb-3" />
                  <div className="h-6 w-3/4 bg-foreground/15 rounded mb-2" />
                  <div className="h-6 w-2/3 bg-foreground/10 rounded" />
                </div>
              ))}
            </div>
          )}

          {isError && (
            <div className="rounded-2xl border border-red-200 bg-red-50 text-red-900 p-6">
              <p className="font-semibold">We couldn’t load the latest Mind articles.</p>
              <p className="text-sm mt-2">{error.message}</p>
            </div>
          )}

          {!isLoading && !isError && posts.length === 0 && (
            <div className="rounded-2xl border border-foreground/10 bg-white p-8">
              <p className="text-lg font-semibold text-foreground">Mind articles are coming soon.</p>
              <p className="text-foreground/70 mt-2">We’re preparing new insights—check back shortly.</p>
            </div>
          )}

          {!isLoading && !isError && posts.length > 0 && (
            <div className="grid gap-10 md:grid-cols-2">
              {posts.map((post: JournalFeedEntry) => {
                const href = journalUrl(post.minimal_url || post.url);
                return (
                  <article key={post.slug} className="rounded-3xl overflow-hidden border border-foreground/10 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-lg duration-300">
                    {post.cover && (
                      <a href={href} className="block">
                        <img
                          src={journalUrl(post.cover)}
                          alt={post.hero_alt || post.title}
                          className="h-56 w-full object-cover"
                          loading="lazy"
                        />
                      </a>
                    )}
                    <div className="p-6 space-y-4">
                      <div className="flex items-center gap-2 flex-wrap text-xs uppercase tracking-[0.2em] text-primary">
                        {post.categories.slice(0, 2).map((category) => (
                          <span key={category}>{CATEGORY_LABELS[category] ?? category}</span>
                        ))}
                      </div>
                      <div className="space-y-2">
                        <h2 className="text-2xl font-serif font-semibold text-foreground">
                          <a href={href} className="hover:text-primary transition">
                            {post.title}
                          </a>
                        </h2>
                        {post.excerpt && <p className="text-foreground/70 leading-relaxed">{post.excerpt}</p>}
                      </div>
                      <div className="flex items-center justify-between text-sm text-foreground/60">
                        <span>{formatDate(post.date)}</span>
                        {post.reading_time && <span>{post.reading_time} min read</span>}
                      </div>
                    </div>
                  </article>
                );
              })}
            </div>
          )}
        </div>
      </div>
    </>
  );
}
