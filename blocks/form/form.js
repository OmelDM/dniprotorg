function showID(anID) {
	var allForms = document.getElementsByClassName("form");
	var formToShow = document.getElementById(anID);

	for (var index = 0; index < allForms.length; index++) {
		if (allForms[index] === formToShow) {
			formToShow.classList.remove("form_hidden");
			var obj = this;
			continue;
		}
		allForms[index].classList.add('form_hidden');
	}
}
