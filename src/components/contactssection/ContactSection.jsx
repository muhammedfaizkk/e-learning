import React from 'react'
import eIcon from './assets/Icon (4).svg'
import pIcon from './assets/Icon (5).svg'
import gIcon from './assets/Icon (6).svg'
import fIcon from './assets/Icon (7).svg'
import tIcon from './assets/Icon (8).svg'
import lIcon from './assets/Icon (9).svg'
function ContactSection() {
  return (
    <div >

      <div className='flex gap-[100px]  2xl:gap-[80px] mob-scr:flex-col mob-scr:gap-[16px] border-b border-solid border-white-90 pb-[40px]'>
        <h1 className='flex-1 text-5xl font-semibold 2xl:text-4xl mob-scr:text-3xl'>Contact Us</h1>
        <p className='flex-1 text-lg font-normal	2xl:text-base mob-scr:text-sm'>
          Welcome to SkillBridge's Pricing Plan page, where we offer two comprehensive options
          to cater to your needs: Free and Pro. We believe in providing flexible and affordable
          pricing options for our services. Whether you're an individual looking to enhance your
          skills or a business seeking professional development solutions, we have a plan that
          suits you. Explore our pricing options
          below and choose the one that best fits your requirements.
        </p>
      </div>

      <div className='bg-white flex max-1098px:flex-col justify-center items-center  mt-[50px]'>
        <div className=' flex flex-col  gap-[50px] 2xl:gap-[40px] p-[80px] 2xl:p-[60px] mob-scr:p-[10px] mw-[100%]'>
          <div className='flex flex-col gap-[24px]'>
            <div className='flex mob-scr:flex-col gap-[30px] 2xl:gap-[24px]'>
              <div className='flex flex-col gap-[10px] '>
                <label htmlFor="first name" className='font-medium text-lg  2xl:text-base mob-scr:text-sm'>First Name</label>
                <input type="text" className='  w-full focus:outline-none p-[20px] font-normal text-lg 2xl:text-base mob-scr:text-sm text-hash-1 border border-solid border-white-95 bg-white-95 rounded-lg' placeholder='Enter First Name' />
              </div>
              <div className='flex flex-col gap-[10px] '>
                <label htmlFor="last Name" className='font-medium text-lg  2xl:text-base mob-scr:text-sm'>Last Name</label>
                <input type="text" className='self-stretch  w-full focus:outline-none p-[20px] font-normal text-lg 2xl:text-base mob-scr:text-sm text-hash-1 border border-solid border-white-95 bg-white-95 rounded-lg ' placeholder='Enter Last Name' />
              </div>
            </div>

            <div className='flex mob-scr:flex-col gap-[30px] 2xl:gap-[24px]'>
              <div className='flex flex-col gap-[10px] '>
                <label htmlFor="Email" className='font-medium text-lg  2xl:text-base mob-scr:text-sm'>Email</label>
                <input type="email" className=' focus:outline-none p-[20px] font-normal text-lg 2xl:text-base mob-scr:text-sm text-hash-1 border border-solid border-white-95 bg-white-95 rounded-lg ' placeholder='Enter Your Email' />
              </div>
              <div className='flex flex-col gap-[10px] '>
                <label htmlFor="last Name" className='font-medium text-lg  2xl:text-base mob-scr:text-sm'>Phone</label>
                <input type="text" className=' w-full focus:outline-none p-[20px] font-normal text-lg 2xl:text-base mob-scr:text-sm text-hash-1 border border-solid border-white-95 bg-white-95 rounded-lg ' placeholder='Enter Phone Number' />
              </div>
            </div>
            <div className='flex flex-col gap-[10px] '>
              <label htmlFor="last Name" className='font-medium text-lg  2xl:text-base mob-scr:text-sm'>Subject</label>
              <input type="text" className=' w-full focus:outline-none p-[20px] font-normal text-lg 2xl:text-base mob-scr:text-sm text-hash-1 border border-solid border-white-95 bg-white-95 rounded-lg ' placeholder='Enter Your Subject' />
            </div>
          </div>

          <div className='flex flex-col gap-[10px] '>
            <label htmlFor="last Name" className='font-medium text-lg  2xl:text-base mob-scr:text-sm'>Message</label>
            <input type="text" className='  w-full h-[128px] focus:outline-none p-[20px] font-normal text-lg 2xl:text-base mob-scr:text-sm text-hash-1 border border-solid border-white-95 bg-white-95 rounded-lg ' placeholder='Enter your Message here...' />
          </div>

          <div>
            <button className='login w-full flex items-center justify-center gap-8 p-2 px-4 text-lg 2xl:text-sm mob-scr:text-xs text-white'>Send Message</button>
          </div>

        </div>

        <div className='p-[80px] 2xl:p-[60px] mob-scr:p-[30px] flex flex-col gap-[50px] 2xl:gap-[24px] mob-scr:gap-[20px]'>
          <div className='flex flex-col gap-[20px] items-center border border-solid border-white-95 bg-white-95 rounded-lg  p-[30px]'>
            <div className=' bg-white-97 p-[12px] rounded-lg'>
              <img className='w-[24px] h-[24px] 2xl:w-[20px] 2xl:h-[20px]' src={eIcon} alt="" />
            </div>

            <p className='text-darkHash font-normal	text-lg 2xl:text-base mob-scr:text-sm'>support@skillbridge.com</p>
          </div>
          <div className='flex flex-col gap-[20px] items-center border border-solid border-white-95 bg-white-95 rounded-lg  p-[30px]'>

            <div className=' bg-white-97 p-[12px] rounded-lg'>
              <img className='w-[24px] h-[24px] 2xl:w-[20px] 2xl:h-[20px]' src={pIcon} alt="" />
            </div>
            <p className='text-darkHash font-normal	text-lg 2xl:text-base mob-scr:text-sm'>+91 00000 00000</p>
          </div>
          <div className='flex flex-col gap-[20px] items-center border border-solid border-white-95 bg-white-95 rounded-lg p-[30px]'>
            <div className=' bg-white-97 p-[12px] rounded-lg'>
              <img className='w-[24px] h-[24px] 2xl:w-[20px] 2xl:h-[20px]' src={gIcon} alt="" />
            </div>
            <p className='text-darkHash font-normal	text-lg 2xl:text-base mob-scr:text-sm'>Some Where in the World</p>
          </div>
          <div className='flex flex-col gap-[20px] border border-solid border-white-95 bg-white-95 rounded-lg  p-[30px] '>
            <div className='flex gap-[10px] items-center justify-center'>
              <div className=' bg-white-97 p-[12px] rounded-lg'>
                <img className='w-[24px] h-[24px] 2xl:w-[20px] 2xl:h-[20px]' src={fIcon} alt="" />
              </div>
              <div className=' bg-white-97 p-[12px] rounded-lg'>
                <img className='w-[24px] h-[24px] 2xl:w-[20px] 2xl:h-[20px] bg-white-97 ' src={tIcon} alt="" />
              </div>

              <div className='inline bg-white-97 p-[12px] rounded-lg'>
                <img className='w-[24px] h-[24px] 2xl:w-[20px] 2xl:h-[20px] bg-white-97 ' src={lIcon} alt="" />
              </div>
            </div>
            <div>
              <p className='text-darkHash font-normal	text-lg 2xl:text-base mob-scr:text-sm'>Some Where in the World</p>
            </div>

          </div>

        </div>
      </div>
    </div>
  )
}

export default ContactSection
