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

// *********ANIME********* //

var DisplayInput = function(on) {
	if (on) {
		anime({
			targets: "#main-header",
			opacity: 1,
			scale: 1.3,
			// rotate: "2turn"
		});

		anime({
			targets: "#user-input",
			translateY: 20,
			opacity: 1,
		});
	} else {
		anime({
			targets: "#user-input",
			translateY: -10,
			opacity: 0,
		});
		anime({
			targets: "#main-header",
			opacity: 0,
			scale: 0
		});
	}
}

function flyNumbers(amt) {
	var fadetime = 300;
	$(".flynumber").fadeOut(fadetime)
	setTimeout(function(){
		$(".flynumber").remove()
		anime({
			targets: "#output",
			opacity: 1,
			translateY: 50
		})
		for (i = 1; i <= amt; i++) {
			var id = "number-"+i
			var ponged = getPong(i)
			$("#output").append(`<div class="flynumber" id="`+ id +`">`+ ponged +`</div>`);

			var animedata = {
				targets: "#"+id,
				translateX: "50%",
				translateY: 10,
				opacity: 1,
				delay: function() {
					return i * 100;
				},
			}
			if (typeof ponged === "string") {
				animedata.rotate = "4turn"
				animedata.color = "#FF8D33"
			}
			anime(animedata);
		}
	}, fadetime)
}


// *********JQUERY********* //
$(document).ready(function() {
	DisplayInput(true);
	$("form").submit(function(event) {
		event.preventDefault();
		var input = parseInt($("input").val());
		flyNumbers(input)
	});
});
