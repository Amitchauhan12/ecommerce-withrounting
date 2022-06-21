import React from "react";
import { useTheme } from "@mui/material/styles";
import { Box, CssBaseline, useMediaQuery } from "@mui/material";
import { Outlet } from "react-router-dom";
import BottomNavigation from "layout/BottomNavigation";
import Header from "layout/Header";
import Footer from "layout/Footer";
import "./index.css";

function WhiteList() {
  const theme = useTheme();
  const matchDownMd = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <>
      {" "}
      <CssBaseline />
      <Header />
      <h1>WhiteList</h1>
      <Footer />
      <div className={matchDownMd ? "block" : "hidden"}>
        <BottomNavigation />
      </div>
      <div>
        <Outlet />
      </div>
    </>
  );
}
export default WhiteList;
