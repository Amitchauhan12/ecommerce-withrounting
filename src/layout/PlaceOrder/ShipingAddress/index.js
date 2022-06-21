import React from "react";
import "./index.css";

function ShippingAddress() {
  return (
    <>
      <div class="container">
        <div class="row from-center">
          <div class="col-md-8 text-start">
            <div class="user-select-dropdown pb-2">
              <label>Cost Center</label>
              <select
                class="form-select form-select-sm"
                aria-label=".form-select-sm example"
              >
                <option selected>Select cost center</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </select>
            </div>
            <div class="row pb-2">
              <div class="col-md-6">
                <label>First Name</label>
                <input type="text" class="form-control form-inputs" />
              </div>
              <div class="col-md-6">
                <label>Last Name</label>
                <input type="text" class="form-control form-inputs" />
              </div>
            </div>
            <div class="row pb-2">
              <div class="col-md-6">
                <label>Pincode</label>
                <input type="text" class="form-control form-inputs" />
              </div>
              <div class="col-md-6">
                <div class="user-select-dropdown pb-2">
                  <label>City</label>
                  <select
                    class="form-select form-select-sm"
                    aria-label=".form-select-sm example"
                  >
                    <option selected>Select cost center</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                  </select>
                </div>
              </div>
            </div>
            <div class="pb-2">
              <label>Address</label>
              <input type="textarea" class="form-control form-inputs" />
            </div>
            <div class="row pb-2">
              <div class="col-md-6">
                <div class="user-select-dropdown">
                  <label>Country</label>
                  <select
                    class="form-select form-select-sm"
                    aria-label=".form-select-sm example"
                  >
                    <option selected>Select cost center</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                  </select>
                </div>
              </div>
              <div class="col-md-6">
                <div class="user-select-dropdown">
                  <label>State</label>
                  <select
                    class="form-select form-select-sm"
                    aria-label=".form-select-sm example"
                  >
                    <option selected>Select cost center</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                  </select>
                </div>
              </div>
            </div>

            <h6 class="mt-3">
              Shipping Addresses available to you depends on the cost centers
              unit.
            </h6>

            <div class="shipping-address-blocks">
              <h6>Select Your Shipping Address</h6>
            </div>
          </div>
          <div class="row">
            <h3 class="card-title text-center shipping-adress-title">
              Shipping Address
            </h3>
            <div class="col-md-6">
              <div class="address-block">
                <p>Adress line 1</p>
                <p>Address line 2</p>
                <p>Address line 2</p>
                <p>Address line 2</p>
                <a href="#" class="ship-to-address">
                  Ship To This Address
                </a>
              </div>
            </div>
            <div class="col-md-6">
              <div class="address-block">
                <p>Adress line 1</p>
                <p>Address line 2</p>
                <p>Address line 2</p>
                <p>Address line 2</p>
                <a href="#" class="ship-to-address">
                  Ship To This Address
                </a>
              </div>
            </div>
          </div>
          {/* <div class="button-confirm-group">
            <button type="submit" class="btn btn-primary btn-register">
              Back
            </button>
            <button type="submit" class="btn btn-primary btn-confirmation">
              Confirm
            </button>
          </div> */}
        </div>
      </div>
    </>
  );
}

export default ShippingAddress;
