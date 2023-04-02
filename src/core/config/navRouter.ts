import { IconTypes } from "@src/components/ui/atom/Icon/Icon";

export type NavRouterType = {
  path: string;
  icon: IconTypes;
};

export const navRouter: NavRouterType[] = [
  {
    path: "/",
    icon: "google",
  },
  {
    path: "/",
    icon: "kakao",
  },
];
