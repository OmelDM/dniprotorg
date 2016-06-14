function openModalBlockWithID(anID) {
	var fadeBlocks = document.getElementsByClassName("fade");

	for (var index = 0; index < fadeBlocks.length; index++) {
		fadeBlocks[index].classList.add("fade_display");
	}

	var modalBlock = document.getElementById(anID);
	modalBlock.classList.add("modal-container_display");
}

function closeModalBlocks() {
	var fadeBlocks = document.getElementsByClassName("fade_display");
	for (var index = 0; index < fadeBlocks.length; index++) {
		fadeBlocks[index].classList.remove("fade_display");
	}

	var modalBlocks = document.getElementsByClassName("modal-container_display");
	for (var index = 0; index < modalBlocks.length; index++) {
		modalBlocks[index].classList.remove("modal-container_display");
	}
}
