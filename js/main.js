$(document).ready(function() {

	$('.slide-icon').click(function() {
		$('.slide-icon').removeClass('active-home-icon');
		$(this).addClass('active-home-icon');
	})

	$(window).resize(function() {
		if ($('.slide-icon').hasClass('active-home-icon')) {
			$(this).css('opacity', '1');
		}
	});


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

	$(window).resize(function() {
		if ($(window).width() < 901) {
			$(".toggle-icon-wrapper").css('display', 'block');
		} else {
			$(".toggle-icon-wrapper").css('display', 'none');
		}
	});

	if ($(window).width() < 901) {
		$(".toggle-icon-wrapper").css('display', 'block');
	} else {
		$(".toggle-icon-wrapper").css('display', 'none');
	}

	$(".toggle-icon-wrapper").click(function() {
		$('.toggle-wrapper').slideToggle();
	});

	if ($(window).width() >= 901) {
		$(".toggle-wrapper").css('display', 'block');
	} else {
		$(".toggle-wrapper").css('display', 'none');
	}

	$(window).resize(function() {
		if ($(window).width() >= 901) {
			$(".toggle-wrapper").css('display', 'block');
		} else {
			$(".toggle-wrapper").css('display', 'none');
		}
	});

});