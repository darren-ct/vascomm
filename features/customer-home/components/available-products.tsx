import { Container } from "@/components/shared/container";
import { Button } from "@/components/ui/button";
import { CustomerProductCard } from "@/features/customer/components/shared/product-card";

export function CustomerHomeAvailableProducts(): JSX.Element {
  return (
    <Container className="flex flex-col items-center px-[100px] pb-[52px]">
      <h3 className="w-full text-xl sm:text-xl md:text-xl lg:text-2xl font-bold text-left mb-8">
        Produk Tersedia
      </h3>
      <div className="w-full grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-5 gap-6 gap-y-8 mb-3">
        <CustomerProductCard name="Euodia" price={200980} />
        <CustomerProductCard name="Euodia" price={200980} />
        <CustomerProductCard name="Euodia" price={200980} />
        <CustomerProductCard name="Euodia" price={200980} />
        <CustomerProductCard name="Euodia" price={200980} />{" "}
        <CustomerProductCard name="Euodia" price={200980} />
        <CustomerProductCard name="Euodia" price={200980} />
        <CustomerProductCard name="Euodia" price={200980} />
        <CustomerProductCard name="Euodia" price={200980} />
        <CustomerProductCard name="Euodia" price={200980} />
      </div>
      <Button
        variant="outline"
        className="mx-auto font-semibold border-primary text-primary hover:text-primary rounded-none"
      >
        Lihat lebih banyak
      </Button>
    </Container>
  );
}
