// components/Header.js
"use client";
import Link from "next/link";
import { useState } from "react";
import styles from "../assets/css/header.module.css";
import logo from "../assets/images/FINTECHIFY.png";
import Image from "next/image";
import { IoIosArrowDown } from "react-icons/io";
import { AiFillAppstore } from "react-icons/ai";
import { WiDirectionUpRight } from "react-icons/wi";
import { CiWallet } from "react-icons/ci";
import { SiBmcsoftware } from "react-icons/si";
import { MdOutlineDesignServices } from "react-icons/md";
import { GiFlatPlatform } from "react-icons/gi";
import { GiPlatform } from "react-icons/gi";
import { GrIntegration } from "react-icons/gr";
import { GrResources } from "react-icons/gr";
import { FaExchangeAlt } from "react-icons/fa";
import { CiLock } from "react-icons/ci";
import { IoIosArrowUp } from "react-icons/io";
import { FaArrowRight } from "react-icons/fa6";
import { MdClose } from "react-icons/md";
import { FaBars } from "react-icons/fa";
import { FaRoute } from "react-icons/fa6";
import { MdFormatIndentDecrease } from "react-icons/md";
import { SiSololearn } from "react-icons/si";
import { SiMarketo } from "react-icons/si";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isProdMenu, setProdMenu] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isDropdownOpentwo, setIsDropdownOpentwo] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };
  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };
  const toggleDropdowntwo = () => {
    setIsDropdownOpentwo(!isDropdownOpentwo);
  };

  // const cccz = () => {
  //     setIsMenuOpen(!isMenuOpen);
  // };

  return (
    <>
      <header className={styles.header}>
        <Link href="/">
          <Image className={styles.logo} src={logo} alt="Logo" />
        </Link>
        <nav className={`${styles.nav}`}>
          <ul>
            <li>
              <Link href="/">HOME</Link>
            </li>
            <li>
              <Link href="/about">ABOUT</Link>
            </li>
            <li
              onMouseEnter={() => {
                setIsMenuOpen(true);
                setProdMenu(false);
              }}
            >
              <Link href="/service">
                SERVICES <IoIosArrowDown />
              </Link>
            </li>
            <li
              onMouseEnter={() => {
                setIsMenuOpen(false);
                setProdMenu(true);
              }}
              className={styles.productsMenu}
            >
              <Link href="#">
                PRODUCTS <IoIosArrowDown />
              </Link>
              {isProdMenu && (
                <ul
                  onMouseLeave={() => {
                    setProdMenu(false);
                  }}
                >
                  <li>
                    <Link href="/rizeApp" className={styles.ol}>
                      Rize App
                    </Link>
                  </li>
                  <li>
                    <Link href="/welab" className={styles.ol}>
                      WeLab
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/interactive-media-platform"
                      className={styles.ol}
                    >
                      Interactive Media Platform
                    </Link>
                  </li>
                  <li>
                    <Link href="/FinBloc" className={styles.ol}>
                      Property Management Solution
                    </Link>
                  </li>
                  <li>
                    <Link href="/smart-order" className={styles.ol}>
                      Smart Order
                    </Link>
                  </li>
                  <li>
                    <Link href="/gateway-plus" className={styles.ol}>
                      Gateway Plus
                    </Link>
                  </li>
                  <li>
                    <Link href="/smart-city-solutions" className={styles.ol}>
                      Smart City Solutions
                    </Link>
                  </li>
                  <li>
                    <Link href="/mobile-money-solution" className={styles.ol}>
                      Mobile Money Solutions
                    </Link>
                  </li>
                  <li>
                    <Link href="/core-banking-solution" className={styles.ol}>
                      Core Banking Platform
                    </Link>
                  </li>
                  <li>
                    <Link href="/mobile-wallet" className={styles.ol}>
                      Mobile Wallet Platform
                    </Link>
                  </li>
                  <li>
                    <Link href="/digital-banking" className={styles.ol}>
                      Digital Oboarding Platform
                    </Link>
                  </li>
                </ul>
              )}
            </li>
            <li>
              <Link href="/contact-us">CONTACT</Link>
            </li>
          </ul>
        </nav>
        <div className={styles.actions}>
          <button className={styles.btnStart}>
            <Link href="/contact-us" style={{ color: "white" }}>
              {" "}
              GET STARTED <FaArrowRight />
            </Link>
          </button>
          <button className={styles.menuButton} onClick={toggleSidebar}>
            {isOpen ? <MdClose /> : <FaBars />}
          </button>
        </div>
      </header>

      {isMenuOpen && (
        <section
          onMouseLeave={() => {
            setIsMenuOpen(false);
          }}
          className={styles.menuBox}
          style={{ boxShadow: "10px 10px 10px gray" }}
        >
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-4 p-0 m-0">
                <ul>
                  <li>
                    <AiFillAppstore color="#1e8bf6" />
                    <div>
                      <Link href="/Banking-app-development">
                        Banking App Development <WiDirectionUpRight />
                      </Link>
                    </div>
                  </li>
                  <li>
                    <CiWallet color="#1e8bf6" />
                    <div>
                      <Link href="/Digital-wallet-development">
                        Digital Wallet Development <WiDirectionUpRight />
                      </Link>
                      {/* <span>The power of seamless banking</span> */}
                    </div>
                  </li>
                  <li>
                    <SiBmcsoftware color="#1e8bf6" />
                    <div>
                      <Link href="/Insurance-software-development">
                        Insurance Software Development <WiDirectionUpRight />
                      </Link>
                    </div>
                  </li>
                  <li>
                    <CiLock color="#1e8bf6" />
                    <div>
                      <Link href="/cybersecurity">
                        Cybersecurity <WiDirectionUpRight />
                      </Link>
                    </div>
                  </li>
                  <li>
                    <MdFormatIndentDecrease color="#1e8bf6" />
                    <div>
                      <Link href="/DevOps-Transformation">
                        DevOps Transformation
                        <WiDirectionUpRight />
                      </Link>
                    </div>
                  </li>
                </ul>
              </div>
              <div className="col-lg-4 p-0 m-0">
                <ul>
                  <li>
                    <MdOutlineDesignServices color="#1e8bf6" />
                    <div>
                      <Link href="/finops-services">
                        FinOps Services <WiDirectionUpRight />
                      </Link>
                    </div>
                  </li>
                  <li>
                    <GiFlatPlatform color="#1e8bf6" />
                    <div>
                      <Link href="/Crowdfunding-platform-development">
                        Crowdfunding Platform Development <WiDirectionUpRight />
                      </Link>
                    </div>
                  </li>
                  <li>
                    <GiPlatform color="#1e8bf6" />
                    <div>
                      <Link href="/decentralized-finance-defi-platform">
                        Decentralized Finance Platform <WiDirectionUpRight />
                      </Link>
                    </div>
                  </li>
                  <li>
                    <FaRoute color="#1e8bf6" />
                    <div>
                      <Link href="/IT-outsourcing">
                        IT Outsourcing
                        <WiDirectionUpRight />
                      </Link>
                    </div>
                  </li>
                  <li>
                    <SiMarketo color="#1e8bf6" />
                    <div>
                      <Link href="/E-commerce">
                        E-Commerce
                        <WiDirectionUpRight />
                      </Link>
                    </div>
                  </li>
                </ul>
              </div>
              <div className="col-lg-4 p-0 m-0">
                <ul>
                  <li>
                    <GrIntegration color="#1e8bf6" />
                    <div>
                      <Link href="/integration-services">
                        Integration Services <WiDirectionUpRight />
                      </Link>
                    </div>
                  </li>
                  <li>
                    <GrResources color="#1e8bf6" />
                    <div>
                      <Link href="/resource-augmentation">
                        Resource Augmentation <WiDirectionUpRight />
                      </Link>
                    </div>
                  </li>
                  <li>
                    <FaExchangeAlt color="#1e8bf6" />
                    <div>
                      <Link href="/currency-exchange-platform-development">
                        Currency Exchange Platform Development{" "}
                        <WiDirectionUpRight />
                      </Link>
                    </div>
                  </li>
                  <li>
                    <SiSololearn color="#1e8bf6" />
                    <div>
                      <Link href="/solution-re-engineering">
                        Solution Re-Engineering
                        <WiDirectionUpRight />
                      </Link>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      )}

      <div className={`${styles.sidebar} ${isOpen ? styles.open : ""}`}>
        <Image className={styles.mobilelogo} src={logo} alt="Logo" />
        <ul>
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/about">About</Link>
          </li>
          <li>
            <button className={styles.dropdownButton} onClick={toggleDropdown}>
              Services {isDropdownOpen ? <IoIosArrowDown /> : <IoIosArrowUp />}
            </button>
            {isDropdownOpen && (
              <ul className={styles.dropdown}>
                <li>
                  <Link href="/Banking-app-development">
                    Banking App Development
                  </Link>
                </li>
                <li>
                  <Link href="/Digital-wallet-development">
                    Digital Wallet Development
                  </Link>
                </li>
                <li>
                  <Link href="/Insurance-software-development">
                    Insurance Software Development
                  </Link>
                </li>
                <li>
                  <Link href="/finops-services">FinOps Services</Link>
                </li>
                <li>
                  <Link href="/Crowdfunding-platform-development">
                    Crowdfunding Platform Development
                  </Link>
                </li>
                <li>
                  <Link href="/decentralized-finance-defi-platform">
                    Decentralized Finance Platform
                  </Link>
                </li>
                <li>
                  <Link href="/integration-services">Integration Services</Link>
                </li>
                <li>
                  <Link href="/resource-augmentation">
                    Resource Augmentation
                  </Link>
                </li>
                <li>
                  <Link href="/currency-exchange-platform-development">
                    Currency Exchange Platform Development
                  </Link>
                </li>
                <li>
                  <Link href="/cybersecurity">Cybersecurity</Link>
                </li>
                <li>
                  <Link href="/IT-outsourcing">IT Outsoucring</Link>
                </li>
                <li>
                  <Link href="/solution-re-engineering">
                    Solution Re-Engineering
                  </Link>
                </li>
                <li>
                  <Link href="/DevOps-Transformation">
                    DevOps Transformation
                  </Link>
                </li>
                <li>
                  <Link href="/E-commerce">E-Commerce</Link>
                </li>
              </ul>
            )}
          </li>
          <li>
            <button
              className={styles.dropdownButton}
              onClick={toggleDropdowntwo}
            >
              Products{" "}
              {isDropdownOpentwo ? <IoIosArrowDown /> : <IoIosArrowUp />}
            </button>
            {isDropdownOpentwo && (
              <ul className={styles.dropdown}>
                <li>
                  <Link href="/rizeApp">Rize App</Link>{" "}
                </li>
                <li>
                  <Link href="/welab">WeLab</Link>{" "}
                </li>
                <li>
                  <Link href="/interactive-media-platform">
                    Interactive Media Platform
                  </Link>
                </li>
                <li>
                  <Link href="/FinBloc">Property Management Solution</Link>
                </li>
                <li>
                  <Link href="/smart-order">Smart Order</Link>
                </li>
                <li>
                  <Link href="/gateway-plus">Gateway Plus</Link>
                </li>
                <li>
                  <Link href="/smart-city-solutions">Smart City Solutions</Link>
                </li>
                <li>
                  <Link href="/mobile-money-solution">
                    Mobile Money Solutions
                  </Link>
                </li>
                <li>
                  <Link href="/core-banking-solution">
                    Core Banking Platform
                  </Link>
                </li>
                <li>
                  <Link href="/mobile-wallet">Mobile Wallet Platform</Link>
                </li>
                <li>
                  <Link href="/digital-banking">
                    Digital Oboarding Platform
                  </Link>
                </li>
              </ul>
            )}
          </li>
          <li>
            <Link href="/contact-us">Contact</Link>
          </li>
        </ul>
      </div>
    </>
  );
}
