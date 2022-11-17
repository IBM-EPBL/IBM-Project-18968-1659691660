(function($) {
	/*==========  sidebar popup  ==========*/
	$('.header__area-box-sidebar-popup-icon i').on("click", function() {
		$('.header__area-box-sidebar-popup').addClass('active');
	});
	$('.header__area-box-sidebar-popup .sidebar-close-btn').on("click", function() {
		$('.header__area-box-sidebar-popup').removeClass('active');
	});
	$('.header__area-box-sidebar-popup-icon i').on("click", function() {
		$('.sidebar-overlay').addClass('show');
	});
	$('.header__area-box-sidebar-popup .sidebar-close-btn').on("click", function() {
		$('.sidebar-overlay').removeClass('show');
	});
	/*==========  background  ==========*/
	$("[data-background]").each(function() {
			$(this).css("background-image", "url(" + $(this).attr("data-background") + ")")
		})
		/*========== Active Hover  ==========*/
	$(".features__area-two-item").hover(function() {
		$(".features__area-two-item").removeClass("features__area-two-item-hover");
		$(this).addClass("features__area-two-item-hover");
	});
	// /*========== Responsive Menu  ==========*/
	$('.meanmenu-responsive').meanmenu({
		meanMenuContainer: '.responsive-menu',
		meanScreenWidth: '991',
		meanMenuOpen: '<span></span><span></span><span></span>',
		meanMenuClose: '<i class="fal fa-times"></i>'
	});
	// /*==========  Features  ==========*/
	var swiper = new Swiper(".features-slider", {
		slidesPerView: 4,
		loop: true,
		speed: 1500,
		breakpoints: {
			0: {
				slidesPerView: 1
			},
			640: {
				slidesPerView: 2
			},
			991: {
				slidesPerView: 3
			},
			1400: {
				slidesPerView: 4
			},
		}
	});
	/*==========  counterUp  ==========*/
	var counter = $('.counter');
	counter.counterUp({
		time: 2500,
		delay: 100
	});
	$('.toggle-menu ul').hide();
	$(".toggle-menu a").click(function() {
		$(this).parent(".toggle-menu").children("ul").slideToggle("100");
		$(this).find(".change").toggleClass("fal fa-angle-up fal fa-angle-down");
	});
	/*========== FAQ  ==========*/
	$(".faq-item-card-header").click(function() {
		if($(this).next(".faq-item-card-header-content").hasClass("active")) {
			$(this).next(".faq-item-card-header-content").removeClass("active").slideUp()
			$(this).children("i").removeClass("fal fa-angle-up").addClass("fal fa-angle-down")
		} else {
			$(".faq-item-card-header-content").removeClass("active").slideUp()
			$(".faq-item-card .faq-item-card-header i").removeClass("fal fa-angle-up").addClass("fal fa-angle-down");
			$(this).next(".faq-item-card-header-content").addClass("active").slideDown()
			$(this).children("i").removeClass("fal fa-angle-down").addClass("fal fa-angle-up")
		}
	});
	/*==========  video-popup  ==========*/
	$('.video-popup').magnificPopup({
		type: 'iframe'
	});
	/*==========  theme loader  ==========*/
	$(window).on("load", function() {
		$(".theme-loader").fadeOut(500);
	});
	// /*==========  Brand  ==========*/
	var swiper = new Swiper(".sponsors-slider", {
		slidesPerView: 3,
		loop: true,
		speed: 1500,
		spaceBetween: 120,
		breakpoints: {
			0: {
				spaceBetween: 50,
				slidesPerView: 2
			},
			575: {
				spaceBetween: 80,
				slidesPerView: 3
			},
			992: {
				slidesPerView: 4
			},
			1200: {
				slidesPerView: 3
			},
		}
	});
	/*==========  Skill Bar  ==========*/
	if($('.skill__area-right-skill-item-bar').length) {
		$('.skill__area-right-skill-item-bar').appear(function() {
			var el = $(this);
			var percent = el.data('width');
			$(el).css('width', percent + '%');
		}, {
			accY: 0
		});
	};
	/*==========  Skill Bar Two  ==========*/
	if($('.skill__area-two-right-skill-item-bar').length) {
		$('.skill__area-two-right-skill-item-bar').appear(function() {
			var el = $(this);
			var percent = el.data('width');
			$(el).css('width', percent + '%');
		}, {
			accY: 0
		});
	};
	// /*==========  testimonial  ==========*/
	var swiper = new Swiper(".reviews", {
		slidesPerView: 1,
		loop: true,
		speed: 1000,
		spaceBetween: 30,
		pagination: {
			el: ".reviews-pagination",
			clickable: true,
		},
	});
	/*==========  isotope  ==========*/
	$(window).on('load', function() {
		/*========== Project Grid  ==========*/
		var $grid = $('.portfolio__area-two-active').isotope({});
		/*========== Project Filter  ==========*/
		$('.portfolio__area-two-btn').on('click', 'li', function() {
			var filterValue = $(this).attr('data-filter');
			$grid.isotope({
				filter: filterValue
			});
		});
		/*========== Project Active  ==========*/
		$('.portfolio__area-two-btn').on('click', 'li', function() {
			$(this).siblings('.active').removeClass('active');
			$(this).addClass('active');
		});
	});
	/*========== Active Hover  ==========*/
	$(".portfolio__area-item").hover(function() {
		$(".portfolio__area-item").removeClass("portfolio__area-item-hover");
		$(this).addClass("portfolio__area-item-hover");
	});
	/*========== Active Hover  ==========*/
	$(".features__area-item").hover(function() {
		$(".features__area-item").removeClass("features__area-item-hover");
		$(this).addClass("features__area-item-hover");
	});
	/*========== Custom Cursor  ==========*/
	if($(".custom__cursor").length) {
		var cursor = document.querySelector('.custom__cursor-one');
		var cursorinner = document.querySelector('.custom__cursor-two');
		var a = document.querySelectorAll('a');
		document.addEventListener('mousemove', function(e) {
			var x = e.clientX;
			var y = e.clientY;
			cursor.style.transform = `translate3d(calc(${e.clientX}px - 50%), calc(${e.clientY}px - 50%), 0)`
		});
		document.addEventListener('mousemove', function(e) {
			var x = e.clientX;
			var y = e.clientY;
			cursorinner.style.left = x + 'px';
			cursorinner.style.top = y + 'px';
		});
		document.addEventListener('mousedown', function() {
			cursor.classList.add('click');
			cursorinner.classList.add('custom__cursor-hover')
		});
		document.addEventListener('mouseup', function() {
			cursor.classList.remove('click')
			cursorinner.classList.remove('custom__cursor-hover')
		});
		a.forEach(item => {
			item.addEventListener('mouseover', () => {
				cursor.classList.add('custom__cursor__hover');
			});
			item.addEventListener('mouseleave', () => {
				cursor.classList.remove('custom__cursor__hover');
			});
		})
	}
	/*========== scroll to top  ==========*/
	var scrollPath = document.querySelector('.scroll-up path');
	var pathLength = scrollPath.getTotalLength();
	scrollPath.style.transition = scrollPath.style.WebkitTransition = 'none';
	scrollPath.style.strokeDasharray = pathLength + ' ' + pathLength;
	scrollPath.style.strokeDashoffset = pathLength;
	scrollPath.getBoundingClientRect();
	scrollPath.style.transition = scrollPath.style.WebkitTransition = 'stroke-dashoffset 10ms linear';
	var updatescroll = function() {
		var scroll = $(window).scrollTop();
		var height = $(document).height() - $(window).height();
		var scroll = pathLength - (scroll * pathLength / height);
		scrollPath.style.strokeDashoffset = scroll;
	}
	updatescroll();
	$(window).scroll(updatescroll);
	var offset = 50;
	var duration = 950;
	jQuery(window).on('scroll', function() {
		if(jQuery(this).scrollTop() > offset) {
			jQuery('.scroll-up').addClass('active-scroll');
		} else {
			jQuery('.scroll-up').removeClass('active-scroll');
		}
	});
	jQuery('.scroll-up').on('click', function(event) {
		event.preventDefault();
		jQuery('html, body').animate({
			scrollTop: 0
		}, duration);
		return false;
	});
})(jQuery);