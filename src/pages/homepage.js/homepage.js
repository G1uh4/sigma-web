import React from 'react'
import "./homepage.css"
import "./homepageMedia.css"
import MobNav from '../../components/navbar/mobileNav/mobNav'
import {motion} from "framer-motion"
import {BsArrowDownSquare} from "react-icons/bs"
import { Parallax } from 'react-scroll-parallax';
import PcNavbar from '../../components/navbar/pcNavbar/pcNavbar'

export default function Homepage({homestyle}) {
  return (
    <motion.div
    initial={{width:0}}
    animate={{width:"100%"}}
    exit={{x:window.innerWidth, transition:{duration:0.5}}}
    >
      <PcNavbar />
      <MobNav />
      

      {/* HOMEPAGE SECTION ONE */}
      <div className='homepageSectionOne'>

        <motion.img 
        whileInView={{
          opacity:[0,1]
        }}
        transition={{
          duration:1
        }}
        src='images/adventure.gif' />
        <p>Are you ready for an adventure</p>

      </div>


      {/* HOMEPAGE SECTION TWO */}
      
      <div className='homepageSectionTwo'>

        <motion.p
        animate={{
          y:[50, 0],
          opacity:[0,1]
        }}
        transition={{duration:1}}
        >
        Let's make you stand out on the internet
        </motion.p>

      </div>

        {/* HOMEPAGE SECTION THREE */}
        <div className='homepageSectionThree'>

        <img src='http://pixelartmaker-data-78746291193.nyc3.digitaloceanspaces.com/image/32669e722f4d7fd.png' />
        <p>Sigma Development is a startup aimed to provide their clients with effective websites and webapps</p>

        </div>


        {/* HOMEPAGE SECTION MIDDLE TWO */}
        <motion.div
        
        className='homepageSectionMiddleTwo'>
          <p>Level up with SIGMA</p>
        </motion.div>


        {/* HOMEPAGE SECTION THREE */}
        <div className='homepageSectionFour'>

        <p>Ahmed Gluhic founded SigmaDevelopment in 2022. He saw this as a chance to show others what's he capable of</p>
        <img src='images/wizard.png' />

        </div>



    </motion.div>
  )
}
