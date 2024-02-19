import React from 'react'
import CoursesOpen from '../../components/CoursesOpentop/CoursesOpen'
import CoursesOpencard from '../../components/CoursesOpenCard/CoursesOpencard'

function Coursesopenpage() {
    return (
        <div className='px-[80px] py-[60px] md-b-lg:px-[30px] mob-scr:pt-[10px] mob-scr:px-[0px]'>
           <CoursesOpen/>
           <CoursesOpencard/>
        </div>
    )
}

export default Coursesopenpage
