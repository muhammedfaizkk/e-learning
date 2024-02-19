import React from 'react'
import img from './assets/shape-17.svg'
import img1 from './assets/Icon (3).svg'
import img2 from './assets/Icon (4).svg'
import img3 from './assets/Icon (5).svg'
import img4 from './assets/Icon (13).png'
import img5 from './assets/Icon (19).svg'
import img6 from './assets/Icon (20).svg'

function Footer() {
    return (
        <div className='bg-white-97 pt-[50px] mt-[50px] border-t border-solid border-darkHash'>
            <div className='flex justify-center items-center max-720px:flex-col max-720px:gap-[30px] justify-between px-[100px] max-1280px:px-[85px] max-1024px:px-[60px] pb-[40px]'>

                <div className='flex flex-col gap-[40px] 2xl:gap-[30px]'>
                    <img className='bg-drk-yellow w-[32.593px] h-[32.593px]' src={img} alt="" />
                    <div className='flex flex-col'>
                        <div className='flex gap-[10px]'>
                            <img className='w-[24px] h-[24px]' src={img1} alt="" />
                            <p className='text-lg 2xl:text-base mob-scr:text-sm'>hello@skillbridge.com</p>
                        </div>
                        <div className='flex gap-[10px]'>
                            <img className='w-[24px] h-[24px]' src={img2} alt="" />
                            <p className='text-lg 2xl:text-base mob-scr:text-sm'>+91 91813 23 2309</p>
                        </div>
                        <div className='flex gap-[10px]'>
                            <img className='w-[24px] h-[24px]' src={img3} alt="" />
                            <p className='text-lg 2xl:text-base mob-scr:text-sm'>Somewhere in the World</p>
                        </div>
                    </div>

                </div>

                <div className='flex gap-[95px] max-998px:gap-[70px] max-720px:flex-col'>

                    <div className='flex gap-[95px] max-998px:gap-[70px]'>
                        <ul>
                            <li className='font-semibold text-xl 2xl:text-base'>Home</li>
                            <li className='text-hash-1 2xl:text-base leading-7'>Benefits</li>
                            <li className='text-hash-1 2xl:text-base leading-7'>Our Courses</li>
                            <li className='text-hash-1 2xl:text-base leading-7'>Our Testimonials</li>
                            <li className='text-hash-1 2xl:text-base leading-7'>Our FAQ</li>
                        </ul>

                        <ul>
                            <li className='font-semibold text-xl 2xl:text-base'>About Us</li>
                            <li className='text-hash-1 2xl:text-base leading-7'>Company</li>
                            <li className='text-hash-1 2xl:text-base leading-7'>Achievements</li>
                            <li className='text-hash-1 2xl:text-base leading-7'>Our Goals</li>
                        </ul>
                    </div>
                    <div>
                        <p className='font-semibold text-xl 2xl:text-base'>Social Profiles</p>
                        <ul className='flex gap-[10px]'>
                            <li><img className='w-[20px] h-[20px]' src={img4} alt="" /></li>
                            <li><img className='w-[20px] h-[20px]' src={img5} alt="" /></li>
                            <li><img className='w-[20px] h-[20px]' src={img6} alt="" /></li>
                        </ul>
                    </div>


                </div>
            </div>
            <div className='flex justify-center'>
            <p className='text-center py-[30px] border-t border-solid border-darkHash w-[70%]'>© 2023 Skillbridge. All rights reserved.</p>
            </div>
        </div>


    )
}

export default Footer
