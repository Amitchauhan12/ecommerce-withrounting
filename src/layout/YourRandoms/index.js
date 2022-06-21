import React from 'react'

function YourRandom() {
    return (
        <React.Fragment>
            <h4 className='text-2xl px-3 xl:px-5 text-md font-bold text-gray-500 mb-4 lg:mb-5'>Your Randoms Deals</h4>

            <div className='grid grid-cols-12 gap-x-5 gap-y-6 sm:grid-cols-12 px-3 xl:px-5'>
                {
                    [...new Array(6)].map((el) => {
                        return (
                            <div class="lg:col-span-2 sm:col-span-4 col-span-6">
                                <a class="block relative h-28 rounded overflow-hidden">
                                    <img alt="ecommerce" class="object-cover object-center w-full h-full block" src="/img/Elect-2.webp" />
                                </a>
                                <div class="bg-blue-100 shadow-lg border-blue-200 border  rounded-md p-2 mt-4">
                                    <h3 class="text-gray-500 text-xs tracking-widest title-font mb-1">CATEGORY</h3>
                                    <h2 class="text-gray-500 title-font text-sm font-bold">Shooting Stars</h2>
                                    <p class="mt-1 text-green-500 text-sm font-bold">$21.15</p>
                                </div>
                            </div>
                        )
                    })
                }

            </div>
        </React.Fragment>
    )
}

export default YourRandom;