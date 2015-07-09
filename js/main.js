$(document).ready(function () {

	$('#submit').on('click', function (enter) {
		enter.preventDefault();
		var num = $('#userinput').val();
		if (num == "" || isNaN(num)){
			alert("Please enter a number.");
		}
		
		else if (num % 1 != 0){
			alert("Please enter a whole number only.");
		}

		else if (num >= 100 || num <= 0){
			alert("Please enter a number between 1 and 100.");
		}

		else {

			appendFizzBuzz(num);
		}
	});
	



var appendFizzBuzz = function (n){
	$('result').html("");

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





