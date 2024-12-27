import React from 'react'
import './disease.css'
function Disease({ name, imgSrc }) {
  return (
    <div className='container'>
      <div className='image-text'>
        <img src={imgSrc} alt='' />
        <span className=''>{name}</span>
      </div>
    </div>
  )
}

export default Disease
