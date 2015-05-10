// work contains an array of jobs. Each job object in jobs should contain an employer, title, location, dates worked and description.

var work = {
	"jobs" : [
		{
			"employer" : "Booz Allen Hamilton",
			"title" :"Software Engineer",
			"location" : "McLean, VA",
			"datesWorked" : "April 2015 - present",
			"description" : ["web development", " learning new technologies", " building super awesome websites"]
		},
		{
			"employer" : "AICE, Inc.",
			"title" : "Research Associate",
			"location" : "Chevy Chase, MD",
			"datesWorked" : "2011 - 2014",
			"description" : ["project management", " writing", " research", " editing", " email and snail mail marketing", " branding"]
		},
		{
			"employer" : "Diarna, the Geo-Museum of Jewish Life in North Africa & the Middle East",
			"title" : "Summer Intern",
			"location" : "Cambridge, MA",
			"datesWorked" : "2011",
			"description" : ["interviewing", " qualitative research", " writing"]
		},
		{
			"employer" : "The Shalem Center",
			"title" : "Summer Intern in the President's Office (Dr. Daniel Polisar)",
			"location" : "Jerusalem, Israel",
			"datesWorked" : "2009",
			"description" : ["qualitative and quantitative research", " report writing"]
		},
		{
			"employer" : "The Children's Defense Fund",
			"title" : "Intern in the President's Office (Marian Wright Edelman)",
			"location" : "Washington, DC",
			"datesWorked" : "2008",
			"description" : ["writing", " research", " handling a range of administrative tasks"]
		}

	]
};


function displayWork(){
	//write a for-in loop that iterates over all the jobs in your work object and .append()s a new HTMLworkStart element for each one
	for (job in work.jobs){

		$('#workExperience').append(HTMLworkStart);

		//formats each job's employer with HTMLworkEmployer 
		// var HTMLworkEmployer = '<a href="#">%data%';
		var formattedEmployer = HTMLworkEmployer.replace('%data%', work.jobs[job].employer);
		// console.log(formattedEmployer);

		// and each job title with HTMLworkTitle
		// var HTMLworkTitle = ' - %data%</a>';
		var formattedTitle = HTMLworkTitle.replace('%data%', work.jobs[job].title);

		var formattedLocation = HTMLworkLocation.replace('%data%', work.jobs[job].location);

		var formattedDates = HTMLworkDates.replace('%data%', work.jobs[job].datesWorked);

		var formattedDescrip = HTMLworkDescription.replace('%data%', work.jobs[job].description);

		var formattedEverything = formattedEmployer + formattedTitle + formattedLocation + formattedDates + formattedDescrip
		// and .append()s a concatenation of employer and title each to the element with class work-entry:last
		$('.work-entry:last').append(formattedEverything);
	}
}

displayWork();

// projects contains an array of projects. Each project object in projects should contain a title, dates worked, description, and an images array with URL strings for project images.

var projects = {
	"projects" : [
		{
			"title" : "iCook",
			"dates" : "October 2014",
			"description" : "A cooking app that facilitates ingredient-based recipe searches",
			"images" : ["http://lisasnider.co/img/icook-macbook.png", "images/icook.png"]
		},
		{
			"title" : "Mappteizer",
			"dates" : "September 2014",
			"description" : "A social web application that enables friends to more effectively plan group outings",
			"images" : "http://lisasnider.co/img/mappetize-macbook.png"
		}
	]
}

// bio contains a name, role, welcomeMessage, contacts object and skills array. The contacts object should contain (but doesn't have to) a mobile number, email address, github username, twitter handle and location.

var bio = {
	"name" : "Lisa Snider",
	"role" : "Software Engineer",
	"contact" : "lisarsnider@gmail.com",
	"pic" : "images/me.jpg",
	"welcomeMessage" : "Hello world!",
	"skills" : ["programming", "wireframing", "writing", "researching"]
}

if (bio.skills.length > 0) {
	$('#header').append(HTMLskillsStart);

	// HTMLskills = '<li class="flex-item"><span class="white-text">%data%</span></li>';

	var formattedSkill = HTMLskills.replace('%data%', bio.skills[0]);
	$('#skills').append(formattedSkill);
	
	var formattedSkill = HTMLskills.replace('%data%', bio.skills[1]);
	$('#skills').append(formattedSkill);
	
	var formattedSkill = HTMLskills.replace('%data%', bio.skills[2]);
	$('#skills').append(formattedSkill);
	
	var formattedSkill = HTMLskills.replace('%data%', bio.skills[3]);
	$('#skills').append(formattedSkill);

}


// education contains an array of schools. Each school object in schools contains a name, location, degree, majors array, dates attended and a url for the school's website. education also contains an onlineCourses array. Each onlineCourse object in onlineCourses should contain a title, school, dates attended and a url for the course.

var education = {
	"schools": [
		{
			"name" : "Wellesley",
			"city" : "Boston",
			"major" : "Sociology",
			"minor" : "History",
			"graduation" : 2011
		},
		{
			"name" : "GA",
			"city" : "DC",
			"major" : "web development",
			"graduation" : 2014
				
		}
	]
}



