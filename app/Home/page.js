import Footer from '@/app/components/Footer/Footer'
import Header from '@/app/components/Header/Header'
import Banner from '@/app/components/bannerHome/banner'
import React from 'react'
import Fianancial from '@/app/components/fianancial/fiananical'
import Services from '@/app/components/ourService/services'
import Count from '@/app/components/count/count'
import Payment from '@/app/components/payment/payment'
import Move from '@/app/components/moveText/MovingText'
import Testimonials from '../components/Testimonials/Testimonials'
import Banking from "../components/banking/banking"
import Retail from "../components/retail/retail"
const page = () => {
  return(
       <> 
      <Header />
      <Banner />
      <Fianancial   />
      <Banking />
      <Services />
      <Count />
      <Payment />
      <Move />
      <Testimonials />
      <Retail />
      <Footer />
      </>
      )
  
}

export default page