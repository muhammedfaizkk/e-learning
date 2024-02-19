import React from 'react'

function Courseshead() { 
    return (
        <div className='flex gap-[100px] 2xl:gap-[80px] mob-scr:flex-col mob-scr:gap-[30px]'>
            <div className='flex-1'>
                <p className='text-5xl font-semibold 2xl:text-4xl mob-scr:text-3xl'>Online Courses on Design and Development</p>
            </div>
            <div className='flex-1'>
                <p className=' text-lg font-normal 2xl:text-base mob-scr:text-sm'>Welcome to our online course page, where you can enhance your skills in design
                    and development. Choose from our carefully curated selection of 10 courses
                    designed to provide you with comprehensive knowledge and practical experience.
                    Explore the courses below and find the perfect fit for your learning journey.</p>
            </div>
        </div>
    )
}

export default Courseshead
