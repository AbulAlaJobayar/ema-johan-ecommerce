import React from 'react';
import Cart from '../Cart/Cart.jsx';
import { useLoaderData } from 'react-router-dom';

const Orders = () => {
    const cart = useLoaderData()
    return (
        <div className='shop-container'>
            <div className='product-container'>
                <h3>orders-page</h3>
            </div>
            <div className='cart-container'>
                <Cart cart={cart}></Cart>
            </div>

        </div>
    );
};

export default Orders;