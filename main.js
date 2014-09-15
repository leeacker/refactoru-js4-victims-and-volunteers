var victimNum = prompt('How many victims are there?');
var victimName = [];
var vicPhoneNumber = [];
var vicStreet = [];

for (var i=0; i<victimNum; i++){
	victimName[i] = prompt("What is victim #" + (i+1) + "'s name?");
	console.log("Names:", victimName);
	vicPhoneNumber[i] = prompt('What is victim #' + (i+1) + "'s phone number?");
	console.log("Phone Numbers:", vicPhoneNumber);
	vicStreet[i] = prompt('What is victim #' + (i+1) + "'s street name?");
	console.log("Street Names:", vicStreet);
	};

	var volunteerNum = prompt('How many volunteers are there?');
	var volunteerName = [];
	var volPhoneNumber = [];
	var volStreet = [];

for (var i=0; i<volunteerNum; i++){
	volunteerName[i] = prompt("What is volunteer #" + (i+1) + "'s name?");
	console.log("Names:", volunteerName);
	volPhoneNumber[i] = prompt('What is volunteer #' + (i+1) + "'s phone number?");
	console.log("Phone Numbers:", volPhoneNumber);
	volStreet[i] = prompt('What is volunteer #' + (i+1) + "'s street name?");
	console.log("Street Names:", volStreet);
	};


	alert('There are '+ victimNum +' victims and '+ volunteerNum + ' volunteers.\nThe victims are: ' + victimName + ' and the volunteers are: ' + volunteerName)