import { AppSidebar } from "@/app/_widgets/Sidebar/Sidebar";
import { SidebarProvider } from "@/components/ui/sidebar";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <SidebarProvider className="bg-[var(--color-blue)] min-h-screen">
      <AppSidebar />
      <main>{children}</main>
    </SidebarProvider>
  );
}
