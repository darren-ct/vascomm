"use client";

import { BaseCell } from "@/components/shared/base-cell";
import { BaseTable } from "@/components/shared/base-table";
import { Badge } from "@/components/ui/badge";
import { UserEntity } from "@/services/user/types/entity";
import { Column } from "@/types";
import { ArrowUpDownIcon, EyeIcon } from "lucide-react";
import { EditProductDialog } from "./edit-dialog";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { DeleteProductDialog } from "./delete-dialog";

export function AdminProductsTable(): JSX.Element {
  const data: UserEntity[] = [
    {
      id: "1",
      fullname: "Darren Christian",
      email: "darren0208.dc@gmail.com",
      phoneNumber: "082228883030",
      status: "active",
    },
    {
      id: "2",
      fullname: "Marco Christian",
      email: "marco@gmail.com",
      phoneNumber: "082228328330",
      status: "inactive",
    },
    {
      id: "3",
      fullname: "Jesse",
      email: "jesse@gmail.com",
      phoneNumber: "08218813137",
      status: "active",
    },
  ];

  const columns: Column<UserEntity>[] = [
    {
      key: "id",
      formatterHeader: () => (
        <BaseCell className="text-[#3E3E3E] text-xs px-5">No</BaseCell>
      ),
      formatterCell: (_row, index) => (
        <BaseCell className="px-5">
          <p>{index! + 1}</p>
        </BaseCell>
      ),
    },
    {
      key: "fullname",
      formatterHeader: () => (
        <BaseCell className="flex flex-row items-center gap-4 px-5">
          <p className="text-[#3E3E3E] text-xs">Nama Lengkap</p>
          <ArrowUpDownIcon size={12} className="text-[#BEBEBE]" />
        </BaseCell>
      ),
      formatterCell: (row) => (
        <BaseCell className="px-5">{row.fullname}</BaseCell>
      ),
    },
    {
      key: "email",
      formatterHeader: () => (
        <BaseCell className="flex flex-row items-center gap-4 px-5">
          <p className="text-[#3E3E3E] text-xs">Email</p>
          <ArrowUpDownIcon size={12} className="text-[#BEBEBE]" />
        </BaseCell>
      ),
      formatterCell: (row) => <BaseCell className="px-5">{row.email}</BaseCell>,
    },
    {
      key: "phoneNumber",
      formatterHeader: () => (
        <BaseCell className="flex flex-row items-center gap-4 px-5">
          <p className="text-[#3E3E3E] text-xs">No. Telepon</p>
          <ArrowUpDownIcon size={12} className="text-[#BEBEBE]" />
        </BaseCell>
      ),
      formatterCell: (row) => (
        <BaseCell className="px-5">{row.phoneNumber}</BaseCell>
      ),
    },
    {
      key: "status",
      formatterHeader: () => (
        <BaseCell className="flex flex-row items-center gap-4 px-5">
          <p className="text-[#3E3E3E] text-xs">Status</p>
          <ArrowUpDownIcon size={12} className="text-[#BEBEBE]" />
        </BaseCell>
      ),
      formatterCell: (row) => {
        const isActive = row.status === "active";

        return (
          <BaseCell className="px-5">
            <Badge
              className={cn(
                "text-white text-[9px] bg-[#D83A56] hover:bg-[#D83A56]/80",
                isActive && "bg-[#479F77] hover:bg-[#479F77]/80"
              )}
            >
              {row.status.toUpperCase()}
            </Badge>
          </BaseCell>
        );
      },
    },
    {
      key: "action",
      formatterHeader: () => <></>,
      formatterCell: (row) => (
        <BaseCell className="flex flex-row items-center gap-4 px-5">
          <Button
            variant="ghost"
            className="p-1 h-min bg-[#479F77] rounded-full hover:bg-[#479F77]/80"
          >
            <EyeIcon className="text-white" size={14} />
          </Button>
          <EditProductDialog defaultValues={row} />
          <DeleteProductDialog />
        </BaseCell>
      ),
    },
  ];

  return (
    <BaseTable<UserEntity>
      data={data}
      columns={columns}
      classNames={{
        headerRow: "bg-white",
        bodyRow: "border-b-0 even:bg-white odd:bg-[#F8F8F8]",
      }}
    />
  );
}
