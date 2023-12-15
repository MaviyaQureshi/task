import React from 'react'

const Navbar = () => {
    return (
        <>
            <div className='px-5 sm:px-16 md:px-28 flex justify-between items-center h-24 bg-primary'>
                <div className='flex flex-col justify-center items-center'>
                    <span className='text-base sm:text-xl md:text-2xl'>
                        <span className='text-xl sm:text-2xl md:text-3xl'>L</span>YFE
                        <span className='text-xl sm:text-2xl md:text-3xl'>I</span>NDEX
                    </span>
                    <span className='text-[9px] sm:text-xs'>
                        Love You 4 Ever
                    </span>
                </div>
                <span className='flex justify-between w-44 sm:w-56 text-xs sm:text-sm md:w-80 md:text-lg font-medium'>
                    <a href="#"><button className='hover:text-xl ease-in duration-100'>HOME <hr className='w-6 rounded-full ease-in duration-100' /></button></a>
                    <a href="https://lyfeindex.com/Contact_us/"><button className='hover:text-xl ease-in duration-100'>CONTACT <hr className='w-6 rounded-full' /> </button></a>
                    <a href="https://lyfeindex.com/About/"><button className='hover:text-xl ease-in duration-100'>ABOUT US <hr className='w-6 rounded-full' /> </button></a>
                </span>
            </div>
        </>
    )
}

export default Navbar