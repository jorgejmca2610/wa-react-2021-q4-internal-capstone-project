import React from 'react'
import { featureProductsData } from '../utilities/featureProductsData'

const MainContent = ({additionalClass = ''}) => {
    const customClassName = `grid-product-list ${additionalClass}`
    const listItems = featureProductsData.map((item) =>
        <div className="product-card" key={item.id}>
            <div className="card_img" key={item.id}>
                <img className="product-img" src={item.image} alt={item.alt}/>
                <h2>{item.name}</h2>
                <p>{item.category}</p>
                <p className="price">$ {item.price}</p>
                <p><button>Add to Cart</button></p>
            </div>
        </div>
    )
    return (
        <div className={customClassName}>
            {listItems}
        </div>
    )
}
export default MainContent;
