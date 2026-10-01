import type { MetadataRoute } from "next";

import { getBlogPosts } from "@/lib/postora";

const BASE_URL = "https://digigrowtherz.com";

const STATIC_ROUTES = [
  {
    path: "/",
    priority: 1,
    changeFrequency: "weekly" as const,
  },
  {
    path: "/services",
    priority: 0.9,
    changeFrequency: "monthly" as const,
  },
  {
    path: "/services/ai-automation",
    priority: 0.9,
    changeFrequency: "monthly" as const,
  },
  {
    path: "/services/mobile-development",
    priority: 0.8,
    changeFrequency: "monthly" as const,
  },
  {
    path: "/services/seo",
    priority: 0.9,
    changeFrequency: "monthly" as const,
  },
  {
    path: "/services/branding",
    priority: 0.7,
    changeFrequency: "monthly" as const,
  },
  {
    path: "/services/ecommerce",
    priority: 0.9,
    changeFrequency: "monthly" as const,
  },
  {
    path: "/how-we-work",
    priority: 0.7,
    changeFrequency: "monthly" as const,
  },
  {
    path: "/about",
    priority: 0.7,
    changeFrequency: "monthly" as const,
  },
  {
    path: "/contact",
    priority: 0.8,
    changeFrequency: "monthly" as const,
  },
  {
    path: "/blog",
    priority: 0.9,
    changeFrequency: "daily" as const,
  },
];

/**
 * Fetch all published blog posts from Postora.
 *
 * The Postora API is paginated, so we continue requesting
 * pages until every published post has been collected.
 */
async function getAllBlogPosts() {
  const allPosts = [];

  let page = 1;

  while (true) {
    const result = await getBlogPosts({
      page,
      limit: 100,
    });

    allPosts.push(...result.posts);

    if (
      !result.pagination.hasNextPage ||
      page >= result.pagination.totalPages
    ) {
      break;
    }

    page += 1;
  }

  return allPosts;
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const blogPosts = await getAllBlogPosts();

  const staticUrls: MetadataRoute.Sitemap = STATIC_ROUTES.map(
    ({ path, priority, changeFrequency }) => ({
      url: `${BASE_URL}${path}`,
      priority,
      changeFrequency,
    })
  );

  const blogUrls: MetadataRoute.Sitemap = blogPosts
    .filter((post) => post.seo?.noIndex !== true)
    .map((post) => ({
      url: `${BASE_URL}/blog/${post.slug}`,
      lastModified: post.updatedAt
        ? new Date(post.updatedAt)
        : post.publishedAt
          ? new Date(post.publishedAt)
          : undefined,
      changeFrequency: "monthly",
      priority: 0.8,
    }));

  return [...staticUrls, ...blogUrls];
}

export const revalidate = 60;
