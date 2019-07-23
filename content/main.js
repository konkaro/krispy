/*navbar color changer*/
function changeColor(c){
	if(c==1){
		document.getElementById("colorChange").style.background="#eadee1";
	}
	if (c==2){
		document.getElementById("colorChange").style.background="#545454";
	}
	if (c==3){
		document.getElementById("colorChange").style.background="#fff";
	}
}

function confirmInput() {
	name = document.forms[0].name.value;
	alert("!Message sent");
}


