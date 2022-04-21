import React from "react";
import { useRoutes } from "react-router-dom";

// routes
import MainRoutes from "./MainRoutes";
import AuthenticationRoutes from "./AuthenticationRoutes";
import ProductViewDetails from "../layout/ProductViewDetails";
// ==============================|| ROUTING RENDER ||============================== //

export default function ThemeRoutes() {
  return useRoutes([
    MainRoutes,      
  {
    path: "product",
    element: <ProductViewDetails />,
  }, 
  AuthenticationRoutes]);
}
