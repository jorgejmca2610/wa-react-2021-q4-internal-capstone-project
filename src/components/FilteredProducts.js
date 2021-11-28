import React from 'react'
import Pagination from './Pagination'

const FilteredProducts = ({data, categories = [], additionalClass}) => {
  const { results } = data
  const customClassName = `grid-product-list ${additionalClass}`
  
  const listItems = results
    .filter((item) => {
        return categories.length !== 0 ? categories.includes(item.data.category.slug) : true
    })
    .map((item) =>
      <div className="product-card" key={item.id}>
          <div className="card_img" key={item.id}>
              <img className="product-img"src={item.data.mainimage.url} alt={item.data.mainimage.alt}/>
              <h2>{item.data.name}</h2>
              <p>{item.data.category.slug}</p>
              <p className="price">$ {item.data.price}</p>
              <p><button>Add to Cart</button></p>
          </div>
      </div>
    )
  return (
    <>
      <div className={customClassName}>
          {listItems}
          <Pagination listItems={listItems}/>
      </div>
    </>
  )
}
export default FilteredProducts;
