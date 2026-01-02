import {useState,useRef} from "react";

function Language()
{

	const rName=useRef();

	const[name,setName]=useState("");
	const[py,setPy]=useState(false);
	const[ja,setJa]=useState(false);
	const[js,setJs]=useState(false);
	const[msg,setMsg]=useState("");
	
	const hName=(event)=>{setName(event.target.value);}
	const hPy=(event)=>{setPy(event.target.checked);}
	const hJa=(event)=>{setJa(event.target.checked);}
	const hJs=(event)=>{setJs(event.target.checked);}
	
	const show=(event)=>{
		event.preventDefault();
		
		if (name==="")
		{
			alert("Please Enter Name");
			setMsg("");
			rName.current.focus();
			return;
		}
		if(name.trim()==="")
		{
			alert("Name cannot be blank spaces!");
			setMsg("");
			setName("");
			rName.current.focus();
			return;	
		}

		if (!name.match(/^[A-Za-z ]+$/))
		{
			alert("Name should contain only alphabets!");
			setMsg("");
			setName("");
			rName.current.focus();
			return;	
		}

		let lang=[]

		if (py) lang.push("Python");
		if (ja) lang.push("Java");
		if (js) lang.push("JavaScript");

		let langs =lang.length > 0 ? lang.join(", "):"Sorry! I don't know any language";

		let ans = "Hi " + name + "👋     Languages you know: " + langs;
		setMsg(ans);
}

	return(
	<>
		<h1>Languages You Know APP!</h1>
		<div className="fc">
		<form onSubmit={show}>
		<label>Enter Name</label>
		<br/>
		<input type="text" placeholder="Enter Name" ref={rName} onChange={hName} value={name}/>
		<br/><br/>
		<label>SELECT LANGUAGES</label>
		<br/>
		<input type="checkbox" onChange={hPy}/>PYTHON
		<input type="checkbox" onChange={hJa}/>Java
		<input type="checkbox" onChange={hJs}/>JavaScript
		<br/><br/>
		<input type="SUBMIT"/>
		</form>
		</div>
		<h2>{msg}</h2>
	</>
	);
}

export default Language;