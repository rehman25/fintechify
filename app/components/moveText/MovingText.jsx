import React from 'react'
import style from './move.module.css'

const MovingText = () => {
  return (
    <div className={`container-fluid ${style.container}`}>
            <marquee direction="left" scrolldelay="400" className={style.left}>
                <span>Simplify your digital product management with FinPoan</span>
            </marquee> 
               <marquee direction="right" scrolldelay="400" className={style.right}>
              <span>Maximize your digital product sales with FinPoan</span>
           </marquee>  
    </div>
  )
}

export default MovingText