// Devon Sihra
function btnCalcCelsius_onclick()
{
		//assign textbox elements to variables for easier access
		var fahrenheitTextbox = document.getElementById("txtFahrenheit");
		var celsiusTextbox = document.getElementById("txtCelsius");
		
		//get user input value from corresponding textbox
		var fahrenheit = fahrenheitTextbox.value;
		fahrenheit = parseFloat(fahrenheit);
		
		//calculate celsius
		var celsius = (5/9) * (fahrenheit - 32);
		celsiusTextbox.value = celsius;
}
		