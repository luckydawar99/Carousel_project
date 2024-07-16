import React from 'react'
import { useSelector } from 'react-redux'


const ImageComponent = () => {
const currentIndex = useSelector((state)=>state.currentIndex);
const images = useSelector((state)=>state.images);

  return (
    <div className='image-container'>
    <img src={images[currentIndex]} alt={`Slide ${currentIndex +1}`}/>
    </div>
  )
}

export default ImageComponent