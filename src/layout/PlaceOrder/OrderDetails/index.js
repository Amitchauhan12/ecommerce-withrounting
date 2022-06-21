import React, { useEffect, useState } from "react";
import { API_URL } from "../../../constants";
import "./index.css";

const token = localStorage.getItem("token")
function OrderDetails() {

  const [historyList, setHistoryList] = useState([])

  async function fetchOrderHistory() {

    var apiHeaders = new Headers();
    apiHeaders.append("Authorization", "Bearer "+token);
    
    
    var requestOptions = {
      method: 'GET',
      headers: apiHeaders
    };
    

    const response = await fetch(API_URL+"/order/orderHistory",requestOptions)
      .then((response) => response.json())
      .then((result) => result)
      .catch((error) => console.log("error", error));

      if(response?.status ==="success"){
        setHistoryList(response.result)
      }else if(response?.error?.message) alert(response?.error?.message)
      else alert("Error in fetching OrderHistory")
  }

  useEffect(() => {
    fetchOrderHistory()
  }, [])
  

  return (
    <>
      <div class="container">
        <div class="accordion" id="accordionPanelsStayOpenExample">
          <div class="accordion-item">
            <h3 class="card-title text-center py-3">Order Details</h3>
            <h2 class="accordion-header" id="panelsStayOpen-headingOne">
              <button
                class="accordion-button"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#panelsStayOpen-collapseOne"
                aria-expanded="true"
                aria-controls="panelsStayOpen-collapseOne"
              >
                Order Information
              </button>
            </h2>
            <div
              id="panelsStayOpen-collapseOne"
              class="accordion-collapse collapse show"
              aria-labelledby="panelsStayOpen-headingOne"
            >
              <div class="accordion-body">
                <div class="pb-2">
                  <strong>User Name</strong>
                  <p>John Doe</p>
                </div>
                <div class="pb-2">
                  <strong>User ID</strong>
                  <p>234253345</p>
                </div>
                <div class="pb-2">
                  <strong>Transaction Date</strong>
                  <p>8/12/2022</p>
                </div>
                <div class="pb-2">
                  <strong>Transaction ID</strong>
                  <p>4363775786587976</p>
                </div>
                <div class="pb-2">
                  <strong>Identifier</strong>
                  <p>Central (Divison)</p>
                </div>
                <div class="pb-2">
                  <strong>Payment Method</strong>
                  <p>Credit Card</p>
                </div>
                <div class="pb-2">
                  <strong>Order Status</strong>
                  <p>Completed</p>
                </div>
              </div>
            </div>
          </div>
          <div class="order-detail-block p-3 mt-3">
            <h3 class="card-title text-center py-3">Order Details</h3>

            <table class="table  order-detail-table table-bordered">
              <thead>
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">Title</th>
                  <th scope="col">Provier</th>
                  <th scope="col">Type</th>
                  <th scope="col">Status</th>
                  <th scope="col">Cost%</th>
                  <th scope="col">Quantity & Price</th>
                  <th scope="col">Subtotal</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">1</th>

                  <td>Back Safety: AUser's guide</td>
                  <td>Provider 1</td>
                  <td>Inventory</td>
                  <td>In Progress</td>
                  <td>82.02%</td>
                  <td>1/$51.00</td>
                  <td>$40.00</td>
                </tr>
                <tr>
                  <th scope="row">1</th>

                  <td>Back Safety: AUser's guide</td>
                  <td>Provider 1</td>
                  <td>Inventory</td>
                  <td>In Progress</td>
                  <td>82.02%</td>
                  <td>1/$51.00</td>
                  <td>$40.00</td>
                </tr>
                <tr>
                  <th scope="row">1</th>

                  <td>Back Safety: AUser's guide</td>
                  <td>Provider 1</td>
                  <td>Inventory</td>
                  <td>In Progress</td>
                  <td>82.02%</td>
                  <td>1/$51.00</td>
                  <td>$40.00</td>
                </tr>

                <tr>
                  <th scope="row">1</th>

                  <td>Back Safety: AUser's guide</td>
                  <td>Provider 1</td>
                  <td>Inventory</td>
                  <td>In Progress</td>
                  <td>82.02%</td>
                  <td>1/$51.00</td>
                  <td>$40.00</td>
                </tr>
                <tr>
                  <th scope="row">1</th>

                  <td>Back Safety: AUser's guide</td>
                  <td>Provider 1</td>
                  <td>Inventory</td>
                  <td>In Progress</td>
                  <td>82.02%</td>
                  <td>1/$51.00</td>
                  <td>$40.00</td>
                </tr>
              </tbody>
            </table>

            <div class="total-product-cost-section text-end">
              <p class="pb-2">
                <strong>Subtotal: </strong>
                <span class="px-2">$800.00</span>
              </p>
              <p class="pb-2">
                <strong>Processing Fee: </strong>
                <span class="px-2">$800.00</span>
              </p>
              <p class="pb-2">
                <strong>Discount: </strong>
                <span class="px-2">$800.00</span>
              </p>
              <h6 class="pb-2">
                <strong>Total</strong>
                <span class="total px-2">$3543.00</span>
              </h6>
            </div>
          </div>
        </div>
        <h3 class="card-title text-center py-3">Order History</h3>

        {historyList.length===0 && <p>Loading...</p>}
        
        <table class="table  order-detail-table table-bordered">
              <thead>
                <tr>
                  <th scope="col">#</th>
                  <th scope="col"></th>
                  <th scope="col">Name</th>
                  <th scope="col">Description</th>
                  <th scope="col">Price</th>
                  <th scope="col">Transaction ID</th>
                </tr>
              </thead>
              <tbody>

                {
                 historyList.length!==0 && historyList.map((product,index)=> 
                 <tr key={index}>
                  <th scope="row">{index+1}</th>

                  <td><img src={product.imageUrl} /></td>
                  <td>{product.productName}</td>
                  <td>{product.productDescription}</td>
                  <td>{product.productPrice}</td>
                  <td>{product.transactionId}</td>
                </tr>)
                }
        
              </tbody>
            </table>
        <div class="text-end">
          <button type="button" class="btn btn-primary btn-cancle">
            Back
          </button>
        </div>
      </div>
    </>
  );
}

export default OrderDetails;
