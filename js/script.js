$(document).ready(function() {

    $('#sidebar').hcSticky({
    wrapperClassName: 'sidebar-sticky',
    stickTo : document 
});



  $("#owl1").owlCarousel({

    //   navigation : true, // Show next and prev buttons
      slideSpeed : 300,
      paginationSpeed : 400,
      singleItem:true

      // "singleItem:true" is a shortcut for:
      // items : 1,
      // itemsDesktop : false,
      // itemsDesktopSmall : false,
      // itemsTablet: false,
      // itemsMobile : false

  });

  $("#owl2").owlCarousel({

      autoPlay: 3000, //Set AutoPlay to 3 seconds

      items : 3,
      itemsDesktop : [1199,3],
      itemsDesktopSmall : [979,3]

  });

});
