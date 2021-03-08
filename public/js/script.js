$(document).ready(function () {
	$('#myTable').DataTable();
});

(function ($) {

	"use strict";

	$(window).stellar({
		responsive: true,
		parallaxBackgrounds: true,
		parallaxElements: true,
		horizontalScrolling: false,
		hideDistantElements: false,
		scrollProperty: 'scroll'
	});


	var fullHeight = function () {

		$('.js-fullheight').css('height', $(window).height());
		$(window).resize(function () {
			$('.js-fullheight').css('height', $(window).height());
		});

	};
	fullHeight();

	// loader
	var loader = function () {
		setTimeout(function () {
			if ($('#ftco-loader').length > 0) {
				$('#ftco-loader').removeClass('show');
			}
		}, 1);
	};
	loader();

	// Scrollax
	$.Scrollax();


	var carousel = function () {
		$('.carousel-testimony').owlCarousel({
			autoplay: true,
			autoHeight: true,
			center: true,
			loop: true,
			items: 1,
			margin: 30,
			stagePadding: 0,
			nav: false,
			dots: true,
			navText: ['<span class="ion-ios-arrow-back">', '<span class="ion-ios-arrow-forward">'],
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

	};
	carousel();

	$('nav .dropdown').hover(function () {
		var $this = $(this);
		// 	 timer;
		// clearTimeout(timer);
		$this.addClass('show');
		$this.find('> a').attr('aria-expanded', true);
		// $this.find('.dropdown-menu').addClass('animated-fast fadeInUp show');
		$this.find('.dropdown-menu').addClass('show');
	}, function () {
		var $this = $(this);
		// timer;
		// timer = setTimeout(function(){
		$this.removeClass('show');
		$this.find('> a').attr('aria-expanded', false);
		// $this.find('.dropdown-menu').removeClass('animated-fast fadeInUp show');
		$this.find('.dropdown-menu').removeClass('show');
		// }, 100);
	});


	$('#dropdown04').on('show.bs.dropdown', function () {
		console.log('show');
	});

	// scroll
	var scrollWindow = function () {
		$(window).scroll(function () {
			var $w = $(this),
				st = $w.scrollTop(),
				navbar = $('.ftco_navbar'),
				sd = $('.js-scroll-wrap');

			if (st > 150) {
				if (!navbar.hasClass('scrolled')) {
					navbar.addClass('scrolled');
				}
			}
			if (st < 150) {
				if (navbar.hasClass('scrolled')) {
					navbar.removeClass('scrolled sleep');
				}
			}
			if (st > 350) {
				if (!navbar.hasClass('awake')) {
					navbar.addClass('awake');
				}

				if (sd.length > 0) {
					sd.addClass('sleep');
				}
			}
			if (st < 350) {
				if (navbar.hasClass('awake')) {
					navbar.removeClass('awake');
					navbar.addClass('sleep');
				}
				if (sd.length > 0) {
					sd.removeClass('sleep');
				}
			}
		});
	};
	scrollWindow();




	var counter = function () {

		$('.ftco-counter').waypoint(function (direction) {

			if (direction === 'down' && !$(this.element).hasClass('ftco-animated')) {

				var comma_separator_number_step = $.animateNumber.numberStepFactories.separator(',')
				$('.number').each(function () {
					var $this = $(this),
						num = $this.data('number');
					// console.log(num);
					$this.animateNumber(
						{
							number: num,
							numberStep: comma_separator_number_step
						}, 7000
					);
				});

			}

		}, { offset: '95%' });

	}
	counter();

	var contentWayPoint = function () {
		var i = 0;
		$('.ftco-animate').waypoint(function (direction) {

			if (direction === 'down' && !$(this.element).hasClass('ftco-animated')) {

				i++;

				$(this.element).addClass('item-animate');
				setTimeout(function () {

					$('body .ftco-animate.item-animate').each(function (k) {
						var el = $(this);
						setTimeout(function () {
							var effect = el.data('animate-effect');
							if (effect === 'fadeIn') {
								el.addClass('fadeIn ftco-animated');
							} else if (effect === 'fadeInLeft') {
								el.addClass('fadeInLeft ftco-animated');
							} else if (effect === 'fadeInRight') {
								el.addClass('fadeInRight ftco-animated');
							} else {
								el.addClass('fadeInUp ftco-animated');
							}
							el.removeClass('item-animate');
						}, k * 50, 'easeInOutExpo');
					});

				}, 100);

			}

		}, { offset: '95%' });
	};
	contentWayPoint();

	// magnific popup
	$('.image-popup').magnificPopup({
		type: 'image',
		closeOnContentClick: true,
		closeBtnInside: false,
		fixedContentPos: true,
		mainClass: 'mfp-no-margins mfp-with-zoom', // class to remove default margin from left and right side
		gallery: {
			enabled: true,
			navigateByImgClick: true,
			preload: [0, 1] // Will preload 0 - before current, and 1 after the current image
		},
		image: {
			verticalFit: true
		},
		zoom: {
			enabled: true,
			duration: 300 // don't foget to change the duration also in CSS
		}
	});

	$('.popup-youtube, .popup-vimeo, .popup-gmaps').magnificPopup({
		disableOn: 700,
		type: 'iframe',
		mainClass: 'mfp-fade',
		removalDelay: 160,
		preloader: false,

		fixedContentPos: false
	});

	$('.appointment_date').datepicker({
		'format': 'm/d/yyyy',
		'autoclose': true
	});
	$('.appointment_time').timepicker();


})(jQuery);

$(document).ready(function () {

	if ($('.brands_slider').length) {
		var brandsSlider = $('.brands_slider');

		brandsSlider.owlCarousel(
			{
				loop: true,
				autoplay: true,
				autoplayTimeout: 5000,
				nav: false,
				dots: false,
				autoWidth: true,
				items: 8,
				margin: 42
			});

		if ($('.brands_prev').length) {
			var prev = $('.brands_prev');
			prev.on('click', function () {
				brandsSlider.trigger('prev.owl.carousel');
			});
		}

		if ($('.brands_next').length) {
			var next = $('.brands_next');
			next.on('click', function () {
				brandsSlider.trigger('next.owl.carousel');
			});
		}
	}

	if ($('.brands_slider').length) {
		var brandsSlider = $('.brands_slider');

		brandsSlider.owlCarousel(
			{
				loop: true,
				autoplay: true,
				autoplayTimeout: 5000,
				nav: false,
				dots: false,
				autoWidth: true,
				items: 8,
				margin: 42
			});

		if ($('.brands_prev').length) {
			var prev = $('.brands_prev');
			prev.on('click', function () {
				brandsSlider.trigger('prev.owl.carousel');
			});
		}

		if ($('.brands_next').length) {
			var next = $('.brands_next');
			next.on('click', function () {
				brandsSlider.trigger('next.owl.carousel');
			});
		}
	}


});

var $table = $('#table')
var $remove = $('#remove')
var selections = []

function getIdSelections() {
	return $.map($table.bootstrapTable('getSelections'), function (row) {
		return row.id
	})
}

function responseHandler(res) {
	$.each(res.rows, function (i, row) {
		row.state = $.inArray(row.id, selections) !== -1
	})
	return res
}

function detailFormatter(index, row) {
	var html = []
	$.each(row, function (key, value) {
		html.push('<p><b>' + key + ':</b> ' + value + '</p>')
	})
	return html.join('')
}

function operateFormatter(value, row, index) {
	return [
		'<a class="like" href="javascript:void(0)" title="Like">',
		'<i class="fa fa-heart"></i>',
		'</a>  ',
		'<a class="remove" href="javascript:void(0)" title="Remove">',
		'<i class="fa fa-trash"></i>',
		'</a>'
	].join('')
}

window.operateEvents = {
	'click .like': function (e, value, row, index) {
		alert('You click like action, row: ' + JSON.stringify(row))
	},
	'click .remove': function (e, value, row, index) {
		$table.bootstrapTable('remove', {
			field: 'id',
			values: [row.id]
		})
	}
}

function totalTextFormatter(data) {
	return 'Total'
}

function totalNameFormatter(data) {
	return data.length
}

function totalPriceFormatter(data) {
	var field = this.field
	return '$' + data.map(function (row) {
		return +row[field].substring(1)
	}).reduce(function (sum, i) {
		return sum + i
	}, 0)
}

function initTable() {
	$table.bootstrapTable('destroy').bootstrapTable({
		height: 550,
		locale: $('#locale').val(),
		columns: [
			[{
				field: 'state',
				checkbox: true,
				rowspan: 2,
				align: 'center',
				valign: 'middle'
			}, {
				title: 'Item ID',
				field: 'id',
				rowspan: 2,
				align: 'center',
				valign: 'middle',
				sortable: true,
				footerFormatter: totalTextFormatter
			}, {
				title: 'Item Detail',
				colspan: 3,
				align: 'center'
			}],
			[{
				field: 'name',
				title: 'Item Name',
				sortable: true,
				footerFormatter: totalNameFormatter,
				align: 'center'
			}, {
				field: 'price',
				title: 'Item Price',
				sortable: true,
				align: 'center',
				footerFormatter: totalPriceFormatter
			}, {
				field: 'operate',
				title: 'Item Operate',
				align: 'center',
				clickToSelect: false,
				events: window.operateEvents,
				formatter: operateFormatter
			}]
		]
	})
	$table.on('check.bs.table uncheck.bs.table ' +
		'check-all.bs.table uncheck-all.bs.table',
		function () {
			$remove.prop('disabled', !$table.bootstrapTable('getSelections').length)

			// save your data, here just save the current page
			selections = getIdSelections()
			// push or splice the selections if you want to save all data selections
		})
	$table.on('all.bs.table', function (e, name, args) {
		console.log(name, args)
	})
	$remove.click(function () {
		var ids = getIdSelections()
		$table.bootstrapTable('remove', {
			field: 'id',
			values: ids
		})
		$remove.prop('disabled', true)
	})
}

$(function () {
	initTable()

	$('#locale').change(initTable)
})