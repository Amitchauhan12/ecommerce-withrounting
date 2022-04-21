import React from 'react'

function TrandingElectronics() {
    return (
        <React.Fragment>
            <div className='px-5 mt-16'>
                <h4 className='sm:text-2xl text-md font-bold text-gray-500'>Tranding Electronic Deals</h4>
                <div class="mt-6 grid grid-cols-12 gap-x-6 sm:grid-cols-12">
                    {
                        [...new Array(6)].map((el, index) => {
                            return (
                                <div className='sm:col-span-2 col-span-12 w-full'>
                                    <div class="group relative">
                                        <div class="w-full h-full bg-gray-200  rounded-md  group-hover:opacity-75">
                                            <img src="/img/Elect-1.webp" alt="Front of men&#039;s Basic Tee in black." class="w-full h-full  object-center object-cover" />
                                        </div>
                                        <div className='mt-1'>
                                            <h3 class="text-sm text-gray-700 flex flex-row justify-between items-center w-full">
                                                <a href="#">
                                                    <span aria-hidden="true" class="absolute inset-0"></span>
                                                    Basic Tee
                                                </a>
                                                <p class="text-sm font-medium text-gray-900">$35</p>
                                            </h3>
                                            <p class="mt-1 text-xs font-bold text-green-500">55% OFF</p>
                                            <p class="mt-2 text-xs font-medium text-gray-500">Arrives <span className='text-xs font-bold text-gray-700'>Wed, Mar 24</span></p>
                                            <div className='mt-1 flex flex-row justify-between items-center w-full'>
                                                <div className='text-xs font-bold text-gray-600 bg-blue-300 py-1 px-2 rounded-sm'>Express</div>
                                                <div className='flex flex-row justify-start space-x-1 items-center'>
                                                    <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 text-yellow-500" viewBox="0 0 20 20" fill="currentColor">
                                                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                                    </svg>
                                                    <p className='font-bold text-xs text-yellow-500'> 4.8 <span className='text-gray-300'> (4.5k)</span></p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>

            </div>
            <div className='banner-container my-16'>
                <img class="w-full object-cover object-center" src="/img/banner-4.png" alt="blog" />
            </div>
        </React.Fragment>

    )
}

export default TrandingElectronics;