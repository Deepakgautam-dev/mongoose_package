const mongoose = require('mongoose')

const ProductSchema = new mongoose.Schema({id:Number,name:String,price:Number,qty:Number,brand:String})

mongoose.connect('mongodb://0.0.0.0:27017/ecommerce',
	            {useNewUrlParser:true,useUnifiedTopology:true})

const ProductModel = mongoose.model('Model',ProductSchema,'products')

//find : Array : Collection Object
//findOne : Object

ProductModel.findOne({id:1005},(error,data)=>{
	if(typeof(data)=='object'){

		if(Array.isArray(data)==true){
			console.log('data array object');
		}
		else
		{
			console.log('data object',data)
			//Once record is found we will be updating the Record.
            // Data Object : New Value Overwrite;

			data.id = 1005;
			data.name= 'Chips';
			data.price=35,
		    data.qty = 5;
		    data.brand='Birla PVT. LTD'

            //to the local Memory 
            //if you want to commit to the Model

		    data.save((err)=>{
		    	if(err) throw err;
		    		else
		    		console.log('data update successfully')
		    	 mongoose.disconnect();
		    })
		}
	}
	else {console.log('Some Error!')}
})
