import React from 'react'

function MegaDeals() {
    return (
        <React.Fragment>
            <div class="container px-5 mt-28 mx-auto">
                <div class="flex flex-col text-center w-full">
                    <h2 class="text-xs text-indigo-500 tracking-widest font-medium title-font mb-3">24 HOURS ONLY</h2>
                    <h1 class="sm:text-3xl text-2xl font-medium title-font  mb-4 text-indigo-900"><span className='bg-blue-400 py-2 px-8 rounded-md text-white'>Mega Deals Of The Day</span></h1>
                    <p class="lg:w-2/3 mx-auto leading-relaxed text-base">Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical gentrify, subway tile poke farm-to-table. Franzen you probably haven't heard of them man bun deep jianbing selfies heirloom prism food truck ugh squid celiac humblebrag.</p>
                </div>
            </div>
            <div className='bg-indigo-50 w-full mt-5'>
                <div className='grid grid-cols-12 gap-x-4 py-10 px-16'>
                    <div class="p-2 sm:col-span-4 col-span-12 w-full">
                        <div class=" bg-blue-100 border-blue-300 border flex items-start p-4 rounded-lg">
                            <img alt="team" class="w-28 h-28 bg-gray-100 object-contain object-center flex-shrink-0 rounded-md mr-4" src="/img/product-3.png" />
                            <div class="flex-grow">
                                <h2 class="text-gray-900 title-font font-medium">Holden Caulfield</h2>
                                <p class="text-gray-500">UI Designer</p>
                                <strike><h2 class="text-red-500 title-font font-medium">$ 2500</h2></strike>
                                <h2 class="text-green-500 text-2xl title-font font-bold">$1500 AED</h2>
                            </div>
                        </div>
                    </div>
                    <div class="p-2 sm:col-span-4 col-span-12 w-full">
                        <div class=" bg-blue-100 border-blue-300  border flex items-start p-4 rounded-lg">
                            <img alt="team" class="w-28 h-28 bg-gray-100 object-contain object-center flex-shrink-0 rounded-md mr-4" src="/img/product-3.png" />
                            <div class="flex-grow">
                                <h2 class="text-gray-900 title-font font-medium">Holden Caulfield</h2>
                                <p class="text-gray-500">UI Designer</p>
                                <strike><h2 class="text-red-500 title-font font-medium">$ 2500</h2></strike>
                                <h2 class="text-green-500 text-2xl title-font font-bold">$1500 AED</h2>
                            </div>
                        </div>
                    </div>
                    <div class="p-2 sm:col-span-4 col-span-12 w-full">
                        <div class=" bg-blue-100 border-blue-300 border flex items-start p-4 rounded-lg">
                            <img alt="team" class="w-28 h-28 bg-gray-100 object-contain object-center flex-shrink-0 rounded-md mr-4" src="/img/product-3.png" />
                            <div class="flex-grow">
                                <h2 class="text-gray-900 title-font font-medium">Holden Caulfield</h2>
                                <p class="text-gray-500">UI Designer</p>
                                <strike><h2 class="text-red-500 title-font font-medium">$ 2500</h2></strike>
                                <h2 class="text-green-500 text-2xl title-font font-bold">$1500 AED</h2>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default MegaDeals