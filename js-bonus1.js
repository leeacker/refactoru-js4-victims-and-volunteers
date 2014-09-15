var victimNum = 0;
var victimName = [];
var vicPhoneNumber = [];
var vicStreet = [];
var i = victimNum;

while (confirm("Are you finished entering victim names?")===false){
	victimName[i] = prompt("What is victim #" + (i+1) + "'s name?");
	console.log("Names:", victimName);
	vicPhoneNumber[i] = prompt('What is victim #' + (i+1) + "'s phone number?");
	console.log("Phone Numbers:", vicPhoneNumber);
	vicStreet[i] = prompt('What is victim #' + (i+1) + "'s street name?");
	console.log("Street Names:", vicStreet);
	victimNum ++;

	// confirm("Are you finished entering victim names?");
};

var volunteerNum = 0;
var volunteerName = [];
var volPhoneNumber = [];
var volStreet = [];
var i = volunteerNum;

while (confirm("Are you finished entering volunteer names?")===false){
	volunteerName[i] = prompt("What is volunteer #" + (i+1) + "'s name?");
	console.log("Names:", volunteerName);
	volPhoneNumber[i] = prompt('What is volunteer #' + (i+1) + "'s phone number?");
	console.log("Phone Numbers:", volPhoneNumber);
	volStreet[i] = prompt('What is volunteer #' + (i+1) + "'s street name?");
	console.log("Street Names:", volStreet);
	volunteerNum++;

	// confirm("Are you finished entering volunteer names?");
};


alert('There are '+ victimNum +' victims and '+ volunteerNum + ' volunteers.\nThe victims are: ' + victimName + ' and the volunteers are: ' + volunteerName)