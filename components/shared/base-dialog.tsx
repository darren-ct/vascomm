"use client";

import { DialogProps } from "@radix-ui/react-dialog";
import { Dialog, DialogContent, DialogTrigger } from "../ui/dialog";
import { cn } from "@/lib/utils";

interface BaseDialogProps extends DialogProps {
  trigger: JSX.Element;
  content: JSX.Element;
  classNames?: {
    content?: string;
  };
}

export function BaseDialog({
  classNames,
  content,
  trigger,
  ...rest
}: BaseDialogProps): JSX.Element {
  return (
    <Dialog {...rest}>
      <DialogTrigger asChild>{trigger}</DialogTrigger>
      <DialogContent
        className={cn(
          "max-w-md max-h-md px-8 pt-7 pb-9 overflow-auto",
          classNames?.content
        )}
      >
        {content}
      </DialogContent>
    </Dialog>
  );
}
