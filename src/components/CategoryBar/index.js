import React, { useState } from "react";

const CategoryBar = () => {

    const [categoryList, setCategoryList] = useState(['Electronics', 'Men', 'Women', 'Home', 'Beauty & Fragrance', 'Baby & Toys', 'Grocery', 'Sports', 'Bestsellers'])

    return (
        <div className="px-10 cursor-pointer" style={{ background: "rgb(252, 251, 244)" }}>
            <div className="flex flex-row justify-start items-center">
                <div className="flex flex-row justify-start items-center space-x-4 border-r border-gray-300 py-3 pr-3">
                    <p className="font-bold text-xs text-blue-500 uppercase">All Categories</p>
                    <div>
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                            <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd" />
                        </svg>
                    </div>
                </div>
                {
                    categoryList.map((el, index) => {
                        return (
                            <div className="hover:shadow-sm hover:bg-white py-3 px-4">
                                <p className="font-bold text-xs text-gray-800 uppercase">{el}</p>
                            </div>
                        )
                    })
                }

            </div>
        </div>
    );
};

export default CategoryBar;
