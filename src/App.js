import React from 'react';
import './App.css';
import Header from "./components/header";
import MainContent from "./components/mainContent";
import Footer from "./components/footer";
import Slider from './components/Slider';
import { FeatureBannersData } from './components/FeatureBannersData';
import { ProductCategoriesData } from './components/ProductCategoriesData';

function App() {
  return (
    <div>
    <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.css" rel="stylesheet"></link>
      {/* /* <div className="container">
        <Header />
        <Slider slides={FeatureBannersData} />;
        <Slider slides={ProductCategoriesData} />;
        <MainContent />
        <Footer />
      </div> */}
      <div className="grid-container">
        <Header />
        <Slider slides={FeatureBannersData} />
        <Slider slides={ProductCategoriesData} />
        <MainContent />
        <Footer />
      </div>
    </div>
  )
}

export default App;

