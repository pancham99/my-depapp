import React from 'react'

const Header = () => {
    return (
        <div className='w-full h-10 bg-blue-300 grid grid-cols-3 items-center px-8 md:px-16'>
            <div className=''>
                <div className='flex justify-start'>madhu</div>
            </div>
            <div>
                <input type='text'/>
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