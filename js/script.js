$(document).ready(function(){
	
	/************************* Scroll to Top ************************************/ 

	$(window).scroll(function() {
	    if ($(this).scrollTop() >= 50) {        // If page is scrolled more than 50px
	        $('#return-to-top').fadeIn(200);    // Fade in the arrow
	    } else {
	        $('#return-to-top').fadeOut(200);   // Else fade out the arrow
	    }
	});
	$('#return-to-top').click(function() {      // When arrow is clicked
	    $('body,html').animate({
	        scrollTop : 0                       // Scroll to top of body
	    }, 500);
	});

	/************************ BLOCK REVEAL **********************************/

	$("#box1 .colorlayer").animate({left:"0px"},400);
	$("#box1 .colorlayer").delay(400).animate({left:"-100%"},400);
	$("#box1 h2").animate({left:"0px"},400);
	$("#box2 .colorlayer").animate({left:"0px"},400);
	$("#box2 .colorlayer").delay(400).animate({left:"-100%"},400);
	$("#box2 h3").animate({left:"0px"},400);	

});