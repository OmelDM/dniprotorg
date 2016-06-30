function selectWithIDWithParent(anID, aParentClass) {
	"use strict";

	var select = document.getElementById(anID);
	var selectedOption = select.options.item(select.selectedIndex);
	var IDToShow = selectedOption.dataset.id;

	showIDWithParent(IDToShow, aParentClass);
}
