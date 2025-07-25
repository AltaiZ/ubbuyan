import Link from 'next/link';
import Image from '../ui/image';
import { getCategories } from '@/sdk/queries/products';
import { cn } from '@/lib/utils';

const CategoryItem = async ({ id, length }: { id: string; length: number }) => {
  const { categories } = await getCategories();
  const category = categories.find(cat => cat._id === id);

  if (!category) return null;

  const { attachment, name } = category;

  return (
    <div className="basis-32 md:basis-36 flex justify-center items-center ">
      <Link
        href={{
          pathname: '/',
          query: { categoryId: id },
        }}
        aria-label={name}
        className="w-full h-full z-[1] focus-visible:outline focus-visible:outline-offset-2 focus-visible:rounded-md"
      >
        <div className="relative h-16 w-26">
        <Image
            src={attachment?.url ?? ""}
            alt={name}
            width={320}
            height={320}
            className="absolute h-full w-full top-0 left-0 object-contain"
            skipAnimation
          />
        </div>
        <div className="flex justify-center">
          <p
            className={cn(
              "mt-4 font-medium text-neutral-600 text-sm text-center max-w-40 group-hover:underline group-hover:text-primary group-hover:font-normal group-active:text-primary",
            
              length > 5 && 'font-medium text-sm'
            )}
          >
            {name}
          </p>
        </div>
      </Link>
    </div>
  );
};

export default CategoryItem;
