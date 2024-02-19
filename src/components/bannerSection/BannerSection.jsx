import React from 'react'
import './banner.css'
import zapier from '../bannerSection/assets/Logo.svg'
import soptify from '../bannerSection/assets/Logo (1).svg'
import zoom from '../bannerSection/assets/Logo (2).svg'
import amazon from '../bannerSection/assets/Logo (3).svg'
import adobe from '../bannerSection/assets/Logo (4).svg'
import notion from '../bannerSection/assets/Logo (5).svg'
import netflix from '../bannerSection/assets/Logo (6).svg'
import background from '../bannerSection/assets/6bb6966e3a2f0d2ee715a212e840cce4.png'
import playIcon from '../bannerSection/assets/Icon.svg'
function BannerSection() {

    return (

        <div className='banner mt-[30px] 2xl:mt-[0px]  max-w-max mx-auto'>
            <div className='flex justify-center bg-white items-center rounded-3xl border-4 border-solid border-white-97 bg-gradient-to-b from-opacity-20 to-opacity-20 bg-cover bg-center p-[30px] 2xl:p-[24px] max-1066px:p-[16px] max-774px:overflow-x-scroll max-774px:rounded-xl max-774px:justify-start'>
                <div className=' border-r border-solid border-gray-300 px-[40px] py-[30px] flex-shrink-0 flex-grow-0 2xl:px-[30px] 2xl:py-[20px]  max-1066px:px-[25px] max-1066px:py-[15px]'>
                    <img className='2xl:w-[81px] 2xl:h-[28px] max-998px:w-[48px] max-998px:h-[24px]' src={zapier} alt="" />
                </div>
                <div className='border-r border-solid border-gray-300 px-[40px] py-[30px] flex-shrink-0 flex-grow-0 2xl:px-[30px] 2xl:py-[20px] max-1066px:px-[25px] max-1066px:py-[15px]  '>
                    <img className='2xl:w-[81px] 2xl:h-[28px] max-998px:w-[48px] max-998px:h-[24px] ' src={soptify} alt="" />
                </div>
                <div className='border-r border-solid border-gray-300 px-[40px] py-[30px] flex-shrink-0 flex-grow-0 2xl:px-[30px] 2xl:py-[20px] max-1066px:px-[25px] max-1066px:py-[15px]'>
                    <img src={zoom} className='2xl:w-[81px] 2xl:h-[28px] max-998px:w-[48px] max-998px:h-[24px]' alt="" />
                </div>
                <div className='border-r border-solid border-gray-300 px-[40px] py-[30px] flex-shrink-0 flex-grow-0 2xl:px-[30px] 2xl:py-[20px] max-1066px:px-[25px] max-1066px:py-[15px]'>
                    <img className='2xl:w-[81px] 2xl:h-[28px] max-998px:w-[48px] max-998px:h-[24px]' src={amazon} alt="" />
                </div>
                <div className='border-r border-solid border-gray-300 px-[40px] py-[30px] flex-shrink-0 flex-grow-0 2xl:px-[30px] 2xl:py-[20px] max-1066px:px-[25px] max-1066px:py-[15px]'>
                    <img className='2xl:w-[81px] 2xl:h-[28px] max-998px:w-[48px] max-998px:h-[24px]' src={adobe} alt="" />
                </div>
                <div className='border-r border-solid border-gray-300 px-[40px] py-[30px] flex-shrink-0 flex-grow-0 2xl:px-[30px] 2xl:py-[20px] max-1066px:px-[25px] max-1066px:py-[15px]'>
                    <img className='2xl:w-[81px] 2xl:h-[28px] max-998px:w-[48px] max-998px:h-[24px]' src={notion} alt="" />
                </div>
                <div className='px-[40px] py-[30px] flex-shrink-0 flex-grow-0 2xl:px-[30px] flex-shrink-0 flex-grow-0 2xl:py-[20px] max-1066px:px-[25px] max-1066px:py-[15px]'>
                    <img className='2xl:w-[81px] 2xl:h-[28px] max-998px:w-[48px] max-998px:h-[24px]' src={netflix} alt="" />
                </div>
            </div>
            <div className='pt-[50px] 2xl:pt-[35px] max-390px:pt-[25px]'>

                <div className='relative flex justify-center '>
                    <div className='rounded-full border-6 border-solid border-hash border-opacity-30 bg-hash bg-opacity-20 absolute top-[50%] left-[50%]'>
                        <img src={playIcon} alt="" />
                    </div>
                    <img className='object-cover rounded-lg' src={background} alt="" />
                </div>
            </div>

        </div>


    )
}

export default BannerSection
