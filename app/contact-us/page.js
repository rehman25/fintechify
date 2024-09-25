import React from 'react'
import Header from '../components/Header/Header'
import Testimonials from '../components/Testimonials/Testimonials'
import Footer from '../components/Footer/Footer'
import Banner from '../components/Banner/Banner'
import styles from '../components/assets/css/contact.module.css'
import { MdOutlineAddIcCall } from "react-icons/md";


function page() {
    return (
        <>
            <Header />
            <Banner
                showCase={false}
                head={"Contact us"}
                tagLine={false}
                Des={false}
            />
            <section className={styles.contactSection}>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4">
                            <div className={styles.contactBox}>
                                <MdOutlineAddIcCall />
                                <div>
                                    <span>Telephone</span>
                                    <a href="">+971-54-5061985</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className={styles.contactBox}>
                                <MdOutlineAddIcCall />
                                <div>
                                    <span>Location</span>
                                    <a href="">Unit: IH0101-OF01, Level One, <br />Innovation One, <br />DIFC, Dubai, UAE</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className={styles.contactBox}>
                                <MdOutlineAddIcCall />
                                <div>
                                    <span>Email</span>
                                    <a href="">talktous@fintechify.ae</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Testimonials />
            <Footer />
        </>
    )
}

export default page