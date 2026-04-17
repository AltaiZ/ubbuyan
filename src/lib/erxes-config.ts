const DEFAULT_ERXES_GRAPHQL_URI =
  "https://ulaanbaatarbuyanmn.next.erxes.io/gateway/graphql";

function isUsableValue(value?: string | null) {
  if (!value) return false;

  const normalized = value.trim().toLowerCase();

  return (
    normalized.length > 0 &&
    normalized !== "your_local_erxes_app_token" &&
    normalized !== "http://localhost:4000/graphql" &&
    normalized !== "localhost:4000/graphql"
  );
}

export function getErxesGraphqlUri() {
  if (isUsableValue(process.env.NEXT_PUBLIC_GRAPHQL_URI)) {
    return process.env.NEXT_PUBLIC_GRAPHQL_URI as string;
  }

  if (isUsableValue(process.env.ERXES_API_URL)) {
    return process.env.ERXES_API_URL as string;
  }

  return DEFAULT_ERXES_GRAPHQL_URI;
}

export function getErxesAppToken() {
  if (isUsableValue(process.env.NEXT_PUBLIC_ERXES_APP_TOKEN)) {
    return process.env.NEXT_PUBLIC_ERXES_APP_TOKEN as string;
  }

  if (isUsableValue(process.env.ERXES_APP_TOKEN)) {
    return process.env.ERXES_APP_TOKEN as string;
  }

  return "";
}
