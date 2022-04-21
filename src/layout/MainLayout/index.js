import React, { useEffect } from "react";
import { Outlet } from "react-router-dom";

// material-ui
import { useTheme } from "@mui/material/styles";
import { Box, CssBaseline, useMediaQuery } from "@mui/material";

import BottomNavigation from "layout/BottomNavigation";
import Header from "layout/Header";
import HomeBannerSlider from "layout/HomeBannerSlider";
import RecommendedFor from "layout/RecommendedFor";
import MegaDeals from "layout/MegaDeals";
import SuperDeals from "layout/SuperDeals";
import RandomClearance from "layout/RandomClearance";
import TrandingElectronics from "layout/TrandingElectronics";
import YourRandom from "layout/YourRandoms";
import HomeBlogs from "layout/HomeBlogs";
import TopPicks from "layout/TopPicks";
import { KeenSlider } from "../../components";

import Footer from "layout/Footer";

// ==============================|| MAIN LAYOUT ||============================== //

const MainLayout = () => {
  const theme = useTheme();
  const matchDownMd = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <Box>
      <CssBaseline />
      <Header />
      <HomeBannerSlider />
      <RecommendedFor />
      <MegaDeals />
      <SuperDeals />
      <RandomClearance />
      <TrandingElectronics />
      <YourRandom />
      <HomeBlogs />
      <TopPicks />
      <Footer />
      <div className={matchDownMd ? "block" : "hidden"}>
        <BottomNavigation />
      </div>

      <div>
        <Outlet />
      </div>
    </Box>
  );
};

export default MainLayout;
