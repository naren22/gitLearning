///bin/gore-marketing/contactus.html

jQuery((function($) {
	"use strict";

	/** Update any return urls with the LocalStorage value if present; otherwise use the url in the href */

	(function() {
		$('#contactus-form-gm').submit(function(event) {
			console.log("Handler for .submit() called.");
			event.preventDefault();
			//get form input and form a json
			var json = {};
			json.title = $('#cf_title').val();
			json.firstName = $('#cf_firstname').val();
			json.lastName = $('#cf_lastname').val();
			json.email = $('#cf_emailaddress').val();
			json.toEmail = $('#cf_toEmail').val();
			json.subject = $('#cf_subject').val();
			json.message = $('#cf_message').val();
			$.ajax({
				type : 'POST',
				url : '/bin/gore/contactus.html',
				dataType : "json",
				contentType : "application/json; charset=utf-8",
				data : JSON.stringify(json),
				success : function(result, status, xhr) {
					console.log('success');
					$('.thank-you-success').removeClass('hidden');
					$('#contactus-form-gm').hide();
					$('.thank-you-error').addClass('hidden');
				},
				error : function(xhr, status, error) {
					console.log('error');
					$('.thank-you-success').addClass('hidden');
					$('#contactus-form-gm').hide();
					$('.thank-you-error').removeClass('hidden');
				}
			});
		});
	}());
}(jQuery)));