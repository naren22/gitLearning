/*global jQuery: false, AssetShare: false, window: false */
jQuery(
    (function($, ns) {
        'use strict';

        $('#action-button-form').on('click', downloadAssetHandler);

        function downloadAssetHandler(e) {
            var $form = $('form#action-button-form');
            var $selectors = $('input[name="related"]');

            // Add assets to the form
            if ($selectors.length > 0){
                for (var i=0;i<$selectors.length;i++){
                    if ($selectors[i].checked){
                        $form.append('<input type="hidden" name="path" value="' + $selectors[i].value + '"/>');
                    }
                }
            }

            $form.submit();
        }
    })(jQuery, AssetShare)
);
