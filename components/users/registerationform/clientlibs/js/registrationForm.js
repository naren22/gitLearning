$(document).ready(function(){

  $("#register-email").blur(function(){
    var data = {
    	    email: $("#register-email").val(),
    	    validationType: "email"
    	};
    var formData = new FormData();
      formData.append("email", $("#register-email").val());
      formData.append( "validationType", "email");
    $.ajax({
        type: "POST",
        url: "/bin/gore/userRegistration.html",
         contentType: false,
        processData: false,
        data: formData,
        success: function(response) {
        	console.log("response is "+response);
        	$("#email-error-message").addClass("hidden");
        } else 
        	$("#email-error-message").removeClass("hidden");
    });
    
  });
  
  $("#password").blur(function(){
	    var pattern = new RegExp("(?\=.*\\d.*)(?\=.*[a-z].*)(?\=.*[A-Z].*)(?\=.*[@#%\\*\\-+\=~\\[\\]{}<>\\?].*).{12,}");
	    var result = pattern.test($("#password").val());
	    if(!result){
	    	$("#password-error-message").removeClass("hidden");
	    	$("#password-success-message").addClass("hidden");
	    	$('#register-button').attr("disabled", "disabled");
	    } else {
	    	$("#password-success-message").removeClass("hidden");
	    	$("#password-error-message").addClass("hidden");
	    	$('#register-button').removeAttr("disabled");
	    }
	    console.log("result"+result);

  });
  
  
  $("#register-firsttermlabel").on('change', function() {
	  if ($(this).is(':checked')) {
		    $(this).attr('value', 'true');
		    $("#terms-accepted-datetime").val(new Date());
		  } else {
		    $(this).attr('value', 'false');
		    $("#terms-accepted-datetime").val("");
		  }
		  
		});
  
  $("#register-secondtermlabel").on('change', function() {
	  if ($(this).is(':checked')) {
		    $(this).attr('value', 'true');
		    $("#consent-accepted-datetime").val(new Date());
		  } else {
		    $(this).attr('value', 'false');
		    $("#consent-accepted-datetime").val("");
		  }
		  
		});
  
});