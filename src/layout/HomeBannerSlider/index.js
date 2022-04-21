import React from 'react';

function HomeBannerSlider() {
    return (
        <div>
            <img class="w-full object-contain object-center" src="img/home-banner-1.png" alt="banner" />
            <div className='carosule-container'>
                <div class="grid-container gap-2 grid grid-cols-12">
                    <div class="item1 sm:col-span-8 col-span-12">
                        <img class="w-full object-cover h-full  object-center" src="img/caro-1.jpeg" alt="banner" />
                    </div>
                    <div class="item2 sm:col-span-4 col-span-12">
                        <img class="w-full object-cover h-full object-center" src="img/caro-5.png" alt="banner" />
                    </div>
                </div>
            </div>
            <div className='sub-carousal-container mt-3 px-5'>
                <div className='grid-container gap-2 grid grid-cols-12'>
                    <div class="sm:col-span-2 col-span-12">
                        <div className='flex flex-col justify-start items-start w-full'>
                            <div className='bg-purple-100 px-2 py-4 w-full rounded-md'>
                                <img class="w-24 h-20 mx-auto object-contain object-center" src="img/product-1.png" alt="banner" />
                            </div>
                            <p className='text-xs font-bold teext-gray-gray-500 px-3 mt-2'>Cosmetic one</p>
                        </div>
                    </div>
                    <div class="sm:col-span-2 col-span-6">
                    <div className='flex flex-col justify-start items-start w-full'>
                            <div className='bg-red-100 px-2 py-4 w-full rounded-md'>
                                <img class="w-24 h-20 mx-auto object-contain object-center" src="img/product-1.png" alt="banner" />
                            </div>
                            <p className='text-xs font-bold teext-gray-gray-500 px-3 mt-2'>Cosmetic two</p>
                        </div>
                    </div>
                    <div class="sm:col-span-2 col-span-6">
                    <div className='flex flex-col justify-start items-start w-full'>
                            <div className='bg-yellow-100 px-2 py-4 w-full rounded-md'>
                                <img class="w-24 h-20 mx-auto object-contain object-center" src="img/product-1.png" alt="banner" />
                            </div>
                            <p className='text-xs font-bold teext-gray-gray-500 px-3 mt-2'>Cosmetic three</p>
                        </div>
                    </div>
                    <div class="sm:col-span-2 col-span-6">
                    <div className='flex flex-col justify-start items-start w-full'>
                            <div className='bg-indigo-100 px-2 py-4 w-full rounded-md'>
                                <img class="w-24 h-20 mx-auto object-contain object-center" src="img/product-1.png" alt="banner" />
                            </div>
                            <p className='text-xs font-bold teext-gray-gray-500 px-3 mt-2'>Cosmetic four</p>
                        </div>
                    </div>
                    <div class="sm:col-span-2 col-span-6">
                    <div className='flex flex-col justify-start items-start w-full'>
                            <div className='bg-pink-100 px-2 py-4 w-full rounded-md'>
                                <img class="w-24 h-20 mx-auto object-contain object-center" src="img/product-1.png" alt="banner" />
                            </div>
                            <p className='text-xs font-bold teext-gray-gray-500 px-3 mt-2'>Cosmetic five</p>
                        </div>
                    </div>
                    <div class="sm:col-span-2 col-span-6">
                    <div className='flex flex-col justify-start items-start w-full'>
                            <div className='bg-green-100 px-2 py-4 w-full rounded-md'>
                                <img class="w-24 h-20 mx-auto object-contain object-center" src="img/product-1.png" alt="banner" />
                            </div>
                            <p className='text-xs font-bold teext-gray-gray-500 px-3 mt-2'>Cosmetic six</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HomeBannerSlider;