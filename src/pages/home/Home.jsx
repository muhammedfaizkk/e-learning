import React from 'react'
import './home.css'
import Herosection from '../../components/hero/Herosection'
import BannerSection from '../../components/bannerSection/BannerSection'
import BenifitsSection from '../../components/benificsSection/BenifitsSection'
import Feturessection from '../../components/feturesSection/Feturessection'
import Testimonials from '../../components/testimonialsSection/Testimonials'
import PricingSetion from '../../components/pricingsection/PricingSetion'
import Faqsection from '../../components/faqSection/Faqsection'
function Home() {
  return (
    <div>
      <Herosection/>
      <BannerSection/>
      <BenifitsSection/>
      <Feturessection/>
      <Testimonials/>
      <PricingSetion/>
      <Faqsection/>
    </div>
  )
}

export default Home
