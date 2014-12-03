$(document).ready(function(){ 
	$('.flip-container').click(function() {
		var text = $('.' + $(this).data('text'))
		text.slideToggle('slow')
	})
});
