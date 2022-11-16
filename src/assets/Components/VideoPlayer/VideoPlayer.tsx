import React from 'react'
import { Link } from 'react-router-dom'
import ReactPlayer from 'react-player'
import './Style.css'


function VideoPlayer() {

  return (
    <div className='player-wrapper'>
    <ReactPlayer
      className='react-player'
      url='https://www.youtube.com/watch?v=FkzpNFv-E8g&list=PLdFvcx9yM9QC5FjaDpalhUYs9CurfNYLu&ab_channel=UNISAGRADO'
      width='30%'
      height='70%'
    />
  </div>
  )
}

export default VideoPlayer