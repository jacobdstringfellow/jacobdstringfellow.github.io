/*=======================================================================
		        BEGINNING OF NAV STYLING - HAMBURGER MENU
=======================================================================*/

$(".menu-toggle").on('click', function() {
	$(this).toggleClass("on");

	if( $("nav").css('display') == 'none') {
		$('nav').fadeIn();
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

function isMobile() {
                    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
                }

if (!isMobile()){

//) && (window.matchMedia("(min-width: 850px)").matches) {
					/* the view port is at least 850 pixels wide */
$('#fullpage').fullpage({
                sectionsColor: ['#212121' , '#677077', '#677077', '#212121'],
                anchors: ['1stPage', '2ndPage', '3rdPage', '4thPage'],
                menu: '#menu',
                scrollingSpeed: 800,
                css3: false,
				lockAnchors: true,
                responsiveWidth: '850',
                    
                afterLoad: function(anchorLink, index)
                {	
					$(this).delay(2000).queue(function(){
					$('body').addClass('loaded');
					$(this).dequeue();});
					$('#section0 img').delay(1000).fadeTo(1000, 0); 
					$('#section0 img').delay(1000).fadeTo(1000, 0); 
					//$('.header-top').delay(3000).fadeIn(1000);
					$('.header-top').delay(3000).animate({
                            marginTop: '0px',
                            opacity: 1
                        }, 500);
                    $('#section0 #header').delay(2500).animate({
                            marginTop: '0px',
                            opacity: 1
                        }, 500);
                    $('#section0 i').delay(2700).animate({
                            opacity: 1,
                            marginBottom: '1px'
                        }, 500);   

                    if (index == 4) {
                        $('#fp-nav').hide();
                      }
                    
                    if(index !== 1){
                         $('#overlay').css('display', 'none');
                    }

					if(index == 1){
						$('.one').css('background','#FFFFFF');
						$('.two').css('background','#FFFFFF');
						$('.three').css('background','#FFFFFF');
                        
                       // $('#yellow').hide();
                        //$('#dark').hide();
                        $('#lite').show();
					}
					
                    if(index == 2)
					{	
                    
                        if ( $(window).width() > 850){
                            $('.one').css('background','#212121');
                            $('.two').css('background','#212121');
                            $('.three').css('background','#212121');
                            $('#yellow').hide();
                            $('#lite').hide();
                            $('#dark').show();
                        }
                        
						//$("#section1 a").hover(
						  //function(){
							//if ( $(window).width() > 850) {
							//	$("#section1 #over").fadeIn();
							//}
						  //},function(){
						   //if ( $(window).width() > 850) {
							//$("#section1 #over").fadeOut();
						//}}
						//);
					}
                    
                    if(index == 3)
					{
						console.log("You are in section number ("+index+")");
                        $('#left').delay(2000).hover(function(){
                            $('.bar .php').css('width', '80%');
							$('.bar .sql').css('width', '80%');
							$('.bar .java').css('width', '60%');
							$('.bar .c').css('width', '60%');
                        });
						
						$('#right').delay(2000).hover(function(){
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
						
						$('.one').css('background','#F2b632');
						$('.two').css('background', '#F2b632');
						$('.three').css('background','#F2b632');
                        
                        $('#lite').hide();
                        $('#dark').hide();
                        $('#yellow').show();
					}				
				
					if(index == 4)
					{
						$('.one').css('background','#F2B632');
						$('.two').css('background','#F2B632');
						$('.three').css('background','#F2B632');
                        $('#lite').hide();
                        $('#dark').hide();
                        $('#yellow').show();
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
						//$('.one').css('background','#FFFFFF');
						//$('.two').css('background','#FFFFFF');
						//$('.three').css('background','#FFFFFF');
					});
					
					$('.goTo2').click(function(e){
						e.preventDefault();
						$.fn.fullpage.moveTo(2);
						$('#section1 a').delay(500).fadeIn('1000');
						//$('.one').css('background','#252839');
						//$('.two').css('background','#252839');
						//$('.three').css('background','#252839');

					});
                    
                    $('.goTo3').click(function(e){
						e.preventDefault();
						$.fn.fullpage.moveTo(3);
                        $('#section2 h1').delay(500).animate({
                            marginTop: '-1px',
                            opacity: 1
                        }, 500);
						//$('.one').css('background','#F2b632');
						//$('.two').css('background', '#F2b632');
						//$('.three').css('background','#F2b632');
                        //$('#section2 h1').delay(500).animate({
                        //    marginTop: '-1px',
                        //    opacity: 1
                        //}, 500);
						//$('#section1 a').delay(500).fadeIn('1000');
					});
					
					$('.goTo4').click(function(e){
						e.preventDefault();
						$.fn.fullpage.moveTo(4);
                        $('#section3 #me').delay(500).fadeIn('1000');
                        $('#section3 #form-main').delay(500).fadeIn('1000');
						
						if ( $(window).width() > 850) { 
                           $('#section3 #me').delay(500).fadeIn('1000'); 
                        }
                        
                        if ( $(window).width() < 850) { 
                           $('#section3 #form-main').delay(1500).fadeIn('1000');
                        }
						//$('.one').css('background','#FFFFFF');
						//$('.two').css('background','#FFFFFF');
						//$('.three').css('background','#FFFFFF');
					});
				},
                onLeave: function(index, nextIndex, direction) {
					
					 var leavingSection = $(this);

                    if(index == 1 && direction == "down")
					{
                        $('#section1 a').delay(500).fadeIn('1000');
						//$('.one').css('background','#252839');
						//$('.two').css('background','#252839');
						//$('.three').css('background','#252839');
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
						//$('.one').css('background','#FFFFFF');
						//$('.two').css('background','#FFFFFF');
						//$('.three').css('background','#FFFFFF');			
                    }
					
                    if(index == 2 && direction == "down")
					{
                        $('#section2 h1').delay(500).animate({
                            marginTop: '-1px',
                            opacity: 1
                        }, 500);
						//$('.one').css('background','#F2b632');
						//$('.two').css('background', '#F2b632');
						//$('.three').css('background','#F2b632');
					}
                    
					if(index == 3 && direction =='up'){
						$('#section1 a').delay(500).fadeIn('1000');
						//$('.one').css('background','#252839');
						//$('.two').css('background','#252839');
						//$('.three').css('background','#252839');
					}
					
                    if(index == 3 && direction =='down'){
                        $('#section3 #me').delay(500).fadeIn('1000');
                        $('#section3 #form-main').delay(500).fadeIn('1000');
						//$('.one').css('background','#FFFFFF');
						//$('.two').css('background','#FFFFFF');
						//$('.three').css('background','#FFFFFF');
                    }
					
					if(index == 4 && direction =='up'){
						$('#section2 h1').delay(500).animate({
                            marginTop: '-1px',
                            opacity: 1
                        }, 500);
						//$('.one').css('background','#F2b632');
						//$('.two').css('background', '#F2b632');
						//$('.three').css('background','#F2b632');
					}
                },
                afterSlideLoad: function( anchorLink, index, slideAnchor, slideIndex)
                {   
	
                },
                onSlideLeave: function( anchorLink, index, slideIndex, direction) {

                },
                afterRender: function(){
                    var pluginContainer = $(this);
                }
			});
}
			/*-----------------------------------------------------------------
			-------------------------------------------------------------------
					  END OF IF STATEMENT FOR AT LEASE 768 PIXELS!!!!
					  START OF ELSE STATEMENT FOR SMALLER SCREENS!!!!
			-------------------------------------------------------------------
			-----------------------------------------------------------------*/
else {
    
					/* the view port is less than 768 pixels wide */
	$('#fullpage').fullpage({
                sectionsColor: ['#212121' , '#C9C9C9', '#C9C9C9', '#293241', '#ccddff'],
                anchors: ['1stPage', '2ndPage', '3rdPage', '4thPage'],
                menu: '#menu',
                scrollingSpeed: 900,
                css3: false,
				lockAnchors: true,
                autoScrolling: false,
                fitToSection: false,
                    
                afterLoad: function(anchorLink, index)
                {	
					$(this).delay(2000).queue(function(){
					$('body').addClass('loaded');
					$(this).dequeue();});
					$('#section0').find('img').delay(1000).fadeTo(1000, 0); 
                    $('#section1 a').css("display","inline-block");
                    //$('nav').css('background','rgba("66,66,66,0.95")');
                    
                    if(index !== 1){
                         $('#overlay').css('display', 'none');
                    }
				
					if(index == 2)
					{
						
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
					
					$('#moveTo').click(function(e){
						e.preventDefault();
						$.fn.fullpage.moveTo(3);
					});
					
					$('.goTo1').click(function(e){
						e.preventDefault();
						$.fn.fullpage.moveTo(1);
					});
					
					$('.goTo2').click(function(e){
						e.preventDefault();
						$.fn.fullpage.moveTo(2);
					});
					
					$('.goTo3').click(function(e){
						e.preventDefault();
						$.fn.fullpage.moveTo(3);
					});
					
					$('.goTo4').click(function(e){
						e.preventDefault();
						$.fn.fullpage.moveTo(4);
					});
				},
                onLeave: function(index, nextIndex, direction) {
					
                },
                afterSlideLoad: function( anchorLink, index, slideAnchor, slideIndex)
                {   
                    
                },
                onSlideLeave: function( anchorLink, index, slideIndex, direction) {
					
                    if(anchorLink == '3rdPage') {

                    }
                },
                afterRender: function(){

                }
			});



} 
/*-----------------------------------------------------------------
-------------------------------------------------------------------
		  END OF ELSE STATEMENT FOR SMALLER SCREENS!!!!
-------------------------------------------------------------------
-----------------------------------------------------------------*/





