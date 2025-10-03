"use client";
import React, { use, useState } from "react";
import { KindegartenHeader } from "@/app/_widgets/KindegartenHeader";

import { Dialog } from "@/components/ui/dialog";
import { KindegartenDialog } from "@/app/_widgets/KindegartenDialog";
import { changedKindegartenType } from "@/lib/types";
import z from "zod";
import { KindegartenFormSchema } from "@/lib/definitions";

import { BreadcrumbKindegarten } from "@/app/_widgets/BreadcrumbKindegarten";
import { BranchsCard } from "@/app/_widgets/BranchsCard";
export default function Branch({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = use(params);
  const [openSeeDialog, setOpenSeeDialog] = useState<boolean>(false);
  const [changedKindegarten, setChangedKindegarten] =
    useState<changedKindegartenType>({ type: "update", data: {} });
  const cards = [
    {
      id: "1",
      name: "22-davlaat  bog‘chasi",
      address: "Toshkent sh., Chilonzor, 19-mavze, 36-uy",
      fullName: "Akbarova Nigora",
      phoneNumber: "+998 90 123 45 67",
      date: "03.08.2025",
    },
    {
      id: "2",
      name: "34-davlaat  bog‘chasi",
      address: "Toshkent sh., Chilonzor, 19-mavze, 36-uy",
      fullName: "Akbarova Nigora",
      phoneNumber: "+998 90 123 45 67",
      date: "03.08.2025",
    },
    {
      id: "3",
      name: "78-davlaat  bog‘chasi",
      address: "Toshkent sh., Chilonzor, 19-mavze, 36-uy",
      fullName: "Akbarova Nigora",
      phoneNumber: "+998 90 123 45 67",
      date: "03.08.2025",
    },
    {
      id: "4",
      name: "45-davlaat  bog‘chasi",
      address: "Toshkent sh., Chilonzor, 19-mavze, 36-uy",
      fullName: "Akbarova Nigora",
      phoneNumber: "+998 90 123 45 67",
      date: "03.08.2025",
    },
    {
      id: "5",
      name: "78-davlaat  bog‘chasi",
      address: "Toshkent sh., Chilonzor, 19-mavze, 36-uy",
      fullName: "Akbarova Nigora",
      phoneNumber: "+998 90 123 45 67",
      date: "03.08.2025",
    },
  ];
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
    <div>
      <KindegartenHeader
        Title={
          <BreadcrumbKindegarten
            routes={[
              { title: "Bog'chalar", route: "/dashboard" },
              { title: "Filialarim", route: `/dashboard/branchs/${id}` },
            ]}
          />
        }
      />
      <div className="grid grid-cols-3 px-2 pb-2 gap-5">
        {cards.map((card, cardIndex) => (
          <BranchsCard
            key={cardIndex}
            card={card}
            setChangedKindegarten={setChangedKindegarten}
            setOpenSeeDialog={setOpenSeeDialog}
          />
        ))}
      </div>
      <Dialog open={openSeeDialog} onOpenChange={setOpenSeeDialog}>
        {changedKindegarten.type === "update" ? (
          <KindegartenDialog
            title="Ma’lumotlarni o‘zgartirish"
            setOpen={setOpenSeeDialog}
            defaultValues={changedKindegarten.data}
            onSubmitCallback={onSubmitCallback}
          />
        ) : (
          <KindegartenDialog
            title="Ko'rish"
            setOpen={setOpenSeeDialog}
            defaultValues={changedKindegarten.data}
            type="readonly"
          />
        )}
      </Dialog>
    </div>
  );
}
