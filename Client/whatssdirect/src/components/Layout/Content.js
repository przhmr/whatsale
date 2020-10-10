import React, {useContext} from 'react';
import {Link} from 'react-router-dom'
import CartContext from '../../context/CartContext'
import {BrowserRouter , Switch, Route} from 'react-router-dom'
import Home from '../pages/Home'
import Login from '../auth/Login'
import Register from '../auth/Register'
import Cart from '../pages/cart'


function Content(){

return(
<>
<div className="flex-grow">
        
<Switch>
    
    <Route exact path="/" component={Home} />
    <Route path="/login" component={Login} />\
    <Route path="/register" component={Register} />
    <Route path="/cart" component={Cart} />
    
</Switch>
    
    </div>
</>
)

}

export default Content;

