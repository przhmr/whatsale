import React, { useContext } from 'react';
import { PlusCircleIcon, MinusCircleIcon, TrashIcon } from '../../icons'
import { CartContext } from '../../../context/CartContext';



const CartItem = ({item}) => {

    const { increase, decrease, removeProduct } = useContext(CartContext);

    return ( 
        <div className="">
            
            <div className="">
                <h5 className="">{item.title}</h5>
                <p className="">Price: {item.price} </p>
                
            </div>
            <div className="">
                 <p className="">Qty: {item.quantity}</p>
            </div>
            <div className="">
                 <button 
                 onClick={() => increase(item)}
                 className="">
                     Mas
                 </button>

                 {
                     item.quantity > 1 &&
                     <button
                    onClick={() => decrease(item)}
                    className="">
                        Menos
                    </button>
                 }

                {
                     item.quantity === 1 &&
                     <button
                    onClick={() => removeProduct(item)}
                    className="">
                        Borrar
                    </button>
                 }
                 
            </div>
        </div>
     );
}
 
export default CartItem;