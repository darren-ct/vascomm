import { CustomerFooter } from "@/features/customer/components/layout/footer";
import { CustomerNavigation } from "@/features/customer/components/layout/navigation";

export default function CustomerLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <CustomerNavigation />
      {children}
      <CustomerFooter />
    </>
  );
}
