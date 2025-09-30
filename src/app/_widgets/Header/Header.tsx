"use client";
import React from "react";

export function Header({
  Title,
  rightContent,
}: {
  Title?: string;
  rightContent?: React.ReactNode;
}) {
  return (
    <div className="h-[73px] flex items-center justify-between px-7 py-5 border-b-1">
      <h1 className="text-2xl font-bold text-[var(--color-gray-2)]">{Title}</h1>
      {rightContent}
    </div>
  );
}
