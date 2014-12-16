$(document).ready(function(){
	$('form').submit(function(e){
		e.preventDefault()
		$('#hint').html('')
		var answer = $('#answer').val()
		if (answer === "Queen") {
			$('#clues').html('<div><h3 class="green">YES!<br>God save her.</h3><h3>***Make sure to shower with <span class="red">HOT</span> water.***</h3></div>')
			$('form').remove()		
		}
		else {
			console.log('foobar')
			$('#hint').append('<h3>Remember? Alaska?</h3>')
		}
		$('#answer').val('')		
	})
})