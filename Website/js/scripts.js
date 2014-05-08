// DNA Scripts

(function() {
// iPhone 5 WebApp height Fix
  if (window.screen.height==568) {
    document.querySelector("meta[name=viewport]").content="user-scalable=no, initial-scale=1, maximum-scale=1, target-densitydpi=device-dpi";
  }
// Windows Phone 8 IE10 Snap Mode Width Fix
  if ("-ms-user-select" in document.documentElement.style && navigator.userAgent.match(/IEMobile\/10\.0/)) {
    var msViewportStyle = document.createElement("style");
    msViewportStyle.appendChild(document.createTextNode("@-ms-viewport{width:auto!important}"));
    document.getElementsByTagName("head")[0].appendChild(msViewportStyle);
  }
})();

// Google Analytics
(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
  (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
  m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
  })(window,document,'script','//www.google-analytics.com/analytics.js','ga');

  ga('create', 'UA-42845641-1', 'dnaartspace.com');
  ga('send', 'pageview');

function thankyou(){
   $('#contact').append('<h4 class="alert alert-success">Message Sent Thank You for contacting us!</h4>');
   $('.contactform').remove();
}

