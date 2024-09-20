import React from 'react'
import styles from '../assets/css/about.module.css'
import Header from '../components/headerAndFooter/Header'
import Banner from '../components/Banner/Banner'
import Image from 'next/image'
import { FaPrayingHands } from "react-icons/fa";
import { TiHeadphones } from "react-icons/ti";
import { IoMdLock } from "react-icons/io";
import rightImg from "../components/assets/images/smiling-arab-businessman-adult-happy-generate-ai-scaled-e1711735176898.jpg"




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
        </>
    )
}