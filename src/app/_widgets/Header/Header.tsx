"use client";
import { cn } from "@/lib/utils";
import React from "react";

export function Header({
  Title,
  rightContent,
  className,
  ...props
}: {
  Title?: string;
  rightContent?: React.ReactNode;
  className?: string;
} & React.ComponentProps<"div">) {
  return (
    <div
      className={cn(
        `h-[73px] flex items-center justify-between px-7 py-5 `,
        className
      )}
      {...props}
    >
      <h1 className="text-2xl font-bold text-[var(--color-gray-2)]">{Title}</h1>
      {rightContent}
    </div>
  );
}
