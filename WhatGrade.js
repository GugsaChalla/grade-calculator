function hideGrade(){
	var holdGrade;
	holdGrade= document.getElementById("theGrade");
    holdGrade.style.visibility= "hidden";
}

function Calculate(){
	
	var finalGrade;
	var weight;
	var desired;
	
	//Get final grade
	finalGrade=document.getElementById("finalGrade").value;
	weight=document.getElementById("weight").value;
	weight=parseInt(weight);
	desiredGrade=document.getElementById("desiredGrade").value;
	finalGrade=finalGrade/100;
	
	//Calculate final grade
	var final;
	final = Math.round(((desiredGrade-(finalGrade*(100-weight)))/weight)*100);
	
	
	
	//Display Final Grade
	var holdGrade;
	holdGrade= document.getElementById("theGrade");
    holdGrade.style.visibility= "visible";
	document.getElementById("courseGrade").style.visibility="visible";
	document.getElementById("courseGrade").style.backgroundColor="yellow";
	document.getElementById("courseGrade").innerHTML=final;
	
	
}

function displayFinal(){
	var button2;
	button2= document.getElementById("Calculate");
	button2.addEventListener("click", Calculate);
}

function Clear(){
	document.getElementById("finalGrade").value="0";
	document.getElementById("weight").value="0";
	document.getElementById("desiredGrade").value="0";
	document.getElementById("theGrade").style.visibility= "hidden";
	document.getElementById("courseGrade").style.visibility="hidden";
}

function clearInput(){
	var button3;
	button3= document.getElementById("clear");
	button3.addEventListener("click", Clear);
}

window.onload=function(){
	clearInput();
	displayFinal();
	hideGrade();
}