import React from 'react'
import logo from './assets/Icon.svg'
import logo1 from './assets/Icon (1).svg'
import logo3 from './assets/Icon (2).svg'

function Faqsection() {
    return (
        <div className='pt-[50px]   2xl:pt-[60px] max-390px:pt-[25px] mx-auto sm:mx-[10px] md:mx-[20px] lg:mx-[70px] xl:mx-[180px]'>
            <div className='flex md-b-lg:flex-col bg-white pt-[50px] pl-[50px] max-998px:pl-[24px] max-998px:pt-[24px]'>
                <div className='flex flex-col gap-[50px]'>
                    <div>
                        <p className='text-5xl font-semibold 2xl:text-4xl mob-scr:text-3xl'>Frequently Asked Questions</p>
                        <p className='text-lg font-normal 2xl:text-base  mob-scr:text-sm pt-2 '>
                            Still you have any questions?
                            Contact our Team via support@skillbridge.com
                        </p>
                    </div>
                    <div>
                        <p className='text-sm font-medium'>See All FAQ’s</p>
                    </div>
                </div>
                <div className='p-[50px] max-998px:p-[10px] '>
                    <div className='flex items-center gap-[30px] py-[20px] px-[30px] mob-scr:p-[14px]'>
                        <p className='flex-1 text-xl font-medium 2xl:text-lg mob-scr:text-base '>Can I enroll in multiple courses at once?</p>
                        <img className='flex-2 w-[28px] h-[28px] 2xl:w-[24px] 2xl:h-[24px] mob-scr:w-[20px] 2xl:h-[20px] mob-scr:text-base bg-l-white' src={logo} alt="" />
                    </div>
                    <div className='flex items-center gap-[30px] py-[20px] px-[30px] mob-scr:p-[14px]'>
                        <p className='text-lg  2xl:text-base mob-scr:text-sm'>Absolutely! You can enroll in multiple courses simultaneously and access them at your convenience.</p>
                    </div>
                    <div className='flex items-center gap-[30px] py-[20px] px-[30px] mob-scr:p-[14px]'>
                        <p className='flex-1 text-xl font-medium 2xl:text-lg mob-scr:text-base '>Enrollment Process for Different Courses</p>
                        <img className='flex-2 w-[28px] h-[28px] 2xl:w-[24px] 2xl:h-[24px] mob-scr:w-[20px] 2xl:h-[20px] mob-scr:text-base bg-l-white' src={logo1} alt="" />
                    </div>
                    <div className='flex items-center gap-[30px] py-[20px] px-[30px] mob-scr:p-[14px]'>
                        <p className='flex-1 text-xl font-medium 2xl:text-lg mob-scr:text-base '>Enrollment Process for Different Courses</p>
                        <img className='flex-2 w-[28px] h-[28px] 2xl:w-[24px] 2xl:h-[24px] mob-scr:w-[20px] 2xl:h-[20px] mob-scr:text-base bg-l-white' src={logo} alt="" />
                    </div>
                    <div className='flex items-center gap-[30px] pb-[24px] py-[20px] px-[30px] mob-scr:p-[14px]'>
                        <p className='flex-1 text-xl font-medium 2xl:text-lg mob-scr:text-base '>What kind of support can I expect from instructors?</p>
                        <img className='flex-2 w-[28px] h-[28px] 2xl:w-[24px] 2xl:h-[24px] mob-scr:w-[20px] 2xl:h-[20px] mob-scr:text-base bg-l-white' src={logo3} alt="" />
                    </div>
                    <div className='flex items-center gap-[30px] pb-[24px] py-[20px] px-[30px] mob-scr:p-[14px]'>
                        <p className='flex-1 text-xl font-medium 2xl:text-lg mob-scr:text-base '>Are the courses self-paced or do they have specific start and end dates?</p>
                        <img className='flex-2 w-[28px] h-[28px] 2xl:w-[24px] 2xl:h-[24px] mob-scr:w-[20px] 2xl:h-[20px] mob-scr:text-base bg-l-white' src={logo3} alt="" />
                    </div>
                    <div className='flex items-center gap-[30px] pb-[24px] py-[20px] px-[30px] mob-scr:p-[14px]'>
                        <p className='flex-1 text-xl font-medium 2xl:text-lg mob-scr:text-base '>Are there any prerequisites for the courses?</p>
                        <img className='flex-2 w-[28px] h-[28px] 2xl:w-[24px] 2xl:h-[24px] mob-scr:w-[20px] 2xl:h-[20px] mob-scr:text-base bg-l-white' src={logo3} alt="" />
                    </div>
                    <div className='flex items-center gap-[30px] pb-[24px] py-[20px] px-[30px] mob-scr:p-[14px]'>
                        <p className='flex-1 text-xl font-medium 2xl:text-lg mob-scr:text-base '>Can I download the course materials for offline access?</p>
                        <img className='flex-2 w-[28px] h-[28px] 2xl:w-[24px] 2xl:h-[24px] mob-scr:w-[20px] 2xl:h-[20px] mob-scr:text-base bg-l-white' src={logo3} alt="" />
                    </div>

                </div>
            </div>
        </div>

    )
}

export default Faqsection
