import { Hash } from "./types";

export interface RouteProps {
  name: string;
  path: string;
  description: string;
  isExternal?: boolean;
}

type RouteHash = Hash<RouteProps>;

export const UserRoutes: RouteProps[] = [
  {
    name: "Messages",
    path: "/messages",
    description: "About Section",
  },
];

// Site Routes are Routes that can only exist within the context of
// the host. IE `https://actuallygethired/contact'
export const SiteRoutes: RouteHash = {
  home: {
    name: "Home",
    path: "/",
    description: "Home Page",
  },
  about: {
    name: "About",
    path: "/about",
    description: "About Section",
  },
  contact: {
    name: "Contact",
    path: "/contact",
    description: "Contact Section",
  },
  donate: {
    name: "Donate",
    path: "/donate",
    description: "About Section",
  },
};
