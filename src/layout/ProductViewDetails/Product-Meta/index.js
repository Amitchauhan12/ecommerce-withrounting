import React, { useEffect } from "react";
import { useTheme } from "@mui/material/styles";
import { Box, CssBaseline, useMediaQuery } from "@mui/material";
import "./index.css";

function ProductMetaData() {
  function Item(props) {
    const { sx, ...other } = props;
    return (
      <Box
        sx={{
          p: 1,
          borderRadius: 2,
          fontSize: "0.875rem",
          ...sx,
        }}
        {...other}
      />
    );
  }

  return (
    <>
      <div class="bg-gray-100 px-5 py-4 flex flex-row justify-start">
        <div className="flex flex-row">
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

          <div className="flex flex-col"></div>
        </div>
      </div>
    </>
  );
}
export default ProductMetaData;
