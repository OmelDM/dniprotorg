function updateStepper(anAction, anID, anUpdateCount) {

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
	
	if (value < stepper.min) {
		value = stepper.min;
	}
	
	if (stepper.max < value) {
		value = stepper.max;
	}

	stepper.value = value;
	
	if (true == anUpdateCount) {
		SHK.changeCartItemsCount();
	}
}