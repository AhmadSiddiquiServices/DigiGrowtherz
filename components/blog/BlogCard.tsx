import Image from "next/image";
import Link from "next/link";

import type { PostoraPostCard } from "@/lib/postora";

function formatDate(value?: string | null) {
  if (!value) return "";

  const date = new Date(value);

  if (Number.isNaN(date.getTime())) {
    return "";
  }

  return date.toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });
}

export default function BlogCard({
  title,
  slug,
  excerpt,
  categoryId,
  featuredImage,
  publishedAt,
  readingTime,
}: PostoraPostCard) {
  return (
    <article className="group flex h-full flex-col overflow-hidden border border-[#FFFFFF0D] bg-[#0F141B] transition-all duration-300 hover:border-[#A0D14F33]">
      <Link
        href={`/blog/${slug}`}
        className="relative block aspect-[16/10] overflow-hidden bg-[#181C23]"
      >
        {featuredImage?.url ? (
          <Image
            src={featuredImage.url}
            alt={featuredImage.alt || title}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
            className="object-cover transition-transform duration-500 group-hover:scale-[1.035]"
          />
        ) : (
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,#A0D14F18,transparent_35%),#181C23]" />
        )}

        <div className="absolute inset-0 bg-gradient-to-t from-[#070B12]/40 via-transparent to-transparent" />
      </Link>

      <div className="flex flex-1 flex-col p-6">
        <div className="flex flex-wrap items-center gap-x-3 gap-y-2">
          {categoryId?.name && (
            <span className="font-jetbrains text-[9px] font-medium tracking-[1px] text-[#A0D14F] uppercase">
              {categoryId.name}
            </span>
          )}

          {publishedAt && (
            <span className="font-jetbrains text-[9px] tracking-[0.8px] text-[#DFE2ED66] uppercase">
              {formatDate(publishedAt)}
            </span>
          )}

          {readingTime ? (
            <span className="font-jetbrains text-[9px] tracking-[0.8px] text-[#DFE2ED66] uppercase">
              {readingTime} min read
            </span>
          ) : null}
        </div>

        <Link href={`/blog/${slug}`}>
          <h2 className="font-space mt-5 text-[clamp(1.35rem,2vw,1.75rem)] leading-[1.2] font-semibold tracking-[-0.8px] text-[#DFE2ED] transition-colors duration-300 group-hover:text-[#A0D14F]">
            {title}
          </h2>
        </Link>

        {excerpt && (
          <p className="font-inter mt-4 line-clamp-3 text-[14px] leading-7 text-[#DFE2ED99]">
            {excerpt}
          </p>
        )}

        <div className="mt-auto pt-7">
          <Link
            href={`/blog/${slug}`}
            className="group/link font-jetbrains inline-flex items-center gap-3 text-[12px] font-bold tracking-[1px] text-[#DFE2ED] uppercase"
          >
            <span className="transition-colors group-hover/link:text-[#A0D14F]">
              Read Article
            </span>

            <span className="text-[#A0D14F] transition-transform duration-300 group-hover/link:translate-x-1">
              →
            </span>
          </Link>
        </div>
      </div>
    </article>
  );
}
