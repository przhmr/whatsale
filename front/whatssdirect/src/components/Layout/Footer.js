import React, {useContext} from 'react';
import {Link} from 'react-router-dom'
import CartContext from '../../context/CartContext'
import CartContextProvider from '../../context/CartContext';
import { ReactComponent as CajaLogo} from "../../assets/svg/cajalogo.svg"
import ItemAddModal from '../pages/cart/ItemAddModal'
function Footer(){

 

return(
<>
<div className=" sticky bottom-0 flex ">
        
    <div className="text-center font-light w-3/4 ">TienditasStore 2020</div>
    
    
    {/* <div className="m-1  ">
    <Link to='/cart' className="   p-1 -mt-10 rounded-full h-12 w-12 flex items-center justify-center bg-green-600 text-white shadow-2xl   ">  <CajaLogo/>
    <div className="bg-blue-500 rounded h-5 w-5 -mt-10 "> 1 </div>
     </Link> 
    </div> */}

    <ItemAddModal/>
    
     
    </div>
</>
)

}

export default Footer;

