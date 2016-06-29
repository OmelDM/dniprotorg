function openModalWithID(anID) {
	"use strict";

	var modalKeeperBlock = document.getElementById(anID);
	modalKeeperBlock.classList.add("modal-keeper_display");
}
function closeModalWithID(anID) {
	"use strict";

	var modalKeeperBlock = document.getElementById(anID);
	modalKeeperBlock.classList.remove("modal-keeper_display");

}
