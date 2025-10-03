import Link from "next/link";

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

export function BreadcrumbKindegarten({
  routes,
}: {
  routes: { title: string; route: string }[];
}) {
  return (
    <Breadcrumb>
      <BreadcrumbList>
        {routes.map((route, routeIndex) => {
          return (
            <div key={routeIndex} className="flex items-center gap-2">
              <BreadcrumbItem>
                <BreadcrumbLink asChild>
                  <Link href={route.route} replace>
                    {route.title}
                  </Link>
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
            </div>
          );
        })}
      </BreadcrumbList>
    </Breadcrumb>
  );
}
