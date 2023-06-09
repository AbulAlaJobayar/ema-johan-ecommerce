import React, { useEffect, useState } from 'react';
import {addToDb, getShoppingCart } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';

import './Shop.css'
import Product from '../Product/Product';

const Shop = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([])
    useEffect(() => {
        fetch('products.json')
            .then(res => res.json())
            .then(data => setProducts(data));
    }, []);
    const handleAddToCart = (product) => {
        const newCart = [...cart, product];
        setCart(newCart);
        addToDb(product.id)
    }
    useEffect(() => {
        const storedCart = getShoppingCart()
        const savedCart = [];
        //    step 1: get id
        for (const id in storedCart) {
            //step 2: get the product by using id
            const addedProduct = products.find(product => product.id === id);
            if (addedProduct) {
                // step 3: get quantity of the product
                const quantity = storedCart[id];
                addedProduct.quantity = quantity;
                savedCart.push(addedProduct);
            }
            

        }
        setCart(savedCart)

    }, [products])


    return (
        <div className='shop-container'>
            <div className="product-container">
                {
                    products.map(product => <Product product={product} key={product.id} handleAddToCart={handleAddToCart}></Product>)
                }

            </div>
            <div className="cart-container">
                <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Shop;