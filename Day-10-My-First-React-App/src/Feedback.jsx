import {useState,useRef} from "react";

function Feedback()
{

	const rName=useRef();

	const[name,setName]=useState("");
	const[feedback,setFeedback]=useState("excellent");
	const[msg,setMsg]=useState("");
	
	const hName=(event)=>{setName(event.target.value);}
	const hFeedback=(event)=>{setFeedback(event.target.value);}
	
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

		if (! name.match(/^[A-Za-z ]+$/))
		{
			alert("Name should contain only alphabets!");
			setMsg("");
			setName("");
			rName.current.focus();
			return;	
		}

		let ans="Hiii " + name + " 👋 Thanks for your feedback! You rated it as " + feedback + ".";

		setMsg(ans);
}

	return(
	<>
		<h1>Feedback Please!</h1>
		<div className="fc">
		<form onSubmit={show}>
		<label>Enter Name</label>
		<br/>
		<input type="text" placeholder="Enter Name" ref={rName} onChange={hName} value={name}/>
		<br/><br/>
		<label>SELECT FEEDBACK</label>
		<br/>
		<input type="radio" name="fb" value="excellent" defaultChecked={true} onChange={hFeedback}/>Excellent
		<input type="radio" name="fb" value="superb" onChange={hFeedback} />Superb
		<input type="radio" name="fb" value="good" onChange={hFeedback} />Good
		<br/><br/>
		<input type="SUBMIT"/>
		</form>
		</div>
		<h2>{msg}</h2>
	</>
	);
}

export default Feedback;