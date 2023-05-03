import React from 'react'
import { BiSearch } from "react-icons/bi";

const Header = () => {
    return (
        <div className='w-full  sticky top-0 drop-shadow-md shadow-md grid py-3 grid-cols-3 items-center px-8 md:px-16 '>
            <div className=''>
                <div className='flex justify-start'>madhu</div>
            </div>
            <div className='flex items-center border rounded-md px-2 py-1 '>
                <input className='w-48 md:flex-grow outline-none bg-transparent px-2' type='text'/>
                <BiSearch className='hidden md:inline-block bg-red-400 rounded-full p-1 px-1' size={24}/>
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