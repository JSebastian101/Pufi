import React, { useEffect } from 'react';
import Navbar from './components/Navbar/Navbar';
import Carrousel from './components/Carrousel/Carrousel';
import Products from './components/Products/Products';
import SocialMedia from './components/SocialMedia/SocialMedia';
import Form from './components/Form/Form';
import Footer from './components/Footer/Footer';
import './App.css';
import { madridBanner,
  berlinBanner,
  parisBanner,
  tokioBanner,
  berlinBlack,
  madridBlack,
  tokyoBlack,
  parisBlack,
  berlin,
  madrid,
  paris,
  tokyo,} from './assets/assets'
import { useDispatch } from 'react-redux';
import { setInitialProducts } from './features/products/productsSlice';

  const products = [
    {
      id: 2,
      banner: madridBanner,
      logo: madrid,
      image: madridBlack,
      name: 'MADRID',
      description: 'Descripción del producto, este es un texto simulado'
    },
    {
      id: 3,
      banner: berlinBanner,
      logo: berlin,
      image: berlinBlack,
      name: 'BERLIN',
      description: 'Descripción del producto, este es un texto simulado'
    },
    {
      id: 1,
      banner: parisBanner,
      logo: paris,
      image: parisBlack,
      name: 'PARIS',
      description: 'Descripción del producto, este es un texto simulado'
    },
    {
      id: 4,
      banner: tokioBanner,
      logo: tokyo,
      image: tokyoBlack,
      name: 'TOKIO',
      description: 'Descripción del producto, este es un texto simulado'
    }
  ]

function App() {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(setInitialProducts(products))
  }, [])

  return (
    <div>
      <div className='App'>
        <Navbar/>
        <Carrousel/>
      </div>
      <Products/>
      <SocialMedia/>
      <Form/>
      <Footer/>
    </div>
  );
}

export default App;
