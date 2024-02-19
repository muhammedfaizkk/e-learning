import React from 'react'
import PricingSetion from '../../components/pricingsection/PricingSetion'
import Faqsection from '../../components/faqSection/Faqsection'

function Pricing() {
    return (
        <div className='px-[80px] py-[60px] md-b-lg:px-[30px] mob-scr:pt-[10px] mob-scr:px-[0px]'>
            <PricingSetion />
            <Faqsection />
        </div>
    )
}

export default Pricing
