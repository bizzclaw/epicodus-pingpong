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


$(document).ready(function() {
	$("form").submit(function(event) {
		event.preventDefault();
		var input = parseInt($("input").val());

		var outList = $("ul#output")
		outList.text("")
		var output = pingPongNumbers(input);
		output.forEach(function(number) {
			outList.prepend("<li>" + number + "</li>");
		});
	})
})
