import { AddProductDialog } from "@/features/admin-products/components/add-dialog";
import { AdminProductsTable } from "@/features/admin-products/components/table";

export default function AdminProducts(): JSX.Element {
  return (
    <div className="flex flex-col gap-6 w-full h-full">
      <div className="w-full flex flex-row items-center justify-between">
        <h2 className="text-lg">Manajemen Produk</h2>
        <AddProductDialog />
      </div>
      <AdminProductsTable />
    </div>
  );
}
