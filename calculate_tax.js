"use strict";

/* This function is responsible for taking inputs and validation */
function processEntry(){
	var income = parseInt(document.querySelector("#income").value);
	if (isNaN(income) ||  income == '' || income <= 0) {  //check if its not a number or fields is not null
	  alert("Invalid income! "); // show invalid alert 
	  return;
	}
	calculateTax(income); // calling calculateTax function

}

function calculateTax(income)
{
    let incomeTax = 0;

	if (income > 0 && income <= 9875) { //validating the input rage and categorising it
		incomeTax = income * 0.10;
		document.querySelector("#tax").value = incomeTax.toFixed(2); //appending values into text box with ID's and number format in two decimal
		document.querySelector("#income").focus(); //focusing on first text box after calculation
	} else if (income > 9875 && income <= 40125) {
		incomeTax = 987.50 + (income - 9875) * 0.12;
		document.querySelector("#tax").value = incomeTax.toFixed(2);
		document.querySelector("#income").focus();
	} else if (income > 40125 && income <= 85525) {
		incomeTax = 4617.50 + (income - 40125) * 0.22;
		document.querySelector("#tax").value = incomeTax.toFixed(2);
		document.querySelector("#income").focus();
	} else if (income > 85525 && income <= 163300) {
		incomeTax = 14605.50 + (income - 85525) * 0.24;
		document.querySelector("#tax").value = incomeTax.toFixed(2);
		document.querySelector("#income").focus();
	} else if (income > 163300 && income <= 207350) {
		incomeTax = 33271.50 + (income - 163300) * 0.32;
		document.querySelector("#tax").value = incomeTax.toFixed(2);
		document.querySelector("#income").focus();
	} else if (income > 207350 && income <= 518400) {
		incomeTax = 47367.50 + (income - 207350) * 0.35;
		document.querySelector("#tax").value = incomeTax.toFixed(2);
		document.querySelector("#income").focus();
	} else if (income > 518400) {
		incomeTax = 156235 + (income - 518400) * 0.37;
		document.querySelector("#tax").value = incomeTax.toFixed(2);
		document.querySelector("#income").focus();
	}
	
	
}

//Creating DOMContentLoaded when #calculate button hit which calls the function processEntry()
document.addEventListener("DOMContentLoaded", function() {
    document.querySelector("#calculate").addEventListener("click", processEntry);
	// move focus
	document.querySelector("#income").focus();
});
