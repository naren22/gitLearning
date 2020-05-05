///bin/gore-marketing/contactus.html

jQuery((function($) {
	"use strict";

	/** Update any return urls with the LocalStorage value if present; otherwise use the url in the href */

	(function() {
		$('#resetpassword-form-gm').submit(function(event) {
			console.log("Handler for .submit() called.");
			event.preventDefault();
			//get form input and form a json
			var json = {};
			json.pwd = $('#prf_password').val();
			json.email = $('#prf_email').html();
			json.subject = $('#prf_email_subject').val();
			json.resetKey = $('#prf_resetkey').val();
			$.ajax({
				type : 'POST',
				url : '/bin/gore/resetpassword.html',
				dataType : "json",
				contentType : "application/json; charset=utf-8",
				data : JSON.stringify(json),
				success : function(result, status, xhr) {
					console.log('success');
					$('.thank-you-success').show();
					$('.resetpassword-form').hide();
					$('.thank-you-error').hide();
				},
				error : function(xhr, status, error) {
					console.log('error');
					$('.thank-you-success').hide();
					$('.resetpassword-form').hide();
					$('.thank-you-error').show();
				}
			});
		});
		
		
		$('#prf_password').keyup(function(event) {
			var pattern = new RegExp("(?\=.*\\d.*)(?\=.*[a-z].*)(?\=.*[A-Z].*)(?\=.*[@#%\\*\\-+\=~\\[\\]{}<>\\?].*).{12,}");
		    var result = pattern.test($("#prf_password").val());
		    
			if(result){
				$('#resetpassword-form-gm-submit').removeAttr('disabled');
			}
			else {
				$('.resetpassword-form-pwd-error').show();
				$('#resetpassword-form-gm-submit').attr('disabled', 'disabled');
			}
				
		});
	}());
}(jQuery)));