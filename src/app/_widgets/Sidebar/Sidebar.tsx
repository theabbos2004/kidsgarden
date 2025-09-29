import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarHeader,
} from "@/components/ui/sidebar";
import { Profile } from "@/app/_widgets/Profile";
import { Search } from "@/app/_widgets/Search";
import { Menu } from "@/app/_widgets/Menu";
import { Settings } from "lucide-react";
import Link from "next/link";

export function AppSidebar() {
  return (
    <Sidebar className="rounded-tr-4xl overflow-hidden border-none">
      <SidebarHeader className="p-2">
        <Profile />
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup className="border-y-1 p-2 px-6">
          <Search />
        </SidebarGroup>
        <SidebarGroup className="p-0 pt-9">
          <Menu />
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter className="p-5 pb-9">
        <Link href="dashboard/settings" className="flex gap-5">
          <Settings className="size-6" />
          <span>Sozlamalar</span>
        </Link>
      </SidebarFooter>
    </Sidebar>
  );
}
