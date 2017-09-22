// *********  BACKEND  ********* //
var pings = [15,5,3]
var pongs = ["ping-pong", "pong", "ping"]

var getPong = function(number) {
	for (var pingid = 0; pingid < pings.length; pingid++) {
		if (number % pings[pingid] === 0) {
			return pongs[pingid];
		}
	}
	return number;
}
// *********  ANIME  ********* //

var flyOutput = function(output, i) {
	var id = "number-"+i
	$("#output").append(`<div class="flynumber" id="`+ id +`">`+ output +`</div>`);

	var animedata = {
		targets: "#"+id,
		translateX: "50%",
		translateY: 10,
		opacity: 1,
		delay: function() {
			return i * 100;
		},
	}
	if (typeof output === "string") {
		animedata.rotate = "2turn";
		animedata.color = "#FF8D33";
	}
	anime(animedata);
}

var flyNumbers = function(amt, error) {
	var fadetime = 300;
	$(".flynumber").fadeOut(fadetime);
	setTimeout(function(){
		$(".flynumber").remove();
		anime({
			targets: "#output",
			opacity: 1,
			translateY: 50
		})
		if (error) {
			flyOutput(error,0);
		}
		for (i = 1; i <= amt; i++) {
			flyOutput(getPong(i), i);
		}
	}, fadetime);
}

// *********  JQUERY  ********* //
$(document).ready(function() {
	anime({
		targets: "#main-header",
		opacity: 1,
		scale: 1.3,
	});

	anime({
		targets: "#user-input, #info",
		translateY: 20,
		opacity: 1,
	});
	$("form").submit(function(event) {
		event.preventDefault();
		var input = parseInt($("input").val());
		var error;
		if (input > 100) {
			error = "Amount too high, clamped to 100.";
			input = 100;
		} else if (input < 1) {
			input = 1;
			error = "Amount to low, forced to 1."
		}
		flyNumbers(input, error);
	});
});
