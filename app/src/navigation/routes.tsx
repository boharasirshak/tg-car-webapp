import type { JSX } from "react";

interface Route {
  path: string;
  title?: string;
  icon?: JSX.Element;
}

// Define the routes for the app to be used in the navigation

export const routes: Route[] = [
  { path: "/", title: "Home" },
  { path: "/init-data", title: "Init Data" },
  { path: "/launch-params", title: "Launch Params" },
];
