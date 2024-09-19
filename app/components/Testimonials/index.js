"use client"; // Needed if you're using client-side interactivity
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styles from "../assets/TestimonialsSlider.module.css";
import riseApp from "../assets/images/a64de0e4-d52c-446d-b89b-ebdec1774381-1024x768.webp";
import weLab from "../assets/images/logo2.e20e11af.png";
import Image from 'next/image';
import styleImg from "../assets/images/img-3-300x300.png";


const TestimonialsSlider = () => {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 2, // Adjust as necessary
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        arrows: false,
        responsive: [
            {
              breakpoint: 992,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
              }
            },
          ]
    };

    return (
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div>
                        <h2 className={styles.testimonialSlideHead}>What Our Clients Say</h2>
                        <Slider {...settings}>
                            <div className={styles.testimonialSlide}>
                            <Image alt="" src={styleImg} className={styles.clientLogo} />
                                <p>
                                    "Fintechify has transformed my financial experience. Their seamless online services, responsive support, and innovative investment solutions have made managing my finances a breeze. I highly recommend Fintechify for their user-friendly interface and commitment to customer satisfaction."
                                </p>
                                <div className={styles.clientInfo}>
                                    <Image alt="" src={riseApp} className={styles.clientLogo1} />
                                </div>
                            </div>
                            <div className={styles.testimonialSlide}>
                            <Image alt="" src={styleImg} className={styles.clientLogos} />
                                <p>
                                    "Fintechify has changed my monetary experience. Their consistent internet based administrations, responsive help, and creative speculation arrangements have made dealing with my funds a breeze. I enthusiastically suggest Fintechify for their easy to understand connection point and obligation to consumer loyalty."
                                </p>
                                <div className={styles.clientInfo}>
                                    <Image alt="" src={weLab} className={styles.clientLogo2} />
                                </div>
                            </div>
                        </Slider>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TestimonialsSlider;
