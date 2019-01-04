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

    var moreBtn = $('.projects-btn')
    
    var element = 6; // - количество отображаемых новостей
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

});