import React from 'react';
import { useState } from 'react'

import './App.css';
import HomePage from "./components/HomePage";
import ProductList from "./components/ProductList"
import Header from './components/Header';
import Footer from './components/Footer'

export default function App() {
  const [isMainpage, setIsMainpage] = useState(true);

  return ( 
    <div className="grid-container">
      <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.css" rel="stylesheet"></link>
      <Header setIsMainpage={setIsMainpage} />
        {isMainpage ? <HomePage />: ''}
        {isMainpage ? (
          <div className="bottom-button">
            <button type="button" className="products-button" onClick={() =>  setIsMainpage(!isMainpage)}>
              View All Products
            </button>
          </div>
        ): ''}
        {!isMainpage ? <ProductList />: ''}
        <Footer />
  </div>
  )
}

