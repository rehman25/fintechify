import React from "react";
import style from "./homeBanner.module.css";
import Image from "next/image";
import BannerImage from "../../assets/images/BannerPhone.png";
import BannerDashImage from "../../assets/images/BannerDashImage.png";
import { FaDollarSign } from "react-icons/fa";

const homeBanner = () => {
  return (
    <div className={`container-fluid m-0 p-0 ${style.containerFluid}`}>
      <div className={`container ${style.container}`}>
        <div className={`row ${style.row}`}>
          <div className={`col-md-6 col-sm-12 ${style.col}`}>
            <div className={style.headingStyle}>
              <h1 className={style.h2}>Empowering</h1>
              <h1>Financial</h1>
              <h1>Futures</h1>
            </div>
            <div className={style.headingText}>
              <p>
                Welcome to Fintechify, your gateway to cutting-edge financial
                solutions in the heart of the UAE. We revolutionize the way you
                bank, offering a seamless blend of technology and financial
                solutions to meet the unique needs of our customers.
              </p>
            </div>
            <div className={style.headingButton}>
              <button className={style.learnBtn}>Learn More</button>
              <a href="">Contact Us</a>
            </div>
          </div>
          <div className={`col-md-6 col-sm-12 ${style.col2}`}>
            <div className={style.BannerCont}>
              <Image src={BannerDashImage} className={style.DashImage} />
              <Image src={BannerImage} className={style.Banner} />
              <div className={style.bannerSimplified}>
                 <span>
                   <FaDollarSign />
                 </span>
                  <p>Simplified Your Banking!</p>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default homeBanner;
