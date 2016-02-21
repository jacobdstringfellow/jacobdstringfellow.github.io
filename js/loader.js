/* 
 _____   _           _         _                        _                  
|_   _| | |         | |       | |                      | |                 
  | |   | |__   __ _| |_ ___  | |_ ___  _ __ ___   __ _| |_ ___   ___  ___ 
  | |   | '_ \ / _` | __/ _ \ | __/ _ \| '_ ` _ \ / _` | __/ _ \ / _ \/ __|
 _| |_  | | | | (_| | ||  __/ | || (_) | | | | | | (_| | || (_) |  __/\__ \
 \___/  |_| |_|\__,_|\__\___|  \__\___/|_| |_| |_|\__,_|\__\___/ \___||___/

Oh nice, welcome to the js file of dreams.
Enjoy responsibly!
@ihatetomatoes

*/
/*
$(document).ready(function() {
	
	setTimeout(function(){
		$('body').addClass('loaded');
	}, 2000);
	
});
*/

$(window).load(function() {
		
		//$('#section0').find('img').delay(1000).fadeTo(1000, 1);
		//$('body').addClass('loaded');
        $(this).delay(2000).queue(function(){
        $('body').addClass('loaded');
        $(this).dequeue();});
		//$('#section0').find('img').delay(1000).fadeTo(1000, 0);
	
});