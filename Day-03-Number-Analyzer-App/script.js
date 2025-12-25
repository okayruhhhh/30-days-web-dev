let num1=document.getElementById("num1");
let num2=document.getElementById("num2");
let msg=document.getElementById("msg");

function disable()
{	num2.disabled=true;
	num2.value="";
}

function enable()
{	num2.disabled=false;
}

function validateN1(){
	if(num1.value==="")
	{
		alert("First Number cannot be empty");
		msg.innerHTML="";
		num1.focus();
		return false;
	}		
	if(num1.value.trim()==="")
	{
		alert("First Number cannot be blank spaces");
		msg.innerHTML="";
		num1.focus();
		return false;
	}
	return true;
}

function validateN2(){
	if(num2.value==="")
	{
		alert("Second Number cannot be empty");
		msg.innerHTML="";
		num2.focus();
		return false;
	}		
	if(num2.value.trim()==="")
	{
		alert("Second Number cannot be blank spaces");
		msg.innerHTML="";
		num2.focus();
		return false;
	}
	return true;
}				

function EvenOdd()
{
	disable();
	if(!validateN1()){
		return;
	}

	let n1=parseInt(num1.value);
	if(n1%2===0)	msg.innerHTML=n1 + " is an EVEN number!"
	else msg.innerHTML=n1 + " is an ODD number!"
}

function fact(){
	disable();
	if(!validateN1()) 	return;

	let n=parseInt(num1.value);
	let f=1	
	if (n < 0) {
    		msg.innerHTML = "Factorial not defined for negative numbers.";
   		 return;
	}
	for(let i=1;i<=n;i++)
	{
	f=f*i;
	}
	msg.innerHTML="Factorial of "+n+ " is 	" +f;
}

function findMin(){
		enable();
		if(!validateN1())	return;
		if(!validateN2())	return;
	
	let n1=parseFloat(num1.value);
	let n2=parseFloat(num2.value);
	
	let res=Math.min(n1,n2)
	msg.innerHTML=res+" ~> Minimum Number."
}


function findSum(){
	disable();
	if(!validateN1())	return;
	
	let n=parseInt(num1.value);

	let sum=0;
	let i=1;
	for(i=1;i<=n;i++)
	{	
		sum=sum+i;
	}
	msg.innerHTML=sum;
}

function add(){
	enable();
	if(!validateN1())	return;
	if(!validateN2())	return;
	
	let n1=parseFloat(num1.value);
	let n2=parseFloat(num2.value);
	
	let res=n1+n2;
	msg.innerHTML=res;
}


function prime()
{			
	disable();
	if(!validateN1())	return;
	let n=parseInt(num1.value);

    	if (n <= 1) {
       		 msg.innerHTML = n + " is NOT a prime number.";
        return;
   	 }

	for(let i=2;i<n;i++)
	{
		if(n%i===0){
			msg.innerHTML=n+" is NOT a prime number."
			return;
		}
	}
	
	msg.innerHTML=n+" IS a prime number.";
}
			
