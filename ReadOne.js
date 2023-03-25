const mongoose = require('mongoose')

const ProductSchema = new mongoose.Schema({id:Number,name:String,price:Number,qty:Number,brand:String})

mongoose.connect('mongodb://0.0.0.0:27017/ecommerce',
	            {useNewUrlParser:true,useUnifiedTopology:true})

const ProductModel = mongoose.model('Model',ProductSchema,'products')

ProductModel.findOne({id:1001},(error,data)=>{
	if(typeof(data)=='object'){

		if(Array.isArray(data)==true){
			console.log('data array object');
		}
		else
		{
			console.log('data object')
			console.log(`products Id : ${data.id} \n products Id : ${data.name} \n products Id : ${data.price} \n products Id : ${data.brand} \n`)
		}
	}
	else {console.log('Some Error!')}
    mongoose.disconnect();
})
