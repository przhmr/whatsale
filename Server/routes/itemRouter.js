const router = require("express").Router()
const auth = require("../middleware/auth")
const Item = require("../models/itemModel")



router.post("/", auth, async (req, res) => {

    try {

        
        let {title, description, price, imageUrl}= req.body.newProduct;
        
        
        //validation

        if ( !imageUrl)
        {
        console.log("Aqui esta el error")
        console.log(req.body)
        
        
        return res.status(400).json({ msg: "Not all Product Info entered" });
        }
        const newItem = new Item({

            
            title,
            description,
            price,
            imageUrl,
            userId: req.user,
        });


        const savedItem = await newItem.save();
        res.json(savedItem);
        /* console.log(savedItem) */
    }

catch(err){
    console.log(err)
    res.status(500).json({error: err.message})
   
}

   
  });

  

  router.get("/all",auth,  async (req, res) => {

    try {

        const items = await Item.find({userId: req.user})
        res.json(items);
    }

catch(err){

    res.status(500).json({error: err.message})

}

   
  });


  
  router.patch("/:id", auth, async (req, res) => {

    try {

        const item = await Item.find(
            {userId: req.user, _id: req.params_id}) 
        if(!item)
        res.status(400).json({msg: "Not found with this ID"})

        const updatedItem = await Item.findByIdAndUpdate({ _id: req.params.id },{

            title: req.body.title,
            description: req.body.description,
            price: req.body.price,
            imageUrl: req.body.imageUrl,
            inStock: req.body.inStock,

        }
         )

        const savedItem = await updatedItem.save() 
        res.json(savedItem)
    }

catch(err){

    
    res.status(500).json({error: err.message})

}

   
  });
  


  router.delete("/:id", auth, async (req, res) => {

    try {   
        
        console.log ("test test test")

        const item = await Item.find(
            {userId: req.user, _id: req.params_id}) 
        if(!item)
        res.status(400).json({msg: "Not found with this ID"})

        const deletedItem= await Item.findByIdAndDelete(req.params.id)
        res.json(deletedItem)
    }

catch(err){

    res.status(500).json({error: err.message})

}

   
  });






module.exports = router;