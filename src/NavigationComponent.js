import React from 'react'
import { useDispatch } from 'react-redux'
import { nextImage, prevImage } from './store';

const NavigationComponent = () => {
const dispatch = useDispatch();

  return (
    <div className='navigation'>
    <button onClick={()=>dispatch(prevImage())}>Back</button>
    <button onClick={()=>dispatch(nextImage())}>Next</button>
    </div>
  )
}

export default NavigationComponent