$(document).ready(function() {
	$(window).scroll(function() {
  	if($(document).scrollTop() > 10) {
    	$('#header').addClass('shrink');
    }
    else {
    $('#header').removeClass('shrink');
    }
  });
});