import { AddUserDialog } from "@/features/admin-users/components/add-dialog";
import { AdminUsersTable } from "@/features/admin-users/components/table";

export default function AdminUsers(): JSX.Element {
  return (
    <div className="flex flex-col gap-6 w-full h-full">
      <div className="w-full flex flex-row items-center justify-between">
        <h2 className="text-lg">Manajemen User</h2>
        <AddUserDialog />
      </div>
      <AdminUsersTable />
    </div>
  );
}
