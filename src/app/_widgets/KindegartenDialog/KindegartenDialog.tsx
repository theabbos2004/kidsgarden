import React from "react";
import { Button } from "@/components/ui/button";
import {
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { KindegartenForm } from "../KindegartenForm";
import z from "zod";
import { KindegartenFormSchema } from "@/lib/definitions";
import { KindegartenFormType } from "@/lib/types";

export function KindegartenDialog({
  title,
  defaultValues,
  setOpen,
  onSubmitCallback,
  type,
}: {
  title?: string;
  defaultValues?: KindegartenFormType;
  setOpen?: (prop: boolean) => void;
  onSubmitCallback?: (
    values: z.infer<typeof KindegartenFormSchema>
  ) => Promise<{
    success: boolean;
    data?: unknown;
    error?: unknown;
  }>;
  type?: "readonly";
}) {
  return (
    <DialogContent className="p-0">
      <DialogHeader className=" border-b-1 p-8">
        <DialogTitle className=" text-xl">{title}</DialogTitle>
      </DialogHeader>
      <div className="p-8">
        <KindegartenForm
          defaultValues={defaultValues}
          setOpen={setOpen}
          onSubmitCallback={onSubmitCallback}
          type={type}
        />
      </div>
      <DialogFooter className="p-8 border-t-1">
        <DialogClose asChild>
          <Button variant="outline">Bekor qilish</Button>
        </DialogClose>
        <Button type="submit" form="kindergarten-form">
          Saqlash
        </Button>
      </DialogFooter>
    </DialogContent>
  );
}
