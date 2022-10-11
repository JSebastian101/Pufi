import React from 'react'
import { madridBanner, berlinBanner, parisBanner, tokioBanner, berlinBlack, madridBlack, tokyoBlack, parisBlack} from '../../assets/assets'
import './products.css'

const products = [
  {
    id: 1,
    banner: madridBanner,
    image: madridBlack,
    name: 'MADRID',
    description: 'Descripción del producto, este es un texto simulado'
  },
  {
    id: 2,
    banner: berlinBanner,
    image: berlinBlack,
    name: 'BERLIN',
    description: 'Descripción del producto, este es un texto simulado'
  },
  {
    id: 3,
    banner: parisBanner,
    image: parisBlack,
    name: 'PARIS',
    description: 'Descripción del producto, este es un texto simulado'
  },
  {
    id: 4,
    banner: tokioBanner,
    image: tokyoBlack,
    name: 'TOKIO',
    description: 'Descripción del producto, este es un texto simulado'
  }
]

const Products = () => {
  return (
    <section className='produtcs-container'>
      {
        products.map((product, index ) => {
          if(index%2 !== 0) {
            return (
              <div key={product.id} className='product'>
                <Details image={product.image} name={product.name} description={product.description}/>
                <Banner banner={product.banner} name={product.name}/>
              </div>
            )
          }
          return <div key={product.id} className='product'>
            <Banner banner={product.banner} name={product.name}/>
            <Details image={product.image} name={product.name} description={product.description}/>
          </div>
        })
      }
    </section>
  )
}

const Banner = ({banner, name}) => {
  return (
  <div className='product-banner'>
    <img className='banner-image' src={banner} alt={name}></img>
    <button className='banner-button'>Comprar</button>
  </div>
  )
}
const Details = ({image, name, description}) => {
  return (
    <div className='product-details'>
      <img className='detail-image' src={image} alt={name}></img>
      <h1 className='detail-title'>{name}</h1>
      <hr/>
      <p className='detail-description'>{description}</p>
      <button className='detail-button'> &#10095; Ver más</button>
    </div>
  )
}

export default Products