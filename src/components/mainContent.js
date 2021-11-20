import React from 'react'
import { FeatureProductsData } from './FeatureProductsData';

const MainContent = () => {
    const listItems = FeatureProductsData.map((item) =>
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
        <div className="grid-product-list">
            {listItems}
        </div>
    )
}
export default MainContent;
