import React from 'react';
import ReactDOM from 'react-dom'
  import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
  import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import './Product.css'

const Product = (props) => {
    const { id, name, seller, price, category, img, quantity, ratings, ratingsCount, shipping, stock } = props.product;
    const cartProduct=props.handleAddToCart
    

    return (
        <div className='product'>
            <img src={img} alt="" />
            <div className='product-info'>
                <h6 className='product-name'>{name}</h6>
                <p>price: ${price}</p>
                <p>manufacture :{seller}</p>
                <p>rating: {ratings}stars</p>
            </div>
            <button onClick={()=>cartProduct(props.product)} className='btn-cart'>Add To Cart <FontAwesomeIcon icon={faShoppingCart} /></button>
        </div>
    );
};

export default Product;