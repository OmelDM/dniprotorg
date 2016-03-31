function updateSpinner(anAction, anID) {
	var spinner = document.getElementById(anID);
	var value = parseInt(spinner.value);
	
	if (anAction == "plus") {
		value++;
	} else if (anAction == "minus") {
		value--;
	}
	spinner.value = value;
}