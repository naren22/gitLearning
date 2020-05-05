jQuery(
    (function($) {
        'use strict';

        $('.cmp-search-property .field .checkbox label, .cmp-search-date-range .field .checkbox label').on('click', toggleCheckbox);

        function toggleCheckbox(e) {
            var checkbox = $(this).parent().find('input');
            checkbox.trigger('click');
        }

        $('.cmp-search-property .field.accordion, .cmp-search-date-range .field.accordion').each(function(index) {
        	var $checboxes = $(this).find('.custom-field-checkbox input');
        	var $radios = $(this).find('.custom-field-radio input');
        	var $checked = $(this).find('.checkbox input:checked');
        	var $qttyElem = $(this).find('.filter-title .active-qtty');
        	var count = $checked.length;
        	if (count > 0) {
        		$qttyElem.text('('+count+')');
        	}
        	$checboxes.each(function(i) {
        		$(this).click(function() {
        			if ($(this).prop('checked')) {
        				count += 1;
			        } else {
			           count -= 1;
			        }
			        if (count > 0) {
		        		$qttyElem.text('('+count+')');
		        	} else {
		        		$qttyElem.text('');
		        	}
        		});
        	});
        	$radios.each(function(i) {
        		$(this).click(function() {
    				count = 1;
    				$qttyElem.text('('+count+')');
        		});
        	});

        });

    })(jQuery)
);