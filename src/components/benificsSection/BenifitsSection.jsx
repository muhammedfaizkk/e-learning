import React from 'react'
import './benifitsSection.css'
import playIcon1 from '../bannerSection/assets/Icon (1).svg'

function BenifitsSection() {
  return (
    <div className='pt-[50px] 2xl:pt-[35px] max-390px:pt-[25px] mx-auto sm:mx-[10px] md:mx-[20px] lg:mx-[70px] xl:mx-[180px]'>

      <div>
        <h1 className='text-5xl font-semibold font-normal leading-[72px] 2xl:text-4xl mob-scr:mt-3xl'>Benefits</h1>
        <div className='flex  mob-scr:flex-col md:gap-[20px] lg:gap-[100px] xl:gap-[150px]' >
          <p className='text-lg font-semibold font-normal leading-[27px]  text-hash-1 flex-1 inline 2xl:text-base mob-scr:mt-sm'>Lorem ipsum dolor sit amet consectetur. Tempus tincidunt etiam eget elit id imperdiet et. Cras eu sit dignissim lorem nibh et. Ac cum eget habitasse in velit fringilla feugiat senectus in.</p>
          <button className='whitespace-no-wrap flex-2  mob-scr:mt-5'>view all</button>
        </div>
      </div>


      <div className='card-parent pt-[50px] 2xl:pt-[35px] max-390px:pt-[25px] grid grid-cols-3 max-998px:grid-cols-2 max-660px:flex max-660px:flex-col max-660px:gap-[20px]  gap-x-[20px] gap-y-[20px]'>
        <div className='card bg-white  p-[50px] flex flex-col gap-[40px] max-660px: gap-[20px] auto 2xl:p-[40px] max-390px:p-[30px]'>
          <div className='card-head'>
            <h1 className='text-7xl font-bold text-end 2xl:text-6xl max-390px:text-5xl'>01</h1>
          </div>
          <div>
            <h1 className='text-xl font-semibold mb-4'>Flexible Learning Schedule</h1>
            <p className='text-base text-hash-1 font-normal 2xl:text-base max-390px:text-sm'> Fit your coursework around your existing commitments and obligations.</p>
          </div>
          <div className='flex justify-end '>
            <img src={playIcon1} alt="" />
          </div>
        </div>

        <div className='card bg-white  p-[50px] flex flex-col gap-[40px] max-660px: gap-[20px] auto 2xl:p-[40px] max-390px:p-[30px] '>
          <div className='card-head'>
            <h1 className='text-7xl font-bold text-end 2xl:text-6xl max-390px:text-5xl'>02</h1>
          </div>
          <div>
            <h1 className='text-xl font-semibold mb-4'>Expert Instruction</h1>
            <p className='text-base text-hash-1 font-normal 2xl:text-base max-390px:text-sm'> Learn from industry experts who have hands-on experience in design and development.</p>
          </div>
          <div className='flex justify-end '>
            <img src={playIcon1} alt="" />
          </div>
        </div>


        <div className='card bg-white  p-[50px] flex flex-col gap-[40px] max-660px: gap-[20px] auto 2xl:p-[40px] max-390px:p-[30px]'>
          <div className='card-head'>
            <h1 className='text-7xl font-bold text-end 2xl:text-6xl max-390px:text-5xl'>03</h1>
          </div>
          <div>
            <h1 className='text-xl font-semibold mb-4'>Diverse Course Offerings</h1>
            <p className='text-base text-hash-1 font-normal 2xl:text-base max-390px:text-sm'> Explore a wide range of design and development courses covering various topics.</p>
          </div>
          <div className='flex justify-end '>
            <img src={playIcon1} alt="" />
          </div>
        </div>

        <div className='card bg-white  p-[50px] flex flex-col gap-[40px] max-660px: gap-[20px] auto 2xl:p-[40px] max-390px:p-[30px]'>
          <div className='card-head'>
            <h1 className='text-7xl font-bold text-end 2xl:text-6xl max-390px:text-5xl'>04</h1>
          </div>
          <div>
            <h1 className='text-xl font-semibold mb-4'>Updated Curriculum</h1>
            <p className='text-base text-hash-1 font-normal 2xl:text-base max-390px:text-sm'> Access courses with up-to-date content reflecting the latest trends and industry practices.</p>
          </div>
          <div className='flex justify-end '>
            <img src={playIcon1} alt="" />
          </div>
        </div>


        <div className='card bg-white  p-[50px] flex flex-col gap-[40px] max-660px: gap-[20px] auto 2xl:p-[40px] max-390px:p-[30px]'>
          <div className='card-head'>
            <h1 className='text-7xl font-bold text-end 2xl:text-6xl max-390px:text-5xl'>05</h1>
          </div>
          <div>
            <h1 className='text-xl font-semibold mb-4'>Practical Projects and Assignments</h1>
            <p className='text-base text-hash-1 font-normal 2xl:text-base max-390px:text-sm'>Develop a portfolio showcasing your skills and abilities to potential employers.</p>
          </div>
          <div className='flex justify-end '>
            <img src={playIcon1} alt="" />
          </div>
        </div>


        <div className='card bg-white  p-[50px] flex flex-col gap-[40px] max-660px: gap-[20px] auto 2xl:p-[40px] max-390px:p-[30px] '>
          <div className='card-head'>
            <h1 className='text-7xl font-bold text-end 2xl:text-6xl max-390px:text-5xl'>06</h1>
          </div>
          <div>
            <h1 className='text-xl font-semibold mb-4'>Interactive Learning Environment</h1>
            <p className='text-base text-hash-1 font-normal 2xl:text-base max-390px:text-sm'> Collaborate with fellow learners, exchanging ideas and feedback to enhance your understanding</p>
          </div>
          <div className='flex justify-end '>
            <img src={playIcon1} alt="" />
          </div>
        </div>







      </div>

    </div>
  )
}

export default BenifitsSection
