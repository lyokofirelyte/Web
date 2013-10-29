/* scRipTz */

function startUp() {
/* Set some default values & get our mega display running */

document.getElementById('fancyCalcDisplay').className = "fancyCalcDisplay";
document.getElementById('fancyCalcDisplay').innerHTML = "zero";
}


function updateDisplays(currentAnswer) {

var toggled = document.getElementById('toggled');

limit = document.getElementById('limit');

	if (parseInt(limit.innerHTML) >= 21) {
		return;
	}

	if (toggled.innerHTML == "true") {
	document.getElementById('fancyCalcDisplay').innerHTML = currentAnswer;
	}
	
document.getElementById('display').innerHTML = currentAnswer;

}


function toggleDisplay() {

var toggled = document.getElementById('toggled');

	if (toggled.innerHTML == "true"){
		document.getElementById('toggled').innerHTML = "false";
		document.getElementById('fancyCalcDisplay').innerHTML = "";
		} else {
		var currentInput = document.getElementById('currentInput');
		document.getElementById('toggled').innerHTML = "true";
		document.getElementById('fancyCalcDisplay').innerHTML = currentInput.innerHTML;
	}

}

function memSet() {

var mem = document.getElementById('currentInput').innerHTML;

document.getElementById('memory').innerHTML = mem;

var toggled = document.getElementById('toggled');
	if (toggled.innerHTML == "true"){
		document.getElementById('fancyCalcDisplay').innerHTML = "mem set";
	}
document.getElementById('display').innerHTML = "mem set";
setTimeout(function(){updateDisplays(mem)},1000);
}

function memDel() {

var mem = "zero";

document.getElementById('memory').innerHTML = mem;

var toggled = document.getElementById('toggled');
	if (toggled.innerHTML == "true"){
		document.getElementById('fancyCalcDisplay').innerHTML = "mem deleted";
	}
document.getElementById('display').innerHTML = "mem deleted";
setTimeout(function(){updateDisplays(document.getElementById('currentInput').innerHTML)},1000);

}

function memView() {
var mem = document.getElementById('memory').innerHTML;
input(mem);
}

function input(value) {

var limit = parseInt(document.getElementById('limit').innerHTML);

var boot = document.getElementById('boot');

/* We're just checking to see if this is the first use */

	if (boot.innerHTML == "true"){
		document.getElementById('currentInput').innerHTML = "";
		document.getElementById('boot').innerHTML = "false";
	}

var currentInput = document.getElementById('currentInput');
var input = currentInput.innerHTML;	

if (input == 'zero') {
	input = '';
}

limit++;
document.getElementById('limit').innerHTML = limit;

input = input + value;
document.getElementById('currentInput').innerHTML = input;
updateDisplays(input);

}

function backSpace() {

var currentInput = document.getElementById('currentInput').innerHTML;
document.getElementById('currentInput').innerHTML = currentInput.substring(0, currentInput.length -1);
updateDisplays(currentInput.substring(0, currentInput.length -1));

}

function calculate() {

var currentInput = document.getElementById('currentInput');
var input = currentInput.innerHTML;

	try {
		var currentAnswer = eval(input);
		}
	catch(err){
		var currentAnswer = "invalid operation";
			setTimeout(function(){clearCalc()},1200);
		}
		
	if (currentAnswer == "Infinity" || currentAnswer == "-Infinity" || isNaN(currentAnswer)){
		setTimeout(function(){clearCalc()},1200);
	}		

document.getElementById('currentInput').innerHTML = currentAnswer;
document.getElementById('limit').innerHTML = currentAnswer.toString().length;
updateDisplays(currentAnswer);
}

function clearCalc() {

/* location.reload(); - NOPE! We want the mem to stay even if you press CLR. More work... */

	var toggled = document.getElementById('toggled');
	
	document.getElementById('currentInput').innerHTML = "zero";
	document.getElementById('currentAnswer').innerHTML = "";
	document.getElementById('boot').innerHTML = "true";
	document.getElementById('display').innerHTML = "reset";
	document.getElementById('limit').innerHTML = "0";
	
		if (toggled.innerHTML == "true"){
		document.getElementById('fancyCalcDisplay').innerHTML = "reset";
		}
		
	setTimeout(function() {
	document.getElementById('display').innerHTML = "zero";
		if (toggled.innerHTML == "true"){
		document.getElementById('fancyCalcDisplay').innerHTML = "zero";
		}
	},1000);
}
