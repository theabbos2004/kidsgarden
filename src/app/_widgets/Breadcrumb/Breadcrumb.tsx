"use client";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { capitalize } from "@/hooks/word";
import Link from "next/link";
import React from "react";

export function BreadcrumbWidget({ pathName }: { pathName: string }) {
  const formattedPathname = pathName.split("/").filter(Boolean);

  return (
    <Breadcrumb>
      <BreadcrumbList>
        {formattedPathname.map((pathName, index) => {
          const href = "/" + formattedPathname.slice(0, index + 1).join("/");
          const isLast = index === formattedPathname.length - 1;

          return (
            <div key={href} className="flex items-center">
              {index !== 0 && <BreadcrumbSeparator />}
              <BreadcrumbItem>
                {isLast ? (
                  <BreadcrumbPage className="text-2xl font-bold text-[var(--color-gray-2)]">
                    {capitalize(pathName)}
                  </BreadcrumbPage>
                ) : (
                  <BreadcrumbLink
                    asChild
                    className="text-2xl font-bold text-[var(--color-gray-2)]"
                  >
                    <Link href={href}>{capitalize(pathName)}</Link>
                  </BreadcrumbLink>
                )}
              </BreadcrumbItem>
            </div>
          );
        })}
      </BreadcrumbList>
    </Breadcrumb>
  );
}
