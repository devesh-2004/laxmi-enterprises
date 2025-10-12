
import React from 'react'
import Hero from '@/components/Hero'
import Explore from '@/components/Explore'
import More from '@/components/More'
import Footer from '@/components/Footer'
import Services from '@/components/Services'
import Testimonials from '@/components/Testimonials'

const page = () => {
  return (
    <>
    <Hero/>
    <Explore/>
    <More/>
    <Services/>
    <Testimonials/>
    <Footer/>
    </>
  )
}

export default page