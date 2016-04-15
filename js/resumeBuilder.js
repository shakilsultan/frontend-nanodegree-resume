var bio = {
	"name": "Shakil Sultan Ali",
	"role": "Front-End Web Developer",
	"contacts": {
		"mobile": "+92333555445",
		"email": "shakil@business.com",
		"github": "https://github.com/shakilsultan",
		"twitter": "https://twitter.com/shakilsul",
		"location": "Karachi, Pakistan"
	},
	"welcomeMessage": "Welcome to my online resume!<br />I am currently undertaking Udacity's Front-End Nanodegree Program and below you can see all of my skills, education and work details.",
	"skills": ["SEO", "HTML", "CSS", "JavaScript / jQuery", "Java"],
	"biopic": "images/shakil.jpg",
	"display" : function() {
		var formattedHeaderName = HTMLheaderName.replace('%data%', bio.name);
		var formattedHeaderRole = HTMLheaderRole.replace('%data%', bio.role);
		var formattedHTMLMobile = HTMLmobile.replace('%data%', bio.contacts.mobile);
		var formattedHTMLEmail = HTMLemail.replace('%data%', '<a href="mailto:' + bio.contacts.email + '">' + bio.contacts.email + '</a>');
		var formattedHTMLGitHub = HTMLgithub.replace('%data%', '<a href="' + bio.contacts.github + '" target="_blank">' + bio.contacts.github + '</a>');
		var formattedHTMLTwitter = HTMLtwitter.replace('%data%', '<a href="' + bio.contacts.twitter + '" target="_blank">' + bio.contacts.twitter + '</a>');
		var formattedHTMLLocation = HTMLlocation.replace('%data%', bio.contacts.location);
		var formattedBioPic = HTMLbioPic.replace('%data%', bio.biopic);
		var formattedWelcomeMSG = HTMLwelcomeMsg.replace('%data%', bio.welcomeMessage);
		$('#header').prepend(formattedHeaderRole);
		$('#header').prepend(formattedHeaderName);
		$('#topContacts').append(formattedHTMLMobile);
		$('#topContacts').append(formattedHTMLEmail);
		$('#topContacts').append(formattedHTMLGitHub);
		$('#topContacts').append(formattedHTMLTwitter);
		$('#topContacts').append(formattedHTMLLocation);
		$('#header').append(formattedBioPic);
		$('#header').append(formattedWelcomeMSG);
		$('#header').append(HTMLskillsStart);
		for(var i = 0; i<bio.skills.length; i++) {
			var formattedSkills = HTMLskills.replace('%data%', bio.skills[i]);
			$('#skills').append(formattedSkills);
		}
	}
};

var education = {
	"schools": [{
		"name": "APTECH",
		"location": "Karachi, Pakistan",
		"degree": "Diploma in Software Engineering",
		"majors": ["Software Development"],
		"dates": "2011 - 2014",
		"url": "http://aptech-education.com.pk/ace-gdn/"
	}],
	"onlineCourses": [{
		"title": "Introduction to HTML",
		"school": "SitePoint.com",
		"date": 2015,
		"url": "https://www.sitepoint.com/premium/cert/0a65042de8583898"
	}, {
		"title": "Business Etiquette: Phone, Email, and Text",
		"school": "Lynda.com",
		"date": 2015,
		"url": "http://www.lynda.com/ViewCertificate/7DF2DE8A43714DAB91D63F45EE0728B2"
	}, {
		"title": "Learning to Be Assertive",
		"school": "Lynda.com",
		"date": 2015,
		"url": "http://www.lynda.com/ViewCertificate/A66B9802417045B0918DFDEB73BE174C"
	}, {
		"title": "Improving Your Judgment",
		"school": "Lynda.com",
		"date": 2014,
		"url": "http://www.lynda.com/ViewCertificate/2DA7F0A202B34A1DBC3A9888E8F96A88"
	}, {
		"title": "Conflict Resolution Fundamentals",
		"school": "Lynda.com",
		"date": 2014,
		"url": "http://www.lynda.com/ViewCertificate/7780EF2AE61340BBA1887AB39C5FF422"
	}],
	"display": function() {
		for (school in education.schools) {
			$('#education').append(HTMLschoolStart);
			var formattedSchoolName = HTMLschoolName.replace('%data%', education.schools[school].name);
			var formattedSchoolDegree = HTMLschoolDegree.replace('%data%', education.schools[school].degree);
			var formattedSchoolDates = HTMLschoolDates.replace('%data%', education.schools[school].dates);
			var formattedSchoolLocation = HTMLschoolLocation.replace('%data%', education.schools[school].location);
			var formattedSchoolMajor = HTMLschoolMajor.replace('%data%', education.schools[school].majors);
			$('.education-entry:first').append(formattedSchoolName + formattedSchoolDegree);
			$('.education-entry:first').append(formattedSchoolDates);
			$('.education-entry:first').append(formattedSchoolLocation);
			$('.education-entry:first').append(formattedSchoolMajor);
			$('.education-entry:first').append(HTMLonlineClasses);
		}
		for (course in education.onlineCourses) {
			var formattedOnlineTitle = HTMLonlineTitle.replace('%data%', education.onlineCourses[course].title);
			var formattedOnlineTitleURL = formattedOnlineTitle.replace('#', onlineCoursesURL[course]);
			var formattedOnlineSchool = HTMLonlineSchool.replace('%data%', education.onlineCourses[course].school);
			var formattedOnlineDates = HTMLonlineDates.replace('%data%', education.onlineCourses[course].date);
			var formattedOnlineURL = HTMLonlineURL.replace('#', education.onlineCourses[course].url);
			var formattedOnlineURLTitle = formattedOnlineURL.replace('%data%', 'View Certificate');
			$('.education-entry:last').append(formattedOnlineTitleURL + formattedOnlineSchool);
			$('.education-entry:last').append(formattedOnlineDates);
			$('.education-entry:last').append(formattedOnlineURLTitle);
		}
	}
};

var onlineCoursesURL = [
	'https://www.sitepoint.com/premium/courses/introduction-to-html-2897',
	'http://www.lynda.com/Clear-tutorials/Business-Etiquette-Phone-Email-Text/365216-2.html',
	'http://www.lynda.com/Business-Business-Skills-tutorials/Learning-Assertive/175640-2.html',
	'http://www.lynda.com/Business-Skills-tutorials/Improving-Your-Judgment/162446-2.html',
	'http://www.lynda.com/Business-skills-tutorials/Conflict-Resolution-Fundamentals/107420-2.html'
];

var work = {
	"jobs": [{
		"employer": "Falcon Living",
		"title": "SEO Lead / Front-End Web Developer",
		"location": "Palatine, IL",
		"dates": "In Progress",
		"description": "I have started working for this company since Jan 2016 and I am responsible for managing SEO projects and front-end work."
	}, {
		"employer": "iVortexMedia",
		"title": "Senior Webmaster / Manager",
		"location": "Naples, FL",
		"dates": "April, 2009 - December, 2015",
		"description": "Over the course of 6.5 years, I had held several positions and became Senior Webmaster as well as being responsible for hiring/training other employees."
	}],
	"display": function() {
		for (job in work.jobs) {
			$('#workExperience').append(HTMLworkStart);
			var formattedEmployer = HTMLworkEmployer.replace('%data%', work.jobs[job].employer);
			var formattedTitle = HTMLworkTitle.replace('%data%', work.jobs[job].title);
			var formattedEmployerTitle = formattedEmployer + formattedTitle;
			var formattedYearsWorked = HTMLworkDates.replace('%data%', work.jobs[job].dates);
			var formattedLocation = HTMLworkLocation.replace('%data%', work.jobs[job].location);
			var formattedDescription = HTMLworkDescription.replace('%data%', work.jobs[job].description);
			$('.work-entry:last').append(formattedEmployerTitle);
			$('.work-entry:last').append(formattedLocation);
			$('.work-entry:last').append(formattedYearsWorked);
			$('.work-entry:last').append(formattedDescription);
		}
	}
};

var projects = {
	"projects": [{
		"title": "Cambridge Tailors",
		"dates": "May 2012",
		"description": "My main responsibilities were :  1) Hiring/Managing team of web developers, graphics designer and web content writer.   2) Identifying design and code issues within the site and collaborate with web developers to get those issues fixed. Suggest any new changes/ideas which may improve the site.  3) Collaborate with the graphics designer to achieve a good and simple UI.   4) Collaborate with the content writer to ensure the content developed was acceptable to the university team since the project was aimed to assist university students",
		"images": ["images/project_1.png"]
	}, {
		"title": "WordPress Microsites",
		"dates": "November 2015",
		"description": "I was tasked with creating 100 odd wordpress sites from start to finish.  1) Had to come up with domain names and get them registered.  2) Install WordPress on each site and perform optimizations at server-end to make page loads faster and efficient.  3) Develop one-page WordPress sites and put content",
		"images": ["images/project_2.png"]
	}],
	"display": function() {
		for (displayProject in projects.projects) {
			$('#projects').append(HTMLprojectStart);
			var formattedProjectTitle = HTMLprojectTitle.replace('%data%', projects.projects[displayProject].title);
			var formattedProjectDates = HTMLprojectDates.replace('%data%', projects.projects[displayProject].dates);
			var formattedProjectDescription = HTMLprojectDescription.replace('%data%', projects.projects[displayProject].description);
			$('.project-entry:last').append(formattedProjectTitle);
			$('.project-entry:last').append(formattedProjectDates);
			$('.project-entry:last').append(formattedProjectDescription);
			var formattedProjectImage = HTMLprojectImage.replace('%data%', projects.projects[displayProject].images);
			$('.project-entry:last').append(formattedProjectImage);
		}
	}
};

function displayFooter() {
	var formattedHTMLMobile = HTMLmobile.replace('%data%', bio.contacts.mobile);
	var formattedHTMLEmail = HTMLemail.replace('%data%', '<a href="mailto:' + bio.contacts.email + '">' + bio.contacts.email + '</a>');
	var formattedHTMLGitHub = HTMLgithub.replace('%data%', '<a href="' + bio.contacts.github + '" target="_blank">' + bio.contacts.github + '</a>');
	var formattedHTMLTwitter = HTMLtwitter.replace('%data%', '<a href="' + bio.contacts.twitter + '" target="_blank">' + bio.contacts.twitter + '</a>');
	var formattedHTMLLocation = HTMLlocation.replace('%data%', bio.contacts.location);
	$('#footerContacts').append(formattedHTMLMobile);
	$('#footerContacts').append(formattedHTMLEmail);
	$('#footerContacts').append(formattedHTMLGitHub);
	$('#footerContacts').append(formattedHTMLTwitter);
	$('#footerContacts').append(formattedHTMLLocation);
}

bio.display();
projects.display();
education.display();
work.display();
displayFooter();
$('#mapDiv').append(googleMap);


