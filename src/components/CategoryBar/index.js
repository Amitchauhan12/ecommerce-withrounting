import React, { useEffect, useState } from "react";
import Megamenu from "../MegaMenu";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import "./index.css";
import { API_URL } from "../../constants";

const categories = ["Fashion", "Beauty", "Fragrance", "Spares"];

const CategoryBar = () => {
  const [categoryList, setCategoryList] = useState([]);

  async function fetchCategories() {
    const response = await fetch(API_URL + "/category/allcategories")
      .then((response) => response.json())
      .then((result) => result)
      .catch((error) => console.log("error", error));
    // console.log(response);

    if (response.status === "success") {
      setCategoryList(response.result);
    }
  }

  useEffect(() => {
    fetchCategories();
  }, []);

  return (
    <div>
      {/* <Megamenu/> */}
      <div
        className="px-10 cursor-pointer"
        style={{ background: "rgb(255, 255, 255)" }}
      >
        <div className="flex flex-row justify-start items-center">
          <nav className="navbar navbar-expand-lg navbar-light bg-white py-3">
            <div className="container-fluid">
              <div className="flex flex-row justify-start items-center space-x-4 border-r border-gray-300 py-3 pr-3">
                <p className="font-bold text-xs text-blue-500 uppercase">
                  All Categories
                </p>
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-4 w-4"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                      clip-rule="evenodd"
                    />
                  </svg>
                </div>
              </div>

              <a
                href="#"
                className="navbar-brand font-weight-bold d-block d-lg-none"
              >
                MegaMenu
              </a>

              {
                categories.map((cat,index)=> <p key={index} className="navbar-brand font-bold text-xs text-blue-500 uppercase ml-2">
                {cat}
              </p>)
              }
             

              <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon"></span>
              </button>
              <div
                id="navbarSupportedContent"
                className="collapse navbar-collapse"
              >
                {/* categories fetched by API  */}
                {/* <ul className="navbar-nav mx-auto">
                  {categoryList.map((el, index) => {
                    return (
                      <li key={index} className="nav-item dropdown megamenu">
                        <a
                          id="megamneu"
                          href="#"
                          data-bs-toggle="dropdown"
                          aria-expanded="false"
                          className="nav-link dropdown-toggle font-weight-bold text-uppercase dropdown-toggle"
                        >
                          {el.categoryName}
                        </a>
                        <div
                          aria-labelledby="dropdownMenuButton1"
                          className="dropdown-menu border-0 p-0 m-0"
                        >
                          <div className="container container-custom">
                            <div className="row bg-white rounded-0 m-0 shadow-sm">
                              <div className="col-lg-7 col-xl-8">
                                <div className="p-4">
                                  <div className="row">
                                    <div className="col-lg-6 mb-4">
                                      <h6 className="font-weight-bold text-uppercase">
                                        {el.categoryName} heading
                                      </h6>
                                      <ul className="list-unstyled">
                                        {el.subCategory.map(
                                          (subCatEl, index) => (
                                            <li
                                              key={index}
                                              className="nav-item"
                                            >
                                              <a
                                                href=""
                                                className="nav-link text-small pb-0"
                                              >
                                                {subCatEl.subCategoryName}
                                              </a>
                                            </li>
                                          )
                                        )}
                                      </ul>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div class="col-lg-5 col-xl-4 px-0 d-none d-lg-block megaimaga"></div>
                            </div>
                          </div>
                        </div>
                      </li>
                    );
                  })}
                </ul> */}
              </div>
            </div>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default CategoryBar;
