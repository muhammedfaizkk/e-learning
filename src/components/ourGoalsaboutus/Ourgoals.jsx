import React from 'react'
import backpack from './assets/backpack.fill (1).svg'
import bookclosed from './assets/book.closed.fill.svg'
import puzzlepiece from './assets/puzzlepiece.fill.svg'
import lightbeacon from './assets/light.beacon.max.fill.svg'

function Ourgoals() {
    return (
        <div>
            <div className='flex flex-col gap-[15px]'>
                <div className='flex flex-col gap-[10px] my-[40px]'>
                    <h1 className='font-medium text-5xl	 2xl:text-3xl mb-scr:text-2xl f'>Our Goals</h1>
                    <p className='font-normal text-lg 2xl:text-base mob-scr:text-sm text-var(--Grey-20, #333)'>Our commitment to excellence has led us to achieve
                        significant milestones along our journey. Here are
                        some of our notable achievements</p>
                </div>





                <div className='grid grid-cols-2  gap-[30px] 2xl:gap-[20px] max-720px:grid-cols-1'>
                    <div className='flex flex-col gap-[10px] p-[50px] 2xl:p-[40px] mob-scr:p-[30px] bg-white rounded-md'>
                        <div className=' '>
                            <img className='w-[34px] h-[27.929] bg-Orange-90 2xl:h-[23px] 2xl:w-[28px]' src={backpack} alt="" />
                        </div>
                        <div>
                            <h1 className='font-medium text-2xl 2xl:text-xl mob-scr:text-lg'>Provide Practical Skills</h1>
                            <p className='font-normal text-lg 2xl:text-base mob-scr:text-sm text-var(--Grey-20, #333)'>
                            We focus on delivering practical skills that are relevant to the current industry demands.
                             Our courses are designed to equip learners with the knowledge and tools needed to excel
                              in their chosen field.
                                </p>
                        </div>
                    </div>

                    <div className='flex flex-col gap-[10px] p-[50px] 2xl:p-[40px] mob-scr:p-[30px] bg-white rounded-md'>
                        <div className=' '>
                            <img className='w-[34px] h-[27.929] bg-Orange-90 2xl:h-[23px] 2xl:w-[28px]' src={bookclosed} alt="" />
                        </div>
                        <div>
                            <h1 className='font-medium text-2xl 2xl:text-xl mob-scr:text-lg'>Foster Creative Problem-Solving</h1>
                            <p className='font-normal text-lg 2xl:text-base mob-scr:text-sm text-var(--Grey-20, #333)'>
                            We encourage creative thinking and problem-solving abilities, allowing our students 
                            to tackle real-world challenges with confidence and innovation.
                            </p>
                        </div>


                    </div>

                    <div className='flex flex-col gap-[10px] p-[50px] 2xl:p-[40px] mob-scr:p-[30px] bg-white rounded-md'>
                        <div className=' '>
                            <img className='w-[34px] h-[27.929] bg-Orange-90 2xl:h-[23px] 2xl:w-[28px]' src={puzzlepiece} alt="" />
                        </div>
                        <div>
                            <h1 className='font-medium text-2xl 2xl:text-xl mob-scr:text-lg'>Promote Collaboration and Community</h1>
                            <p className='font-normal text-lg 2xl:text-base mob-scr:text-sm text-var(--Grey-20, #333)'>
                            We believe in the power of collaboration and peer learning. Our platform fosters a supportive
                             and inclusive community 
                            where learners can connect, share insights, and grow together.
                                </p>
                        </div>


                    </div>

                    <div className='flex flex-col gap-[10px] p-[50px] 2xl:p-[40px] mob-scr:p-[30px] bg-white rounded-md'>
                        <div className=' '>
                            <img className='w-[34px] h-[27.929] bg-Orange-90 2xl:h-[23px] 2xl:w-[28px] ' src={lightbeacon} alt="" />
                        </div>
                        <div>
                            <h1 className='font-medium text-2xl 2xl:text-xl mob-scr:text-lg'>Stay Ahead of the Curve</h1>
                            <p className='font-normal text-lg 2xl:text-base mob-scr:text-sm text-var(--Grey-20, #333)'>
                            The digital landscape is constantly evolving, and we strive to stay 
                            at the forefront of industry trends. We regularly 
                            update our course content to ensure our students receive the latest knowledge and skills.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Ourgoals
