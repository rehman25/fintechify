import React from "react";
import style from "./service.module.css";
import { FaArrowRightLong } from "react-icons/fa6";
import Coin from "../../assets/images/coin.png";
import DashBoard from "../../assets/images/dashboards.png";
import smartphone from "../../assets/images/smartphone.png";
import Earning from "../../assets/images/earning.png";
import Card from "../../assets/images/card.png";
import AboutMe from "../../assets/images/aboutme.png";
import Stack from "../../assets/images/stack.png";
import Wallet from "../../assets/images/wallet.png";
import Lock from "../../assets/images/lock.png";
import Image from "next/image";

const services = () => {
  const serviceItems = [
    {
      img: Coin,
      icon: <FaArrowRightLong />,
      title: "Banking App Development",
      description:
        "We specialize in creating cutting-edge banking apps tailored to the unique requirements of financial institutions.",
    },
    {  img: DashBoard, icon: <FaArrowRightLong />, title: 'Digital Wallet Development', description: 'Welcome to our Digital Wallet Development Services! Convenience is paramount in today’s fast-paced digital landscape.' },
    {  img: smartphone, icon: <FaArrowRightLong />, title: 'Insurance Software Development', description: 'We understand the complexities of the insurance industry and the critical need for efficient, secure, and scalable software solutions.' },
    {  img: Earning, icon: <FaArrowRightLong />, title: 'FinOps Services', description: 'We offer comprehensive FinOps services designed to streamline financial operations and optimize your business’s financial health.' },
    {  img: Card, icon: <FaArrowRightLong />, title: 'Crowdfunding Platform Development', description: 'Where innovation meets efficiency in crowdfunding platform development.' },
    {  img: AboutMe, icon: <FaArrowRightLong />, title: 'Decentralized Finance (DeFi) Platform', description: 'We are proud to introduce our cutting-edge Decentralized Finance (DeFi) platform.' },
    {  img: Stack, icon: <FaArrowRightLong />, title: 'FinTech CRM Software Development', description: 'Empower your financial services business with a custom-built CRM solution tailored to your unique needs.' },
    {  img: smartphone, icon: <FaArrowRightLong />, title: 'Payment App Development', description: 'Tailor-made payment app development for every unique business need.' },
    {   img: Wallet, icon: <FaArrowRightLong />,title: 'Currency Exchange Platform Development', description: 'Specializing in cutting-edge currency exchange platforms that are scalable and secure.' },
    {  img: Lock, icon: <FaArrowRightLong />, title: 'Cybersecurity', description: 'Cybersecurity is more than just a protective measure, it is a strategic advantage in the digital world.' },
  ];

  return (
    <div className={`container-fluid  ${style.mainContainer}`}>
      <h2 className="text-center mb-5">Our Services</h2>
      {/* <p className="text-center">Discover the buzz! Come and take a look at what everyone is saying about our services.</p> */}

      <div className={`row ${style.row}`}>
        {serviceItems.map((item, index) => (
          <div
            key={index}
            className={`col-lg-4 col-md-6 col-sm-12   m-2 ${style.carddiv}`}
            data-aos="fade-right"
          >
            <div className={` ${style.serviceCard}`}  >
              <Image src={item.img} className={style.cardimg} width={50} height={50} />
              <div className={style.carBody}>
                <h5 className={style.cardtitle}>{item.title}</h5>
                <p className={style.cardtext}>{item.description}</p>
              </div>
              <div className={style.bottom}>
                <a href="" className={style.link}>
                  Learn More {item.icon}
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default services;
