jQuery((function($, ns) {
	'use strict';
	$('#nameForm').on('submit', updateProfileHandler);
	$('#phoneForm').on('submit', updateProfileHandler);
	$('#jobTitleForm').on('submit', updateProfileHandler);
	$('#addressForm').on('submit', updateProfileHandler);
	$('#passwordForm').on('submit', updateProfileHandler);
	$('#languageForm').on('submit', updateProfileHandler);
	$('#deleteForm').on('submit', deleteAccountHandler);

	function getFormData($form) {
		var unindexed_array = $form.serializeArray();
		var indexed_array = {};



		$.map(unindexed_array, function(n, i) {
			indexed_array[n['name']] = n['value'];
		});

        if ("language" == $form[0].elements[0].id){
            indexed_array[$form[0].elements[0].id] = $form[0].elements[0].value;
        }

		return indexed_array;
	}

	function updateProfileHandler(event) {
		console.log("Handler for update .submit() called.");
		event.preventDefault();
		//get form input and form a json
		var data = getFormData($(event.target));
		$.ajax({
			type : 'POST',
			url : '/bin/gore/userProfile.html',
			dataType : "json",
			contentType : "application/json; charset=utf-8",
			data : JSON.stringify(data),
			success : function(result, status, xhr) {
				console.log('update success');
				$(event.target).addClass('hidden');
				$(event.target).parent().find('.success-message').removeClass('hidden');
				$(event.target).parent().find('.error-message').addClass('hidden');
			},
			error : function(xhr, status, error) {
				console.log('update error');
				$(event.target).addClass('hidden');
				$(event.target).parent().find('.success-message').addClass('hidden');
				$(event.target).parent().find('.error-message').removeClass('hidden');
			}
		});
	}

	function deleteAccountHandler(event) {
		console.log("Handler for delete form .submit() called.");
		event.preventDefault();
		//get form input and form a json
		var data = getFormData($(event.target));

		$.ajax({
			type : 'POST',
			url : '/bin/gore/removeUser.html',
			dataType : "json",
			contentType : "application/json; charset=utf-8",
			data : JSON.stringify(data),
			success : function(result, status, xhr) {
				console.log('delete success');
				$(event.target).addClass('hidden');
				$(event.target).parent().find('.success-message').removeClass('hidden');
				$(event.target).parent().find('.error-message').addClass('hidden');
			},
			error : function(xhr, status, error) {
				console.log('delete error');
				$(event.target).addClass('hidden');
				$(event.target).parent().find('.success-message').addClass('hidden');
				$(event.target).parent().find('.error-message').removeClass('hidden');
			}
		});
	}
	$(".edit-link").on('click', function(){
		$(this).parent().find(".cancel-link").removeClass('hidden');
		$(this).addClass('hidden');
		var formId = $(this).data('form-id');
		$(this).parent().find('span').addClass('hidden');
		$('#'+formId).parent().find('.success-message').addClass('hidden');
		$('#'+formId).parent().find('.error-message').addClass('hidden');
		$('#'+formId).removeClass('hidden');
	});
	$(".cancel-link").on('click', function(){
		$(this).addClass('hidden');
		$(this).parent().find(".edit-link").removeClass('hidden');
		var formId = $(this).data('form-id');
		$(this).parent().find('span').removeClass('hidden');
		$('#'+formId).parent().find('.success-message').addClass('hidden');
		$('#'+formId).parent().find('.error-message').addClass('hidden');
		$('#'+formId).addClass('hidden');
	});
	$("#delete-button-profile").on('click', function(){
		$("#delete-account-popup").removeClass('hidden');
	});

})(jQuery, AssetShare));