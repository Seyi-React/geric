import React from 'react'
import './intro.css'
import Video from '../../assets/meal.mp4'

const Intro = () => {
  return (
    <div className='app-intro-video'>
        <div className='app-intro'>
            <video controls loop src={Video}/>
        </div>
    </div>
  )
}

export default Intro