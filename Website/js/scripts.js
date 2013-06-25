// Starting Point Scripts
(function() {
// iPhone 5 WebApp height Fix
      if (window.screen.height==568) {
        document.querySelector("meta[name=viewport]").content="user-scalable=no, initial-scale=1, maximum-scale=1, target-densitydpi=device-dpi";
      }
// Windows Phone 8 IE10 Snap Mode Width Fix
      if ("-ms-user-select" in document.documentElement.style && navigator.userAgent.match(/IEMobile\/10\.0/)) {
        var msViewportStyle = document.createElement("style");
        msViewportStyle.appendChild(
          document.createTextNode("@-ms-viewport{width:auto!important}")
        );
        document.getElementsByTagName("head")[0].appendChild(msViewportStyle);
      } 

// Gallery
  $('#dna-Gallery').isotope({
    // options
    itemSelector : '.item',
    resizeable: false,
    animationEngine : 'best-available',
    animationOptions: {
     duration: 750,
     easing: 'linear',
     queue: false,
   },
    masonryHorizontal: {
      rowHeight: 200,
    }
  });

})();
$(window).resize(function(){
  $('#dna-Gallery').isotope({
    // update columnWidth to a percentage of container width
    masonryHorizontal: { 
      rowHeight: 200,
    }
  });
});
$(document).ready(function () {
    $('#posts')
        .tumblr({
            url:        'http://thestrathconaartgallery.tumblr.com',
            pagination: false,
            loading:    '#loading',
            perPage:    5,
            photoSize: 400,
            videoSize: 500,
            photoThumbSize: 75,
            photoLightboxSize: 500
        });
});