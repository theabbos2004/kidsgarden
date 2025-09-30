import { SearchIcon } from "lucide-react";
import React from "react";

export function SearchInside({ placeholder }: { placeholder?: string }) {
  return (
    <div className=" min-w-64 h-9 rounded-3xl flex items-center gap-2 border-1 border-[var(--color-gray)]/34 px-3 py-2 bg-white">
      <SearchIcon className="size-5 text-[var(--color-gray)]/81" />
      <input
        className="border-none outline-none"
        placeholder={placeholder || "serch here"}
        type="search"
      />
    </div>
  );
}
