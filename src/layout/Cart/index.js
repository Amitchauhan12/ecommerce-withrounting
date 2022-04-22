import React from "react";
import { useTheme } from "@mui/material/styles";
import { Box, CssBaseline, useMediaQuery } from "@mui/material";
import { Outlet } from "react-router-dom";
import BottomNavigation from "layout/BottomNavigation";
import Header from "layout/Header";
import Footer from "layout/Footer";
import "./index.css";

function CartView() {
    const theme = useTheme();
    const matchDownMd = useMediaQuery(theme.breakpoints.down("md"));
  
    
  return (
    <>
      {" "}
      <CssBaseline />
      <Header />
      <Box
        sx={{
          display: "grid",
          columnGap: 3,
          rowGap: 1,
          gridTemplateColumns: "repeat(2, 1fr)",
        }}
      >
        <div className="flex flex-col justify-center items-center">image</div>
        <div className="flex flex-col justify-center items-center">
        <div className="flex flex-col">
            <h6 className="titleGray grayColor">Sony</h6>

            <span className="productTitle">
              PlayStation 5 Console (Disc Version) With Controller
            </span>

            <span className="titleGray grayColor">
              Model Number : PS5_Disc | 4.7 starFilled 715 Ratings
            </span>

            {/* <Box
                    sx={{
                      display: "grid",
                      columnGap: 3,
                      rowGap: 1,
                      gridTemplateColumns: "repeat(2, 1fr)",
                    }}
                  > */}
            <div className="flex flex-row">
              <div className="titleGray grayColor colWidth flex flex-col">
                Was :{" "}
              </div>
              <div className="flex flex-col">AED 3299.00</div>
            </div>

            <div className="flex flex-row">
              <div className="titleGray grayColor colWidth flex flex-col">
                Now :{" "}
              </div>
              <div>AED 2379.00 Inclusive of VAT</div>
            </div>

            <div className="flex flex-row">
              <div className="titleGray grayColor colWidth flex flex-col">
                Saving :{" "}
              </div>
              <div>AED 920.00 27%Off</div>
            </div>

            <div className="cashBackView">
              <div className="imgCtr">
                <img src="https://z.nooncdn.com/s/app/com/noon/icons/vip_credit_card.svg" />
              </div>
              <div>
                Earn AED 118.95 cashback with the Mashreq Noon VIP Credit Card.
                <a href="/uae-en/mashreq-card-pdp/">
                  <b>Apply now</b>
                </a>
              </div>
            </div>

            <div className="bankOffer">
                <div className="imgCtr">
                    <img src="https://z.nooncdn.com/s/app/com/noon/icons/emi.svg" />
                </div>
                <div>
                    Monthly payment plans from AED 397
                    <span className="emi-text">
                    <b>View more details</b>
                    </span>
                </div>
            </div>

            <div className="emiCards">
                <img src="../../../../public/img/en_PDP.png"/>
            </div>
            {/* </Box> */}
          </div>

        </div>
        <div className="flex flex-col justify-center items-center">price</div>
      </Box>
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

export default CartView;
