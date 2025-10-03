"use client";
import React, { useState } from "react";
import { KindegartenHeader } from "@/app/_widgets/KindegartenHeader";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import {
  ArrowUpNarrowWide,
  Calendar,
  Download,
  MapPin,
  Pencil,
  Phone,
  User,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Dialog } from "@/components/ui/dialog";
import { KindegartenDialog } from "../_widgets/KindegartenDialog";
import { KindegartenFormType } from "@/lib/types";

export default function Kindegarten() {
  const [openSeeDialog, setOpenSeeDialog] = useState(false);
  const [changedKindegarten, setChangedKindegarten] =
    useState<KindegartenFormType>();
  const cards = [
    {
      name: "22-davlaat  bog‘chasi",
      address: "Toshkent sh., Chilonzor, 19-mavze, 36-uy",
      fullName: "Akbarova Nigora",
      phoneNumber: "+998 90 123 45 67",
      date: "03.08.2025",
    },
    {
      name: "34-davlaat  bog‘chasi",
      address: "Toshkent sh., Chilonzor, 19-mavze, 36-uy",
      fullName: "Akbarova Nigora",
      phoneNumber: "+998 90 123 45 67",
      date: "03.08.2025",
    },
    {
      name: "78-davlaat  bog‘chasi",
      address: "Toshkent sh., Chilonzor, 19-mavze, 36-uy",
      fullName: "Akbarova Nigora",
      phoneNumber: "+998 90 123 45 67",
      date: "03.08.2025",
    },
    {
      name: "45-davlaat  bog‘chasi",
      address: "Toshkent sh., Chilonzor, 19-mavze, 36-uy",
      fullName: "Akbarova Nigora",
      phoneNumber: "+998 90 123 45 67",
      date: "03.08.2025",
    },
    {
      name: "78-davlaat  bog‘chasi",
      address: "Toshkent sh., Chilonzor, 19-mavze, 36-uy",
      fullName: "Akbarova Nigora",
      phoneNumber: "+998 90 123 45 67",
      date: "03.08.2025",
    },
  ];

  return (
    <div>
      <KindegartenHeader />
      <div className=" grid grid-cols-3 px-2 pb-2 gap-5">
        {cards.map((card, cardIndex) => (
          <Card key={cardIndex}>
            <CardHeader className="text-xl flex justify-between">
              <h1 className="font-semibold">{card.name}</h1>
            </CardHeader>
            <CardContent>
              <ul className=" space-y-4">
                <li className="flex gap-3">
                  <MapPin className="text-xl" />
                  {card.address}
                </li>
                <li className="flex gap-3">
                  <User className="text-xl" />
                  {card.fullName}
                </li>
                <li className="flex gap-3">
                  <Phone className="text-xl" />
                  {card.phoneNumber}
                </li>
                <li className="flex gap-3">
                  <Calendar className="text-xl" />
                  <span>Qo‘shilgan sana:</span>
                  {card.date}
                </li>
              </ul>
            </CardContent>
            <CardFooter className="flex gap-2">
              <Button
                variant={"green"}
                className="rounded-3xl flex-1"
                onClick={() => {
                  const { date, ...newCard } = card;
                  setChangedKindegarten(newCard);
                  setOpenSeeDialog(true);
                }}
              >
                Filyalarni ko‘rsatish
              </Button>
              <Popover>
                <PopoverTrigger>
                  <div className="border-1 border-gray-900/34 rounded-sm p-1 text-[var(--color-gray-2)] cursor-pointer">
                    <ArrowUpNarrowWide className="text-2xl" />
                  </div>
                </PopoverTrigger>
                <PopoverContent className="w-auto border-1 rounded-2xl p-2 px-3 flex justify-center items-center">
                  <ul className="flex">
                    <li className="text-lg cursor-pointer">
                      <Pencil />
                    </li>
                    <li className="text-lg cursor-pointer">
                      <Download />
                    </li>
                  </ul>
                </PopoverContent>
              </Popover>
            </CardFooter>
          </Card>
        ))}
      </div>
      <Dialog open={openSeeDialog} onOpenChange={setOpenSeeDialog}>
        <KindegartenDialog
          title="Ko'rish"
          setOpen={setOpenSeeDialog}
          defaultValues={changedKindegarten}
          type="readonly"
        />
      </Dialog>
    </div>
  );
}
