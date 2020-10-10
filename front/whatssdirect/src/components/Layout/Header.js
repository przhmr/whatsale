import React, {useContext} from 'react';
import {Link} from 'react-router-dom'
import AuthOptions from '../auth/AuthOptions'
import CartContext from '../../context/CartContext'

function Header(){

  

return(
<>
<div className="sticky flex mb-4 top-0 bg-white py-4 px-1 shadow-md">
    
    <Link to="/" className=" flex w-1/3" > TO home</Link>
    <div className=" flex w-1/3">CatalogoenLinea</div>
    
    <AuthOptions/>
    </div>
</>
)

}

export default Header;

