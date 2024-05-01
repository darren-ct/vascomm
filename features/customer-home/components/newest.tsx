import { Container } from "@/components/shared/container";
import { CustomerProductCard } from "@/features/customer/components/shared/product-card";
import { ChevronLeftIcon, ChevronRightIcon } from "lucide-react";

export function CustomerHomeNewest(): JSX.Element {
  return (
    <Container className="px-[100px] pb-[52px]">
      <h3 className="text-xl sm:text-xl md:text-xl lg:text-2xl font-bold mb-8">
        Terbaru
      </h3>
      <div className="relative grid grid-cols-5 gap-x-6 gap-y-8">
        <CustomerProductCard name="Euodia" price={200980} />
        <CustomerProductCard name="Euodia" price={200980} />
        <CustomerProductCard name="Euodia" price={200980} />
        <CustomerProductCard name="Euodia" price={200980} />
        <CustomerProductCard name="Euodia" price={200980} />
        <ChevronLeftIcon
          size={32}
          className="absolute top-1/2 -translate-y-1/2 left-[-40px] text-[#A19B91] cursor-pointer"
        />
        <ChevronRightIcon
          size={32}
          className="absolute top-1/2 -translate-y-1/2 right-[-40px] text-[#A19B91] cursor-pointer"
        />
      </div>
    </Container>
  );
}
