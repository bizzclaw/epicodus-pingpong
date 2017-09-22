// *********BACKEND********* //
var pings = [15,5,3]
var pongs = ["ping-pong", "pong", "ping"]

var getPong = function(number) {
	for (var pingid = 0; pingid < pings.length; pingid++) {
		if (number % pings[pingid] === 0) {
			return pongs[pingid];
		}
	}
	return number
}

var pingPongNumbers = function(number) {
	var numbers = []
	for (var i = 1; i <= number; i++) {
		numbers.push( getPong(i))
	}
	return numbers;
}


// *********JQUERY********* //
$(document).ready(function() {

	anime({
		targets: '#main-header',
		opacity: 1,
		scale: 0.8
	});

	anime({
		targets: '#user-input',
		translateY: 5,
		opacity: 1
	});

	$("form").submit(function(event) {
		event.preventDefault();
		var input = parseInt($("input").val());

		var outList = $("ul#output")
		outList.text("")
		var output = pingPongNumbers(input);

		anime({
			targets: '#user-input',
			translateY: -10,
			opacity: 0
		});
		anime({
			targets: '#main-header',
			opacity: 0,
			scale: 0.1
		});

		output.forEach(function(number) {

		});
	})

})
