import React from 'react'
import { BiSearch } from "react-icons/bi";
import {AiOutlineMenu} from "react-icons/ai"

const Header = () => {
    return (
        // <div className='w-full  z-50 sticky top-0 drop-shadow-md shadow-md grid py-3 grid-cols-3 items-center px-8 md:px-16 '>
        //     <div className=''>
        //         <div className='flex justify-start'>madhu</div>
        //     </div>
        //    <div className='border-[1px] w-full md:w-auto py-2 rounded-full shadow-sm hover:shadow-md transition cursor-pointer'>
        //     <div className='flex flex-row items-center justify-between'>
        //         <div className='text-sm font-semibold px-6'>
        //             Anywhare
        //         </div>
        //         <div className='hidden sm:block text-sm font-semibold px-6 border-x-[1px] flex-1 text-center'>Any week</div>
        //         <div className='text-sm pl-6 pr-2 text-gray-600 flex flex-row items-center gap-3'>
        //             <div className='hidden sm:block'>Add Guests</div>
        //             <div className='p-2 bg-red-500 rounded-full text-white'>
        //                 <BiSearch size={18}/>
        //             </div>
        //         </div>
        //     </div>
        // </div>
        //     <div className='flex justify-end'>
        //         <ul className=' hidden md:flex space-x-3'>
        //             <li>Home</li>
        //             <li>Home</li>
        //             <li>Home</li>
        //         </ul>
        //     </div>
        // </div>
        <div className='fixed w-full bg-white z-10 shadow-sm'>
            <div className='py-4 border-b-[1px]'>
                <div className='max-w-[2520px] mx-auto xl:px-20 md:px-10 sm:px-2 px-4'>
                    <div className='flex flex-row items-center justify-between gap-3 md:gap-0'>
                        <img alt='logo' className='hidden md:block cursor-pointer' height="100" width="100" src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1200px-Amazon_logo.svg.png" />
                        <div className='border-[1px] w-full md:w-auto py-2 rounded-full shadow-sm hover:shadow-md transition cursor-pointer'>
                            <div className='flex flex-row items-center justify-between'>
                                <div className='text-sm font-semibold px-6'>
                               T-shirt
                                </div>
                                <div className='hidden sm:block text-sm font-semibold px-6 border-x-[1px] flex-1 text-center'>jens</div>
                                <div className='text-sm pl-6 pr-2 text-gray-600 flex flex-row items-center gap-3'>
                                    <div className='hidden sm:block'>Add products</div>
                                    <div className='p-2 bg-red-500 rounded-full text-white'>
                                        <BiSearch size={18} />
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className='relative'>
                            <div className='flex flex-row items-center gap-3'>
                                <div className='hidden md:block text-sm font-semibold py-3 px-4 rounded-full hover:bg-neutral-100 transition cursor-pointer'>
                                    enjoy your shopping
                                </div>
                                <div  className='p-4 md:py-1 md:px-2 border-[1px] border-neutral-200 flex flex-row items-center gap-3 rounded-full cursor-pointer hover:shadow-md transition'>
                                    <AiOutlineMenu />
                                    <div className='hidden md:block'>
                                        {/* <Avatar /> */}
                                    </div>
                                </div>
                            </div>


                            

                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Header