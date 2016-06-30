function updateSpinner(anAction, anID, anUpdateCount) {
	"use strict";

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
	
	if (true === anUpdateCount) {
		SHK.changeCartItemsCount();
	}
}

$(document).bind('ready',function() {
	if ( SHK.data.delivery_name ) {
		$('select[name="shk_delivery"]', '#shopOrderForm').val(SHK.data.delivery_name);
	}
	$('select[name="shk_delivery"]', '#shopOrderForm').bind('change',function() {
		SHK.selectDelivery($(this).val());
	});
});
