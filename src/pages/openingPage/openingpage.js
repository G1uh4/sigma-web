import React, { useEffect, useState } from 'react'
import "./openingpage.css"
import Typewriter from 'typewriter-effect';

import { randomMessage } from './randomMsg';

export default function OpeningPage() {

  const [randomTxt, setRandomTxt] = useState("")
  
  const randomText = randomMessage
 
  useEffect(() => {
    const randomNum = Math.floor(Math.random() * randomText.length)
    setRandomTxt(randomText[randomNum])
  })

  return (
    <div className='openingPage'>

        <div className='openingPageElement'>

          <h1>
            <Typewriter 
            onInit={(typewriter) => {
              typewriter.typeString("Learn")
              .pauseFor(1000)
              .deleteChars(5)
              typewriter.typeString("Build")
              .pauseFor(1000)
              .deleteChars(5)
              typewriter.typeString("Teach")
              .pauseFor(1000)
              .start()
              .changeDeleteSpeed(30)

            }}
            />
          </h1>
           
            <img src='https://media0.giphy.com/media/XdV9QxHBjP7EtxlypL/giphy.gif?cid=ecf05e47dnp7x6tq90fddmavzzfd69mk1avpol6347el0d2c&rid=giphy.gif&ct=s' />

            <p className='randomText'>{randomTxt}</p>

        </div>



    </div>
  )
}
