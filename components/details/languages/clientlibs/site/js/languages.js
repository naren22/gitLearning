/*global jQuery: false, AssetShare: false, window: false */
jQuery(
    (function($, ns) {
        'use strict';

        $('input[name="related"]').on('click', relatedCheckboxHandler);
        $('.dropdown-wrapper .toggle-wrapper:not(.no-toggle)').on('click', toggleDropdown);

        function relatedCheckboxHandler(e) {
            var input = $("#action-button-form :input[value='"+e.toElement.value+"']");
            var lang = $(this).data('lang');
            var selectedLangs = $('.asset-languages-selected').text();

            if (selectedLangs.indexOf(lang) >= 0) {
                selectedLangs = selectedLangs.replace(', '+lang, '');
            } else {
                selectedLangs = selectedLangs + ', ' + lang;
            }
            $('.asset-languages-selected').text(selectedLangs);

            if (!e.toElement.checked && input.length >0){
                input[0].remove();
            }
        }
        function toggleDropdown (e) {
            $(this).parent().toggleClass('open');
        }
    })(jQuery, AssetShare)
);
