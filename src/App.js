import React, { useState }  from 'react';

import "./App.css";
import HomePage from "./components/HomePage";
import ProductList from "./components/ProductList"
import Header from "./components/Header";
import Footer from "./components/Footer";

export default function App() {
  const [mainPage, setMainPage] = useState(true);

  return ( 
    <div className="grid-container">
      <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.css" rel="stylesheet"></link>
      <Header setMainPage={setMainPage} />
        {mainPage ? 
          <>
            <HomePage />
            <div className="bottom-button">
              <button type="button" className="products-button" onClick={() =>  setMainPage(!mainPage)}>
                View All Products
              </button>
            </div>
          </>
        : <ProductList /> }
      <Footer />
  </div>
  )
}

