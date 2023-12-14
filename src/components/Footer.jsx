import React from 'react'

const Footer = () => {
    return (
        <>
            <div className='w-screen bg-primary flex flex-col justify-center items-center'>
                <div className='mt-3 text-lg space-x-10'>
                    <a href="https://lyfeindex.com/Terms_of_use/"><button>Terms</button></a>
                    <a href="https://lyfeindex.com/Contact_us/"><button>Privacy Policy </button></a>
                </div>

                <p className='text-sm mt-3'>LyfeIndex © 2023</p>
            </div>
        </>
    )
}

export default Footer