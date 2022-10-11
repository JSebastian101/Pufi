import React, { useEffect } from 'react'
import './products.css'
import {Link} from 'react-router-dom'
import {useDispatch, useSelector} from 'react-redux'
import { addProduct } from '../../features/user/userSlice'

const Products = () => {
  const {products} = useSelector((state)=> state.products)
  const {cart} = useSelector((state) => state.user)
  const dispatch = useDispatch()
  
  const handleClick = (event) => {
    const {value} = event.target
    let flag = false
    cart.map((element)=> {
      if(element.id == value) return flag = true
    })
    if(!flag){
      const product = products.find((singleProduct) => {
        return singleProduct.id == value
      })
      dispatch(addProduct(product))
    } else return 
  }

  useEffect(()=> {
    console.log('update')
  }, [cart])

  return (
    <section className='produtcs-container'>
      {
        products.map((product, index) => {
          if(index%2 !== 0) {
            return (
              <div key={product.id} className='product'>
                <Details image={product.image} name={product.name} description={product.description} value={product.id}/>
                <Banner banner={product.banner} name={product.name} value={product.id} onClick={handleClick}/>
              </div>
            )
          }
          return <div key={product.id} className='product'>
            <Banner banner={product.banner} name={product.name} value={product.id} onClick={handleClick}/>
            <Details image={product.image} name={product.name} description={product.description} id={product.id}/>
          </div>
        })
      }
    </section>
  )
}

const Banner = ({banner, name, value, onClick}) => {
  return (
  <div className='product-banner'>
    <img className='banner-image' src={banner} alt={name}></img>
    <button value={value} onClick={onClick} className='banner-button'>Comprar</button>
  </div>
  )
}
const Details = ({image, name, description, id}) => {
  return (
    <div className='product-details'>
      <img className='detail-image' src={image} alt={name}></img>
      <h1 className='detail-title'>{name}</h1>
      <hr/>
      <p className='detail-description'>{description}</p>
      <button className='detail-button'> &#10095; <Link to={`product/${id}`}>Ver más</Link></button>
    </div>
  )
}

export default Products