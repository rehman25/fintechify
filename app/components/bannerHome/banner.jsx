"use client";
import { useEffect, useState } from "react";
import style from "./banner.module.css";
import Image from "next/image";
import { MdArrowOutward } from "react-icons/md";
import Image1 from "../assets/images/revslider_1_img-1.jpg";
import Image2 from "../assets/images/revslider_1_img-2.jpg";
import Image3 from "../assets/images/revslider_1_img-3.jpg";
import Image4 from "../assets/images/revslider_1_img-4.jpg";
import Image5 from "../assets/images/revslider_1_img-5.jpg";
import Image6 from "../assets/images/revslider_1_img-6.jpg";
import Image7 from "../assets/images/revslider_1_img-7.jpg";
import Card1 from "../assets/images/revslider_card-1.png";
import Card2 from "../assets/images/revslider_card-2.png";
import Card3 from "../assets/images/revslider_card-3.png";
import Card4 from "../assets/images/revslider_card-4.png";
import Card5 from "../assets/images/revslider_card-5.png";
import Card6 from "../assets/images/revslider_card-6.png";
import Card7 from "../assets/images/revslider_card-7.png";
import Phone from "../assets/images/bgPhone.png";
import Phone1 from "../assets/images/bgPhone.png";
import head1 from "../assets/images/head1.png";
import head2 from "../assets/images/head2.png";
import head3 from "../assets/images/head3.png";
import head4 from "../assets/images/head4.svg";

const Banner = () => {
  const [isOne, setIsOne] = useState(true);
  const [isTwo, setIsTwo] = useState(false);

  // useEffect(() => {
  //   if (isOne) {
  //     const timer = setTimeout(() => {
  //       setIsOne(false);
  //       setIsTwo(true);
  //     }, 5000);
  //     return () => clearTimeout(timer);
  //   } else if (isTwo) {
  //     const timer = setTimeout(() => {
  //       setIsOne(true);
  //       setIsTwo(false);
  //     }, 5000);
  //     return () => clearTimeout(timer);
  //   }
  // }, [isOne, isTwo]);

  return (
    <div className={`container-fluid   ${style.containerFluid}`}>
      <div className={`container-fluid ${style.container}`}>
        {/* <div className={`row ${style.row}`}> */}
        {isOne && (
          <div className={`row ${style.slider1}`}>
            <div className={style.rowContent}>
              <div className={`col-lg-7 col-md-12 ${style.colleft}`}>
                <h1>A trusted source of fast,flexible financing</h1>
              </div>
              <div className={`col-lg-5 col-md-12 ${style.colright}`}>
                <Image src={Phone} className={style.phoner} />

                <p>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nam
                  reiciendis exercitationem cumque vero accusamus minima saepe
                  sed amet fugiat veniam pariatur recusandae sapiente.
                </p>
                <button>
                  Discover Now{" "}
                  <span>
                    <MdArrowOutward />
                  </span>
                </button>
              </div>
            </div>

            <div className={`row m-0 ${style.btmRow3}`}>
              <div className={` ${style.box1}`}></div>
              <div className={` ${style.box2}`}></div>
              <div className={` ${style.box3}`}></div>
              <div className={`  ${style.box4}`}> </div>
             
            </div>
            <Image src={Phone1} className={style.phoner1} />
            <div className={`row  m-0  ${style.btmRow4}`}>
              <div className={`  ${style.box5}`}></div>
              <div className={`${style.box6}`}></div>
              <div className={` ${style.box7}`}> </div>
             

            </div>
          </div>
        )}
        {isTwo && (
          <div className={`row  ${style.slider1}`}>


            <div className={style.rowContent}>
              <div className={`col-lg-7 col-md-12 ${style.colleft}`}>
                <h1>The platform for digital banking</h1>
                <div className={style.picture}>
                  <div className={style.people}>
                    <Image src={head1} className={style.head1} />
                    <Image src={head2} className={style.head2} />
                    <Image src={head3} className={style.head3} />
                    <span>
                      <h4>29.5M</h4>
                      <h6>Most Active User</h6>
                    </span>
                  </div>
                  <div className={style.star}>
                    <Image src={head4} className={style.head4} />
                    <span>
                      <h6>2024 The World</h6>
                      <h6>Best Digital Bank</h6>
                    </span>
                  </div>
                </div>
                
              </div>
              <div className={`col-lg-5 col-md-12 ${style.colright}`}>
                <Image src={Phone} className={style.phoner} />
                <p>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nam
                  reiciendis exercitationem cumque vero accusamus minima saepe
                  sed amet fugiat veniam pariatur recusandae sapiente.
                </p>
                <button>
                  Discover Now{" "}
                  <span>
                    <MdArrowOutward />
                  </span>
                </button>
              </div>
            </div>
            <div className={`row m-0 ${style.btmRow}`}>
              <div className={` ${style.card1}`}></div>
              <div className={`${style.card2}`}></div>
              <div className={` ${style.card3}`}></div>
              <div className={` ${style.card4}`}></div>
            </div>
            <Image src={Phone1} className={style.phoner1} />
            <div className={`row m-0 ${style.btmRow2}`}>
              <div className={` ${style.card5}`}> </div>
              <div className={` ${style.card6}`}> </div>
              <div className={` ${style.card7}`}> </div>

            </div>
          </div>
        )}
        {/* </div> */}
      </div>
    </div>
  );
};

export default Banner;
