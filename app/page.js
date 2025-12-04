import { Button } from '@/components/ui/button'
import React from 'react'
import Hero from './(components)/Hero'    
import TrustedBrands from './(components)/TrustedBrands'
import Newarrivals from './(components)/Newarrivals'
import PopularProduct from './(components)/PopularProduct'
import Banner from './(components)/Banner'
import Testimonial from './(components)/Testimonial'
function page() {
  return (
   <>
   <Hero />
   <TrustedBrands />
   <Newarrivals />
   <PopularProduct />
   <Banner />
   <Testimonial />
   </>
  )
}

export default page
