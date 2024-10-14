"use client"; 
import { useEffect, useState } from "react";
import style from "./banner.module.css";
import Image from "next/image";
import { MdArrowOutward } from "react-icons/md";

import Phone from "../assets/images/bgPhone.png";
import Phone1 from "../assets/images/bgPhone.png";
import head1 from "../assets/images/head1.png";
import head2 from "../assets/images/head2.png";
import head3 from "../assets/images/head3.png";
import head4 from "../assets/images/head4.svg";

const Banner = () => {
  const [isOne, setIsOne] = useState(true);
  const [isTwo, setIsTwo] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setIsOne((prev) => !prev);
      setIsTwo((prev) => !prev);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className={` ${style.containerFluid}`}>
      <div className={`container-xlg  ${style.container}`}>
        {isOne && (
          <div className={`row ${style.slider1}`}>
            <div className={style.rowContent}>
              <div className={`col-lg-6 col-md-6 m-0 p-0 ${style.colleft}`}>
                <h1 data-aos="fade-up" data-aos-duration="1000" className="mt-lg-5 mt-md-5">A Trusted source of fast, flexible financing</h1>
                {/* <div className={style.picture2}>
                  <div className={style.people} data-aos="fade-up" data-aos-duration="1500">
                    <Image src={head1} alt="Head 1" className={style.head1} />
                    <Image src={head2} alt="Head 2" className={style.head2} />
                    <Image src={head3} alt="Head 3" className={style.head3} />
                    <span>
                      <h4>29.5M</h4>
                      <h6>Most Active User</h6>
                    </span>
                  </div>
                  <div className={style.star} data-aos="fade-up" data-aos-duration="1500">
                    <Image src={head4} alt="Head 4" className={style.head4} />
                    <span>
                      <h6>2024 The World</h6>
                      <h6>Best Digital Bank</h6>
                    </span>
                  </div>
                </div> */}
              </div>
              <div className={`col-lg-4 col-md-4 m-0 p-0 ${style.colright}`}>
                <Image src={Phone} alt="Phone" className={style.phoner} />
                <p data-aos="fade-up" data-aos-duration="1000">
                Welcome to Fintechify, your gateway to cutting-edge financial solutions in the heart of the UAE. We revolutionize the way you bank, offering a seamless blend of technology and financial solutions to meet the unique needs of our customers.
                </p>
                <button data-aos="fade-up" data-aos-duration="1500">
                  Learn More
                  <span>
                    <MdArrowOutward />
                  </span>
                </button>
              </div>
            </div>
            <div className={`row m-0 ${style.btmRow3}`}>
              <div className={`${style.box1}`}></div>
              <div className={`${style.box2}`}></div>
              <div className={`${style.box3}`}></div>
              <div className={`${style.box4}`}></div>
            </div>

            <Image src={Phone1} alt="Phone1" className={style.phoner1} />

            <div className={`row m-0 ${style.btmRow4}`}>
              <div className={`${style.box5}`}></div>
              <div className={`${style.box6}`}></div>
              <div className={`${style.box7}`}></div>
            </div>
          </div>
        )}

        {isTwo && (
          <div className={`row ${style.slider1}`}>
            <div className={style.rowContent}>
              <div className={`col-lg-6 col-md-6 m-0 p-0 ${style.colleft2}`}>
                <h1 className={style.BannerText} data-aos="fade-up" data-aos-duration="1000">
                Empowering <br/> Financial<br/> Futures
                </h1>
                <div className={style.picture}>
                  <div className={style.people} data-aos="fade-up" data-aos-duration="1500">
                    <Image src={head1} alt="Head 1" className={style.head1} />
                    <Image src={head2} alt="Head 2" className={style.head2} />
                    <Image src={head3} alt="Head 3" className={style.head3} />
                    <span>
                      <h4>29.5M</h4>
                      <h6>Most Active User</h6>
                    </span>
                  </div>
                  <div className={style.star}  data-aos="fade-up" data-aos-duration="1000">
                    <Image src={head4} alt="Head 4" className={style.head4} />
                    <span>
                      <h6>2024 The World</h6>
                      <h6>Best Digital Bank</h6>
                    </span>
                  </div>
                </div>
              </div>
              <div className={`col-lg-4 col-md-4 m-0 p-0 ${style.colright2}`}>
                <Image src={Phone} alt="Phone" className={style.phoner} />
                <p data-aos="fade-up" data-aos-duration="1500">
                Welcome to Fintechify, your gateway to cutting-edge financial solutions in the heart of the UAE. We revolutionize the way you bank, offering a seamless blend of technology and financial solutions to meet the unique needs of our customers.
                </p>
                <button data-aos="fade-up" data-aos-duration="1500">
                  Learn More
                  <span>
                    <MdArrowOutward />
                  </span>
                </button>
              </div>
            </div>

            <div className={`row m-0 ${style.btmRow}`}>
              <div className={`${style.card1}`}></div>
              <div className={`${style.card2}`}></div>
              <div className={`${style.card3}`}></div>
              <div className={`${style.card4}`}></div>
            </div>

            <Image src={Phone1} alt="Phone1" className={style.phoner1} />

            <div className={`row m-0 ${style.btmRow2}`}>
              <div className={`${style.card5}`}></div>
              <div className={`${style.card6}`}></div>
              <div className={`${style.card7}`}></div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Banner;