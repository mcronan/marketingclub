$(document).ready(function() {

	$(window).scroll(function() {
		var height = $(window).scrollTop();
		if (height > 310) {
			console.log('hello')
			$('.feature-box').css('position', 'fixed')
			$('.feature-box').css('top', '20px')

		}  else {
			console.log('hello eile')
			$('.feature-box').css('position', 'absolute')
			$('.feature-box').css('top', '250px')		
		}
	});





});
