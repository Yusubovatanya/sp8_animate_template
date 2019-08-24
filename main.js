$(function () {
	$("#normal_select").dropkick({
		mobile: true
	});
});


$(document).ready(function () {
	$(".slide-one").owlCarousel({
		loop: true, //Зацикливаем слайдер
		margin: 10, //Отступ от картино если выводите больше 1
		nav: false, //Отключил навигацию
		autoplay: false, //Автозапуск слайдера
		smartSpeed: 500, //Время движения слайда
		autoplayTimeout: 2000, //Время смены слайда
		responsive: { //Адаптация в зависимости от разрешения экрана
			0: {
				items: 1
			},
			450: {
				items: 2
			},
			600: {
				items: 3
			},
			1000: {
				items: 5
			}
		}
	});

	$(".slide-two").owlCarousel({
		loop: true, //Зацикливаем слайдер
		margin: 10, //Отступ от картино если выводите больше 1
		nav: false, //Отключил навигацию
		autoplay: false, //Автозапуск слайдера
		smartSpeed: 500, //Время движения слайда
		autoplayTimeout: 4000, //Время смены слайда
		responsive: { //Адаптация в зависимости от разрешения экрана
			0: {
				items: 1
			},
			600: {
				items: 2
			},
			1000: {
				items: 3
			},
			1200: {
				items: 4
			}
		}
	});

	$(".slide-three").owlCarousel({
		loop: true,
		margin: 10,
		nav: false,
		autoplay: false,
		smartSpeed: 500,
		autoplayTimeout: 4000,
		responsive: {
			0: {
				items: 1
			},
			600: {
				items: 1
			},
			1000: {
				items: 1
			}
		}
	});
});

(function ($) {
	$(window).load(function () {
		$(".nav_links a,a[href='#top'],a[rel='m_PageScroll2id']").mPageScroll2id({
			highlightSelector: ".nav_links a"
		});
		$("a[rel='next']").click(function (e) {
			e.preventDefault();
			var to = $(this).parent().parent("section").next().attr("id");
			$.mPageScroll2id("scrollTo", to);
		});
	});
})(jQuery);

(function ($) {
	$(window).load(function () {
		$(".scroll_footer a,a[href='#top'],a[rel='m_PageScroll2id']").mPageScroll2id({
			highlightSelector: ".scroll_footer a"
		});
		$("a[rel='next']").click(function (e) {
			e.preventDefault();
			var to = $(this).parent().parent("section").next().attr("id");
			$.mPageScroll2id("scrollTo", to);
		});
	});
})(jQuery);


