import React,{useState} from "react";
import { useTheme } from "@mui/material/styles";
import { Box, CssBaseline, useMediaQuery } from "@mui/material";
import { Outlet } from "react-router-dom";
import BottomNavigation from "layout/BottomNavigation";
import Header from "layout/Header";
import Footer from "layout/Footer";
import "./index.css";

const cart = JSON.parse(localStorage.getItem("cart"))


function CartView() {
  const theme = useTheme();
  const matchDownMd = useMediaQuery(theme.breakpoints.down("md"));


  function removeFromCart(currentProduct) {
    let cart  = localStorage.getItem("cart")
    cart = JSON.parse(cart)

    var updatedCart = cart.filter(function(item) { 
      return item.productId !== currentProduct.productId;  
   });

   localStorage.setItem("cart",JSON.stringify(updatedCart))
   alert("Product removed from cart")
   window.location.reload()
  }

  return (
    <>
      {" "}
      <CssBaseline />
      <Header />
      <div className="row mx-1.5">
        {/* <div className="col-1"></div> */}
        <div className="col-12 col-xl-8">
          {
            cart.map((product,index) => 
            
            <div key={index} className="card">
            <div className="row">
              <div className="col-12 col-md-3">
                <div className="d-flex flex-column">
                  <div className="flex flex-col justify-center items-center">
                    <img src={product.image}/>
                  </div>
                </div>
              </div>
              <div className="col-12 col-md-7">
                <div className="d-flex flex-col">
                  <h6 className="titleGray grayColor">Sony</h6>

                  <span className="productTitle">
                    {product.title}
                  </span>

                  <span className="titleGray grayColor">
                  {product.details}
                  </span>

          
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
                    <div>{product.price} Inclusive of VAT</div>
                  </div>

                  <div className="flex flex-row">
                    <div className="titleGray grayColor colWidth flex flex-col">
                      Saving :{" "}
                    </div>
                    <div>AED 920.00 {product.discount}</div>
                  </div>

                  <div onClick={()=>removeFromCart(product)} className="emiCards">
                    <h1>remove</h1>
                  </div>
                  {/* </div> */}
                </div>
              </div>
              <div className="col-12 col-md-2 priceCustom">
                <div className="title f-15">AED 2379</div>

                <div class="user-select-dropdown pb-2">
                    <select
                      class="form-select form-select-sm"
                      aria-label=".form-select-sm example"
                      defaultValue={product.qty}
                    >
                      <option value="1">1</option>
                      <option value="2">2</option>
                      <option value="3">2</option>
                    </select>
                  </div>

              </div>
            </div>
          </div>
            )
          }
       
        </div>
        <div className="col-12 col-xl-4">
          <div className="d-flex flex-column">
            <div className="p10 card">
              <h1 className="title f-25"> <b>Order Summary</b> </h1>
              <form>
                <div className="row">
                  <div className="col-9">
                    <div class="form-group">
                      <label for="exampleInputEmail1">
                        Coupon Code or Gift Card
                      </label>
                      <input
                        type="email"
                        class="form-control form-control-sm form-inputs"
                        id="exampleInputEmail1"
                        aria-describedby="emailHelp"
                      />
                    </div>
                  </div>
                  <div className="col-3">
                    <button type="submit" class="btn btn-primary">
                      Apply
                    </button>
                  </div>
                </div>
                <div className="d-flex space-between">
                  <label>Subtotal(1 item)</label>
                  <label>AED 2379.00</label>                
                </div>
                <div className="d-flex space-between">
                  <label>Shipping</label>
                  <label>AED 2379.00</label>                
                </div>
                <hr/>

                <div className="d-flex space-between f-25 pt-12">
                    <h1>
                      <b>Total</b>
                    </h1>
                    <label>
                      <h1>
                        <b>
                        AED 2379.00
                        </b>
                      </h1>
                    </label>
                </div>
                <div className="d-flex">
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
                </div>

                <div>
                  <div class="sign-up">
                    <button type="submit" class="btn btn-primary btn-register">
                      CHECKOUT
                    </button>
                  </div>
                </div>

              </form>
            </div>
          </div>
          <div className="d-flex">
            <div className="cashBackView">
                  <div className="imgCtr">
                    <img src="https://z.nooncdn.com/s/app/com/noon/icons/vip_credit_card.svg" />
                  </div>
                  <div>
                    Earn AED 118.95 cashback with the Mashreq Noon VIP Credit
                    Card.
                    <a href="/uae-en/mashreq-card-pdp/">
                      <b>Apply now</b>
                    </a>
                  </div>
                </div>
          </div>
        </div>
        {/* <div className="col-1"></div> */}
      </div>
    
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
