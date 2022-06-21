import React from "react";
import PaypalBtn from "../../../components/Paypal";
import "./index.css";

function Payment() {
  return (
    <>
      <div class="container p-0">
        <div class="payment-card px-4">
          <p class="card-title text-center py-3 mb-5">Payment Details</p>
          {/* <div class="row gx-3">
            <div class="col-12">
              <div class="d-flex flex-column">
                <p class="text mb-1">Person Name</p>
                <input
                  class="form-control mb-3 form-inputs"
                  type="text"
                  placeholder="Name"
                  value="Barry Allen"
                />
              </div>
            </div>
            <div class="col-12">
              <div class="d-flex flex-column">
                <p class="text mb-1">Card Number</p>
                <input
                  class="form-control mb-3 form-inputs"
                  type="text"
                  placeholder="1234 5678 435678"
                />
              </div>
            </div>
            <div class="col-6">
              <div class="d-flex flex-column">
                <p class="text mb-1">Expiry</p>
                <input
                  class="form-control mb-3 form-inputs"
                  type="text"
                  placeholder="MM/YYYY"
                />
              </div>
            </div>
            <div class="col-6">
              <div class="d-flex flex-column">
                <p class="text mb-1">CVV/CVC</p>{" "}
                <input
                  class="form-control mb-3 pt-2 form-inputs"
                  type="password"
                  placeholder="***"
                />
              </div>
            </div>
            <div class="col-12">
              <button
                type="submit"
                class="btn btn-primary btn-confirmation mt-3"
              >
                Make Payment
              </button>
            </div>
          </div> */}
        <PaypalBtn />

        </div>

      </div>
    </>
  );
}

export default Payment;
