import Image from "next/image";
import React from "react";

export function Profile() {
  return (
    <div className="flex items-center gap-2">
      <div className="size-14 rounded-full border-2 border-[var(--color-blue-1)] p-0.5">
        <Image
          src="/images/profile.png"
          alt="Profile"
          width={50}
          height={50}
          className="w-full h-auto object-contain"
        />
      </div>
      <div>
        <h2 className="font-medium">@Mukhsin_06</h2>
        <p className="text-sm text-gray-500">Admin</p>
      </div>
    </div>
  );
}
