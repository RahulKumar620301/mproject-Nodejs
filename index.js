const mongoose = require('mongoose'); //package installition
mongoose.connect('mongodb://127.0.0.1:27017/demo');

const user = mongoose.model('user', { name: String,age:Number,gender:String });
//user= database, data=collection

// const data = new user({ name: 'chidhu',age:20,gender:'F'}); //data insertion
// data.save().then(() => console.log('Record Saved')); //data saving

// user.find({gender:'M'},(err,data)=>{
// 	if(!err)
// 	{
// 		console.log(data);
// 	}
// 	else{
// 		console.log("Error in code")
// 	}
// })


// user.find((err,data)=>{
// 	if(!err)
// 	{
// 		console.log(data);
// 	}
// 	else{
// 		console.log("Error in code")
// 	}
// }).sort({age:1}).limit(2)



// let i="642c1b23cfa9d058c75f6acb";
// user.deleteOne({_id:i},(err)=>{
// 	if(!err)
// 	{
// 		console.log("Record deleted");
// 	}
	
// })


// let i="642c1b8ccb68f50ecdd34216";
// user.updateOne({_id:i},{age:30},(err)=>{
// 	if(!err)
// 	{
// 		console.log("Record Updated");
// 	}
	
// })