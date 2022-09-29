import React, { useRef } from 'react'
import "./contact.css"
import "./contactMedia.css"
import emailjs from '@emailjs/browser';
import MobNav from '../../components/navbar/mobileNav/mobNav';
import PcNavbar from '../../components/navbar/pcNavbar/pcNavbar';
import { AiFillInstagram, AiFillLinkedin } from 'react-icons/ai'
import {motion} from "framer-motion"


export default function Contact() {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault()

    emailjs.sendForm("service_2monykg", "template_qbetjjq", form.current, "timAnJlxlaurJLO8T")
            .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
        e.target.reset()

  }

  return (
    <motion.div
    initial={{width:0}}
    animate={{width:"100%"}}
    exit={{x:window.innerWidth, transition:{duration:0.5}}}
    >

      <MobNav />
      <PcNavbar />
      
      <div className='formSectionOne'>

        <p>Contact us</p>

      <form className='styleForm' ref={form} onSubmit={sendEmail}>
        <label className='labelText'>Name</label>
        <input required className='styleMainInput' type="text" name="user_name" />
        <label className='labelText'>Email</label>
        <input required className='styleMainInput' type="email" name="user_email" />
        <label className='labelText'>Message</label>
        <textarea required className='styleMsgInput' name="message" />
        <input className='styleSubmitBtn' type="submit" value="Send" />
        </form>

        </div>

        <div className='formSectionTwo'>

        <img src='https://media0.giphy.com/media/BWxK3egmnMCkVoe5Tj/giphy.gif?cid=6c09b9527t8h2wu4qduyapwy33ln3g05tiinkuk3axm5ccqd&rid=giphy.gif&ct=s' />
        <p>Follow us on social Media</p>
        </div>

        <div className='displayMediaSocialIcons'>
          <AiFillLinkedin />
          <AiFillInstagram />
        </div>


    </motion.div>
  )
}
