"use client"; // Needed if you're using client-side interactivity

import Link from 'next/link';
import { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import styles from '../assets/header.module.css';
import Image from 'next/image';
import Brandlogo from "../assets/images/logo.png"
import { IoIosArrowDown } from "react-icons/io";
import { GrMoney } from "react-icons/gr";
import { FaDigitalOcean } from "react-icons/fa";
import { SiBmcsoftware } from "react-icons/si";
import { GrServices } from "react-icons/gr";
import { GiFlatPlatform } from "react-icons/gi";
import { FaUserCheck } from "react-icons/fa6";
import { GrIntegration } from "react-icons/gr";
import { GrResources } from "react-icons/gr";
import { BsCurrencyExchange } from "react-icons/bs";
import { SiSpringsecurity } from "react-icons/si";


export default function Header({ bgColor }) {
    const [menuOpen, setMenuOpen] = useState(false);
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const [DropDownProdOpen, setDropDownProd] = useState(false);

    const toggleMenu = () => setMenuOpen(!menuOpen);
    // const toggleDropdown = () => {
    //     setDropDownProd(false)
    //     setDropdownOpen(!dropdownOpen)
    // };
    // const toggleDropdownProd = () => {
    //     setDropdownOpen(false)
    //     setDropDownProd(!DropDownProdOpen)
    // };



    return (

        <>
            <header className={styles.header}>
                <div className={styles.logo}>
                    <Link href="/">
                        <Image alt="" src={Brandlogo} />
                    </Link>
                </div>

                <nav className={`${styles.nav} ${menuOpen ? styles.active : ''}`}>
                    <ul className={styles.navLinks}>
                        <li><Link href="/">Home</Link></li>
                        <li><Link href="/about">About</Link></li>
                        <li
                            onMouseEnter={() => {
                                setDropdownOpen(true)
                                setDropDownProd(false)
                            }}

                        ><Link href="/about">Services</Link> <IoIosArrowDown /></li>
                        <li onMouseEnter={() => {
                            setDropDownProd(true)
                            setDropdownOpen(false)
                        }}><Link href="/products">Products</Link> <IoIosArrowDown />

                            {DropDownProdOpen && (
                                <ul onMouseLeave={() => {setDropDownProd(false)}}>
                                    <li><Link href="/products">Rize App</Link></li>
                                    <li><Link href="/products">Welab</Link></li>
                                </ul>
                            )}
                        </li>
                        <li><Link href="/contact">Contact</Link></li>
                    </ul>
                </nav>
                <button className={styles.getStartedButton}>Get Started</button>
            </header>

            {/* DROPDOWN MENU */}
            {dropdownOpen && (
                <div onMouseLeave={() => {setDropdownOpen(false)}} className={`${styles.dropdownMenu} ${"container pt-2 pb-2"}`} style={dropdownOpen ? { display: "block" } : false}>
                    <div className='row justify-content-around'>
                        <div className="col-lg-3" id={styles.menuBox}>
                            <GrMoney />
                            <Link href="/services/banking">Banking App Development</Link>
                        </div>
                        <div className="col-lg-3" id={styles.menuBox}>
                            <FaDigitalOcean />
                            <Link href="/services/banking">Digital Wallet Development</Link>
                        </div>
                        <div className="col-lg-3" id={styles.menuBox}>
                            <SiBmcsoftware />
                            <Link href="/services/banking">Insurance Software Development</Link>
                        </div>
                    </div>
                    <div className='row justify-content-around mt-5'>
                        <div className="col-lg-3" id={styles.menuBox}>
                            <GrServices />
                            <Link href="/services/banking">FinOps Services</Link>
                        </div>
                        <div className="col-lg-3" id={styles.menuBox}>
                            <GiFlatPlatform />
                            <Link href="/services/banking">Crowdfunding Platform Development</Link>
                        </div>
                        <div className="col-lg-3" id={styles.menuBox}>
                            <FaUserCheck />
                            <Link href="/services/banking">Decentralized Finance (DeFi) Platform</Link>
                        </div>
                    </div>
                    <div className='row justify-content-around mt-5'>
                        <div className="col-lg-3" id={styles.menuBox}>
                            <GrIntegration />
                            <Link href="/services/banking">Integration Services</Link>
                        </div>
                        <div className="col-lg-3" id={styles.menuBox}>
                            <GrResources />
                            <Link href="/services/banking">Resource Augmentation</Link>
                        </div>
                        <div className="col-lg-3" id={styles.menuBox}>
                            <BsCurrencyExchange />
                            <Link href="/services/banking">Currency Exchange Platform Development</Link>
                        </div>
                    </div>
                    <div className='row justify-content-around pt-5'>
                        <div className="col-lg-3" id={styles.menuBox}>
                            <SiSpringsecurity />
                            <Link href="/services/banking">Cybersecurity</Link>
                        </div>
                    </div>
                </div>
            )}

        </>

    );
}
