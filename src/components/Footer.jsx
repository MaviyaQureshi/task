import React from 'react'

const Footer = () => {
    return (
        <>
            <div className='bg-primary flex flex-col justify-center items-center'>
                <div className='mt-4 sm:mt-3 text-sm sm:text-base md:text-lg space-x-10'>
                    <a href="https://lyfeindex.com/Terms_of_use/"><button>Terms</button></a>
                    <a href="https://lyfeindex.com/Contact_us/"><button>Privacy Policy </button></a>
                </div>

                <p className='text-xs sm:text-sm mt-3'>LyfeIndex © 2023</p>
            </div>
        </>
    )
}

export default Footer