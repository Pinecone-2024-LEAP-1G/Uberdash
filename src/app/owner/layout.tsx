import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AdminSideBar } from "@/components/AdminSideBoard";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <SidebarProvider>
      <AdminSideBar />
      <main>
        <SidebarTrigger />
        {children}
      </main>
    </SidebarProvider>
  );
}
