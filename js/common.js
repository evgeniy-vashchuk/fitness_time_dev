$(document).ready(function() {

// Owl-slider (header) =====================

	$("#slider").owlCarousel({
		items: 1,
		loop: true,
		mouseDrag: false,
		touchDrag: false,
		autoplay: true,
		autoPlaySpeed: 3000,
		autoplayTimeout: 3000,
		animateOut: 'fadeOut'
	});

// Owl-slider (partners) =====================

$('.owl-carousel').owlCarousel({
	loop:true,
	autoplay:true,
	autoplayTimeout:2000,
	autoplayHoverPause:false,
	mouseDrag: false,
	touchDrag: false,
	nav:false,
	smartSpeed:600,
	dots:false,
	responsive:{
		0:{
			items:1,
			dots:true,
		},
		400:{
			items:2,
		},
		500:{
			items:3,
		},
		992:{
			items:5
		}
	}
});

// Hamburger =====================

$('#nav-icon1').click(function(){
	$(this).toggleClass('open');
});

// Фиксированная шапка=====================

$(document).ready(function(){
	var sc = $(window).scrollTop();
	if (sc > 1) {
		$(".top-line").addClass("small");
	} else {
		$(".top-line").removeClass("small");
	}
});

$(window).scroll(function () {
	var sc = $(window).scrollTop();
	if (sc > 1) {
		$(".top-line").addClass("small");
	} else {
		$(".top-line").removeClass("small");
	}
});

// Подсветка пунктов меню при скроллинге =====================

var navLi = $('.top-line__navigation li a');

$('.tracked').waypoint(function(direction){
	if (direction === 'down') {
	var hash = $(this).attr('id');

	navLi.removeClass('active_menu');

	$.each( navLi, function(){
		if ($(this).attr('href').slice(1) == hash ) {
			$(this).addClass('active_menu');
		}
	});
	}
},{
	offset: '25%'
}).waypoint(function(direction){
	if (direction === 'up') {
	var hash = $(this).attr('id');

	navLi.removeClass('active_menu');

	$.each( navLi, function(){
		if ($(this).attr('href').slice(1) == hash ) {
			$(this).addClass('active_menu');
		}
	});
	}
},{
	offset: -200
});

// Подсветка пунктов меню Mmenu

var navLi_2 = $('#my-menu li a');

$('.tracked').waypoint(function(direction){
	if (direction === 'down') {
	var hash = $(this).attr('id');

	navLi_2.removeClass('active_2');

	$.each( navLi_2, function(){
		if ($(this).attr('href').slice(1) == hash ) {
			$(this).addClass('active_2');
		}
	});
	}
},{
	offset: '25%'
}).waypoint(function(direction){
	if (direction === 'up') {
	var hash = $(this).attr('id');

	navLi_2.removeClass('active_2');

	$.each( navLi_2, function(){
		if ($(this).attr('href').slice(1) == hash ) {
			$(this).addClass('active_2');
		}
	});
	}
},{
	offset: -200
});

// Mmenu =====================

$(document).ready(function() {
	$('#my-menu').mmenu({
		// options
		extensions: [ 'theme-black', 'pagedim-black', 'fx-menu-slide'],
		navbar: {
			title: '<img src="img/logo.png" alt="FitnessTime">'
		},
		offCanvas: {
			position: 'right'
		},
		scrollBugFix: {
			fix: false
		},
		pageScroll: {
			scroll: true
		},
		}, {
		// configuration
		offCanvas: {
			pageSelector: "#main",
		}
	});

// Синхронизация с кнопкой Hamburger
	var api = $('#my-menu').data('mmenu');
	api.bind('open:finish', function() {
		$('.hamburger').addClass('is-active');
	});
	api.bind('close:finish', function() {
		$('.hamburger').removeClass('is-active');
	});
});

// Всплывающяя подсказка Tippy
new Tippy('.phone', {
	theme: 'honeybee',
	position: 'bottom',
	animation: 'perspective',
	duration: 500,
	size: 'big',
	arrow: true
});

// Плавная прокрутка при скроле =================
$(function(){

	$('a[data-target^="anchor"]').bind('click.smoothscroll', function(){
		var target = $(this).attr('href'),
			bl_top = $(target).offset().top -50;
		$('body, html').animate({scrollTop: bl_top}, 700);
		return false;
	});

});

// Кнопка TOP =====================

$(document).ready(function(){
	var sc = $(window).scrollTop();
	if (sc > 50) {
		$(".arrow-top").addClass("top-hidden");
	} else {
		$(".arrow-top").removeClass("top-hidden");
	}
});

$(window).scroll(function () {
	var sc = $(window).scrollTop();
	if (sc > 50) {
		$(".arrow-top").addClass("top-hidden");
	} else {
		$(".arrow-top").removeClass("top-hidden");
	}
});

// Direction-aware Hover Effect  =====================

	$('.dh-container').directionalHover({
		speed: 400,
		easing: "swing"
	});

// fancybox - Галерея =====================

$('[data-fancybox]').fancybox({
	slideShow  : false,
	fullScreen : false,
	thumbs     : false,
	closeBtn   : true,
});

// Fix прыгающей кнопки TOP =====================

$(document).ready(function(){
	var sc = $(window).scrollTop();
	if (sc > 200) {
		$(".arrow-top").addClass("tr");
	} else {
		$(".arrow-top").removeClass("tr");
	}
});

$(window).scroll(function () {
	var sc = $(window).scrollTop();
	if (sc > 200) {
		$(".arrow-top").addClass("tr");
	} else {
		$(".arrow-top").removeClass("tr");
	}
});

// FIX активного пункта footer-a =====================

$(window).scroll(function() {
	if ($(window).scrollTop() == $(document).height() - $(window).height())
	{
		//Пользователь долистал до низа страницы
		$("#menu__last").addClass("active_menu");
		$(".menu__previous").removeClass("active_menu");
	 }
});

// Wow - анимация =====================

	new WOW().init();

});

// Прелоадер =======================

	$(window).on('load', function () {
		$preloader = $('.loaderArea');
		$loader = $preloader.find('.loader');
		$loader.fadeOut();
		$preloader.delay(350).fadeOut('slow');
	});