function updateSpinner(anAction, anID, anUpdateCount) {

	if (undefined === anUpdateCount) {
		anUpdateCount = false;
	}

	var spinner = document.getElementById(anID);
	var value = parseInt(spinner.value);
	
	if (anAction == "plus") {
		value++;
	} else if (anAction == "minus") {
		value--;
	}
	
	if (value < spinner.min) {
		value = spinner.min;
	}
	
	if (spinner.max < value) {
		value = spinner.max;
	}

	spinner.value = value;
	
	if (true == anUpdateCount) {
		SHK.changeCartItemsCount();
	}
}