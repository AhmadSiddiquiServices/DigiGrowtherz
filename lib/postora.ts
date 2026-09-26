function getPostoraConfig() {
  const apiUrl = process.env.POSTORA_API_URL;
  const siteId = process.env.POSTORA_SITE_ID;

  if (!apiUrl) {
    throw new Error("POSTORA_API_URL is not configured.");
  }

  if (!siteId) {
    throw new Error("POSTORA_SITE_ID is not configured.");
  }

  return {
    apiUrl,
    siteId,
  };
}

export type PostoraImage = {
  mediaId?: string;
  url: string;
  alt?: string;
  width?: number;
  height?: number;
};

export type PostoraCategory = {
  _id: string;
  name: string;
  slug: string;
  description?: string;
};

export type PostoraAuthor = {
  _id: string;
  name: string;
  slug: string;
  bio?: string;
  avatar?: string;
  socialLinks?: Record<string, string>;
};

export type PostoraTag = {
  _id: string;
  name: string;
  slug: string;
};

export type PostoraPostCard = {
  _id: string;
  title: string;
  slug: string;
  excerpt?: string;
  featuredImage?: PostoraImage;
  categoryId?: PostoraCategory | null;
  authorId?: PostoraAuthor | null;
  tagIds?: PostoraTag[];
  isFeatured?: boolean;
  publishedAt?: string | null;
  readingTime?: number;
};

export type PostoraContentNode = {
  type?: string;
  text?: string;
  content?: PostoraContentNode[];
  attrs?: Record<string, unknown>;
  marks?: Array<{
    type?: string;
    attrs?: Record<string, unknown>;
  }>;
};

export type PostoraPost = PostoraPostCard & {
  content: PostoraContentNode;

  seo?: {
    metaTitle?: string;
    metaDescription?: string;
    canonicalUrl?: string;
    ogTitle?: string;
    ogDescription?: string;
    ogImage?: string;
    noIndex?: boolean;
    noFollow?: boolean;
  };

  createdAt?: string;
  updatedAt?: string;
};

type PostoraPagination = {
  page: number;
  limit: number;
  total: number;
  totalPages: number;
  hasNextPage: boolean;
  hasPreviousPage: boolean;
};

type PostoraListResponse = {
  success?: boolean;

  data?: {
    posts?: PostoraPostCard[];
    pagination?: PostoraPagination;
  };

  error?: {
    message?: string;
  };

  message?: string;
};

type PostoraDetailResponse = {
  success?: boolean;

  data?: PostoraPost & {
    relatedPosts?: PostoraPostCard[];
  };

  error?: {
    message?: string;
  };

  message?: string;
};

function getErrorMessage(
  result: {
    error?: {
      message?: string;
    };

    message?: string;
  },
  fallback: string
) {
  return result.error?.message ?? result.message ?? fallback;
}

async function postoraFetch<T>(
  path: string,
  params: Record<string, string> = {}
): Promise<T> {
  const { apiUrl, siteId } = getPostoraConfig();

  const searchParams = new URLSearchParams({
    siteId,
    ...params,
  });

  const response = await fetch(
    `${apiUrl.replace(/\/$/, "")}${path}?${searchParams.toString()}`,
    {
      method: "GET",

      headers: {
        Accept: "application/json",
      },

      next: {
        revalidate: 60,
      },
    }
  );

  const result = (await response.json()) as T & {
    success?: boolean;

    error?: {
      message?: string;
    };

    message?: string;
  };

  if (!response.ok || result.success === false) {
    throw new Error(getErrorMessage(result, "Unable to load blog content."));
  }

  return result;
}

export async function getBlogPosts({
  page = 1,
  limit = 10,
  search,
  category,
  tag,
  author,
  featured,
}: {
  page?: number;
  limit?: number;
  search?: string;
  category?: string;
  tag?: string;
  author?: string;
  featured?: boolean;
} = {}) {
  const params: Record<string, string> = {
    page: String(page),
    limit: String(limit),
  };

  if (search?.trim()) {
    params.search = search.trim();
  }

  if (category?.trim()) {
    params.category = category.trim();
  }

  if (tag?.trim()) {
    params.tag = tag.trim();
  }

  if (author?.trim()) {
    params.author = author.trim();
  }

  if (featured === true) {
    params.featured = "true";
  }

  const result = await postoraFetch<PostoraListResponse>("/api/blogs", params);

  return {
    posts: result.data?.posts ?? [],

    pagination: result.data?.pagination ?? {
      page,
      limit,
      total: 0,
      totalPages: 0,
      hasNextPage: false,
      hasPreviousPage: false,
    },
  };
}

export async function getBlogPostBySlug(slug: string) {
  const result = await postoraFetch<PostoraDetailResponse>(
    `/api/blogs/${encodeURIComponent(slug)}`
  );

  if (!result.data) {
    throw new Error("Blog post was not returned.");
  }

  return result.data;
}
