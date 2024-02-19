import React from 'react'
import cardImg from './assets/Image (1).png'
import cardImg1 from './assets/Image (2).png'
import cardImg2 from './assets/Image (3).png'
import cardImg3 from './assets/Image (4).png'
import cardImg4 from './assets/Image (5).png'
import cardImg5 from './assets/Image (6).png'





function Feturessection() {
    return (
        <div>
            <div className='pt-[50px] 2xl:pt-[60px] max-390px:pt-[25px] mx-auto sm:mx-[10px] md:mx-[20px] lg:mx-[70px] xl:mx-[180px]'>

                <div>
                    <h1 className='text-5xl font-semibold font-normal leading-[72px] 2xl:text-4xl mob-scr:mt-3xl'>Our Courses</h1>
                    <div className='flex  mob-scr:flex-col md:gap-[20px] lg:gap-[100px] xl:gap-[150px]' >
                        <p className='text-lg font-semibold font-normal leading-[27px]  text-hash-1 flex-1 inline 2xl:text-base mob-scr:mt-sm'>Lorem ipsum dolor sit amet consectetur. Tempus tincidunt etiam eget elit id imperdiet et. Cras eu sit dignissim lorem nibh et. Ac cum eget habitasse in velit fringilla feugiat senectus in.</p>
                        <button className='whitespace-no-wrap flex-2  mob-scr:mt-5'>view all</button>
                    </div>
                </div>


                <div className=''>


                    <div className='grid grid-cols-2 max-774px:grid-cols-1 gap-[20px] mt-[40px]'>


                        <div className="w-100 h-auto p-[40PX] max-1280px:p-[20PX] flex flex-col gap-[20px] bg-white rounded-xl">
                            <div className='bg-lightgray bg-cover bg-no-repeat'>
                                <img className=' h-[240px] object-cover  self-stretch rounded-lg w-[100%]' src={cardImg} alt="" />
                            </div>
                            <div className='flex justify-between items-center md-b-lg:flex-col md-b-lg:items-start gap-[5px]  max-774px:flex-row  max-774px:items-center max-448px:block  '>
                                <div className='flex gap-[20px]'>
                                    <button className='px-[16px] py-[10px]  border border-solid border-hash-light text-sm font-normal'>4 Weeks</button>
                                    <button className='px-[16px] py-[10px]  border border-solid border-hash-light text-sm font-normalfont-normal'>Beginner</button>
                                </div>
                                <div className='flex items-center'>
                                    <h1 className='text-xl font-medium 2xl:text-base max-448px:mt-[5px]'>By john smith</h1>
                                </div>
                            </div>
                            <div className='flex flex-col gap-2 '>
                                <h1 className='font-semibold text-2xl 2xl:text-xl'>Web Design Fundamentals</h1>
                                <p className='text-lg font-normal 2xl:text-base'>Learn the fundamentals of web design, including HTML, CSS, and responsive
                                    design principles. Develop the skills to create visually appealing and
                                    user-friendly websites.</p>
                            </div>
                            <div className='w-100'>
                                <button className='rounded-md border border-solid border-hash-light bg-white-97 w-full px-[24px] py-[18px] '>Get it Now</button>
                            </div>
                        </div>
                        <div className="w-100 h-auto p-[40PX]  max-1280px:p-[20PX] flex flex-col gap-[20px] bg-white rounded-xl">
                            <div className='bg-lightgray bg-cover bg-no-repeat'>
                                <img className=' h-[240px] object-cover  self-stretch rounded-lg w-[100%]' src={cardImg1} alt="" />
                            </div>
                            <div className='flex justify-between items-center md-b-lg:flex-col md-b-lg:items-start gap-[5px]  max-774px:flex-row  max-774px:items-center max-448px:block '>
                                <div className='flex gap-[20px]'>
                                    <button className='px-[16px] py-[10px]  border border-solid border-hash-light text-sm font-normal'>4 Weeks</button>
                                    <button className='px-[16px] py-[10px]  border border-solid border-hash-light text-sm font-normalfont-normal'>Beginner</button>
                                </div>
                                <div className='flex items-center'>
                                    <h1 className='text-xl font-medium 2xl:text-base'>By Emily Johnson</h1>
                                </div>
                            </div>
                            <div className='flex flex-col gap-2 '>
                                <h1 className='font-semibold text-2xl 2xl:text-xl'>UI/UX Design</h1>
                                <p className='text-lg font-normal 2xl:text-base'>Master the art of creating intuitive user interfaces (UI) and enhancing user experiences (UX). Learn design principles, wireframing, prototyping, and usability testing techniques.</p>
                            </div>
                            <div className='w-100'>
                                <button className='rounded-md border border-solid border-hash-light bg-white-97 w-full px-[24px] py-[18px] '>Get it Now</button>
                            </div>
                        </div>
                        <div className="w-100 h-auto p-[40PX]  max-1280px:p-[20PX] flex flex-col gap-[20px] bg-white rounded-xl">
                            <div className='bg-lightgray bg-cover bg-no-repeat'>
                                <img className=' h-[240px] object-cover  self-stretch rounded-lg w-[100%]' src={cardImg2} alt="" />
                            </div>
                            <div className='flex justify-between items-center md-b-lg:flex-col md-b-lg:items-start gap-[5px]  max-774px:flex-row  max-774px:items-center max-448px:block  '>
                                <div className='flex gap-[20px]'>
                                    <button className='px-[16px] py-[10px]  border border-solid border-hash-light text-sm font-normal'>4 Weeks</button>
                                    <button className='px-[16px] py-[10px]  border border-solid border-hash-light text-sm font-normalfont-normal'>Beginner</button>
                                </div>
                                <div className='flex items-center'>
                                    <h1 className='text-xl font-medium 2xl:text-base'>By David Brown</h1>
                                </div>
                            </div>
                            <div className='flex flex-col gap-2 '>
                                <h1 className='font-semibold text-2xl 2xl:text-xl'>Mobile App Development</h1>
                                <p className='text-lg font-normal 2xl:text-base'>Dive into the world of mobile app development. Learn to build native iOS and Android applications using industry-leading frameworks like Swift and Kotlin</p>
                            </div>
                            <div className='w-100'>
                                <button className='rounded-md border border-solid border-hash-light bg-white-97 w-full px-[24px] py-[18px] '>Get it Now</button>
                            </div>
                        </div>
                        <div className="w-100 h-auto p-[40PX]  max-1280px:p-[20PX] flex flex-col gap-[20px] bg-white rounded-xl">
                            <div className='bg-lightgray bg-cover bg-no-repeat'>
                                <img className=' h-[240px] object-cover  self-stretch rounded-lg w-[100%]' src={cardImg3} alt="" />
                            </div>
                            <div className='flex justify-between items-center md-b-lg:flex-col md-b-lg:items-start gap-[5px]  max-774px:flex-row  max-774px:items-center max-448px:block  '>
                                <div className='flex gap-[20px]'>
                                    <button className='px-[16px] py-[10px]  border border-solid border-hash-light text-sm font-normal'>4 Weeks</button>
                                    <button className='px-[16px] py-[10px]  border border-solid border-hash-light text-sm font-normalfont-normal'>Beginner</button>
                                </div>
                                <div className='flex items-center'>
                                    <h1 className='text-xl font-medium 2xl:text-base'>By Sarah Thompson</h1>
                                </div>
                            </div>
                            <div className='flex flex-col gap-2 '>
                                <h1 className='font-semibold text-2xl 2xl:text-xl'>Graphic Design for Beginners</h1>
                                <p className='text-lg font-normal 2xl:text-base'>Discover the fundamentals of graphic design, including typography, color theory, layout design, and image manipulation techniques. Create visually stunning designs for print and digital media.</p>
                            </div>
                            <div className='w-100'>
                                <button className='rounded-md border border-solid border-hash-light bg-white-97 w-full px-[24px] py-[18px] '>Get it Now</button>
                            </div>
                        </div>
                        <div className="w-100 h-auto p-[40PX]  max-1280px:p-[20PX] flex flex-col gap-[20px] bg-white rounded-xl">
                            <div className='bg-lightgray bg-cover bg-no-repeat'>
                                <img className=' h-[240px] object-cover  self-stretch rounded-lg w-[100%]' src={cardImg4} alt="" />
                            </div>
                            <div className='flex justify-between items-center md-b-lg:flex-col md-b-lg:items-start gap-[5px]  max-774px:flex-row  max-774px:items-center max-448px:block  '>
                                <div className='flex gap-[20px]'>
                                    <button className='px-[16px] py-[10px]  border border-solid border-hash-light text-sm font-normal'>4 Weeks</button>
                                    <button className='px-[16px] py-[10px]  border border-solid border-hash-light text-sm font-normalfont-normal'>Beginner</button>
                                </div>
                                <div className='flex items-center'>
                                    <h1 className='text-xl font-medium 2xl:text-base'>By Michael Adams</h1>
                                </div>
                            </div>
                            <div className='flex flex-col gap-2 '>
                                <h1 className='font-semibold text-2xl 2xl:text-xl'>Front-End Web Development</h1>
                                <p className='text-lg font-normal 2xl:text-base'>Become proficient in front-end web development. Learn HTML, CSS, JavaScript, and popular frameworks like Bootstrap and React. Build interactive and responsive websites.</p>
                            </div>
                            <div className='w-100'>
                                <button className='rounded-md border border-solid border-hash-light bg-white-97 w-full px-[24px] py-[18px] '>Get it Now</button>
                            </div>
                        </div>
                        <div className="w-100 h-auto p-[40PX]  max-1280px:p-[20PX] flex flex-col gap-[20px] bg-white rounded-xl">
                            <div className='bg-lightgray bg-cover bg-no-repeat'>
                                <img className=' h-[240px] object-cover  self-stretch rounded-lg w-[100%]' src={cardImg5} alt="" />
                            </div>
                            <div className='flex justify-between items-center md-b-lg:flex-col md-b-lg:items-start gap-[5px]  max-774px:flex-row  max-774px:items-center max-448px:block  '>
                                <div className='flex gap-[20px] '>
                                    <button className='px-[16px] py-[10px]  border border-solid border-hash-light text-sm font-normal'>4 Weeks</button>
                                    <button className='px-[16px] py-[10px]  border border-solid border-hash-light text-sm font-normalfont-normal'>Beginner</button>
                                </div>
                                <div className='flex items-center'>
                                    <h1 className='text-xl font-medium 2xl:text-base'>By Jennifer Wilson</h1>
                                </div>
                            </div>
                            <div className='flex flex-col gap-2 '>
                                <h1 className='font-semibold text-2xl 2xl:text-xl md-b-lg:text-lg'>Advanced JavaScript</h1>
                                <p className='text-lg font-normal 2xl:text-base'>Take your JavaScript skills to the next level. Explore advanced concepts like closures, prototypes, asynchronous programming, and ES6 features. Build complex applications with confidence.</p>
                            </div>
                            <div className='w-100'>
                                <button className='rounded-md border border-solid border-hash-light bg-white-97 w-full px-[24px] py-[18px] '>Get it Now</button>
                            </div>
                        </div>




                    </div>

                </div>

            </div>
        </div>
    )
}

export default Feturessection
