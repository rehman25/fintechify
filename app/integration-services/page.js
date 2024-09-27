import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Header from '../components/Header/Header'
import Banner from '../components/Banner/Banner'
import Testimonials from '../components/Testimonials/Testimonials'
import Footer from '../components/Footer/Footer'
import styles from '../components/assets/css/services.module.css'
import img1 from '../components/assets/images/webp.net-resizeimage.jpg'
import { IoMdCheckmarkCircleOutline } from "react-icons/io";
import aboutFirstSectionImg from "../components/assets/images/smiling-arab-businessman-adult-happy-generate-ai-scaled-e1711735176898.jpg"
import QoutesImg from '../components/assets/images/img-3-300x300.png'
import { IoCheckmarkSharp } from "react-icons/io5";


function page() {
    return (
        <>
            <Header />
            <Banner/>
            <section className={styles.aboutFirst}>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6">
                            <div className={styles.aboutFirstsection} data-aos="fade-right" data-aos-offset="300">
                                <h2>
                                    Why You Should Move <br />for Banking App <br />Development
                                </h2>
                                <div className={styles.iconFlexBox}>
                                    <IoMdCheckmarkCircleOutline />
                                    <div>
                                        <h3>Reduced Costs: </h3>
                                        <span>Lower operational expenses by encouraging the use of mobile banking over physical branches.</span>
                                    </div>
                                </div>
                                <div className={styles.iconFlexBox}>
                                    <IoMdCheckmarkCircleOutline />
                                    <div>
                                        <h3>Lower operational expenses by encouraging the use of mobile banking over physical branches.</h3>
                                        <span>Offer a more personalized and interactive banking experience.</span>
                                    </div>
                                </div>
                                <div className={styles.iconFlexBox}>
                                    <IoMdCheckmarkCircleOutline />
                                    <div>
                                        <h3>Improved Customer Satisfaction:</h3>
                                        <span>Provide convenient and efficient services, leading to higher customer retention.</span>
                                    </div>
                                </div>
                                <div className={styles.iconFlexBox}>
                                    <IoMdCheckmarkCircleOutline />
                                    <div>
                                        <h3>Data-Driven Insights:</h3>
                                        <span>Gain valuable customer data and spending habits to inform future marketing strategies and product development.</span>
                                    </div>
                                </div>
                                <div className={styles.iconFlexBox}>
                                    <IoMdCheckmarkCircleOutline />
                                    <div>
                                        <h3>Competitive Advantage:</h3>
                                        <span>Stay ahead of the curve by offering innovative mobile banking solutions.</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div data-aos="fade-up" data-aos-duration="2000" >
                                <Image className="img-fluid" src={aboutFirstSectionImg} />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <h1>Checking</h1>

        </>
    )
}

export default page