$(document).ready(function () {

	$('#submit').on('click', function (enter) {
		appendFizzBuzz();

	)}
	





var appendFizzBuzz = function (n){


 for (var i = 1; i <= n; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
            $('result').append("FizzBuzz <br>");
        }
        else if (i % 3 === 0) {
            $('result').append("Fizz <br>");
        }
        else if (i % 5 === 0) {
            $('result').append("Buzz <br>");
        }
        else {
            $('result').append(i+"<br>");
        }


  }
}

});





