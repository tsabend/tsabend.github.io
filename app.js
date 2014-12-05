$(document).ready(function(){ 
	var resume = '<button class="resume-button mb1">x</button><iframe class="resume" src="images/tabend_resume.pdf"/>'
	var projects = "<h3>PROJECTS</h3><p>Bibliotate: A literacy app that let's students comment directly in the text.</p><p>VYNC: A video messaging app that lets users create chains of videos.</p>"
	var aboutMe = "<h3>ABOUT ME</h3><p>I am a former teacher turned web developer. I'm originally from Massachusetts and am now living in Brooklyn. I have spent the past four years working as an 8th grade English teacher in the Mississippi Delta and Newark, New Jersey. I'm transitioning into programming with an eye on education technology.<p>Besides coding, I enjoy playing music, cooking, and fencing.</p>"
	
	$('.flip-container').click(function() {
		var selected = $(this).data('text')
		var box = $('.text-info')
		box.html("")
		if (selected === "about-me") {
			box.html(aboutMe)
		} else if (selected === "projects") {
			box.html(projects)
		} else if (selected === "resume") {
			box.html(resume)
			$(document).keyup(function(e){
				if(e.keyCode == 27) {
					box.html("")
				}
			})
			$('.resume-button').click(function(){
				box.html("")
			})
		}

	})
});

