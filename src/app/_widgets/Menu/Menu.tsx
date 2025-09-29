"use client";
import { menuList } from "@/const";
import Link from "next/link";
import { usePathname } from "next/navigation";

export function Menu() {
  const pathname = usePathname();
  return (
    <div className="space-y-8">
      {menuList.map((menu, menuIndex) => {
        const Icon = menu.icon;
        return (
          <Link
            href={menu.route}
            key={menuIndex}
            className={`flex gap-5 text-[var(--color-gray-1)] ${
              pathname === menu.route
                ? "ml-4 p-4 pl-7 bg-[var(--color-blue)] rounded-bl-4xl shadow-xl"
                : "pl-12"
            }`}
          >
            <Icon className="size-6" />
            <span>{menu.label}</span>
          </Link>
        );
      })}
    </div>
  );
}
