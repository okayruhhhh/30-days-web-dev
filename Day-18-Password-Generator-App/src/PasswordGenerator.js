import {useState} from "react";
import {ToastContainer,toast, Slide, Zoom, Flip, Bounce } from 'react-toastify';

function PasswordGenerator()
{
	const[length,setLength]= useState("6");
	const[uc,setUc]= useState(false);
	const[di,setDi]= useState(false);
	const[sp,setSp]= useState(false);
	const[msg,setMsg]= useState("");

	const hLength=(event)=>{setLength(event.target.value);}
	const hUc=(event)=>{setUc(event.target.checked);}
	const hDi=(event)=>{setDi(event.target.checked);}
	const hSp=(event)=>{setSp(event.target.checked);}

	const show=(event)=>{
			event.preventDefault();
	
			let le=parseInt(length);
			let text="abcdefghijklmnopqrstuvwxyz"
			if(uc)	
				text=text+text.toUpperCase();	
			if(di)	
				text=text+"0123456789";
			if(sp)	
				text=text+"!@#$%^&*({}:<>";
			let pw="";
			for (let i=1;i<=le; i++)
			{
				let r=parseInt( Math.random()*text.length);
				pw=pw+text[r]
			}

			setMsg(pw);
			navigator.clipboard.writeText(pw);
			toast.info("Password copied to clipboard!",{position:"bottom-center",autoClose:2000,hideProgressBar:true,transition:Slide});
	}
	
	return(
	<>
	<ToastContainer/>
	<div className="container">
	<h1>Password Generator</h1>
	<form onSubmit={ show }>
		<label>Select Password Length </label>
		<select onChange={hLength}>
			<option value="6">6</option>
			<option value="7">7</option>
			<option value="8">8</option>
			<option value="9">9</option>
			<option value="10">10</option>
			<option value="11">11</option>
			<option value="12">12</option>
		</select>
		<br/><br/>

		<input type="checkbox"	onChange={ hUc}/>UpperCase
		<input type="checkbox"	onChange={ hDi }/>Digits
		<input type="checkbox"	onChange={ hSp }/>Special
		<br/><br/>
		<input type="Submit" value="Generate Password" /> 
	</form>
		<h2>{msg}</h2>
	</div>
	</>
	);
		
}
export default PasswordGenerator;