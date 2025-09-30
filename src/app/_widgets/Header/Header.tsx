"use client";

import { Bell, FileText, Inbox } from "lucide-react";
import { usePathname } from "next/navigation";
import React from "react";
import { BreadcrumbWidget } from "../Breadcrumb";

export function Header() {
  const pathname = usePathname();

  return (
    <div className="h-[73px] flex items-center justify-between px-7 py-5 border-b-1">
      <BreadcrumbWidget pathName={pathname} />
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
