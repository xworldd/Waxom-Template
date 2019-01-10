// Navigation bar script
$(document).ready(function() {
    var link = $('.menu-mobile-link')
    var link_active = $('.menu-mobile-link_active')
    var menu = $('.menu-mobile');
    var nav_link = $('.menu-mobile a');


    link.click(function() {
        link.toggleClass("menu-mobile-link_active");
        menu.toggleClass("menu-mobile_active");
    });
    nav_link.click(function() {
        link.toggleClass("menu-mobile-link_active");
        menu.toggleClass("menu-mobile_active");
    });

	// mixItUp plugin initialization
    function mixItUp() {
        $("#container").mixItUp({

            selectors: {
                target: '.projects-container-element',
                filter: '.projects-filters-element'
            },
            controls: {
            	activeClass:'projects-filters-element-active'
            },
            animation: {
            	// enable: false,
            	effects:"fade scale",
            	duration: 800
            }
        });
    };

    mixItUp();

	// Hide/Show content button script
    var moreBtn = $('.projects-btn')
    
    var element = 6; 
    hideElement = "Show Less";
    showElement = "Show More";

    $(".projects-btn").text( hideElement );
    $(".element:not(:lt("+element+"))").hide();

    $(".projects-btn").click(function (e){
      e.preventDefault();
      if( $(".element:eq("+element+")").is(":hidden") )
      {
        $(".element:hidden").show();
        $(".projects-btn").text( hideElement );
      }
      else
      {
        $(".element:not(:lt("+element+"))").hide();
        $(".projects-btn").text( showElement );
      }
    });
	// Spincrement plugin initialization 

	var show = true;
	var countbox = ".stats-content";
	$(window).on("scroll load resize", function(){

		if(!show) return false;

		var w_top = $(window).scrollTop();
		var e_top = $(".stats").offset().top;

		var w_height = $(window).height();
		var d_height = $(document).height();

		var e_height = $(".stats").outerHeight();

		console.log(w_top + "/" + e_top);

		if(w_top >= e_top || w_height + w_top == d_height || e_height + e_top < w_height){
			$(".spincrement").spincrement({
				thousandSeparator: "",
				duration: 2000,
			});

			show = false;
		}
	});


});