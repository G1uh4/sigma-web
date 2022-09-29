import React from 'react'
import MobNav from '../../components/navbar/mobileNav/mobNav'
import PcNavbar from '../../components/navbar/pcNavbar/pcNavbar'
import {motion} from "framer-motion"

import "./developer.css"
import "./developerMedia.css"
import Typewriter from 'typewriter-effect';


import { AiFillHtml5, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai'
import {DiCss3, DiJavascript1, DiReact, DiNodejsSmall, DiMongodb} from "react-icons/di"

export default function Developer() {
  return (
    <motion.div
    initial={{width:0}}
    animate={{width:"100%"}}
    exit={{x:window.innerWidth, transition:{duration:0.5}}}
    >
      <PcNavbar />
      <MobNav />

      <div className='developerSectionOne'>

        <img src='images/developer.jpg' />
        <p>
            <Typewriter 
            onInit={(typewriter) => {
              typewriter.typeString(`Gluhic Ahmed`)
              .start()

            }}
            />
          </p>

          

      </div>


      <div className='developerSectionTwo'>

            <div className='displayBio'>
              <p>Developer by day, gamer by night. Developing websites and webapps started out from fun</p>
              <p>Now I'm starting something more serious.</p>
              <p>Working as a web developer gives me a chance to express myself. I'm on a journey to make the web a better place</p>
            </div>

      </div>
          

    <div className='developerSectionThree'>

          <div className='displayH2Background'>
          <h2>Technologies I use</h2>
          </div>

      <div className='displayTechIcons'>
      <AiFillHtml5 />
      <DiCss3 />
      <DiJavascript1 />
      <DiReact />
      <DiNodejsSmall />
      <DiMongodb />
      </div>
    </div>


    <div className='developerSectionFour'>

          <div className='displayH2Background'>
          <h2>My social media</h2>
          </div>

          <div className='displaySocialMedia'>
            <AiFillInstagram />
            <AiFillLinkedin />
          </div>

    </div>
      
    </motion.div>
  )
}
