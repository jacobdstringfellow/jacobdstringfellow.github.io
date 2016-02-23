
// variables
var $header_top = $('.header-top');
var $nav = $('nav');
var $close = $('.close');
var $headerClose = $('.header-top.open-menu');

/*=======================================================================
		         STYLES FOR THE WEBSITE LOADER ANIMATION
=======================================================================*/

$(window).load(function() {
		
        $(this).delay(2000).queue(function(){
        $('body').addClass('loaded');
        $(this).dequeue();});
});

/*=======================================================================
		      END OF STYLES FOR WEBSITE LOADER ANIMATION
=======================================================================*/

/*=======================================================================
		   STYLES FOR THE PARRALAX BACKGROUND OF THE FIRST PAGE
=======================================================================*/
function isIE () {
  var myNav = navigator.userAgent.toLowerCase();
  return (myNav.indexOf('msie') != -1) ? parseInt(myNav.split('msie')[1]) : false;
}

if (isIE () && isIE () <= 9) {
 // is IE version less than 9
   $('main').css('display', 'none');
}

/*=======================================================================
		        END OF STYLES FOR THE PARRALAX BACKGROUND
=======================================================================*/

/*=======================================================================
		        BEGINNING OF NAV STYLING - HAMBURGER MENU
=======================================================================*/

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

if (('ontouchstart' in window) && ((navigator.maxTouchPoints > 0) || (navigator.msMaxTouchPoints > 0)))
{
    $("nav ul li a").on('click', function() {
        $('nav').fadeOut();
        $('.menu-toggle').removeClass("on");
    });
}	 

else
{
//behaviour and events for pointing device like mouse
// toggle menu 
    $(".menu-toggle").on('mouseenter', function() {
        $(this).addClass("on");
        $('nav').fadeIn();
    });
    
    $("nav ul li a").on('click', function() {
        $('nav').fadeOut();
        $('.menu-toggle').removeClass("on");
    });
}

/*=======================================================================
		         END OF NAV STYLING - HAMBURGER MENU
=======================================================================*/

$('#fullpage').fullpage({
                sectionsColor: ['#212121', '#212121', '#C9C9C9', '#293241', '#ccddff'],
                anchors: ['1stPage', '2ndPage', '3rdPage', '4thPage'],
                menu: '#menu',
                scrollingSpeed: 1000,
                paddingTop: '0px',
                lockAnchors: 'true',
                css3: false,
                slidesNavigation: true,
                controlArrows: true,
                responsiveWidth: '1850',
                    
                afterLoad: function(anchorLink, index)
                {	
				
					
                    $(window).load(function() {
		
					//$('#section0').find('img').delay(1000).fadeTo(1000, 1);
					//$('body').addClass('loaded');
					$(this).delay(2000).queue(function(){
					$('body').addClass('loaded');
					$(this).dequeue();});
					$('#section0').find('img').delay(1000).fadeTo(1000, 0); 
                        //alert("Page is loaded");
                    $('#section0 #header').delay(2500).animate({
                            marginTop: '0px',
                            opacity: 1
                        }, 500);
                    $('#section0 i').delay(2700).animate({
                            opacity: 1,
                            marginBottom: '1px'
                        }, 500);   
					});
    
                    //$header_top.css('background', 'rgba(0,0,0,0.8');
                   // $nav.css('background', 'url(./img/jS_dark.jpg) center');
                    //$nav.css('background-size', 'cover');
                    //$nav.css('background-attachment', 'fixed');

                    //background: url(../img/background3.jpg);
                    //background-size: cover;
                    //background-attachment: fixed;
                    if (index == 4) {
                        $('#fp-nav').hide();
                      }
                    
                    if(index !== 1){
                         $('#overlay').css('display', 'none');
                    }
					//section 1
					if(index == 1){

					}
					
					if(index == 2)
					{
                         //$('#section1 h1').slideUp(['slow']);
                        //$('#section1 h1').animate({
                        //    marginTop: '60px',
                        //    opacity: 1
                        //}, 500);
                        
                        //$('#section1 p').delay(100).animate({
                            //marginTop: '0px',
                        //    opacity: 1
                        //}, 500);
                       // $('#section1 h1').css('margin-top', '60px');
						//$('#section1 h1').addClass('animated fadeInUp');
                       // $('#section1 h1').fadeTo(1000, 1);
                        
                        //$('#section1 p').fadeTo(1200, 1);
					}
					
					if(index == 3)
					{
						console.log("You are in section number ("+index+")");
                        $('#leftInfo').delay(2000).hover(function(){
                            $('.bar .php').css('width', '80%');
							$('.bar .sql').css('width', '80%');
							$('.bar .java').css('width', '60%');
							$('.bar .c').css('width', '60%');
                        });
						
						$('#rightInfo').delay(2000).hover(function(){
                            $('.bar .html').css('width', '90%');
							$('.bar .js').css('width', '80%');
							$('.bar .dream').css('width', '80%');
							$('.bar .boot').css('width', '80%');
                        });
                        
                        if ( $(window).width() < 850) {
                                $('.bar .html').css('width', '90%');
                                $('.bar .js').css('width', '80%');
                                $('.bar .dream').css('width', '80%');
                                $('.bar .boot').css('width', '80%');
                                $('.bar .php').delay(1000).css('width', '80%');
                                $('.bar .sql').delay(1500).css('width', '80%');
                                $('.bar .java').delay(2000).css('width', '60%');
                                $('.bar .c').delay(2500).css('width', '60%');
						}
					}
				
					if(index == 4)
					{
						//$('#section3 .rightside').delay(3000).addClass('animated fadeInUp');
                        //$('#section3 #info').addClass('animated fadeInUp');
						//$('.rightside').hover(function(){
                        //    $('#section3 .rightside h2').delay(800).animate({
                        //    marginTop: '-1px',
						//	}, 500);
				        //$('#section3 .rightside').delay(800).animate({
						//		opacity: 1
						//	}, 500);
                        //});
					}
					
					$('#moveTo').click(function(e){
						e.preventDefault();
						$.fn.fullpage.moveTo(3);
					});
					
					
					$('.goTo1').click(function(e){
						e.preventDefault();
						$.fn.fullpage.moveTo(1);
                        $('#section0 #header').delay(2500).animate({
                            marginTop: '0px',
                            opacity: 1
                        }, 500);
                        $('#section0 i').delay(2700).animate({
                                opacity: 1,
                                marginBottom: '1px'
                            }, 500);  
					});
					
					$('.goTo2').click(function(e){
						e.preventDefault();
						$.fn.fullpage.moveTo(2);
						$('#section1 h1').delay(500).animate({
                            marginTop: '80px',
                            opacity: 1
                        }, 500);
                        
                        $('#section1 p').delay(600).animate({
                            //marginTop: '0px',
                            opacity: 1
                        }, 500);
					});
					
					$('.goTo3').click(function(e){
						e.preventDefault();
						$.fn.fullpage.moveTo(3);
						$('#section2 h1').delay(500).animate({
                            marginTop: '-1px',
                            opacity: 1
                        }, 500);

					});
					
					$('.goTo4').click(function(e){
						e.preventDefault();
						$.fn.fullpage.moveTo(4);
						$('#section3 .leftside h2').delay(600).animate({
                            marginTop: '-1px',
                        }, 500);
						$('#section3 #info').delay(600).animate({
								opacity: 1
							}, 500);
						
						if ( $(window).width() > 850) { 
                             $('#section3 .rightside h2').delay(600).animate({
                            marginTop: '-1px',
                            }, 500);
                            $('#section3 .rightside').delay(600).animate({
                               opacity: 1
                            }, 500);
                        }
                        
                        if ( $(window).width() < 850) { 
                             $('#section3 .rightside h2').delay(1800).animate({
                                marginTop: '-1px',
                            }, 500);
                            $('#section3 .rightside').delay(1500).animate({
                               opacity: 1
                            }, 500);
                        }
					});
				},
                onLeave: function(index, nextIndex, direction) {
					
					 var leavingSection = $(this);

                    if(index == 1 && direction == "down")
					{
                        $('#section1 h1').delay(500).animate({
                            marginTop: '80px',
                            opacity: 1
                        }, 500);
                        
                        $('#section1 p').delay(600).animate({
                            //marginTop: '0px',
                            opacity: 1
                        }, 500);
                       // $('#section1 h1').css('margin-top', '60px');
						//$('#section1 h1').addClass('animated fadeInUp');
                       // $('#section1 h1').fadeTo(1000, 1);
                        
                        //$('#section1 p').fadeTo(1200, 1);
					}
                    
					if(index == 2 && direction == "up")
					{
						$('#section0 #header').delay(2500).animate({
                            marginTop: '0px',
                            opacity: 1
                        }, 500);
                        $('#section0 i').delay(2700).animate({
                                opacity: 1,
                                marginBottom: '1px'
                            }, 500);   
                        }
					
                    if(index == 2 && direction == "down")
					{
                        $('#section2 h1').delay(500).animate({
                            marginTop: '-1px',
                            opacity: 1
                        }, 500);
                
                       // $('#section1 h1').css('margin-top', '60px');
						//$('#section1 h1').addClass('animated fadeInUp');
                       // $('#section1 h1').fadeTo(1000, 1);
                        
                        //$('#section1 p').fadeTo(1200, 1);
					}
                    
					if(index == 3 && direction =='up'){
						$('#section1 h1').delay(500).animate({
                            marginTop: '80px',
                            opacity: 1
                        }, 500);
                        
                        $('#section1 p').delay(600).animate({
                            //marginTop: '0px',
                            opacity: 1
                        }, 500);
					}
					
                    //after leaving section 2
                    if(index == 3 && direction =='down'){
                         //$('#section3 .rightside').delay(3000).addClass('animated fadeInUp');
                         //$('#section3 #info').addClass('animated fadeInUp');
						 
                        
                    }
					
					if(index == 4 && direction =='up'){
						$('#section2 h1').delay(500).animate({
                            marginTop: '-1px',
                            opacity: 1
                        }, 500);
					}
                    
					if(index == 4) {
                      $('#fp-nav').show();
                    }
                },
                afterSlideLoad: function( anchorLink, index, slideAnchor, slideIndex)
                {   
                    if(anchorLink == '4thPage' && slideIndex == 1) {
                      $.fn.fullpage.setAllowScrolling(false, 'up');
                      $header_top.css('background', 'transparent');
                      $nav.css('background', 'transparent');
                      //$(this).css('background', '#374140');
                      $(this).find('p').css(
                        {
                          'color': '#DC3522',
                          'opacity': 1,
                          'transform': 'translateY(0)'
                        }
                      );
                    }	
                },
                onSlideLeave: function( anchorLink, index, slideIndex, direction) {
					
                    if(anchorLink == '3rdPage') {
                      /*$.fn.fullpage.setAllowScrolling(true, 'up');
                      $header_top.css('background', 'rgba(0, 47, 77, .8)');
                      $nav.css('background', 'rgba(0, 47, 77, .5)');*/
                       // alert("Hello Just Left");
                    }
                },
                afterRender: function(){
                    var pluginContainer = $(this);
                   // alert("The resulting DOM structure is ready");
                }
			});