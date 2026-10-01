import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Suspense } from "react";

import BlogCard from "@/components/blog/BlogCard";
import BlogContent from "@/components/blog/BlogContent";
import { getBlogPostBySlug } from "@/lib/postora";

type Props = {
  params: Promise<{
    slug: string;
  }>;
};

const SITE_URL = "https://digigrowtherz.com";

function formatDate(value?: string | null) {
  if (!value) return "";

  const date = new Date(value);

  if (Number.isNaN(date.getTime())) {
    return "";
  }

  return date.toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });
}

function createArticleJsonLd(
  post: Awaited<ReturnType<typeof getBlogPostBySlug>>,
  slug: string
) {
  const articleUrl = post.seo?.canonicalUrl || `${SITE_URL}/blog/${slug}`;

  const articleImage = post.featuredImage?.url;

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",

    "@id": `${articleUrl}#article`,

    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": articleUrl,
    },

    headline: post.title,

    description: post.seo?.metaDescription || post.excerpt || undefined,

    ...(articleImage
      ? {
          image: [articleImage],
        }
      : {}),

    ...(post.publishedAt
      ? {
          datePublished: post.publishedAt,
        }
      : {}),

    ...(post.updatedAt
      ? {
          dateModified: post.updatedAt,
        }
      : post.publishedAt
        ? {
            dateModified: post.publishedAt,
          }
        : {}),

    author: post.authorId?.name
      ? {
          "@type": "Person",
          name: post.authorId.name,
        }
      : {
          "@type": "Organization",
          name: "DigiGrowtherz",
          url: SITE_URL,
        },

    publisher: {
      "@type": "Organization",
      name: "DigiGrowtherz",
      url: SITE_URL,
    },
  };

  /*
   * Prevent user-controlled text such as a title containing
   * </script> from breaking the JSON-LD script element.
   */
  return JSON.stringify(jsonLd).replace(/</g, "\\u003c");
}

/*
 * SEO metadata
 *
 * This still uses the real blog data.
 */
export async function generateMetadata({ params }: Props) {
  const { slug } = await params;

  try {
    const post = await getBlogPostBySlug(slug);

    return {
      title: post.seo?.metaTitle || `${post.title} | DigiGrowtherz`,

      description: post.seo?.metaDescription || post.excerpt || undefined,

      alternates: post.seo?.canonicalUrl
        ? {
            canonical: post.seo.canonicalUrl,
          }
        : undefined,

      openGraph: {
        title: post.seo?.ogTitle || post.seo?.metaTitle || post.title,

        description:
          post.seo?.ogDescription ||
          post.seo?.metaDescription ||
          post.excerpt ||
          undefined,

        images: post.seo?.ogImage
          ? [
              {
                url: post.seo.ogImage,
              },
            ]
          : post.featuredImage?.url
            ? [
                {
                  url: post.featuredImage.url,
                },
              ]
            : undefined,

        type: "article",
      },

      robots:
        post.seo?.noIndex || post.seo?.noFollow
          ? {
              index: !post.seo?.noIndex,
              follow: !post.seo?.noFollow,
            }
          : undefined,
    };
  } catch {
    return {
      title: "Blog | DigiGrowtherz",
    };
  }
}

/*
 * Loading skeleton shown while Postora is being called.
 *
 * This intentionally mirrors the actual blog detail layout.
 */
function BlogDetailSkeleton() {
  return (
    <>
      {/* Hero Skeleton */}
      <section className="relative overflow-hidden border-b border-[#FFFFFF0D] bg-[#070B12]">
        <div className="pointer-events-none absolute top-[-100px] right-[-100px] h-[420px] w-[420px] rounded-full bg-[#A0D14F08] blur-[120px]" />

        <div className="mx-auto px-[clamp(1rem,4vw,5rem)] pt-[clamp(70px,9vw,130px)] pb-[clamp(60px,8vw,100px)]">
          {/* Back link */}
          <div className="h-4 w-32 animate-pulse bg-[#DFE2ED0D]" />

          <div className="mt-14">
            {/* Meta */}
            <div className="flex flex-wrap gap-3">
              <div className="h-3 w-28 animate-pulse bg-[#A0D14F15]" />

              <div className="h-3 w-24 animate-pulse bg-[#DFE2ED0D]" />

              <div className="h-3 w-20 animate-pulse bg-[#DFE2ED0D]" />
            </div>

            {/* Title */}
            <div className="mt-8 max-w-[1100px] space-y-4">
              <div className="h-[clamp(3rem,7vw,5.5rem)] w-[90%] animate-pulse bg-[#DFE2ED0D]" />

              <div className="h-[clamp(3rem,7vw,5.5rem)] w-[64%] animate-pulse bg-[#DFE2ED0D]" />
            </div>

            {/* Excerpt */}
            <div className="mt-8 max-w-[850px] space-y-3">
              <div className="h-5 w-full animate-pulse bg-[#DFE2ED09]" />

              <div className="h-5 w-[90%] animate-pulse bg-[#DFE2ED09]" />
            </div>

            {/* Author */}
            <div className="mt-8 flex items-center gap-3">
              <div className="h-10 w-10 animate-pulse rounded-full bg-[#DFE2ED0D]" />

              <div>
                <div className="h-3 w-24 animate-pulse bg-[#DFE2ED0D]" />

                <div className="mt-2 h-2 w-16 animate-pulse bg-[#DFE2ED08]" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Image Skeleton */}
      <section className="px-[clamp(1rem,4vw,5rem)] py-[clamp(35px,5vw,65px)]">
        <div className="relative mx-auto">
          <div className="pointer-events-none absolute -inset-10 -z-10 bg-[#A0D14F06] blur-[90px]" />

          <div className="overflow-hidden border border-[#FFFFFF10] bg-[#0F141B] p-2 sm:p-3">
            <div className="relative aspect-[16/6] w-full animate-pulse overflow-hidden bg-[#181C23]" />
          </div>
        </div>
      </section>

      {/* Article Skeleton */}
      <section className="px-[clamp(1rem,4vw,5rem)] pb-[clamp(80px,10vw,140px)]">
        <div className="mx-auto grid gap-14 lg:grid-cols-[180px_minmax(0,1fr)] lg:gap-20">
          {/* Sidebar */}
          <aside className="hidden lg:block">
            <div className="sticky top-28">
              <div className="h-4 w-16 animate-pulse bg-[#DFE2ED0D]" />

              <div className="mt-4 h-px w-10 bg-[#A0D14F33]" />

              <div className="mt-5 space-y-3">
                <div className="h-3 w-28 animate-pulse bg-[#DFE2ED09]" />

                <div className="h-3 w-20 animate-pulse bg-[#DFE2ED09]" />
              </div>
            </div>
          </aside>

          {/* Article */}
          <article className="max-w-[1000px] min-w-0 space-y-8">
            <div className="h-10 w-[65%] animate-pulse bg-[#DFE2ED0D]" />

            <div className="space-y-4">
              <div className="h-6 w-full animate-pulse bg-[#DFE2ED09]" />
              <div className="h-6 w-[94%] animate-pulse bg-[#DFE2ED09]" />
              <div className="h-6 w-[82%] animate-pulse bg-[#DFE2ED09]" />
            </div>

            <div className="h-10 w-[58%] animate-pulse bg-[#DFE2ED0D]" />

            <div className="space-y-4">
              <div className="h-6 w-full animate-pulse bg-[#DFE2ED09]" />
              <div className="h-6 w-[91%] animate-pulse bg-[#DFE2ED09]" />
              <div className="h-6 w-[76%] animate-pulse bg-[#DFE2ED09]" />
              <div className="h-6 w-[88%] animate-pulse bg-[#DFE2ED09]" />
            </div>

            <div className="h-10 w-[48%] animate-pulse bg-[#DFE2ED0D]" />

            <div className="space-y-4">
              <div className="h-6 w-full animate-pulse bg-[#DFE2ED09]" />
              <div className="h-6 w-[96%] animate-pulse bg-[#DFE2ED09]" />
              <div className="h-6 w-[84%] animate-pulse bg-[#DFE2ED09]" />
            </div>
          </article>
        </div>
      </section>

      {/* Related Posts Skeleton */}
      <section className="border-t border-[#FFFFFF0D] bg-[#0F141B] px-[clamp(1rem,4vw,5rem)] py-[clamp(70px,8vw,120px)]">
        <div className="mx-auto">
          <div className="mb-12">
            <div className="h-3 w-28 animate-pulse bg-[#DFE2ED0D]" />

            <div className="mt-5 h-12 w-[420px] max-w-full animate-pulse bg-[#DFE2ED0D]" />
          </div>

          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {Array.from({ length: 3 }).map((_, index) => (
              <div
                key={index}
                className="overflow-hidden border border-[#FFFFFF0D] bg-[#070B12]"
              >
                <div className="aspect-[1.55/1] animate-pulse bg-[#10161D]" />

                <div className="p-6">
                  <div className="h-3 w-24 animate-pulse bg-[#DFE2ED0D]" />

                  <div className="mt-5 space-y-3">
                    <div className="h-6 w-full animate-pulse bg-[#DFE2ED0D]" />
                    <div className="h-6 w-[78%] animate-pulse bg-[#DFE2ED0D]" />
                  </div>

                  <div className="mt-5 space-y-2">
                    <div className="h-3 w-full animate-pulse bg-[#DFE2ED08]" />
                    <div className="h-3 w-[90%] animate-pulse bg-[#DFE2ED08]" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

/*
 * All Postora-dependent content lives inside this async component.
 *
 * This is what Suspense waits for.
 */
async function BlogDetailContent({ slug }: { slug: string }) {
  let post;

  try {
    post = await getBlogPostBySlug(slug);
  } catch {
    notFound();
  }

  if (post.slug !== slug) {
    notFound();
  }

  const articleJsonLd = createArticleJsonLd(post, slug);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: articleJsonLd,
        }}
      />

      {/* Article Hero */}
      <section className="relative overflow-hidden border-b border-[#FFFFFF0D]">
        <div className="pointer-events-none absolute top-[-100px] right-[-100px] h-[420px] w-[420px] rounded-full bg-[#A0D14F10] blur-[120px]" />

        <div className="mx-auto px-[clamp(1rem,4vw,5rem)] pt-[clamp(70px,9vw,130px)] pb-[10px]">
          <Link
            href="/blog"
            className="group font-jetbrains inline-flex items-center gap-3 text-[12px] font-bold tracking-[1.2px] text-[#DFE2ED66] uppercase transition-colors hover:text-[#A0D14F]"
          >
            <span className="transition-transform duration-300 group-hover:-translate-x-1">
              ←
            </span>
            Back to Insights
          </Link>

          <div className="mt-14">
            <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
              {post.categoryId?.name && (
                <>
                  <span className="font-jetbrains text-[12px] font-bold tracking-[1.2px] text-[#A0D14F] uppercase">
                    {post.categoryId.name}
                  </span>

                  <span className="h-1 w-1 rounded-full bg-[#DFE2ED33]" />
                </>
              )}

              {post.publishedAt && (
                <>
                  <span className="font-jetbrains text-[12px] tracking-[1px] text-[#DFE2ED66] uppercase">
                    {formatDate(post.publishedAt)}
                  </span>

                  <span className="h-1 w-1 rounded-full bg-[#DFE2ED33]" />
                </>
              )}

              {post.readingTime && (
                <span className="font-jetbrains text-[12px] tracking-[1px] text-[#DFE2ED66] uppercase">
                  {post.readingTime} min read
                </span>
              )}
            </div>

            <h1 className="font-space mt-7 text-[clamp(2.6rem,7vw,5.5rem)] leading-[0.98] font-semibold tracking-[-0.055em] text-[#DFE2ED]">
              {post.title}
            </h1>

            {post.excerpt && (
              <p className="font-inter mt-8 text-[clamp(1rem,1.5vw,1.2rem)] leading-[1.85] text-[#DFE2ED99]">
                {post.excerpt}
              </p>
            )}

            {post.authorId?.name && (
              <div className="mt-8 flex items-center gap-3">
                {post.authorId.avatar ? (
                  <Image
                    src={post.authorId.avatar}
                    alt={post.authorId.name}
                    width={40}
                    height={40}
                    className="h-10 w-10 rounded-full object-cover"
                  />
                ) : (
                  <div className="font-space flex h-10 w-10 items-center justify-center rounded-full bg-[#A0D14F] text-[11px] font-bold text-[#070B12]">
                    {post.authorId.name
                      .split(/\s+/)
                      .map((part) => part[0])
                      .join("")
                      .slice(0, 2)
                      .toUpperCase()}
                  </div>
                )}

                <div>
                  <div className="font-inter text-[12px] font-medium text-[#DFE2ED]">
                    {post.authorId.name}
                  </div>

                  <div className="font-jetbrains mt-0.5 text-[8px] tracking-[1px] text-[#DFE2ED55] uppercase">
                    DigiGrowtherz
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Featured Image */}
      {post.featuredImage?.url && (
        <section className="px-[clamp(1rem,4vw,5rem)] py-[clamp(35px,5vw,65px)]">
          <div className="relative mx-auto">
            <div className="pointer-events-none absolute -inset-10 -z-10 bg-[#A0D14F08] blur-[90px]" />

            <div className="relative overflow-hidden border border-[#FFFFFF10] bg-[#0F141B] p-2 sm:p-3">
              <div className="relative aspect-[16/6] overflow-hidden bg-[#181C23]">
                <Image
                  src={post.featuredImage.url}
                  alt={post.featuredImage.alt || post.title}
                  fill
                  priority
                  sizes="(max-width: 768px) 100vw, 1180px"
                  className="object-cover transition-transform duration-700 hover:scale-[1.015]"
                />

                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#070B12]/25 via-transparent to-transparent" />

                <div className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-[#A0D14F55]" />
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Article */}
      <section className="px-[clamp(1rem,4vw,5rem)] pb-[clamp(80px,10vw,140px)]">
        <div className="mx-auto grid gap-14 lg:grid-cols-[180px_minmax(0,1fr)] lg:gap-20">
          <aside className="hidden lg:block">
            <div className="sticky top-28">
              <div className="font-jetbrains text-[14px] font-bold tracking-[1.5px] text-[#DFE2ED44] uppercase">
                Article
              </div>

              <div className="mt-4 h-px w-10 bg-[#A0D14F]" />

              <div className="font-jetbrains mt-5 text-[12px] leading-6 text-[#DFE2ED55]">
                {formatDate(post.publishedAt)}
                <br />
                {post.readingTime ? `${post.readingTime} min read` : ""}
              </div>
            </div>
          </aside>

          <article className="min-w-0">
            <BlogContent content={post.content} />
          </article>
        </div>
      </section>

      {/* Related Posts */}
      {post.relatedPosts?.length ? (
        <section className="border-t border-[#FFFFFF0D] bg-[#0F141B] px-[clamp(1rem,4vw,5rem)] py-[clamp(70px,8vw,120px)]">
          <div className="mx-auto">
            <div className="mb-12">
              <p className="font-jetbrains text-[10px] tracking-[1.5px] text-[#DFE2ED66] uppercase">
                Related Insights
              </p>

              <h2 className="font-space mt-4 text-[clamp(2.2rem,5vw,4rem)] leading-[1.05] font-semibold tracking-[-0.045em] text-[#DFE2ED]">
                Keep exploring
                <span className="text-[#A0D14F]"> smarter ideas.</span>
              </h2>
            </div>

            <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
              {post.relatedPosts.map((relatedPost) => (
                <BlogCard key={relatedPost._id} {...relatedPost} />
              ))}
            </div>
          </div>
        </section>
      ) : null}
    </>
  );
}

export default async function BlogDetailPage({ params }: Props) {
  const { slug } = await params;

  return (
    <main className="overflow-hidden bg-[#070B12]">
      <Suspense key={slug} fallback={<BlogDetailSkeleton />}>
        <BlogDetailContent slug={slug} />
      </Suspense>

      {/* CTA */}
      <section className="overflow-hidden bg-[#A0D14F] px-[clamp(1rem,4vw,5rem)] py-16 lg:py-20">
        <div className="mx-auto flex flex-col items-start justify-between gap-10 lg:flex-row lg:items-center">
          <div className="max-w-[900px]">
            <p className="font-jetbrains text-[16px] font-bold tracking-[1.5px] text-[#070B12]/55 uppercase">
              Have a project in mind?
            </p>

            <h2 className="font-space mt-4 text-[clamp(2.3rem,5vw,4rem)] leading-[1.08] font-semibold tracking-[-0.04em] text-[#070B12]">
              Let's turn ideas into measurable growth.
            </h2>
          </div>

          <Link
            href="/contact"
            className="font-jetbrains flex h-[62px] w-full max-w-[350px] items-center justify-center gap-4 bg-[#070B12] px-10 text-[14px] font-bold tracking-[1.2px] text-white uppercase transition-transform duration-300 hover:scale-[1.02]"
          >
            Book a Consultation
            <span className="text-[15px]">→</span>
          </Link>
        </div>
      </section>
    </main>
  );
}
