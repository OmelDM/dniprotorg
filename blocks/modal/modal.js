function openModalBlockWithID(anID) {
	var fadeBlocks = document.getElementsByClassName("fade");

	for (var index = 0; index < fadeBlocks.length; index++) {
		fadeBlocks[index].classList.add("fade_display");
	}

// 	var modalBlock = document.getElementById(anID);
// 	// modalBlock.style.display = 'block';
// 	modalBlock.dataset.modal = '0';
}

function closeModalBlock() {
	var fadeBlocks = document.getElementsByClassName("fade");
	for (var index = 0; index < fadeBlocks.length; index++) {
		fadeBlocks[index].classList.remove("fade_display");
	}
}