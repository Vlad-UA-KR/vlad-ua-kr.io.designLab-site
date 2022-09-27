// $(document).ready(function () {
// 	$('.header__btn').click(function (event) {
// 		$('.header__btn,.header__body').toggleClass('active')
// 		$('body').toggleClass('lock');
// 	});
// });

$(function () {

	$('body').click(function (e) {

		if ($(e.target.closest('i')).hasClass('header__btn')) {
			$('.header__btn,.header__body').toggleClass('active');
			$('body').toggleClass('lock');
			return
		};
		console.log('da');
		$('.header__btn,.header__body').removeClass('active');
		$('body').removeClass('lock');
	})
});