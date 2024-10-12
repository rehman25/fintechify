import React from 'react'
import Image from 'next/image'
import styles from './banking.module.css'
import img1 from '../assets/images/sheikh.jpg'


function page() {
    return (
        <>
            
            <section className='mb-5 mt-5'>
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6" data-aos="fade-right" data-aos-duration="500" >
                            <div className={styles.InnovativeBox}>
                                <h4>With Banking App <br />Your finances, finally <br />on autopilot.</h4>
                                <h5>Get Tired of Traditional Banking Trends?</h5>
                                <p>Imagine a world where:</p>
                                <p>You don’t need to rush to the bank before closing.
                                    Checking your balance, transferring funds, or paying bills feels effortless.</p>
                                <p>You have a smart assistant in your pocket, helping you manage your money with ease.</p>
                                <p>
                                    This is now Possible in Real World with our Banking App Development.
                                    Fintechify crafts sleek, secure mobile banking that blasts past the     competition.  Our team of designers, developers, and strategists build  features that empower users and fuel growth.
                                </p>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className={styles.InnovativeBox} data-aos="fade-up" data-aos-duration="500">
                                <Image src={img1} className='img-fluid' />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            

        </>
    )
}

export default page