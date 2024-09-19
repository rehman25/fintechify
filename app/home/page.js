import Footer from "../components/headerAndFooter/Footer";
import Header from "../components/headerAndFooter/Header";
import InquirySection from "../components/Inquire/Inquire";
import TestimonialsSlider from "../components/Testimonials";

export default function page() {
  return (
   <>
   <Header bgColor="#0A0A0A"/>
   <TestimonialsSlider />
   <InquirySection />
   <Footer />
   </>
  );
}
