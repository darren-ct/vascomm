"use client";

import { BaseDialog } from "@/components/shared/base-dialog";
import { Button } from "@/components/ui/button";
import { DialogTitle } from "@/components/ui/dialog";
import { Form } from "@/components/ui/form";
import { AdminUserFields } from "./fields";
import { useAddProductDialog } from "../hooks/use-add-product-dialog";

export function AddProductDialog(): JSX.Element {
  const { methods, onSubmit } = useAddProductDialog();

  return (
    <BaseDialog
      content={
        <>
          <DialogTitle className="text-center mb-10">Tambah User</DialogTitle>
          <Form {...methods}>
            <form
              className="w-full flex flex-col gap-8"
              onSubmit={methods.handleSubmit(onSubmit)}
            >
              <AdminUserFields />
              <Button type="submit" size="lg" className="rounded-none">
                SIMPAN
              </Button>
            </form>
          </Form>
        </>
      }
      trigger={<Button className="px-8 py-2 rounded-none">TAMBAH USER</Button>}
    />
  );
}
