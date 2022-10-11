import React from 'react'
import './navbar.css'
import paris from '../../assets/paris-white.png'
import madrid from '../../assets/madrid-white.png'
import berlin from '../../assets/berlin-white.png'
import tokio from '../../assets/tokyo-white.png'
const products = [
  {
    id: 1,
    logo: paris,
    name: 'PARIS'
  },
  {
    id: 2,
    logo: madrid,
    name: 'MADRID'
  },
  {
    id: 3,
    logo: berlin,
    name: 'BERLIN'
  },
  {
    id: 4,
    logo: tokio,
    name: 'TOKIO'
  }
]

const Navbar = () => { 
  return (
    <nav className='landing-nav'> 
      <div className='nav-title'>Travel</div>
      <div className='nav-products'>
        {
          products.map((product) => {
            return <a href='#' key={product.id}> <img className='products-logo' alt={product.name} src={product.logo}/>{product.name}</a>
          })
        }
      </div>
      <div className='nav-user'>
        <a>Mi cuenta</a>
        <a>Mi compra</a>
      </div>
    </nav>
  )
}

export default Navbar