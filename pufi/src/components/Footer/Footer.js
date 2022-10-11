import React from 'react'
import './footer.css'
import { facebook, instagram } from '../../assets/assets'
const Footer = () => {
  return (
    <footer className='footer-container'>
      <h1>Travel</h1>
      <ul className='footer-list'>
        <li><a href='#'>Madrid</a></li>
        <li><a href='#'>Berlin</a></li>
        <li><a href='#'>Paris</a></li>
        <li><a href='#'>Tokio</a></li>
      </ul>
      <hr/>
      <ul className='footer-list'>
       <li><a href='#'>Contacto</a></li> 
       <li><a href='#'>Ayuda</a></li> 
       <li><a href='#'>Cómo comprar</a></li> 
       <li><a href='#'>Términos & condiciones</a></li> 
      </ul>
      <hr/>
      <div className='footer-social'>
        <p>Seguinos en</p>
        <div className='social-media'>
          <img src={facebook} alt='facebook logo'></img>
          <img src={instagram} alt='instagram logo'></img>
        </div>
      </div>
    </footer>
  )
}

export default Footer