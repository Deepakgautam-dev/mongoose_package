const mongoose = require('mongoose')

const ProductSchema = new mongoose.Schema({id:Number,name:String,price:Number,qty:Number,brand:String})

mongoose.connect('mongodb://0.0.0.0:27017/ecommerce',
	            {useNewUrlParser:true,useUnifiedTopology:true})

const ProductModel = mongoose.model('Model',ProductSchema,'products')

ProductModel.find({},(error,data)=>{
	if(typeof(data)=='object'){

		if(Array.isArray(data)==true){
			console.log('data array object');
                
                let table = []
				data.forEach((item)=>{
				    table.push(`products Id : ${item.id}, products Id : ${item.name}, products Id : ${item.price}, products Id : ${item.brand}`)
				})
			console.table(table)
		}
		else
		{
			console.log('data object')
		}
	}
	else {console.log('Some Error!')}
    mongoose.disconnect();
})
