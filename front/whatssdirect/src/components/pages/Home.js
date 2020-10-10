import React, {useEffect, useContext, useState} from 'react';
import {useHistory} from 'react-router-dom';
import Axios from 'axios';
import ErrorNotice from "../misc/ErrorNotice";

import UserContext from "../../context/UserContext";
import {ProductsContext} from "../../context/ProductsContext";



import Items from '../Items'
import AddButton from '../AddButton';



 function Home(){

const [image, setImage] = useState('');
const [products, setProducts]= useState({
  title: "",
  description: "",
  price: "",
  imageUrl: "",
})

/* const [isModalOpen, setIsModalOpen]= useState(true) */

const [productsc, setProductsc] = useContext(ProductsContext);



const [items, setItems]= useState([]);



const [loading, setLoading] = useState(false);
const url= "https://api.cloudinary.com/v1_1/amicoro/image/upload"
const preset ="ml_default"
const {userData}= useContext(UserContext);
const history = useHistory();
const {token, user} = userData;
const {storeName, storeLogo} = user || {};



/* const tienda = {user}  */





/*  setTimeout(() => {
  alert(user)
}, 800);
  */

const baseUrl = `http://localhost:5000/items/all` 

async function getProducts() {

  var myheaders= ({

    "x-auth-token": token, 
    "Content-Type": "application/json"
  })
  
  try{


const response = await Axios({

url: baseUrl,
headers: myheaders,
method: "GET"
})

return response.data;


}

catch(err){
console.log(err)

}
}
   

  
useEffect(()=>
{

  if (!userData.user) 

    history.push("/login");

async function loadProducts(){

  
const response = await getProducts()

if(response){

console.log(response)
setItems(response)  
setProductsc(response)


}
else{

  console.log("hay un error")
}


}


loadProducts()

 console.log(user);
  console.log(storeName); 
  console.log(storeLogo);
console.log(token);
 },[])



 const submit = async (e) => {
    
  e.preventDefault();
  
  
  const formData = new FormData();
  formData.append('file', image);
  formData.append('upload_preset', preset);
  try {
    
    const res = await Axios.post(url, formData);

    console.log(res.data) 

     products.imageUrl = res.data.secure_url;

    const newProduct = products;

    console.log(newProduct);

    const image = await Axios.post('http://localhost:5000/items',{newProduct}, {headers: {"x-auth-token": token, "Content-Type": "application/json"}} );
    
    setImage(image.data);

    



  } catch (err) {
    console.error(err);
    
  }
};


return(
  <>


<div> Hello, this is  {storeName} </div>
<img src={storeLogo} className="h-10 w-10 object-cover" alt="image"  key= "image" />
<div> This is Home</div>

<AddButton/>

 



        <label htmlFor="title">Title</label>
        <input
          id="title"
          type="text"
          value= {products.title}
          onChange={(e) => setProducts({ ...products, title: e.target.value })}
        />

        <label htmlFor="description">Description</label>
        <input
          id="description"
          type="text"
          value= {products.description}
          onChange={(e) => setProducts({ ...products, description: e.target.value })}
        />

<label htmlFor="price">Price</label>
        <input
          id="price"
          value= {products.price}
          onChange={(e) => setProducts({ ...products, price: e.target.value })}
        />
        
        <span>Browse</span>
        <input type='file'
         name='image' 
         onChange ={(e)=> setImage(e.target.files[0])} />
        

        <button onClick={submit} className='btn center'>Enviar</button>
        

  

    <Items items={items}/>

 
</>


)

}

export default Home;