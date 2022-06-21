import React, { useEffect } from "react";
import './index.css';

function ProductOffers() {
  return (
    <>
      <div class="bg-gray-100 w-full lg:w-4/12 px-4 py-4 flex flex-row justify-start">
        <div className="flex flex-row">
          <div className="flex flex-col">
              <div className="flex flex-row"> 
                <div className="offersDiv">
                    <img src="https://z.nooncdn.com/s/app/com/noon/icons/free_returns.svg" alt="free_returns" class="sc-afe2674f-1 iCmumG free_returns" width="24px" height="24px"/>
                    <div className="returnableInfo">
                        <span>Enjoy hassle free returns with this offer.</span>
                        <div className="learnMore">
                            <span>
                                <a>Learn more</a>
                                <div className="blueLine"></div>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
                <div className="flex flex-row"> 
                    <div className="offersDiv">
                        <img src="https://z.nooncdn.com/s/app/com/noon/icons/warranty.svg" alt="free_returns" class="sc-afe2674f-1 iCmumG free_returns" width="24px" height="24px"/>
                        <div className="returnableInfo">
                            <span> <b>1 year warranty</b></span>
                        </div>
                    </div>
                </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProductOffers;
