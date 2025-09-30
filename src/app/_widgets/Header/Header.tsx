"use client";

import { Bell, FileText, Inbox } from "lucide-react";
import React from "react";

export function Header() {
  return (
    <div className="h-[73px] flex items-center justify-between px-7 py-5 border-b-1">
      <h1 className="text-2xl font-bold text-[var(--color-gray-2)]">
        Dashboard
      </h1>
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
    </div>
  );
}
