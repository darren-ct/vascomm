"use client";

import { BaseDialog } from "@/components/shared/base-dialog";
import { Button } from "@/components/ui/button";
import { DialogTitle } from "@/components/ui/dialog";
import { Form } from "@/components/ui/form";
import { AdminUserFields } from "./fields";
import { useEditUserDialog } from "../hooks/use-edit-user-dialog";
import { EditIcon } from "lucide-react";
import { EditUserDto } from "@/services/user/types/dto";

interface EditUserDialogProps {
  defaultValues: EditUserDto;
}

export function EditUserDialog({
  defaultValues,
}: EditUserDialogProps): JSX.Element {
  const { methods, onSubmit } = useEditUserDialog({ defaultValues });

  return (
    <BaseDialog
      content={
        <>
          <DialogTitle className="text-center mb-10">
            Ubah Data User
          </DialogTitle>
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
