import { Calendar, Home, Inbox, Search, Settings } from "lucide-react";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import Link from "next/link";

// Menu items.
const items = [
  {
    title: "Home",
    url: "/",
    icon: Home,
  },
  {
    title: "GDP",
    url: "/gdp",
    icon: Inbox,
  },
  {
    title: "Import",
    url: "/import",
    icon: Calendar,
  },
  {
    title: "Export",
    url: "/export",
    icon: Search,
  },
  {
    title: "Business & Consumer",
    url: "/business",
    icon: Settings,
  },
  {
    title: "Government",
    url: "goverment",
    icon: Settings,
  },
  {
    title: "Other indicators",
    url: "other",
    icon: Settings,
  },
];

export function AppSidebar() {
  return (
    <Sidebar>
      <SidebarContent>
        <SidebarGroup className="flex flex-col gap-2">
          <SidebarGroupLabel className="text-xl font-semibold text-black py-6">
            Economy Dashboard
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton className="py-6 px-2" asChild>
                    <Link href={item.url}>
                      <>
                        <item.icon />
                        <span className="text-base">{item.title}</span>
                      </>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
