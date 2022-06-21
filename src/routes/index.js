import React from "react";
import { useRoutes } from "react-router-dom";

// routes
import MainRoutes from "./MainRoutes";
import AuthenticationRoutes from "./AuthenticationRoutes";
import ProductViewDetails from "../layout/ProductViewDetails";
import CartView from "../layout/Cart";
import PlaceOrderView from "../layout/PlaceOrder";
import WhiteList from "../layout/Whitelist";
// ==============================|| ROUTING RENDER ||============================== //

export default function ThemeRoutes() {
  return useRoutes([
    MainRoutes,      
  {
    path: "product",
    element: <ProductViewDetails />,
  }, 
  {
    path: "favourite",
    element: <WhiteList/>
  },
  {
    path: "product/cart",
    element: <CartView />
  },
  {
    path: "product/place-order",
    element: <PlaceOrderView/>  
  },
  AuthenticationRoutes]);
}
