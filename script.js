//your JS code here. If required.
document.getElementById("userform").addEventListener("submit",handle);

function handle(e) {
	e.preventDefault();

	const age=parseInt(document.getElementById("age").value);
	const name=document.getElementById("name").value;
	// console.log(age,name);

	if(!name || isNaN(age)){
		alert("Please fill both fields!");
		return ;
	}
	checkAge(age,name)
		.then((res)=>{
			alert(res);
		})
		.catch((err)=>{
			alert(err);
		});
}

function checkAge(age,name) {
	return new Promise((res,rej)=>{
		setTimeout(()=>{
			if(age>18){
			res(`Welcome, ${name}. You can vote.`);
			}
			else{
			rej(`Oh sorry ${name}. You aren't old enough.`);
			}
		},4000);
	});
}