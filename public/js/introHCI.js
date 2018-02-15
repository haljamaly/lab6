'use strict';

// Call this function when the page loads (the "ready" event)
$(document).ready(function() {
	initializePage();

})

/*
 * Function that is called when the document is ready.
 */
function initializePage() {
	$('.project a').click(addProjectDetails);
	$('#colorBtn').click(randomizeColors);
	$('a').click(addProjectDetails(e));

}

/*
 * Make an AJAX call to retrieve project details and add it in
 */
function addProjectDetails(e) {
	// Prevent following the link
	e.preventDefault();

	// Get the div ID, e.g., "project3"
	var projectID = $(this).closest('.project').attr('id');
	// get rid of 'project' from the front of the id 'project3'
	var idNumber = projectID.substr('project'.length);

	$.get('project/' + idNumber, callback);
	}

	function callback(response) {
		var tag = ".details#project" + response.id;
		console.log(response.image);
		var projectHTML = '<a href="#" class="thumbnail" style=" float: left; position: relative; width:30%;">' + 
			'<img src="' + response.image + '" class="img"></a>'
			+
			'<p>' + response.date + '</p>' +
			'<p><small>' + response.summary + '</small></p></a>';
		$(tag).html(projectHTML)
	}

