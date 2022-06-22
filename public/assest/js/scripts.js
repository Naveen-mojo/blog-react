var ATBS = ATBS || {};

(function($) {

    // USE STRICT
    "use strict";

    var $window = $(window);
    var $document = $(document);
    var $goToTopEl = $('.js-go-top-el');

    function getCookie( cookieName ) {
        var name = cookieName + '=';
        var decodedCookie = decodeURIComponent( document.cookie );
        var cookies = decodedCookie.split( ';' );
        for ( var i = 0; i < cookies.length; i++ ) {
            var cookie = cookies[ i ];
            while ( cookie.charAt( 0 ) === ' ' ) {
                cookie = cookie.substring( 1 );
            }
            if ( cookie.indexOf( name ) === 0 ) {
                return cookie.substring( name.length, cookie.length );
            }
        }
        return '';
    }
    
    function setCookie( cookieName, cookieValue, expireDays ) {
        var date = new Date();
        date.setTime( date.getTime() + expireDays * 24 * 60 * 60 * 1000 );
        var expires = 'expires=' + date.toGMTString();
        document.cookie = cookieName + '=' + cookieValue + ';' + expires + ';path=/';
    }

    /* ============================================================================
    * Detect if an element is in viewport
    * ==========================================================================*/
	function inViewport( element, dimension ) {
		if ( element.length ) {
			var offsetLeft = element.offset().left,
				width = element.outerWidth(),
				viewportWidth = $( window ).innerWidth();
			if ( dimension === 'x' ) {
				return ( offsetLeft > 0 ) && ( ( offsetLeft + width ) <= viewportWidth );
			}
		}
	}
    
    ATBS.header = {

        init: function() {
        	ATBS.header.ajaxSearch();
            ATBS.header.atbsSearchButton();
            ATBS.header.pagiButton();
            ATBS.header.ajaxMegamenu();
            ATBS.header.offCanvasMenu();
            ATBS.header.priorityNavInit();
			ATBS.header.searchToggle();
			ATBS.header.searchPanel();
            ATBS.header.loginForm();
            ATBS.header.login();
            ATBS.header.smartAffix.init({
                fixedHeader: '.js-sticky-header',
                headerPlaceHolder: '.js-sticky-header-holder',
            });
        },
        /* ============================================================================
	     * Header dropdown search
	     * ==========================================================================*/
		searchToggle: function() {
			var $headerSearchDropdown = $('#header-search-dropdown');
			var $searchDropdownToggle = $('.js-search-toggle');
			var $mobileHeader = $('#atbs-mobile-header');
			var $stickyHeaderNav = $('#atbs-sticky-header').find('.navigation-bar__inner');
			var $staticHeaderNav = $('.site-header').find('.navigation-bar__inner');
			var $headerSearchDropdownInput = $headerSearchDropdown.find('.search-form__input');

			$headerSearchDropdown.on('click', function(e) {
				e.stopPropagation();
			});

			$searchDropdownToggle.on('click', function(e) {
				e.stopPropagation();
				var $toggleBtn = $(this);
				var position = '';


				if ($toggleBtn.hasClass('mobile-header-btn')) {
					position = 'mobile';
				} else if ($toggleBtn.parents('.sticky-header').length) {
					position = 'sticky';
				} else {
					position = 'navbar';
				}

				if ($headerSearchDropdown.hasClass('is-in-' + position) || !$headerSearchDropdown.hasClass('is-active')) {
					$headerSearchDropdown.toggleClass('is-active');
				}

				switch(position) {
					case 'mobile':
						if (!$headerSearchDropdown.hasClass('is-in-mobile')) {
							$headerSearchDropdown.addClass('is-in-mobile');
							$headerSearchDropdown.removeClass('is-in-sticky');
							$headerSearchDropdown.removeClass('is-in-navbar');
							$headerSearchDropdown.appendTo($mobileHeader);
						}
						break;

					case 'sticky':
						if (!$headerSearchDropdown.hasClass('is-in-sticky')) {
							$headerSearchDropdown.addClass('is-in-sticky');
							$headerSearchDropdown.removeClass('is-in-mobile');
							$headerSearchDropdown.removeClass('is-in-navbar');
							$headerSearchDropdown.insertAfter($stickyHeaderNav);
						}
						break;

					default:
						if (!$headerSearchDropdown.hasClass('is-in-navbar')) {
							$headerSearchDropdown.addClass('is-in-navbar');
							$headerSearchDropdown.removeClass('is-in-sticky');
							$headerSearchDropdown.removeClass('is-in-mobile');
							$headerSearchDropdown.insertAfter($staticHeaderNav);
						}
				}

				if ($headerSearchDropdown.hasClass('is-active')) {
					setTimeout(function () {
						$headerSearchDropdownInput.focus();
					}, 200);
				}
			});

			$document.on('click', function() {
				$headerSearchDropdown.removeClass('is-active');
			});

			$window.on('stickyHeaderHidden', function(){
				if ($headerSearchDropdown.hasClass('is-in-sticky')) {
					$headerSearchDropdown.removeClass('is-active');
				}
			});
		},
        /* ============================================================================
         * Header Search Panel
         * ==========================================================================*/
        searchPanel: function() {
        	var searchToggle = $( '.js-search-toggle' ),
        		panel = $( '.atbs-atoms-search-full-style-2' ),
        		closeBtn = $( '#atbs-atoms-search-close' );

    		function focusRestrict( event ) {
    		  $( document ).focusin( function( event ) {
    		  	// Prevent focus outside of search panel when it is opening
    		    if ( panel.hasClass( 'is-active' ) && ! ( panel.has( event.target ).length > 0 ) ) {
    		      panel.focus();
    		    }
    		  } );
    		}

    		function openPanel() {
		        $( 'body' ).addClass( 'is-atbs-atoms-search-full-style-2-opened' );
		        panel.addClass( 'is-open' );
		        panel.attr( 'tabindex', '0' ).css( 'outline', '0' );
		        // Focus after animation has ended
		        setTimeout( function() { panel.focus(); }, 450 );
    		}

    		function closePanel() {
    			$( 'body' ).removeClass( 'is-atbs-atoms-search-full-style-2-opened' );
		        panel.removeClass( 'is-open' );
		        panel.removeAttr( 'tabindex' );
		        searchToggle.focus();
    		}

        	searchToggle.click( function () {
        		openPanel();
		        // Fix Jumping Scrollbar Issue
		    } );

		    closeBtn.click( function () {
		        closePanel();
		        // Fix Jumping Scrollbar Issue
		    } );

	        focusRestrict();
        },
        /* ============================================================================
         * AJAX search
         * ==========================================================================*/
        atbsSearchButton: function() {
            var btnSearchOpen = $('.js-btn-search-open');
            var btnSearchClose = $('.js-btn-search-close');
            var formSearch = $('.atbs-search-form');
            btnSearchOpen.each(function () {
               $(this).on('click',function () {
                   $(formSearch).addClass('Open');
                   setTimeout(function () {
                       $(formSearch).addClass('Active-Animation');
                       $(btnSearchClose).focus()
                   },600);
               });
            });
            btnSearchClose.each(function () {
               $(this).on('click',function () {
                   $(formSearch).removeClass('Open');
                   $(formSearch).removeClass('Active-Animation');
                   $(btnSearchOpen).focus()
               });
            });
        },

        ajaxSearch: function() {
            var $results = '';
            var $ajaxSearch = $('.js-ajax-search');
            var ajaxStatus = '';
            var noResultText = '<span class="noresult-text">There are no results.</span>';
            var errorText = '<span class="error-text">There was some error.</span>';

            $ajaxSearch.each(function() {
                var $this = $(this);
                var $searchForm = $this.find('.search-form__input');
                var $resultsContainer = $this.find('.search-results');
                var $resultsContent = $this.find('.search-results__content:not(.default)');
                var searchTerm = '';
                var lastSearchTerm = '';

                $searchForm.on('input', $.debounce(800, function() {
                    searchTerm = $searchForm.val();

                    if (searchTerm.length > 0) {

                        $('.atbs-atoms-search-full-style-2').addClass("is-active");

                        if ((searchTerm != lastSearchTerm) || (ajaxStatus === 'failed' )) {
                            $resultsContainer.removeClass('is-error').addClass('is-loading');
                            $resultsContainer.parents('.atbs-atoms-search-full-style-2').addClass('is-loading');

                            // Hide current content while loading
                            if ($resultsContainer.hasClass('is-loading')) {
                                $resultsContent.css('opacity', 1).addClass('slide-out').on('animationend', function() {
                                    $(this).removeClass('slide-out').css('opacity', 0);
                                });
                            } else

                            lastSearchTerm = searchTerm;
                            ajaxLoad(searchTerm, $resultsContainer, $resultsContent);
                        }
                    } else {
                        $resultsContainer.removeClass('is-active');
                        $('.atbs-atoms-search-full-style-2').removeClass("is-active");
                    }
                }));
            });

            function ajaxLoad(searchTerm, $resultsContainer, $resultsContent) {
                var atbsAjaxSecurity = ajax_buff['atbs_security']['atbs_security_code']['content'];
                var ajaxCall = $.ajax({
                        url: ajaxurl,
                        type: 'post',
                        dataType: 'html',
                        data: {
                            action: 'atbs_ajax_search',
                            searchTerm: searchTerm,
                            securityCheck: atbsAjaxSecurity,
                        },
                    });

                ajaxCall.done(function(respond) {
                    $results = $.parseJSON(respond);
                    ajaxStatus = 'success';
                    if (!$results.length) {
                        $results = noResultText;
                    }
                    $resultsContent.html($results).css('opacity', 0)
                    .addClass('slide-in')
                    .on('animationend', function() {
                        $(this).removeClass('slide-in').css('opacity', '');
                    });

                    var $resultsContainer = $resultsContent.parents('.atbs-atoms-search-full__inner').find('.search-results');
                    var $resultsContainerParents = $resultsContent.parents('.atbs-atoms-search-full-style-2');
                    $resultsContainer.addClass("is-active");
                    $resultsContainerParents.removeClass('is-loading');
                });

                ajaxCall.fail(function() {
                    ajaxStatus = 'failed';
                    $resultsContainer.addClass('is-error');
                    $results = errorText;
                    $resultsContent.html($results).css('opacity', 0)
                    .addClass('slide-in')
                    .on('animationend', function() {
                        $(this).removeClass('slide-in').css('opacity', '');
                    });
                });

                ajaxCall.always(function() {
                    $resultsContainer.removeClass('is-loading');
                });
            }
        },
        /* ============================================================================
         * Megamenu Ajax
         * ==========================================================================*/
        ajaxMegamenu: function() {
            var $results = '';
            var $subCatItem = $('.atbs-mega-menu ul.sub-categories > li');
            $subCatItem.on('click',function(e) {
              e.preventDefault();
                var $this = $(this);
                if ($(this).hasClass('active')) {
                    return;
                }
                
                $(this).parents('.sub-categories').find('li').removeClass('active');
                
                var $container = $this.parents('.atbs-mega-menu__inner').find('.posts-list');
                var $thisCatSplit = $this.attr('class').split('-');
                var thisCatID = $thisCatSplit[$thisCatSplit.length - 1];
                var megaMenuStyle = 0;
                $container.append('<div class="bk-preload-wrapper"></div>');
                $container.find('article').addClass('bk-preload-blur');
            	
                if ($container.hasClass('megamenu-1st-large')) {
                    megaMenuStyle = 2;
                } else if ($container.hasClass('megamenu-style-3')) {
                    megaMenuStyle = 3;
                } else if ($container.hasClass('megamenu-style-4')) {
                    megaMenuStyle = 4;
                } else {
                    megaMenuStyle = 1;
                }
                $this.addClass('active');
                
                var $htmlRestore = ajax_buff['megamenu'][thisCatID]['html'];
                if ($htmlRestore == '') {
                    ajaxLoad(thisCatID, megaMenuStyle, $container);
                } else {
                    ajaxRestore($container, thisCatID, $htmlRestore);
                }
            });
            function ajaxLoad(thisCatID, megaMenuStyle, $container) {
                var atbsAjaxSecurity = ajax_buff['atbs_security']['atbs_security_code']['content'];  
                var ajaxCall = {
                    action: 'atbs_ajax_megamenu',
                    thisCatID: thisCatID,
                    megaMenuStyle : megaMenuStyle,
                    securityCheck: atbsAjaxSecurity
                };
                
                $.post(ajaxurl, ajaxCall, function (response) {
                    $results = $.parseJSON(response);
                    //Save HTML
                    ajax_buff['megamenu'][thisCatID]['html'] = $results;
                    // Append Result
                    $container.html($results).css('opacity', 0).animate({opacity: 1}, 500); 
                    $container.find('.bk-preload-wrapper').remove();
                    $container.find('article').removeClass('bk-preload-blur');
                });    
            }
            function ajaxRestore($container, thisCatID, $htmlRestore) {
                // Append Result
                $container.html($htmlRestore).css('opacity', 0).animate({opacity: 1}, 500);   
                $container.find('.bk-preload-wrapper').remove();
                $container.find('article').removeClass('bk-preload-blur'); 
            }
        },
        
        /* ============================================================================
         * Ajax Button
         * ==========================================================================*/
        pagiButton: function() {
            var $dotNextTemplate = '<span class="atbs-pagination__item atbs-pagination__dots atbs-pagination__dots-next">&hellip;</span>';
            var $dotPrevTemplate = '<span class="atbs-pagination__item atbs-pagination__dots atbs-pagination__dots-prev">&hellip;</span>';
            var $buttonTemplate = '<a class="atbs-pagination__item" href="#">##PAGENUMBER##</a>';
            var $dotIndex_next;
            var $dotIndex_prev;
            var $pagiAction;
            var $results = '';
            
            $('body').on('click', '.atbs-module-pagination .atbs-pagination__links > a', function(e) {
                e.preventDefault();
                var $this = $(this);
                if (($this.hasClass('disable-click')) || $this.hasClass('atbs-pagination__item-current')) 
                    return;
                
                var $pagiChildren = $this.parent().children();
                var $totalPageVal = parseInt($($pagiChildren[$pagiChildren.length - 2]).text());
                var $lastIndex = $this.parent().find('.atbs-pagination__item-current').index();
                var $lastPageVal = parseInt($($pagiChildren[$lastIndex]).text());
                
                var $nextButton = $this.parent().find('.atbs-pagination__item-next');
                var $prevButton = $this.parent().find('.atbs-pagination__item-prev');
                
                // Save the last active button 
                var $lastActiveButton = $this.parent().find('.atbs-pagination__item-current');
                // Save the last page
                var $lastActivePage = $this.parent().find('.atbs-pagination__item-current');
                
                // Add/Remove current class
                $this.siblings().removeClass('atbs-pagination__item-current');
                if ($this.hasClass('atbs-pagination__item-prev')) {
                    $lastActivePage.prev().addClass('atbs-pagination__item-current');
                } else if ($this.hasClass('atbs-pagination__item-next')) {
                    $lastActivePage.next().addClass('atbs-pagination__item-current');
                } else {
                    $this.addClass('atbs-pagination__item-current');
                }
                
                var $currentActiveButton = $this.parent().find('.atbs-pagination__item-current');
                var $currentIndex = $this.parent().find('.atbs-pagination__item-current').index();
                var $currentPageVal = parseInt($($pagiChildren[$currentIndex]).text());

                if ($currentPageVal == 1) {
                    $($prevButton).addClass('disable-click');
                    $($nextButton).removeClass('disable-click');
                } else if ($currentPageVal == $totalPageVal) {
                    $($prevButton).removeClass('disable-click');
                    $($nextButton).addClass('disable-click');
                } else {
                    $($prevButton).removeClass('disable-click');
                    $($nextButton).removeClass('disable-click');
                }
                
                if ($totalPageVal > 5) {
                    
                    if ($this.parent().find('.atbs-pagination__dots').hasClass('atbs-pagination__dots-next')) {
                        $dotIndex_next = $this.parent().find('.atbs-pagination__dots-next').index();
                    } else {
                        $dotIndex_next = -1;
                    }
                    if ($this.parent().find('.atbs-pagination__dots').hasClass('atbs-pagination__dots-prev')) {
                        $dotIndex_prev = $this.parent().find('.atbs-pagination__dots-prev').index();
                    } else {
                        $dotIndex_prev = -1;
                    }
                    
                    if (isNaN($currentPageVal)) {
                        if ($this.hasClass('atbs-pagination__item-prev')) {
                            $currentPageVal = parseInt($($pagiChildren[$currentIndex + 1]).text()) - 1;
                        } else if ($this.hasClass('atbs-pagination__item-next')) {
                            $currentPageVal = parseInt($($pagiChildren[$currentIndex - 1]).text()) + 1;
                        } else {
                            return;
                        }
                        
                    }
                    
                    if ($currentPageVal > $lastPageVal) {
                        $pagiAction = 'up';
                    } else {
                        $pagiAction = 'down';
                    }
                    
                    if (($pagiAction == 'up')) {
                        if (($currentIndex == ($dotIndex_next - 1)) || ($currentIndex == $dotIndex_next) || ($currentPageVal == $totalPageVal)) {
                            
                            $this.parent().find('.atbs-pagination__dots').remove();                 //Remove ALL Dot Signal
                            
                            if ($currentIndex == $dotIndex_next) {
                                $($buttonTemplate.replace('##PAGENUMBER##', ($currentPageVal))).insertAfter($lastActiveButton);
                                $lastActiveButton.next().addClass('atbs-pagination__item-current');
                                $currentActiveButton = $this.parent().find('.atbs-pagination__item-current');
                            }
                            
                            while (parseInt(($this.parent().find('a:nth-child(3)')).text()) != $currentPageVal) {
                                $this.parent().find('a:nth-child(3)').remove();       //Remove 1 button before
                            }
                            
                            $($dotPrevTemplate).insertBefore($currentActiveButton);                 //Insert Dot Next             
                            
                            if (($currentPageVal < ($totalPageVal - 3))) {
                                $($dotNextTemplate).insertAfter($currentActiveButton);              //Insert Dot Prev
                                $($buttonTemplate.replace('##PAGENUMBER##', ($currentPageVal + 2))).insertAfter($currentActiveButton);
                                $($buttonTemplate.replace('##PAGENUMBER##', ($currentPageVal + 1))).insertAfter($currentActiveButton);
                            } else if (($currentPageVal < ($totalPageVal - 2))) {
                                $($buttonTemplate.replace('##PAGENUMBER##', ($currentPageVal + 2))).insertAfter($currentActiveButton);
                                $($buttonTemplate.replace('##PAGENUMBER##', ($currentPageVal + 1))).insertAfter($currentActiveButton);
                            }
                            else if (($currentPageVal < ($totalPageVal - 1))) {
                                $($buttonTemplate.replace('##PAGENUMBER##', ($currentPageVal + 1))).insertAfter($currentActiveButton);
                            }
                            if ($currentPageVal == $totalPageVal) {
                                $($buttonTemplate.replace('##PAGENUMBER##', ($currentPageVal - 3))).insertBefore($currentActiveButton);
                                $($buttonTemplate.replace('##PAGENUMBER##', ($currentPageVal - 2))).insertBefore($currentActiveButton);
                                $($buttonTemplate.replace('##PAGENUMBER##', ($currentPageVal - 1))).insertBefore($currentActiveButton);
                            } else if ($currentPageVal == ($totalPageVal - 1)) {
                                $($buttonTemplate.replace('##PAGENUMBER##', ($currentPageVal - 2))).insertBefore($currentActiveButton);
                                $($buttonTemplate.replace('##PAGENUMBER##', ($currentPageVal - 1))).insertBefore($currentActiveButton);
                            } else if ($currentPageVal == ($totalPageVal - 2 )) {
                                $($buttonTemplate.replace('##PAGENUMBER##', ($currentPageVal - 1))).insertBefore($currentActiveButton);
                            }
                        }
                    } else if ($pagiAction == 'down') {
                        if (($currentIndex == ($dotIndex_prev + 1)) || ($currentIndex == $dotIndex_prev) || (($currentPageVal == 1) && ($currentIndex < $dotIndex_prev))) {
                            
                            $this.parent().find('.atbs-pagination__dots').remove();                 //Remove ALL Dot Signal
    
                            if ($currentIndex == $dotIndex_prev) {
                                $($buttonTemplate.replace('##PAGENUMBER##', ($currentPageVal))).insertBefore($lastActiveButton);
                                $lastActiveButton.prev().addClass('atbs-pagination__item-current');
                                $currentActiveButton = $this.parent().find('.atbs-pagination__item-current');
                                while (parseInt($this.parent().find('a:nth-child('+($currentIndex + 2)+')').text()) != $totalPageVal) {
                                    $this.parent().find('a:nth-child('+($currentIndex + 2)+')').remove();       //Remove 1 button before
                                }
                            } else if (($currentPageVal == 1) && ($currentIndex < $dotIndex_prev)) {
                                while (parseInt($this.parent().find('a:nth-child('+($currentIndex + 2)+')').text()) != $totalPageVal) {
                                    $this.parent().find('a:nth-child('+($currentIndex + 2)+')').remove();       //Remove 1 button before
                                }
                            } else {
                                while (parseInt($this.parent().find('a:nth-child('+($currentIndex + 1)+')').text()) != $totalPageVal) {
                                    $this.parent().find('a:nth-child('+($currentIndex + 1)+')').remove();       //Remove 1 button before
                                }
                            }
                            $($dotNextTemplate).insertAfter($currentActiveButton);                  //Insert Dot After
        
                            if ($currentPageVal > 4) {                                               // <- 1 ... 5 6 7 ... 10 -> 
                                $($dotPrevTemplate).insertBefore($currentActiveButton);              //Insert Dot Prev
                                $($buttonTemplate.replace('##PAGENUMBER##', ($currentPageVal - 2))).insertBefore($currentActiveButton);
                                $($buttonTemplate.replace('##PAGENUMBER##', ($currentPageVal - 1))).insertBefore($currentActiveButton);
                            } else if ($currentPageVal > 3) {                                         // <- 1 ... 4 5 6 ... 10 -> 
                                $($buttonTemplate.replace('##PAGENUMBER##', ($currentPageVal - 2))).insertBefore($currentActiveButton);
                                $($buttonTemplate.replace('##PAGENUMBER##', ($currentPageVal - 1))).insertBefore($currentActiveButton);
                            }
                            else if ($currentPageVal > 2) {                                          // <- 1 ... 3 4 5 ... 10 -> 
                                $($buttonTemplate.replace('##PAGENUMBER##', ($currentPageVal - 1))).insertBefore($currentActiveButton);
                            }
                            if ($currentPageVal == 1) {
                                $($buttonTemplate.replace('##PAGENUMBER##', 4)).insertAfter($currentActiveButton);
                                $($buttonTemplate.replace('##PAGENUMBER##', 3)).insertAfter($currentActiveButton);
                                $($buttonTemplate.replace('##PAGENUMBER##', 2)).insertAfter($currentActiveButton);
                            } else if ($currentPageVal == 2) {
                                $($buttonTemplate.replace('##PAGENUMBER##', 4)).insertAfter($currentActiveButton);
                                $($buttonTemplate.replace('##PAGENUMBER##', 3)).insertAfter($currentActiveButton);
                            } else if ($currentPageVal == 3) {
                                $($buttonTemplate.replace('##PAGENUMBER##', 4)).insertAfter($currentActiveButton);
                            }
                        }
                    }
                }
                if ($currentPageVal != 1) {
                    $this.siblings('.atbs-pagination__item-prev').css('display', 'inline-block');
                } else {
                    if ($this.hasClass('atbs-pagination__item-prev')) {
                        $this.css('display', 'none');
                    } else {
                        $this.siblings('.atbs-pagination__item-prev').css('display', 'none');
                    }
                }
                if ($currentPageVal == $totalPageVal) {
                    if ($this.hasClass('atbs-pagination__item-next')) {
                        $this.css('display', 'none');
                    } else {
                        $this.siblings('.atbs-pagination__item-next').css('display', 'none');
                    }
                } else {
                    $this.siblings('.atbs-pagination__item-next').css('display', 'inline-block');
                }             
                if ($this.closest('.atbs-module-pagination').hasClass('atoms-user-review-pagination')) {
                    ATBS.ATBS_CustomerReview.reviewPagination($this, $currentPageVal);
                } else {
                    ajaxListing($this, $currentPageVal);   
                } 
            });
            function ajaxListing($this, $currentPageVal) {
                var $moduleID = $this.closest('.atbs-block').attr('id');
                var moduleName = $moduleID.split("-")[0];
                var args = ajax_buff['query'][$moduleID]['args'];
                if (moduleName == 'atbs_author_results') {
                    var postOffset = ($currentPageVal-1)*args['number'] + parseInt(args['offset']);
                    var $container = $this.closest('.atbs-block').find('.authors-list');
                    var moduleInfo = '';
                } else {
                    var postOffset = ($currentPageVal-1)*args['posts_per_page'] + parseInt(args['offset']);
                    var $container = $this.closest('.atbs-block').find('.posts-list');
                    var moduleInfo = ajax_buff['query'][$moduleID]['moduleInfo'];    
                }
                var parameters = {
                        moduleName: moduleName,
                        args: args,
                        moduleInfo: moduleInfo,
                        postOffset: postOffset,
                    };
                $container.css('height', 'auto');
                $container.append('<div class="bk-preload-wrapper"></div>');
                $container.find('article').addClass('bk-preload-blur');
                
                loadAjax(parameters, $container);
                
                var $mainCol = $this.parents('.atbs-main-col');
                if ($mainCol.length > 0) {
                    var $subCol = $mainCol.siblings('.atbs-sub-col');
                    $subCol.css('min-height', '1px');
                }                
                var $scrollTarget = $this.parents('.atbs-block');
                $('body,html').animate({
                    scrollTop: $scrollTarget.offset().top,
                }, 1100);
                
            }
            function loadAjax(parameters, $container) {
                var atbsAjaxSecurity = ajax_buff['atbs_security']['atbs_security_code']['content'];
                
                var ajaxCall = {
                    action: parameters.moduleName,
                    args: parameters.args,
                    moduleInfo: parameters.moduleInfo,
                    postOffset: parameters.postOffset,
                    securityCheck: atbsAjaxSecurity
                };
                $.post(ajaxurl, ajaxCall, function (response) {
                    $results = $.parseJSON(response);
                    //Save HTML
                    // Append Result
                    $container.html($results).css('opacity', 0).animate({opacity: 1}, 500); 
                    $container.find('.bk-preload-wrapper').remove();
                    $container.find('article').removeClass('bk-preload-blur');
                    ATBS.ATBS_Bookmark.reAddBookmark($container);
                });   
            }
            function checkStickySidebar($this) {
                var $subCol = $this.parents('.atbs-main-col').siblings('.atbs-sub-col');
                if ($subCol.hasClass('js-sticky-sidebar')) {
                    return $subCol;
                } else {
                    return 0;
                }
            }
        },
        /* ============================================================================
         * Login
         * ==========================================================================*/
        login: function() {
            var $login = $('.navigation-bar__login-btn');
            var $loginForm = $('.login-modal');
            $login.on('click', function (e) {
                e.preventDefault()
                $loginForm.css({"display": 'block' });
                $loginForm.addClass('in');
            });
            var $loginClose= $loginForm.find('.close');
            $loginClose.on('click', function (e) {
                e.preventDefault()
                $loginForm.removeClass('in');
                $loginForm.css({"display": 'none' });
            });
            $loginForm.on('click', function(event) {
        		var $this =  $(event.target).not('.modal-dialog');
        		var close_form = $this.find('.login-signup-form .close');
        		close_form.click();
            });
        },
        /* ============================================================================
         * Login Form tabs
         * ==========================================================================*/
        loginForm: function() {
            var $loginFormTabsLinks = $('.js-login-form-tabs').find('a');
            $loginFormTabsLinks.on('click', function (e) {
                e.preventDefault()
                
                if ($(this).attr('aria-controls') == 'login-tab') {
                	$('.modal-body').find('#login-tab').addClass('in active');
                	$('.modal-body').find('#signup-tab').removeClass('in active');

                	$('.js-login-form-tabs').find('li').removeClass('active');
                	$(this).parent('li').addClass('active');
                }
                if ($(this).attr('aria-controls') == 'signup-tab') {
                	$('.modal-body').find('#signup-tab').addClass('in active');
                	$('.modal-body').find('#login-tab').removeClass('in active');
                	$('.js-login-form-tabs').find('li').removeClass('active');
                	$(this).parent('li').addClass('active');
                }
                // $(this).tab('show');
            });
        },
        /* ============================================================================
         * Offcanvas Menu
         * ==========================================================================*/
        offCanvasMenu: function() {
            var $backdrop = $('<div class="atbs-offcanvas-backdrop"></div>');
            var $offCanvas = $('.js-atbs-offcanvas');
            var $offCanvasToggle = $('.js-atbs-offcanvas-toggle');
            var $offCanvasClose = $('.js-atbs-offcanvas-close');
            var $offCanvasMenuHasChildren = $('.navigation--offcanvas').find('li.menu-item-has-children > a');
            var menuExpander = ('<div class="submenu-toggle"><i class="mdicon mdicon-expand_more"></i></div>');

            $backdrop.on('click', function() {
                $offCanvas.removeClass('is-active');
                $(this).fadeOut(200, function() {
                    $(this).detach();
                });
            });

            $offCanvasToggle.on('click', function(e) {
                e.preventDefault();
                var targetID = $(this).attr('href');
                var $target = $(targetID);
                $target.toggleClass('is-active');
                $backdrop.hide().appendTo(document.body).fadeIn(200);
            });

            $offCanvasClose.on('click', function(e) {
                e.preventDefault();
                var targetID = $(this).attr('href');
                var $target = $(targetID);
                $target.removeClass('is-active');
                $backdrop.fadeOut(200, function() {
                    $(this).detach();
                });
            });

            $offCanvasMenuHasChildren.append(function() {
                return $(menuExpander).on('click', function(e) {
                    e.preventDefault();
                    var $subMenu = $(this).parent().siblings('.sub-menu');

                    $subMenu.slideToggle(200);
                });
            });

            $(window).on('resize',function (e) {
                var checkExist = setInterval(function() {
                    var elementPC = $('#atbs-offcanvas-primary');
                    var elementMB = $('#atbs-offcanvas-mobile');
                    if (elementPC.hasClass('is-active') ) {
                        var checkDisplay = elementPC.css('display');
                        if (checkDisplay == 'none' ) {
                            $backdrop.css('display','none');
                            clearInterval(checkExist);
                        }
                    }
                    if (elementMB.hasClass('is-active')) {
                        var checkDisplay = elementMB.css('display');
                        if ( checkDisplay == 'none') {
                            $backdrop.css('display','none');
                            clearInterval(checkExist);
                        }
                    }
                    if (elementPC.hasClass('is-active')  && elementPC.css('display') != 'none' || elementMB.hasClass('is-active')  && elementMB.css('display') != 'none') {
                        $backdrop.css('display','block');
                        clearInterval(checkExist);
                    }
                    clearInterval(checkExist);
                }, 100); // check every 100ms
            });
        },
        /* ============================================================================
         * Prority+ menu init
         * ==========================================================================*/
        priorityNavInit: function() {
            var $menus = $('.js-priority-nav');
            $menus.each(function() {
                ATBS.priorityNav($(this));
            })
        },

        /* ============================================================================
         * Smart sticky header
         * ==========================================================================*/
        smartAffix: {
            //settings
            $headerPlaceHolder: '', //the affix menu (this element will get the mdAffixed)
            $fixedHeader: '', //the menu wrapper / placeholder
            isDestroyed: false,
            isDisabled: false,
            isFixed: false, //the current state of the menu, true if the menu is affix
            isShown: false,
            windowScrollTop: 0, 
            lastWindowScrollTop: 0, //last scrollTop position, used to calculate the scroll direction
            offCheckpoint: 0, // distance from top where fixed header will be hidden
            onCheckpoint: 0, // distance from top where fixed header can show up
            breakpoint: 992, // media breakpoint in px that it will be disabled

            init : function init (options) {

                //read the settings
                this.$fixedHeader = $(options.fixedHeader);
                this.$headerPlaceHolder = $(options.headerPlaceHolder);

                // Check if selectors exist.
                if ( !this.$fixedHeader.length || !this.$headerPlaceHolder.length ) {
                    this.isDestroyed = true;
                } else if ( !this.$fixedHeader.length || !this.$headerPlaceHolder.length || ( ATBS.documentOnResize.windowWidth <= ATBS.header.smartAffix.breakpoint ) ) { // Check if device width is smaller than breakpoint.
                    this.isDisabled = true;
                }

            },// end init

            compute: function compute() {
                if (ATBS.header.smartAffix.isDestroyed || ATBS.header.smartAffix.isDisabled) {
                    return;
                }

                // Set where from top fixed header starts showing up
                if ( !this.$headerPlaceHolder.length ) {
                    this.offCheckpoint = 400;
                } else {
                    this.offCheckpoint = $(this.$headerPlaceHolder).offset().top + 400;
                }
                
                this.onCheckpoint = this.offCheckpoint + 500;

                // Set menu top offset
                this.windowScrollTop = ATBS.documentOnScroll.windowScrollTop;
                if (this.offCheckpoint < this.windowScrollTop) {
                    this.isFixed = true;
                }
            },

            updateState: function updateState(){
                //update affixed state
                if (this.isFixed) {
                    if((this.$fixedHeader != '')) {
                        this.$fixedHeader.addClass('is-fixed');
                    }
                } else {
                    if((this.$fixedHeader != '')) {
                        this.$fixedHeader.removeClass('is-fixed');
                        $window.trigger('stickyHeaderHidden');
                    }
                }

                if (this.isShown) {
                    if((this.$fixedHeader != '')) {
                        this.$fixedHeader.addClass('is-shown');
                    }
                } else {
                    if((this.$fixedHeader != '')) {
                        this.$fixedHeader.removeClass('is-shown');
                    }
                }
            },

            /**
             * called by events on scroll
             */
            eventScroll: function eventScroll(scrollTop) {

                var scrollDirection = '';
                var scrollDelta = 0;

                // check the direction
                if (scrollTop != this.lastWindowScrollTop) { //compute direction only if we have different last scroll top

                    // compute the direction of the scroll
                    if (scrollTop > this.lastWindowScrollTop) {
                        scrollDirection = 'down';
                    } else {
                        scrollDirection = 'up';
                    }

                    //calculate the scroll delta
                    scrollDelta = Math.abs(scrollTop - this.lastWindowScrollTop);
                    this.lastWindowScrollTop = scrollTop;

                    // update affix state
                    if (this.offCheckpoint < scrollTop) {
                        this.isFixed = true;
                    } else {
                        this.isFixed = false;
                    }
                    
                    // check affix state
                    if (this.isFixed) {
                        // We're in affixed state, let's do some check
                        if ((scrollDirection === 'down') && (scrollDelta > 14)) {
                            if (this.isShown) {
                                this.isShown = false; // hide menu
                            }
                        } else {
                            if ((!this.isShown) && (scrollDelta > 14) && (this.onCheckpoint < scrollTop)) {
                                this.isShown = true; // show menu
                            }
                        }
                    } else {
                        this.isShown = false;
                    }

                    this.updateState(); // update state
                }
            }, // end eventScroll function

            /**
            * called by events on resize
            */
            eventResize: function eventResize(windowWidth) {
                // Check if device width is smaller than breakpoint.
                if ( ATBS.documentOnResize.windowWidth < ATBS.header.smartAffix.breakpoint ) {
                    this.isDisabled = true;
                } else {
                    this.isDisabled = false;
                    ATBS.header.smartAffix.compute();
                }
            }
        },
    };

    ATBS.documentOnScroll = {
        ticking: false,
        windowScrollTop: 0, //used to store the scrollTop

        init: function() {
            window.addEventListener('scroll', function(e) {
                if (!ATBS.documentOnScroll.ticking) {
                    window.requestAnimationFrame(function() {
                        ATBS.documentOnScroll.windowScrollTop = $window.scrollTop();

                        // Functions to call here
                        if (!ATBS.header.smartAffix.isDisabled && !ATBS.header.smartAffix.isDestroyed) {
                            ATBS.header.smartAffix.eventScroll(ATBS.documentOnScroll.windowScrollTop);
                        }

                        ATBS.documentOnScroll.goToTopScroll(ATBS.documentOnScroll.windowScrollTop);

                        ATBS.documentOnScroll.ticking = false;
                    });
                }
                ATBS.documentOnScroll.ticking = true;
            });
        },

        /* ============================================================================
         * Go to top scroll event
         * ==========================================================================*/
        goToTopScroll: function(windowScrollTop) {
        	
            if ($goToTopEl.length) {
                if (windowScrollTop > 800) {
                    if (!$goToTopEl.hasClass('is-active')) $goToTopEl.addClass('is-active');
                } else {
                    $goToTopEl.removeClass('is-active');
                }
            }
        },
        /* ============================================================================
         * INFINITY AJAX load more posts
         * ==========================================================================*/
        infinityAjaxLoadPost: function() {
            
            var loadedPosts = '';
            var ajaxLoadPost = $('.infinity-ajax-load-post');
            var $this;
    
            function ajaxLoad(parameters, postContainer) {
                var atbsAjaxSecurity = ajax_buff['atbs_security']['atbs_security_code']['content'];
                var ajaxStatus = '',
                    ajaxCall = $.ajax({
                        url: ajaxurl,
                        type: 'post',
                        dataType: 'html',
                        data: {
                            action: parameters.action,
                            args: parameters.args,
                            postOffset: parameters.postOffset,
                            type: parameters.type,
                            moduleInfo: parameters.moduleInfo,
                            securityCheck: atbsAjaxSecurity
                            // other parameters
                        },
                    });
                ajaxCall.done(function(respond) {
                    loadedPosts = $.parseJSON(respond);
                    ajaxStatus = 'success';
                    if (loadedPosts == 'no-result') {
                        postContainer.closest('.infinity-ajax-load-post').addClass('disable-infinity-load');
                        postContainer.closest('.infinity-ajax-load-post').find('.js-ajax-load-post-trigger').addClass('hidden');
                        postContainer.closest('.infinity-ajax-load-post').find('.atbs-no-more-button').removeClass('hidden');
                        return;
                    }
                    if (loadedPosts) {
                        var elToLoad = $(loadedPosts).hide().fadeIn('1500');
                        postContainer.append(elToLoad);
                        
                        var currentPostionScroll = $(window).scrollTop();                                      
                    }
                    $('html, body').animate({ scrollTop: $window.scrollTop() + 1 }, 0).animate({ scrollTop: $window.scrollTop() - 1 }, 0); // for recalculating of sticky sidebar
                    // do stuff like changing parameters
                });
                
    
                ajaxCall.fail(function() {
                    ajaxStatus = 'failed';
                });
    
                ajaxCall.always(function() {
                    postContainer.closest('.infinity-ajax-load-post').removeClass('atbs_loading');
                    postContainer.closest('.infinity-ajax-load-post').removeClass('infinity-disable');
                    // bookmark
		            var buttonRemoveBookmark = $('.bookmark-for-user .post__button-remove-bookmark');
		            var buttonBookMarkUser = $('.bookmark-for-user .post-button-bookmark');
		            var buttonBookMarkShowOption = $('.bookmark-for-guest .button-bookmark-option');
		            var buttonPercentWBookmark = $('.scroll-count-percent-with-bookmark');
		            
		            if (buttonBookMarkUser.length) {
		                ATBS.ATBS_Bookmark.bookmarkUser(buttonBookMarkUser);
		            }
		            
		            if (buttonRemoveBookmark.length) {
		                ATBS.ATBS_Bookmark.removebookmarkUser(buttonRemoveBookmark);
		            }
		            if (buttonBookMarkShowOption.length) {
		                ATBS.ATBS_Bookmark.bookmarkforGuest(buttonBookMarkShowOption);
		            }
		            if (buttonPercentWBookmark.length) {
		                ATBS.ATBS_Bookmark.bookmarkSingleScrolling(buttonPercentWBookmark);
		            }
		            $(document).on('click',function(event) {
		                if (!$(event.target).closest(".button-bookmark-option, .button-bookmark-option-content").length) {
		                    $(".show-bookmark-option-content").toggleClass('show-bookmark-option-content');
		                }
		            });
                });
            }
            function ajaxLoadInfinitiveScroll() {
                ajaxLoadPost.each(function(index) {
                    $this = $(this);
               
                    var triggerElement = $this.find('.js-ajax-load-post-trigger');
                    var top_of_element = triggerElement.offset().top;
                    var bottom_of_element = triggerElement.offset().top + triggerElement.outerHeight();
                    var bottom_of_screen = $(window).scrollTop() + $(window).innerHeight();
                    var top_of_screen = $(window).scrollTop();
                    
                    
                    if ((bottom_of_screen > top_of_element) && (top_of_screen < bottom_of_element)) {
                        if ($this.hasClass('infinity-disable') || $this.hasClass('disable-infinity-load'))
                            return;
                                
                        $this.addClass('infinity-disable');
                        
                        var $moduleID = $this.closest('.atbs-block').attr('id');
                        var moduleName = $moduleID.split("-")[0];
                        var args = ajax_buff['query'][$moduleID]['args'];
    
                        var postContainer = $this.find('.posts-list');
                        var moduleInfo = ajax_buff['query'][$moduleID]['moduleInfo'];
    
                        $this.addClass('atbs_loading');
    
                        var postOffset      = parseInt(args['offset']) + $this.find('article').length;
         
                        if ($this.closest('.atbs-block').hasClass('atbs_latest_blog_posts')) {
                            var stickPostLength = args['post__not_in'].length;
                            postOffset = postOffset - stickPostLength;
                        }
    
                        var parameters = {
                            action: moduleName,
                            args: args,
                            postOffset: postOffset,
                            type: 'loadmore',
                            moduleInfo: moduleInfo,
                        };
                        ajaxLoad(parameters, postContainer);
                        
                    }
                });
            }
            
            $(window).on('scroll', $.debounce(250, ajaxLoadInfinitiveScroll));
        },
        /* ============================================================================
         * Single INFINITY AJAX Load Posts
         * ==========================================================================*/
        infinityAjaxLoadSinglePost: function() {

            var ajaxLoadPost = $('.single-infinity-scroll');
            var currentArticleInfo = $('.header-current-reading-article');
            var $this;
            function ajaxLoad(parameters, postContainer) {
                var atbsAjaxSecurity = ajax_buff['atbs_security']['atbs_security_code']['content'];
                var ajaxStatus = '',
                    ajaxCall = $.ajax({
                        url: parameters.postURLtoLoad,
                        type: "GET",
                        dataType: "html"
                    });
                ajaxCall.done(function(respond) {
                    if (respond) {
                        var elToLoad = $($(respond).find('.single-infinity-container').html()).css('opacity',0).animate({'opacity': 1}, 400);
                        var adsRandomCode = $(respond).find('.single-infinity-container').parents('.atbs-dedicated-single-header').data('infinity-ads');
                        postContainer.append(adsRandomCode);
                        postContainer.append(elToLoad);
                        setTimeout(function() {
                            var $stickySidebar = $(postContainer).children().last().find('.js-sticky-sidebar');
                            var $stickyHeader = $('.js-sticky-header');
            
                            var marginTop = ($stickyHeader.length) ? ($stickyHeader.outerHeight() + 20) : 0; // check if there's sticky header
            
                            if ( $( document.body ).hasClass( 'admin-bar' ) ) // check if admin bar is shown.
                                marginTop += 32;
            
                            if ( $.isFunction($.fn.theiaStickySidebar) ) {
                                $stickySidebar.theiaStickySidebar({
                                    additionalMarginTop: marginTop,
                                    additionalMarginBottom: 20,
                                });
                            }
                            //React
                            
                            var reactions = $(postContainer).children().last().find('.js-atbs-reaction');
                            ATBS.ATBS_reaction.atbs_reaction(reactions);
                            
                            // Remove Ajax Load

                            var postURLnextLoad = postContainer.find('.single-infinity-inner').last().data('url-to-load');
                            if ((typeof postURLnextLoad == 'undefined') || (postURLnextLoad == '')) {
                                $('.infinity-single-trigger').remove();
                            }
                            
                        }, 250); // wait a bit for precise height;   
                        // Run Photorama
                        setTimeout(function() {
                            var galleryPhotorama = $(postContainer).children().last().find('.fotorama');
                            if (galleryPhotorama.length > 0) {
                              $(galleryPhotorama).fotorama();
                            }
                            
                        }, 250); // wait a bit for precise height;   
                          
                        // do stuff like changing parameters
                        var $postSliderSidebar = $(postContainer).children().last().find('.js-atbs-carousel-1i-loopdot');
    
                        $postSliderSidebar.each( function() {
                            $(this).owlCarousel({
                                items: 1,
                                margin: 0,
                                loop: true,
                                nav: true,
                                dots: true,
                                autoHeight: true,
                                navText: ['<i class="mdicon mdicon-chevron-thin-left"></i>', '<i class="mdicon mdicon-chevron-thin-right"></i>'],
                                smartSpeed: 500,
                                responsive: {
                                    0 : {
                                        items: 1,
                                    },
            
                                },
                            });
                        });                                               
                    }
                });

                ajaxCall.fail(function() {
                    ajaxStatus = 'failed';
                });
                ajaxCall.always(function() {
                    $this.removeClass('infinity-disable');
                    var triggerElement = $this.find('.infinity-single-trigger');
                    if (!triggerElement.length) {
                        return;
                    }
                    //ATBS.ajaxLazyload.lazyload_start();
                    var reviews_rating_score 	= $('.reviews-score-list');
		            var reviews_rating_star 	= $('.reviews-rating');
		            var review_count_percent 	= $('.review-count-percent');
		            var textFadeLimit 			= $('.text-line-limit-fade');
		            var reviewAccordion 		= $('.atbs-accordion');
		            var reader_review_form = $('.rating-form');
		            var closeReviewPopup_1 = $('.btn-close-review-popup');
		            var closeReviewPopup_2 = $('.btn-close-review-normal');
		            var reviewDelButtons = $('.atbs-admin-delete-review');
		            
		            ATBS.ATBS_CustomerReview.reviewRatingStarIcon(reviews_rating_star);
		            ATBS.ATBS_CustomerReview.reviewScoreProgress(review_count_percent);
		            ATBS.ATBS_CustomerReview.reviewScoreList(reviews_rating_score);
		            ATBS.ATBS_CustomerReview.textFadeLimit(textFadeLimit);
		            ATBS.ATBS_CustomerReview.atbs_accordionButton(reviewAccordion);
		            ATBS.ATBS_CustomerReview.userReviewFormSubmit(reader_review_form);
		            ATBS.ATBS_CustomerReview.popupThankyouPanel(closeReviewPopup_1, closeReviewPopup_2);
		            ATBS.ATBS_CustomerReview.reviewAdminDelete(reviewDelButtons);
                });
            }
            function ajaxLoadInfinitiveScroll() {
                
                $this = ajaxLoadPost;
                var triggerElement = $this.find('.single-infinity-inner').last().find('.infinity-single-trigger');
                if (!triggerElement.length) {
                    return;
                }
                
                var top_of_element = triggerElement.offset().top;
                var bottom_of_element = triggerElement.offset().top + triggerElement.outerHeight();
                var bottom_of_screen = $(window).scrollTop() + $(window).innerHeight();
                var top_of_screen = $(window).scrollTop();
                
                if ((bottom_of_screen > top_of_element) && (top_of_screen < bottom_of_element)) {
                    if ($this.hasClass('infinity-disable')) {
                        return;
                    }
                            
                    $this.addClass('infinity-disable');
                    var postURLtoLoad = $this.find('.single-infinity-inner').last().data('url-to-load');
                    var postContainer = $this.find('.single-infinity-container');

                    var parameters = {
                        postURLtoLoad: postURLtoLoad,
                    };
                    ajaxLoad(parameters, postContainer);
                }
            }
            
            $(window).on('scroll', $.debounce(250, ajaxLoadInfinitiveScroll));
        },
    };
    ATBS.ATBS_Bookmark = {
        init: function() {
            var buttonRemoveBookmark = $('.bookmark-for-user .post__button-remove-bookmark');
            var buttonBookMarkUser = $('.bookmark-for-user .post-button-bookmark');
            var buttonBookMarkShowOption = $('.bookmark-for-guest .button-bookmark-option');
            var buttonPercentWBookmark = $('.scroll-count-percent-with-bookmark');
            
            if (buttonBookMarkUser.length) {
                ATBS.ATBS_Bookmark.bookmarkUser(buttonBookMarkUser);
            }
            
            if (buttonRemoveBookmark.length) {
                ATBS.ATBS_Bookmark.removebookmarkUser(buttonRemoveBookmark);
            }
            if (buttonBookMarkShowOption.length) {
                ATBS.ATBS_Bookmark.bookmarkforGuest(buttonBookMarkShowOption);
            }
            if (buttonPercentWBookmark.length) {
                ATBS.ATBS_Bookmark.bookmarkSingleScrolling(buttonPercentWBookmark);
            }
            $(document).on('click',function(event) {
                if (!$(event.target).closest(".button-bookmark-option, .button-bookmark-option-content").length) {
                    $(".show-bookmark-option-content").toggleClass('show-bookmark-option-content');
                }
            });
        },
        /* ============================================================================
        * Bookmark
        * ==========================================================================*/
        bookmarkUser: function(buttonBookMarkUser) {
            buttonBookMarkUser.each(function () {
                $(this).off('click');
                $(this).on('click',function() {
                    var bookmarkItem = $(this).parents('.post-has-bookmark');
                    var bookmark = $(this).find('.btn-bookmark');
                    bookmark.toggleClass('active');
                    var userID = $(this).closest('.bookmark-for-user').data('userid');
                    var postID = $(this).closest('.bookmark-for-user').data('postid');
                    if ($(bookmarkItem).hasClass('active-status-bookmark')) {
                        var parameters = {
                            action: 'atoms_remove_bookmark',
                            userID: userID,
                            postID: postID
                        };
                        ATBS.ATBS_Bookmark.ajaxLoad(parameters);
                    } else {
                        var parameters = {
                            action: 'atoms_add_bookmark',
                            userID: userID,
                            postID: postID
                        };
                        ATBS.ATBS_Bookmark.ajaxLoad(parameters);
                    }
                    $(bookmarkItem).toggleClass('active-status-bookmark');
                });
            });
        },
        bookmarkSingleScrolling: function(buttonPercentWBookmark) {
            buttonPercentWBookmark.each(function () {
                $(this).off('click');
                $(this).on('click',function() {              
                    var bookmarkIcon = $(this).find('.btn-bookmark-icon');
                    
                    var userID = $(this).closest('.atbs-scroll-single-percent-wrap').data('userid');
                    var postID = $(this).closest('.atbs-scroll-single-percent-wrap').data('postid');
                    
                    $(bookmarkIcon).toggleClass('is-saved');
                    if (bookmarkIcon.hasClass('is-saved')) {
                        $('.atbs-block-'+postID).addClass('atoms-already-bookmarked');
                    } else {
                        $('.atbs-block-'+postID).removeClass('atoms-already-bookmarked');
                    }
                    
                    $(this).toggleClass('show-bookmark-option-content');
                    
                    if ($(bookmarkIcon).hasClass('is-saved')) {
                        var parameters = {
                            action: 'atoms_add_bookmark',
                            userID: userID,
                            postID: postID
                        };
                        ATBS.ATBS_Bookmark.ajaxLoad(parameters);
                    } else {
                        var parameters = {
                            action: 'atoms_remove_bookmark',
                            userID: userID,
                            postID: postID
                        };
                        ATBS.ATBS_Bookmark.ajaxLoad(parameters);
                    }
                });
            });
        },
        removebookmarkUser: function(buttonRemoveBookmark) {
            $('.post-has-bookmark').hover(function() {
              }, function() {
              $(this).find('.post__button-bookmark-option').removeClass('show-bookmark-option-content')
            });
            buttonRemoveBookmark.each(function () {
                $(this).off('click');
                $(this).on('click',function() {
                    //$(this).closest('.bookmark__buttons-wrap').find('.post__button-bookmark-option').removeClass('show-bookmark-option-content');
                    $(this).toggleClass('show-bookmark-option-content');
                });
            });
        },        
        bookmarkforGuest: function(buttonBookMarkShowOption) {
            $('.post-has-bookmark').hover(function() {
              }, function() {
              $(this).find('.post__button-bookmark-option').removeClass('show-bookmark-option-content')
            });
            buttonBookMarkShowOption.each(function () {
                $(this).off('click');
                $(this).on('click',function() {
                    //$(this).closest('.bookmark__buttons-wrap').find('.post__button-bookmark-option').removeClass('show-bookmark-option-content');
                    $(this).closest('.post__button-bookmark-option').siblings().removeClass('show-bookmark-option-content');
                    $(this).closest('.post__button-bookmark-option').toggleClass('show-bookmark-option-content');
                });
            });
        },
        reAddBookmark: function(container) {
           	var buttonRemoveBookmark = $('.bookmark-for-user .post__button-remove-bookmark');
            var buttonBookMarkUser = $('.bookmark-for-user .post-button-bookmark');
            var buttonBookMarkShowOption = $('.bookmark-for-guest .button-bookmark-option');
            var buttonPercentWBookmark = $('.scroll-count-percent-with-bookmark');
            
            if (buttonBookMarkUser.length) {
                ATBS.ATBS_Bookmark.bookmarkUser(buttonBookMarkUser);
            }
            
            if (buttonRemoveBookmark.length) {
                ATBS.ATBS_Bookmark.removebookmarkUser(buttonRemoveBookmark);
            }
            if (buttonBookMarkShowOption.length) {
                ATBS.ATBS_Bookmark.bookmarkforGuest(buttonBookMarkShowOption);
            }
            if (buttonPercentWBookmark.length) {
                ATBS.ATBS_Bookmark.bookmarkSingleScrolling(buttonPercentWBookmark);
            }
            $(document).on('click',function(event) {
                if (!$(event.target).closest(".button-bookmark-option, .button-bookmark-option-content").length) {
                    $(".show-bookmark-option-content").toggleClass('show-bookmark-option-content');
                }
            });

            //container.find('.atoms-scale-to-zero').remove();
       
        },
        ajaxLoad: function(parameters) {
            var atbsAjaxSecurity = ajax_buff['atbs_security']['atbs_security_code']['content'];
            var ajaxStatus = '',
                ajaxCall = $.ajax({
                    url: ajaxurl,
                    type: 'post',
                    dataType: 'html',
                    data: {
                        action: parameters.action,
                        userID: parameters.userID,
                        postID: parameters.postID,
                        securityCheck: atbsAjaxSecurity
                        // other parameters
                    },
                });
            ajaxCall.done(function(respond) {
            });

            ajaxCall.fail(function() {
            });

            ajaxCall.always(function() {
            });
        },
    }
    /* ============================================================================
     * Reader Review
     * ==========================================================================*/   
    ATBS.ATBS_CustomerReview = {
        init: function() {
            var reviews_rating_score 	= $('.reviews-score-list');
            var reviews_rating_star 	= $('.reviews-rating');
            var review_count_percent 	= $('.review-count-percent');
            var textFadeLimit 			= $('.text-line-limit-fade');
            var reviewAccordion 		= $('.atbs-accordion');
            var reader_review_form = $('.rating-form');
            var closeReviewPopup_1 = $('.btn-close-review-popup');
            var closeReviewPopup_2 = $('.btn-close-review-normal');
            var reviewDelButtons = $('.atbs-admin-delete-review');
            
            ATBS.ATBS_CustomerReview.reviewRatingStarIcon(reviews_rating_star);
            ATBS.ATBS_CustomerReview.reviewScoreProgress(review_count_percent);
            ATBS.ATBS_CustomerReview.reviewScoreList(reviews_rating_score);
            ATBS.ATBS_CustomerReview.textFadeLimit(textFadeLimit);
            ATBS.ATBS_CustomerReview.atbs_accordionButton(reviewAccordion);
            ATBS.ATBS_CustomerReview.userReviewFormSubmit(reader_review_form);
            ATBS.ATBS_CustomerReview.popupThankyouPanel(closeReviewPopup_1, closeReviewPopup_2);
            ATBS.ATBS_CustomerReview.reviewAdminDelete(reviewDelButtons);
        },
        popupThankyouPanel: function(closeReviewPopup_1, closeReviewPopup_2) {
            closeReviewPopup_1.on('click', function() {
                $(this).closest('.atbs-user-review-popup-notification ').removeClass('enable-review-popup');
            });
            closeReviewPopup_2.on('click', function() {
                $(this).closest('.atbs-user-review-popup-notification ').removeClass('enable-review-popup');
            });
        },
        userReviewFormSubmit: function(reader_review_form) {
            reader_review_form.each(function () {
                $(this).submit(function(e) {
                    e.preventDefault();
                    var thisFormSubmitButton;
                    thisFormSubmitButton = $(this);
                    thisFormSubmitButton.find('.rating-submit').addClass('atbs_loading');
                    var formData = $(this).serializeArray();
                    var userID = $(this).closest('.reviews-rating').data('userid');
                    var postID = $(this).closest('.reviews-rating').data('postid');
                    var reviewTime = new Date(); 
                    var reviewTimeStr = ATBS.ATBS_CustomerReview.reviewMonthName() + ' ' + reviewTime.getDate() + ', ' + reviewTime.getFullYear();
                    var formVal = {userID:userID, postID:postID, reviewTime:reviewTimeStr};
      
                    $(formData).each(function(index, field) {
                        switch(field.name) {
                            case 'user-star-rating':
                                formVal.user_star_rating = field.value;
                                break;
                            case 'user-review-title':
                                formVal.user_review_title = field.value;
                                break;
                            case 'user-review-content':
                                formVal.user_review_content = field.value;
                                break;
                        }
                    });
                    var parameters = {
                        action: 'atbs_user_review',
                        formVal: formVal,
                    };
                    
                    ATBS.ATBS_CustomerReview.ajaxLoad(parameters, thisFormSubmitButton);
                });
            });
        },
        reviewMonthName: function() {
            var month = new Array();
            month[0] = "Jan";
            month[1] = "Feb";
            month[2] = "Mar";
            month[3] = "Apr";
            month[4] = "May";
            month[5] = "Jun";
            month[6] = "Jul";
            month[7] = "Aug";
            month[8] = "Sep";
            month[9] = "Oct";
            month[10] = "Nov";
            month[11] = "Dec";
            
            var d = new Date();
            return month[d.getMonth()];
        },
        reviewRatingStarIcon: function(reviews_rating_star) {
            reviews_rating_star.each(function () {
                var theCurrentReviewForm = $(this);
                var rating_reviews_list = $(this).find('.rating-form');
                $(rating_reviews_list).each(function () {
                    var star_score_icon = $(this).find('.star-item');
                    star_score_icon.on('click',function () {
                        $(star_score_icon).removeClass("active");
                        var star_score_value = $(this).index();
                        $(this).parents('.rating-star').siblings('.user-star-rating').attr('value', 5 - star_score_value);
                        star_score_icon.each(function () {
                            if ($(this).index() >= star_score_value) {
                                $(this).addClass("active");
                            }
                        })
                    });
                });
            });
        },
        reviewScoreList: function(reviews_rating_score) {
            reviews_rating_score.each(function () {
                var score_list_item = $(this).find(".score-item");
                $(score_list_item).each(function () {
                    var percent = parseFloat( $(this).data('total') );
                    var percent_default = 0;
                    var score_item = setInterval(frame, 0  );
                    var $this = $(this);
                    function frame() {
                        if (percent_default >= percent) {
                            clearInterval(score_item);
                        } else {
                            percent_default++;
                            $this.find(".score-percent").css({"width": percent_default +'%'});
                            $this.find(".score-number").text(percent_default / 10);
                        }
                    }
                });
            });
        },
        reviewScoreProgress: function(review_count_percent) {
		    review_count_percent.each(function () {
		        var $this = $(this);
		        var progressValue = $(this).find('.progress-score__value');
		        var data_score = parseFloat($(this).data('progress-score')) * 10;
		        var RADIUS = 48;
		        var CIRCUMFERENCE = 2 * Math.PI * RADIUS;
		        $(progressValue).css({'stroke-dasharray' : CIRCUMFERENCE });
		        progress(data_score);
		        function progress(value) {
		            var progress = value / 100;
		            var dashoffset = CIRCUMFERENCE * (1 - progress);
		            // $(progressValue).css({'--data-review-score': 'red' });
		            $(progressValue).css({'stroke-dashoffset': dashoffset });
		            // $(progressValue).style.setProperty('--data-review-score', 'red');
		        }
		    });
		},
        textFadeLimit: function(textFadeLimit) {
		    textFadeLimit.each(function () {
		        var $this = $(this);
		        /*limit height and opacity excerpt*/
		        var element_context = $(this).find('.line-limit-default');
		        var height_context = $(element_context).height();
		        var line_height_context  = parseInt($(element_context).css('line-height'));
		        var limit_height_context = line_height_context * 4;
		        if ( height_context > limit_height_context) {
		            $this.addClass("show-btn-more");
		            $(element_context).addClass("line-limit-fade");
		        }
		        /*unlimited height excerpt*/
		        var element_btn_toggle = $($this).find('.btn-line-limit-fade');
		        element_btn_toggle.on('click',function () {
		            $(element_btn_toggle).find('span').toggleClass('active');
		            if ( !$(element_context).hasClass('line-limit-fade')) {
		                $(element_context).removeClass("line-show-full");
		                $(element_context).css('max-height', limit_height_context + 'px');
		                $(element_context).addClass("line-limit-fade");
		            } else {
		                $(element_context).addClass("line-show-full");
		                $(element_context).css('max-height', $(element_context).get(0).scrollHeight + 'px');
		                $(element_context).removeClass("line-limit-fade");
		            }
		        });
		        $(window).on('resize', $.debounce(250, function (e) {
		            if ( $(element_context).hasClass('line-show-full')) {
		                $(element_context).css('max-height',  $(element_context).get(0).scrollHeight + 'px');
		            }
		        }));
		    });
		},
		atbs_accordionButton :function(reviewAccordion) {
            $(reviewAccordion).each(function () {
                var item_current = $(this);
                $(this).find('.atbs-accordion-btn').on('click',function () {
                    var accordion_btn =  $(this).toggleClass('active');
                    var accordion_panel = accordion_btn.parents('.atbs-accordion').find('.atbs-accordion-panel');
                    accordion_panel.toggleClass("active");
                    if (parseInt(accordion_panel.css('max-height')) ) {
                        accordion_panel.css('max-height', 0);
                        accordion_panel.removeClass("active");
                        accordion_btn.removeClass("active");
                    } else {
                        accordion_panel.css('max-height', $(accordion_panel).get(0).scrollHeight + 'px');
                    }
                });
                $(window).on('resize', $.debounce(250, function (e) {
                    var accordion_panel = item_current.find('.atbs-accordion-panel');
                    if ($(accordion_panel).hasClass('active')) {
                        accordion_panel.css('max-height', $(accordion_panel).get(0).scrollHeight + 'px');
                    }

                }));
            });
        },
        ajaxLoad: function(parameters, thisFormSubmitButton) {
            var atbsAjaxSecurity = ajax_buff['atbs_security']['atbs_security_code']['content'];
            var ajaxStatus = '',
                ajaxCall = $.ajax({
                    url: ajaxurl,
                    type: 'post',
                    dataType: 'html',
                    data: {
                        action: parameters.action,
                        formVal: parameters.formVal,
                        securityCheck: atbsAjaxSecurity
                        // other parameters
                    },
                });
            ajaxCall.done(function(respond) {
                var theReview = $.parseJSON(respond);
                
                // Prepend the new review
                var container = $(thisFormSubmitButton).closest('.reviews-rating').siblings('.atoms-user-reviews').find('.user-reviews-list');

				var reviewItemCounter = container.find('.list-item').length;

				if (reviewItemCounter == 0) {
					$(thisFormSubmitButton).closest('.reviews-rating').siblings('.atoms-user-reviews').removeClass('user-review-hidden');
				}

				container.prepend(theReview);

                //add event for the admin delete button
                var adminDeleteReviewBtn = container.find('.list-item:first-child').find('.atbs-admin-delete-review');
                ATBS.ATBS_CustomerReview.reviewAdminDelete(adminDeleteReviewBtn);
                
                // Add event for the text line limit fade
                var userReviewContents = container.find('.list-item:first-child').find('.text-line-limit-fade');
                ATBS.ATBS_CustomerReview.textFadeLimit(userReviewContents);
                
                var ReviewPerPage = $(thisFormSubmitButton).closest('.reviews-rating').siblings('.atoms-user-reviews').data('user-review-count');
                if ($(thisFormSubmitButton).closest('.reviews-rating').siblings('.atoms-user-reviews').find('.list-item').length > ReviewPerPage) {
                    $(thisFormSubmitButton).closest('.reviews-rating').siblings('.atoms-user-reviews').find('.list-item:last-child').remove();
                }
                $(thisFormSubmitButton).closest('.reviews-rating').slideUp('normal');
                $(thisFormSubmitButton).closest('.reviews-content').siblings('.atbs-user-review-popup-notification').addClass('enable-review-popup');
                var popuploadcomplete = setInterval(function() {
                    $(thisFormSubmitButton).closest('.atbs-reviews-section').find('.circle-loader').addClass('load-complete');       
                    $(thisFormSubmitButton).closest('.atbs-reviews-section').find('.checkmark').toggle();
                    clearInterval(popuploadcomplete);
                },800);
            });

            ajaxCall.fail(function() {
            });

            ajaxCall.always(function() {
                thisFormSubmitButton.find('.rating-submit').removeClass('atbs_loading');
            });
        },
        reviewPagination: function($this, currentPageVal) {
            var postID = $this.closest('.atoms-user-reviews').siblings('.reviews-rating').data('postid');
            var reviewPerPage = $this.closest('.atoms-user-reviews').data('user-review-count');
            var parameters = {
                action: 'atbs_user_review_pagination',
                currentPageVal : currentPageVal,
                postID: postID,
                reviewPerPage: reviewPerPage,
            };
            var container = $this.closest('.atoms-user-review-pagination').siblings('.user-reviews-list');
            container.css('height', container.height()+'px');
            container.append('<div class="bk-preload-wrapper"></div>');
            container.find('.list-item').addClass('bk-preload-blur');
            
            ATBS.ATBS_CustomerReview.paginationAjaxLoad(parameters, $this);
        },
        paginationAjaxLoad: function(parameters, $this) {
            var atbsAjaxSecurity = ajax_buff['atbs_security']['atbs_security_code']['content'];
            var ajaxStatus = '',
                ajaxCall = $.ajax({
                    url: ajaxurl,
                    type: 'post',
                    dataType: 'html',
                    data: {
                        action: parameters.action,
                        currentPageVal: parameters.currentPageVal,
                        postID: parameters.postID,
                        reviewPerPage: parameters.reviewPerPage,
                        securityCheck: atbsAjaxSecurity
                        // other parameters
                    },
                });
            ajaxCall.done(function(respond) {
                var theReviews = $.parseJSON(respond);
                var elToLoad = $(theReviews).css('opacity',0).animate({'opacity': 1}, 400);
                
                var container = $this.closest('.atoms-user-review-pagination').siblings('.user-reviews-list');
                container.html(elToLoad); 
                
                var userReviewContents = $(container).find('.atoms-user-review-content');
                var textFadeLimit 			= $('.text-line-limit-fade');
		        ATBS.ATBS_CustomerReview.textFadeLimit(textFadeLimit);        
                container.find('.bk-preload-wrapper').remove();
                container.find('.list-item').removeClass('bk-preload-blur');
                setTimeout(function() { container.css('height', 'auto'); }, 200);
                var reviewDelButtons = $('.atbs-admin-delete-review');
	            ATBS.ATBS_CustomerReview.reviewAdminDelete(reviewDelButtons);
            });

            ajaxCall.fail(function() {
            });

            ajaxCall.always(function() {
            });
        },
        reviewAdminDelete: function(reviewDelButtons) {
            $(reviewDelButtons).each(function () {
                $(this).on('click', function() {
                    var userID = $(this).data('userid');
                    var postID = $(this).data('postid');
                    var formVal = {userID:userID, postID:postID};
                    var parameters = {
                        action: 'atbs_user_delete_review',
                        postID: postID,
                        formVal: formVal
                    };
                    ATBS.ATBS_CustomerReview.reviewAdminDeleteAjax(parameters, $(this));
                });
            });
        },
        reviewAdminDeleteAjax: function(parameters, $this) {
            var atbsAjaxSecurity = ajax_buff['atbs_security']['atbs_security_code']['content'];
            var ajaxStatus = '',
            ajaxCall = $.ajax({
                url: ajaxurl,
                type: 'post',
                dataType: 'html',
                data: {
                    action: parameters.action,
                    formVal: parameters.formVal,
                    securityCheck: atbsAjaxSecurity
                    // other parameters
                },
            });
            ajaxCall.done(function(respond) {
            	var userReviewList = $this.closest('.user-reviews-list');
                $this.closest('.list-item').slideUp("normal", function() { $(this).remove(); } );
                //Check if there is no list item, then hide the user review section
                if (userReviewList.find('.list-item').length == 1) {
                	var userReviewHeading = $(userReviewList).closest('.atoms-user-reviews').addClass('user-review-hidden');
                }
            });

            ajaxCall.fail(function() {
            });

            ajaxCall.always(function() {
            });
        },
    }
    /* ============================================================================
     * Reaction
     * ==========================================================================*/    
    ATBS.ATBS_reaction = {
        init: function() {
            var reactions = $('.js-atbs-reaction');
            ATBS.ATBS_reaction.atbs_reaction(reactions);
        },
        /**/
        atbs_reaction: function(reactions) {
            reactions.each( function() {
                var reaction_col = $(this).find('.atbs-reactions-col');
                function react(reactionItem) {
                	var reactionType = reactionItem.data('reaction-type');
                    var reaction_content = reactionItem.find('.atbs-reactions-content');
                    var reactionStatus = '';
                    if (reactionItem.find('.atbs-reactions-image').hasClass("active")) {
                        reactionStatus = 'active';
                    } else {
                        reactionStatus = 'non-active';
                    }
                    if (reactionItem.find('.atbs-reactions-image').hasClass("active")) {
                        reactionItem.find('.atbs-reactions-image').removeClass("active");
                        reactionItem.find('.atbs-reactions-image').removeClass("scale-icon");
                        
                    } else {
                        reactionItem.find('.atbs-reactions-image').addClass("active");
                        reactionItem.find('.atbs-reactions-image').addClass("scale-icon"); 
                    }
                    if (reaction_content.hasClass("active")) {
                        reaction_content.removeClass("active");
                        reaction_content.removeClass("scale-count");
                    } else {
                        reaction_content.addClass("active");
                        reaction_content.addClass("scale-count");
                    }
                    ATBS.ATBS_reaction.ajaxLoad(reactionItem, reactionType, reactionStatus);
                }
                // On Click
                reaction_col.on('click', function() {
                    react($(this));
                });
                // Keyboard Accessibility
                reaction_col.keypress(function (e) {
                	e.preventDefault(); // Prevent scrolling when press 'Space'
					var key = e.which;
					if ( (key == 13) || (key == 32) ) { // 13: Enter, 32: Space (key code)
						react($(this));
						return;  
					}
				});
            });
        },    
        ajaxLoad: function(reaction, reactionType, reactionStatus) {
            var $this = reaction;
            var reaction_content = $this.find('.atbs-reactions-content');
            var atbsAjaxSecurity = ajax_buff['atbs_security']['atbs_security_code']['content'];   
            var postID = reaction.closest('.js-atbs-reaction').data('article-id');
            var ajaxCall = $.ajax({
                    url: ajaxurl,
                    type: 'post',
                    dataType: 'html',
                    data: {
                        action: 'atbs_ajax_reaction',
                        postID: postID,
                        reactionType: reactionType,
                        reactionStatus: reactionStatus,
                        securityCheck: atbsAjaxSecurity,
                    },
                });
            ajaxCall.done(function(respond) {
                var results = $.parseJSON(respond);
                $this.find('.atbs-reaction-count').html(results);
            });
            ajaxCall.fail(function() {
            });
            ajaxCall.always(function() {
                 if ($this.find('.atbs-reactions-image').hasClass("active")) {
                    $this.find('.atbs-reactions-image').removeClass("scale-icon");
                 }
                if (reaction_content.hasClass("active")) {
                    reaction_content.removeClass("scale-count");
                }
            });
        },
    }

    ATBS.documentOnResize = {
        ticking: false,
        windowWidth: $window.width(),

        init: function() {
            window.addEventListener('resize', function(e) {
                if (!ATBS.documentOnResize.ticking) {
                    window.requestAnimationFrame(function() {
                        ATBS.documentOnResize.windowWidth = $window.width();

                        // Functions to call here
                        if (!ATBS.header.smartAffix.isDestroyed) {
                            ATBS.header.smartAffix.eventResize(ATBS.documentOnResize.windowWidth);
                        }
			            ATBS.documentOnReady.setSubMenuPosition();

                        ATBS.documentOnResize.ticking = false;
                    });
                }
                ATBS.documentOnResize.ticking = true;
            });
        },
    };
    ATBS.documentOnReady = {

        init: function() {
            ATBS.header.init();
            ATBS.documentOnReady.ajaxLoadPost();
            ATBS.documentOnScroll.infinityAjaxLoadPost();
            ATBS.documentOnScroll.infinityAjaxLoadSinglePost();
            ATBS.header.smartAffix.compute();
            ATBS.documentOnScroll.init();
            ATBS.documentOnReady.goToTop();
            ATBS.documentOnReady.atbs_scroll_element();
            ATBS.documentOnReady.themeSwitch();
            ATBS.documentOnReady.carousel_1i_dot_center_number();
            ATBS.documentOnReady.carousel_only_1i_loopdot();
            ATBS.documentOnReady.carousel_1i_loopdot();
            ATBS.documentOnReady.carousel_1i_loopdot_2();
            ATBS.documentOnReady.carousel_auto_width();
            ATBS.documentOnReady.carousel_auto_width_rtl();
            ATBS.documentOnReady.carousel_auto_width_center();
            ATBS.documentOnReady.customCarouselNav();
            ATBS.documentOnReady.carousel_only_1i_loop();
            ATBS.documentOnReady.carousel_1i_get_src();
            ATBS.documentOnReady.carousel_1i_get_src_width_auto();
            ATBS.documentOnReady.carousel_1i_get_src_width_auto_center();
            ATBS.documentOnReady.carousel_hover_cursor_effect();
            ATBS.documentOnReady.carousel_1i_text_fade();
            ATBS.documentOnReady.carousel_1i_dot_number_effect();
            ATBS.documentOnReady.carousel_1i_get_src_width_auto_0m();
            ATBS.documentOnReady.carousel_1i30m_no_reponsive();
            ATBS.documentOnReady.carousel_1i30m();
            ATBS.documentOnReady.carousel_1i0m();
            ATBS.documentOnReady.carousel_2i30m();
            ATBS.documentOnReady.carousel_2i_auto_width();
            ATBS.documentOnReady.carousel_3i30m_nav_svg();
            ATBS.documentOnReady.carousel_3i50m();
            ATBS.documentOnReady.carousel_4i0m();
            ATBS.documentOnReady.carousel_background_below();
            ATBS.documentOnReady.circleMoveRandom();
            ATBS.documentOnReady.scrollSingleCountPercent();
            ATBS.documentOnReady.setSubMenuPosition();
            ATBS.ATBS_Bookmark.init();
            ATBS.ATBS_CustomerReview.init();
            ATBS.ATBS_reaction.init();
        },

        setSubMenuPosition: function() {
			// Clear all old settings
			$( '.menu-item-has-left-sub-menu' ).removeClass( 'menu-item-has-left-sub-menu' );

			var subMenus = [
				$( '.site-header .navigation--main .sub-menu .menu-item-has-children' ),
				$( '.sticky-header .navigation--main .sub-menu .menu-item-has-children' ),
				$( '.top-bar__nav .sub-menu .menu-item-has-children' ),
			];
			// For each navigation menu
			$.each( subMenus, function() {
				var directionRight = true;
				// For each menu item
				$( this ).each( function() {
					var _this = $( this ),
						inMegaMenu = _this.parents( '.atbs-mega-menu' ).length,
						subMenu    = _this.children( '.sub-menu:first' );

					if ( ! inMegaMenu ) {
						if ( ! inViewport( subMenu, 'x' ) || ! directionRight ) {
							_this.addClass( 'menu-item-has-left-sub-menu' );
							directionRight = false;
						}

						// Double check to make sure sub menu is in viewport
						if ( ! inViewport( subMenu, 'x' ) && ! directionRight ) {
							_this.removeClass( 'menu-item-has-left-sub-menu' );
							directionRight = true;
						}
					}
				} );
			} );
		},
        
        /* ============================================================================
        * Single scroll percent
        * ==========================================================================*/
        scrollSingleCountPercent: function() {
            var lastWindowScrollTop = 0;
            var scrollDirection = '';
            var elemnt_scroll = $('.element-scrolling-progress');
            if (elemnt_scroll.length > 0) {
                var ofsetTop_element_scroll;
                var ofsetBottom_element_scroll;
                var progressValue = $('.progress__value');
                var progressValueMobile = $('.scroll-count-percent-mobile .percent-number');
                var percentNumberText = $('.percent-number').find('.percent-number-text');
                var RADIUS = 54;
                var CIRCUMFERENCE = 2 * Math.PI * RADIUS;
                var docHeight = 0;
                $(progressValue).css({'stroke-dasharray' : CIRCUMFERENCE });
                var reading_indicator =  $('.scroll-count-percent');
                progress(0);
                $(percentNumberText).html(0);
                $(progressValueMobile).css({'width':'0px'});
                $(window).scroll(function(e) {
                    if ($(window).scrollTop() > lastWindowScrollTop) {
                        scrollDirection = 'down';
                    } else {
                        scrollDirection = 'up';
                    }
                    elemnt_scroll  = $('.element-scrolling-progress');
                    
                    if (elemnt_scroll.hasClass('scrolling-progress-post-content')) {
                        var theContentPercent = elemnt_scroll.find('.single-content');
                        theContentPercent.each( function() {
                            var theJourney = $(window).scrollTop() - $(this).offset().top;
                            if ((theJourney > 0) && (theJourney <= $(this).height())) {
                                ofsetTop_element_scroll = $(this).offset().top;
                                ofsetBottom_element_scroll = ofsetTop_element_scroll + $(this).height();
                                docHeight = $(this).height();
                            }
                        });
                    } else {
                        elemnt_scroll.each( function() {
                            var theJourney = $(window).scrollTop() - $(this).offset().top;
                            if ((theJourney > 0) && (theJourney <= $(this).height())) {
                                ofsetTop_element_scroll = $(this).offset().top;
                                ofsetBottom_element_scroll = ofsetTop_element_scroll + $(this).height();
                                docHeight = $(this).height();
                            }
                        });
                    }
                    
                    if (docHeight == 0) {
                        return false;
                    }
                    
                    if (($(window).scrollTop() >= ofsetTop_element_scroll) ) {
                        $('.scroll-count-percent').addClass('active');
                    }
                    else{
                        $('.scroll-count-percent').removeClass('active');
                    }
                    var windowScrollTop = $(window).scrollTop();
                    var scrollPercent = (windowScrollTop - ofsetTop_element_scroll) / (docHeight);
                    var scrollPercentRounded = Math.round(scrollPercent*100);
                    if (scrollPercentRounded <= 0) {
                        scrollPercentRounded = 0;
                    } else if (scrollPercentRounded >= 100) {
                        scrollPercentRounded = 100;
                        $('.scroll-count-percent').removeClass('active');
                    }
                    progress(scrollPercentRounded);
                    $(percentNumberText).html(scrollPercentRounded);
                    $(progressValueMobile).css({'width': scrollPercentRounded + '%'});
                    lastWindowScrollTop = $(window).scrollTop();
                });
                $(window).resize(function () {
                    elemnt_scroll  = $('.element-scrolling-progress');
                    if (elemnt_scroll.hasClass('scrolling-progress-post-content')) {
                        var theContentPercent = elemnt_scroll.find('.single-content');
                        theContentPercent.each( function() {
                            var theJourney = $(window).scrollTop() - $(this).offset().top;
                            if ((theJourney > 0) && (theJourney <= $(this).height())) {
                                ofsetTop_element_scroll = $(this).offset().top;
                                ofsetBottom_element_scroll = ofsetTop_element_scroll + $(this).height();
                                docHeight = $(this).height();
                                return false;
                            }
                        });
                    } else {
                        elemnt_scroll.each( function() {
                            var theJourney = $(window).scrollTop() - $(this).offset().top;
                            if ((theJourney > 0) && (theJourney <= $(this).height())) {
                                ofsetTop_element_scroll = $(this).offset().top;
                                ofsetBottom_element_scroll = ofsetTop_element_scroll + $(this).height();
                                docHeight = $(this).height();
                                return false;
                            }
                        });

                    }
                    
                    var windowScrollTop = $(window).scrollTop();
                    var winHeight = $(window).height();
                    var scrollPercent = (windowScrollTop - ofsetTop_element_scroll) / (docHeight);
                    var scrollPercentRounded = Math.round(scrollPercent*100);
                    
                    if (scrollPercentRounded <= 0) {
                        scrollPercentRounded = 0;
                    } else if (scrollPercentRounded > 100) {
                        scrollPercentRounded = 100;
                        $('.scroll-count-percent').removeClass('active');
                    }
                    progress(scrollPercentRounded);
                    $(percentNumberText).html(scrollPercentRounded);
                    $(progressValueMobile).css({'width': scrollPercentRounded + '%'});
                });
            }
            function progress(value) {
                var progress = value / 100;
                var dashoffset = CIRCUMFERENCE * (1 - progress);
                $(progressValue).css({'stroke-dashoffset': dashoffset });
            }
        },
        /* ============================================================================
         * Scroll top
         * ==========================================================================*/
        goToTop: function() {
            if ($goToTopEl.length) {
                $goToTopEl.on('click', function() {
                    $('html,body').stop(true).animate({scrollTop:0},400);
                    return false;
                });
            }
        },
        /* ============================================================================
        * Pattern Circle Move Random
        * ==========================================================================*/
        circleMoveRandom : function() {
            var canvasFrame = document.getElementsByClassName('canvas-circle-move-random');
            // // Set Canvas dimensions
            var radius = [21,20,12] ;
            $(canvasFrame).each(function (index, el) {
                var strColors = $(el).data('color');
                var circleColors = strColors.split(",");
                // Get drawing context
                var canvas = el.getContext( '2d' );
                el.width   = 370;
                el.height  = 370;
                // The Circle class
                function ColoredCircle( x, y, dx, dy, radius, color ) {
                    this.x  = x;
                    this.y  = y;
                    this.dx = dx;
                    this.dy = dy;
                    this.radius = radius;
                    this.color  = color;
                    this.draw = function() {
                        canvas.beginPath();
                        canvas.arc( this.x, this.y, this.radius, 0, Math.PI * 2, false );
                        canvas.shadowBlur = 5;
                        canvas.shadowOffsetX = 0;
                        canvas.shadowOffsetY = 5;
                        canvas.shadowColor = 'rgba(0,0,0,0.1)';
                        canvas.fillStyle = this.color;
                        canvas.fill();
                    };
                    this.update = function() {
                        if ( this.x + this.radius > 370 || this.x - this.radius < 0 ) {
                            this.dx = -this.dx;
                        }
                        if ( this.y + this.radius > 370 || this.y - this.radius < 0 ) {
                            this.dy = -this.dy;
                        }
                        this.x += this.dx;
                        this.y += this.dy;
                        this.draw();
                    };
                }
                var coloredCircles = [];
                // Radius
                for ( var i = 0; i < 3; i++ )  {
                    var  radius_item = radius[i];
                    // Starting Position
                    var x = Math.random() * ( 370 - radius_item * 2 ) + radius_item;
                    var y = Math.random() * ( 370 - radius_item * 2) + radius_item;

                    // Speed in x and y direction
                    var dx = 0.8;
                    var dy = 0.9;

                    // Color
                    var color = circleColors[ i ];
                    coloredCircles.push( new ColoredCircle( x, y, dx, dy, radius_item, color ) );
                }
                function createCanvasPointMove() {
                    requestAnimationFrame( createCanvasPointMove );
                    canvas.clearRect( 0, 0, 370, 370 );
                    for ( var r = 0; r < 3; r++ ) {
                        coloredCircles[r].update();
                    }
                }
                createCanvasPointMove();
            });
        },
        /* ============================================================================
        * Carousel
        * ==========================================================================*/
        carousel_1i_dot_center_number: function() {
            var $carousels = $('.js-atbs-carousel-1i-dot-center-number');
            $carousels.each( function() {
                var $this = $(this);
                var carousel_button_space =  $(this).data('carousel-button-space');
                $(this).owlCarousel({
                    items: 1,
                    margin: 30,
                    nav: true,
                    loop: true,
                    dots: true,
                    lazyLoad: true,
                    smartSpeed:450,
                    navText: ['<i class="mdicon mdicon-chevron-thin-left"></i>', '<i class="mdicon mdicon-chevron-thin-right"></i>'],
                    responsive: {
                        0 : {
                            items: 1,
                            margin: 30,
                        },
                        576 : {
                            items: 2,
                        },
                        992 : {
                            items: 1,
                        },
                    },

                });

                SetButtonNavDot($(this));
                $(window).on('resize' , function () {
                    SetButtonNavDot($this);
                });
                function SetButtonNavDot(event) {
                    // set x
                    var width_button = parseFloat(event.find('.owl-nav .owl-next').css('width'));
                    var width_dots = parseFloat(event.find('.owl-dots').css('width'));
                    var spacing_x_owl_dots = width_button + carousel_button_space;
                    // var spacing_owl_next =  width_button + carousel_button_space + width_dots;
                    var spacing_owl_next =  carousel_button_space + width_dots + carousel_button_space ;
                    // set y
                    var height_button = parseFloat(event.find('.owl-nav .owl-next').css('height'));
                    var height_dots = parseFloat(event.find('.owl-dots').css('height'));
                    var spacing_y_owl_dots =parseFloat( height_button / 2 - height_dots / 2 ) ;
                    if (   window.matchMedia("(max-width: 768px)").matches ) {
                        width_button = parseFloat(event.find('.owl-nav .owl-next').css('width'));
                        width_dots = parseFloat(event.find('.owl-dots').css('width'));
                        spacing_x_owl_dots = width_button + 15;
                        // spacing_owl_next =  width_button + 15 + width_dots + 15;
                        spacing_owl_next =   15 + width_dots + 15;

                        height_button = parseFloat(event.find('.owl-nav .owl-next').css('height'));
                        height_dots = parseFloat(event.find('.owl-dots').css('height'));
                        spacing_y_owl_dots =parseFloat( height_button / 2 - height_dots / 2 ) ;
                    }
                    if (event.hasClass("dots-position-right")) {
                        event.find('.owl-dots').css({"right": spacing_x_owl_dots});
                    }
                    else {
                        event.find('.owl-dots').css({"left": spacing_x_owl_dots});
                    }
                    event.find('.owl-dots').css({"bottom": spacing_y_owl_dots});
                    event.find('.owl-nav .owl-next').css({"margin-left": spacing_owl_next});
                }
            });
        },
        carousel_only_1i_loopdot: function() {
			var $carousels = $('.js-atbs-carousel-only-1i-loopdot');
			$carousels.each( function() {
				$(this).owlCarousel({
					items: 1,
					margin: 20,
					loop: true,
					nav: true,
					dots: true,
					autoHeight: true,
					navText: ['<i class="mdicon mdicon-navigate_before"></i>', '<i class="mdicon mdicon-navigate_next"></i>'],
					smartSpeed: 500,
					responsive: {
						0 : {
							items: 1,
							margin: 10,
						},
						768: {
							items: 3,
						},
						992: {
							items: 1,
							margin: 10,
						}
					},
				});
			})
		},
		carousel_1i_loopdot: function() {
            var $carousels = $('.js-atbs-carousel-1i-loopdot');
            $carousels.each( function() {
                $(this).owlCarousel({
                    items: 1,
                    margin: 0,
                    loop: true,
                    nav: true,
                    dots: true,
                    autoHeight: true,
                    navText: ['<i class="mdicon mdicon-navigate_before"></i>', '<i class="mdicon mdicon-navigate_next"></i>'],
                    smartSpeed: 500,
                    responsive: {
                        0 : {
                            items: 1,
                        },

                        576 : {
                            items: 2,
                            margin: 30,
                        },

                        992 : {
                            items: 1,
                        },
                    },
                });
            })
        },
		carousel_1i_loopdot_2: function() {
			var $carousels = $('.js-atbs-carousel-1i-loopdot-2');
			$carousels.each( function() {
				$(this).owlCarousel({
					items: 1,
					margin: 30,
					loop: true,
					nav: true,
					dots: true,
					autoHeight: true,
					navText: ['<i class="mdicon mdicon-navigate_before"></i>', '<i class="mdicon mdicon-navigate_next"></i>'],
					smartSpeed: 500,
					responsive: {
						0 : {
							items: 1,
						},

						576 : {
							items: 1,
						},

						992 : {
							items: 1,
						},
					},
				});
			})
		},
        carousel_1i0m: function() {
            var $carousels = $('.js-atbs-carousel-1i-0m');
            $carousels.each( function() {
                $(this).owlCarousel({
                    items: 1,
                    margin: 0,
                    nav: true,
                    dots: true,
                    loop: true,
                    autoHeight: true,
                    navText: ['<i class="mdicon mdicon-navigate_before"></i>', '<i class="mdicon mdicon-navigate_next"></i>'],
                    smartSpeed: 500,
                });
            })
        },
        carousel_1i30m_no_reponsive: function() {
            var $carousels = $('.js-atbs-carousel-1i-30m-no-responsive');
            $carousels.each( function() {
                $(this).owlCarousel({
                    items: 1,
                    margin: 30,
                    nav: true,
                    dots: true,
                    loop: true,
                    autoHeight: true,
                    navText: ['<i class="mdicon mdicon-navigate_before"></i>', '<i class="mdicon mdicon-navigate_next"></i>'],
                    smartSpeed: 500,
                });
            })
        },
        
        carousel_1i30m: function() {
            var $carousels = $('.js-atbs-carousel-1i-30m');
            $carousels.each( function() {
                $(this).owlCarousel({
                    items: 1,
                    margin: 0,
                    nav: true,
                    dots: true,
                    loop: true,
                    autoHeight: true,
                    navText: ['<i class="mdicon mdicon-navigate_before"></i>', '<i class="mdicon mdicon-navigate_next"></i>'],
                    smartSpeed: 500,
                    responsive: {
                        0 : {
                            items: 1,
                            autoWidth: false,
                        },
                        381 : {
                            items: 3,
                            autoWidth: true,
                        },
                        481 : {
                            items: 3,
                            autoWidth: true,
                        },
                        576 : {
                            items: 2,
                            autoWidth: false,
                        },
                        768 : {
                            items: 1,
                        },
                    },
                });
            })
        },
        carousel_2i30m: function() {
            var $carousels = $('.js-atbs-carousel-2i-30m');
            $carousels.each( function() {
                $(this).owlCarousel({
                    items: 2,
                    margin: 30,
                    nav: true,
                    dots: true,
                    loop: true,
                    autoHeight: true,
                    navText: ['<i class="mdicon mdicon-navigate_before"></i>', '<i class="mdicon mdicon-navigate_next"></i>'],
                    smartSpeed: 500,
                    responsive: {
                        0: {
                            items: 1,
                        },
                        768: {
                            items: 2,
                        },
                    },
                });
            })
        },
        carousel_2i_auto_width: function() {
			var $carousels = $('.js-carousel-2i-auto-width');
			$carousels.each( function() {
				$(this).owlCarousel({
					items: 2,
					loop: true,
					nav: true,
					dots: true,
					autoWidth: true,
					autoHeight: true,
					smartSpeed: 700,
					margin: 0,
					navText: ['<i class="mdicon mdicon-arrow_back"></i>', '<i class="mdicon mdicon-arrow_forward"></i>'],
					responsive: {
						0 : {
							items: 1,
							autoWidth: false,
						},
						768 : {
							margin: 0,
							autoWidth: true,
						},
						992 : {
							margin: 0,
						},
						1200 : {
							margin: 0,
						},
						1450 : {
							margin: 0,
						},
						1500: {
							margin: 0,
						},
						1671: {
							margin: 0,
						},
					},

				});
			})
		},
		carousel_3i30m_nav_svg: function() {
			var $carousels = $('.js-carousel-3i30m-nav-svg');
			$carousels.each( function() {
				$(this).owlCarousel({
					margin: 30,
					loop: true,
					nav: true,
					dots: true,
					navText: ['<svg xmlns="http://www.w3.org/2000/svg" width="21" height="14.733" viewBox="0 0 21 14.733"><defs><style>.a{opacity:0.4;}.b{fill:none;stroke:#111;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;}</style></defs><g class="a" transform="translate(21 17.533) rotate(180)"><line class="b" x2="20" transform="translate(0.5 10.167)"/><path class="b" d="M10.5,3.5l5,6.667-5,6.667" transform="translate(5 0)"/></g></svg>', '<svg xmlns="http://www.w3.org/2000/svg" width="21" height="14.733" viewBox="0 0 21 14.733"><defs><style>.a{fill:none;stroke:#222;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;}</style></defs><g transform="translate(0 -2.8)"><line class="a" x2="20" transform="translate(0.5 10.167)"/><path class="a" d="M10.5,3.5l5,6.667-5,6.667" transform="translate(5 0)"/></g></svg>'],
					responsive: {
						0 : {
							items: 1,
						},

						768 : {
							items: 2,
						},

						992 : {
							items: 3,
						},
					},
				});
			})
		},
        carousel_3i50m: function() {
			var $carousels = $('.js-carousel-3i50m');
			$carousels.each( function() {
				$(this).owlCarousel({
					loop: true,
					nav: false,
					dots: true,
					autoHeight: true,
					navText: ['<i class="mdicon mdicon-navigate_before"></i>', '<i class="mdicon mdicon-navigate_next"></i>'],
					responsive: {
						0 : {
							items: 1,
							margin: 10,
						},
						768 : {
							items: 2,
							margin: 20,
						},
						992 : {
							items: 3,
							margin: 30,
						},
						1200 : {
							items: 3,
							margin: 50,
						},
					},
				});
			})
		},
        carousel_4i0m: function() {
            var $carousels = $('.js-atbs-carousel-4i-0m');
            $carousels.each( function() {
                var carousel_loop = $(this).data('carousel-loop');
                $(this).owlCarousel({
                    items: 4,
                    margin: 0,
                    nav: true,
                    dots: true,
                    loop: carousel_loop,
                    autoHeight: true,
                    navText: ['<i class="mdicon mdicon-navigate_before"></i>', '<i class="mdicon mdicon-navigate_next"></i>'],
                    smartSpeed: 500,
                    responsive: {
                        0: {
                            items: 1,
                        },
                        481 : {
                            items: 2,
                        },
                        768 : {
                            items: 3,
                        },
                        992 : {
                            items: 3,
                        },
                        1200 : {
                            items: 4,
                        }
                    },
                });
            })
        },
        carousel_1i_text_fade: function() {
            var $carousels = $('.js-atbs-carousel-1i-text-fade');
            $carousels.each( function() {
                $(this).owlCarousel({
                    items: 1,
                    margin: 0,
                    nav: true,
                    dots: true,
                    loop: true,
                    autoHeight: true,
                    navText: ['<i class="mdicon mdicon-navigate_before"></i>', '<i class="mdicon mdicon-navigate_next"></i>'],
                    smartSpeed: 600,
                    onTranslate: removeAnimation,
                    onTranslated: showAnimation,
                    onDrag: removeAnimation,
                });
                function removeAnimation(event) {
                    var $this = event.target;
                    var item = $($this).find('.owl-item');
                    $(item).find('.content-fade-in').removeClass("fadeInText");
                    $(item).find('.content-fade-in').addClass("opacity-default");
                }
                function showAnimation(event) {
                    var $this = event.target;
                    var item = $($this).find('.active');
                    $(item).find('.content-fade-in').addClass("fadeInText");
                    $(item).find('.content-fade-in').removeClass("opacity-default");
                }
            })
        },
        carousel_1i_dot_number_effect: function() {
            var $carousels = $('.js-atbs-carousel-1i-dot-number-effect');
            $carousels.each( function() {
                var carousel_loop = $(this).data('carousel-loop');
                $(this).owlCarousel({
                    items: 1,
                    margin: 0,
                    nav: true,
                    dots: true,
                    loop: carousel_loop,
                    autoHeight: true,
                    navText: ['<i class="mdicon mdicon-navigate_before"></i>', '<i class="mdicon mdicon-navigate_next"></i>'],
                    smartSpeed: 600,
                    onInitialized  : counter,
                    onTranslate : counter,
                });
                function counter(event) {
                    var element			= event.target;
                    var itemCount		= event.item.count;
                    var itenIndex		= event.item.index;
                    var owlstageChildrens = $(element).find('.owl-stage').children().length;

                    var theCloned 		= owlstageChildrens - itemCount;
                    var currentIndex = itenIndex - parseInt(theCloned / 2) + 1;
                    if (itenIndex < parseInt(theCloned / 2)) {
                        currentIndex = owlstageChildrens - theCloned;
                    } else if (currentIndex > itemCount) {
                        currentIndex = currentIndex - itemCount;
                    }

                    $(element).parent().find('.owl-number').html( currentIndex +' <span class="slide-seperated">/</span> ' + itemCount);
                }
            })
        },
        carousel_auto_width: function() {
            var $carousels = $('.js-atbs-carousel-auto-width');
            $carousels.each( function() {
                var carousel_loop = $(this).data('carousel-loop');
                var carousel_margin = parseInt($(this).data('carousel-margin'));
                $(this).owlCarousel({
                    items: 10,
                    margin: carousel_margin,
                    nav: true,
                    dots: true,
                    loop: carousel_loop,
                    autoWidth: true,
                    navText: ['<i class="mdicon mdicon-navigate_before"></i>', '<i class="mdicon mdicon-navigate_next"></i>'],
                    smartSpeed: 800,
                    responsive: {
                        0: {
                            margin: 15,
                        },
                        481 : {
                            margin: carousel_margin,
                        }
                    },
                });
            })
        },
        carousel_auto_width_rtl: function() {
            var $carousels = $('.js-atbs-carousel-auto-width-rtl');
            $carousels.each( function() {
                var carousel_loop = $(this).data('carousel-loop');
                var carousel_margin = parseInt($(this).data('carousel-margin'));
                $(this).owlCarousel({
                    items: 10,
                    margin: carousel_margin,
                    nav: true,
                    dots: true,
                    loop: carousel_loop,
                    autoWidth: true,
                    rtl: true,
                    navText: ['<i class="mdicon mdicon-navigate_before"></i>', '<i class="mdicon mdicon-navigate_next"></i>'],
                    smartSpeed: 800,
                    responsive: {
                        0: {
                            margin: 15,
                        },
                        481: {
                            margin: 30,
                        },
                        992: {
                            margin: carousel_margin,
                        },
                    },
                });
            })
        },
        carousel_1i_get_src_width_auto: function() {
            var $carousels = $('.js-atbs-carousel-1i-get-src-width-auto');
            $carousels.each( function() {
                var carousel_loop = $(this).data('carousel-loop');
                var carousel_margin = parseInt($(this).data('carousel-margin'));
                $(this).owlCarousel({
                    items: 1,
                    margin: carousel_margin,
                    nav: true,
                    dots: true,
                    loop: carousel_loop,
                    autoHeight: true,
                    autoWidth: true,
                    navText: ['<i class="mdicon mdicon-navigate_before"></i>', '<i class="mdicon mdicon-navigate_next"></i>'],
                    smartSpeed: 500,
                    responsive: {
                        0: {
                            margin: 30,
                        },
                        768: {
                            margin: 40,
                        },
                        992: {
                            margin: 60,
                        },
                        1200: {
                            margin: carousel_margin,
                        }
                    },
                    onInitialized  : owl_onInitialized,
                });
                function owl_onInitialized(event) {
                    var element             = event.target;
                    var current             = event.item.index;
                    var owl_background_img  = $(element).parents('.owl-carousel-wrap').find('.owl-background a img');
                    var src                 = $(event.target).find(".owl-item").eq(current).find("img").attr('src');

                    $(owl_background_img).attr("src", src);
                };


                $(this).on('translate.owl.carousel', function(event) {
                    var current                 = event.item.index;
                    var owl_background_img      = $(this).parents('.owl-carousel-wrap').find('.owl-background a img');
                    var owl_background_img_preparatory      = $(owl_background_img).not('.active');
                    var src                     = $(event.target).find(".owl-item").eq(current).find("img").attr('src');
                    $(this).addClass("owl-disable-button");
                    $(owl_background_img_preparatory).attr('src', src);
                    if ( $(owl_background_img_preparatory).attr('src') == src) {
                        $(owl_background_img).toggleClass('active');
                    }
                    else {
                        
                    }
                });
                $(this).on('translated.owl.carousel', function(event) {
                    var owl_this = $(this);

                    setTimeout(function () {
                        $(owl_this).removeClass("owl-disable-button");
                    },400)
                });
            })
        },
        carousel_auto_width_center: function() {
            var $carousels = $('.js-atbs-carousel-auto-width-center');
            $carousels.each( function() {
                var carousel_loop = $(this).data('carousel-loop');
                var carousel_margin = parseInt($(this).data('carousel-margin'));
                $(this).owlCarousel({
                    items: 10,
                    margin: carousel_margin,
                    nav: true,
                    dots: true,
                    loop: true,
                    autoWidth: true,
                    center: true,
                    navText: ['<i class="mdicon mdicon-navigate_before"></i>', '<i class="mdicon mdicon-navigate_next"></i>'],
                    smartSpeed: 800,
                    onInitialized  : owl_onInitialized,
                    responsive: {
                        0: {
                            margin: 15,
                        },
                        481: {
                            margin: 30,
                        },
                        992: {
                            margin: carousel_margin,
                        },
                    },
                });
                function owl_onInitialized(event) {
                    var element                     = event.target;
                    var current                     = event.item.index;
                    var owl_items                   = $(element).find(".owl-item");
                    var current_center              = $(element).find(".owl-item").eq(current);
                    var current_center_index        = $(element).find(".owl-item").eq(current).index();
                    var current_center_active       = owl_items[current_center_index];

                    /*Action*/
                    $(current_center).addClass("Animation-Preventive");
                    setTimeout(function () {
                        $(current_center_active).addClass("active_current");
                    },100);
                };
                $(this).on('translate.owl.carousel', function(event) {
                    var element                = event.target;
                    var current                = event.item.index;
                    var current_center         = $(element).find(".owl-item").eq(current);
                    var owl_items              = $(element).find(".owl-item");
                    var owl_item_remove_class  = $(element).find(".owl-item.active_current");
                    var current_center_index   = $(element).find(".owl-item").eq(current).index();
                    var current_center_active  = owl_items[current_center_index];
                    /*Action*/
                    setTimeout(function () {
                        $(owl_item_remove_class).removeClass("active_current Animation-Preventive");
                        $(current_center).addClass("Animation-Preventive");
                        $(current_center_active).addClass("active_current");
                    },100);
                });
            })
        },
        carousel_1i_get_src: function() {
            var $carousels = $('.js-atbs-carousel-1i-get-src');
            $carousels.each( function() {
                var carousel_loop = $(this).data('carousel-loop');
                var carousel_margin = parseInt($(this).data('carousel-margin'));
                $(this).owlCarousel({
                    items: 1,
                    margin: carousel_margin,
                    nav: true,
                    dots: true,
                    loop: carousel_loop,
                    autoHeight: true,
                    navText: ['<i class="mdicon mdicon-navigate_before"></i>', '<i class="mdicon mdicon-navigate_next"></i>'],
                    smartSpeed: 500,
                    animateOut: "fadeOut",
                    onInitialized  : owl_onInitialized,
                });
                function owl_onInitialized(event) {
                    var element             = event.target;
                    var current             = event.item.index;
                    var owl_background_img  = $(element).parents('.owl-carousel-wrap').find('.owl-background a img');
					var owl_background_link = $(element).parents('.owl-carousel-wrap').find('.owl-background a');
					var src                 = $(event.target).find(".owl-item").eq(current).find("img").attr('src');
					var href                = $(event.target).find(".owl-item").eq(current).find(".post__thumb a").attr('href');


					$(owl_background_img).attr("src", src);
					$(owl_background_link).attr("href", href);
				};

				$(this).on('translate.owl.carousel', function(event) {
					var current                 = event.item.index;
					var owl_background_img      = $(this).parents('.owl-carousel-wrap').find('.owl-background a img');
					var owl_background_img_preparatory      = $(owl_background_img).not('.active');
					var owl_background_link_preparatory 	= $(owl_background_img).not('.active').parents('a');
					var src                     = $(event.target).find(".owl-item").eq(current).find("img").attr('src');
					var href                    = $(event.target).find(".owl-item").eq(current).find(".post__thumb a").attr('href');
					$(this).addClass("owl-disable-button");
					$(owl_background_img_preparatory).attr('src', src);

					if ( $(owl_background_img_preparatory).attr('src') == src) {
						$(owl_background_img).toggleClass('active');
						$(owl_background_link_preparatory).attr('href', href);
					}
				});

				$(this).on('translated.owl.carousel', function(event) {
					var owl_this = $(this);

                    setTimeout(function () {
                        $(owl_this).removeClass("owl-disable-button");
                    },900)
                });
            })
        },

        carousel_only_1i_loop: function() {
			var $carousels = $('.js-atbs-carousel-only-1i-loop');
			$carousels.each( function() {
				$(this).owlCarousel({
					items: 1,
					margin: 0,
					loop: true,
					nav: true,
					dots: true,
					autoHeight: true,
					navText: ['<i class="mdicon mdicon-arrow_back"></i>', '<i class="mdicon mdicon-arrow_forward"></i>'],
					smartSpeed: 500,
					responsive: {
						0 : {
							items: 1,
						},

					},
				});
			})
		},

        carousel_1i_get_src_width_auto_0m: function() {
            var $carousels = $('.js-atbs-carousel-1i-get-src-width-auto-0m');
            $carousels.each( function() {
                var carousel_loop = $(this).data('carousel-loop');
                var carousel_margin = parseInt($(this).data('carousel-margin'));
                $(this).owlCarousel({
                    items: 1,
                    margin: carousel_margin,
                    nav: true,
                    dots: true,
                    loop: carousel_loop,
                    autoHeight: true,
                    autoWidth: true,
                    navText: ['<i class="mdicon mdicon-navigate_before"></i>', '<i class="mdicon mdicon-navigate_next"></i>'],
                    smartSpeed: 500,
                    onInitialized  : owl_onInitialized,
                });
                function owl_onInitialized(event) {
                    var element             = event.target;
                    var current             = event.item.index;
                    var owl_background_img  = $(element).parents('.owl-carousel-wrap').find('.owl-background a img');
                    var src                 = $(event.target).find(".owl-item").eq(current).find("img").attr('src');
                    // Animation Class
                    var owl_items                   = $(element).find(".owl-item");
                    var current_center              = $(element).find(".owl-item").eq(current);
                    var current_center_index        = $(element).find(".owl-item").eq(current).index();
                    var current_center_active       = owl_items[current_center_index];

                    // Action
                    $(owl_background_img).attr("src", src);

                    $(current_center).addClass("Animation-Preventive");
                    setTimeout(function () {
                        $(current_center_active).addClass("active_current");
                    },100);
                };

                $(this).on('translate.owl.carousel', function(event) {
                    var element                 = event.target;
                    var current                 = event.item.index;
                    var owl_background_img      = $(this).parents('.owl-carousel-wrap').find('.owl-background a img');
                    var owl_background_img_preparatory      = $(owl_background_img).not('.active');
                    var src                     = $(event.target).find(".owl-item").eq(current).find("img").attr('src');
                    // Animation Class
                    var current_center         = $(element).find(".owl-item").eq(current);
                    var owl_items              = $(element).find(".owl-item");
                    var owl_item_remove_class  = $(element).find(".owl-item.active_current");
                    var current_center_index   = $(element).find(".owl-item").eq(current).index();
                    var current_center_active  = owl_items[current_center_index];

                    // Action
                    $(this).addClass("owl-disable-button");
                    $(owl_background_img_preparatory).attr('src', src);
                    if ( $(owl_background_img_preparatory).attr('src') == src) {
                        $(owl_background_img).toggleClass('active');
                    }
                    setTimeout(function () {
                        $(owl_item_remove_class).removeClass("active_current Animation-Preventive");
                        $(current_center).addClass("Animation-Preventive");
                        $(current_center_active).addClass("active_current");
                    },100);


                });

                $(this).on('translated.owl.carousel', function(event) {
                    var owl_this = $(this);

                    setTimeout(function () {
                        $(owl_this).removeClass("owl-disable-button");
                    },400)
                });
            })
        },

        carousel_1i_get_src_width_auto_center: function() {
		    var $carousels = $('.js-atbs-carousel-1i-get-src-width-auto-center');
		    $carousels.each( function() {
		        var carousel_loop = $(this).data('carousel-loop');
		        var carousel_margin = parseInt($(this).data('carousel-margin'));
		        $(this).owlCarousel({
		            items: 1,
		            margin: carousel_margin,
		            nav: true,
		            dots: true,
		            loop: carousel_loop,
		            autoHeight: true,
		            autoWidth: true,
		            center: true,
		            navText: ['<i class="mdicon mdicon-navigate_before"></i>', '<i class="mdicon mdicon-navigate_next"></i>'],
		            smartSpeed: 800,
		            onInitialized  : owl_onInitialized,
		            responsive: {
		                0: {
		                    margin: 30,
		                },
		                576: {
		                    margin: 30,
		                    mouseDrag: false,
		                    touchDrag: false,
		                },
		                768: {
		                    margin: 40,
		                    mouseDrag: false,
		                    touchDrag: false,
		                },
		                992: {
		                    margin: 60,
		                    mouseDrag: false,
		                    touchDrag: false,
		                },
		                1200: {
		                    margin: carousel_margin,
		                    mouseDrag: false,
		                    touchDrag: false,
		                }
		            },
		        });
		        function owl_onInitialized(event) {
		            var element             = event.target;
		            var current             = event.item.index;
		            var owl_background_img  = $(element).parents('.owl-carousel-wrap').find('.owl-background a img');
		            var src                 = $(event.target).find(".owl-item").eq(current).find("img").attr('src');
		            // Animation Class
		            var owl_items                   = $(element).find(".owl-item");
		            var current_center              = $(element).find(".owl-item").eq(current);
		            var current_center_index        = $(element).find(".owl-item").eq(current).index();
		            var current_center_active       = owl_items[current_center_index];
		            // Action
		            $(owl_background_img).attr("src", src);
		            $(current_center).addClass("Animation-Preventive");
		            setTimeout(function () {
		                $(current_center_active).addClass("active_current");
		            },100);
		        };
		        $(this).on('translate.owl.carousel', function(event) {
		            var element                 = event.target;
		            var current                 = event.item.index;
		            var owl_background_img      = $(this).parents('.owl-carousel-wrap').find('.owl-background a img');
		            var owl_background_img_preparatory      = $(owl_background_img).not('.active');
		            var src                     = $(event.target).find(".owl-item").eq(current).find("img").attr('src');
		            // Animation Class
		            var current_center         = $(element).find(".owl-item").eq(current);
		            var owl_items              = $(element).find(".owl-item");
		            var owl_item_remove_class  = $(element).find(".owl-item.active_current");
		            var current_center_index   = $(element).find(".owl-item").eq(current).index();
		            var current_center_active  = owl_items[current_center_index];
		            // Action
		            $(this).addClass("owl-disable-button");
		            $(owl_background_img_preparatory).attr('src', src);
		            if ( $(owl_background_img_preparatory).attr('src') == src) {
		                $(owl_background_img).toggleClass('active');
		            }
		            setTimeout(function () {
		                $(owl_item_remove_class).removeClass("active_current Animation-Preventive");
		                $(current_center).addClass("Animation-Preventive");
		                $(current_center_active).addClass("active_current");
		            },100);
		        });
		        $(this).on('translated.owl.carousel', function(event) {
		            var owl_this = $(this);
		            setTimeout(function () {
		                $(owl_this).removeClass("owl-disable-button");
		            },400)
		        });
		    })
		},

        carousel_hover_cursor_effect: function() {
            if ( $.isFunction($.fn.owlCarousel) ) {
                var $carousels = $('.js-atbs-carousel-hover-cursor-effect');
                $carousels.each( function() {
                    var element = $(this);
                    element.hover(function () {
                        element.addClass("on-hover");
                        var item = element.find('.owl-item .post');
                        // Append Cursor Element
                        var cursor =    '<div class="owl-cursor">' +
                            '<svg viewBox="0 0 512 512" xml:space="preserve">' +
                            ' <path xmlns="http://www.w3.org/2000/svg" d="M508.875,248.458l-160-160c-4.167-4.167-10.917-4.167-15.083,0c-4.167,4.167-4.167,10.917,0,15.083l141.792,141.792    H10.667C4.771,245.333,0,250.104,0,256s4.771,10.667,10.667,10.667h464.917L333.792,408.458c-4.167,4.167-4.167,10.917,0,15.083    c2.083,2.083,4.813,3.125,7.542,3.125c2.729,0,5.458-1.042,7.542-3.125l160-160C513.042,259.375,513.042,252.625,508.875,248.458z    "/>' +
                            '</svg>' +
                            '<div>';
                        $(element).append(cursor);

                        // Action
                        item.hover(function () {
                            element.removeClass("show-cursor");
                        },function () {
                            element.addClass("show-cursor");
                        });
                        $(this).on('mousemove',function (e) {
                            var offset = $(element).offset();
                            var x = e.pageX - offset.left;
                            var y = e.pageY - offset.top;
                            $('.owl-cursor').css({left: x, top: y});

                            if ((e.pageX - this.offsetLeft) < $(this).width() / 2) {
                                element.addClass("Left");
                                element.removeClass("Right");
                            } else {
                                element.addClass("Right");
                                element.removeClass("Left");
                            }
                        });

                    }, function () {
                        element.removeClass("on-hover");
                        var owl_cursor = element.find('.owl-cursor');
                        owl_cursor.remove();
                    });
                    element.on('click',function () {
                        if ( $(this).hasClass("show-cursor") ) {
                            if ( $(this).hasClass("Left")) {
                                element.trigger('prev.owl.carousel');
                            }
                            else {
                                element.trigger('next.owl.carousel');
                            }
                        }

                    });

                });

            }
        },

        carousel_background_below: function() {
            var $carousels = $('.js-atbs-carousel-background-below');
            $carousels.each( function() {
                var carousel_loop = $(this).data('carousel-loop');
                var carousel_margin = parseInt($(this).data('carousel-margin'));
                $(this).owlCarousel({
                    items: 1,
                    margin: carousel_margin,
                    nav: true,
                    dots: true,
                    loop: carousel_loop,
                    navText: ['<i class="mdicon mdicon-navigate_before"></i>', '<i class="mdicon mdicon-navigate_next"></i>'],
                    smartSpeed: 600,
                    onInitialized  : owl_onInitialized,
                    responsive: {
                        0: {
                            margin: 15,
                        },
                        481 : {
                            margin: carousel_margin,
                        }
                    },
                });

                function owl_onInitialized(event) {
                    var element             = event.target;
                    var current             = event.item.index;
                    var owl_background_img  = $(element).parents('.owl-carousel-wrap').find('.owl-background a img');
                    var src                 = $(event.target).find(".owl-item").eq(current).find("img").attr('src');

                    $(owl_background_img).attr("src", src);
                };
                $(this).on('translate.owl.carousel', function(event) {
                    var current                 = event.item.index;
                    var owl_background_img      = $(this).parents('.owl-carousel-wrap').find('.owl-background a img');
                    var src                     = $(event.target).find(".owl-item").eq(current).find("img").attr('src');

                    $(this).addClass("owl-disable-button");
                    $(owl_background_img).fadeOut(600, function() {
                        $(owl_background_img).attr("src", src);
                    }).fadeIn(600);
                });
                $(this).on('translated.owl.carousel', function(event) {
                    var owl_this = $(this);

                    setTimeout(function () {
                        $(owl_this).removeClass("owl-disable-button");
                    },400)
                });

            })
        },

        customCarouselNav: function() {
            if ( $.isFunction($.fn.owlCarousel) ) {
                var $carouselNexts = $('.js-carousel-next');
                $carouselNexts.each( function() {
                    var carouselNext = $(this);
                    var carouselID = carouselNext.parent('.atbs-carousel-nav-custom-holder').attr('data-carouselID');
                    var $carousel = $('#' + carouselID);

                    carouselNext.on('click', function() {
                        $carousel.trigger('next.owl.carousel');
                    });
                });

                var $carouselPrevs = $('.js-carousel-prev');
                $carouselPrevs.each( function() {
                    var carouselPrev = $(this);
                    var carouselID = carouselPrev.parent('.atbs-carousel-nav-custom-holder').attr('data-carouselID');
                    var $carousel = $('#' + carouselID);

                    carouselPrev.on('click', function() {
                        $carousel.trigger('prev.owl.carousel');
                    });
                });
            }
        },
        
        /* ============================================================================
        * Dark Mode & Light Mode
        * ==========================================================================*/
        themeSwitch: function () {
        	const darkModeEnabled = Number( dark_mode_buff['dark_mode_enabled'] );
            if ( ! darkModeEnabled ) {
                return;
            }

            const siteWrapper  = $( '.site-wrapper' ),
                  theme_switch = $( '.atbs-theme-switch' ),
                  darkModeDefault    = Number( dark_mode_buff['dark_mode_default'] ),
                  darkModeCookieName = dark_mode_buff['dark_mode_cookie_name'];

            function toggleDarkMode( status ) {
                if ( status == 'on' ) {
                    $( theme_switch ).addClass( 'is-active' );
                    siteWrapper.addClass( 'atbs-dark-mode' );
                    setCookie( darkModeCookieName, 1, 30 ); // Save data
                } else {
                    $( theme_switch ).removeClass( 'is-active' );
                    siteWrapper.removeClass( 'atbs-dark-mode' );
                    setCookie( darkModeCookieName, 0, 30 ); // Save data
                }
            }

            function updateDarkMode() {
                var darkMode = getCookie( darkModeCookieName );
                if ( darkMode == 1 ) {
                    toggleDarkMode( 'off' );
                } else {
                    toggleDarkMode( 'on' );
                }
            }

            function init() {
                var darkMode = getCookie( darkModeCookieName );
                // Turn on Dark Mode by default if is set in Theme Option
                if ( darkModeDefault && ( darkMode == '' ) ) {
                    toggleDarkMode( 'on' );
                }

                theme_switch.each( function() {
                    $( this ).on( 'click', updateDarkMode );
                } );
            }

            init(); // initialize
        },

        /* ============================================================================
        * Bookmark
        * ==========================================================================*/
        atbs_bookmark: function () {
            var post_button_bookmark = $('.post-button-bookmark');
            post_button_bookmark.each(function () {
                $(this).on('click',function () {
                    var btn_bookmark_status = $(this).find('.btn-bookmark');
                    $(btn_bookmark_status).toggleClass('active');
                });
            });
        },
        /* ============================================================================
         * AJAX load more posts
         * ==========================================================================*/
        ajaxLoadPost: function() {
            var loadedPosts = '';
            var $ajaxLoadPost = $('.js-ajax-load-post');
            var $this;
            function ajaxLoad(parameters, $postContainer) {
                var atbsAjaxSecurity = ajax_buff['atbs_security']['atbs_security_code']['content'];
                var ajaxStatus = '',
                    ajaxCall = $.ajax({
                        url: ajaxurl,
                        type: 'post',
                        dataType: 'html',
                        data: {
                            action: parameters.action,
                            args: parameters.args,
                            postOffset: parameters.postOffset,
                            type: parameters.type,
                            moduleInfo: parameters.moduleInfo,
                            the__lastPost: parameters.the__lastPost,
                            securityCheck: atbsAjaxSecurity                            
                            // other parameters
                        },
                    });
                ajaxCall.done(function(respond) {
                    loadedPosts = $.parseJSON(respond);
                    ajaxStatus = 'success';
                    if (loadedPosts == 'no-result') {
                        $postContainer.closest('.js-ajax-load-post').addClass('disable-click');
                        $postContainer.closest('.js-ajax-load-post').find('.js-ajax-load-post-trigger').addClass('hidden');
                        $postContainer.closest('.js-ajax-load-post').find('.atbs-no-more-button').removeClass('hidden');
                        return;
                    }
                    if (loadedPosts) {
                        var elToLoad = $(loadedPosts).hide().fadeIn('1500');
                        $postContainer.append(elToLoad); 
                        var currentPostionScroll = $(window).scrollTop();      
                    	ATBS.ATBS_Bookmark.reAddBookmark($postContainer);    
                    }
                    $('html, body').animate({ scrollTop: $window.scrollTop() + 1 }, 0).animate({ scrollTop: $window.scrollTop() - 1 }, 0); // for recalculating of sticky sidebar
                    // do stuff like changing parameters
                });

                ajaxCall.fail(function() {
                    ajaxStatus = 'failed';
                });

                ajaxCall.always(function() {
                    $postContainer.closest('.js-ajax-load-post').removeClass('atbs_loading');
                });
            }

            $ajaxLoadPost.each(function() {
                $this = $(this);
                var $moduleID = $this.closest('.atbs-block').attr('id');
                var moduleName = $moduleID.split("-")[0];
                var $triggerBtn = $this.find('.js-ajax-load-post-trigger');
                var args = ajax_buff['query'][$moduleID]['args'];
                
                var $postContainer = $this.find('.posts-list');
                var moduleInfo = ajax_buff['query'][$moduleID]['moduleInfo'];
                                                
                $triggerBtn.on('click', function() {
                    
                    $this = $(this).closest('.js-ajax-load-post');
 
                    if ($this.hasClass('disable-click'))
                        return;
                    
                    $this.addClass('atbs_loading');
                    
                    var postOffset  = parseInt(args['offset']) + $this.find('article').length;    
                    
                    if ($this.closest('.atbs-block').hasClass('atbs_latest_blog_posts')) {
                        var stickPostLength = args['post__not_in'].length;
                        postOffset = postOffset - stickPostLength;
                    }
                    var the__lastPost   = $this.find('article').length;

                    var parameters = {
                        action: moduleName,
                        args: args,
                        postOffset: postOffset,
                        type: 'loadmore',
                        moduleInfo: moduleInfo,
                        the__lastPost: the__lastPost,
                    };
                    ajaxLoad(parameters, $postContainer);
                });
            });
        },

        /* ============================================================================
         * Scroll Element
         * ==========================================================================*/
        atbs_scroll_element: function() {
            $(function () {
                // Define window variables
                var winScrollTop = $(window).scrollTop();
                var winHeight = window.innerHeight;
                var winWidth = window.innerWidth;

                // Define scene classes.
                var sceneClass = 'scene';
                var sceneActiveClass = sceneClass + '--active';
                var sceneEndedClass = sceneClass + '--ended';

                $(window).on('resize', function () {
                    winHeight = window.innerHeight;
                    winWidth = window.innerWidth;
                });

                // Scene classes function.
                function setScene($el) {

                    // Get bounding values from section.
                    var bounding = $el.data('elDom').getBoundingClientRect();

                    if (bounding.top > winHeight) {

                        // Section is below the viewport.
                        // Section has not ended or started, therefore remove classes.
                        $el.find('.scene').removeClass(sceneActiveClass);
                        $el.find('.scene').removeClass(sceneEndedClass);

                    } else if (bounding.bottom < 0) {

                        // Section is above the viewport.
                        // Section has ended, therefore remove classes.
                        $el.find('.scene').addClass(sceneEndedClass);
                        $el.find('.scene').removeClass(sceneActiveClass);

                    } else {

                        // We're now inside the section, not below or above.
                        // If top of section is at top of viewport, add class active.
                        if (bounding.top <= 0) {
                            $el.find('.scene').addClass(sceneActiveClass);
                        }

                        // If top of section is below top of viewport, remove class active.
                        if (bounding.top > 0) {
                            $el.find('.scene').removeClass(sceneActiveClass);
                        }

                        // If bottom of section is at bottom of viewport, add class ended.
                        if (bounding.bottom <= (winHeight)) {
                            $el.find('.scene').addClass(sceneEndedClass);
                        }

                        // If bottom of section is not at bottom of viewport, remove class ended.
                        if (bounding.bottom > (winHeight)) {
                            $el.find('.scene').removeClass(sceneEndedClass);
                        }
                    }
                }

                // This function sets up the horizontal scroll. This applies data attributes to the section for later use.
                function setUpHorizontalScroll($el) {

                    var sectionClass = $el.attr('class');

                    // Set content wrapper variables & data attributes.
                    var $contentWrapper = $el.find('.' + sectionClass + '__content-wrapper');
                    var contentWrapperDom = $contentWrapper.get(0);
                    $el.data('contentWrapper', $contentWrapper);
                    $el.data('contentWrapperDom', contentWrapperDom);

                    // Set content wrapper scroll width variables & data attributes.
                    var contentWrapperScrollWidth = $el.data('contentWrapperDom').scrollWidth;
                    $el.data('contentWrapperScrollWidth', contentWrapperScrollWidth);

                    // Set right max variables & data attributes.
                    var rightMax = $el.data('contentWrapperScrollWidth') - winWidth;
                    var rightMaxMinus = -(rightMax);
                    $el.data('rightMax', Number(rightMaxMinus));

                    // Set initialized data variable to false do incidate scrolling functionality doesn't work yet.
                    $el.data('initalized', false);

                    // Set height of section to the scroll width of content wrapper.
                    $el.css('height', $el.data('contentWrapperScrollWidth'));

                    // Set data attribute for outerHeight.
                    $el.data('outerHeight', $el.outerHeight());

                    // Set data attribute for offset top.
                    $el.data('offsetTop', $el.offset().top);

                    // Set data initialized data variable to true to indicate ready for functionality.
                    $el.data('initalized', true);

                    // Set data variable for transform X (0 by default)
                    $el.data('transformX', '0');

                    // Add class of init
                    $el.addClass($el.attr('class') + '--init');
                }

                function resetHorizontalScroll($el) {


                    // Update data attribute for content wrapper scroll width.

                    var contentWrapperScrollWidth = $el.data('contentWrapperDom').scrollWidth;
                    $el.data('contentWrapperScrollWidth', contentWrapperScrollWidth);


                    // Update rightMax variables & data attributes.
                    var rightMax = $el.data('contentWrapperScrollWidth') - winWidth;
                    var rightMaxMinus = -(rightMax);
                    $el.data('rightMax', Number(rightMaxMinus));

                    // Update height of section to the scroll width of content wrapper.
                    $el.css('height', $el.data('contentWrapperScrollWidth'));

                    // Update data attribute for outerHeight.
                    $el.data('outerHeight', $el.outerHeight());

                    // Update data attribute for offset top.
                    $el.data('offsetTop', $el.offset().top);

                    // If transform is smaller than rightmax, make it rightmax.
                    if ($el.data('transformX') <= $el.data('rightMax')) {
                        $el.data('contentWrapper').css({
                            'transform': 'translate3d(' + $el.data('rightMax') + 'px, 0, 0)',
                        });
                    }
                }

                var $horizontalScrollSections = $('.horizontal-scroll-section');
                var $horizontalScrollSectionsTriggers = $horizontalScrollSections.find('.trigger');

                // Each function - set variables ready for scrolling functionality. Call horizontal scroll functions on load and resize.
                $horizontalScrollSections.each(function (i, el) {

                    var $thisSection = $(this);

                    $(this).data('elDom', $(this).get(0));

                    // Set up horizontal scrolling data attributes and show section all have been computed.
                    setUpHorizontalScroll($(this));

                    // Now we're ready, call setScene on load that adds classes based on scroll position.
                    setScene($(this));

                    // Resize function
                    $(window).on('resize', function () {
                        // Reset horizontal scrolling data attributes and transform content wrapper if transform is bigger than scroll width.
                        resetHorizontalScroll($thisSection);
                        // Reset scene positioning.
                        setScene($thisSection);
                    });

                });

                function setupHorizontalTriggers($el, section) {
                    var parent = $el.parent();
                    var positionLeft = parent.position().left;
                    var positionLeftMinus = -(positionLeft);
                    var triggerOffset = $el.data('triggerOffset');
                    triggerOffset = !triggerOffset ? 0.5 : triggerOffset = triggerOffset;
                    $el.data('triggerOffset', triggerOffset);
                    $el.data('triggerPositionLeft', positionLeftMinus);
                    $el.data('triggerSection', section);
                }

                function useHorizontalTriggers($el) {
                    if ($el.data('triggerSection').data('transformX') <= ($el.data('triggerPositionLeft') * $el.data('triggerOffset'))) {
                        $el.data('triggerSection').addClass($el.data('class'));
                    } else {
                        if ($el.data('remove-class') !== false) {
                            $el.data('triggerSection').removeClass($el.data('class'));
                        }
                    }
                }

                $horizontalScrollSectionsTriggers.each(function (i, el) {
                    setupHorizontalTriggers($(this), $(this).closest('.horizontal-scroll-section'));
                });

                function transformBasedOnScrollHorizontalScroll($el) {

                    // Get amount scrolled variables.
                    var amountScrolledContainer = winScrollTop - $el.data('offsetTop');
                    var amountScrolledThrough = (amountScrolledContainer / ($el.data('outerHeight') - (winHeight - winWidth)));

                    // Add transform value variable based on amount scrolled through multiplied by scroll width of content.
                    var toTransform = (amountScrolledThrough * $el.data('contentWrapperScrollWidth'));

                    // Add transform value for minus (as we're transforming opposite direction).
                    var toTransformMinus = -(toTransform);

                    // If transform value is bigger or equal than 0, set value to 0.
                    toTransformMinus = Math.min(0, toTransformMinus);

                    // If transform value is smaller or equal than rightMax, set value to rightMax.
                    toTransformMinus = Math.max(toTransformMinus, $el.data('rightMax'));

                    // Update transformX data variable for section.
                    $el.data('transformX', Number(toTransformMinus));

                    // If section has been initalized, apply transform.
                    if ($el.data('initalized') == true) {
                        $el.data('contentWrapper').css({
                            'transform': 'translate3d(' + $el.data('transformX') + 'px, 0, 0)'
                        });
                    }
                }

                //
                $(window).on('scroll', function() {

                    // Get window scroll top.
                    winScrollTop = $(window).scrollTop();

                    // Each function in horizontal scroll sections.
                    $horizontalScrollSections.each(function (i, el) {
                        transformBasedOnScrollHorizontalScroll($(this));
                        setScene($(this));
                    });

                    // Each function for horizontal scroll section triggers.
                    $horizontalScrollSectionsTriggers.each(function (i, el) {
                        useHorizontalTriggers($(this));
                    });

                });

            });
        },
        /* ============================================================================
         * Sticky sidebar
         * ==========================================================================*/
        stickySidebar: function() {
            setTimeout(function() {
                var $stickySidebar = $('.js-sticky-sidebar');
                var $stickyHeader = $('.js-sticky-header');
                var marginTop = ($stickyHeader.length) ? ($stickyHeader.outerHeight() + 20) : 0; // check if there's sticky header

                if ( $( document.body ).hasClass( 'admin-bar' ) ) // check if admin bar is shown.
                    marginTop += 32;

                if ( $.isFunction($.fn.theiaStickySidebar) ) {
                    $stickySidebar.each(function () {
                        if ($(this).hasClass('atbs-block__aside-left')) {
                            $(this).theiaStickySidebar({
                                additionalMarginTop: 0,
                                additionalMarginBottom: 0,
                            });
                        } else {
                            $(this).theiaStickySidebar({
                                additionalMarginTop: marginTop,
                                additionalMarginBottom: 20,
                            });   
                        }
                    });
                }
            }, 250); // wait a bit for precise height;
            var $stickySidebarMobileFixed = $('.js-sticky-sidebar.atbs-sub-col--mobile-fixed');
            $stickySidebarMobileFixed.each(function () {
                var $this = $(this);
                var $drop_sub_col = $($this).find('.drop-sub-col');
                var $open_sub_col = $($this).find('.open-sub-col');
                setTimeout(function () {
                    $($this).append('<div class="drop-sub-col"></div>');
                    // <i class="mdicon mdicon-arrow_forward"></i>
                    $($this).append('<div class="open-sub-col"><i class="mdicon mdicon-arrow_forward"></i></div>');

                    var checkExist = setInterval(function() {
                        if ($drop_sub_col && $open_sub_col) {
                            $drop_sub_col = $($this).find('.drop-sub-col');
                            $open_sub_col = $($this).find('.open-sub-col');
                            $drop_sub_col.on('click',function () {
                                $($this).removeClass('active');
                            });
                            $open_sub_col.on('click',function () {
                                $($this).addClass('active');
                            });
                            clearInterval(checkExist);
                        }
                    }, 100); // check every 100ms

                },250);
            });
        },
    };

    ATBS.documentOnLoad = {

        init: function() {
            ATBS.header.smartAffix.compute(); //recompute when all the page + logos are loaded
            ATBS.header.smartAffix.updateState(); // update state
            ATBS.documentOnReady.stickySidebar();
        }

    };

    /* ============================================================================
     * Priority+ menu
     * ==========================================================================*/
    ATBS.priorityNav = function($menu) {
        var $btn = $menu.find('button');
        var $menuWrap = $menu.find('.navigation');
        var $menuItem = $menuWrap.children('li');
        var hasMore = false;
        var onLoadTry = 1;

        if(!$menuWrap.length) {
            return;
        }

        function calcWidth() {
            if ($menuWrap[0].getBoundingClientRect().width === 0)
                return;

            var navWidth = 0;

            $menuItem = $menuWrap.children('li');
            $menuItem.each(function() {
                navWidth += $(this)[0].getBoundingClientRect().width;
            });

            if (hasMore) {
                var $more = $menu.find('.priority-nav__more');
                var moreWidth = $more[0].getBoundingClientRect().width;
                var availableSpace = $menu[0].getBoundingClientRect().width;

                //Remove the padding width (assumming padding are px values)
                availableSpace -= (parseInt($menu.css("padding-left"), 10) + parseInt($menu.css("padding-right"), 10));
                //Remove the border width
                availableSpace -= ($menu.outerWidth(false) - $menu.innerWidth());

                if (navWidth > availableSpace) {
                    var $menuItems = $menuWrap.children('li:not(.priority-nav__more)');
                    var itemsToHideCount = 1;

                    $($menuItems.get().reverse()).each(function(index){
                        navWidth -= $(this)[0].getBoundingClientRect().width;
                        if (navWidth > availableSpace) {
                            itemsToHideCount++;
                        } else {
                            return false;
                        }
                    });

                    var $itemsToHide = $menuWrap.children('li:not(.priority-nav__more)').slice(-itemsToHideCount);

                    $itemsToHide.each(function(index){
                        $(this).attr('data-width', $(this)[0].getBoundingClientRect().width);
                    });

                    $itemsToHide.prependTo($more.children('ul'));
                } else {
                    var $moreItems = $more.children('ul').children('li');
                    var itemsToShowCount = 0;

                    if ($moreItems.length === 1) { // if there's only 1 item in "More" dropdown
                        if (availableSpace >= (navWidth - moreWidth + $moreItems.first().data('width'))) {
                            itemsToShowCount = 1;
                        }
                    } else {
                        $moreItems.each(function(index){
                            navWidth += $(this).data('width');
                            if (navWidth <= availableSpace) {
                                itemsToShowCount++;
                            } else {
                                return false;
                            }
                        });
                    }

                    if (itemsToShowCount > 0) {
                        var $itemsToShow = $moreItems.slice(0, itemsToShowCount);

                        $itemsToShow.insertBefore($menuWrap.children('.priority-nav__more'));
                        $moreItems = $more.children('ul').children('li');

                        if ($moreItems.length <= 0) {
                            $more.remove();
                            hasMore = false;
                        }
                    }
                }
            } else {
                var $more = $('<li class="priority-nav__more"><a href="#"><span>More</span><i class="mdicon mdicon-more_vert"></i></a><ul class="sub-menu"></ul></li>');
                var availableSpace = $menu[0].getBoundingClientRect().width;

                //Remove the padding width (assumming padding are px values)
                availableSpace -= (parseInt($menu.css("padding-left"), 10) + parseInt($menu.css("padding-right"), 10));
                //Remove the border width
                availableSpace -= ($menu.outerWidth(false) - $menu.innerWidth());

                if (navWidth > availableSpace) {
                    var $menuItems = $menuWrap.children('li');
                    var itemsToHideCount = 1;

                    $($menuItems.get().reverse()).each(function(index){
                        navWidth -= $(this)[0].getBoundingClientRect().width;
                        if (navWidth > availableSpace) {
                            itemsToHideCount++;
                        } else {
                            return false;
                        }
                    });

                    var $itemsToHide = $menuWrap.children('li:not(.priority-nav__more)').slice(-itemsToHideCount);

                    $itemsToHide.each(function(index){
                        $(this).attr('data-width', $(this)[0].getBoundingClientRect().width);
                    });

                    $itemsToHide.prependTo($more.children('ul'));
                    $more.appendTo($menuWrap);
                    hasMore = true;
                    if(onLoadTry) {
                        calcWidth();
                        onLoadTry--;
                    }
                }
            }
        }

        $window.on('load webfontLoaded', calcWidth );
        $window.on('resize', $.throttle( 50, calcWidth ));
    }

    $document.ready( ATBS.documentOnReady.init );
    $window.on('load', ATBS.documentOnLoad.init );
    $window.on( 'resize', ATBS.documentOnResize.init );

})(jQuery);