var bio = {
  "name" : "Shakil Sultan Ali",
  "role" : "Front-End Web Developer",
  "contacts" : {
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
		"location" : "Palatine, IL",
		"briefRole" : "I have started working for this company since Jan 2016 and I am responsible for managing SEO projects and front-end work."
	},
	{
		"jobPosition" : "Senior Webmaster / Manager",
		"employer" : "iVortexMedia",
		"yearsWorked" : "April, 2009 - December, 2015",
		"location" : "Naples, FL",
		"briefRole" : "Over the course of 6.5 years, I had held several positions and became Senior Webmaster as well as being responsible for hiring/training other employees."
	}
	]
};


var education = {
	"schools" : [ {
		"name" : "APTECH",
		"location" : "Karachi",
		"majors" : "Software Engineering Diploma"
	},
	{
		"name" : "NewPorts",
		"location" : "Karachi",
		"majors" : "BS - Computer Science"
	}
	]
};

// project object

var projects = {
	"project": [{
		"projectTitle": "Cambridge Tailors",
		"projectDate" : "May 2012",
		"projectDescription": "My main responsibilities were :  1) Hiring/Managing team of web developers, graphics designer and web content writer.   2) Identifying design and code issues within the site and collaborate with web developers to get those issues fixed. Suggest any new changes/ideas which may improve the site.  3) Collaborate with the graphics designer to achieve a good and simple UI.   4) Collaborate with the content writer to ensure the content developed was acceptable to the university team since the project was aimed to assist university students",
		"projectImage" : "images/project_1.png"
	}, {
		"projectTitle": "WordPress Microsites",
		"projectDate" : "November 2015",
		"projectDescription": "I was tasked with creating 100 odd wordpress sites from start to finish.  1) Had to come up with domain names and get them registered.  2) Install WordPress on each site and perform optimizations at server-end to make page loads faster and efficient.  3) Develop one-page WordPress sites and put content",
		"projectImage" : "images/project_2.png"
	}]
}

// formatting Bio
var formattedHeaderName = HTMLheaderName.replace("%data%", bio.name);
var formattedHeaderRole = HTMLheaderRole.replace("%data%", bio.role);
var formattedHTMLMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
var formattedHTMLEmail = HTMLemail.replace("%data%", bio.contacts.email);
var formattedHTMLTwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);
var formattedHTMLGitHub = HTMLgithub.replace("%data%", bio.contacts.github);
var formattedHTMLLocation = HTMLlocation.replace("%data%", bio.contacts.location);
var formattedBioPic = HTMLbioPic.replace("%data%", "images/shakil.jpg");
var formattedWelcomeMSG = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);


$("#header").prepend(formattedHeaderRole);
$("#header").prepend(formattedHeaderName);

$("#topContacts").append(formattedHTMLMobile);
$("#topContacts").append(formattedHTMLEmail);
$("#topContacts").append(formattedHTMLTwitter);
$("#topContacts").append(formattedHTMLGitHub);
$("#topContacts").append(formattedHTMLLocation);


$("#header").append(formattedBioPic);


$("#header").append(formattedWelcomeMSG);
$("#header").append(HTMLskillsStart);
for(var i = 0; i<bio.skills.length; i++) {
	var formattedSkills = HTMLskills.replace("%data%", bio.skills[i]);
	$("#skills").append(formattedSkills);
}





// work section

function displayWork() {
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
}
displayWork();

// location tracker

// $(document).click(function(loc) {
// 	var xAxis = loc.pageX;
// 	var yAxis = loc.pageY;
// 	logClicks(xAxis, yAxis);
// });

// var loc_array = [];

// function locationizer(work_object) {
// 	for (job in work_object.jobs) {
// 		var newLocation = work_object.jobs[job].location;
// 		loc_array.push(newLocation);
// 	}
// 	return loc_array;
// }

// console.log(locationizer(work));

// $('#main').append(internationalizeButton);
// function inName(name) {
// 	var splitName = name.trim().split(" ");
// 	console.log(splitName);
// 	var firstName = splitName[0].slice(0,1).toUpperCase() + splitName[0].slice(1);
// 	var secondName = splitName[1].toUpperCase();
// 	var internationalizedName = firstName + " " + secondName;
// 	return internationalizedName;
// }

projects.display = function() {
	for (displayProject in projects.project) {
	$('#projects').append(HTMLprojectStart);
	var formattedProjectTitle = HTMLprojectTitle.replace("%data%", projects.project[displayProject].projectTitle);
	var formattedProjectDates = HTMLprojectDates.replace("%data%", projects.project[displayProject].projectDate);
	var formattedProjectDescription = HTMLprojectDescription.replace("%data%", projects.project[displayProject].projectDescription);
	$(".project-entry:last").append(formattedProjectTitle);
	$(".project-entry:last").append(formattedProjectDates);
	$(".project-entry:last").append(formattedProjectDescription);
	var formattedProjectImage = HTMLprojectImage.replace("%data%", projects.project[displayProject].projectImage);
	$(".project-entry:last").append(formattedProjectImage);
	}
}

projects.display();

$('#mapDiv').append(googleMap);