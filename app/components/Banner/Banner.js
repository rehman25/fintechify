import React from 'react'
import styles from './Banner.module.css'
import { BsBuildings } from "react-icons/bs";


export default function Banner({ showCase, head, tagLine, Des }) {
    return (
        <>
            <section className={`${styles.BannerBg}`}>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className={`${styles.bannerBox}`}>
                                {showCase !== false ?
                                    <div className={`${styles.bannerTag}`}>
                                        <BsBuildings />
                                        <h5>{showCase}</h5>
                                    </div> : false}

                                <h2>{head}</h2>
                                <span>{tagLine}</span>
                                <p>{Des}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
