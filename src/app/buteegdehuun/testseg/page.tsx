import CategoryPage from "../components/CategoryPage";

export default function Page({
  searchParams,
}: {
  searchParams: { page?: string };
}) {
  return (
    <CategoryPage
      searchParams={searchParams}
      categorySlugs={[
        "tsetseg",
        "testseg",
        "hundetgeliin tsetseg",
        "hundetgeliin-testseg",
        "hundetgeliin testseg",
        "хүндэтгэлийн цэцэг",
        "цэцэг",
      ]}
      activeHref="/buteegdehuun/tsetseg"
      titleCandidates={[
        "hundetgelioin tsetseg",
        "hundetgeliin tsetseg",
        "hundetgeliin testseg",
        "хүндэтгэлийн цэцэг",
      ]}
      searchValue="hundetgelioin tsetseg"
    />
  );
}
