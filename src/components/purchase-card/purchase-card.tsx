import { IProductDetail } from "@/types/products.types";
import { Card, CardContent, CardHeader } from "../ui/card";
import Price from "../price/price";
import { Separator } from "../ui/separator";
import AddToCart from "./AddToCart.client";
import { cn } from "@/lib/utils";
import Remainder from "./remainder.client";
import ProductReview from "./productReview";
import { Suspense } from "react";

const PurchaseCard = ({
  name,
  unitPrice,
  _id,
  remainder,
  attachment,
}: IProductDetail) => {
  const product = { name, unitPrice, _id, remainder, attachment };
  return (
    <Card className="md:sticky md:top-28">
      <CardHeader>
        <h1
          className={cn(
            "font-bold capitalize line-clamp-2",
            name.length > 20 ? "text-xl" : "text-2xl"
          )}
        >
          {name}
        </h1>
        <div>
          <Price amount={unitPrice} className="mr-2 font-bold text-2xl" />
        </div>
        <Suspense>
          <ProductReview productId={product._id} />
        </Suspense>
        <Remainder remainder={remainder} />
      </CardHeader>
      <CardContent className="md:py-0">
        <Separator />
        <AddToCart {...product} />
        <Separator />
      </CardContent>
    </Card>
  );
};

export default PurchaseCard;
