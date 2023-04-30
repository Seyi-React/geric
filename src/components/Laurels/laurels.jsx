import React from 'react'
import './laurels.css'
import Laurel from '../../assets/laurels.png'
import Spoon from '../../Reuseablecompo/Spoon'
import Award1 from '../../assets/award01.png'
import Award2 from '../../assets/award02.png'
import Award3 from '../../assets/award03.png'
import Award5 from '../../assets/award05.png'

const Laurels = () => {
  return (
    <div className='app-laurel'>
         <div className='app-laurel-content'>
            <section>
                <h4>Awards & Recognition</h4>
                <Spoon/>
                <h2>Our Laurels</h2>
            </section>
            <div className='app-laurel-flex'>
                <div className='app-laurel-child'>
                    <img src={Award1} alt="" />
                    <h3>Bib Gourmound</h3>
                    <p>Lorem ipsum dolor sit amet consectetur </p>
                </div>
                <div className='app-laurel-child'>
                    <img src={Award2} alt="" />
                    <h3>Rising Star</h3>
                    <p>Lorem ipsum dolor sit amet consectetur</p>
                </div>
                <div className='app-laurel-child'>
                    <img src={Award3} alt="" />
                    <h3>AA Hospitality</h3>
                    <p>Lorem ipsum dolor sit amet consectetur</p>
                </div>
                <div className='app-laurel-child'>
                    <img src={Award5} alt="" />
                    <h3>Outstanding Chef</h3>
                    <p>Lorem ipsum dolor sit amet consectetur</p>
                </div>
            </div>
         </div>
          <div>
              <img src={Laurel} alt="" className='laurel-img' />
          </div>
    </div>
  )
}

export default Laurels