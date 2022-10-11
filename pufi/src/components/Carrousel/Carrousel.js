import React from 'react'
import './carrousel.css'
import {carrouselOne, carrouselTwo, carrouselThree} from '../../assets/assets'

const Carrousel = () => {
  return (
    <div className='carrousel'>
      <div className='carrousel-info'>
        <h1 className='info-title'>Viajar <br/> nunca fue tan fácil</h1>
        <button className='info-button'>Shop</button>
      </div>
      <button className='carrousel-button prev'>&#10092;</button>
      <button className='carrousel-button next'>&#10093;</button>
      <ul>
        <li className='slide active' >
          <img src={carrouselOne} alt='travel photo #1'></img>
        </li>
        <li className='slide'>
          <img src={carrouselTwo} alt='travel photo #2'></img>
        </li>
        <li className='slide'>
          <img src={carrouselThree} alt='travel photo #3'></img>
        </li>
      </ul>
    </div>
  )
}

export default Carrousel