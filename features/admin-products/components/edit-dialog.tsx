"use client";

import { BaseDialog } from "@/components/shared/base-dialog";
import { Button } from "@/components/ui/button";
import { DialogTitle } from "@/components/ui/dialog";
import { Form } from "@/components/ui/form";
import { AdminProductFields } from "./fields";
import { useEditProductDialog } from "../hooks/use-edit-product-dialog";
import { EditIcon } from "lucide-react";
import { EditProductDto } from "@/services/product/types/dto";

interface EditProductDialogProps {
  defaultValues: EditProductDto;
}

export function EditProductDialog({
  defaultValues,
}: EditProductDialogProps): JSX.Element {
  const { methods, onSubmit } = useEditProductDialog({ defaultValues });

  return (
    <BaseDialog
      content={
        <>
          <DialogTitle className="text-center mb-10">
            Ubah Data Produk
          </DialogTitle>
          <Form {...methods}>
            <form
              className="w-full flex flex-col gap-8"
              onSubmit={methods.handleSubmit(onSubmit)}
            >
              <AdminProductFields />
              <Button type="submit" size="lg" className="rounded-none">
                SIMPAN
              </Button>
            </form>
          </Form>
        </>
      }
      trigger={
        <Button
          variant="ghost"
          className="p-1 h-min bg-[#EC9024] rounded-full hover:bg-[#EC9024]/80"
        >
          <EditIcon className="text-white" size={14} />
        </Button>
      }
    />
  );
}
