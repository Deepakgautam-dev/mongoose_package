const mongoose = require('mongoose')

const ProductSchema = new mongoose.Schema({id:Number,name:String,price:Number,qty:Number,brand:String})

mongoose.connect('mongodb://0.0.0.0:27017/ecommerce',
	            {useNewUrlParser:true,useUnifiedTopology:true})

const ProductModel = mongoose.model('Model',ProductSchema,'products')

//How to Delete the Record
//remove Method is deprecated, we can use deleteOne, deleteMany

ProductModel.deleteOne({id:1007},(error,data)=>{
	if(error) throw error;
	else console.log('Recoud delete successfully !')
	mongoose.disconnect();
})
