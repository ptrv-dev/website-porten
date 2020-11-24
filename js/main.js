$(document).ready(function () {
	$('.header__menu-burger').click(function (e) { 
		e.preventDefault();
		$('.header__menu-burger').toggleClass('header__menu-burger_active');
		$('.header__menu').toggleClass('header__menu_active');
	});
});