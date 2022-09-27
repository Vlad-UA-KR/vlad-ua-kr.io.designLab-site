$(function () {

	$('body').click(function (e) {

		if ($(e.target.closest('i')).hasClass('header__btn')) {
			$('.header__btn,.header__body').toggleClass('active');
			$('body').toggleClass('lock');
			return
		};

		if (!($(e.target.closest('div')).hasClass('header__body')) ||
			$(e.target.closest('a')).hasClass('header__link')) {
			$('.header__btn,.header__body').removeClass('active');
			$('body').removeClass('lock');
			return
		};
	})
});