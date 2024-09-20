import Footer from "../components/headerAndFooter/Footer";
import Header from "../components/headerAndFooter/Header";
import InquirySection from "../components/Inquire/Inquire";
import TestimonialsSlider from "../components/Testimonials";
import OurService from '../components/ourService/services'
import Banner from "../components/HomeBanner/homeBanner";
import ECash from "../components/Ecash/eCash";
import Banking from "../components/Banking/Banking";
import Retail from "../components/Retail/retail";

export default function page() {
  return (
   <>
   <Header bgColor="transparent"/>
    <Banner />
     <ECash />
     <Banking />
    <OurService />
   <TestimonialsSlider />
    <Retail />
   <InquirySection />
   <Footer />
   </>
  );
}

