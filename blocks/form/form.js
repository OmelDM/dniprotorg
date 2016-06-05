function showIDWithParent(anID, parentClass) {
	var allForms = document.getElementsByClassName(parentClass);
	var formToShow = document.getElementById(anID);

	for (var index = 0; index < allForms.length; index++) {
		if (allForms[index] === formToShow) {
			formToShow.classList.remove("form_display_hidden");
			var obj = this;
			continue;
		}
		allForms[index].classList.add("form_display_hidden");
	}
}

function makeDimmed(anObject) {
	var allGrayed = document.getElementsByClassName("order-form__link_dimmed");

	for (var index = 0; index < allGrayed.length; index++) {
		if (allGrayed[index] === anObject) {
			continue;
		}
		allGrayed[index].classList.remove("order-form__link_dimmed");
	}
	anObject.classList.add("order-form__link_dimmed");
}