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
import Card1 from '../assets/images/revslider_card-1.png'
import Card2 from '../assets/images/revslider_card-2.png'
import Card3 from '../assets/images/revslider_card-3.png'
import Card4 from '../assets/images/revslider_card-4.png'
import Card5 from '../assets/images/revslider_card-5.png'
import Card6 from '../assets/images/revslider_card-6.png'
import Card7 from '../assets/images/revslider_card-7.png'

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
    <div className={`container-fluid ${style.containerFluid}`}>
      <div className={`container ${style.container}`}>
        <div className={`row ${style.row}`}>
          {isOne && (
            <div className={`row ${style.slider1}`}>
              <div className="row">
                <div className={`col-md-6 ${style.colleft}`}>
                  <h1>The For Digital Banking</h1>
                </div>
                <div className={`col-md-6 ${style.colright}`}>
                  <p>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Nam reiciendis exercitationem cumque vero accusamus minima
                    saepe sed amet fugiat veniam pariatur recusandae sapiente.
                  </p>
                  <button>
                    Discover Now{" "}
                    <span>
                      <MdArrowOutward />
                    </span>
                  </button>
                </div>
              </div>
              <div className={`row ${style.btmRow3}`}>
                <div className={`col-md-3 ${style.box1}`}>
                  <Image src={Image1} className={style.box1Images} />
                </div>
                <div className={`col-md-3 ${style.box1}`}>
                  <Image src={Image3} className={style.box1Images2} />
                </div>
                <div className={`col-md-3 ${style.box1}`}>
                  <Image src={Image4} className={style.box1Images} />
                </div>
                <div className={`col-md-3 ${style.box1}`}>
                  <Image src={Image6} className={style.box1Images} />
                </div>
              </div>
              <div className={`row ${style.btmRow4}`}>
                <div className={`col-md-3 ${style.box1}`}>
                  <Image src={Image2} className={style.box1Images1} />
                </div>
                <div className={`col-md-3 ${style.box1}`}>
                  {/* <Image src={Image3} className={style.box1Images2} /> */}
                </div>
                <div className={`col-md-3 ${style.box1}`}>
                  <Image src={Image5} className={style.box1Images1} />
                </div>
                <div className={`col-md-3 ${style.box1}`}>
                  <Image src={Image7} className={style.box1Images1} />
                </div>
              </div>
            </div>
          )}
          {isTwo && <div className={style.slider2}>
          <div className={`row ${style.slider1}`}>
              <div className="row">
                <div className={`col-md-6 ${style.colleft}`}>
                  <h1>The For Digital Banking</h1>
                </div>
                <div className={`col-md-6 ${style.colright}`}>
                  <p>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Nam reiciendis exercitationem cumque vero accusamus minima
                    saepe sed amet fugiat veniam pariatur recusandae sapiente.
                  </p>
                  <button>
                    Discover Now{" "}
                    <span>
                      <MdArrowOutward />
                    </span>
                  </button>
                </div>
              </div>
              <div className={`row ${style.btmRow}`}>
                <div className={`col-md-3 ${style.box1}`}>
                  <Image src={Card1} className={style.box1ImagesB} />
                </div>
                <div className={`col-md-3 ${style.box2}`}>
                  <Image src={Card2} className={style.box1Images3} />
                </div>
                <div className={`col-md-3 ${style.box3}`}>
                  <Image src={Card4} className={style.box1ImagesB} />
                </div>
                <div className={`col-md-3 ${style.box4}`}>
                  <Image src={Card6} className={style.box1ImagesB} />
                </div>
              </div>
              <div className={`row ${style.btmRow2}`}>
                <div className={`col-md-4 ${style.box1}`}>
                  <Image src={Card2} className={style.box1ImagesC} />
                </div>
                
                <div className={`col-md-4 ${style.box3}`}>
                  <Image src={Card5} className={style.box1ImagesC} />
                </div>
                <div className={`col-md-4 ${style.box4}`}>
                  <Image src={Card7} className={style.box1ImagesC} />
                </div>
              </div>
            </div>
            
            </div>}
        </div>
      </div>
    </div>
  );
};

export default Banner;
