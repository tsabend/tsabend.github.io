$(document).ready(function(){

	$('[data-text]').click(contentShift)

  var Disclosure = function(el, options) {
    var self = this;
    this.el = el;
    this.isActive = false;
    this.toggle = function(e) {
      e.stopPropagation();
      self.isActive = !self.isActive;
      if (self.isActive) {
        self.el.classList.add('is-active');
      } else {
        self.el.classList.remove('is-active');
      }
    }
    this.el.addEventListener('click', function(e) {
      self.toggle(e);
    });
  };

  var disclosures = document.querySelectorAll('[data-disclosure]');
  for (var i = 0; i < disclosures.length; i++) {
    new Disclosure(disclosures[i]);
  }

});


var contentShift = function(){
		var aboutMe = "<h3>ABOUT ME</h3><p>I am a former teacher turned web developer. I'm originally from Massachusetts and am now living in Brooklyn, New York.</p><p>I have spent the past four years working as an 8th grade English teacher, first at a public school in the Mississippi Delta and then in a charter school in Newark, New Jersey. I started programming last spring and fell in love with the process of problem solving and the thrill of creating.</p><p>I'm transitioning into development with an interest in education technology. I'm transitioning into development with an interest in education technology. I'm looking to collaborate with people who share my passion for education and the belief that technology can improve the lives of students, teachers and parents.</p><p>Besides coding and education, I enjoy playing, writing and recording music, cooking and baking, watching the Boston Red Sox and fencing.</p>"
		var skills = '<h3>SKILLS</h3><strong>Languages:</strong> Ruby, JavaScript, Swift, HTML, CSS, Chuck<br><strong>Web Frameworks:</strong> Rails, Sinatra, Basscss, Bootstrap<br><strong>Testing Frameworks:</strong> RSpec, Capybara<br><strong>Database:</strong> PostgreSQL, SQLite3, MySQL, CoreData<br><strong>Methodologies:</strong> OOD, TDD, Agile Development, Pair Programming<br><strong>Version Control:</strong> Git, GitHub<br><strong>Other Skills:</strong> XCode, Training and Development, Project Management, Engineering Empathy, Research, Protools, AbletonLive<br>Currently learning: Node.js, MongoDB, Express, React.js, Angular.js, Python, Django'
		var projects = "<h3>PROJECTS</h3><p><a href='https://guarded-badlands-6623.herokuapp.com/'>CommonLit.org:</a> Commonlit is a website where middle school teachers can find differentiated texts organized by theme and discussion question. Until now the non-profit has been using static webpages, but wanted to move to a web app so they could manage content on their own and eventually support user generated content. I created a Rails app that allowed them to use an admin panel to make changes and updates to the site and migrated their existing data from Excel sheets and folder trees into a postgresql database. Finally, I created a widget using the Flickr API to allow for seamless importing of photos.<br>Other technologies: Paperclip, S3</p><p><a href='bibliotate.herokuapp.com'>Bibliotate:</a> The first version of a literacy app that lets students comment directly in the text. The goal is to provide a platform for students to discuss literature and help teachers implement a flipped script for discussions. The current iteration of the site is a proof of concept. I'm currently showing this to teachers and getting feedback. Planned features include allowing teachers to make annotations that guide student reading, only showing students the comments of other after they have met assignment requirement and implementing a teacher report that allows teachers to navigate comments more easily. Planned technologies include using websockets and React instead of ajax and polling to render the comment feeds as well as potentially switching the project to the node stack.</p><p><a href='https://github.com/bumblebees-2014/VYNC'>VYNC:</a> A user driven video messaging app that lets users create chains of videos.<br>Technologies: Swift, Sinatra, S3, UIImagePicker, AVFoundation</p><p><a href='http://tsabend.github.io/set/source/set.html'>Set:</a> An implementation of the card game Set using JavaScript.</p>"
		var experience = "<h3>EXPERIENCE</h3><strong>Uncommon Schools - Northstar Academy:</strong> July 2012-June 2014, Newark, NJ<br><i>English Teacher</i><ul><li>Facilitated curriculum that led to over 90% of students scoring proficient or advanced proficient on the 2014 NJASK</li><li>Developed high-quality, rigorous unit plans that aligned to the Common Core State Standards</li><li>Spearheaded an independent reading initiative that included tracking, incentives and reading celebrations</li></ul><strong>Greenville Public Schools:</strong> Summer 2010-Summer 2012, Greenville, MS<br><i>English Teacher and Teach For America Corp Member</i><ul><li>Maintained a positive, managed classroom, and recorded and tracked data to inform instruction and motivate students</li><li>Trained a staff of over 30 teachers on new technologies and troubleshot their technical problems as the school's Technology Leader.</li><li>Used a public database to implement a school wide demerit system to improve student behavior</li></ul><strong>EezAwake Enterprises LLC:</strong> Winter 2010-Winter 2011, Cherry Hill, NJ<br><i>CEO</i><ul><li>Led a team of partners to develop a product and infomercial to compete in the As-Seen-On-TV marketplace through rapid prototyping</li><li>Licensed the product, a vibrating alarm clock, to the international DRTV producer Telebrands</li><li>Traveled to China to work with factories on developing a prototype</li></ul><strong>Tools Designer, Teach for America:</strong> Spring 2011-Summer 2011, Cleveland, MS<br><strong>Live Online Instructor, Kaplan:</strong> Spring 2011-Winter 2011, Online"
		var education = "<h3>EDUCATION</h3><strong>Princeton University:</strong> August 2006 - June 2010, Princeton, NJ<br>A.B. in Philosophy<br>Magna Cum Laude<br>Captain of Princeton's Varsity Fencing Team. 2010 All-American, All-Ivy, Ivy League Champion, 6th NCAA<br><strong>Dev Bootcamp:</strong> July 2014 - November 2014, New York, NY<br>19-week web development training program"
		var resume = '<button class="resume-button mb1">x</button><iframe class="resume" src="images/tabend_resume.pdf"/>'

		var box = $('.text-info')
		$('#first-icon').empty()
		$('#first-icon').append($('.fa',this).clone().removeClass('main-icon'))

		var selected = $(this).data('text')
		box.html("")
		switch (selected) {
			case 'about-me':
				box.html(aboutMe)
				break
			case 'skills':
				box.html(skills)
				break
			case 'projects':
				box.html(projects)
				break
			case 'education':
				box.html(education)
				break
			case 'experience':
				box.html(experience)
				break
			case 'resume':
				box.html(resume)
				$(document).keyup(function(e){
					if(e.keyCode == 27) {
						box.html("")
						// $(this).off()
					}
				})
				$('.resume-button').click(function(){
					box.html("")
					// $(this).off()
				})
				break
			default:
				console.log('bad input to switch')
		}
		$('.flip-container').click(contentShift)
	}
