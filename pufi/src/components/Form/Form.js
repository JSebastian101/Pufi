import React from 'react'
import './form.css'
const Form = () => {
  return (
    <section className='socialmedia-container'>
      <p style={{margin: '10px 0 0 0'}}>NEWSLETTER</p>
      <h2 style={{fontWeight:'500'}}>SUSCRIBITE</h2>
      <p style={{margin: '10px 0 0 0', fontWeight:'500', textAlign:'center'}}>y enterate de todas las novedades</p>
      <form className='newsletter-form'>
        <div className='input-container'>
          <input className='newsletter-input' placeholder='Ingresa tu Email' type='text'></input>  
          <button className='newsletter-button' type='submit'>&#10142;</button> 
        </div> 
      </form>
    </section>
  )
}

export default Form