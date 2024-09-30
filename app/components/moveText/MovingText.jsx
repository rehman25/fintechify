import React from 'react'
import style from './move.module.css'

const MovingText = () => {
  return (
    <div className={`container-fluid ${style.container}`}>
         <div className="row">
            <div className="col-12">
            <marquee direction="left"  className={style.left}>
                <span>Simplify your digital product management with FinPoan</span>
            </marquee> 
               <marquee direction="right"  className={style.right}>
              <span>Maximize your digital product sales with FinPoan</span>
           </marquee>  
            </div>
         </div>
           
    </div>
  )
}

export default MovingText