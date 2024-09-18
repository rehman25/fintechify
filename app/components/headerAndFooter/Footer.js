
"use client"; // Needed if you're using client-side interactivity
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';
import { useState } from 'react';
import { FaChevronDown } from 'react-icons/fa';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import Link from 'next/link';
import styles from '../assets/header.module.css';
import { FaPhoneAlt } from "react-icons/fa";
import { CiLocationOn } from "react-icons/ci"
import { MdOutlineMailOutline } from "react-icons/md";
import Image from 'next/image';
import Brandlogo from "../assets/images/logo.png"


export default function Footer() {
    const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
    const [productsDropdownOpen, setProductsDropdownOpen] = useState(false);

    const toggleServicesDropdown = () => {
        setProductsDropdownOpen(false)
        setServicesDropdownOpen(!servicesDropdownOpen)
    };
    const toggleProductsDropdown = () => {
        setServicesDropdownOpen(false)
        setProductsDropdownOpen(!productsDropdownOpen)
    };

    return (
        <>
            <footer style={{ background: "black" }} className="pt-5 pb-5">
                <div className="container footerMenu">
                    <div className="row">
                        <div className="col-lg-3">
                            <div className={styles.box}>
                                <Image alt="" src={Brandlogo} />
                                <div>
                                    <a href="#" className="text-light mx-2">
                                        <FaFacebook size={30} />
                                    </a>
                                    <a href="#" className="text-light mx-2">
                                        <FaTwitter size={30} />
                                    </a>
                                    <a href="#" className="text-light mx-2">
                                        <FaInstagram size={30} />
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3">
                            <div className={styles.box}>
                                <h5>Quick Links</h5>
                                <Link href="/">Home</Link>
                                <Link href="/About">About</Link>
                                <Dropdown isOpen={servicesDropdownOpen} toggle={toggleServicesDropdown}>
                                    <DropdownToggle className='' style={{ background: "transparent", border: "0", paddingLeft: "0" }}>
                                        Services <FaChevronDown style={{ fontSize: "13px" }} />
                                    </DropdownToggle>
                                    <DropdownMenu>
                                        <DropdownItem style={{ color: "black" }} href="#">Banking App Development</DropdownItem>
                                        <DropdownItem style={{ color: "black" }} href="#">Insurance Software Development</DropdownItem>
                                        <DropdownItem style={{ color: "black" }} href="#">Crowdfunding Platform Development</DropdownItem>
                                        <DropdownItem style={{ color: "black" }} href="#">Finops Services</DropdownItem>
                                        <DropdownItem style={{ color: "black" }} href="#">Digital Wallet Development</DropdownItem>
                                        <DropdownItem style={{ color: "black" }} href="#">Decentralized Finance (DeFi) Platform</DropdownItem>
                                        <DropdownItem style={{ color: "black" }} href="#">Resource Augmentation</DropdownItem>
                                        <DropdownItem style={{ color: "black" }} href="#">Currency Exchange Platform Development</DropdownItem>
                                        <DropdownItem style={{ color: "black" }} href="#">Integration Services</DropdownItem>
                                        <DropdownItem style={{ color: "black" }} href="#">Cybersecurity</DropdownItem>
                                    </DropdownMenu>
                                </Dropdown>
                                <Dropdown isOpen={productsDropdownOpen} toggle={toggleProductsDropdown}>
                                    <DropdownToggle style={{ background: "transparent", border: "0", paddingLeft: "0" }}>
                                        Products <FaChevronDown style={{ fontSize: "13px" }} />
                                    </DropdownToggle>
                                    <DropdownMenu>
                                        <DropdownItem style={{ color: "black" }} href="#">Rize App</DropdownItem>
                                        <DropdownItem style={{ color: "black" }} href="#">WeLab</DropdownItem>
                                    </DropdownMenu>
                                </Dropdown>
                                <Link href="/">Contact</Link>
                            </div>
                        </div>
                        <div className="col-lg-3">
                            <div className={styles.box}>
                                <h5>Services</h5>
                                <Link href="/">Banking App Development</Link>
                                <Link href="/">Digital Wallet Development</Link>
                                <Link href="/">Insurance Software Development</Link>
                                <Link href="/">FinOps Services</Link>
                                <Link href="/">Crowdfunding Platform Development</Link>
                                <Link href="/">Decentralized Finance (DeFi) Platform</Link>
                                <Link href="/">Integration Services</Link>
                                <Link href="/">Resource Augmentation</Link>
                                <Link href="/">Currency Exchange Platform Development</Link>
                                <Link href="/">Cybersecurity</Link>
                            </div>
                        </div>
                        <div className="col-lg-3">
                            <div className={styles.box}>
                                <h5>Contact us</h5>
                                <li>
                                    <FaPhoneAlt />
                                    <a href="tel:++971-54-5061985">+971-54-5061985</a>
                                </li>
                                <li>
                                    <CiLocationOn />
                                    <span>Unit: IH0101-OF01, Level One, Innovation One, DIFC, Dubai, UAE</span>
                                </li>
                                <li>
                                    <MdOutlineMailOutline />
                                    <a href="mailto:talktous@fintechify.ae">talktous@fintechify.ae</a>
                                </li>
                            </div>
                        </div>
                    </div>
                    <div className="row mt-3" style={{ borderTop: "1px solid lightgray" }}>
                        <p className="mb-0 pt-5 text-center" style={{ color: "white" }}>Copyright &copy; {new Date().getFullYear()} Fintechify. All rights reserved.</p>
                    </div>
                </div>
            </footer>
        </>
    );
}
