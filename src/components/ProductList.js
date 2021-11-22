import React from "react"
import Sidebar from "./Sidebar"
import FilteredProducts from "./FilteredProducts";
import categoryData from "../mocks/en-us/product-categories.json"
import productData from "../mocks/en-us/products.json"

export default function ProductList() {
  const [categories, setCategories] = React.useState([]);
  
  return (
    <React.Fragment>
      <Sidebar setCategories={setCategories} data={categoryData} categoryList={categories} />
      
      <FilteredProducts data={productData} categories={categories} additionalClass='span-2-columns' />
    </React.Fragment>
  )
}