///bin/gore-marketing/contactus.html

jQuery((function($) {
	"use strict";

	/** Update any return urls with the LocalStorage value if present; otherwise use the url in the href */

	(function() {
		$('#forgotpassword-form-gm').submit(function(event) {
			console.log("Handler for .submit() called.");
			event.preventDefault();
			//get form input and form a json
			var json = {};
			json.email = $('#fpf_emailaddress').val();
			json.subject = $('#fpf_email_subject').val();
			$.ajax({
				type : 'POST',
				url : '/bin/gore/forgotpassword.html',
				dataType : "json",
				contentType : "application/json; charset=utf-8",
				data : JSON.stringify(json),
				success : function(result, status, xhr) {
					console.log('success');
					$('.thank-you-success').show();
					$('.forgotpassword-form').hide();
					$('.thank-you-error').hide();
				},
				error : function(xhr, status, error) {
					console.log('error');
					//get error code and decide whether unknown error or email not found error.
					$('.thank-you-success').hide();
					$('.forgotpassword-form').hide();
					$('.thank-you-error').show();
				}
			});
			
		});
	}());
}(jQuery)));