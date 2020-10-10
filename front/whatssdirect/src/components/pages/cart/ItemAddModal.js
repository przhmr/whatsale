import React,{useContext} from "react"
import CartProducts from './CartProducts';
import { CartContext } from '../../../context/CartContext';
import { ReactComponent as CajaLogo} from "../../../assets/svg/cajalogo.svg"
import { ReactComponent as Whatsapplogo} from "../../../assets/svg/whatsapplogo.svg"
import { ReactComponent as Trashcanlogo} from "../../../assets/svg/trashcan.svg"
import { ReactComponent as Articulologo} from "../../../assets/svg/articulologo.svg"
import { Link } from 'react-router-dom';


 function ItemAddModal(){

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

    const [showModal, setShowModal] = React.useState(false);
    
    const Modal=()=>{

      if(cartItems.length > 0){

        setShowModal(true)  

      }
      else{

        console.log("Carrito vacio")
        alert("El carrito esta vacio")
      }

         

    }

   


return(

    <>
    
    <button onClick={Modal} className='  m-2 -mt-10 relative overflow-visible p-1  rounded-full h-12 w-12 flex items-center justify-center bg-green-600 text-white shadow-2xl '>
       <CajaLogo/>
       
      <div class="absolute top-0 right-0 -mt-1 -mr-1 h-5 w-5 bg-blue-500 rounded-full flex items-center justify-center">1</div>
  	</button>
{showModal  ? (<>
    <div
      className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
      
    >
      <div className="relative w-auto my-6 mx-auto max-w-3xl">
        {/*content*/}
        <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
          {/*header*/}
          <div className="flex items-start justify-between p-5 border-b border-solid border-gray-300 rounded-t">
            <h3 className="text-xl font-semibold">
              Carrito de Compras
            </h3>
            <button
              className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
              onClick={() => setShowModal(false)}
            >
              <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                ×
              </span>
            </button>
          </div>
          {/*body*/}
          <div className="relative p-6 flex-auto">
            <p className="my-4 text-gray-600 text-lg leading-relaxed">
             

          

          {
                            cartItems.length > 0 ?
                            <CartProducts/> :
                            <div className="p-3 text-center text-muted">
                                Tu carrito esta vacio :(
                                
                            </div>
                            
                        }


{ checkout && 
                            <div className="p-3 text-center text-success">
                                <p>Checkout successfull</p>
                                <Link to="/" className="btn btn-outline-success btn-sm">BUY MORE</Link>
                            </div>
                        }
{
                            cartItems.length > 0 ?
                            <><p className="mb-1">Total Items</p>
              <h4 className=" mb-3 txt-right">{itemCount}</h4>
              <p className="mb-1">Total Payment</p>
              <h3 className="m-0 txt-right">{total}</h3>
              <hr className="my-4"/> </>:
                            <div className="p-3 text-center text-muted">
                                
                                
                            </div>
                            
                        }
            
              
                    


            </p>
          </div>
          
          <div className="flex items-center justify-end p-6 border-t border-solid border-gray-300 rounded-b">
            
            
            
          {
                            cartItems.length > 0 ?
                            <><button
              className=" hover:shadow-lg rounded bg-red-500 text-white font-bold uppercase px-6 py-3 text-sm outline-none focus:outline-none mr-1 mb-1"
              type="button"
              style={{ transition: "all .15s ease" }}
              onClick={clearCart}
            >
              <Trashcanlogo/>
            </button>
            <button
              className=" flex bg-green-500 text-white active:bg-green-600 font-bold uppercase text-sm px-3 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1"
              type="button"
              style={{ transition: "all .15s ease" }}
              onClick={ whatsapp}
            >
               <Whatsapplogo className="mx-1"/>  Ordenar via whatsapp 
            </button></> :
                            <button
                            className=" flex bg-green-500 text-white active:bg-green-600 font-bold uppercase text-sm px-3 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1"
                            type="button"
                            style={{ transition: "all .15s ease" }}
                            onClick={ () => setShowModal(false)}
                          >
                             <Articulologo />  Agregar mas productos 
                          </button>
                            
                        }
            
            
          </div>
        </div>
      </div>
    </div>
    <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
  </>) : null}
    
</>


)


}

export default ItemAddModal;