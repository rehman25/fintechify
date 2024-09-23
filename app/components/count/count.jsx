import React from "react";
import style from "./count.module.css";
import Image from "next/image";
import Svg1 from '../assets/images/1svg.svg';
import Svg2 from '../assets/images/2svg.svg';
import Svg3 from '../assets/images/3svg.svg';

const count = () => {
  return (
    <div className={`container-fluid ${style.containerFluid}`}>
      <div className={`container ${style.container}`}>
        <div className={`row ${style.row}`}>
                <div className={`col-md-12 ${style.col12}`}>
                     <div className={style.card}>
                         <Image src={Svg1} className={style.Svg} />
                        <span>
                            <p>transactions</p>
                             <h1>590
                             M+</h1>
                        </span>
                     </div>
                     <div className={style.card}>
                         <Image src={Svg2} className={style.Svg} />
                        <span>
                            <p>transactions</p>
                             <h1>590
                             M+</h1>
                        </span>
                     </div>
                     <div className={style.card}>
                         <Image src={Svg3} className={style.Svg} />
                        <span>
                            <p>transactions</p>
                             <h1>590
                             M+</h1>
                        </span>
                     </div>
                </div>
        </div>
      </div>
    </div>
  );
};

export default count;
