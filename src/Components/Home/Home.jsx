import React from 'react'
import WhyChooseUs from '../../Pages/HomePages/WhyChooseUs/WhyChooseUs'
import Features from '../../Pages/HomePages/Features/Features'
import Pricing from '../../Pages/HomePages/Pricing/Pricing'
import ComparissionTable from '../../Pages/HomePages/ComparissionTable/ComparissionTable'
import Contact from '../../Pages/HomePages/Contact/Contact'
import Banner from '../../Pages/HomePages/Banner/Banner'
// import { Features } from 'tailwindcss'

const Home = () => {
  return (
    <div>
      <Banner/>
        <WhyChooseUs/>
        <Features/>
        <Pricing/>
        <ComparissionTable/>
        
    </div>
  )
}

export default Home