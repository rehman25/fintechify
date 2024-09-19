"use client"
import React from 'react'
import styles from '../assets/css/about.module.css'
import Header from '../components/headerAndFooter/Header'
import Banner from '../components/Banner/Banner'
import Image from 'next/image'
import { FaPrayingHands } from "react-icons/fa";
import { TiHeadphones } from "react-icons/ti";
import { IoMdLock } from "react-icons/io";
import rightImg from "../components/assets/images/smiling-arab-businessman-adult-happy-generate-ai-scaled-e1711735176898.jpg"
import phone from '../components/assets/images/img-about-new1-831x1024-2.png'
import handShakeimg from '../components/assets/images/news_UAE_fb7035c94f1fa99feb1fbf5b72008db8.jpg'
import delivery from '../components/assets/images/delivery-icon@2x.png'
import CountUp from 'react-countup';
import InquirySection from '../components/Inquire/Inquire'
import Footer from '../components/headerAndFooter/Footer'



export default function page() {
    return (
        <>
            <Header bgColor="transparent" />
            <Banner
                headOne="ABOUT US"
                headTwo="Our Journey to Reach the Best Solution for You"
                Des=" Embark on a collaborative journey with us as we navigate through possibilities,
            challenges, and innovations to craft the optimal solution tailored specifically
            for your unique needs. Our commitment is to guide you through this journey, ensuring
            that the path we tread together leads to the best financial outcomes for you."
            />

            <section className={styles.section}>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6">
                            <div className={styles.content}>
                                <div className={styles.text}>
                                    <h2>
                                        We Do It in The Most Relevant, Existing Way, Using Data and Digital
                                    </h2>
                                    <p>
                                        At Fintechify, we reshape finance with a contemporary touch,
                                        seamlessly integrating data and digital technologies for precision
                                        and modern solutions. Join us on a transformative journey where
                                        innovation meets your financial needs.
                                    </p>
                                    <div className={styles.items}>
                                        <div className={styles.item}>
                                            <div className={styles.color}>
                                                <FaPrayingHands />
                                            </div>

                                            <div>
                                                <h4>Integrity:</h4>
                                                <p>
                                                    We uphold the highest standards of integrity, ensuring
                                                    transparency, honesty, and ethical practices in every aspect
                                                    of our services.
                                                </p>
                                            </div>
                                        </div>
                                        <div className={styles.item}>
                                            <div className={styles.color}>
                                                <TiHeadphones />
                                            </div>

                                            <div>
                                                <h4>Loyalty:</h4>
                                                <p>
                                                    Our unwavering loyalty is to you, our valued client, as we
                                                    build lasting relationships and remain steadfast in our
                                                    commitment to your financial well-being.
                                                </p>
                                            </div>
                                        </div>
                                        <div className={styles.item}>
                                            <div className={styles.color}>
                                                <IoMdLock />
                                            </div>
                                            <div>
                                                <h4>Commitment:</h4>
                                                <p>
                                                    With a dedicated commitment, we stand by your side, providing
                                                    reliable financial guidance and support to help you achieve
                                                    your goals.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 d-lg-block d-none">
                            <div className={styles.content}>
                                <div className={styles.imageContainer}>
                                    <Image src={rightImg} className={styles.image} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className={styles['financial-advisor-section']}>
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6 d-lg-block d-none position-relative">
                            <div className={styles['phone-image']}>
                                <Image
                                    src={phone}
                                    alt="Phone Image"
                                    className="img-fluid"
                                />
                            </div>
                            <div className={styles['handshake-image']}>
                                <Image
                                    src={handShakeimg}
                                    alt="Handshake Image"
                                    className={styles['handshakkimg'] + " " + "img-fluid"}
                                />
                                <div className={styles['icon-image']}>
                                    <Image
                                        src={delivery}
                                        alt="Icon Image"
                                        width={50}
                                        height={50}
                                        className={styles['iconss'] + " " + "img-fluid"}
                                    />
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-6 col-md-12 text-center text-lg-start" id={styles.leftSectionOfmobile}>
                            <h2 className="mb-4">
                                The Reason That You Must Choose Us for Your Financial Advisor
                            </h2>
                            <p className="mb-4">
                                We are defined by our core values—integrity, loyalty, and commitment.
                                Our mission is to provide financial services that go beyond transactions,
                                focusing on building trusted relationships. Upholding the highest
                                ethical standards, we prioritize your financial well-being.
                            </p>
                            <div className="row">
                                <div className={styles.counterBox + " " + "col-md-4"}>
                                    <div className={styles.counterBoxStyle}>
                                        <div>
                                            <p>+</p>
                                            <CountUp
                                                start={0}
                                                end={100}
                                                duration={5}
                                                separator=","
                                                delay={0}
                                            />
                                            <span>K</span>
                                        </div>
                                        <h6>Active User</h6>
                                    </div>
                                </div>
                                <div className={styles.counterBox + " " + "col-md-4"}>
                                    <div className={styles.counterBoxStyle}>
                                        <div>
                                            <p>+</p>
                                            <CountUp
                                                start={0}
                                                end={400}
                                                duration={5}
                                                separator=","
                                                delay={0}
                                            />
                                            <span>K</span>
                                        </div>
                                        <h6>Apps Downloads</h6>
                                    </div>
                                </div>
                            </div>

                            <div className="row">
                                <div className={styles.counterBox + " " + "col-md-4"}>
                                    <div className={styles.counterBoxStyle}>
                                        <div>
                                            <p>%</p>
                                            <CountUp
                                                start={0}
                                                end={90}
                                                duration={5}
                                                separator=","
                                                delay={0}
                                            />
                                            <span>K</span>
                                        </div>
                                        <h6>Satisfied User</h6>
                                    </div>
                                </div>
                                <div className={styles.counterBox + " " + "col-md-4"}>
                                    <div className={styles.counterBoxStyle}>
                                        <div>
                                            <p>+</p>
                                            <CountUp
                                                start={0}
                                                end={200}
                                                duration={5}
                                                separator=","
                                                delay={0}
                                            />
                                            <span>K</span>
                                        </div>
                                        <h6>Partner Joined</h6>
                                    </div>
                                </div>
                            </div>
                            <button className={styles.getStartedButton + " " + "mt-4"}>Get Started</button>
                        </div>
                    </div>
                </div>
            </section>
            <InquirySection />
            <Footer />
        </>
    )
}