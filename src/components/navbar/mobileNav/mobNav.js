import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import "./mobNav.css"
import {TiLockOpenOutline} from "react-icons/ti"
import {AiOutlineClose} from "react-icons/ai"

export default function MobNav() {

  const [nav, setNav] = useState(false)
  const [openMenu, setOpenMenu] = useState()

  const toggleNav = () => {
    setNav(prevState => !prevState)
  }

  const changeNavBackground = () => {
    if(window.screenY >= 66){
      setOpenMenu(true)
    }else{
      setOpenMenu(false)
    }
  }

  useEffect(() => {
    changeNavBackground()
    window.addEventListener("scroll", changeNavBackground)
  })
  
  return (
    <>


    <div className={nav ? "hideOpenMenu" : "openMenu"}>
    <img src='http://pixelartmaker-data-78746291193.nyc3.digitaloceanspaces.com/image/2416581c15beb96.png'  
    onClick={toggleNav} className={nav ? "hideOpenIcon" : "styleOpenIcon"} />

    <div className='displayHpHearts'>

      <img src='images/pixelHeart.png' />
      <img src='images/pixelHeart.png' />
      <img src='images/pixelHeart.png' />
      <img src='images/pixelHeart.png' />

    </div>
    </div>
    


    <div className={nav ? "displayLinks" : "hideNavbar"}>
      <Link className='styleLinks' to="/">Main menu</Link>
      <Link className='styleLinks' to="/homepage">Homepage</Link>
      <Link className='styleLinks' to="/developer">Developer</Link>
      <Link className='styleLinks' to="/projects">Projects</Link>
      <Link className='styleLinks' to="/contact">Contact</Link>
      <AiOutlineClose className='styleCloseIcon' onClick={toggleNav}/>
    </div>
    </>
  )
}
