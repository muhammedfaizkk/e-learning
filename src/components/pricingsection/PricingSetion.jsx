import React from 'react'
import tickicon from './assets/Icon (2).svg'
import ckicon from './assets/Icon (3).svg'

function PricingSetion() {
    return (
        <div>
            <div className='pt-[50px] mb-[50px] 2xl:pt-[60px] max-390px:pt-[25px] mx-auto sm:mx-[10px] md:mx-[20px] lg:mx-[70px] xl:mx-[180px]'>

                <div>
                    <h1 className='text-5xl font-semibold font-normal leading-[72px] 2xl:text-4xl mob-scr:mt-3xl'>Our Pricing</h1>
                    <div className='flex  mob-scr:flex-col md:gap-[20px] lg:gap-[100px] xl:gap-[150px]' >
                        <p className='text-lg font-semibold font-normal leading-[27px]  text-hash-1 flex-1 inline 2xl:text-base mob-scr:mt-sm '>Lorem ipsum dolor sit amet consectetur. Tempus tincidunt etiam eget elit id imperdiet et. Cras eu sit dignissim lorem nibh et. Ac cum eget habitasse in velit fringilla feugiat senectus in.</p>
                        <div className='btn-lgn-sign flex gap-6 items-center justify-center  md-b-lg:gap-3 mob-scr:mt-[30px]'>
                            <button className='login flex items-center gap-8 p-2 px-4 text-lg 2xl:text-sm mob-scr:text-xs text-white'>Monthly</button>
                            <button className='sign-up  text-lg 2xl:text-sm mob-scr:text-xs'>yearly</button>

                        </div>
                    </div>
                </div>

                <div className='flex justify-center max-998px:flex-col bg-white mt-[40px]  p-[80px] 2xl:p-[50px] mob-scr:px-[20px] mob-scr:py-[30px] gap-[30px] '>
                    <div className='flex flex-col gap-[50px] mob-scr:gap-[30px] px-[30px] pt-[50px] mob-scr:pt-[40px] mob-scr:px-[20px]  pb-[30px] rounded-lg border border-solid border-var-White-95 bg-white-97'>
                        <div className='flex justify-center py-[12px] bg-l-white w-[100%] font-medium text-xl border border-solid border-Orange-90'> Free Plan</div>
                        <div className='flex justify-center '><p className='text-7xl font-semibold 2xl:text-6xl mob-scr:text-5xl'>$0</p>
                            <div className='flex items-end'><p className='text-xl font-medium 2xl:text-base mob-scr:text-sm'>/month</p></div>
                        </div>
                        <div className='flex flex-col gap-[30px] mob-scr:gap-[20px] bg-white p-[30px] 2xl:p-[25px] mob-scr:p-[15px]'>
                            <p className='text-xl text-center font-medium 2xl:text-lg '>Available Features</p>
                            <div className='flex flex-col gap-[12px] '>
                                <div className='flex items-center gap-2 p-[14px] 2xl:p-[12px] mob-scr:p-[5px]  border border-solid border-var-White-95'>
                                    <div><img className='bg-l-white width-[20px] height-[20px] 2xl:width-[16px] 2xl:height-[16px]' src={tickicon} alt="tickicon" /></div>
                                    <span className='font-normal font-lg text-darkHash 2xl:text-sm '>Access to selected free courses.</span>
                                </div>
                                <div className='flex items-center gap-2 p-[14px] 2xl:p-[12px] mob-scr:p-[5px] border border-solid border-var-White-95'>
                                    <div><img className='bg-l-white width-[20px] height-[20px] 2xl:width-[16px] 2xl:height-[16px]' src={tickicon} alt="tickicon" /></div>
                                    <span className='font-normal font-lg text-darkHash 2xl:text-sm '>Limited course materials and resources.</span>
                                </div>
                                <div className='flex items-center gap-[12px] p-[14px] 2xl:p-[12px] mob-scr:p-[5px]  border border-solid border-var-White-95'>
                                    <div><img className='bg-l-white width-[20px] height-[20px] 2xl:width-[16px] 2xl:height-[16px]' src={tickicon} alt="tickicon" /></div>
                                    <span className='font-normal font-lg text-darkHash 2xl:text-sm '>Basic community support.</span>
                                </div>
                                <div className='flex items-center gap-2 p-[14px] 2xl:p-[12px] mob-scr:p-[5px]  border border-solid border-var-White-95'>
                                    <div><img className='bg-l-white width-[20px] height-[20px] 2xl:width-[16px] 2xl:height-[16px]' src={tickicon} alt="tickicon" /></div>
                                    <span className='font-normal font-lg text-darkHash 2xl:text-sm '>No certification upon completion.</span>
                                </div>
                                <div className='flex items-center gap-2 p-[14px] 2xl:p-[12px] mob-scr:p-[5px]  border border-solid border-var-White-95'>
                                    <div><img className='bg-l-white width-[20px] height-[20px] 2xl:width-[16px] 2xl:height-[16px]' src={tickicon} alt="tickicon" /></div>
                                    <span className='font-normal font-lg text-darkHash 2xl:text-sm'>Ad-supported platform.</span>
                                </div>
                                <div className='flex items-center gap-2 p-[14px] 2xl:p-[12px] mob-scr:p-[5px]  border border-solid border-var-White-95'>
                                    <div><img className='bg-l-white width-[20px] height-[20px] 2xl:width-[16px] 2xl:height-[16px]' src={ckicon} alt="tickicon" /></div>
                                    <span className='font-normal font-lg text-darkHash 2xl:text-sm'>Access to exclusive Pro Plan community forums.</span>
                                </div>
                                <div className='flex items-center gap-2 p-[14px] 2xl:p-[12px] mob-scr:p-[5px]  border border-solid border-var-White-95'>
                                    <div><img className='bg-l-white width-[20px] height-[20px] 2xl:width-[16px] 2xl:height-[16px]' src={ckicon} alt="tickicon" /></div>
                                    <span className='font-normal font-lg text-darkHash 2xl:text-sm '>Early access to new courses and updates.</span>
                                </div>


                            </div>
                            <div>
                                <button className='login w-full flex items-center justify-center gap-8 p-2 px-4 text-lg 2xl:text-sm mob-scr:text-xs text-white'>Get started</button>
                            </div>
                        </div>

                    </div>

                    <div className='flex flex-col gap-[50px] mob-scr:gap-[30px] px-[30px] pt-[50px] mob-scr:pt-[40px] mob-scr:px-[20px]  pb-[30px] rounded-lg border border-solid border-var-White-95 bg-white-97'>
                        <div className='flex justify-center px-[22px] py-[12px] bg-l-white w-[100%] font-medium text-xl border border-solid border-Orange-90'> Pro Plan</div>
                        <div className='flex justify-center '><p className='text-7xl font-semibold 2xl:text-6xl mob-scr:text-5xl'>$77</p>
                            <div className='flex items-end'><p className='text-xl font-medium 2xl:text-base mob-scr:text-sm'>/month</p></div>
                        </div>
                        <div className='flex flex-col gap-[30px] mob-scr:gap-[20px] bg-white p-[40px] 2xl:p-[30px] mob-scr:p-[20px]'>
                            <p className='text-xl text-center font-medium 2xl:text-lg '>Available Features</p>
                            <div className='flex flex-col gap-[12px] '>
                                <div className='flex items-center gap-2 p-[14px] 2xl:p-[12px] mob-scr:p-[5px]  border border-solid border-var-White-95'>
                                    <div><img className='bg-l-white width-[20px] height-[20px] 2xl:width-[16px] 2xl:height-[16px]' src={tickicon} alt="tickicon" /></div>
                                    <span className='font-normal font-lg text-darkHash 2xl:text-sm '>Access to selected free courses.</span>
                                </div>
                                <div className='flex items-center gap-2 p-[14px] 2xl:p-[12px] mob-scr:p-[5px] border border-solid border-var-White-95'>
                                    <div><img className='bg-l-white width-[20px] height-[20px] 2xl:width-[16px] 2xl:height-[16px]' src={tickicon} alt="tickicon" /></div>
                                    <span className='font-normal font-lg text-darkHash 2xl:text-sm '>Limited course materials and resources.</span>
                                </div>
                                <div className='flex items-center gap-[12px] p-[14px] 2xl:p-[12px] mob-scr:p-[5px]  border border-solid border-var-White-95'>
                                    <div><img className='bg-l-white width-[20px] height-[20px] 2xl:width-[16px] 2xl:height-[16px]' src={tickicon} alt="tickicon" /></div>
                                    <span className='font-normal font-lg text-darkHash 2xl:text-sm '>Basic community support.</span>
                                </div>
                                <div className='flex items-center gap-2 p-[14px] 2xl:p-[12px] mob-scr:p-[5px]  border border-solid border-var-White-95'>
                                    <div><img className='bg-l-white width-[20px] height-[20px] 2xl:width-[16px] 2xl:height-[16px]' src={tickicon} alt="tickicon" /></div>
                                    <span className='font-normal font-lg text-darkHash 2xl:text-sm '>No certification upon completion.</span>
                                </div>
                                <div className='flex items-center gap-2 p-[14px] 2xl:p-[12px] mob-scr:p-[5px]  border border-solid border-var-White-95'>
                                    <div><img className='bg-l-white width-[20px] height-[20px] 2xl:width-[16px] 2xl:height-[16px]' src={tickicon} alt="tickicon" /></div>
                                    <span className='font-normal font-lg text-darkHash 2xl:text-sm '>Ad-supported platform.</span>
                                </div>
                                <div className='flex items-center gap-2 p-[14px] 2xl:p-[12px] mob-scr:p-[5px]  border border-solid border-var-White-95'>
                                    <div><img className='bg-l-white width-[20px] height-[20px] 2xl:width-[16px] 2xl:height-[16px]' src={ckicon} alt="tickicon" /></div>
                                    <span className='font-normal font-lg text-darkHash 2xl:text-sm '>Access to exclusive Pro Plan community forums.</span>
                                </div>
                                <div className='flex items-center gap-2 p-[14px] 2xl:p-[12px] mob-scr:p-[5px]  border border-solid border-var-White-95'>
                                    <div><img className='bg-l-white width-[20px] height-[20px] 2xl:width-[16px] 2xl:height-[16px]' src={ckicon} alt="tickicon" /></div>
                                    <span className='font-normal font-lg text-darkHash 2xl:text-sm '>Early access to new courses and updates.</span>
                                </div>


                            </div>
                            <div>
                                <button className='login w-full flex items-center justify-center gap-8 p-2 px-4 text-lg 2xl:text-sm mob-scr:text-xs text-white'>Get started</button>
                            </div>
                        </div>

                    </div>
                </div>




            </div>
        </div>
    )
}

export default PricingSetion
