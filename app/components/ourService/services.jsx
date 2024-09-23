import React from "react";
import style from "./services.module.css";
import { RiSettings2Line } from "react-icons/ri";
import { LuSend } from "react-icons/lu";
import { PiHeadphonesLight } from "react-icons/pi";
import { FaLocationArrow } from "react-icons/fa6";
import User from "../assets/images/user.svg";
import Card from "../assets/images/credit-card-6.svg";
import Loan from "../assets/images/loan.svg";
import HealthCare from "../assets/images/healthcare.svg";
import Image from "next/image";
import { MdArrowOutward } from "react-icons/md";

const services = () => {
  return (
    <div className={`container-fluid my-5`}>
      <div className={`container mt-5`}>
        <div className={`row`}>
          <div className={`col-md-5`}>
            <span className={style.about}>
              <RiSettings2Line className={style.settingIcon} />
              <h4>our services</h4>
            </span>
            <div className={style.content}>
              <h1 className={style.h1}>Our banking services and benefits</h1>
              <p>
                Explore the our banking services and benefits at Bank of
                FinPoan, tailored to provide a modern, secure banking
                experience.
              </p>
            </div>
            <div className={style.LuSend}>
              <LuSend className={style.sendIcon} />
              <span>
                <p>General enquiries</p>
                <h6>support@example.com</h6>
              </span>
            </div>
            <div className={style.LuSend}>
              <PiHeadphonesLight className={style.sendIcon} />
              <span>
                <p>General enquiries</p>
                <h6>support@example.com</h6>
              </span>
            </div>
            <div className={style.LuSend2}>
              <button>
                View All Services <FaLocationArrow size={24} />{" "}
              </button>
            </div>
          </div>
          <div className={`col-md-7 ${style.rightBoxes}`}>
            <div className={style.card}>
              <h2>Saving Account</h2>
              <p>
                Watch your money flourish with flexible options and competitive
                rates. Earn interest while enjoying the easy access to your
                funds.
              </p>
              <span>
                <Image src={User} width={50} height={50} />
                <MdArrowOutward className={style.arrow} />
              </span>
            </div>
            <div className={style.card}>
              <h2>Saving Account</h2>
              <p>
                Watch your money flourish with flexible options and competitive
                rates. Earn interest while enjoying the easy access to your
                funds.
              </p>
              <span>
                <Image src={Loan} width={50} height={50} />
                <MdArrowOutward className={style.arrow} />
              </span>
            </div>
            <div className={style.card}>
              <h2>Saving Account</h2>
              <p>
                Watch your money flourish with flexible options and competitive
                rates. Earn interest while enjoying the easy access to your
                funds.
              </p>
              <span>
                <Image src={Card} width={50} height={50} />
                <MdArrowOutward className={style.arrow} />
              </span>
            </div>
            <div className={style.card}>
              <h2>Saving Account</h2>
              <p>
                Watch your money flourish with flexible options and competitive
                rates. Earn interest while enjoying the easy access to your
                funds.
              </p>
              <span>
                <Image src={HealthCare} width={50} height={50} />
                <MdArrowOutward className={style.arrow} />
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default services;
