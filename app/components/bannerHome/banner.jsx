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
  const [isOne, setIsOne] = useState(false);
  const [isTwo, setIsTwo] = useState(true);

  useEffect(() => {
    if (isOne) {
      const timer = setTimeout(() => {
        setIsOne(false);
        setIsTwo(true);
      }, 3000);
      return () => clearTimeout(timer);
    } else if (isTwo) {
      const timer = setTimeout(() => {
        setIsOne(true);
        setIsTwo(false);
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [isOne, isTwo]);

  return (
    <div className={`container-fluid   ${style.containerFluid}`}>
      <div className={`container-fluid ${style.container}`}>
        {/* <div className={`row ${style.row}`}> */}
        {isOne && (
          <div className={`row ${style.slider1}`}>
            <div className={style.rowContent}>
              <div className={`col-lg-6 col-md-12 ${style.colleft}`}>
                <h1>The For Digital Banking</h1>
              </div>
              <div className={`col-lg-6 col-md-12 ${style.colright}`}>
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
              <div className={`col-3 ${style.box1}`}>
                <Image src={Image1} className={style.box1Images} />
              </div>
              <div className={`col-3 ${style.box1}`}>
                <Image src={Image3} className={style.box1Images2} />
              </div>
              <div className={`col-3 ${style.box1}`}>
                <Image src={Image4} className={style.box1Images} />
              </div>
              <div className={`col-3 ${style.box1}`}>
                <Image src={Image6} className={style.box1Images} />
              </div>
            </div>
            <Image src={Phone1} className={style.phoner1} />
            <div className={`row m-0  ${style.btmRow4}`}>
              <div className={`col-3 ${style.box1}`}>
                <Image src={Image2} className={style.box1Images1} />
              </div>
              <div className={`col-3 ${style.box1}`}>
                {/* <Image src={Image3} className={style.box1Images2} /> */}
              </div>
              <div className={`col-3 ${style.box1}`}>
                <Image src={Image5} className={style.box1Images1} />
              </div>
              <div className={`col-3 ${style.box1}`}>
                <Image src={Image7} className={style.box1Images1} />
              </div>
            </div>
          </div>
        )}
        {isTwo && (
          <div className={`row  ${style.slider1}`}>


            <div className={style.rowContent}>
              <div className={`col-lg-6 col-md-12 ${style.colleft}`}>
                <h1>The Platform For Digital Banking</h1>
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
              <div className={`col-lg-6 col-md-12 ${style.colright}`}>
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
              <div className={`col-3 ${style.box1}`}>
                <Image src={Card1} className={style.box1ImagesB} />
              </div>
              <div className={`col-3 ${style.box2}`}>
                <Image src={Card2} className={style.box1Images3} />
              </div>
              <div className={`col-3 ${style.box3}`}>
                <Image src={Card4} className={style.box1ImagesB} />
              </div>
              <div className={`col-3 ${style.box4}`}>
                <Image src={Card6} className={style.box1ImagesB} />
              </div>
            </div>
            <Image src={Phone1} className={style.phoner1} />
            <div className={`row m-0 ${style.btmRow2}`}>
              <div className={`col-4 ${style.box1}`}>
                <Image src={Card2} className={style.box1ImagesC} />
              </div>

              <div className={`col-4 ${style.box3}`}>
                <Image src={Card5} className={style.box1ImagesC} />
              </div>
              <div className={`col-4 ${style.box4}`}>
                <Image src={Card7} className={style.box1ImagesC} />
              </div>
            </div>
          </div>
        )}
        {/* </div> */}
      </div>
    </div>
  );
};

export default Banner;
