import React from 'react';
import "./cart.css"

const Cart = ({cart}) => {
    // const cart=props.cart;
    // const {cart} = props;    

let total=0;
let totatShipping=0;
let quantity=0;
for(const product of cart){
    product.quantity=product.quantity|| 1;
    total=total+product.price*product.quantity;
    totatShipping=totatShipping + product.shipping;
    quantity=quantity + product.quantity;
}
const tax= total*7/100
const totalPrice=total+totatShipping+tax;
    return (
        <div className='cart'>
            <h4>shop container</h4>
            <p>Selected Item : {quantity}</p> 
            <p>Total Price :${total} </p>
            <p>Total Shipping Charge:${totatShipping}</p>
            <p>Tax :${tax.toFixed(2)}</p>
            <h5>Grand Final:${totalPrice.toFixed(2)}</h5>
        </div>
    );
};

export default Cart;