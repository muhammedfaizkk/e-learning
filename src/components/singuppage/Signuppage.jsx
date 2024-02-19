import React from 'react'
import prof2 from './assets/Image (8).png'
import lIcon from './assets/Icon.svg'
import rIcon from './assets/Icon (3).png'
import gIcon from './assets/icons8-google-48.png'
import aIcon from './assets/Icon (3).svg'

function Signuppage() {
    return (
        <div className='flex gap-[100px] 2xl:gap-[80px] max-1200px:gap-[50px] max-1098px:flex-col max-1098px:flex-col-reverse'>
            <div className='flex flex-col gap-[80px] max-1098px:gap-[40px] items-center max-1098px:mt-[0px]'>
                <div>
                    <h1 className='font-medium text-[38px] 2xl:text-3xl mob-scr:text-[28px]'>Students Testimonials</h1>
                    <p className='font-normal text-lg 2xl:text-base mob-scr:text-sm text-hash-1'> Lorem ipsum dolor sit amet consectetur. Tempus tincidunt etiam eget elit id imperdiet et.
                        Cras eu sit dignissim lorem nibh et. Ac cum eget habitasse in velit fringilla feugiat
                        senectus in.</p>
                </div>


                <div className='flex flex-col gap-[30px] '>
                    <div className='bg-white rounded-lg'>
                        <div className='p-[50px] 2xl:p-[40px] mob-scr:p-[25px] '>
                            <p className='font-normal text-lg 2xl:text-base mob-scr:text-sm'>
                                The UI/UX design course exceeded my expectations. The instructor's expertise and practical assignments helped me improve my design skills. I feel more confident in my career now. Thank you!
                            </p>
                        </div>
                        <div className='px-[50px] py-[30px] flex  justify-between items-center  2xl:px-[40px] 2xl:py-[24px] mob-scr:px-[20px] mob-scr:py-[20px]'>
                            <div className='flex items-center gap-[12px]'>
                                <img src={prof2} alt="prof1" />
                                <p className='whitespace-nowrap text-lg 2xl:text-base font-semibold'>Jason M</p>
                            </div>
                            <div>
                                <button className='whitespace-nowrap px-[18px] py-[24px] bg-white-97 rounded-lg 2xl:px-[16px] 2xl:py-[14px] text-base 2xl:text-sm'>Read Full Story</button>
                            </div>
                        </div>

                    </div>
                    <div className='flex gap-[10px] justify-end max-1098px:justify-center'>
                        <div className='p-[14px] bg-white rounded-5 '>
                            <img className=' w-[34px] h-[34px] 2xl:w-[30px] 2xl:h-[30px] ' src={lIcon} alt="" />
                        </div>
                        <div className='p-[14px] bg-white rounded-5 '>
                            <img className='w-[34px] h-[34px] 2xl:w-[30px] 2xl:h-[30px] ' src={rIcon} alt="" />
                        </div>

                    </div>
                </div>
            </div>

            <div className='bg-white p-[50px] 2xl:p-[40px] mob-scr:p-[30px] flex flex-col gap-[50px] 2xl:gap-[40px] mob-scr:gap-[30px]'>
                <div className='text-center'>
                    <h1 className='font-semibold text-5xl 2xl:text-[38px] mob-scr:text-[28px] leading-normal'>Sign up</h1>
                    <p className='font-normal text-lg text:darkHash 2xl:text-base mob-scr:text-sm'>Create an account to unlock exclusive features.</p>
                </div>
                <div>
                    <div className='flex flex-col gap-[24px]'>
                        <div className='flex flex-col gap-[10px] '>
                            <label htmlFor="Email" className='font-medium text-lg  2xl:text-base mob-scr:text-sm'>Full Name</label>
                            <input type="text" className=' focus:outline-none p-[20px] font-normal text-lg 2xl:text-base mob-scr:text-sm text-hash-1 border border-solid border-white-95 bg-white-95 rounded-lg ' placeholder='Enter your fullName' />
                        </div>
                        <div className='flex flex-col gap-[10px] '>
                            <label htmlFor="Email" className='font-medium text-lg  2xl:text-base mob-scr:text-sm'>Email</label>
                            <input type="email" className=' focus:outline-none p-[20px] font-normal text-lg 2xl:text-base mob-scr:text-sm text-hash-1 border border-solid border-white-95 bg-white-95 rounded-lg ' placeholder='Enter Your Email' />
                        </div>

                        <div className='flex flex-col gap-[10px] '>
                            <label htmlFor="Email" className='font-medium text-lg  2xl:text-base mob-scr:text-sm'>Password</label>
                            <input type="password" className=' focus:outline-none p-[20px] font-normal text-lg 2xl:text-base mob-scr:text-sm text-hash-1 border border-solid border-white-95 bg-white-95 rounded-lg ' placeholder='Enter Your Password' />
                            <p className='font-normal text-lg 2xl:text-base mob-scr:text-sm text-hash-1 text-end'>Forgot Password?</p>
                        </div>
                        <div className='flex items-center gap-[10px]'>
                            <input id="default-checkbox" type="checkbox" value="" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                            <p className='font-normal text-lg 2xl:text-base mob-scr:text-sm text-hash-1 '>I agree with Terms of Use and Privacy Policy</p>
                        </div>
                        <div>
                            <button className='login w-full flex items-center justify-center gap-8 p-2 px-4 text-lg 2xl:text-sm mob-scr:text-xs text-white'>Sign up</button>
                        </div>
                    </div>
                    <div className='mt-[24px] flex flex-col gap-[30px] 2xl:gap-[24px]'>
                        <div className='flex gap-[10px] items-center justify-center '>
                            <div className='w-[255px] 2xl:w-[208px] mob-scr:w-[126.5px] h-[1px] bg-white-97'></div>
                            <div>OR</div>
                            <div className='w-[255px] 2xl:w-[208px] mob-scr:w-[126.5px] h-[1px] bg-white-97'></div>
                        </div>
                        <div className='flex gap-[10px] justify-center py-[20px] px-[24px] 2xl:[py-16px] bg-white-97 rounded-4 '>
                            <img className='w-[30px] h-[30px] 2xl:w-[24px] 2xl:h-[24px]' src={gIcon} alt="" />
                            <p className='font-medium text-lg 2xl:text-base '>Signup with Google</p>
                        </div>
                        <div className='flex gap-[10px] justify-center '>
                            <span className='font-normal text-base mob-scr:text-sm'>Already have an account?<b>Sign Up</b></span>
                            <img className='w-[24px] h-[24px] 2xl:w-[20px] 2xl:h-[20px]' src={aIcon} alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Signuppage
