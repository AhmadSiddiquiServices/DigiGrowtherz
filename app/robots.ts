import type { MetadataRoute } from "next";

const BASE_URL = "https://digigrowtherz.com";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/api/", "/admin/", "/login/"],
    },

    sitemap: `${BASE_URL}/sitemap.xml`,
  };
}
