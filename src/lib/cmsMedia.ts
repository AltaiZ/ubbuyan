const DEFAULT_ERXES_FILE_URL =
  "https://ulaanbaatarbuyanmn.next.erxes.io/gateway/read-file?key=";

function getFileBaseUrl() {
  return process.env.ERXES_FILE_URL || DEFAULT_ERXES_FILE_URL;
}

export function resolveCmsImageUrl(value?: string | null) {
  const raw = String(value || "").trim();

  if (!raw) return "";

  if (/^https?:\/\//i.test(raw)) {
    return raw;
  }

  if (raw.startsWith("//")) {
    return `https:${raw}`;
  }

  const fileBaseUrl = getFileBaseUrl();
  const fileBase = fileBaseUrl.replace(/\?key=$/, "");
  const gatewayBase = fileBase.replace(/\/read-file$/, "");

  if (raw.includes("/read-file?key=")) {
    const [, key = ""] = raw.split("/read-file?key=");
    return `${fileBaseUrl}${key}`;
  }

  if (raw.startsWith("/gateway/read-file?key=")) {
    return `${gatewayBase}${raw}`;
  }

  if (raw.startsWith("/read-file?key=")) {
    const [, key = ""] = raw.split("/read-file?key=");
    return `${fileBaseUrl}${key}`;
  }

  if (raw.startsWith("/")) {
    return raw;
  }

  return `${fileBaseUrl}${raw}`;
}

export function normalizeCmsHtml(html?: string | null) {
  const source = String(html || "");

  if (!source) return "";

  return source
    .replace(
      /\b(src|data-src)=["']([^"']+)["']/gi,
      (_, attr: string, url: string) =>
        `${attr}="${resolveCmsImageUrl(url)}"`
    )
    .replace(/url\((['"]?)([^'")]+)\1\)/gi, (_, quote: string, url: string) => {
      return `url(${quote}${resolveCmsImageUrl(url)}${quote})`;
    });
}
