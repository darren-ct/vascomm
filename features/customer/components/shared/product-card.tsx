import { cn } from "@/lib/utils";
import { ProductEntity } from "@/services/product/types/entity";
import Image from "next/image";
import { HTMLAttributes } from "react";

type CustomerProductCardProps = HTMLAttributes<HTMLDivElement> &
  Partial<ProductEntity>;

export function CustomerProductCard({
  name,
  price,
  className,
  ...rest
}: CustomerProductCardProps): JSX.Element {
  return (
    <div
      className={cn("hover:shadow-lg hover:border transition", className)}
      {...rest}
    >
      <Image
        width={183}
        height={183}
        src="/customer/dummy-product.png"
        alt="Product Card"
        className="w-full"
      />
      <div className="px-4 py-3">
        <p className="font-bold mb-2">{name}</p>
        <p className="font-bold text-primary">IDR {price?.toLocaleString()}</p>
      </div>
    </div>
  );
}
