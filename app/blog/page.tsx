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
      <section className="relative overflow-hidden border-b border-[#FFFFFF0D] bg-[#070B12]">
        {/* Ambient glow */}
        <div className="pointer-events-none absolute top-[-180px] right-[-120px] h-[520px] w-[520px] rounded-full bg-[#A0D14F0D] blur-[140px]" />

        {/* Technical grid */}
        <div
          className="pointer-events-none absolute inset-0 opacity-60"
          style={{
            backgroundImage: `
        linear-gradient(to right, #A0D14F08 1px, transparent 1px),
        linear-gradient(to bottom, #A0D14F08 1px, transparent 1px)
      `,
            backgroundSize: "120px 120px",
            maskImage:
              "linear-gradient(to right, transparent 0%, black 40%, black 100%)",
            WebkitMaskImage:
              "linear-gradient(to right, transparent 0%, black 40%, black 100%)",
          }}
        />

        {/* Large diagonal light beam */}
        <div className="pointer-events-none absolute top-[-20%] right-[9%] h-[150%] w-[1px] rotate-[42deg] bg-[#A0D14F40] blur-[1px]" />

        <div className="pointer-events-none absolute top-[-20%] right-[9%] h-[150%] w-[2px] rotate-[42deg] bg-[#A0D14F20] blur-[10px]" />

        {/* Right-side circuit paths */}
        <div className="pointer-events-none absolute inset-y-0 right-0 hidden w-[48%] lg:block">
          {/* Horizontal path */}
          <div className="absolute top-[42%] right-[8%] left-[10%] h-px bg-[#A0D14F18]" />

          <div className="absolute top-[42%] right-[8%] left-[10%] h-px bg-[#A0D14F18] blur-[2px]" />

          {/* Vertical path 1 */}
          <div className="absolute top-[8%] right-[23%] h-[58%] w-px bg-[#A0D14F20]" />

          {/* Vertical path 2 */}
          <div className="absolute top-[18%] right-[7%] h-[72%] w-px bg-[#A0D14F18]" />

          {/* Horizontal upper path */}
          <div className="absolute top-[17%] right-[7%] h-px w-[23%] bg-[#A0D14F18]" />

          {/* Stepped circuit line */}
          <div className="absolute top-[58%] right-[23%] h-px w-[16%] bg-[#A0D14F25]" />

          <div className="absolute top-[58%] right-[7%] h-[26%] w-px bg-[#A0D14F18]" />

          <div className="absolute top-[84%] right-[7%] h-px w-[16%] bg-[#A0D14F18]" />

          {/* Node squares */}
          <div className="absolute top-[16%] right-[23%] h-2 w-2 border border-[#A0D14F99] bg-[#A0D14F25]" />

          <div className="absolute top-[41%] right-[22.5%] h-3 w-3 border border-[#A0D14F88] bg-[#A0D14F30]" />

          <div className="absolute top-[57%] right-[7%] h-3 w-3 border border-[#A0D14F88] bg-[#A0D14F30]" />

          <div className="absolute top-[83%] right-[7%] h-2 w-2 border border-[#A0D14F77] bg-[#A0D14F20]" />

          {/* Glow around important nodes */}
          <div className="absolute top-[39.5%] right-[21.8%] h-5 w-5 rounded-full bg-[#A0D14F20] blur-md" />

          <div className="absolute top-[55%] right-[6.3%] h-5 w-5 rounded-full bg-[#A0D14F16] blur-md" />

          {/* Right diagonal glow source */}
          <div className="absolute top-[0%] right-[-5%] h-[280px] w-[280px] rounded-full bg-[#A0D14F18] blur-[100px]" />

          <div className="absolute top-[0%] right-[2%] h-[180px] w-[180px] rounded-full bg-[#A0D14F12] blur-[80px]" />
        </div>

        {/* Main Content */}
        <div className="relative z-10 mx-auto px-[clamp(1rem,4vw,5rem)] py-[clamp(80px,8vw,125px)]">
          <div className="max-w-[760px]">
            {/* Eyebrow */}
            <p className="font-jetbrains text-[10px] font-medium tracking-[1.8px] text-[#A0D14F] uppercase">
              DigiGrowtherz / Insights
            </p>

            {/* Heading */}
            <h1 className="font-space mt-6 max-w-[720px] text-[clamp(3rem,6vw,6rem)] leading-[0.96] font-semibold tracking-[-0.055em] text-[#DFE2ED]">
              Ideas that drive{" "}
              <span className="text-[#A0D14F]">digital growth.</span>
            </h1>

            {/* Description */}
            <p className="font-inter mt-7 max-w-[680px] text-[clamp(0.95rem,1.3vw,1.1rem)] leading-[1.75] text-[#DFE2ED88]">
              Practical insights on AI automation, custom development, digital
              marketing, eCommerce, and the technologies helping modern
              businesses move forward.
            </p>

            {/* Search */}
            <form
              action="/blog"
              method="GET"
              className="mt-9 flex w-full max-w-[540px]"
            >
              <div className="relative min-w-0 flex-1">
                <svg
                  aria-hidden="true"
                  viewBox="0 0 24 24"
                  className="pointer-events-none absolute top-1/2 left-4 h-4 w-4 -translate-y-1/2 text-[#DFE2ED44]"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                >
                  <circle cx="11" cy="11" r="7" />
                  <path d="m20 20-3.5-3.5" />
                </svg>

                <input
                  type="search"
                  name="search"
                  defaultValue={search}
                  placeholder="Search insights..."
                  className="font-inter h-12 w-full border border-[#FFFFFF12] bg-[#0F141B] pr-4 pl-11 text-[12px] text-[#DFE2ED] outline-none placeholder:text-[#DFE2ED3D] focus:border-[#A0D14F55]"
                />
              </div>

              <button
                type="submit"
                className="font-jetbrains h-12 shrink-0 cursor-pointer bg-[#A0D14F] px-7 text-[10px] font-bold tracking-[1px] text-[#070B12] uppercase transition-all duration-300 hover:bg-[#B3E65E]"
              >
                Search
              </button>
            </form>
          </div>

          {/* Bottom topics */}
          <div className="mt-12 hidden flex-wrap items-center gap-x-6 gap-y-3 md:flex lg:mt-14">
            <span className="font-jetbrains text-[8px] tracking-[1.3px] text-[#DFE2ED44] uppercase">
              AI & Automation
            </span>

            <span className="h-[3px] w-[3px] rounded-full bg-[#A0D14F55]" />

            <span className="font-jetbrains text-[8px] tracking-[1.3px] text-[#DFE2ED44] uppercase">
              Development
            </span>

            <span className="h-[3px] w-[3px] rounded-full bg-[#A0D14F55]" />

            <span className="font-jetbrains text-[8px] tracking-[1.3px] text-[#DFE2ED44] uppercase">
              Marketing
            </span>

            <span className="h-[3px] w-[3px] rounded-full bg-[#A0D14F55]" />

            <span className="font-jetbrains text-[8px] tracking-[1.3px] text-[#DFE2ED44] uppercase">
              eCommerce
            </span>
          </div>
        </div>
      </section>

      {/* Featured */}
      {featuredPost && (
        <section className="bg-[#0F141B] px-[clamp(1rem,4vw,5rem)] py-[clamp(70px,8vw,120px)]">
          <div className="mx-auto">
            {/* Section Heading */}
            <div className="mb-10">
              <p className="font-jetbrains text-[10px] tracking-[1.6px] text-[#DFE2ED66] uppercase">
                Featured Insight
              </p>

              <h2 className="font-space mt-3 text-[clamp(2rem,4vw,3.5rem)] leading-[1] font-semibold tracking-[-0.04em] text-[#DFE2ED]">
                Worth your attention.
              </h2>
            </div>

            {/* Featured Card */}
            <article className="mx-auto max-w-[1800px] overflow-hidden rounded-2xl border border-[#FFFFFF0D] bg-[#070B12]">
              {/* Featured Image */}
              <Link
                href={`/blog/${featuredPost.slug}`}
                className="group relative block px-3 pt-3 sm:px-4 sm:pt-4"
              >
                <div className="relative mx-auto aspect-[5.9/1] w-full max-w-[1800px]">
                  {/* Lime border frame */}
                  <div
                    className="absolute inset-0 bg-[#A0D14F55]"
                    style={{
                      clipPath:
                        "polygon(4.2% 0, 95.8% 0, 100% 15%, 100% 85%, 95.8% 100%, 4.2% 100%, 0 85%, 0 15%)",
                    }}
                  />

                  <div className="relative aspect-[3/1] w-full sm:aspect-[4.5/1] lg:aspect-[5.9/1]">
                    {/* Lime border frame */}
                    <div
                      className="absolute inset-0 bg-[#A0D14F55]"
                      style={{
                        clipPath:
                          "polygon(4.2% 0, 95.8% 0, 100% 15%, 100% 85%, 95.8% 100%, 4.2% 100%, 0 85%, 0 15%)",
                      }}
                    />

                    {/* Image */}
                    <div
                      className="absolute inset-px overflow-hidden bg-[#10161D]"
                      style={{
                        clipPath:
                          "polygon(4.2% 0, 95.8% 0, 100% 15%, 100% 85%, 95.8% 100%, 4.2% 100%, 0 85%, 0 15%)",
                      }}
                    >
                      {featuredPost.featuredImage?.url ? (
                        <Image
                          src={featuredPost.featuredImage.url}
                          alt={
                            featuredPost.featuredImage.alt || featuredPost.title
                          }
                          fill
                          priority
                          sizes="100vw"
                          className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-[1.02]"
                        />
                      ) : (
                        <div className="absolute inset-0 bg-[#10161D]" />
                      )}

                      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#070B12]/20" />
                    </div>
                  </div>

                  {/* Featured Badge */}
                  <div className="absolute top-4 left-[3.6%] z-10 hidden sm:top-5 md:block">
                    <span className="font-jetbrains inline-flex items-center bg-[#A0D14F] px-4 py-[7px] text-[8px] font-bold tracking-[1px] text-[#070B12] uppercase">
                      Featured
                    </span>
                  </div>
                </div>
              </Link>

              {/* Bottom Content */}
              <div className="grid grid-cols-[1.15fr_0.85fr] border-t border-[#FFFFFF0D] max-[767px]:grid-cols-1">
                {/* Left Content */}
                <div className="px-[clamp(1.5rem,4vw,3.5rem)] py-[clamp(1.5rem,3vw,3.5rem)] min-[768px]:border-r min-[768px]:border-[#FFFFFF0D]">
                  {/* Meta */}
                  <div className="flex flex-wrap items-center gap-x-3 gap-y-2">
                    {featuredPost.categoryId?.name && (
                      <>
                        <span className="font-jetbrains text-[9px] font-bold tracking-[1.3px] text-[#A0D14F] uppercase">
                          {featuredPost.categoryId.name}
                        </span>

                        <span className="h-[3px] w-[3px] rounded-full bg-[#DFE2ED33]" />
                      </>
                    )}

                    {featuredPost.publishedAt && (
                      <>
                        <span className="font-jetbrains text-[9px] tracking-[1px] text-[#DFE2ED55] uppercase">
                          {new Date(
                            featuredPost.publishedAt
                          ).toLocaleDateString("en-US", {
                            month: "short",
                            day: "numeric",
                            year: "numeric",
                          })}
                        </span>

                        <span className="h-[3px] w-[3px] rounded-full bg-[#DFE2ED33]" />
                      </>
                    )}

                    {featuredPost.readingTime && (
                      <span className="font-jetbrains text-[9px] tracking-[1px] text-[#DFE2ED55] uppercase">
                        {featuredPost.readingTime} min read
                      </span>
                    )}
                  </div>

                  {/* Title */}
                  <Link href={`/blog/${featuredPost.slug}`} className="block">
                    <h3 className="font-space mt-6 max-w-[900px] text-[clamp(1.6rem,4vw,3.5rem)] leading-[2rem] font-semibold tracking-[-0.055em] text-[#DFE2ED] md:leading-[0.98]">
                      {featuredPost.title}
                    </h3>
                  </Link>
                </div>

                {/* Right Content */}
                <div className="flex flex-col justify-between px-[clamp(1.5rem,4vw,3.5rem)] py-[clamp(1.5rem,3vw,3.5rem)] max-[767px]:border-t max-[767px]:border-[#FFFFFF0D]">
                  <div>
                    {/* Accent */}
                    <div className="h-px w-12 bg-[#A0D14F]" />

                    {featuredPost.excerpt && (
                      <p className="font-inter mt-7 max-w-[600px] text-[14px] leading-[1.9] text-[#DFE2ED88]">
                        {featuredPost.excerpt}
                      </p>
                    )}
                  </div>

                  {/* CTA */}
                  <Link
                    href={`/blog/${featuredPost.slug}`}
                    className="font-jetbrains mt-10 inline-flex items-center gap-4 self-start text-[10px] font-bold tracking-[1.2px] text-[#A0D14F] uppercase transition-colors duration-300 hover:text-[#DFE2ED]"
                  >
                    Read Full Article
                    <span className="text-[17px] leading-none">→</span>
                  </Link>
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

            <h2 className="font-space mt-3 text-[clamp(1.8rem,4vw,3.5rem)] font-semibold tracking-[-0.04em] text-[#DFE2ED]">
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
