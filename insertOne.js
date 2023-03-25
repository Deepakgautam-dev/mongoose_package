const mongoose = require('mongoose')

const ProductSchema = new mongoose.Schema({id:Number,name:String,price:Number,qty:Number,brand:String})

mongoose.connect('mongodb://0.0.0.0:27017/ecommerce',
	            {useNewUrlParser:true,useUnifiedTopology:true})

const ProductModel = mongoose.model('Model',ProductSchema,'products')

const insertOne  = new ProductModel({id:1008,name:"visalary",price:20,qty:12,brand:"Ambuja"})

// insertOne it variable name only not command !

insertOne.save((err)=>{
	if(err) throw err
		console.log('Insert Record Successfully !')

	mongoose.disconnect()
})
