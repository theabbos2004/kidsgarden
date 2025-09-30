import { AppSidebar } from "@/app/_widgets/Sidebar/Sidebar";
import { SidebarProvider } from "@/components/ui/sidebar";

export default function Layout({
  children,
  dashboard,
}: {
  children: React.ReactNode;
  dashboard: React.ReactNode;
}) {
  return (
    <SidebarProvider className="bg-[var(--color-blue)] min-h-screen">
      <AppSidebar />
      <div className="w-full flex flex-col">
        {dashboard}
        <main>{children}</main>
      </div>
    </SidebarProvider>
  );
}
