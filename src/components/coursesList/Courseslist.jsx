import React from 'react'
import { Link } from "react-router-dom";
import img1 from './assets/6461c79646a72642654d9078a4229880.png'
import img2 from './assets/572e236032a1e5584a90b7e83e2cf3c3.png'
import img3 from './assets/2a1b8774ac452db1e2b7551ba9f4f9f2.png'

import img4 from './assets/Image.png'
import img5 from './assets/Image (1).png'
import img6 from './assets/Image (2).png'

import img7 from './assets/Image (3).png'
import img8 from './assets/Image (4).png'
import img9 from './assets/Image (5).png'

import img10 from './assets/Image (6).png'
import img11 from './assets/Image (7).png'
import img12 from './assets/Image (8).png'

import img13 from './assets/Image (9).png'
import img14 from './assets/Image (10).png'
import img15 from './assets/Image (11).png'

import './style.css'


function Courseslist() {
  return (
    <div className='mt-[40px] flex flex-col gap-[50px]'>
      <div className='py-[50px] px-[30px] mob-scr:px-[10px] bg-white rounded-lg '>
        <div className='flex flex-col justify-center  gap-[30px]'>
          <div className='flex items-center justify-between mob-scr:flex-col'>
            <div>
              <p className='text-3xl font-semibold 2xl:text-xl mob-scr:text-lg'>Web Design Fundamentals</p>
              <p className='font-normal text-lg 2xl:text-base mob-scr:text-sm flex-1 text:hash-1'>Learn the fundamentals of web design, including HTML, CSS, and responsive design principles. Develop the skills to create visually appealing and user-friendly websites.</p>
            </div>
            <span className='font-medium text-lg 2xl:text-sm flex p-4 justify-center items-center gap-2 flex-1a bg-white-97 whitespace-nowrap mob-scr:mt-[20px]'>
              <Link to={'/coursesopenpage'}>View Course</Link>
            </span>
          </div>
          <div>
            <div className='mob-p flex gap-[30px] max-660px:gap-[8px]  max-998px:gap-[20px]   justify-between '>
              <div className=''>
                <img className=' mob  h-[300px] w-[405px] max-998px:h-[250px]   rounded-md object-cover  ' src={img1} alt="" />


              </div>
              <div className=''>
                <img className='mob h-[300px] w-[405px] max-998px:h-[250px]  rounded-md object-cover   ' src={img2} alt="" />
              </div>
              <div className=''>
                <img className='mob  h-[300px] w-[405px] max-998px:h-[250px]   rounded-md object-cover   ' src={img3} alt="" />
              </div>
            </div>
            <div className='img-cnt flex justify-between '>
              <div className=' flex gap-[5px] pt-[20px] 2xl:[24px] '>
                <p className='text-lg font-normal px-[16px] py-[10px] 2xl:text-base mob-scr:text-sm border border-solid border-white-95 bg-absolute-white'>8 Weeks</p>
                <p className='text-lg font-normal px-[16px] py-[10px] 2xl:text-base mob-scr:text-sm border border-solid border-white-95 bg-absolute-white'>Intermediate</p>
              </div>
              <div className='img-cnt-end flex justify-end  2xl:[24px] pt-[30px] '>
                <p className='text-xl font-medium 2xl:text-lg mob-scr:text-base'>By David Brown</p>
              </div>
            </div>

            <div className='border border-solid border-white-95 mt-[50px] 2xl:mt[40px]'>
              <div className='px-[24px] py-[30px] 2xl:py-[20px] border-b border-solid border-white-95'>
                <p className='text-xl font-semibold 2xl:text-lg mob-scr:text-base max-774px:text-center'>Curriculum</p>
              </div>

              <div className='py-[24px] px-[50px] 2xl:px-[40px]  max-1200px:px-[30px] max-998px:px-[20px] flex justify-center max-774px:flex-col  gap-[50px] 2xl:gap-[40px] max-1200px:gap-[30px] max-998px:gap-[20px]'>
                <div className='flex  flex-col gap-[20px] 2xl:[16px]'>
                  <p className='text-5xl font-extrabold 2xl:text-4xl mob-scr:text-3xl max-774px:text-center'>01</p>
                  <p className='text-lg font-medium 2xl:text-base mob-scr:text-sm max-774px:text-center'>Introduction to HTML</p>
                </div>
                <div class="border-r border-solid border-white-95 h-[111px] w-[1px] max-774px:hidden"></div>
                <div class="border-b border-solid border-white-95 h-[1px] w-[100%] min-774px:hidden"></div>

                <div className='flex  flex-col gap-[20px] 2xl:[16px]  '>
                  <p className='text-5xl font-extrabold 2xl:text-4xl mob-scr:text-3xl max-774px:text-center'>02</p>
                  <p className='text-lg font-medium 2xl:text-base mob-scr:text-sm max-774px:text-center'>Styling with CSS</p>
                </div>
                <div class="border-r border-solid border-white-95 h-[111px] w-[1px] max-774px:hidden"></div>
                <div class="border-b border-solid border-white-95 h-[1px] w-[100%] min-774px:hidden"></div>
                <div className='flex flex-col gap-[20px] 2xl:[16px] '>
                  <p className='text-5xl font-extrabold 2xl:text-4xl mob-scr:text-3xl max-774px:text-center'>03</p>
                  <p className='text-lg font-medium 2xl:text-base mob-scr:text-sm max-774px:text-center'>Introduction to Responsive Design</p>
                </div>
                <div class="border-r border-solid border-white-95 h-[111px] w-[1px] max-774px:hidden"></div>
                <div class="border-b border-solid border-white-95 h-[1px] w-[100%] min-774px:hidden"></div>
                <div className='flex flex-col gap-[20px] 2xl:[16px] '>
                  <p className='text-5xl font-extrabold 2xl:text-4xl mob-scr:text-3xl max-774px:text-center'>04</p>
                  <p className='text-lg font-medium 2xl:text-base mob-scr:text-sm max-774px:text-center'>Design Principles for Web</p>
                </div>
                <div class="border-r border-solid border-white-95 h-[111px] w-[1px] max-774px:hidden"></div>
                <div class="border-b border-solid border-white-95 h-[1px] w-[100%] min-774px:hidden"></div>
                <div className='flex flex-col gap-[20px] 2xl:[16px]'>
                  <p className='text-5xl font-extrabold 2xl:text-4xl mob-scr:text-3xl max-774px:text-center'>05</p>
                  <p className='text-lg font-medium 2xl:text-base mob-scr:text-sm max-774px:text-center'>Building a Basic Website</p>
                </div>
              </div>
            </div>
          </div>

          <div>

          </div>
        </div>
      </div>




      <div className='py-[50px] px-[30px] mob-scr:px-[10px] bg-white rounded-lg '>
        <div className='flex flex-col justify-center  gap-[30px]'>
          <div className='flex items-center justify-between mob-scr:flex-col'>
            <div>
              <p className='text-3xl font-semibold 2xl:text-xl mob-scr:text-lg'>UI/UX Design</p>
              <p className='font-normal text-lg 2xl:text-base mob-scr:text-sm flex-1 text:hash-1'>Master the art of creating intuitive user interfaces (UI) and enhancing user experiences (UX). Learn design principles, wireframing, prototyping, and usability testing techniques.</p>
            </div>
            <span className='font-medium text-lg 2xl:text-sm flex p-4 justify-center items-center gap-2 flex-1a bg-white-97 whitespace-nowrap mob-scr:mt-[20px]'><Link to={'/coursesopenpage'}>View Course</Link></span>
          </div>
          <div>
            <div className='mob-p flex gap-[30px] max-660px:gap-[8px]  max-998px:gap-[20px]   justify-between '>
              <div className=''>
                <img className=' mob  h-[300px] w-[405px] max-998px:h-[250px]   rounded-md object-cover  ' src={img4} alt="" />


              </div>
              <div className=''>
                <img className='mob h-[300px] w-[405px] max-998px:h-[250px]  rounded-md object-cover   ' src={img5} alt="" />
              </div>
              <div className=''>
                <img className='mob  h-[300px] w-[405px] max-998px:h-[250px]   rounded-md object-cover   ' src={img6} alt="" />
              </div>
            </div>
            <div className='img-cnt flex justify-between '>
              <div className=' flex gap-[5px] pt-[20px] 2xl:[24px] '>
                <p className='text-lg font-normal px-[16px] py-[10px] 2xl:text-base mob-scr:text-sm border border-solid border-white-95 bg-absolute-white'>8 Weeks</p>
                <p className='text-lg font-normal px-[16px] py-[10px] 2xl:text-base mob-scr:text-sm border border-solid border-white-95 bg-absolute-white'>Intermediate</p>
              </div>
              <div className='img-cnt-end flex justify-end  2xl:[24px] pt-[30px] '>
                <p className='text-xl font-medium 2xl:text-lg mob-scr:text-base'>By David Brown</p>
              </div>
            </div>

            <div className='border border-solid border-white-95 mt-[50px] 2xl:mt[40px]'>
              <div className='px-[24px] py-[30px] 2xl:py-[20px] border-b border-solid border-white-95'>
                <p className='text-xl font-semibold 2xl:text-lg mob-scr:text-base max-774px:text-center'>Curriculum</p>
              </div>

              <div className='py-[24px] px-[50px] 2xl:px-[40px]  max-1200px:px-[30px] max-998px:px-[20px] flex justify-center max-774px:flex-col  gap-[50px] 2xl:gap-[40px] max-1200px:gap-[30px] max-998px:gap-[20px]'>
                <div className='flex  flex-col gap-[20px] 2xl:[16px]'>
                  <p className='text-5xl font-extrabold 2xl:text-4xl mob-scr:text-3xl max-774px:text-center'>01</p>
                  <p className='text-lg font-medium 2xl:text-base mob-scr:text-sm max-774px:text-center'>Introduction to HTML</p>
                </div>
                <div class="border-r border-solid border-white-95 h-[111px] w-[1px] max-774px:hidden"></div>
                <div class="border-b border-solid border-white-95 h-[1px] w-[100%] min-774px:hidden"></div>

                <div className='flex  flex-col gap-[20px] 2xl:[16px]  '>
                  <p className='text-5xl font-extrabold 2xl:text-4xl mob-scr:text-3xl max-774px:text-center'>02</p>
                  <p className='text-lg font-medium 2xl:text-base mob-scr:text-sm max-774px:text-center'>Styling with CSS</p>
                </div>
                <div class="border-r border-solid border-white-95 h-[111px] w-[1px] max-774px:hidden"></div>
                <div class="border-b border-solid border-white-95 h-[1px] w-[100%] min-774px:hidden"></div>
                <div className='flex flex-col gap-[20px] 2xl:[16px] '>
                  <p className='text-5xl font-extrabold 2xl:text-4xl mob-scr:text-3xl max-774px:text-center'>03</p>
                  <p className='text-lg font-medium 2xl:text-base mob-scr:text-sm max-774px:text-center'>Introduction to Responsive Design</p>
                </div>
                <div class="border-r border-solid border-white-95 h-[111px] w-[1px] max-774px:hidden"></div>
                <div class="border-b border-solid border-white-95 h-[1px] w-[100%] min-774px:hidden"></div>
                <div className='flex flex-col gap-[20px] 2xl:[16px] '>
                  <p className='text-5xl font-extrabold 2xl:text-4xl mob-scr:text-3xl max-774px:text-center'>04</p>
                  <p className='text-lg font-medium 2xl:text-base mob-scr:text-sm max-774px:text-center'>Design Principles for Web</p>
                </div>
                <div class="border-r border-solid border-white-95 h-[111px] w-[1px] max-774px:hidden"></div>
                <div class="border-b border-solid border-white-95 h-[1px] w-[100%] min-774px:hidden"></div>
                <div className='flex flex-col gap-[20px] 2xl:[16px]'>
                  <p className='text-5xl font-extrabold 2xl:text-4xl mob-scr:text-3xl max-774px:text-center'>05</p>
                  <p className='text-lg font-medium 2xl:text-base mob-scr:text-sm max-774px:text-center'>Building a Basic Website</p>
                </div>
              </div>
            </div>
          </div>

          <div>

          </div>
        </div>
      </div>



      <div className='py-[50px] px-[30px] mob-scr:px-[10px] bg-white rounded-lg '>
        <div className='flex flex-col justify-center  gap-[30px]'>
          <div className='flex items-center justify-between mob-scr:flex-col'>
            <div>
              <p className='text-3xl font-semibold 2xl:text-xl mob-scr:text-lg'>Mobile App Development</p>
              <p className='font-normal text-lg 2xl:text-base mob-scr:text-sm flex-1 text:hash-1'>Learn the fundamentals of web design, including HTML, CSS, and responsive design principles. Develop the skills to create visually appealing and user-friendly websites.</p>
            </div>
            <span className='font-medium text-lg 2xl:text-sm flex p-4 justify-center items-center gap-2 flex-1a bg-white-97 whitespace-nowrap mob-scr:mt-[20px]'><Link to={'/coursesopenpage'}>View Course</Link></span>
          </div>
          <div>
            <div className='mob-p flex gap-[30px] max-660px:gap-[8px]  max-998px:gap-[20px]   justify-between '>
              <div className=''>
                <img className=' mob  h-[300px] w-[405px] max-998px:h-[250px]   rounded-md object-cover  ' src={img7} alt="" />


              </div>
              <div className=''>
                <img className='mob h-[300px] w-[405px] max-998px:h-[250px]  rounded-md object-cover   ' src={img8} alt="" />
              </div>
              <div className=''>
                <img className='mob  h-[300px] w-[405px] max-998px:h-[250px]   rounded-md object-cover   ' src={img9} alt="" />
              </div>
            </div>
            <div className='img-cnt flex justify-between '>
              <div className=' flex gap-[5px] pt-[20px] 2xl:[24px] '>
                <p className='text-lg font-normal px-[16px] py-[10px] 2xl:text-base mob-scr:text-sm border border-solid border-white-95 bg-absolute-white'>8 Weeks</p>
                <p className='text-lg font-normal px-[16px] py-[10px] 2xl:text-base mob-scr:text-sm border border-solid border-white-95 bg-absolute-white'>Intermediate</p>
              </div>
              <div className='img-cnt-end flex justify-end  2xl:[24px] pt-[30px] '>
                <p className='text-xl font-medium 2xl:text-lg mob-scr:text-base'>By David Brown</p>
              </div>
            </div>

            <div className='border border-solid border-white-95 mt-[50px] 2xl:mt[40px]'>
              <div className='px-[24px] py-[30px] 2xl:py-[20px] border-b border-solid border-white-95'>
                <p className='text-xl font-semibold 2xl:text-lg mob-scr:text-base max-774px:text-center'>Curriculum</p>
              </div>

              <div className='py-[24px] px-[50px] 2xl:px-[40px]  max-1200px:px-[30px] max-998px:px-[20px] flex justify-center max-774px:flex-col  gap-[50px] 2xl:gap-[40px] max-1200px:gap-[30px] max-998px:gap-[20px]'>
                <div className='flex  flex-col gap-[20px] 2xl:[16px]'>
                  <p className='text-5xl font-extrabold 2xl:text-4xl mob-scr:text-3xl max-774px:text-center'>01</p>
                  <p className='text-lg font-medium 2xl:text-base mob-scr:text-sm max-774px:text-center'>Introduction to HTML</p>
                </div>
                <div class="border-r border-solid border-white-95 h-[111px] w-[1px] max-774px:hidden"></div>
                <div class="border-b border-solid border-white-95 h-[1px] w-[100%] min-774px:hidden"></div>

                <div className='flex  flex-col gap-[20px] 2xl:[16px]  '>
                  <p className='text-5xl font-extrabold 2xl:text-4xl mob-scr:text-3xl max-774px:text-center'>02</p>
                  <p className='text-lg font-medium 2xl:text-base mob-scr:text-sm max-774px:text-center'>Styling with CSS</p>
                </div>
                <div class="border-r border-solid border-white-95 h-[111px] w-[1px] max-774px:hidden"></div>
                <div class="border-b border-solid border-white-95 h-[1px] w-[100%] min-774px:hidden"></div>
                <div className='flex flex-col gap-[20px] 2xl:[16px] '>
                  <p className='text-5xl font-extrabold 2xl:text-4xl mob-scr:text-3xl max-774px:text-center'>03</p>
                  <p className='text-lg font-medium 2xl:text-base mob-scr:text-sm max-774px:text-center'>Introduction to Responsive Design</p>
                </div>
                <div class="border-r border-solid border-white-95 h-[111px] w-[1px] max-774px:hidden"></div>
                <div class="border-b border-solid border-white-95 h-[1px] w-[100%] min-774px:hidden"></div>
                <div className='flex flex-col gap-[20px] 2xl:[16px] '>
                  <p className='text-5xl font-extrabold 2xl:text-4xl mob-scr:text-3xl max-774px:text-center'>04</p>
                  <p className='text-lg font-medium 2xl:text-base mob-scr:text-sm max-774px:text-center'>Design Principles for Web</p>
                </div>
                <div class="border-r border-solid border-white-95 h-[111px] w-[1px] max-774px:hidden"></div>
                <div class="border-b border-solid border-white-95 h-[1px] w-[100%] min-774px:hidden"></div>
                <div className='flex flex-col gap-[20px] 2xl:[16px]'>
                  <p className='text-5xl font-extrabold 2xl:text-4xl mob-scr:text-3xl max-774px:text-center'>05</p>
                  <p className='text-lg font-medium 2xl:text-base mob-scr:text-sm max-774px:text-center'>Building a Basic Website</p>
                </div>
              </div>
            </div>
          </div>

          <div>

          </div>
        </div>
      </div>




      <div className='py-[50px] px-[30px] mob-scr:px-[10px] bg-white rounded-lg '>
        <div className='flex flex-col justify-center  gap-[30px]'>
          <div className='flex items-center justify-between mob-scr:flex-col'>
            <div>
              <p className='text-3xl font-semibold 2xl:text-xl mob-scr:text-lg'>Graphic Design for Beginners</p>
              <p className='font-normal text-lg 2xl:text-base mob-scr:text-sm flex-1 text:hash-1'>Learn the fundamentals of web design, including HTML, CSS, and responsive design principles. Develop the skills to create visually appealing and user-friendly websites.</p>
            </div>
            <span className='font-medium text-lg 2xl:text-sm flex p-4 justify-center items-center gap-2 flex-1a bg-white-97 whitespace-nowrap mob-scr:mt-[20px]'><Link to={'/coursesopenpage'}>View Course</Link></span>
          </div>
          <div>
            <div className='mob-p flex gap-[30px] max-660px:gap-[8px]  max-998px:gap-[20px]   justify-between '>
              <div className=''>
                <img className=' mob  h-[300px] w-[405px] max-998px:h-[250px]   rounded-md object-cover  ' src={img10} alt="" />


              </div>
              <div className=''>
                <img className='mob h-[300px] w-[405px] max-998px:h-[250px]  rounded-md object-cover   ' src={img11} alt="" />
              </div>
              <div className=''>
                <img className='mob  h-[300px] w-[405px] max-998px:h-[250px]   rounded-md object-cover   ' src={img12} alt="" />
              </div>
            </div>
            <div className='img-cnt flex justify-between '>
              <div className=' flex gap-[5px] pt-[20px] 2xl:[24px] '>
                <p className='text-lg font-normal px-[16px] py-[10px] 2xl:text-base mob-scr:text-sm border border-solid border-white-95 bg-absolute-white'>8 Weeks</p>
                <p className='text-lg font-normal px-[16px] py-[10px] 2xl:text-base mob-scr:text-sm border border-solid border-white-95 bg-absolute-white'>Intermediate</p>
              </div>
              <div className='img-cnt-end flex justify-end  2xl:[24px] pt-[30px] '>
                <p className='text-xl font-medium 2xl:text-lg mob-scr:text-base'>By David Brown</p>
              </div>
            </div>

            <div className='border border-solid border-white-95 mt-[50px] 2xl:mt[40px]'>
              <div className='px-[24px] py-[30px] 2xl:py-[20px] border-b border-solid border-white-95'>
                <p className='text-xl font-semibold 2xl:text-lg mob-scr:text-base max-774px:text-center'>Curriculum</p>
              </div>

              <div className='py-[24px] px-[50px] 2xl:px-[40px]  max-1200px:px-[30px] max-998px:px-[20px] flex justify-center max-774px:flex-col  gap-[50px] 2xl:gap-[40px] max-1200px:gap-[30px] max-998px:gap-[20px]'>
                <div className='flex  flex-col gap-[20px] 2xl:[16px]'>
                  <p className='text-5xl font-extrabold 2xl:text-4xl mob-scr:text-3xl max-774px:text-center'>01</p>
                  <p className='text-lg font-medium 2xl:text-base mob-scr:text-sm max-774px:text-center'>Introduction to HTML</p>
                </div>
                <div class="border-r border-solid border-white-95 h-[111px] w-[1px] max-774px:hidden"></div>
                <div class="border-b border-solid border-white-95 h-[1px] w-[100%] min-774px:hidden"></div>

                <div className='flex  flex-col gap-[20px] 2xl:[16px]  '>
                  <p className='text-5xl font-extrabold 2xl:text-4xl mob-scr:text-3xl max-774px:text-center'>02</p>
                  <p className='text-lg font-medium 2xl:text-base mob-scr:text-sm max-774px:text-center'>Styling with CSS</p>
                </div>
                <div class="border-r border-solid border-white-95 h-[111px] w-[1px] max-774px:hidden"></div>
                <div class="border-b border-solid border-white-95 h-[1px] w-[100%] min-774px:hidden"></div>
                <div className='flex flex-col gap-[20px] 2xl:[16px] '>
                  <p className='text-5xl font-extrabold 2xl:text-4xl mob-scr:text-3xl max-774px:text-center'>03</p>
                  <p className='text-lg font-medium 2xl:text-base mob-scr:text-sm max-774px:text-center'>Introduction to Responsive Design</p>
                </div>
                <div class="border-r border-solid border-white-95 h-[111px] w-[1px] max-774px:hidden"></div>
                <div class="border-b border-solid border-white-95 h-[1px] w-[100%] min-774px:hidden"></div>
                <div className='flex flex-col gap-[20px] 2xl:[16px] '>
                  <p className='text-5xl font-extrabold 2xl:text-4xl mob-scr:text-3xl max-774px:text-center'>04</p>
                  <p className='text-lg font-medium 2xl:text-base mob-scr:text-sm max-774px:text-center'>Design Principles for Web</p>
                </div>
                <div class="border-r border-solid border-white-95 h-[111px] w-[1px] max-774px:hidden"></div>
                <div class="border-b border-solid border-white-95 h-[1px] w-[100%] min-774px:hidden"></div>
                <div className='flex flex-col gap-[20px] 2xl:[16px]'>
                  <p className='text-5xl font-extrabold 2xl:text-4xl mob-scr:text-3xl max-774px:text-center'>05</p>
                  <p className='text-lg font-medium 2xl:text-base mob-scr:text-sm max-774px:text-center'>Building a Basic Website</p>
                </div>
              </div>
            </div>
          </div>

          <div>

          </div>
        </div>
      </div>



      <div className='py-[50px] px-[30px] mob-scr:px-[10px] bg-white rounded-lg '>
        <div className='flex flex-col justify-center  gap-[30px]'>
          <div className='flex items-center justify-between mob-scr:flex-col'>
            <div>
              <p className='text-3xl font-semibold 2xl:text-xl mob-scr:text-lg'>Front-End Web Development</p>
              <p className='font-normal text-lg 2xl:text-base mob-scr:text-sm flex-1 text:hash-1'>Learn the fundamentals of web design, including HTML, CSS, and responsive design principles. Develop the skills to create visually appealing and user-friendly websites.</p>
            </div>
            <span className='font-medium text-lg 2xl:text-sm flex p-4 justify-center items-center gap-2 flex-1a bg-white-97 whitespace-nowrap mob-scr:mt-[20px]'><Link to={'/coursesopenpage'}>View Course</Link></span>
          </div>
          <div>
            <div className='mob-p flex gap-[30px] max-660px:gap-[8px]  max-998px:gap-[20px]   justify-between '>
              <div className=''>
                <img className=' mob  h-[300px] w-[405px] max-998px:h-[250px]   rounded-md object-cover  ' src={img13} alt="" />


              </div>
              <div className=''>
                <img className='mob h-[300px] w-[405px] max-998px:h-[250px]  rounded-md object-cover   ' src={img14} alt="" />
              </div>
              <div className=''>
                <img className='mob  h-[300px] w-[405px] max-998px:h-[250px]   rounded-md object-cover   ' src={img15} alt="" />
              </div>
            </div>
            <div className='img-cnt flex justify-between '>
              <div className=' flex gap-[5px] pt-[20px] 2xl:[24px] '>
                <p className='text-lg font-normal px-[16px] py-[10px] 2xl:text-base mob-scr:text-sm border border-solid border-white-95 bg-absolute-white'>8 Weeks</p>
                <p className='text-lg font-normal px-[16px] py-[10px] 2xl:text-base mob-scr:text-sm border border-solid border-white-95 bg-absolute-white'>Intermediate</p>
              </div>
              <div className='img-cnt-end flex justify-end  2xl:[24px] pt-[30px] '>
                <p className='text-xl font-medium 2xl:text-lg mob-scr:text-base'>By David Brown</p>
              </div>
            </div>

            <div className='border border-solid border-white-95 mt-[50px] 2xl:mt[40px]'>
              <div className='px-[24px] py-[30px] 2xl:py-[20px] border-b border-solid border-white-95'>
                <p className='text-xl font-semibold 2xl:text-lg mob-scr:text-base max-774px:text-center'>Curriculum</p>
              </div>

              <div className='py-[24px] px-[50px] 2xl:px-[40px]  max-1200px:px-[30px] max-998px:px-[20px] flex justify-center max-774px:flex-col  gap-[50px] 2xl:gap-[40px] max-1200px:gap-[30px] max-998px:gap-[20px]'>
                <div className='flex  flex-col gap-[20px] 2xl:[16px]'>
                  <p className='text-5xl font-extrabold 2xl:text-4xl mob-scr:text-3xl max-774px:text-center'>01</p>
                  <p className='text-lg font-medium 2xl:text-base mob-scr:text-sm max-774px:text-center'>Introduction to HTML</p>
                </div>
                <div class="border-r border-solid border-white-95 h-[111px] w-[1px] max-774px:hidden"></div>
                <div class="border-b border-solid border-white-95 h-[1px] w-[100%] min-774px:hidden"></div>

                <div className='flex  flex-col gap-[20px] 2xl:[16px]  '>
                  <p className='text-5xl font-extrabold 2xl:text-4xl mob-scr:text-3xl max-774px:text-center'>02</p>
                  <p className='text-lg font-medium 2xl:text-base mob-scr:text-sm max-774px:text-center'>Styling with CSS</p>
                </div>
                <div class="border-r border-solid border-white-95 h-[111px] w-[1px] max-774px:hidden"></div>
                <div class="border-b border-solid border-white-95 h-[1px] w-[100%] min-774px:hidden"></div>
                <div className='flex flex-col gap-[20px] 2xl:[16px] '>
                  <p className='text-5xl font-extrabold 2xl:text-4xl mob-scr:text-3xl max-774px:text-center'>03</p>
                  <p className='text-lg font-medium 2xl:text-base mob-scr:text-sm max-774px:text-center'>Introduction to Responsive Design</p>
                </div>
                <div class="border-r border-solid border-white-95 h-[111px] w-[1px] max-774px:hidden"></div>
                <div class="border-b border-solid border-white-95 h-[1px] w-[100%] min-774px:hidden"></div>
                <div className='flex flex-col gap-[20px] 2xl:[16px] '>
                  <p className='text-5xl font-extrabold 2xl:text-4xl mob-scr:text-3xl max-774px:text-center'>04</p>
                  <p className='text-lg font-medium 2xl:text-base mob-scr:text-sm max-774px:text-center'>Design Principles for Web</p>
                </div>
                <div class="border-r border-solid border-white-95 h-[111px] w-[1px] max-774px:hidden"></div>
                <div class="border-b border-solid border-white-95 h-[1px] w-[100%] min-774px:hidden"></div>
                <div className='flex flex-col gap-[20px] 2xl:[16px]'>
                  <p className='text-5xl font-extrabold 2xl:text-4xl mob-scr:text-3xl max-774px:text-center'>05</p>
                  <p className='text-lg font-medium 2xl:text-base mob-scr:text-sm max-774px:text-center'>Building a Basic Website</p>
                </div>
              </div>
            </div>
          </div>

          <div>

          </div>
        </div>
      </div>
    </div>
  )
}

export default Courseslist
