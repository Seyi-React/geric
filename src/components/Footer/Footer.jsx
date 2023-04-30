import React from 'react'
import './footer.css'
import Spoon from '../../Reuseablecompo/Spoon'
import gericht from '../../assets/gericht.png'
import {GrFacebookOption} from 'react-icons/gr'
import {AiOutlineTwitter} from 'react-icons/ai'
import {AiFillInstagram} from 'react-icons/ai'

const Footer = () => {
  return (
    <div className='app-newsletter-container'>
       <div className='app-newsletter'>
           <h4>Newsletter</h4>
           <Spoon/>
           <h2>Subscribe To Our Newsletter</h2>
           <p>And never miss latest updates</p>
           <div className='app-newsletter-input'>
              <input type="text" name="" id="" placeholder='Enter Email' />
              <button>Subscribe</button>
           </div>
       </div>
       <div className='app-footer-newsletter'>
       <div className='app-footer-contact'>
          <h3>Contact Us</h3>
          <p>W 53 Yard,New York NY, 10111 USA</p>
          <p>+17-467-735</p>
          <p>+12-346-788</p>
       </div>
       <div className='app-footer-img'>
           <img src={gericht} alt="" className='gerich' />
           <h6>"The best way to find yourself is to look into service of others"</h6>
           <Spoon/>
         <p><GrFacebookOption/></p>
         <p><AiOutlineTwitter/></p>
         <p><AiFillInstagram/></p>
       </div>
       <div className='app-footer-working'>
           <h3>Working Hours</h3>
              <h5>Mon-Fri </h5>
              <p>8:00am - 12:00am</p>
              <h5>Sat-Sun</h5>
              <p>7:00am - 11:00am</p>
       </div> 
       </div>
         <div className='app-footer-last'>
            <h6>&copy; {new Date ().getFullYear()} All rights reserved.</h6>
         </div>
    </div>
  )
}

export default Footer