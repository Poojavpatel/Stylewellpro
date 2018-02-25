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

	/*********************** Dot Navigation ****************************/

	$('.dotNav ul li').click(function(){
		console.log(this);
		$('.current').removeClass('current');
		$(this).addClass('current');
	})

	/************************** Highlight current page *******************/

  		// $('.dotNav a[href^="/' + location.pathname.split("/")[1] + '"]').addClass('active');
  	console.log(location);
  	console.log(location.pathname);
  	console.log(location.pathname.split("/"));
  	console.log(location.pathname.split("/")[1]);

  	/************************** SCROLL EFFECT ON ELEGENT EFFECT *****************************/

  	var controller = new ScrollMagic.Controller();
  	var ourScene = new ScrollMagic.Scene({
  		triggerElement:'#about',
  		triggerHook:'0.75',
  		duration:'65%',
  	})
  	.setTween(TweenMax.from('#elegentbox1', 1, {y:'-20%' , ease:Power0.easeNone}))
  	 /*.addIndicators({
  	 	name:'arrange',
  	 	colorTrigger:'yellow',
  	 	colorStart:'yellow',
  	 	colorEnd:'yellow'
  	 })*/
  	.addTo(controller);

  	var ourScene = new ScrollMagic.Scene({
  		triggerElement:'#about',
  		triggerHook:'0.75',
  		duration:'65%',
  	})
  	.setTween(TweenMax.from('#elegentbox2', 1, {y:'20%' , ease:Power0.easeNone}))
  	/*.addIndicators({
  		name:'arrange',
  		colorTrigger:'yellow',
  		colorStart:'yellow',
  		colorEnd:'yellow'
  	})*/
  	.addTo(controller);

  	var ourScene = new ScrollMagic.Scene({
  		triggerElement:'#about',
  		triggerHook:'0.75',
  		duration:'65%',
  	})
  	.setTween(TweenMax.from('#elegentbox3', 1, {y:'-15%' , ease:Power0.easeNone}))
  	/*.addIndicators({
  		name:'arrange',
  		colorTrigger:'yellow',
  		colorStart:'yellow',
  		colorEnd:'yellow'
  	})*/
  	.addTo(controller);

  	var ourScene = new ScrollMagic.Scene({
  		triggerElement:'#about',
  		triggerHook:'0.75',
  		duration:'65%',
  	})
  	.setTween(TweenMax.from('#elegentbox4', 1, {y:'40%' , ease:Power0.easeNone}))
  	/*.addIndicators({
  		name:'arrange',
  		colorTrigger:'yellow',
  		colorStart:'yellow',
  		colorEnd:'yellow'
  	})*/
  	.addTo(controller);

  	/****************************** PIN ABOUT US FOR 20% TIME *****************************/

  	var pinIntroScene = new ScrollMagic.Scene({
		triggerElement:'#about',
		duration:'25%',
		triggerHook: '0',
	})
	.setPin('#about',{pushFollowers:true}) /*using pushfollowers the main goes over the header*/
	/*.addIndicators({
		name:'Pin',
		colorTrigger:'blue',
		indent:0,
		colorStart:'blue',
		colorEnd:'blue'
	})*/
	.addTo(controller);
  
  /******************************* GALLERY LOAD ON SCROLL ANIMATION *************************/
  var ourScene = new ScrollMagic.Scene({
      triggerElement:'#gallery',
      triggerHook:'0.4',
      duration:'20%',
    })
    .setTween(TweenMax.from('.gallerycontainer img', 1, {y:'50%',opacity:'0', ease:Power0.easeNone}))
    /*.addIndicators({
      name:'gallery',
      colorTrigger:'black',
      colorStart:'black',
      colorEnd:'black'
    })*/
    .addTo(controller);  

  /* Highlight current page using scroll magic */
    // console.log(this);
    // var n = $(this).index();
    // console.log(n);
    // var ourScene =new ScrollMagic.Scene({
    //   triggerElement:'section#gallery',
    //   triggerHook:0.01,
    // })
    //  .setClassToggle('.dotNav li','current')
    //  .addIndicators({
    //   name:'dotNav',
    //   colorTrigger:'purple',
    //   colorStart:'purple',
    //   colorEnd:'purple'
    //  })
    // .addTo(controller);

  /********************************************************************/
  $(".heart").on("click", function() {
    $(this).addClass("heartclick");

    var heartcount;
    /* if local storage exists on machine */
    if(typeof(Storage) !== "undefined"){

      if (localStorage.heartcount){
        localStorage.heartcount = Number(localStorage.heartcount) + 1;
      }
      else {
        localStorage.heartcount = 1;
      }
      console.log(localStorage);
      console.log(localStorage.getItem(heartcount));
    }
  });
  /************************* Categories animation **************************/
  var parallaxScene = new ScrollMagic.Scene({
    triggerElement:'.cardsList',
    triggerHook:0.5,
    duration:'20%',
   })
   .setTween(TweenMax.from('#card1', 1, {y:'-12%', autoAlpha:0 , ease:Power0.easeNone} ))
   .addIndicators({
    name:'category1',
    colorTrigger:'green',
    colorStart:'green',
    colorEnd:'green'
   })
   .addTo(controller);

   var parallaxScene = new ScrollMagic.Scene({
    triggerElement:'.cardsList',
    triggerHook:0.4,
    duration:'20%',
   })
   .setTween(TweenMax.from('#card2', 1, {y:'-12%', autoAlpha:0 , ease:Power0.easeNone} ,'1' ))
   .addIndicators({
    name:'category2',
    colorTrigger:'green',
    colorStart:'green',
    colorEnd:'green'
   })
   .addTo(controller);

   var parallaxScene = new ScrollMagic.Scene({
    triggerElement:'.cardsList',
    triggerHook:0.3,
    duration:'20%',
   })
   .setTween(TweenMax.from('#card3', 1, {y:'-12%', autoAlpha:0 , ease:Power0.easeNone} ,'2' ))
   .addIndicators({
    name:'category3',
    colorTrigger:'green',
    colorStart:'green',
    colorEnd:'green'
   })
   .addTo(controller);



});