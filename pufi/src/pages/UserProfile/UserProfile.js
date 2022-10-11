import React, { useEffect } from 'react'
import './userprofile.css'
import {useSelector,  useDispatch} from 'react-redux'
import { removeProduct } from '../../features/user/userSlice'
import {Link} from 'react-router-dom'
const UserProfile = () => {

  const {cart} = useSelector((state) => state.user)

  const dispatch = useDispatch()

  const handleDelete = (event) => {
    const {value} = event.target
    dispatch(removeProduct(value))
  }

  useEffect(() => {
  },[cart])

  return (
    <div className='profile-container'>
      <div className='user-profile'>
        <img className='user-picture' src='https://placeimg.com/200/200/people'></img>
        <h3 className='user-name'>Nombre de prueba</h3>
        <Link to='/'>Volver a la tienda</Link>
        <button className='user-session'>Cerrar Sesión</button>
      </div>
      <div className='user-details'>
        <div className='user-cart'>
          <h1>Tu carrito de compras</h1>
          {
            cart.length !== 0 
            ? cart.map((product) => {
              return <div className='product-container' key={product.id}>
                <img src={product.image}></img>
                <div className='user-cart-details'>
                  <h4>{product.name}</h4>  
                  <p>{product.description}</p>
                </div>
                <div className='product-actions'>
                  <button value={product.id}> Terminar compra  </button>
                  <button onClick={handleDelete} value={product.id}>Eliminar producto</button>
                </div>
              </div>
            })
            : <h2>Tu carrito está vacío</h2>
          }
        </div>
        <div>
        
        </div> 
      </div>
    </div>
  )
}

export default UserProfile