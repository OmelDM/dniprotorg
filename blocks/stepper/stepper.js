function updateStepper(anAction, anID, anUpdateCount) {
	"use strict";

	var MIN_VALUE = 1;
	var MAX_VALUE = 99999;

	if (undefined === anUpdateCount) {
		anUpdateCount = false;
	}

	var stepper = document.getElementById(anID);
	var value = parseInt(stepper.value);
	
	if (anAction == "plus") {
		value++;
	} else if (anAction == "minus") {
		value--;
	}
	
	if (value < MIN_VALUE) {
		value = MIN_VALUE;
	}
	
	if (MAX_VALUE < value) {
		value = MAX_VALUE;
	}

	stepper.value = value;
	
	if (true === anUpdateCount) {
		SHK.changeCartItemsCount();
	}
}