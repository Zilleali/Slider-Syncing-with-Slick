
	$('.slider-single').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: true,
		fade: true,
		useTransform:true,
		asNavFor: '.slider-nav'
	  });
	  $('.slider-nav').slick({
		slidesToShow: 3,
		slidesToScroll: 1,
		asNavFor: '.slider-single',
		dots: true,
		focusOnSelect: true
	  });