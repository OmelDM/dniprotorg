function changeAddressForID(anID, aSender) {
	"use strict";

	var address = document.getElementById(anID);
	address.value = aSender.value;
}