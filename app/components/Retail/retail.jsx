import React from 'react'
import style from './retail.module.css'
import Shape1 from '../../assets/images/shape2.png' 
import Sp from '../../assets/images/payment.png' 

import Image from 'next/image'

const retail = () => {
  return (
    <div className={`container-fluid ${style.ContainerFluid}`}>
         <div className={`container ${style.container}`}>
              <div className={`row ${style.row}`}>
                    <div className={`col-md-6 ${style.col}`}>
                      <h1>Simplify Your Banking with Fintechify</h1>
                       <p>Fintech is changing the way we manage our money, making it faster, easier, and more accessible for everyone. For example, you can now:</p>
                     
                    </div>   
                    <div className={`col-md-6 ${style.col2}`}>
                       <div className={style.backImage}>
                           <Image src={Shape1} className={style.Image}  />
                       </div>
                           {/* <Image src={Sp} className={style.sp}  /> */}
                    </div>   
              </div>
         </div>
    </div>
  )
}

export default retail