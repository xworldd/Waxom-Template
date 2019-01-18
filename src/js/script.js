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

		if(w_top + 520 >= e_top || w_height + w_top == d_height || e_height + e_top < w_height){
			$(".spincrement").spincrement({
				thousandSeparator: "",
				duration: 2000,
			});
			show = false;
		}
	});

    // Slick-slider initialization 

    $('.blog-slider').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: true,
        centerMode: true,
        focusOnSelect: true,
        autoplay: true,
        autoplaySpeed: 2500,
        prevArrow:
         '<div class="slider-arrow slider-arrow_left"><div>',       
        nextArrow:
         '<div class="slider-arrow slider-arrow_right"><div>',
        responsive: [
          {
            breakpoint: 768,
            settings: {
              arrows: false,
              centerMode: false,
              slidesToShow: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              arrows: false,
              centerMode: true,
              slidesToShow: 1
            }
          }
        ]    
      });


});