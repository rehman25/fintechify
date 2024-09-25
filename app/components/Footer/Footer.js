// components/Footer.js
import styles from '../assets/css/Footer.module.css';
import Image from 'next/image';
import Link from 'next/link';
import logo from '../assets/images/FINTECHIFY.png'
import { FaFacebookSquare } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";




export default function Footer() {
    return (
        <>
            <footer className={styles.footer}>
                <div className={styles.newsletter}>
                    <div className={styles.newsletterText}>
                        <h2>Subscribe to our newsletter <br /> and stay updated</h2>
                        <p>FinTechify revolutionizes banking, offering a user-centric digital experience.</p>
                    </div>
                    <div className={styles.subscription}>
                        <input
                            type="email"
                            placeholder="Email address"
                            className={styles.emailInput}
                        />
                        <button className={styles.subscribeButton}>Subscribe</button>
                    </div>
                </div>
                <div className={`${styles.footerMain} container p-0 m-0`}>
                    <div className="row p-0 m-0">
                        <div className={`${styles.companyInfo} col-lg-4 p-0 m-0`}>
                            <Image src={logo} alt="Logo" className={styles.logo} />
                            <div className={styles.socialIcons}>
                                <Link href="#"><FaFacebookSquare /></Link>
                                <Link href="#"><FaInstagram /></Link>
                                <Link href="#"><FaLinkedin /></Link>
                            </div>
                        </div>
                        <div className={`${styles.linksSection} col-lg-8 p-0 m-0`}>
                            <div>
                                <h4>Services</h4>
                                <ul>
                                    <li><Link href="#">Banking App Development</Link></li>
                                    <li><Link href="#">Digital Wallet Development</Link></li>
                                    <li><Link href="#">Insurance Software Development</Link></li>
                                    <li><Link href="#">FinOps Services</Link></li>
                                    <li><Link href="#">Crowdfunding Platform Development</Link></li>
                                    <li><Link href="#">Decentralized Finance <br />(DeFi) Platform</Link></li>
                                    <li><Link href="#">Integration Services</Link></li>
                                    <li><Link href="#">Resource Augmentation</Link></li>
                                    <li><Link href="#">Currency Exchange <br />Platform Development</Link></li>
                                    <li><Link href="#">Cybersecurity</Link></li>
                                </ul>
                            </div>
                            <div>
                                <h4>Quick Links</h4>
                                <ul>
                                    <li><Link href="#">Home</Link></li>
                                    <li><Link href="#">About</Link></li>
                                    <li><Link href="#">Services</Link></li>
                                    <li><Link href="#">Products</Link></li>
                                    <li><Link href="#">Contact</Link></li>
                                </ul>
                            </div>
                            <div>
                                <h4>Contact us</h4>
                                <ul>
                                    <p>+971-54-5061985</p>
                                    <p>talktous@fintechify.ae</p>
                                    <p>Unit: IH0101-OF01, Level One, <br /> Innovation One, DIFC, Dubai, UAE</p>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={styles.footerBottom}>
                    <p>&copy; 2024 FinTechify. All rights reserved.</p>
                </div>
            </footer>
        </>
    );
}
