function openModalWithID(anID) {
	"use strict";

	var modalBlock = document.getElementById(anID);
	modalBlock.classList.add("modal-container_display");
}
function closeModalWithID(anID) {
	"use strict";

	var modalBlock = document.getElementById(anID);
	modalBlock.classList.remove("modal-container_display");

}
