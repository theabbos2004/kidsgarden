"use client";
import { Header } from "@/app/_widgets/Header";
import { Card, CardFooter, CardHeader } from "@/components/ui/card";
import {
  ArrowDown,
  ArrowUp,
  Banknote,
  Bell,
  FileText,
  Inbox,
  School,
  User,
  Users,
} from "lucide-react";
import React from "react";

export default function dashboard() {
  const cards = [
    {
      title: "Bog‘chalar soni",
      count: "12",
      icon: School,
      status: { increase: true, value: 8.1 },
      color: "green",
    },
    {
      title: "O‘quvchilar soni",
      count: "1248",
      icon: User,
      status: { increase: true, value: 12.5 },
      color: "blue",
    },
    {
      title: "O‘qituvchilar soni",
      count: "64",
      icon: Users,
      status: { increase: true, value: 4.3 },
      color: "purple",
    },
    {
      title: "Oylik tushum",
      count: "1.144M",
      icon: Banknote,
      status: { increase: true, value: 21.8 },
      color: "orange",
    },
    {
      title: "Oylik daromatlar",
      count: "1.144M",
      icon: Banknote,
      status: { increase: true, value: 21.8 },
      color: "orange",
    },
  ];
  return (
    <div>
      <Header
        Title="Dashboard"
        rightContent={
          <ul className="flex gap-3">
            <li className="cursor-pointer">
              <Inbox className="size-7" />
            </li>
            <li className="cursor-pointer">
              <FileText className="size-7" />
            </li>
            <li className="cursor-pointer">
              <Bell className="size-7" />
            </li>
          </ul>
        }
        className="border-b-1"
      />
      <ul className="px-2 pt-4 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-2">
        {cards.map((card, index) => {
          const Icon = card.icon;
          return (
            <Card
              key={index}
              className="rounded-3xl flex flex-col justify-between"
            >
              <CardHeader className="flex justify-between">
                <div>
                  <h1 className="text-base">{card.title}</h1>
                  <span className=" text-3xl font-bold">{card.count}</span>
                </div>
                <div
                  className={`size-12 p-2 rounded-xl flex justify-center items-center ${
                    card.color === "green"
                      ? "bg-[var(--color-green)] text-green-500"
                      : card.color === "purple"
                      ? "bg-[var(--color-purple-1)]/20 text-[var(--color-purple-1)]"
                      : card.color === "blue"
                      ? "bg-[var(--color-blue-2)]/20 text-[var(--color-blue-2)]"
                      : card.color === "orange"
                      ? "bg-[var(--color-orange)]/20 text-[var(--color-orange)]"
                      : ""
                  }`}
                >
                  <Icon className="size-12" />
                </div>
              </CardHeader>
              <CardFooter
                className={`${
                  card.color === "green"
                    ? "text-green-500"
                    : card.color === "purple"
                    ? "text-[var(--color-purple-1)]"
                    : card.color === "blue"
                    ? "text-[var(--color-blue-2)]"
                    : card.color === "orange"
                    ? "text-[var(--color-orange)]"
                    : ""
                }`}
              >
                {card.status.increase ? (
                  <ArrowUp className="text-xl" />
                ) : (
                  <ArrowDown />
                )}
                <span className="px-2">{card.status.value}%</span>
                <span>
                  {card.status.increase ? "oylik o‘sish" : "oylik pasayish"}
                </span>
              </CardFooter>
            </Card>
          );
        })}
      </ul>
    </div>
  );
}
