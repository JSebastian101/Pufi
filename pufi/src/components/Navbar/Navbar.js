import React, { useEffect } from 'react'
import './navbar.css'
import {Link} from 'react-router-dom'
import { useSelector } from 'react-redux'

const Navbar = () => { 
  const {products} = useSelector((state) => state.products)
  const {cart} = useSelector((state) => state.user)
  return (
    <nav className='landing-nav'> 
      <div className='nav-title'>Travel</div>
      <div className='nav-products'>
        {
          products.map((product, index) => {
            return index < 4
            ? <Link to={`product/${product.id}`} key={product.id}> <img className='products-logo' alt={product.name} src={product.logo}/>{product.name}</Link>
            : null
          })
        }
      </div>
      <div className='nav-user'>
        <Link to='/account'>Mi cuenta</Link>
        {
          cart.length !== 0
          ? <span className='cart-count'>{cart.length}</span>
          : null
        }
        
      </div>
    </nav>
  )
}

export default Navbar