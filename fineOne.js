const mongoose = require('mongoose')

const ProductSchema = new mongoose.Schema({id:Number,name:String,price:Number,qty:Number,brand:String})

mongoose.connect('mongodb://0.0.0.0:27017/ecommerce',
	{useNewUrlParser:true,useUnifiedTopology:true})

const ProductModel = mongoose.model('Model',ProductSchema,'products')

ProductModel.findOne({id:1003},(error,data)=>{
	if(typeof(data)=='object'){
		if(Array.isArray(data)==true){
			console.log('data array object')
			console.log(data)
		}
		else
		{
			console.log('data object')
			console.log(data)
		}
	}
    mongoose.disconnect();
})
