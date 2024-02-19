import React, { useState } from 'react'
import './navitem.css'
import { Link } from "react-router-dom";

function Navitem() {
    const [menu, setMenu] = useState(false)

    return (
        <div className='bg-white-97 py-[12px]   max-390px:p-[0px] max-390px:pt-[10px] mob-scr:mb-[10px]'>
            <div className="topBanner flex gap-4 p-4 justify-center mob-scr:gap-0 mob-scr:p-2 ">
                <h1 className='font-myFont ext-base font-normal text-absalutewhite font-normal 2xl:text-sm mob-scr:text-xs' >Free Courses 🌟 Sale Ends Soon, Get It Now</h1>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="25" className='mob-scr:w-5 mob-scr:h-5' viewBox="0 0 24 25" fill="none">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M3.59961 12.5C3.59961 12.0029 4.00255 11.6 4.49961 11.6L17.2651 11.6L12.2758 6.84874C11.9175 6.50423 11.9063 5.93449 12.2509 5.5762C12.5954 5.2179 13.1651 5.20673 13.5234 5.55125L20.1234 11.8512C20.2999 12.0209 20.3996 12.2552 20.3996 12.5C20.3996 12.7448 20.2999 12.9791 20.1234 13.1487L13.5234 19.4487C13.1651 19.7933 12.5954 19.7821 12.2509 19.4238C11.9063 19.0655 11.9175 18.4958 12.2758 18.1512L17.2651 13.4L4.49961 13.4C4.00255 13.4 3.59961 12.9971 3.59961 12.5Z" fill="white" />
                </svg>
            </div>
            <div className="nav-main flex justify-between items-center px-[80px] py-5 md-b-lg:px-[30px] mob-scr:hidden">
                <ul className='nav-options flex gap-7 items-center md-b-lg:gap-4 text-lg 2xl:text-sm '>
                    <li className='nav-main-logo'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="40" height="41" viewBox="0 0 40 41" fill="none">
                            <path d="M4.16699 37.1667L15.0003 26.3333H25.8337V15.5L36.667 26.3333L25.8337 37.1667H4.16699Z" fill="white" />
                            <path d="M4.16699 15.5L15.0003 26.3333V15.5H25.8337L36.667 4.66667H15.0003L4.16699 15.5Z" fill="white" />
                        </svg>
                    </li>
                    <li className='nav-home'>
                        <Link to={'/'}>Home</Link>
                    </li>
                    <li>
                        <Link to={'/courses'}>Courses</Link>
                    </li>
                    <li>
                        <Link to={'/aboutuspage'}>About us</Link>
                    </li>
                    <li>
                        <Link to={'/pricingSection'}>Pricing</Link>
                    </li>
                    <li>
                        <Link to={'/contact'}>Contact</Link>
                    </li>
                </ul>
                <div className='btn-lgn-sign flex gap-6 items-center md-b-lg:gap-3'>

                    <button className='sign-up  text-lg 2xl:text-sm mob-scr:text-xs'>
                        <Link to={'/signup'}>Sign Up</Link>
                    </button>

                    <button className='login flex items-center gap-8 p-2 px-4 text-lg 2xl:text-sm mob-scr:text-xs'>
                        <Link to={'/login'}>Login</Link>
                    </button>
                </div>
            </div>
            <div className='min-mob:hidden'>


                <div className=' py-[16px] px-[16px] mob-scr:px-[5px]'>
                    <div className='flex justify-between items-center self-stretch'>
                        <div className='nav-sub inline flex-1'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="31" viewBox="0 0 30 31" fill="none">
                                <path d="M3.27246 27.8457L11.2972 19.821H19.3218V11.7963L27.3465 19.821L19.3218 27.8457H3.27246Z" fill="white" />
                                <path d="M3.27246 11.7963L11.2972 19.821V11.7963H19.3218L27.3465 3.77161H11.2972L3.27246 11.7963Z" fill="white" />
                            </svg>
                        </div>
                        <div className='flex gap-[20px]'>
                            <div className='btn-lgn-sign flex gap-6 items-center md-b-lg:gap-3'>
                                <button className='sign-up  text-lg mob-scr:text-sm mob-scr:text-xs'>Sign Up</button>
                                <button className='login flex items-center gap-8 p-2 px-4 text-lg mob-scr:text-sm mob-scr:text-xs'>Login</button>
                            </div>
                            <div>
                                <svg onClick={() => setMenu(!menu)} xmlns="http://www.w3.org/2000/svg" width="34" height="35" viewBox="0 0 34 35" fill="none">
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M4.25 10.0625C4.25 9.4757 4.7257 9 5.3125 9H28.6875C29.2743 9 29.75 9.4757 29.75 10.0625C29.75 10.6493 29.2743 11.125 28.6875 11.125H5.3125C4.7257 11.125 4.25 10.6493 4.25 10.0625ZM4.25 17.5C4.25 16.9132 4.7257 16.4375 5.3125 16.4375H28.6875C29.2743 16.4375 29.75 16.9132 29.75 17.5C29.75 18.0868 29.2743 18.5625 28.6875 18.5625H5.3125C4.7257 18.5625 4.25 18.0868 4.25 17.5ZM15.9375 24.9375C15.9375 24.3507 16.4132 23.875 17 23.875H28.6875C29.2743 23.875 29.75 24.3507 29.75 24.9375C29.75 25.5243 29.2743 26 28.6875 26H17C16.4132 26 15.9375 25.5243 15.9375 24.9375Z" fill="#262626" />
                                </svg>
                            </div>
                        </div>
                    </div>


                    {menu &&
                        <div className='pt-5'>
                            <ul className='nav-options flex flex-col gap-7 items-center text-sm '>
                                <li className='nav-home'>
                                    <Link to={'/'}>Home</Link>
                                </li>
                                <li>
                                    <Link to={'/courses'}>Courses</Link>
                                </li>
                                <li>
                                    <Link to={'/aboutuspage'}>About us</Link>
                                </li>
                                <li>
                                    <Link to={'/pricingSection'}>Pricing</Link>
                                </li>
                                <li>
                                    <Link to={'/contact'}>Contact</Link>
                                </li>
                            </ul>
                        </div>}


                </div>

            </div>

        </div>
    )
}

export default Navitem
