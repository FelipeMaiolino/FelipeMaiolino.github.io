import React from 'react'
import videoBG from './videoBG.mp4'
import './Style.css'

function Joke() {

  return (
    <div className='video'>
      <video src={videoBG} autoPlay loop/>
    </div>
  )
}

export default Joke