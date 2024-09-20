import React from 'react'
import style from './eCash.module.css'
import Image from 'next/image'
import Eco from '../../assets/images/eco.png'
import { IoEyeOutline } from "react-icons/io5";
import { MdOutlinePhoneAndroid } from "react-icons/md";
import { GoStack } from "react-icons/go";
import { IoKeyOutline } from "react-icons/io5";


const eCash = () => {
    const serviceItem = [
        {
            icon : <IoEyeOutline size={32}/>, 
            title: 'Strategies That Shift Perspectives',
            description: 'Join Fintechify in revolutionizing digital finance. We craft innovative strategies and top-tier solutions to propel your business ahead in the fintech market. Let\'s shape the future of banking together.'
        },
        {
        
            icon : <MdOutlinePhoneAndroid size={32}/>, 
            title: 'The Game Has Changed',
            description: 'Forget fumbling with cards and endless paperwork. Fintechify is your springboard to the future of finance, where a tap unlocks a world of financial ease.'

        },
        {
            icon : <GoStack size={32}/>, 
            title: 'We Dont Just Craft Solutions, We Craft Experiences.',
            description: 'Our team of financial wizards blends cutting-edge technology with unparalleled design to create digital banking thats as smooth as it is secure.'
        },
        {
            icon : <IoKeyOutline size={32}/>, 
            title: 'Ready To Dominate The Market?',
            description: 'Partner with Fintechify and transform your business. Well help you navigate the ever-evolving digital finance landscape, leaving the competition in the dust.'
        },
        {
            icon : <IoEyeOutline size={32}/>, 
            title: 'Dont Just Survive, Thrive.',
            description: 'Become a pioneer in the fintech revolution. With Fintechify, you`re not just keeping pace, you`re setting the standard.'
        },
    ]
  return (
    <div className={`container-fluid p-0 m-0 ${style.containerFluid}`}>
        <div className={`container ${style.container}`}>
            <div className={`row ${style.row}`}>
                <div className={`col-md-6 ${style.col}`}>
                    <Image src={Eco} alt="Eco-friendly" className={style.Image} />
                </div>
                <div className={`col-md-6 ${style.col2}`}>
                    <h1>Credit Card to E-Cash innovations is the Goal.</h1>
                    <p>Forget plastic, embrace the future. Fintechify unlocks next-level banking with a touch. Crafted experiences, not just solutions. We’re your gateway to dominate the digital finance game. Partner with Fintechify. Be the pioneer, not a follower.</p>
                    {serviceItem.map((item, index) =>{
                        return (
                        <div className={style.colbody} key={index}>
                            <div className={style.textSide}>
                                <span className={style.iconSide}>{item.icon}</span>
                                <span>
                                    <h4>{item.title}</h4>
                                    <p>{item.description}</p>
                                </span>
                            </div>
                        </div>
                        )
                    })}
                </div>
            </div>
        </div>
    </div>
  )
}

export default eCash