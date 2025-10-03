"use client";
import React, { useState } from "react";
import { Header } from "@/app/_widgets/Header";
import { SearchInside } from "@/app/_widgets/SearchInside";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import { ComboboxWidget } from "@/app/_widgets/ComboBox";
import { Dialog, DialogTrigger } from "@/components/ui/dialog";
import { KindegartenDialog } from "../KindegartenDialog";
import z from "zod";
import { KindegartenFormSchema } from "@/lib/definitions";

export function KindegartenHeader({
  Title,
}: {
  Title: string | React.ReactNode;
}) {
  const [open, setOpen] = useState(false);
  async function onSubmitCallback(
    values: z.infer<typeof KindegartenFormSchema>
  ) {
    try {
      const res = { data: values };
      if (!res.data) {
        throw Error;
      }
      return {
        success: true,
        data: res.data,
      };
    } catch (error: unknown) {
      return {
        success: false,
        error,
      };
    }
  }
  return (
    <Header
      Title={Title}
      rightContent={
        <ul className="flex gap-4">
          <li>
            <SearchInside placeholder="Qidirish" />
          </li>
          <li>
            <ComboboxWidget placeholder="Saralash" />
          </li>
          <li>
            <Dialog open={open} onOpenChange={setOpen}>
              <DialogTrigger asChild>
                <Button variant="green" className=" rounded-3xl">
                  <Plus />
                  <span>Bog‘cha qo‘shish</span>
                </Button>
              </DialogTrigger>
              <KindegartenDialog
                title="Bog‘cha qo‘shish"
                setOpen={setOpen}
                onSubmitCallback={onSubmitCallback}
              />
            </Dialog>
          </li>
        </ul>
      }
    />
  );
}
