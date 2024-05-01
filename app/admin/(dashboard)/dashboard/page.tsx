import { AdminDashboardCard } from "@/features/admin-dashboard/components/card";
import { AdminDashboardNewestProductsTable } from "@/features/admin-dashboard/components/table";

export default function AdminDashboard(): JSX.Element {
  return (
    <div className="flex flex-col gap-[34px] w-full h-full">
      <h2 className="text-lg">Dashboard</h2>
      <div className="flex flex-row gap-5">
        <AdminDashboardCard
          category="Jumlah User"
          title={
            <>
              <span className="text-2xl">150</span> User
            </>
          }
        />

        <AdminDashboardCard
          category="Jumlah User Aktif"
          title={
            <>
              <span className="text-2xl">150</span> User
            </>
          }
        />

        <AdminDashboardCard
          category="Jumlah Produk"
          title={
            <>
              <span className="text-2xl">150</span> Produk
            </>
          }
        />

        <AdminDashboardCard
          category="Jumlah Produk Aktif"
          title={
            <>
              <span className="text-2xl">150</span> Produk
            </>
          }
        />
      </div>
      <AdminDashboardNewestProductsTable />
    </div>
  );
}
