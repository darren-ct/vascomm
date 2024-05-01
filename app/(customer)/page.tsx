import { CustomerHomeAvailableProducts } from "@/features/customer-home/components/available-products";
import { CustomerHomeHero } from "@/features/customer-home/components/hero";
import { CustomerHomeNewest } from "@/features/customer-home/components/newest";

export default function CustomerCustomerHome(): JSX.Element {
  return (
    <>
      <CustomerHomeHero />
      <CustomerHomeNewest />
      <CustomerHomeAvailableProducts />
    </>
  );
}
