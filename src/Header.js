import React from 'react'
import { BiSearch } from "react-icons/bi";

const Header = () => {
    return (
        <div className='w-full  sticky top-0 drop-shadow-md shadow-md grid py-3 grid-cols-3 items-center px-8 md:px-16 '>
            <div className=''>
                <div className='flex justify-start'>madhu</div>
            </div>
           <div className='border-[1px] w-full md:w-auto py-2 rounded-full shadow-sm hover:shadow-md transition cursor-pointer'>
            <div className='flex flex-row items-center justify-between'>
                <div className='text-sm font-semibold px-6'>
                    Anywhare
                </div>
                <div className='hidden sm:block text-sm font-semibold px-6 border-x-[1px] flex-1 text-center'>Any week</div>
                <div className='text-sm pl-6 pr-2 text-gray-600 flex flex-row items-center gap-3'>
                    <div className='hidden sm:block'>Add Guests</div>
                    <div className='p-2 bg-red-500 rounded-full text-white'>
                        <BiSearch size={18}/>
                    </div>
                </div>
            </div>
        </div>
            <div className='flex justify-end'>
                <ul className=' hidden md:flex space-x-3'>
                    <li>Home</li>
                    <li>Home</li>
                    <li>Home</li>
                </ul>
            </div>
        </div>
    )
}

export default Header