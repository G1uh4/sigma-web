import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import "./pcNavbar.css"

export default function PcNavbar() {

    const [nav, setNav] = useState("")

    const changeBackground = () => {
        if(window.screenY >= 66){
            setNav(true)
        }else{
            setNav(true)
        }
    }

    useEffect(() => {
        changeBackground()
        window.addEventListener("scroll", changeBackground)
    })

  return (
    <div className={nav ? "scrolledNavbar" : "pcNavbar"}>

      <Link className='styleLink' to="/">Main menu</Link>
      <Link className='styleLink' to="/homepage">Homepage</Link>
      <Link className='styleLink' to="/developer">Developer</Link>
      <Link className='styleLink' to="/projects">Projects</Link>
      <Link className='styleLink' to="/contact">Contact</Link>


    </div>
  )
}
