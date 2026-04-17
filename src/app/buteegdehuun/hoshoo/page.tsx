import CategoryPage from "../components/CategoryPage";

export default function Page({
  searchParams,
}: {
  searchParams: { page?: string };
}) {
  return (
    <CategoryPage
      searchParams={searchParams}
      categorySlugs={["hoshoo", "hushuu", "хөшөө"]}
      activeHref="/buteegdehuun/hoshoo"
      titleCandidates={["hushuu", "hoshoo", "хөшөө"]}
      searchValue="hushuu"
    />
  );
}
