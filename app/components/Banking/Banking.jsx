import React from 'react'
import style from './banking.module.css'
import Shape1 from '../../assets/images/shape1.png' 
import Sp from '../../assets/images/Group-1.png' 
import Image from 'next/image'

const Banking = () => {
  return (
    <div className={`container-fluid ${style.ContainerFluid}`}>
         <div className={`container ${style.container}`}>
              <div className={`row ${style.row}`}>
                    <div className={`col-md-6 ${style.col}`}>
                      <h1>Simplify Your Banking with Fintechify</h1>
                       <p>Fintech is changing the way we manage our money, making it faster, easier, and more accessible for everyone. For example, you can now:</p>
                       <ul>
                          <li>Use your phone to pay for groceries.</li>
                          <li>Deposit checks remotely.</li>
                          <li>Get a loan decision in minutes.
                          </li>
                          <li>Invest in stocks and bonds with just a few clicks.</li>
                       </ul>
                       <p>Join us on a fintech journey where we co-create tailored solutions, seamlessly integrating expertise to fuel your growth. Let’s transform together towards shared success!</p>
                       <a href=''>GET START</a>
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

export default Banking