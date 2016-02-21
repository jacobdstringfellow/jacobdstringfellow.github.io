		var w = $(window).width(),
    toggleIcon 		= $('#toggle-menu'),
    menu 		= $('nav ul'),
    hasChild = $('.has-child'),
    dropdown = $('.dropdown');

$(function() {
  $(toggleIcon).on('click', function(e) {
    e.preventDefault();
    menu.fadeToggle(),
    dropdown.fadeToggle();
  });
});

$(window).resize(function(){
  if(w > 320 && menu.is(':hidden')) {
    menu.removeAttr('style');}
});