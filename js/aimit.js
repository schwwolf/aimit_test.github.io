(function($) {
	$(document).ready(function() {

		// FULLPAGE
		if ($('#splitscreen').length) {
			$('#splitscreen').fullpage({
		        scrollingSpeed: 1000,
		        responsiveWidth: 1024,
		        verticalCentered: false,
		        controlArrows: false,
		        afterLoad: function(anchorLink, index){
					if (index == 1){
						$('.split-nav .prev').addClass('inaktiv');
						$('.split-nav .next').addClass('bounce');
					} else {
						$('.split-nav .prev').removeClass('inaktiv');
						$('.split-nav .next').removeClass('bounce');
					}

					if (index == $('.fp-section').length) {
						$('.split-nav .next').addClass('inaktiv');
						$('.split-nav .prev').addClass('bounce');
					} else {
						$('.split-nav .next').removeClass('inaktiv');
						$('.split-nav .prev').removeClass('bounce');
					}
				},
			});

			// FULLPAGE PFEILE
			$('.split-nav .prev').click(function(){
				$.fn.fullpage.moveSectionUp();
			});
			$('.split-nav .next').click(function(){
			    $.fn.fullpage.moveSectionDown();
			});
		}

		// OPEN NAV
		$(document).on('click', '.nav-icon', function() {
			$(this).toggleClass('is-active');
			$('.nav').toggleClass('is-visible');
			$('body, header').toggleClass('nav-open');

			/*if ($('#splitscreen').length) {
				if ($('body').hasClass('nav-open')) {
					$.fn.fullpage.setAutoScrolling(false);
				} else {
					$.fn.fullpage.setAutoScrolling(true);
				}
			}*/
        });

		// HEADER SCROLL
	    var header = $('header');
	    $(window).scroll(function() {
	        var scroll = $(window).scrollTop();

	        var breakpoint = 75;

	        if ($('.headerbild').length) {
		        breakpoint = $('.headerbild').height() - 150;
	        }

	        $(document).on('resize', function(){
		        if ($('.headerbild').length) {
			        breakpoint = $('.agentwho').height() - 150;
		        }
	        });

	        if (scroll >= breakpoint) {
	            header.addClass('scrolled');
	        } else {
	            header.removeClass('scrolled');
	        }
	    });

		// SCROLL DOWN PFEIL
		$('.scroll-down .next').click(function(){
			$('html, body').animate({
				scrollTop: $('.inhalt').offset().top - $('header').height()
			}, 1000);
		});

		// TRIGGER OVERLAY OPEN
		$(document).on('click', '.lightbox-trigger', function(e){
			e.preventDefault();
			var $this = $(this),
				overlayDiv = $this.data('lightbox');

			$('.is-visible').removeClass('is-visible');

			$(overlayDiv).addClass('is-visible');

			$('.nav-open .nav-icon').trigger('click');

			$('body').addClass('overflow-hidden');
		});

		// TRIGGER OVERLAY CLOSE
		$(document).on('click', '.lightbox-close-trigger', function(e){
			e.preventDefault();

			$('.lightbox-content').removeClass('is-visible');
			$('body').removeClass('overflow-hidden nav-open');
		});

		// WOW
		$('.inhalt p, .inhalt h1, .inhalt h2, .inhalt h3, .inhalt h4, .inhalt h5, .inhalt blockquote, .inhalt ul').addClass('wow fadeInUp');
		$('.inhalt img').addClass('wow fadeIn').attr('data-wow-delay', '0s');

		wow = new WOW({
			boxClass: 'wow',
			animateClass: 'animated',
			mobile: false
		});
		wow.init();

		// SWIPER
		var swiper = new Swiper('.swiper-container', {
		    slidesPerView: 3,
		    spaceBetween: 60,
		    centeredSlides: true,
		    autoHeight: false,
			navigation: {
				nextEl: '.swiper-next',
				prevEl: '.swiper-prev',
			},
		    breakpoints: {
			    767: {
				    slidesPerView: 1,
					spaceBetween: 0,
			    },
			    1023: {
				    slidesPerView: 2,
			    }
		    },
		    pagination: {
		    	el: '.swiper-pagination',
				clickable: true,
		    },
    	});

    	$(window).on('resize', function(){
	    	swiper.update();
    	});

		// ANIMSITION
		$("#aimit").animsition({
		    inClass: 'fade-in',
		    outClass: 'fade-out',
		    inDuration: 200,
		    outDuration: 200,
		    linkElement: 'a:not([target="_blank"]):not([href*="#"]):not(.no-page-transition):not(.cc-btn):not([href^="mailto:"]):not([href^="tel:"]):not(.lightbox-trigger)',
		    loading: false,
		    loadingParentElement: 'body',
		    loadingClass: 'animsition-loading',
		    loadingInner: '<img src="images/loading.svg">',
		    timeout: false,
		    timeoutCountdown: 5000,
		    onLoadEvent: true,
		    browser: [ 'animation-duration', '-webkit-animation-duration'],
		    overlay : false,
		    overlayClass : 'animsition-overlay-slide',
		    overlayParentElement : 'body',
		    transition: function(url){ window.location.href = url; }
		});
	});
})(jQuery);