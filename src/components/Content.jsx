import logo from "../images/logo.png"

const Content = () => {

    return (
        <>
            <div className='flex justify-center items-center bg-hero bg-no-repeat bg-cover h-full'>
                <div className='flex flex-col items-center mt-12'>
                    <div>
                        <div id="google_translate_element" className="fixed top-24 right-14 md:right-28"></div>
                        <input type="text" placeholder='Type to search...' className='w-56 h-10 md:w-72 pl-5 rounded-l-lg focus:outline-0' />
                        <button className='bg-button h-10 w-10 rounded-e-lg'>
                            <i className="fa-solid fa-magnifying-glass" style={{ "color": "white" }}></i>
                        </button>
                    </div>
                    <button className='w-64 md:w-80 h-10  bg-button rounded-full mt-8'>
                        <span style={{ "color": "white" }}>Add memorial</span>
                    </button>
                    <div className='sm:w-screen pl-10 my-8 md:my-8 flex flex-row justify-center'>
                        <div>
                            <button className='flex flex-col justify-center items-center mt-3 ml-10 md:ml-0 w-20 h-14 text-sm bg-back relative opacity-70 hover:opacity-100 ease-in duration-100'>
                                <a href="#">England</a>
                                <p>383 000+</p>
                            </button>
                            <button className='flex flex-col justify-center items-center mt-5 -ml-0 md:-ml-10 w-20 h-14 text-sm bg-back relative opacity-70 hover:opacity-100 ease-in duration-100'>
                                <a href="#">россия</a>
                                <p>756 000+</p>
                            </button>
                            <button className='flex flex-col justify-center items-center mt-5 -ml-7 md:-ml-14 w-20 h-14 text-sm bg-back relative opacity-70 hover:opacity-100 ease-in duration-100'>
                                <a href="#">España</a>
                                <p>717 000+</p>
                            </button>
                            <button className='flex flex-col justify-center items-center mt-5 -ml-0 md:-ml-10 w-20 h-14 text-sm bg-back relative opacity-70 hover:opacity-100 ease-in duration-100'>
                                <a href="#">中国</a>
                                <p>231 000+</p>
                            </button>
                            <button className='flex flex-col justify-center items-center mt-5 ml-10 w-20 h-14 text-sm bg-back relative opacity-70 hover:opacity-100 ease-in duration-100'>
                                <a href="#">Polska</a>
                                <p>490 000+</p>
                            </button>
                        </div>
                        <img src={logo} className='w-96 -ml-16 -mr-8' />
                        <div>
                            <button className='flex flex-col justify-center items-center mt-3 -ml-10 md:-ml-0 w-20 h-14 text-sm bg-back relative opacity-70 hover:opacity-100 ease-in duration-100'>
                                <a href="#">भारत</a>
                                <p>292 000+</p>
                            </button>
                            <button className='flex flex-col justify-center items-center mt-5 ml-0 md:ml-10 w-20 h-14 text-sm bg-back relative opacity-70 hover:opacity-100 ease-in duration-100'>
                                <a href="#">دبي</a>
                                <p>617 000+</p>
                            </button>
                            <button className='flex flex-col justify-center items-center mt-5 ml-7 md:ml-14 w-20 h-14 text-sm bg-back relative opacity-70 hover:opacity-100 ease-in duration-100'>
                                <a href="#">la France</a>
                                <p>362 000+</p>
                            </button>
                            <button className='flex flex-col justify-center items-center mt-5 ml-0 md:ml-10 w-20 h-14 text-sm bg-back relative opacity-70 hover:opacity-100 ease-in duration-100'>
                                <a href="#">Italia</a>
                                <p>718 000+</p>
                            </button>
                            <button className='flex flex-col justify-center items-center mt-5 -ml-10 md:-ml-0 w-20 h-14 text-sm bg-back relative opacity-70 hover:opacity-100 ease-in duration-100'>
                                <a href="#">português</a>
                                <p>074 000+</p>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Content