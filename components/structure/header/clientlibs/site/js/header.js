jQuery(
    (function($) {
        'use strict';

       	$(window).on("resize", function(e) {
	    	var windowWidth = $( window ).width();
	    	if (windowWidth < 768) {
	    		$('.gore-marketing-navigation .has-submenu').addClass('no-hover');
	    	} else {
	    		$('.gore-marketing-navigation .has-submenu').removeClass('no-hover');
	    	}
	    });

        function showMenuOverlay() {
        	var $menuOverlay = $('.headerNavHoverOverlay');
        	$menuOverlay.addClass('show');
        }

        function hideMenuOverlay() {
        	var $menuOverlay = $('.headerNavHoverOverlay');
        	$menuOverlay.removeClass('show');
        }

        function toggleNavbar () {
        	$('body').toggleClass('navbar-open');
        	$('.cmp-structure-header').toggleClass('navbar-open');
        }

        function init() {
            $('textarea.autoresize').autoResize({extraSpace: 0});
        	var $menu = $('.gore-marketing-navigation .has-submenu');
        	var icon = '<i class="gore-icon gore-icon-user"></i>';
        	var menuHoverOverlay = '<div class="headerNavHoverOverlay"></div>';
        	var $toggleNav = $('.cmp-structure-header .toggle-nav');
        	$('body').append(menuHoverOverlay);
        	$('.gore-marketing-navigation .gore-marketing-menu.css-class-profile-icon .menu-link').append(icon);
        	$menu.hover(showMenuOverlay, hideMenuOverlay);
        	$toggleNav.on('click', toggleNavbar);
        	var windowWidth = $( window ).width();
	    	if (windowWidth < 768) {
	    		$menu.addClass('no-hover');
	    	}
        }

    	init();
	    
    })(jQuery)
);