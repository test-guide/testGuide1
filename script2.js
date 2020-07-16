function print(v){
	for(i in v) {
		document.write(i + ":" + v[i] + " ");
	}
	document.write("<br/>");
}
let v4 = ["zero", "one", "two", 3, 4.5, "six"];
print(v4);
let v5 = {ssn:1234, fname:"joe", lname:"garcia", city:"bville"};
print(v5);
head1 = document.getElementById("head1");
list1 = document.getElementById("list1").getElementsByTagName("li");
function f1(){
	head1.innerHTML = this.innerHTML;
}
for(i=0;i<list1.length;i++){
	list1[i].addEventListener("mouseover",f1);
}
//document.getElementById("head1").innerHTML = prompt("Suggest another heading");
function f2(){
	let v1 = document.getElementById("operand1");
	let v2 = document.getElementById("operand2");
  let v3 = document.getElementById("operator");
	if(v1.value == "") {
		alert("Error: Field may not be left empty.");
    v1.style.border = "solid 2px red";
		return false;
	}
  else if((parseInt(v1.value) < 0) || (parseInt(v1.value) > 99)) {
    alert("Error: Operand is supposed to be between 0 and 99.");
    v1.style.border = "solid 2px red";
		return false;
  }
	else v1.style.border = "solid 1px grey";
	if(v2.value == ""){
		alert("Error: Field may not be left empty.");
		v2.style.border = "solid 2px red";
		return false;
	}
  else if((parseInt(v2.value) < 0) || (parseInt(v2.value) > 99)) {
    alert("Error: Operand is supposed to be between 0 and 99.");
    v2.style.border = "solid 2px red";
		return false;
  }
	else v2.style.border = "solid 1px grey";
	if(v3.value == "") {
		alert("Error: Field may not be left empty.");
		v3.style.border = "solid 2px red";
		return false;
	}
  else if(v3.value == "add"){
    let sum = parseInt(v1.value) + parseInt(v2.value);
    alert("Result: " + sum);
    return true;
  }
  else if(v3.value == "sub"){
    let sum = parseInt(v1.value) - parseInt(v2.value);
    alert("Result: " + sum);
    return true;
  }
  else if(v3.value == "mul"){
    let sum = parseInt(v1.value) * parseInt(v2.value);
    alert("Result: " + sum);
    return true;
  }
	else {
		alert("Error: Incorrect operator entered.");
		return false;
	}
}
