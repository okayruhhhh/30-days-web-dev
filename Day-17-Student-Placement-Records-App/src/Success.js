import { useState,useRef} from "react";
import db from "./Firebase";
import {set,ref} from "firebase/database";

function Success()
{
	const rName=useRef();
	const rCompany=useRef();
	const rCtc=useRef();

	const [name,setName]=useState("");
	const [company,setCompany]=useState("");
	const [ctc,setCtc]=useState("");
	const [msg,setMsg]=useState("");

	const hName=(event)=>{setName(event.target.value);}
	const hCompany=(event)=>{setCompany(event.target.value);}
	const hCtc=(event)=>{setCtc(event.target.value);}

	const save=(event)=>{
		event.preventDefault();
			
		if(name==="")
		{
			alert("Please Enter Student's name!");
			setMsg("");
			rName.current.focus();
			return;
		}	
		if(name.trim()==="")
		{
			alert("Name cannot be blank spaces!");
			setMsg("");
			rName.current.focus();
			return;
		} 
		if(company==="")	{
			alert("Please enter company name!");
			setMsg("");
			rCompany.current.focus();
			return;
		}
		if(company.trim()==="")
		{
			alert("Company name cannot be blank spaces!");
			setMsg("");
			rCompany.current.focus();
			return;
		}

		if(ctc==="")
		{
			alert("Please Enter CTC");
			setMsg("");
			rCtc.current.focus();
			return;
		}

		let data={name,company,ctc};
		let node = name + "--" +new Date().toString();
		let r=ref(db,"student/"+node);
		
		set(r,data);
		setMsg("Congratulations!");
		setName("");
		setCompany("");
		setCtc("");
		rName.current.focus();
	}

	return(
	<>
	<h1>Student Placement Records</h1>
	<form onSubmit={save}>
		<input type="text" placeholder="Enter Student's Name" ref={rName}	onChange={hName}	value={name}/>
		<br/><br/>
		<input type="text" placeholder="Enter Company Name" ref={rCompany}	onChange={hCompany}	value={company}/>
		<br/><br/>
		<input type="number"	step="0.01" placeholder="Enter CTC" ref={rCtc}	onChange={hCtc}	value={ctc}/>
		<br/><br/>
		<input type="Submit"/>
		<br/><br/>
	</form>
		<h2>{msg}</h2>
	</>

	
	);

}
export default Success;