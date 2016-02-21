
$(".menu-toggle").on('click', function() {
	$(this).toggleClass("on");

	if( $("nav").css('display') == 'none') {
		$('nav').fadeIn('5000','easeInQuart');
	}
	else
	{
		$('nav').fadeOut();
	}

});