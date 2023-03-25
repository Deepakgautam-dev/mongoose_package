const mongoose = require('mongoose')
const http = require('http')

const ProductSchema = new mongoose.Schema({id:Number,name:String,price:Number,qty:Number,brand:String})

mongoose.connect('mongodb://0.0.0.0:27017/ecommerce',
	{useNewUrlParser:true,useUnifiedTopology:true})

const ProductModel = mongoose.model('Model',ProductSchema,'products')
let obj = null

ProductModel.find({},(error,data)=>{
	if(typeof(data)=='object'){
		if(Array.isArray(data)==true){
			console.log('data array object')
			obj= data
		}
		else
		{
			console.log('data object')
			obj=data
		}
	}

})

http.createServer((req,res)=>{
	res.end(JSON.stringify(obj))

}).listen(8080,()=>console.log('8080'))
