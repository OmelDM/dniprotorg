function showContentIDWithParent(anID, aParentClass) {
	"use strict";

	var allForms = document.getElementsByClassName(aParentClass);
	var formToShow = document.getElementById(anID);

	for (var index = 0; index < allForms.length; index++) {
		if (allForms[index] === formToShow) {
			formToShow.classList.remove("content_display_none");
			continue;
		}
		allForms[index].classList.add("content_display_none");
	}
}