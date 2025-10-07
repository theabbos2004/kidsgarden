"use client";
import React, { useState } from "react";
import { Header } from "@/app/_widgets/Header";
import { SearchInside } from "@/app/_widgets/SearchInside";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import { ComboboxWidget } from "@/app/_widgets/ComboBox";
import { Dialog, DialogTrigger } from "@/components/ui/dialog";
import { KindegartenDialog } from "../KindegartenDialog";
import { z } from "zod";
import { KindegartenFormSchema } from "@/lib/definitions";
import { createDirector } from "@/actions/directors";
import { createKindegarten } from "@/actions/kindegartens";
import { v4 as uuid } from "uuid";

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
      const directorData = {
        firstname: values.fullName,
        lastname: "asdasd",
        phoneNumber: values.phoneNomer,
      };

      const createDirectorRes = await createDirector(directorData);
      if (!createDirectorRes.success) {
        throw new Error(createDirectorRes.error as string);
      }
      const directorId = (createDirectorRes.data as { id: string })?.id || "";
      if (!directorId) {
        throw new Error("director id not found");
      }
      const kindegartenData = {
        id: uuid(),
        name: values.name,
        subName: "asda",
        email: values.email,
        phone: values.phoneNomer,
        type: values.type,
        address: {
          country: values.address,
          region: "string",
          city: "string",
          street: "string",
          house: "string",
        },
        locations: {
          latitude: 0.1,
          longitude: 0.1,
        },
        directorId: directorId,
      };
      const createKindegartenRes = await createKindegarten(kindegartenData);
      console.log(createKindegartenRes);
      if (!createKindegartenRes.success) {
        throw new Error(createKindegartenRes.error as string);
      }

      return { success: true, data: createKindegartenRes.data };
    } catch (error) {
      return {
        success: false,
        error: error instanceof Error ? error.message : "Xatolik yuz berdi",
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
                <Button variant="green" className="rounded-3xl">
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
