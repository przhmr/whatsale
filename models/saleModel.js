const mongoose = require('mongoose');

const saleSchema = new mongoose.Schema({

userId:{
        type: String,
        required: true,
        },
    

clientName:{
    type: String,
           
},

clientEmail:{
    type: String,
           
},

cartItems:[],

itemCount:{
    type: Number
},

purchaseVerified: {

type: Boolean

},


total :{
    type: String,
    
       
},




});

module.exports= Sale = mongoose.model("sales", saleSchema)