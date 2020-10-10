import React, { useContext } from 'react';
import CartProducts from './CartProducts';
import { CartContext } from '../../../context/CartContext';

import { Link } from 'react-router-dom';


const Cart = () => {

    const { total, cartItems, itemCount, clearCart, checkout, handleCheckout } = useContext(CartContext);
    
   

const whatsapp = (number, message) =>{
    var name= "Darwin"
    var headermsg= `Hola, mi nombre es ${name}, me gustaria realizar la compra de los siguientes productos `
    var storeName= " La tienditaXpress"
    var confirmMessage = `Gracias por tu confianza en nosotros 🤗🤗🤗🤗🤗🤗🤗🤗🤗🤗🤗   
    ${storeName} confirmara tu orden una vez recibido el mensaje, aqui se encuentran nuestras opciones disponibles👇🏼.`
    var paymentMethods= ` *Opciones de pago* 💳
    -Pago Movil:
    * 04125183752
    * CI 19616203
    * Banco de Venezuela (0102)
    
    -Dolares en Efectivo
    -Zelle:
    *przhmr@gmail.com

    `
    var socialNetworks= `Siguenos en nuestras redes:
    Twitter: http://www.twitter.com/przhmr
    Instagram: http://www.instagram.com/hhomerj`
    var footermsg = `${confirmMessage}
    ${paymentMethods}
    ${socialNetworks}`
    var number = "+584125472744"
    var message = headermsg + "\r\n\r\n" + cartItems[0].title + "-  " + "Cantidad: " + cartItems[0].quantity + "\r\n\r\n" + "Costo total "+  total + "  Dolares" + "\r\n\r\n" + footermsg  
    var url = 'https://api.whatsapp.com/send?phone=' 
     + number 
     + '&text=' 
     + encodeURIComponent(message)
     console.log(url)

     window.open(url)
     console.log(message)
  return url

 

}


    return ( 
        <div title="Cart" description="This is the Cart page" >
            <div >
                <div className="text-center">
                    <h1>Cart</h1>
                    <p>This is the Cart Page.</p>
                </div>

                <div className="row no-gutters justify-content-center">
                    <div className="col-sm-9 p-3">
                        {
                            cartItems.length > 0 ?
                            <CartProducts/> :
                            <div className="p-3 text-center text-muted">
                                Your cart is empty
                            </div>
                        }

                        { checkout && 
                            <div className="p-3 text-center text-success">
                                <p>Checkout successfull</p>
                                <Link to="/" className="btn btn-outline-success btn-sm">BUY MORE</Link>
                            </div>
                        }
                    </div>
                    {
                        cartItems.length > 0 && 
                        <div className="col-sm-3 p-3">
                            <div className="card card-body">
                                <p className="mb-1">Total Items</p>
                                <h4 className=" mb-3 txt-right">{itemCount}</h4>
                                <p className="mb-1">Total Payment</p>
                                <h3 className="m-0 txt-right">{total}</h3>
                                <hr className="my-4"/>
                                <div className="text-center">
                                    <button type="button" className="btn btn-primary mb-2" onClick={handleCheckout}>CHECKOUT</button>
                                    <a type="button" className="btn btn-primary mb-2" onClick={whatsapp}  >Enviar Whatsapp</a>
                                    <button type="button" className="btn btn-outlineprimary btn-sm" onClick={clearCart}>CLEAR</button>
                                </div>

                            </div>
                        </div>
                    }
                    
                </div>
            </div>
        </div>
     );
}
 
export default Cart;