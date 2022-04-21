import React from "react";
// material-ui
import { useTheme } from "@mui/material/styles";
import { Box, CssBaseline, useMediaQuery } from "@mui/material";
import MobileHeader from "./components/MobileHeader";
import DesktopHeader from "./components/DesktopHeader";

const Header = () => {
  const theme = useTheme();
  const matchDownMd = useMediaQuery(theme.breakpoints.down("md"));

  return <div>{matchDownMd ? <MobileHeader /> : <DesktopHeader />}</div>;
};

export default Header;
