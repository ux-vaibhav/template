$(document).ready(function () {
	$('#menu-icon').click(function () {
		$('.fix-header').toggleClass('menu');
		$('.sub-nav').removeClass('active');
	});
	$('.sidebar ul li a').click(function () {
		$(this).next('.sub-nav').addClass('active');
	});
	$('.sub-nav .cls').click(function () {
		$(this).parent('.sub-nav').removeClass('active');
	});
	var tabVal = $('.fix-tab .nav-tabs>li.active a h3').html();
	$(".tab-value").html(tabVal);
	$('.fix-tab .nav-tabs>li').click(function () {
		tabVal = $(this).find('h3').html();
		$(".tab-value").html(tabVal);
	});
	$('.tablezoom').click(function () {
		$(this).parents(".rel-box").toggleClass('fixed');
	});
	$(document).on('click', function (event) {
		$("body").removeClass('menu').removeClass('sub');
	});
	$('#menu-icon, #sub-selector, .sidebar ul li a,.sub-nav .cls').on('click', function (event) {
		event.stopPropagation();
	});
	$('.btn.select').click(function () {
		var cat = $(this).attr('data-cat');
		$('.detail-form').addClass('active').addClass(cat);
		$(this).addClass('active');
		$(this).parent().parent().css('background', '#dadada');
	});
	$('.detail-form .cls').click(function () {
		$('.detail-form').removeClass().addClass('detail-form');
		$('.btn.select.active').parent().parent().css('background', 'initial');
	});
});