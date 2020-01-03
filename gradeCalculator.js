var count =2;

function hideGrade(){
	var holdGrade;
	holdGrade= document.getElementById("theGrade");
    holdGrade.style.visibility= "hidden";
}

function hideThirdGrade(){
	var ThirdGrade;
	ThirdGrade= document.getElementById("3rdGrade");
    ThirdGrade.style.display= "none";
}

function showThirdGrade(){
	var ThirdGrade;
	ThirdGrade= document.getElementById("3rdGrade");
	ThirdGrade.style.display= "initial";
	document.getElementById("More3").style.display="none";
	document.getElementById("More4").style.display="initial";
}
function hideFourthGrade(){
	var FourthGrade;
	FourthGrade= document.getElementById("4thGrade");
    FourthGrade.style.display= "none";
	document.getElementById("More4").style.display="none";
}

function showFourthGrade(){
	var FourthGrade;
	FourthGrade= document.getElementById("4thGrade");
	FourthGrade.style.display= "initial";
	document.getElementById("More4").style.display="none";
	document.getElementById("More5").style.display="initial";
}
function hideFifthGrade(){
	var FifthGrade;
	FifthGrade= document.getElementById("5thGrade");
    FifthGrade.style.display= "none";
	document.getElementById("More5").style.display="none";
}

function showFifthGrade(){
	var FifthGrade;
	FifthGrade= document.getElementById("5thGrade");
	FifthGrade.style.display= "initial";
	document.getElementById("More5").style.display="none";
	document.getElementById("More6").style.display="initial";
}
function hideSixthGrade(){
	var SixthGrade;
	SixthGrade= document.getElementById("6thGrade");
    SixthGrade.style.display= "none";
	document.getElementById("More6").style.display="none";
}

function showSixthGrade(){
	var SixthGrade;
	SixthGrade= document.getElementById("6thGrade");
	SixthGrade.style.display= "initial";
	document.getElementById("More6").style.display="none";
	document.getElementById("More7").style.display="initial";
}

function hideSeventhGrade(){
	var SeventhGrade;
	SeventhGrade= document.getElementById("7thGrade");
    SeventhGrade.style.display= "none";
	document.getElementById("More7").style.display="none";
}

function showSeventhGrade(){
	var SeventhGrade;
	SeventhGrade= document.getElementById("7thGrade");
	SeventhGrade.style.display= "initial";
	document.getElementById("More7").style.display="none";
	document.getElementById("More8").style.display="initial";
}

function hideEigthGrade(){
	var EigthGrade;
	EigthGrade= document.getElementById("8thGrade");
    EigthGrade.style.display= "none";
	document.getElementById("More8").style.display="none";
}

function showEigthGrade(){
	var EigthGrade;
	EigthGrade= document.getElementById("8thGrade");
	EigthGrade.style.display= "initial";
	document.getElementById("More8").style.display="none";
	document.getElementById("More9").style.display="initial";
}

function hideNinthGrade(){
	var NinthGrade;
	NinthGrade= document.getElementById("9thGrade");
    NinthGrade.style.display= "none";
	document.getElementById("More9").style.display="none";
}

function showNinthGrade(){
	var NinthGrade;
	NinthGrade= document.getElementById("9thGrade");
	NinthGrade.style.display= "initial";
	document.getElementById("More9").style.display="none";
	document.getElementById("More10").style.display="initial";
}

function hideTenthGrade(){
	var TenthGrade;
	TenthGrade= document.getElementById("10thGrade");
    TenthGrade.style.display= "none";
	document.getElementById("More10").style.display="none";
}

function showTenthGrade(){
	var TenthGrade;
	TenthGrade= document.getElementById("10thGrade");
	TenthGrade.style.display= "initial";
	document.getElementById("More10").style.display="none";
}

function more3rdGrade(){
	var button1;
	button1= document.getElementById("More3");
	button1.addEventListener("click", showThirdGrade);
	count++;
}

function more4thGrade(){
	var button1;
	button1= document.getElementById("More4");
	button1.addEventListener("click", showFourthGrade);
	count++;
}

function more5thGrade(){
	var button1;
	button1= document.getElementById("More5");
	button1.addEventListener("click", showFifthGrade);
	count++;
}

function more6thGrade(){
	var button1;
	button1= document.getElementById("More6");
	button1.addEventListener("click", showSixthGrade);
	count++;
}

function more7thGrade(){
	var button1;
	button1= document.getElementById("More7");
	button1.addEventListener("click", showSeventhGrade);
	count++;
}

function more8thGrade(){
	var button1;
	button1= document.getElementById("More8");
	button1.addEventListener("click", showEigthGrade);
	count++;
}

function more9thGrade(){
	var button1;
	button1= document.getElementById("More9");
	button1.addEventListener("click", showNinthGrade);
	count++;
}

function more10thGrade(){
	var button1;
	button1= document.getElementById("More10");
	button1.addEventListener("click", showTenthGrade);
	count++;
}

function Calculate(){
	
	var grade1;
	var weight1;
	
	var grade2;
	var weight2;
	
	var grade3;
	var weight3;
		
	var grade4;
	var weight4;
	
	
	var grade5;
	var weight5;
	
	var grade6;
	var weight6;
	
	var grade7;
	var weight7;
	
	var grade8;
	var weight8;
	
	var grade9;
	var weight9;
	
	var grade10;
	var weight10;
	
	//Get first grade and it's weight
	grade1=document.getElementById("grade1").value;
	weight1=document.getElementById("weight1").value;
	weight1=parseInt(weight1);
	
	//Get second grade and it's weight
	grade2=document.getElementById("grade2").value;
	weight2=document.getElementById("weight2").value;
	weight2=parseInt(weight2);
	
	//Get third grade and it's weight
	grade3=document.getElementById("grade3").value;
	weight3=document.getElementById("weight3").value;
	weight3=parseInt(weight3);
	
	//Get fourth grade and it's weight
	grade4=document.getElementById("grade4").value;
	weight4=document.getElementById("weight4").value;
	weight4=parseInt(weight4);
	
	//Get fifth grade and it's weight
	grade5=document.getElementById("grade5").value;
	weight5=document.getElementById("weight5").value;
	weight5=parseInt(weight5);
	
	//Get sixth grade and it's weight
	grade6=document.getElementById("grade6").value;
	weight6=document.getElementById("weight6").value;
	weight6=parseInt(weight6);
	
	//Get seventh grade and it's weight
	grade7=document.getElementById("grade7").value;
	weight7=document.getElementById("weight7").value;
	weight7=parseInt(weight7);
	
	//Get eigth grade and it's weight
	grade8=document.getElementById("grade8").value;
	weight8=document.getElementById("weight8").value;
	weight8=parseInt(weight8);
	
	//Get ninth grade and it's weight
	grade9=document.getElementById("grade9").value;
	weight9=document.getElementById("weight9").value;
	weight9=parseInt(weight9);
	
	//Get tenth grade and it's weight
	grade10=document.getElementById("grade10").value;
	weight10=document.getElementById("weight10").value;
	weight10=parseInt(weight10);
	
	//Calculate final grade
	var final;
	final = Math.round(((grade1*(weight1/100)+grade2*(weight2/100)+grade3*(weight3/100)+grade4*(weight4/100)+grade5*(weight5/100)+grade6*(weight6/100)+grade7*(weight7/100)+grade8*(weight8/100)+grade9*(weight9/100)+grade10*(weight10/100))/(weight1+weight2+weight3+weight4+weight5+weight6+weight7+weight8+weight9+weight10))*100);
	
	
	
	
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
//Clear's all input
function Clear(){
	document.getElementById("grade1").value="0";
	document.getElementById("weight1").value="0";
	document.getElementById("grade2").value="0";
	document.getElementById("weight2").value="0";
	document.getElementById("weight3").value="0";
	document.getElementById("grade3").value="0";
	document.getElementById("grade4").value="0";
	document.getElementById("weight4").value="0";
	document.getElementById("grade5").value="0";
	document.getElementById("weight5").value="0";
	document.getElementById("weight6").value="0";
	document.getElementById("grade6").value="0";
	document.getElementById("grade7").value="0";
	document.getElementById("weight7").value="0";
	document.getElementById("grade8").value="0";
	document.getElementById("weight8").value="0";
	document.getElementById("weight9").value="0";
	document.getElementById("grade9").value="0";
	document.getElementById("weight10").value="0";
	document.getElementById("grade10").value="0";
	hideThirdGrade();
	hideFourthGrade();
	hideFifthGrade();
	hideSixthGrade();
	hideSeventhGrade();
	hideEigthGrade();
	hideNinthGrade();
	hideTenthGrade();
	document.getElementById("theGrade").style.visibility= "hidden";
	document.getElementById("courseGrade").style.visibility="hidden";
	document.getElementById("More3").style.display="initial";
}

function clearInput(){
	var button3;
	button3= document.getElementById("clear");
	button3.addEventListener("click", Clear);
}


window.onload=function(){
	clearInput();
	displayFinal();
	more3rdGrade();
	more4thGrade();
	more5thGrade();
	more6thGrade();
	more7thGrade();
	more8thGrade();
	more9thGrade();
	more10thGrade();
	hideGrade();
	hideThirdGrade();
	hideFourthGrade();
	hideFifthGrade();
	hideSixthGrade();
	hideSeventhGrade();
	hideEigthGrade();
	hideNinthGrade();
	hideTenthGrade();
   
}