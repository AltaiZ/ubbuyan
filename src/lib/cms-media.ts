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

function getKeyFromReadFileUrl(url: string) {
  const match = url.match(/\/(?:api\/)?read-file\?key=(.+)$/i);
  return match?.[1] || "";
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
    const key = getKeyFromReadFileUrl(url);

    if (key) {
      return `${getReadFileBaseUrl()}${encodeURIComponent(key)}`;
    }

    return url;
  }

  if (url.startsWith("/read-file?key=") || url.startsWith("/api/read-file?key=")) {
    const key = url.split("key=")[1] || "";
    return `${getReadFileBaseUrl()}${encodeURIComponent(key)}`;
  }

  if (url.startsWith("erxes-saas/")) {
    return `${getReadFileBaseUrl()}${encodeURIComponent(url)}`;
  }

  if (url.startsWith("/")) {
    return url;
  }

  return `${getReadFileBaseUrl()}${encodeURIComponent(url)}`;
}
