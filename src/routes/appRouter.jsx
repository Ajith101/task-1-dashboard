import React from "react";
import { createBrowserRouter } from "react-router-dom";
import { Addons, Dashboard, Faq, Perks, Support } from "../pages";
import AppLayout from "../components/layout/AppLayout";

export const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "",
        element: <Dashboard />,
      },
      {
        path: "/perks",
        element: <Perks />,
      },
      {
        path: "/addons",
        element: <Addons />,
      },
      {
        path: "/faq",
        element: <Faq />,
      },
      {
        path: "/support",
        element: <Support />,
      },
    ],
  },
]);
