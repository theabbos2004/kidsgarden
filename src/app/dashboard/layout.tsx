import { AppSidebar } from "@/app/_widgets/Sidebar/Sidebar";
import { SidebarProvider } from "@/components/ui/sidebar";
import { Header } from "../_widgets/Header";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <SidebarProvider className="bg-[var(--color-blue)] min-h-screen">
      <AppSidebar />
      <div className="w-full flex flex-col">
        <Header />
        <main>{children}</main>
      </div>
    </SidebarProvider>
  );
}
