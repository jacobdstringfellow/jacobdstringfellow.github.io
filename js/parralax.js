function isIE () {
  var myNav = navigator.userAgent.toLowerCase();
  return (myNav.indexOf('msie') != -1) ? parseInt(myNav.split('msie')[1]) : false;
}

if (isIE () && isIE () <= 9) {
 // is IE version less than 9
   $('main').css('display', 'none');
}


$(document).ready(function(){
    $('#scene').parallax();
});
