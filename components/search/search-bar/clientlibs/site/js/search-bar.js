/*global jQuery: false, AssetShare: false, window: false */
jQuery(
    (function($, ns) {
        'use strict';

        $('.search-keyword-label').on('click', keywordSearch);
        $('#searchTypeDropdown .menu .item').on('click', typeSearch);

        function keywordSearch(e) {
                var input = $('input[name="fulltext"]')[0];
                if(typeof input != 'undefined'){
                    input.value = e.target.id;
                }
                updateSearch("fulltext="+e.target.id);
        }

        function typeSearch(e) {
                var query = "";
                if ("image" == e.target.dataset.value){
                    query = "10001_group.propertyvalues.property=./jcr:content/metadata/dc:format&10001_group.propertyvalues.operation=equals&10001_group.propertyvalues.0_values=image/jpeg,image/gif,image/png,image/tiff,image/vnd.adobe.photoshop,application/postscript";
                }
                else if ("doc" == e.target.dataset.value){
                    query = "10001_group.propertyvalues.property=./jcr:content/metadata/dc:format&10001_group.propertyvalues.operation=equals&10001_group.propertyvalues.0_values=application/vnd.openxmlformats-officedocument.wordprocessingml.document,application/pdf,text/plain";
                }
                else if ("video" == e.target.dataset.value){
                    query = "10001_group.propertyvalues.property=./jcr:content/metadata/dc:format&10001_group.propertyvalues.operation=equals&10001_group.propertyvalues.0_values=video/quicktime,video/mp4";
                }
                else if ("pres" == e.target.dataset.value){
                    query = "10001_group.propertyvalues.property=./jcr:content/metadata/dc:format&10001_group.propertyvalues.operation=equals&10001_group.propertyvalues.0_values=application/vnd.openxmlformats-officedocument.presentationml.presentation";
                }
                else {
                    query = e.target.dataset.value;
                }
                updateSearch(query);
        }

        function getQueryVariable(url, variable) {
        	 var query = url.substring(1);
         var vars = query.split('&');
         for (var i=0; i<vars.length; i++) {
              var pair = vars[i].split('=');
              if (pair[0] == variable) {
                return pair[1];
              }
         }

         return false;
        }

        // Set images mosaic for the results items
        function setMosaic (maxRH) {
            $('#search-results-cards-mosaic').Mosaic({
                maxRowHeight: maxRH,
                maxRowHeightPolicy: 'tail',
                innerGap: 16,
                triggerFitEventName: 'update-mosaic'
            });
        }

        function updateSearch(queryParams) {
            var actualAddress = window.location.href;
            var url = new URL(actualAddress);
            var queryPairs = queryParams.split("&");
            var newUrl;


            for (var i=0;i<queryPairs.length;i++){
                var pair = queryPairs[i].split("=");
                url.searchParams.set(pair[0], pair[1]);
            }

            newUrl = url.href;

            ns.Navigation.addressBar(newUrl);
            ns.Navigation.returnUrl(newUrl);

            $.ajax({
                url: newUrl,
                success: function(result){
                    var results = $('div[data-asset-share-id="results-content"]');
                    results.html($(result).find('div[data-asset-share-id="results-content"]').html());
                    var resFooter = $('div[data-asset-share-id="results-footer"]');
                    resFooter.html($(result).find('div[data-asset-share-id="results-footer"]').html());
                    var resStats = $('div[data-asset-share-id="cmp-statistics__statistics"]');
                    resStats.html($(result).find('div[data-asset-share-id="cmp-statistics__statistics"]').html());
                    var maxRH = 300;
                    if ($('.cmp-search-statistics .show-filterbar').hasClass('show')) {
                        maxRH = 350;
                    }
                    setMosaic(maxRH);
                }
            });
        }
    })(jQuery, AssetShare)
);
