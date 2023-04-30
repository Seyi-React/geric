import React from 'react'
import './findus.css'
import Find from '../../assets/findus.png'
import Spoon from '../../Reuseablecompo/Spoon'

const Open = () => {
  return (
    <div className='app-findus-section'>
        <div className='app-findus-contact'>
           <h4>Contact</h4>
           <Spoon />
           <h6>Opening Hours</h6>
           <p>Mon-Fri 10am-2:00am</p>
           <p>Sat-Sun 2:00am-4:00am</p>
           <button>Visit Us</button>
        </div>
        <div>
           <img src={Find} alt="" className='findus-img' />
        </div>
    </div>
  )
}

export default Open;