const DEFAULT_GRAPHQL_URI =
  "https://ulaanbaatarbuyanmn.next.erxes.io/gateway/graphql";

function trimTrailingSlash(value: string) {
  return value.replace(/\/+$/, "");
}

function getGatewayBaseUrl() {
  const fileUrl =
    process.env.NEXT_PUBLIC_ERXES_FILE_URL || process.env.ERXES_FILE_URL;

  if (fileUrl) {
    return trimTrailingSlash(fileUrl.replace(/\/read-file\?key=$/, ""));
  }

  const gatewayUrl = process.env.NEXT_PUBLIC_ERXES_URL || process.env.ERXES_URL;

  if (gatewayUrl) {
    return trimTrailingSlash(gatewayUrl);
  }

  const graphqlUrl =
    process.env.NEXT_PUBLIC_GRAPHQL_URI ||
    process.env.ERXES_API_URL ||
    DEFAULT_GRAPHQL_URI;

  return trimTrailingSlash(graphqlUrl.replace(/\/graphql$/, ""));
}

function getReadFileBaseUrl() {
  return `${getGatewayBaseUrl()}/read-file?key=`;
}

function getCmsImageProxyUrl(url: string) {
  const safeUrl = String(url || "").trim();
  if (!safeUrl) return "";
  return `/api/cms-image?url=${encodeURIComponent(safeUrl)}`;
}

function extractFirstMediaUrl(text: string) {
  const safeText = String(text || "")
    .replace(/&amp;/gi, "&")
    .replace(/&quot;/gi, '"')
    .replace(/&#x2F;|&#47;/gi, "/")
    .replace(/\\\//g, "/");

  if (!safeText) {
    return "";
  }

  const matchedUrl = safeText.match(/https?:\/\/[^\s"'<>]+/i)?.[0] || "";

  if (matchedUrl) {
    return matchedUrl.replace(/[),.;]+$/g, "");
  }

  const matchedReadFilePath =
    safeText.match(/\/(?:api\/)?read-file\?key=[^\s"'<>]+/i)?.[0] || "";

  if (matchedReadFilePath) {
    return matchedReadFilePath.replace(/[),.;]+$/g, "");
  }

  const matchedErxesKey = safeText.match(/erxes-saas\/[^\s"'<>]+/i)?.[0] || "";

  return matchedErxesKey.replace(/[),.;]+$/g, "");
}

function pickThumbnailValue(thumbnail: any): string {
  if (!thumbnail) {
    return "";
  }

  if (typeof thumbnail === "string") {
    return thumbnail;
  }

  if (Array.isArray(thumbnail)) {
    for (const item of thumbnail) {
      const picked = pickThumbnailValue(item);
      if (picked) {
        return picked;
      }
    }
    return "";
  }

  if (typeof thumbnail === "object") {
    return (
      String(thumbnail?.url || "").trim() ||
      String(thumbnail?.key || "").trim() ||
      String(thumbnail?.value || "").trim() ||
      String(thumbnail?.name || "").trim() ||
      String(thumbnail?.path || "").trim()
    );
  }

  return "";
}


export function resolveCmsMediaUrl(value?: string | null) {
  const url = String(value || "").trim();

  if (!url) {
    return "";
  }

  if (url.startsWith("data:") || url.startsWith("blob:")) {
    return url;
  }

  if (url.startsWith("//")) {
    return `https:${url}`;
  }

  if (/^https?:\/\//i.test(url)) {
    return url;
  }

  if (url.startsWith("/read-file?key=") || url.startsWith("/api/read-file?key=")) {
    return `${getGatewayBaseUrl()}${url}`;
  }

  if (url.startsWith("erxes-saas/")) {
    return `${getReadFileBaseUrl()}${encodeURIComponent(url)}`;
  }

  if (url.startsWith("/")) {
    return url;
  }

  return `${getReadFileBaseUrl()}${encodeURIComponent(url)}`;
}

export function resolveCmsPostThumbnailUrl(post: any) {
  return getCmsPostThumbnailCandidates(post)[0] || "";
}

export function getCmsPostThumbnailCandidates(post: any) {
  if (!post) {
    return [] as string[];
  }

  const candidates: string[] = [];
  const push = (value?: string | null) => {
    const resolved = resolveCmsMediaUrl(value);
    if (!resolved) return;

    const add = (url: string) => {
      if (url && !candidates.includes(url)) {
        candidates.push(url);
      }
    };

    const isCmsReadFile =
      resolved.includes("/read-file?key=") ||
      resolved.includes("erxes-saas/") ||
      resolved.includes(".erxes.io");

    if (isCmsReadFile) {
      add(getCmsImageProxyUrl(resolved));
      add(resolved);
      return;
    }

    add(resolved);
  };

  push(pickThumbnailValue(post?.thumbnail));
  push(pickThumbnailValue(post?.image));

  const prioritizedImage =
    post?.images?.find((image: any) => {
      const type = String(image?.type || "").toLowerCase().trim();
      return ["thumbnail", "featured", "cover", "main"].includes(type);
    }) || post?.images?.[0];
  push(prioritizedImage?.url);

  push(extractFirstMediaUrl(post?.excerpt));
  push(extractFirstMediaUrl(post?.content));
  push(extractFirstMediaUrl(JSON.stringify(post?.customFieldsData || "")));

  return candidates;
}
