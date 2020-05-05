$(function() {	
    
	$("#login-button").click(function(e) {
		
		var url_string = location.href;

		e.preventDefault();
		

		    var formData = new FormData();
		      formData.append("email", $("#login-userid").val());
		      formData.append( "validationType", "userid");
		    $.ajax({
		        type: "POST",
		        url: "/bin/gore/userRegistration.html",
		         contentType: false,
		        processData: false,
		        data: formData,
		        success: function(response) {
		          console.log("response is "+response);
		          if(response!= ""){
		        	  loginUser(response,url_string);
		          }else{
		        	  console.log("Invalid Email");
		        	  $("#loginErrorMessage").removeClass("hidden");
		          }
		          
		        },
		        error : function(XMLHttpRequest, textStatus, errorThrown) {
					console.log("Invalid User Name or Password");
					$("#loginErrorMessage").removeClass("hidden");
				}
		    });
		    
		  });

    var loginUser = function (userid, url_string){
    	
    	$.ajax({
			type : "POST",
			url : $('#url').val(),
			data : {
				j_username : userid,
				j_password : $("#login-password").val(),
				j_validate : "true"
			},
			success : function(data, textStatus, jqXHR) {	
				console.log('security check is successful. Doing a redirect.')
				redirectLogin(url_string);
			},
			error : function(XMLHttpRequest, textStatus, errorThrown) {
				console.log("security check failed, maybe wrong User Name or Password");
				$("#loginErrorMessage").removeClass("hidden");
			}
		});
    	
    } 
	
	var redirectLogin = function (url_string) {
		
		var url =new URL(url_string);
	    var unique_id = url.searchParams.get("id");
		$.ajax({
			type : "POST",			
			url : "/bin/gore/loginRedirect.html",
			data : {
				homepageurl : $("#login-homepageurl").val(),
				uniqueId: unique_id,
				url:url_string
			},
			success : function(data, textStatus, jqXHR) {		
				console.log("success");
				window.location.href=data;
			},
			error : function(XMLHttpRequest, textStatus, errorThrown) {
				//$("#errordiv").val("Invalid User Name or Password");
				console.log("Invalid User Name or Password");
				$("#loginErrorMessage").removeClass("hidden");
			}
		});
	}
});
