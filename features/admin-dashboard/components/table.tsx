"use client";

import { BaseCell } from "@/components/shared/base-cell";
import { BaseTable } from "@/components/shared/base-table";
import { Card } from "@/components/ui/card";
import { ProductEntity } from "@/services/product/types/entity";
import { Column } from "@/types";

export function AdminDashboardNewestProductsTable(): JSX.Element {
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
      key: "product",
      formatterHeader: () => (
        <BaseCell className="text-white rounded-s-md bg-primary">
          Produk
        </BaseCell>
      ),
      formatterCell: (row) => (
        <BaseCell className="flex flex-row items-center gap-5">
          <div className="w-10 h-10 bg-slate-300 rounded-md" />
          <p>{row.name}</p>
        </BaseCell>
      ),
    },
    {
      key: "createdAt",
      formatterHeader: () => (
        <BaseCell className="text-white bg-primary">Tanggal Dibuat</BaseCell>
      ),
      formatterCell: (row) => (
        <BaseCell className="text-[#A3A6AC]">{row.createdAt}</BaseCell>
      ),
    },
    {
      key: "price",
      formatterHeader: () => (
        <BaseCell className="text-white rounded-e-md bg-primary">
          Harga (Rp)
        </BaseCell>
      ),
      formatterCell: (row) => (
        <BaseCell>Rp {row.price.toLocaleString()}</BaseCell>
      ),
    },
  ];

  return (
    <Card className="px-[30px] py-[22px] rounded-xl	bg-white border-0">
      <h3 className="text-base font-medium mb-5">Produk Terbaru</h3>
      <BaseTable<ProductEntity>
        data={data}
        columns={columns}
        classNames={{
          bodyRow: "border-b-0",
        }}
      />
    </Card>
  );
}
