import { ICategory } from "@/types/products.types";
import { CategoryTreeItem } from "./category-tree-item";
import CategoryFilter from "./category-filter";
import { Button } from "../ui/button";
import Link from "next/link";
const HomeCategoryTree = ({
  categories,
}: {
  categories: (ICategory & { parent?: true })[];
}) => {
  return (
    <div className="space-y-4">
      <div>
        <span className="block py-2 px-4 mb-4 bg-neutral-100 typography-headline-6 font-bold text-neutral-900 uppercase tracking-widest md:rounded-md">
          Ангилал
        </span>
        {categories.map((cat) => (
          <CategoryTreeItem {...cat} key={cat._id} />
        ))}
      </div>
      {/* <CategoryFilter /> */}

      <Button variant="custom" className="text-sm w-full">
        <Link href="/category">Бүх Бүтээгдэхүүн</Link>
      </Button>
    </div>
  );
};

export default HomeCategoryTree;
