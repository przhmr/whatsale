import React, {useState, useEffect, useContext} from 'react';
import {BrowserRouter , Switch, Route} from 'react-router-dom'
import Home from '../src/components/pages/Home'
import Login from '../src/components/auth/Login'
import Register from '../src/components/auth/Register'
import Header from '../src/components/Layout/Header'
import Footer from '../src/components/Layout/Footer'
import Cart from './components/pages/cart'
import Content from './components/Layout/Content'
import UserContext from '../src/context/UserContext'
import {ProductsContext} from '../src/context/ProductsContext';
import CartContextProvider from './context/CartContext';


import Axios from 'axios'


function App() {

   

  const [userData, setUserData]= useState({

    token: undefined,
    user: undefined


  })


  const [productsc, setProductsc] = useState("");

  useEffect(()=>{

    
    const checkLoggedIn = async()=>{
    let token = localStorage.getItem("auth-token");
    if (token === null){
      localStorage.setItem("auth-token", "");
      token = "";
    }
    const tokenRes = await Axios.post(
       
      "http://localhost:5000/users/tokenisValid", 
      null,
      {headers: {"x-auth-token" : token }}
      );
      
    

    if (tokenRes.data){

    const userRes = await Axios.get(
      "http://localhost:5000/users/", 
      {headers: {"x-auth-token":token}
         
      });

      setUserData({
        token,
        user: userRes.data,


      });

    }
    };

    checkLoggedIn()

    

  }, []);


  return (

    <>
    
    <BrowserRouter>
<UserContext.Provider value={{userData,setUserData}}> 
<ProductsContext.Provider value={[productsc, setProductsc]}>
<CartContextProvider>
<div className="flex flex-col min-h-screen">
<Header />
<Content/>
    <Footer/>

    </div>
    </CartContextProvider>
    </ProductsContext.Provider>
    </UserContext.Provider>
    </BrowserRouter>
    
    </>



   
  );
}

export default App;
