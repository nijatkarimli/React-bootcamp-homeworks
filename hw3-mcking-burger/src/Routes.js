import React from "react";
import Homepage from "./components/Screens/Homepage/Homepage";
import Successful from "./components/Screens/Successful/Successful";

export const routes = [
  {
    path: "/",
    exact: true,
    component: () => <Homepage />,
    title: "Home",
    isLink: true,
  },

  {
    path: "/successful",
    component: () => <Successful />,
    title: "Successful",
  },
];
