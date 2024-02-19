import React from 'react'

function Aboutbanner() {
  return (
    <div className='mt-[80px] 2xl:mt-[50px] bg-hero-pattern'>
        {/* <img className='absolute r-[260px] fill-white-97 h-[362px] w-[362px] ' src={banner} alt="" /> */}
         <div className='flex items-center justify-between  max-720px:flex-col max-720px:gap-[20px] p-[80px] 2xl:p-[60px] mob-scr:p-[30px] bg-white rounded-md'>
            <div className='flex flex-col gap-[10px] '>
                <h1 className='font-semibold text-5xl 2xl:text-[38px] mob-scr:text-[28px]'><span className='text-drk-yellow'>Together</span>, let's shape the future of digital innovation</h1>
                <p>Join us on this exciting learning journey and unlock your potential in design and development.</p>
            </div>
            <div className=''>
                <button className='py-[18px] px-[24px] rounded-lg bg-drk-yellow whitespace-nowrap font-semibold	 text-lg text-white'>Join now</button>
            </div>
         </div>
    </div>
  )
}

export default Aboutbanner
