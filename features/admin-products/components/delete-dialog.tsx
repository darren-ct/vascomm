"use client";

import { BaseDeleteDialog } from "@/components/shared/base-delete-dialog";
import { Button } from "@/components/ui/button";
import { TrashIcon } from "lucide-react";

export function DeleteProductDialog(): JSX.Element {
  return (
    <BaseDeleteDialog
      title="Konfirmasi Hapus"
      description="Apakah kamu yakin menghapus “nama”?"
      actions={
        <>
          <Button
            variant="outline"
            className="text-[#BDBDBD] font-semibold h-9 px-6"
          >
            Batal
          </Button>
          <Button className="font-semibold h-9 px-6">Hapus</Button>
        </>
      }
      trigger={
        <Button
          variant="ghost"
          className="p-1 h-min bg-red-500 rounded-full hover:bg-red-500/80"
        >
          <TrashIcon className="text-white" size={14} />
        </Button>
      }
    />
  );
}
