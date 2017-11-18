var googleRandom;
var appleRandom;
var facebookRandom;
var amazonRandom;
var randomNumber;
var total;
var goodInvestments;
var badInvestments;

$(document).ready(function() {

    randomNumber = Math.floor(Math.random() * 101 + 19);
    appleRandom = Math.floor(Math.random() * 11+ 1);
    facebookRandom = Math.floor(Math.random() * 11 +1);
    amazonRandom = Math.floor(Math.random() * 11 + 1);
    googleRandom = Math.floor(Math.random() * 11 + 1);
    total=0;
    goodInvestments = 0;
    badInvestments = 0;

    function reset() {
	    randomNumber = Math.floor(Math.random() * 101 + 19);
	    appleRandom = Math.floor(Math.random() * 11 + 1);
	    facebookRandom = Math.floor(Math.random() * 11 + 1);
	    amazonRandom = Math.floor(Math.random() * 11 + 1);
	    googleRandom = Math.floor(Math.random() * 11 + 1);
	    total=0;
	    $('#message').html("");
	    $('#total').html("");
	    $('#randomMoney').html('Suggested Currency (Pennies): ' + randomNumber);

    }


    function randomNum() {
    	$('#randomMoney').html('Suggested Currency (Pennies): ' + randomNumber);
	}
	randomNum();

	// function invest() {
		
		$("#googleButton").on("click", function() {
		   total = total + googleRandom;
		   // console.log(total);
		   $('#total').html('You have invested ' + total + ' pennies so far.');
		   // console.log(randomNumber);
		if (total==randomNumber) {
			goodInvestments++;
			$('#goodInvestments').html('Good Investments: ' + goodInvestments);
			var keepInvesting = prompt("You made a good investment. Do you want to continue investing(y/n)?");

		 	if (keepInvesting=='y') {
		 		reset();
		 	}

		 	else {
		 		alert("Thanks for investing with us!");
		 	}
		}

		if (total>randomNumber) {
			badInvestments++;
			$('#badInvestments').html('Bad Investments: ' + badInvestments);
			var keepInvesting = prompt("You made a bad investment. Do you want to continue investing(y/n)?");

			 	if (keepInvesting=='y') {
			 		reset();
			 	}

			 	else {
			 		alert("Thanks for investing with us!");
			 	}
	 	}
	 	randomNum();
		})	

		$("#appleButton").on("click", function() {
		   total = total + appleRandom;
		   // console.log(total);
		   $('#total').html('You have invested ' + total + ' pennies so far.');
		   // console.log(randomNumber);
		if (total==randomNumber) {
			goodInvestments++;
			$('#goodInvestments').html('Good Investments: ' + goodInvestments);
			var keepInvesting = prompt("You made a good investment. Do you want to continue investing(y/n)?");

		 	if (keepInvesting=='y') {
		 		reset();
		 	}

		 	else {
		 		alert("Thanks for investing with us!");
		 	}
		}

		if (total>randomNumber) {
			badInvestments++;
			$('#badInvestments').html('Bad Investments: ' + badInvestments);
			var keepInvesting = prompt("You made a bad investment. Do you want to continue investing(y/n)?");

			 	if (keepInvesting=='y') {
			 		reset();
			 	}

			 	else {
			 		alert("Thanks for investing with us!");
			 	}
		 }
		 randomNum();
		})	

		$("#facebookButton").on("click", function() {
		   total = total + facebookRandom;
		   // console.log(total);
		   $('#total').html('You have invested ' + total + ' pennies so far.');
		   // console.log(randomNumber);
		if (total==randomNumber) {
			goodInvestments++;
			$('#goodInvestments').html('Good Investments: ' + goodInvestments);
			var keepInvesting = prompt("You made a good investment. Do you want to continue investing(y/n)?");

		 	if (keepInvesting=='y') {
		 		reset();
		 	}

		 	else {
		 		alert("Thanks for investing with us!");
		 	}

		}

		if (total>randomNumber) {
			badInvestments++;
			$('#badInvestments').html('Bad Investments: ' + badInvestments);
			var keepInvesting = prompt("You made a bad investment. Do you want to continue investing(y/n)?");

		 	if (keepInvesting=='y') {
		 		reset();
		 	}

		 	else {
		 		alert("Thanks for investing with us!");
		 	}
		 }
		 randomNum();
		})	


		$("#amazonButton").on("click", function() {
		   total = total + amazonRandom;
		   // console.log(total);
		   $('#total').html('You have invested ' + total + ' pennies so far.');
		   // console.log(randomNumber);
		   // console.log(goodInvestments);
		   // console.log(badInvestments);
		if (total==randomNumber) {
		goodInvestments++;
		$('#goodInvestments').html('Good Investments: ' + goodInvestments);
			var keepInvesting = prompt("You made a good investment. Do you want to continue investing(y/n)?");

		 	if (keepInvesting=='y') {
		 		reset();
		 	}

		 	else {
		 		alert("Thanks for investing with us!");
		 	}
		}

		if (total>randomNumber) {
			badInvestments++;
			$('#badInvestments').html('Bad Investments: ' + badInvestments);
			var keepInvesting = prompt("You made a bad investment. Do you want to continue investing(y/n)?");

		 	if (keepInvesting=='y') {
		 		reset();
		 		
		 	}

		 	else {
		 		alert("Thanks for investing with us!");
		 		
		 	}
		 }

		 randomNum();

		})
		function counting() {
			count=10000;
			var count = Math.floor(Math.random() * 100) + count;
			$('#counter').html('Real-time investor returns: ' + count);
			
		}

		setInterval(function(){$('#counter').html(counting); }, Math.floor(Math.random()*9000+1000));


	
});