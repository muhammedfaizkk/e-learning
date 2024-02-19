import React from 'react'
import Courseshead from '../../components/coursesHead/Courseshead'
import Courseslist from '../../components/coursesList/Courseslist'


function CoursesPage() {
  return (
    <div className='px-[80px] py-5 md-b-lg:px-[30px] mob-scr:px-[0px]'>
        <Courseshead/>
        <Courseslist/>
        
    </div>
  )
}

export default CoursesPage
