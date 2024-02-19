import React from 'react'
import logoimg from './assets/crown.fill.svg'
import medalfill from './assets/medal.fill.svg'
import backpackfill from './assets/backpack.fill.svg'
import boltshieldfill from './assets/bolt.shield.fill.svg'

function Aboutcard() {
  return (
    <div >
      
        <div className='flex gap-[100px]  2xl:gap-[80px] mob-scr:flex-col mob-scr:gap-[16px] border-b border-solid border-white-90 pb-[40px]'>
          <h1 className='flex-1 text-5xl font-semibold 2xl:text-4xl mob-scr:text-3xl'>About Skillbridge</h1>
          <p className='flex-1 text-lg font-normal	2xl:text-base mob-scr:text-sm'>
            Welcome to our platform, where we are passionate about empowering individuals to master the world of design and development. We offer a wide range of online courses designed to equip learners with the skills and knowledge needed to succeed in the ever-evolving digital landscape.
          </p>
        </div>


     
      <div className='flex flex-col gap-[80px] 2xl:gap-[50px]'>
        <div className='flex flex-col gap-[10px] my-[40px]'>
          <h1 className='font-medium text-5xl	 2xl:text-3xl mb-scr:text-2xl'>Achievements</h1>
          <p className='font-normal text-lg 2xl:text-base mob-scr:text-sm text-var(--Grey-20, #333)'>Our commitment to excellence has led us to achieve
            significant milestones along our journey. Here are
            some of our notable achievements</p>
        </div>





        <div className='grid grid-cols-2  gap-[30px] 2xl:gap-[20px] max-720px:grid-cols-1'>
          <div className='flex flex-col gap-[10px] p-[50px] 2xl:p-[40px] mob-scr:p-[30px] bg-white rounded-md'>
            <div className=' '>
              <img className='w-[34px] h-[27.929] bg-Orange-90 2xl:h-[23px] 2xl:w-[28px]' src={logoimg} alt="" />
            </div>
            <div>
              <h1 className='font-medium text-2xl 2xl:text-xl mob-scr:text-lg'>Trusted by Thousands</h1>
              <p className='font-normal text-lg 2xl:text-base mob-scr:text-sm text-var(--Grey-20, #333)'>We have successfully served thousands
                of students, helping them unlock their
                potential and achieve their career goals.</p>
            </div>
          </div>

          <div className='flex flex-col gap-[10px] p-[50px] 2xl:p-[40px] mob-scr:p-[30px] bg-white rounded-md'>
            <div className=' '>
              <img className='w-[34px] h-[27.929] bg-Orange-90 2xl:h-[23px] 2xl:w-[28px]' src={medalfill} alt="" />
            </div>
            <div>
              <h1 className='font-medium text-2xl 2xl:text-xl mob-scr:text-lg'>Award-Winning Courses</h1>
              <p className='font-normal text-lg 2xl:text-base mob-scr:text-sm text-var(--Grey-20, #333)'>Our courses have received recognition and accolades in the industry for their quality, depth of content, and effective teaching methodologies.</p>
            </div>


          </div>

          <div className='flex flex-col gap-[10px] p-[50px] 2xl:p-[40px] mob-scr:p-[30px] bg-white rounded-md'>
            <div className=' '>
              <img className='w-[34px] h-[27.929] bg-Orange-90 2xl:h-[23px] 2xl:w-[28px]' src={backpackfill} alt="" />
            </div>
            <div>
              <h1 className='font-medium text-2xl 2xl:text-xl mob-scr:text-lg'>Positive Student Feedback</h1>
              <p className='font-normal text-lg 2xl:text-base mob-scr:text-sm text-var(--Grey-20, #333)'>We take pride in the positive feedback we receive from our students, who appreciate the practicality and relevance of our course materials.</p>
            </div>


          </div>

          <div className='flex flex-col gap-[10px] p-[50px] 2xl:p-[40px] mob-scr:p-[30px] bg-white rounded-md'>
            <div className=' '>
              <img className='w-[34px] h-[27.929] bg-Orange-90 2xl:h-[23px] 2xl:w-[28px] ' src={boltshieldfill} alt="" />
            </div>
            <div>
              <h1 className='font-medium text-2xl 2xl:text-xl mob-scr:text-lg'>Industry Partnerships</h1>
              <p className='font-normal text-lg 2xl:text-base mob-scr:text-sm text-var(--Grey-20, #333)'>
                We have established strong partnerships with industry leaders, enabling us to provide our
                students with access to the latest tools
                and technologies
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Aboutcard
