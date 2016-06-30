function selectWithIDWithParent(anID, aParentClass) {
	"use strict";

	var select = document.getElementById(anID);
	var selectedOption = select.options.item(select.selectedIndex);
	var IDToShow = selectedOption.dataset.id;

	showIDWithParent(IDToShow, aParentClass);
}

function changeAddressForID(anID, aSender) {
	"use strict";

	var address = document.getElementById(anID);
	address.value = aSender.value;
}