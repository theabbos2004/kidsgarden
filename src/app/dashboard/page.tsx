"use client";
import React, { useEffect, useState } from "react";
import { KindegartenHeader } from "@/app/_widgets/KindegartenHeader";

import { Dialog } from "@/components/ui/dialog";
import { KindegartenDialog } from "@/app/_widgets/KindegartenDialog";
import { changedKindegartenType, KindegartenType } from "@/lib/types";
import z from "zod";
import { KindegartenFormSchema } from "@/lib/definitions";

import { BreadcrumbKindegarten } from "@/app/_widgets/BreadcrumbKindegarten";
import { KindegartenCard } from "@/app/_widgets/KindegartenCard";
import { getKindegartens } from "@/actions/kindegartens";

export default function Kindegarten() {
  const [openSeeDialog, setOpenSeeDialog] = useState<boolean>(false);
  const [changedKindegarten, setChangedKindegarten] =
    useState<changedKindegartenType>({ type: "update", data: {} });
  const [cards, setCards] = useState<KindegartenType[]>([]);
  useEffect(() => {
    const getKindegartensFunc = async () => {
      const res = await getKindegartens();
      if (res.success && Array.isArray(res.data)) {
        const mapped = res.data.map((k) => ({
          id: k.id,
          name: k.name,
          address: `${k.address.region}, ${k.address.city}, ${k.address.street}, ${k.address.house}`,
          fullName: "Direktor ismi yo‘q",
          phoneNumber: k.phone,
          date: new Date().toLocaleDateString("uz-UZ"),
        }));
        setCards(mapped);
      }
    };
    getKindegartensFunc();
  }, []);

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
            routes={[{ title: "Bog'chalar", route: "/dashboard" }]}
          />
        }
      />
      <div className="grid grid-cols-3 px-2 pb-2 gap-5">
        {cards.map((card, cardIndex) => (
          <KindegartenCard
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
