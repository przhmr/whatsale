import React, { useState, useContext } from "react";
import Axios from "axios";
import ErrorNotice from "../misc/ErrorNotice";


export default function Register() {

  const url= "https://api.cloudinary.com/v1_1/amicoro/image/upload"
  const preset ="ml_default"
  const [image, setImage] = useState('');

  const [user, setUser]= useState({
    email: "",
    password: "",
    passwordCheck: "",
    firstName: "",
    lastName: "",
    storeName: "",
    storeLogo: "",

    });
  
  const [error, setError]= useState();


 
 

  const submit = async (e) => {
    e.preventDefault();
  
  const formData = new FormData();
  formData.append('file', image);
  formData.append('upload_preset', preset);

    try{

    const res = await Axios.post(url, formData);
    console.log(res.data) 

    user.storeLogo = res.data.secure_url;

      const newUser = {user};
      console.log(newUser)
      await Axios.post("http://localhost:5000/users/register", newUser);
      /* const loginRes = await Axios.post("http://localhost:5000/users/login", {
        user
      });
      setUserData({
        token: loginRes.data.token,
        user: loginRes.data.user,
      });
      localStorage.setItem("auth-token", loginRes.data.token);
      history.push("/") */
    }

    catch(err){

err.response.data.msg && setError(err.response.data.msg)
console.log(err)

    }
  };

  return (
    <div className="page">
      <h2 className="text-center">Register</h2>

      {error && (

        <ErrorNotice message={error} clearError={ () => setError(undefined)}
        
        />
    )} 

      
      
      <form className="form flex flex-col" onSubmit={submit}>
        
        
        <div>
        <label htmlFor="register-email">Email</label>
        <input
          id="register-email"
          type="email"
          onChange={(e) => setUser({ ...user, email: e.target.value })}
        />

</div>

<div>
        <label htmlFor="register-email">Primer Nombre</label>
        <input
          id="register-first-name"
          type="text"
          onChange={(e) => setUser({ ...user, firstName: e.target.value })}
        />

</div>

<div>
        <label htmlFor="register-password">Password</label>
        <input
          id="register-password"
          type="password"
          onChange={(e) => setUser({ ...user, password: e.target.value })}
        />

</div>
<div>
<label htmlFor="register-password">Verificar Password</label>
        <input
          type="password"
          
          onChange={(e) => setUser({ ...user, passwordCheck: e.target.value })}
        />
</div>


<span>Browse</span>
        <input type='file'
         name='image' 
         onChange ={(e)=> setImage(e.target.files[0])} />
        

        <input type="submit" value="Register" className="bg-teal-500 rounded mx-1 w-40 text-white justify-center" />
      </form>
    </div>
  );
}