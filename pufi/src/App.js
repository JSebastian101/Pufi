import React from 'react';
import Navbar from './components/Navbar/Navbar';
import Carrousel from './components/Carrousel/Carrousel';
import Products from './components/Products/Products';
import SocialMedia from './components/SocialMedia/SocialMedia';
import Form from './components/Form/Form';
import Footer from './components/Footer/Footer';
import './App.css';

function App() {
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
