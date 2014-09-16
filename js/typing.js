$(function(){
	$( "#hidden-line" ).hide();
      $("#typing").typed({
        strings: ["a designer", "a developer", "a product manager", "Ran Liu.\n > And I make beautiful products."],
        typeSpeed: 90,
        backSpeed: 20, 
        startDelay: 20, // time before typing starts
        backDelay: 600,
        showCursor: true,
        callback: function(){
        	$( "#hidden-line" ).fadeIn( "slow" );
        	// $( ".typed-cursor" ).fadeOut( "slow" );
        	// $( ".typed-cursor" ).addClass("transparent");
        }
      });
  });