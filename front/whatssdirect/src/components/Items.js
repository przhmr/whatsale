import React,{useContext} from 'react'
import AddButton from '../components/AddButton'
import {CartContext} from "../context/CartContext";
import ItemEditModal from './pages/ItemEditModal';

export default function  Items (props){

  const { addProduct, cartItems, increase } = useContext(CartContext);
   
   const isInCart = product => {
    return !!cartItems.find(item => item._id === product._id);
} 

return(


    <ul className="grid grid-cols-2  md:grid-cols-4 gap-2 p-4" >
    {props.items.map((item) => (

      <>
      <div className="  pb-1  overflow-hidden bg-white shadow-2xl rounded-lg" >
      <img src={item.imageUrl} className="h-15 w-full object-cover" alt="image"  key= "image" />
      <div className="px-2 py-1">
      <li key= "title" className="text-gray-900 font-bold text-sm  ">{item.title}</li>
      <li key= "description" className="text-gray-600 text-xs ">{item.description}</li>
      </div>
      <div className="flex items-center justify-between px-1  "></div>
      <li key= "price" className="  text-gray-800 text-center font-bold text-md w-full">$ {item.price}</li>
      
      <ItemEditModal item={item}/>


 {/* 
      {
      isInCart(item) &&
      <button       
      onClick={() => increase(item)}
      className="btn btn-primary btn-sm">Agregar mas
      </button>
        }  


      {
     !isInCart(item) && 
      <button       
      onClick={() => addProduct(item)}
      className="btn btn-primary btn-sm">Agregar al carrito
      </button>
} */}
      

      </div>
      
      
      </>
    ))}
  </ul>


)


}