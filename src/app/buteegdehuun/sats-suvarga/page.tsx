import CategoryPage from "../components/CategoryPage";

export default function Page({
  searchParams,
}: {
  searchParams: { page?: string };
}) {
  return (
    <CategoryPage
      searchParams={searchParams}
      categorySlugs={["sats-suvarga"]}
      activeHref="/buteegdehuun/sats-suvarga"
    />
  );
}
