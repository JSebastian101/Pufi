import React from 'react'
import './socialMedia.css'

const SocialMedia = () => {
  return (
    <section className='socialmedia-container'>
      <p>INSTAGRAM</p>
      <h2>#TRAVEL</h2>
      <div className='socialmedia-post'>
        <img src='https://placeimg.com/200/200/any' alt='arch'></img>
        <img src='https://placeimg.com/200/200/arch' alt='arch'></img>
        <img src='https://placeimg.com/200/200/nature' alt='arch'></img>
        <img src='https://placeimg.com/200/200/people' alt='arch'></img>
        <img src='https://placeimg.com/200/200/tech' alt='arch'></img>
        <img src='https://placeimg.com/200/200/animals' alt='arch'></img>
      </div>
    </section>
  )
}

export default SocialMedia