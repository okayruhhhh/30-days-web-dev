import {useState,useRef} from "react";
import axios from "axios";

function Converter(){
	const rAmt=useRef();
	
	const [amt,setAmt]=useState("");
	const [msg,setMsg]=useState("");
	const [type,setType]=useState("USD_TO_INR");
	const hAmt=(event)=>{setAmt(event.target.value);}

	const convert=(event)=>{
		event.preventDefault();

		if (amt===""){
			alert("Amount cannot be empty");
			setMsg("");
			rAmt.current.focus();
			return;
			}
			if (parseFloat(amt) <= 0) {
 				alert("Amount must be greater than 0");
  				setMsg("");
				setAmt("");
 				rAmt.current.focus();

  				return;
			}

	let url="https://api.exchangerate-api.com/v4/latest/USD";

	axios.get(url)
		.then(res=>{
			let aid=parseFloat(amt);
			let DOLLAR=res.data.rates.INR;

			let ans="";
			if(type==="USD_TO_INR"){
				ans="$"+aid+" = \u20b9"+ (aid*DOLLAR).toFixed(2);
				setMsg(ans);
			}else{
				ans="\u20b9"+aid+" = $"+ (aid/DOLLAR).toFixed(2);
				setMsg(ans);
			}

		})
		.catch(err=>{
			setMsg("issue : "+err);
		});
}
return(
<>
<h1>Live Currency Converter</h1>
<form onSubmit={convert}>
	<input type="number" step="0.01" placeholder="Enter Amount in $" ref={rAmt} onChange={hAmt} />
	<br/><br/>
	<select onChange={(e) => setType(e.target.value)}>
  		<option value="USD_TO_INR">USD → INR</option>
  		<option value="INR_TO_USD">INR → USD</option>
	</select>
	<input type="Submit" value="Convert"/>
</form>
<br/>
<h2>{msg}</h2>
</>
);
}
export default Converter;
