import React,{useContext} from "react"
import { Link } from 'react-router-dom';
import {ProductsContext} from "../../context/ProductsContext";
import UserContext from "../../context/UserContext";
import Axios from 'axios';



 function ItemEditModal(props){

  const {userData}= useContext(UserContext);
  const {token, user} = userData;
  let [productsc, setProductsc] = useContext(ProductsContext);
  /* const {  } = useContext(CartContext); */
  const [showModal, setShowModal] = React.useState(false);  
  
  let productsm = productsc || {};
  

  const test=()=>{

    console.log( productsc[0])

  }

  const borrar =async (e,id )=>{
    
try{

  
  
  const res = await Axios.delete('http://localhost:5000/items/${id}',{productsc}, {headers: {"x-auth-token": token, "Content-Type": "application/json"}} );
  console.log(res.data) 

}

catch(err){
  console.error(err);

}

  }
 

return(

    <>
    
    <button onClick={() => setShowModal(true)} className=' '>
       Editar
       
      
  	</button>
    {showModal ? (<> 
    <div
      className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
      
    >
      <div className="relative w-auto my-6 mx-auto max-w-3xl">
        {/*content*/}
        <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
          {/*header*/}
          <div className="flex items-start justify-between p-5 border-b border-solid border-gray-300 rounded-t">
            <h3 className="text-xl font-semibold">
              Editar Articulo
            </h3>
            <button
              className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
              onClick={() => setShowModal(false)}
            >
              <span className="bg-transparent text-black opacity-5 h-6 w-6 text-xl block outline-none focus:outline-none">
                x
              </span>
            </button>
          </div>
          {/*body*/}
          <div className="relative p-6 flex-auto">
            <p className="my-4 text-gray-600 text-lg leading-relaxed">
             

              
        <label htmlFor="title">Title</label>
        <input
          id="title"
          type="text"
          value= {productsm.title}
          onChange={(e) => setProductsc({ ...productsm, title: e.target.value })}
        />
              

        

        <label htmlFor="description">Description</label>
        <input
          id="description"
          type="text"
          value= {productsm.description}
          onChange={(e) => setProductsc({ ...productsm, description: e.target.value })}
        />

<label htmlFor="price">Price</label>
        <input
          id="price"
          value= {productsm.price}
          onChange={(e) => setProductsc({ ...productsm, price: e.target.value })}
        />
        
        {/* <span>Browse</span>
        <input type='file'
         name='image' 
         onChange ={(e)=> setImage(e.target.files[0])} />
         */}

        <button onClick={test} className='btn center'>Enviar</button>       
        <button onClick={borrar} className= 'btn center'> Borrar </button>     


            </p>
          </div>
          
          <div className="flex items-center justify-end p-6 border-t border-solid border-gray-300 rounded-b">
            
                 
            
            
          </div>
        </div>
      </div>
    </div>
    <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>

  </>) : null}
    
</>


)

                      }


export default ItemEditModal;