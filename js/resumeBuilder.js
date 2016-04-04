var bio = {
  "name" : "Shakil",
  "role" : "Front-End Web Developer",
  "contact" : {
  	"email" : "shakil.sultan@gmail.com",
  	"github" : "https://github.com/shakilsultan",
  	"twitter" : "https://twitter.com/shakilsul",
  	"mobile" : "+923452839318",
  	"location" : "Karachi, Pakistan"
 	},
  	"headshot" : "images/shakil.jpg",
  	"welcomeMessage" : "Welcome to my Resume Page!",
  	"skills" : [ "SEO", "HTML", "CSS", "JavaScript" ]
};

var work = {
	"jobs" : [ {
    	"jobPosition" : "SEO Lead / Front-End Web Developer",
		"employer" : "Falcon Living",
		"yearsWorked" : "January, 2016 - Present",
		"location" : "Palentine, IL (Remote)",
		"briefRole" : "I have started working for this company since Jan 2016 and I am responsible for managing SEO projects and front-end work."
	},
	{
		"jobPosition" : "Senior Webmaster / Manager",
		"employer" : "iVortexMedia",
		"yearsWorked" : "April, 2009 - December, 2015",
		"location" : "Naples, FL (Remote)",
		"briefRole" : "Over the course of 6.5 years, I had held several positions and became Senior Webmaster as well as being responsible for hiring/training other employees."
	}
	]
};


var education = {
	"schools" : [ {
		"name" : "APTECH",
		"city" : "Karachi",
		"majors" : "Software Engineering Diploma"
	},
	{
		"name" : "NewPorts",
		"city" : "Karachi",
		"majors" : "BS - Computer Science"
	}
	]
};

// formatting Bio
var formattedHeaderName = HTMLheaderName.replace("%data%", bio.name);
var formattedHeaderRole = HTMLheaderRole.replace("%data%", bio.role);
var formattedHTMLMobile = HTMLmobile.replace("%data%", bio.contact.mobile);
var formattedHTMLEmail = HTMLemail.replace("%data%", bio.contact.email);
var formattedHTMLTwitter = HTMLtwitter.replace("%data%", bio.contact.twitter);
var formattedHTMLGitHub = HTMLgithub.replace("%data%", bio.contact.github);
var formattedHTMLLocation = HTMLlocation.replace("%data%", bio.contact.location);
var formattedBioPic = HTMLbioPic.replace("%data%", "images/shakil.jpg");
var formattedWelcomeMSG = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);

$("#header").append(formattedBioPic);
$("#header").append(formattedHeaderName);
$("#header").append(formattedHeaderRole);
$("#topContacts").append(formattedHTMLMobile);
$("#topContacts").append(formattedHTMLEmail);
$("#topContacts").append(formattedHTMLTwitter);
$("#topContacts").append(formattedHTMLGitHub);
$("#topContacts").append(formattedHTMLLocation);
$("#header").append(formattedWelcomeMSG);

$("#header").append(HTMLskillsStart);
for(var i = 0; i<bio.skills.length; i++) {
	var formattedSkills = HTMLskills.replace("%data%", bio.skills[i]);
	$("#header").append(formattedSkills);
}



for (job in work.jobs) {
	$("#workExperience").append(HTMLworkStart);
	var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
	var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].jobPosition);
	var formattedEmployerTitle = formattedEmployer + formattedTitle;
	var formattedYearsWorked = HTMLworkDates.replace("%data%", work.jobs[job].yearsWorked);
	var formattedLocation = HTMLworkLocation.replace("%data%", work.jobs[job].location);
	var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].briefRole);
	$(".work-entry:last").append(formattedEmployerTitle);
	$(".work-entry:last").append(formattedLocation);
	$(".work-entry:last").append(formattedYearsWorked);
	$(".work-entry:last").append(formattedDescription);
}


