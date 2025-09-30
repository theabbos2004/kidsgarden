"use client";
import React from "react";
import { Header } from "@/app/_widgets/Header";
import { SearchInside } from "@/app/_widgets/SearchInside";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import { ComboboxWidget } from "@/app/_widgets/ComboBox";

export function KindegartenHeader() {
  return (
    <Header
      Title="Bog‘chalar"
      rightContent={
        <ul className="flex gap-4">
          <li>
            <SearchInside placeholder="Qidirish" />
          </li>
          <li>
            <ComboboxWidget placeholder="Saralash" />
          </li>
          <li>
            <Button variant="green" className=" rounded-3xl">
              <Plus />
              <span>Bog‘cha qo‘shish</span>
            </Button>
          </li>
        </ul>
      }
    />
  );
}
