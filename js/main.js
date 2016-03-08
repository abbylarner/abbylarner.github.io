$(document).ready(function() {

	$('.home-icon').click(function() {
		$('.home-icon').removeClass('active-home-icon');
		$(this).addClass('active-home-icon');
	})

	var naBlocked = false;
	var fnBlocked = false;
	var dBlocked = false;

	$('.na-icon').click(function() {
		if (naBlocked === false) {
			$('.all-page-wrapper').animate({
				left: "0"
			}, 500);
			naBlocked = true;
			fnBlocked = false;
			dBlocked = false;
		}
	});

	$('.fn-icon').click(function() {
		if (fnBlocked === false) {
			$('.all-page-wrapper').animate({
				left: "-100%"
			}, 500);
			fnBlocked = true;
			naBlocked = false;
			dBlocked = false;
		}
	});

	$('.d-icon').click(function() {
		if (dBlocked === false) {
			$('.all-page-wrapper').animate({
				left: "-200%"
			}, 500);
			dBlocked = true;
			naBlocked = false;
			fnBlocked = false;
		}
	});
});