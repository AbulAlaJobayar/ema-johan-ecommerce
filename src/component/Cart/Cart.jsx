import React from 'react';
import "./cart.css"

const Cart = ({cart}) => {
    // const cart=props.cart;
    // const {cart} = props;

let total=0;
let totatShipping=0;
for(const product of cart){
    total=total+product.price;
    totatShipping=totatShipping + product.shipping;
}
const tax= total*7/100
const totalPrice=total+totatShipping+tax;
    return (
        <div className='cart'>
            <h4>shop container</h4>
            <p>Selected Item : {cart.length}</p> 
            <p>Total Price :${total} </p>
            <p>Total Shipping Charge:${totatShipping}</p>
            <p>Tax :${tax.toFixed(2)}</p>
            <h5>Grand Final:${totalPrice.toFixed(2)}</h5>
        </div>
    );
};

export default Cart;