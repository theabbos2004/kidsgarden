"use client";
import React, { Dispatch, SetStateAction } from "react";
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
  Eye,
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
import Link from "next/link";
import { changedKindegartenType, KindegartenType } from "@/lib/types";
export function KindegartenCard({
  card,
  setChangedKindegarten,
  setOpenSeeDialog,
}: {
  card: KindegartenType;
  setChangedKindegarten: Dispatch<SetStateAction<changedKindegartenType>>;
  setOpenSeeDialog: Dispatch<SetStateAction<boolean>>;
}) {
  return (
    <Card>
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
        <Button asChild variant="green" className="rounded-3xl flex-1">
          <Link href={`dashboard/branchs/${card.id}`}>Filyalarni ko‘rsatish</Link>
        </Button>
        <Popover>
          <PopoverTrigger>
            <div className="border-1 border-gray-900/34 rounded-sm p-1 text-[var(--color-gray-2)] cursor-pointer">
              <ArrowUpNarrowWide className="text-2xl" />
            </div>
          </PopoverTrigger>
          <PopoverContent className="w-auto border-1 rounded-2xl p-2 px-3 flex justify-center items-center">
            <ul className="flex gap-2">
              <li
                className="text-lg cursor-pointer"
                onClick={() => {
                  const { ...newCard } = card;
                  setChangedKindegarten({ type: "view", data: newCard });
                  setOpenSeeDialog(true);
                }}
              >
                <Eye />
              </li>
              <li
                className="text-lg cursor-pointer"
                onClick={() => {
                  const { ...newCard } = card;
                  setChangedKindegarten({
                    type: "update",
                    data: newCard,
                  });
                  setOpenSeeDialog(true);
                }}
              >
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
  );
}
