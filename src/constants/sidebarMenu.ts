import { ISidebarMenuItem } from "@/components/Sidebar/types";

export const PUBLIC_SIDEBAR_MENU: ISidebarMenuItem[] = [
  { name: "login", title: "Sign in", icon: "mdi-account" },
  { name: "register", title: "Sign up", icon: "mdi-account" },
];

export const PRIVATE_SIDEBAR_MENU: ISidebarMenuItem[] = [
  { name: "dashboard", title: "Dashboard", icon: "mdi-view-dashboard" },
  { name: "create-exercise", title: "Create Exercise", icon: "mdi-text-box" },
  { name: "edit-exercises", title: "Edit Exercise", icon: "mdi-text-box" },
  { name: "create-workout", title: "Create Workout", icon: "mdi-text-box" },
  { name: "edit-workout", title: "Edit Workout", icon: "mdi-text-box" },
];
