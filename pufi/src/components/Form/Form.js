import React from 'react'
import './form.css'
import { useForm } from '@formspree/react';

const Form = () => {
  const [state, handleSubmit] = useForm("xrgdlajn");
   
  return (
    <section className='socialmedia-container'>
      <p style={{margin: '10px 0 0 0'}}>NEWSLETTER</p>
      <h2 style={{fontWeight:'500'}}>SUSCRIBITE</h2>
      <p style={{margin: '10px 0 0 0', fontWeight:'500', textAlign:'center'}}>y enterate de todas las novedades</p>
      <form  onSubmit={handleSubmit} className='newsletter-form'>
        <div className='input-container'>
          <input name="email" type='email' className='newsletter-input' placeholder='Ingresa tu Email'></input>  
          <button className='newsletter-button' type="submit" disabled={state.submitting}>&#10142;</button> 
        </div> 
          {
            state.succeeded ?  <p>Thanks for joining!</p> : null
          }
      </form>
    </section>
  )
}

export default Form