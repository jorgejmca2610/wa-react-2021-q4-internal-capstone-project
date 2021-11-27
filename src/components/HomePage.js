import React from 'react';
import '../App.css';
import MainContent from "./MainContent";
import Slider from './Slider';
import { featureBannersData } from '../utilities/featureBannersData';
import { productCategoriesData } from '../utilities/productCategoriesData';

export default function HomePage() {
  return (
    <React.Fragment>
      <Slider slides={featureBannersData} />
      <Slider slides={productCategoriesData} />
      <MainContent additionalClass='span-2-colums'/>
    </React.Fragment>
  )
}