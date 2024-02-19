import React from 'react'
import Aboutcard from '../../components/aboutusCards/Aboutcard'
import Ourgoals from '../../components/ourGoalsaboutus/Ourgoals'
import Aboutbanner from '../../components/aboutBannerSection/Aboutbanner'

function Aboutuspage() {
  return (
    <div className='px-[80px] py-[60px] md-b-lg:px-[30px] mob-scr:pt-[10px] mob-scr:px-[0px]'>
      <Aboutcard/>
      <Ourgoals/>
      <Aboutbanner/>
    </div>
  )
}

export default Aboutuspage
