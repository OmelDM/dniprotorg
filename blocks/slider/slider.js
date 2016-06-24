$(document).ready(function() {
	var owl = $('.owl-carousel');
	owl.owlCarousel({
		slideSpeed : 300,
		paginationSpeed : 400,
		singleItem:true,
		items: 1,
		autoplay: true,
		autoplayTimeout: 5000,
		autoplaySpeed: 1000,
		loop: true
	});
});