import {useState} from "react";
import axios from "axios";

function Bitcoin()
{
	const [curr,setCurr]=useState("usd");
	const[msg,setMsg]=useState("");

	const hCurr=(event)=>{setCurr(event.target.value);}

	const show=(event)=>{
		event.preventDefault();

		let url="https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies="+curr;

		axios.get(url)
		.then(res=>{
			let symbol="";
			if(curr==="usd") symbol= "\u0024";
			else if (curr==="gbp") symbol="\u00a3";
			else if (curr==="eur") symbol="\u20ac";
			else  symbol="\u20b9";
			setMsg(symbol+" "+ res.data["bitcoin"][curr]);
		})
		.catch(err=>{
			setMsg("issue : "+err);
		});
}

return(
<>
	<h1>BITCOIN PRICE APP</h1>
	<form onSubmit={show}>
		<input type="radio" name="curr" value="usd" defaultChecked={true} onChange={hCurr}/>USD
		<input type="radio" name="curr" value="gbp" onChange={hCurr}/>GBP
		<input type="radio" name="curr" value="eur" onChange={hCurr}/>EUR
		<input type="radio" name="curr" value="inr" onChange={hCurr}/>INR
		<br/><br/>
		<input type="submit" value="GET PRICE"/>
	</form>
	<br/>
	<h2>{msg}</h2>	
	<br/>
</>
);
}
export default Bitcoin;