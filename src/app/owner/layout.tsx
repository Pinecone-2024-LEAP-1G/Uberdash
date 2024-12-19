import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AdminSideBar } from "@/components/AdminSideBoard";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <SidebarProvider>
      <AdminSideBar />
      <main className="ml-10 w-full">
        <SidebarTrigger />
        {children}
      </main>
    </SidebarProvider>
  );
}
