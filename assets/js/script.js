$(document).ready(function () {
	$('.header__btn').click(function (event) {
		$('.header__btn,.header__body').toggleClass('active')
		$('body').toggleClass('lock');
	});
});