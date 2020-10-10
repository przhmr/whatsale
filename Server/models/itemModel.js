const mongoose = require('mongoose');

const itemSchema = new mongoose.Schema({

userId:{
        type: String,
        required: true,
        },
    

title:{
    type: String,
    
       
},

description:{
    type: String,
    
       
},

price:{
    type: String,
    
       
},



imageUrl:{

    type: String,

},


inStock:{

    type: Boolean,

}

});

module.exports= item = mongoose.model("item", itemSchema)