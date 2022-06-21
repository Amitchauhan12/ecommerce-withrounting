import React, { useEffect } from "react";
import { useTheme } from "@mui/material/styles";
import { Box, CssBaseline, useMediaQuery } from "@mui/material";
import "./index.css";

function ProductMetaData({productDetails}) {

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

  function addToCartHandler(currentProduct) {
    let cart  = localStorage.getItem("cart")
    cart = JSON.parse(cart)
    for (const i in cart) {
      if(cart[i].productId === currentProduct.productId){
        alert("already added to cart")
        return
      }
    }
     
    if (cart) {
      cart.push(currentProduct)
    }else{
      cart = [productDetails]
    }

    localStorage.setItem("cart",JSON.stringify(cart))
    alert("Product added to cart")
  }

  return (
    <>
      <div class="bg-gray-100 w-full md:w-1/2 lg:w-4/12 px-4 xl:px-5 py-4 flex flex-row justify-start">
        <div className="flex flex-row">
          <div className="flex flex-col">
            <h6 className="titleGray grayColor">Sony</h6>

            <span className="productTitle">
              {productDetails.productName}
            </span>

            <span className="titleGray grayColor leading-6">
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
              <div>AED {productDetails.productPrice} Inclusive of VAT</div>
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

            <div class="container">
              <div class="row from-center">
                <div class="col-4 col-lg-2">
                  <div class="user-select-dropdown pb-2">
                    <label>Quantity</label>
                    <select
                      class="form-select form-select-sm"
                      aria-label=".form-select-sm example"
                    >
                      <option value="1">1</option>
                      <option value="2">2</option>
                      <option value="3">3</option>
                    </select>
                  </div>
                  </div>
                  <div className="col-8 col-lg-10">
                        <button onClick={()=>{addToCartHandler(productDetails)}} type="submit" class="btn btn-primary btn-register">
                          Add to Card
                        </button>
                  </div>
                </div>
              </div>

          </div>

          <div className="flex flex-col"></div>
        </div>
      </div>
    </>
  );
}
export default ProductMetaData;
