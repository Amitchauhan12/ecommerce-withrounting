import React, { useEffect } from "react";
import { Outlet } from "react-router-dom";

// material-ui
import { useTheme } from "@mui/material/styles";
import { Box, CssBaseline, useMediaQuery } from "@mui/material";

import BottomNavigation from "layout/BottomNavigation";
import Header from "layout/Header";
import Footer from "layout/Footer";
import "./index.css";
import ProductMetaData from "./Product-Meta";
import ProductFeatures from "./ProductFeatures";
import ProductOffers from "./ProductOffers";
function ProductView() {
  const theme = useTheme();
  const matchDownMd = useMediaQuery(theme.breakpoints.down("md"));

  

  return (
    <>
      <Box>
        <CssBaseline />
        <Header />
        <div>
          <div className="flex flex-row justify-between space-x-5 items-center">
            {/* <div className="flex flex-row justify-between space-x-3 items-center">
              1
            </div>
            <div className="flex flex-row justify-between space-x-3 items-center">
              2
            </div> */}
          </div>
          <Box
            sx={{
                display: "grid",
                rowGap: 1,
                gridTemplateColumns: "repeat(3, 1fr)",
            }}
          >
            <div class="w-full h-full bg-gray-200 rounded-md  group-hover:opacity-75">
                <img src="https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg" alt="Front of men&#039;s Basic Tee in black." class="w-full h-full  object-center object-cover" />
            </div>
            <ProductMetaData />
            <ProductOffers />
          </Box>
          <ProductFeatures />
        </div>
        <Footer />
        <div className={matchDownMd ? "block" : "hidden"}>
          <BottomNavigation />
        </div>

        <div>
          <Outlet />
        </div>
      </Box>
    </>
  );
}

export default ProductView;
