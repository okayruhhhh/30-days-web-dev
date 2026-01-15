const express=require("express");
const cors = require("cors");
const { MongoClient,ObjectId }=require("mongodb");

const app=express();
app.use(cors());
app.use(express.json());

app.post("/sm",(req,res)=>{
	let url="mongodb+srv://ruchitaparmar079_db_user:iIiNceJQaaOwQpSL@cluster0.5igxkef.mongodb.net/?appName=Cluster0";
	let con=new MongoClient(url);
	let db=con.db("movies");
	let coll=db.collection("movies");
	let data={"name":req.body.name,"year":req.body.year,"watched":false};
	coll.insertOne(data)
	.then(response=>{
		res.send(response);
		})
	.catch(error=>{
		res.send(error);
	});
	
	})

app.get("/gm",(req,res)=>{
	let url="mongodb+srv://ruchitaparmar079_db_user:iIiNceJQaaOwQpSL@cluster0.5igxkef.mongodb.net/?appName=Cluster0";
	let con=new MongoClient(url);
	let db=con.db("movies");
	let coll=db.collection("movies");
	coll.find().toArray()
	.then(response=>{
		res.send(response);
		})
	.catch(error=>{
		res.send(error);
	});
	
	})

app.delete("/dm",(req,res)=>{
	let url="mongodb+srv://ruchitaparmar079_db_user:iIiNceJQaaOwQpSL@cluster0.5igxkef.mongodb.net/?appName=Cluster0";
	let con=new MongoClient(url);
	let db=con.db("movies");
	let coll=db.collection("movies");
	let filter={"_id":new ObjectId(req.body._id)};
	coll.deleteOne(filter)
	.then(response=>{
		res.send(response);
		})
	.catch(error=>{
		res.send(error);
	});
	
	})

app.put("/um",(req,res)=>{
	let url="mongodb+srv://ruchitaparmar079_db_user:iIiNceJQaaOwQpSL@cluster0.5igxkef.mongodb.net/?appName=Cluster0";
	let con=new MongoClient(url);
	let db=con.db("movies");
	let coll=db.collection("movies");
	let filter={"_id":new ObjectId(req.body._id)};
	let up={$set:{"watched":true}};
	coll.updateOne(filter,up)
	.then(response=>{
		res.send(response);
		})
	.catch(error=>{
		res.send(error);
	});
	
	})


app.listen(9000,()=>{
	console.log("ready @ 9000");
});