import React, { useContext } from 'react';
import { CartContext } from '../../../context/CartContext';

import CartItem from './CartItem';


const CartProducts = () => {

    const { cartItems } = useContext(CartContext);

    return ( 
        <div className="">
            <div className="card card-body border-0">

                {
                    cartItems.map(item =>  <CartItem key={item.id} item={item}/>)
                }

            </div>
        </div>

     );
}
 
export default CartProducts;