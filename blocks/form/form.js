function makeDimmed(anObject) {
	"use strict";

	var allGrayed = document.getElementsByClassName("order-form__link_dimmed");

	for (var index = 0; index < allGrayed.length; index++) {
		if (allGrayed[index] === anObject) {
			continue;
		}
		allGrayed[index].classList.remove("order-form__link_dimmed");
	}
	anObject.classList.add("order-form__link_dimmed");
}

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