import React, {useContext} from 'react';

import {useHistory} from "react-router-dom";

import UserContext from "../../context/UserContext"

function AuthOptions(){
const history = useHistory();
const {userData, setUserData}= useContext(UserContext)

const register = ()=> history.push("/register");
const login = ()=> history.push("/login");
const logout = ()=>{
setUserData({

    token: undefined,
    user: undefined,

})

localStorage.setItem("auth-token","")
history.push("/login")
}
        return(

            <div className="text-center">
            { userData.user ? (
            
            <button className="bg-red-400 mr-1 rounded p-1 text-white" onClick={logout} > Cerrar Sesion</button>): 
                        
           ( <>
            <div className="flex "> 
                <button className=" w-1/2  bg-blue-300 mr-1 rounded p-1 text-white" onClick={login} >Iniciar Sesion</button>
                <button  className=" w-1/2 bg-teal-300 rounded mr-1 p-1 text-white " onClick={register}>Registrarse</button>
                </div>
            </>
           )}
</div>

        

        )} 

export default AuthOptions;