import { SideMenu } from "@/features/admin-dashboard/components/layout/sidemenu";
import { TopMenu } from "@/features/admin-dashboard/components/layout/topmenu";

export default function AdminDashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="h-screen flex flex-col">
      <TopMenu />
      <div className="flex-1 flex flex-row pt-0.5 bg-[#f8f8f8]">
        <SideMenu />
        <div className="flex-1 pt-[30px] px-[33px]">{children}</div>
      </div>
    </div>
  );
}
