import React from 'react'
import bannerImg from './assets/Container.png'

function CoursesOpen() {
    return (
        <div className='flex flex-col gap-[40px]'>
            <div className='flex gap-[100px]  2xl:gap-[80px] mob-scr:flex-col mob-scr:gap-[16px]'>
                <h1 className='flex-1 text-5xl font-semibold 2xl:text-4xl mob-scr:text-3xl'>UI/UX Design Course</h1>
                <p className='flex-1 text-lg font-normal	2xl:text-base mob-scr:text-sm'>
                    Welcome to our UI/UX Design course! This comprehensive program
                    will equip you with the knowledge and skills to create exceptional
                    user interfaces (UI) and enhance user experiences (UX). Dive into
                    the world of design thinking, wireframing, prototyping, and usability
                    testing. Below is an overview of the curriculum
                </p>
            </div>
           <div>
              <img className='w-[100%] object-cover' src={bannerImg} alt="" />
           </div>
        </div>
    )
}

export default CoursesOpen
