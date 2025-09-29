import { SearchIcon } from "lucide-react";
import React from "react";
import { Input } from "../../../components/ui/input";

export function Search() {
  return (
    <div className="flex items-center gap-2">
      <SearchIcon className="size-7 text-[var(--color-gray)]/81" />
      <Input
        className="h-8 w-40 border-[var(--color-gray)]/34"
        placeholder="Search here"
      />
    </div>
  );
}
