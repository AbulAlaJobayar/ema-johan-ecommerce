import React, { useState } from 'react';
import Cart from '../Cart/Cart.jsx';
import { useLoaderData } from 'react-router-dom';
import ReviewItem from '../ReveiwItem/ReviewItem.jsx';
import "./Orders.css"
import { removeFromDb } from '../../utilities/fakedb.js';

const Orders = () => {
    const savedCart = useLoaderData()
    const [cart,setCart]=useState(savedCart)
    const handleRemoveFromCart=(id)=>{
        const remaining=cart.filter(product=>product.id!==id);
        setCart(remaining);
        removeFromDb(id)
    }

    return (
        <div className='shop-container'>
            <div className='reveiw-container'>
            {
            cart.map(product=><ReviewItem product={product} key={product.id} handleRemoveFromCart={handleRemoveFromCart}></ReviewItem>)
            }
            </div>
            <div className='cart-container'>
                <Cart cart={cart}></Cart>
            </div>

        </div>
    );
};

export default Orders;