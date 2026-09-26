import Link from "next/link";

import BlogCard from "@/components/blog/BlogCard";
import { getBlogPosts } from "@/lib/postora";
import Image from "next/image";

type Props = {
  searchParams: Promise<{
    page?: string;
    search?: string;
  }>;
};

export default async function BlogPage({ searchParams }: Props) {
  const params = await searchParams;

  const page = Math.max(1, Number.parseInt(params.page ?? "1", 10) || 1);

  const search = params.search?.trim() ?? "";

  const { posts, pagination } = await getBlogPosts({
    page,
    limit: 10,
    search: search || undefined,
  });

  const featuredPost = posts.find((post) => post.isFeatured) ?? posts[0];

  const latestPosts = featuredPost
    ? posts.filter((post) => post._id !== featuredPost._id)
    : posts;

  return (
    <main className="overflow-hidden bg-[#070B12]">
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-[#FFFFFF0D]">
        <div className="pointer-events-none absolute -top-32 right-[-100px] h-[420px] w-[420px] rounded-full bg-[#A0D14F12] blur-[120px]" />

        <div className="pointer-events-none absolute bottom-[-180px] left-[-120px] h-[360px] w-[360px] rounded-full bg-[#FFED0010] blur-[120px]" />

        <div className="relative z-10 mx-auto px-[clamp(1rem,4vw,5rem)] py-[clamp(100px,11vw,170px)]">
          <div className="max-w-[950px]">
            <p className="font-jetbrains text-[10px] font-medium tracking-[1.8px] text-[#A0D14F] uppercase">
              DigiGrowtherz / Insights
            </p>

            <h1 className="font-space mt-6 text-[clamp(3rem,7vw,6.5rem)] leading-[0.98] font-semibold tracking-[-0.055em] text-[#DFE2ED]">
              Ideas that drive{" "}
              <span className="text-[#A0D14F]">digital growth.</span>
            </h1>

            <p className="font-inter mt-8 max-w-[720px] text-[clamp(1rem,1.5vw,1.15rem)] leading-[1.8] text-[#DFE2ED99]">
              Practical insights on AI automation, custom development, digital
              marketing, eCommerce, and the technologies helping modern
              businesses move forward.
            </p>
          </div>

          {/* Search */}
          <form
            action="/blog"
            method="GET"
            className="mt-10 flex w-full max-w-[620px]"
          >
            <input
              type="search"
              name="search"
              defaultValue={search}
              placeholder="Search insights..."
              className="font-inter h-12 min-w-0 flex-1 border border-[#FFFFFF12] bg-[#0F141B] px-4 text-[13px] text-[#DFE2ED] outline-none placeholder:text-[#DFE2ED44] focus:border-[#A0D14F55]"
            />

            <button
              type="submit"
              className="font-jetbrains h-12 cursor-pointer bg-[#A0D14F] px-6 text-[12px] font-bold tracking-[1px] text-[#070B12] uppercase transition-transform hover:scale-[1.01]"
            >
              Search
            </button>
          </form>
        </div>
      </section>

      {/* Featured */}
      {featuredPost && (
        <section className="bg-[#0F141B] px-[clamp(1rem,4vw,5rem)] py-[clamp(70px,8vw,120px)]">
          <div className="mx-auto">
            <div className="mb-10">
              <p className="font-jetbrains text-[10px] tracking-[1.6px] text-[#DFE2ED66] uppercase">
                Featured Insight
              </p>

              <h2 className="font-space mt-3 text-[clamp(2rem,4vw,3.5rem)] font-semibold tracking-[-0.04em] text-[#DFE2ED]">
                Worth your attention.
              </h2>
            </div>

            <article className="group overflow-hidden border border-[#FFFFFF0D] bg-[#181C23]">
              <div className="grid lg:grid-cols-[1.25fr_0.75fr]">
                <Link
                  href={`/blog/${featuredPost.slug}`}
                  className="relative block min-h-[360px] overflow-hidden bg-[#10161D] lg:min-h-[600px]"
                >
                  {featuredPost.featuredImage?.url ? (
                    <Image
                      src={featuredPost.featuredImage.url}
                      alt={featuredPost.featuredImage.alt || featuredPost.title}
                      fill
                      sizes="(max-width: 1024px) 100vw, 65vw"
                      className="object-cover transition-transform duration-700 group-hover:scale-[1.025]"
                    />
                  ) : (
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,#A0D14F18,transparent_35%),#181C23]" />
                  )}

                  <div className="absolute inset-0 bg-gradient-to-t from-[#070B12]/60 via-transparent to-transparent" />
                </Link>

                <div className="flex flex-col justify-between p-[clamp(1.5rem,4vw,3.5rem)]">
                  <div>
                    <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
                      {featuredPost.categoryId?.name && (
                        <>
                          <span className="font-jetbrains text-[12px] font-bold tracking-[1.2px] text-[#A0D14F] uppercase">
                            {featuredPost.categoryId.name}
                          </span>

                          <span className="h-1 w-1 rounded-full bg-[#DFE2ED33]" />
                        </>
                      )}

                      {featuredPost.readingTime && (
                        <span className="font-jetbrains text-[12px] tracking-[1px] text-[#DFE2ED66] uppercase">
                          {featuredPost.readingTime} min read
                        </span>
                      )}
                    </div>

                    <h2 className="font-space mt-7 text-[clamp(2rem,4vw,3rem)] leading-[1.08] font-semibold tracking-[-0.045em] text-[#DFE2ED]">
                      {featuredPost.title}
                    </h2>

                    {featuredPost.excerpt && (
                      <p className="font-inter mt-7 text-[15px] leading-8 text-[#DFE2ED99]">
                        {featuredPost.excerpt}
                      </p>
                    )}
                  </div>

                  <div className="mt-12">
                    <Link
                      href={`/blog/${featuredPost.slug}`}
                      className="font-jetbrains inline-flex h-[54px] items-center gap-4 bg-[#A0D14F] px-7 text-[14px] font-bold tracking-[1px] text-[#070B12] uppercase transition-transform duration-300 hover:scale-[1.02]"
                    >
                      Read Full Article
                      <span className="text-[15px]">→</span>
                    </Link>
                  </div>
                </div>
              </div>
            </article>
          </div>
        </section>
      )}

      {/* Latest */}
      <section className="bg-[#070B12] px-[clamp(1rem,4vw,5rem)] py-[clamp(70px,8vw,120px)]">
        <div className="mx-auto">
          <div className="mb-12">
            <p className="font-jetbrains text-[14px] tracking-[1.6px] text-[#DFE2ED66] uppercase">
              Latest Insights
            </p>

            <h2 className="font-space mt-3 text-[clamp(2rem,4vw,3.5rem)] font-semibold tracking-[-0.04em] text-[#DFE2ED]">
              Explore our latest thinking.
            </h2>
          </div>

          {latestPosts.length === 0 ? (
            <div className="border border-[#FFFFFF0D] bg-[#0F141B] px-6 py-16 text-center">
              <p className="font-space text-xl text-[#DFE2ED]">
                No insights found.
              </p>

              <p className="font-inter mt-2 text-sm text-[#DFE2ED66]">
                Try another search.
              </p>
            </div>
          ) : (
            <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
              {latestPosts.map((post) => (
                <BlogCard key={post._id} {...post} />
              ))}
            </div>
          )}

          {/* Pagination */}
          {pagination.totalPages > 1 && (
            <div className="mt-12 flex items-center justify-between border-t border-[#FFFFFF0D] pt-6">
              {pagination.hasPreviousPage ? (
                <Link
                  href={{
                    pathname: "/blog",
                    query: {
                      ...(search ? { search } : {}),
                      page: String(page - 1),
                    },
                  }}
                  className="font-jetbrains text-[9px] font-bold tracking-[1px] text-[#DFE2ED99] uppercase transition-colors hover:text-[#A0D14F]"
                >
                  ← Previous
                </Link>
              ) : (
                <span className="font-jetbrains text-[9px] tracking-[1px] text-[#DFE2ED22] uppercase">
                  ← Previous
                </span>
              )}

              <span className="font-jetbrains text-[9px] tracking-[1px] text-[#DFE2ED44] uppercase">
                Page {pagination.page} / {pagination.totalPages}
              </span>

              {pagination.hasNextPage ? (
                <Link
                  href={{
                    pathname: "/blog",
                    query: {
                      ...(search ? { search } : {}),
                      page: String(page + 1),
                    },
                  }}
                  className="font-jetbrains text-[9px] font-bold tracking-[1px] text-[#DFE2ED99] uppercase transition-colors hover:text-[#A0D14F]"
                >
                  Next →
                </Link>
              ) : (
                <span className="font-jetbrains text-[9px] tracking-[1px] text-[#DFE2ED22] uppercase">
                  Next →
                </span>
              )}
            </div>
          )}
        </div>
      </section>
    </main>
  );
}
