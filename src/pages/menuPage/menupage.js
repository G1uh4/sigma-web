import React, { useState } from 'react'
import "./menupage.css"
import Typewriter from 'typewriter-effect';
import { Link } from 'react-router-dom';
import {motion} from "framer-motion"

export default function MenuPage() {

  const [hoverOne, setHoverOne] = useState(false)
  const toggleHoverOne = () => {
    setHoverOne(prevState => !prevState)
  }

  const [hoverTwo, setHoverTwo] = useState(false)
  const toggleHoverTwo = () => {
    setHoverTwo(prevState => !prevState)
  }

  const [hoverThree, setHoverThree] = useState(false)
  const toggleHoverThree = () => {
    setHoverThree(prevState => !prevState)
  }

  const [hoverFour, setHoverFour] = useState(false)
  const toggleHoverFour = () => {
    setHoverFour(prevState => !prevState)
  }




  return (
    <motion.div 
    initial={{opacity:0}}
    animate={{opacity:1}}
    exit={{opacity:0}}
    transition={{duration:1.2}}
    className='homepage'>

      <div className='homepageSectionOne'>
      <h2>
            <Typewriter 
              onInit={(typewriter) => {
              typewriter.typeString("Welcome to SigmaDevelopment")
              .pauseFor(1000)
              .start()
            }}
            />
      </h2>
      </div>

      <div className='displayMenu'>
            <div className='menuOption'>
            <img className={hoverOne ? "showMenuIcon" : "menuIcon"} src='images/cursor.PNG' />
            <Link onMouseEnter={toggleHoverOne} onMouseLeave={toggleHoverOne}  className='styleMenuLink' to="/homepage">Homepage</Link>
            </div>

            <div className='menuOption'>
            <img className={hoverTwo ? "showMenuIcon" : "menuIcon"} src='images/cursor.PNG' />
            <Link onMouseEnter={toggleHoverTwo} onMouseLeave={toggleHoverTwo} className='styleMenuLink' to="/developer">Developer</Link>
            </div>

            <div className='menuOption'>
            <img className={hoverThree ? "showMenuIcon" : "menuIcon"} src='images/cursor.PNG' />
            <Link onMouseEnter={toggleHoverThree} onMouseLeave={toggleHoverThree}  className='styleMenuLink' to="/projects">Projects</Link>
            </div>

            <div className='menuOption'>
            <img className={hoverFour ? "showMenuIcon" : "menuIcon"} src='images/cursor.PNG' />
            <Link onMouseEnter={toggleHoverFour} onMouseLeave={toggleHoverFour}  className='styleMenuLink' to="/contact">Contact</Link>
            </div>

          
      </div>

    </motion.div>
  )
}
