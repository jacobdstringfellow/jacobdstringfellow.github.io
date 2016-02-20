
$(".menu-toggle").on('click', function() {
	$(this).toggleClass("on");

	if( $("nav").css('display') == 'none') {
		$('nav').slideDown();
	}
	else
	{
		$('nav').fadeOut();
	}
});


$(".menu-toggle").on('mouseenter', function() {
	$(this).addClass("on");
    $('nav').fadeIn();
});

$("nav ul li a").on('click', function() {
    $('nav').fadeOut();
    $('.menu-toggle').removeClass("on");
});