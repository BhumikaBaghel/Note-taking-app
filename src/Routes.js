import React from "react";
import { useRoutes } from "react-router-dom";
import ListView from "./components/ListView";
import SingleItem from "./components/SingleItem";
import CreateNote from "./components/Create";
import Register from "./components/Register";

const Routes = () => {
  const routes = useRoutes([
    {
      path: "/",
      element: <ListView />,
    },
    {
      path: "single-item/:id",
      element: <SingleItem />,
    },
    {
      path: "create/",
      element: <CreateNote />,
    },
    {
      path: "register/",
      element: <Register />,
    },
  ]);

  return routes;
};

export default Routes;
