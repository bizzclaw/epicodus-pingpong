var pings = [3,5,15]
var pongs = ["ping", "pong", "pingPong"]

var getPing = function(numbers) {
	var pingid = 0;
	pings.forEach(function(ping){
		if (i % ping === 0) {
			return pongs[i];
		}
	})
	return number
}

var pingPongNumbers = function(number) {
	var numbers = []
	for (var i = 1; i <= number; i++) {
		numbers.push( getPing(i))
	}
	return numbers;
}


$(document).ready(function() {
	$("form").submit(function(event) {
		event.preventDefault();
		var input = parseInt($("input").val());

		var outList = $("ul#output")
		outList.text("")
		var output = pingPong(input);
		output.forEach(function(number) {
			outList.prepend(number);
		});
	})
})
