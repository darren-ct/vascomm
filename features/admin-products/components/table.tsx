"use client";

import { BaseCell } from "@/components/shared/base-cell";
import { BaseTable } from "@/components/shared/base-table";
import { Column } from "@/types";
import { EyeIcon } from "lucide-react";
import { EditProductDialog } from "./edit-dialog";
import { Button } from "@/components/ui/button";
import { DeleteProductDialog } from "./delete-dialog";
import { ProductEntity } from "@/services/product/types/entity";

export function AdminProductsTable(): JSX.Element {
  const data: ProductEntity[] = [
    {
      id: "1",
      name: "Microsoft Surface 7",
      image: "",
      createdAt: "12 Mei 2023",
      price: 1000000,
    },
    {
      id: "2",
      name: "Microsoft Surface 7",
      image: "",
      createdAt: "12 Mei 2023",
      price: 1000000,
    },
    {
      id: "3",
      name: "Microsoft Surface 7",
      image: "",
      createdAt: "12 Mei 2023",
      price: 1000000,
    },
  ];
  const columns: Column<ProductEntity>[] = [
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
      key: "product",
      formatterHeader: () => (
        <BaseCell className="text-[#3E3E3E] text-xs px-5">Produk</BaseCell>
      ),
      formatterCell: (row) => (
        <BaseCell className="flex flex-row items-center gap-5 px-5">
          <div className="w-10 h-10 bg-slate-300 rounded-md" />
          <p>{row.name}</p>
        </BaseCell>
      ),
    },
    {
      key: "createdAt",
      formatterHeader: () => (
        <BaseCell className="text-[#3E3E3E] text-xs px-5">
          Tanggal Dibuat
        </BaseCell>
      ),
      formatterCell: (row) => (
        <BaseCell className="px-5">{row.createdAt}</BaseCell>
      ),
    },
    {
      key: "price",
      formatterHeader: () => (
        <BaseCell className="text-[#3E3E3E] text-xs px-5">Harga (Rp)</BaseCell>
      ),
      formatterCell: (row) => (
        <BaseCell className="px-5">Rp {row.price.toLocaleString()}</BaseCell>
      ),
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
    <BaseTable<ProductEntity>
      data={data}
      columns={columns}
      classNames={{
        headerRow: "bg-white",
        bodyRow: "border-b-0 even:bg-white odd:bg-[#F8F8F8]",
      }}
    />
  );
}
