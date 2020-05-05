jQuery(
    (function($) {
        'use strict';

      	var count = 0;
		var $filtersOn = $('.filters-header .filters-on');
		var $filtersQtty = $('.cmp-search-statistics .show-filterbar .filters-qtty');
	    $(".filters-header .hide-filters-btn, .cmp-search-statistics .show-filterbar").on('click', toggleFilterBar);
	    $('.cmp-search-property .checkbox input, .cmp-search-date-range .checkbox input').on('change', updateFiltersCount);
	    $(window).on("resize", function(e) {
	    	var windowWidth = $( window ).width();
	    	if (windowWidth < 768) {
	    		closeFilterBar();
	    	}
	    });
	    
		var $showFiltersBtn = $('.cmp-search-statistics .show-filterbar');
		$(window).scroll(function (event) {
			var windowWidth = $( window ).width();
	    	if (windowWidth < 768) {
		    	// what the y position of the scroll is
				var y = $(this).scrollTop();

				// whether that's below the form
				if (y > 0) {
					// if so, ad the fixed class
					$showFiltersBtn.addClass('fixed');
				} else {
					// otherwise remove it
					$showFiltersBtn.removeClass('fixed');
				}
			}
		});
		var $filterHeader = $('.cmp-search-filter-toggle');
		$('.gore-marketing-asset-search.aem-GridColumn--default--3').scroll(function (event) {
			var windowWidth = $( window ).width();
	    	if (windowWidth < 768) {
		    	// what the y position of the scroll is
				var y = $(this).scrollTop();

				// whether that's below the form
				if (y > 0) {
					// if so, ad the fixed class
					$filterHeader.addClass('shadow');
				} else {
					// otherwise remove it
					$filterHeader.removeClass('shadow');
				}
			}
		});

	    // Set images mosaic for the results items
        function setMosaic (maxRH) {
            $('#search-results-cards-mosaic').Mosaic({
                maxRowHeight: maxRH,
                maxRowHeightPolicy: 'tail',
                innerGap: 16,
                triggerFitEventName: 'update-mosaic'
            });
        }

	    function toggleFilterBar(e) {
	    	var maxRH = 300;
	    	$('.gore-marketing-asset-search.aem-GridColumn--default--3').toggleClass('filterbar-closed');
	    	$('.gore-marketing-asset-search.aem-GridColumn--default--9').toggleClass('filterbar-closed');
	    	$('.cmp-search-statistics .show-filterbar').toggleClass('show');
	    	if ($('.cmp-search-statistics .show-filterbar').hasClass('show')) {
	    		$('body').removeClass('filterbar-open');
	    		maxRH = 350;
	    	} else {
	    		$('body').addClass('filterbar-open');
	    	}
			setMosaic(maxRH);
	    }

	    function updateFiltersCount() {
		    count = $('.cmp-search-property .checkbox input:checked, .cmp-search-date-range .checkbox input:checked').length;
		    if (count > 0) {
	    		$filtersOn.text('('+count+')');
	    		$filtersQtty.text(count);
	    		$filtersQtty.closest('.cmp-search-statistics').removeClass('filters-inactive');
	    	} else {
	    		$filtersOn.text('');
	    		$filtersQtty.text('0');
	    		$filtersQtty.closest('.cmp-search-statistics').addClass('filters-inactive');
	    	}
    	}

    	function closeFilterBar() {
			$('body').removeClass('filterbar-open');
    		$('.gore-marketing-asset-search.aem-GridColumn--default--3').addClass('filterbar-closed');
    		$('.gore-marketing-asset-search.aem-GridColumn--default--9').addClass('filterbar-closed');
    		$('.cmp-search-statistics .show-filterbar').addClass('show');
    	}

    	function init() {
    		/*var windowWidth = $( window ).width();
    		if (windowWidth < 768) {
    			closeFilterBar();
	    	}*/
    		closeFilterBar();
    		updateFiltersCount();
    	}
    	init();
	    

    })(jQuery)
);