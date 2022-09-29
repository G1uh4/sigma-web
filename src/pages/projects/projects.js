import React from 'react'
import "./projects.css"
import MobNav from '../../components/navbar/mobileNav/mobNav'
import PcNavbar from '../../components/navbar/pcNavbar/pcNavbar'
import {motion} from "framer-motion"

export default function Projects() {

  const projectNames = []

  return (
    <motion.div
    initial={{width:0}}
    animate={{width:"100%"}}
    exit={{x:window.innerWidth, transition:{duration:0.5}}}
    >
      <MobNav />
      <PcNavbar />

      {projectNames === 0 ? 
      <div className='displayProjects'>
      </div>
      : 
      <div className='noProjects'>

      <p>No major projects to display</p>
      <img src='https://media2.giphy.com/media/WrfgK836swOvrdycaG/giphy.gif?cid=6c09b952ake6l5jsblowvyvcxuys349095hv9matc2nd524t&rid=giphy.gif&ct=s' />

    </div> 
      }

    </motion.div>
  )
}
