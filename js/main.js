var main = function() {

	//Toggling slide menu in handhelds view
	$('.site-nav-button').click(function() {
  		$('.site-nav').slideToggle();
  	});

	//Making menu visible in normal view if hidden in handhelds view
 	$(window).resize(function(){
		if (  ($(window).width() >=616) && (!$('.site-nav').is(":visible"))  ){	
  			$('.site-nav').slideDown('fast');
  		}
	});
}

$(document).ready(main);

