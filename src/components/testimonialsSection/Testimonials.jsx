import React from 'react'
import prof1 from './assets/Image (7).png'
import prof2 from './assets/Image (8).png'
import prof3 from './assets/Image (9).png'
import prof4 from './assets/Image (10).png'

function Testimonials() {
    return (
        <div>
            <div className='pt-[50px] 2xl:pt-[60px] max-390px:pt-[25px] mx-auto sm:mx-[10px] md:mx-[20px] lg:mx-[70px] xl:mx-[180px]'>

                <div>
                    <h1 className='text-5xl font-semibold font-normal leading-[72px] 2xl:text-4xl mob-scr:mt-3xl'>Our Testimonials</h1>
                    <div className='flex  mob-scr:flex-col md:gap-[20px] lg:gap-[100px] xl:gap-[150px]' >
                        <p className='text-lg font-semibold font-normal leading-[27px]  text-hash-1 flex-1 inline 2xl:text-base mob-scr:mt-sm'>Lorem ipsum dolor sit amet consectetur. Tempus tincidunt etiam eget elit id imperdiet et. Cras eu sit dignissim lorem nibh et. Ac cum eget habitasse in velit fringilla feugiat senectus in.</p>
                        <button className='whitespace-no-wrap flex-2  mob-scr:mt-5'>view all</button>
                    </div>
                </div>


                <div className='grid grid-cols-2 gap-[30px] mt-[40px] max-774px:grid-cols-1'>

                    <div className='bg-white rounded-lg'>
                        <div className='p-[50px] 2xl:p-[40px] mob-scr:p-[25px] '>
                            <p className='font-normal text-lg 2xl:text-base mob-scr:text-sm'>
                                The web design course provided a solid foundation for me. The instructors were knowledgeable and supportive, and the interactive learning environment was engaging. I highly recommend it!
                            </p>
                        </div>
                        <div className='px-[50px] py-[30px] flex justify-between items-center 2xl:px-[40px] 2xl:py-[24px] mob-scr:px-[20px] mob-scr:py-[20px]'>
                            <div className='flex items-center gap-[12px]'>
                                <img src={prof1} alt="prof1" />
                                <p className='whitespace-nowrap text-lg 2xl:text-base font-semibold'>Sarah L</p>
                            </div>
                            <div>
                                <button className='whitespace-nowrap px-[18px] py-[24px] bg-white-97 rounded-lg 2xl:px-[16px] 2xl:py-[14px] text-base 2xl:text-sm'>Read Full Story</button>
                            </div>
                        </div>
                    </div>

                    <div className='bg-white rounded-lg'>
                        <div className='p-[50px] 2xl:p-[40px] mob-scr:p-[25px] '>
                            <p className='font-normal text-lg 2xl:text-base mob-scr:text-sm'>
                            The UI/UX design course exceeded my expectations. The instructor's expertise and practical assignments helped me improve my design skills. I feel more confident in my career now. Thank you!
                            </p>
                        </div>
                        <div className='px-[50px] py-[30px] flex justify-between items-center 2xl:px-[40px] 2xl:py-[24px] mob-scr:px-[20px] mob-scr:py-[20px]'>
                            <div className='flex items-center gap-[12px]'>
                                <img src={prof2} alt="prof1" />
                                <p className='whitespace-nowrap text-lg 2xl:text-base font-semibold'>Jason M</p>
                            </div>
                            <div>
                                <button className='whitespace-nowrap px-[18px] py-[24px] bg-white-97 rounded-lg 2xl:px-[16px] 2xl:py-[14px] text-base 2xl:text-sm'>Read Full Story</button>
                            </div>
                        </div>
                    </div>


                    <div className='bg-white rounded-lg'>
                        <div className='p-[50px] 2xl:p-[40px] mob-scr:p-[25px] '>
                            <p className='font-normal text-lg 2xl:text-base mob-scr:text-sm'>
                            The mobile app development course was fantastic! The step-by-step tutorials and hands-on projects helped me grasp the concepts easily. I'm now building my own app. Great course!
                            </p>
                        </div>
                        <div className='px-[50px] py-[30px] flex justify-between items-center 2xl:px-[40px] 2xl:py-[24px] mob-scr:px-[20px] mob-scr:py-[20px]'>
                            <div className='flex items-center gap-[12px]'>
                                <img src={prof3} alt="prof1" />
                                <p className='whitespace-nowrap text-lg 2xl:text-base font-semibold'>Emily R</p>
                            </div>
                            <div>
                                <button className='whitespace-nowrap px-[18px] py-[24px] bg-white-97 rounded-lg 2xl:px-[16px] 2xl:py-[14px] text-base 2xl:text-sm'>Read Full Story</button>
                            </div>
                        </div>
                    </div>

                    <div className='bg-white rounded-lg'>
                        <div className='p-[50px] 2xl:p-[40px] mob-scr:p-[25px] '>
                            <p className='font-normal text-lg 2xl:text-base mob-scr:text-sm'>
                            I enrolled in the graphic design course as a beginner, and it was the perfect starting point. The instructor's guidance and feedback improved my design abilities significantly. I'm grateful for this course!
                            </p>
                        </div>
                        <div className='px-[50px] py-[30px] flex justify-between items-center 2xl:px-[40px] 2xl:py-[24px] mob-scr:px-[20px] mob-scr:py-[20px]'>
                            <div className='flex items-center gap-[12px]'>
                                <img src={prof4} alt="prof1" />
                                <p className='whitespace-nowrap text-lg 2xl:text-base font-semibold'>Michael K</p>
                            </div>
                            <div>
                                <button className='whitespace-nowrap px-[18px] py-[24px] bg-white-97 rounded-lg 2xl:px-[16px] 2xl:py-[14px] text-base 2xl:text-sm'>Read Full Story</button>
                            </div>
                        </div>
                    </div>


                </div>

            </div>
        </div>
    )
}

export default Testimonials
