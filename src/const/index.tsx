import { Bell, Home, User, Users, ChartNoAxesColumn } from "lucide-react";

export const menuList = [
  {
    label: "Bo‘shchalar ro‘yxati",
    route: "/dashboard",
    icon: Home,
  },
  {
    label: "Profile",
    route: "/dashboard/profile",
    icon: User,
  },
  {
    label: "Groups",
    route: "/dashboard/groups",
    icon: Users,
  },
  {
    label: "Notifications",
    route: "/dashboard/notifications",
    icon: Bell,
  },
  {
    label: "Statistikalar",
    route: "/dashboard/statistics",
    icon: ChartNoAxesColumn,
  },
];
