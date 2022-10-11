import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { store } from './app/store';
import App from './App';
import DetailedProduct from './pages/DetailedProduct/DetailedProduct';
import UserProfile from './pages/UserProfile/UserProfile';
import './index.css';
import {BrowserRouter, Routes, Route } from 'react-router-dom'

const container = document.getElementById('root');
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <Routes>
          <Route path='/' element={<App/>}/>
          <Route path='/product/:id' element={<DetailedProduct/>}/>
          <Route path='/account' element={<UserProfile/>}></Route>
        </Routes>
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
);
