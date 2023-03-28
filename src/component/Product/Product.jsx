import React from 'react';
import './Product.css'

const Product = (props) => {
    const { id, name, seller, price, category, img, quantity, ratings, ratingsCount, shipping, stock } = props.product;
    console.log(props.product.name)

    return (
        <div className='product'>
            <img src={img} alt="" />
            <div className='product-info'>
                <h6 className='product-name'>{name}</h6>
                <p>price: &{price}</p>
                <p>manufacture :{seller}</p>
                <p>rating: {ratings}stars</p>
            </div>
            <button className='btn-cart'>Add To Cart</button>
        </div>
    );
};

export default Product;