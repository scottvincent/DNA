// DNA Homepage Scripts

// Fix Isotope .corner-stamp to Float Left
$.Isotope.prototype._masonryReset = function() {
  // layout-specific props
  this.masonry = {};
  this._getSegments();
  var i = this.masonry.cols;
  this.masonry.colYs = [];
  while (i--) {
    this.masonry.colYs.push(0);
  }
  if ( this.options.masonry.cornerStampSelector ) {
    var $cornerStamp = this.element.find( this.options.masonry.cornerStampSelector ),
    stampWidth = $cornerStamp.outerWidth(true) - ( this.element.width() % this.masonry.columnWidth ),

    cornerCols = Math.ceil( stampWidth / this.masonry.columnWidth ),
    cornerStampHeight = $cornerStamp.outerHeight(true);
    for ( i = 0; i < Math.min( this.masonry.cols - cornerCols, cornerCols ); i++ ) {
      this.masonry.colYs[i] = cornerStampHeight;
    }
  }
};

// Populate Data from Google Spreadsheet
function showInfo(data, tabletop) {
  // Populate Exhibition Unit
  $.each( tabletop.sheets("Exhibition").all(), function(i, exhibition) {
    $('.dna-SpaceImg').css({'background-image': 'url(' + exhibition.imageurl + ')'});
    var content = "<span>Current Exhibition:</span><br>";
    content+="<div><a href='events.html'>" + exhibition.exhibitiontitle + "</a></div>";
    $(content).appendTo("#exhibition"); 
    return false;
  })
  // Populate Event Unit
  $.each( tabletop.sheets("Events").all(), function(i, events) {
    $('.dna-EventCard').addClass(events.type);
    var content = "<div class='heading'>Next Event:</div>";
    content+="<div class='title'>" + events.title + "</div>";
    content+="<img src='" + events.imageurl + "' />";
    content+="<div class='date'>" + events.startmon + "<span> " + events.startdd + "</span> - " + events.endmon + " <span>" + events.enddd + "</span></div>";
    content+="<div class='buttonbg'><a href='events.html' class='btn btn-primary btn-block'><h4>SEE ALL EVENTS</h4></a></div>";
    $(content).appendTo("#NextEvent"); 
    return false;
  })

  // Populate Artist Listing
  $.each( tabletop.sheets("Artists").all(), function(i, artists) {
    var content = "<li><a href='#' data-filter='." + artists.classname + "' >";
    content+= artists.fullname ;
    content+= "</a></li>";
    $(content).appendTo("#artist-buttons"); 
  })
  // Populate Artist Bios
  $.each( tabletop.sheets("Artists").all(), function(i, artists) {
    var content = "<div class='artistbio " + artists.classname + " hide'>";
    content+="<h1>" + artists.fullname + "</h1>";
    content+="<h3>" + artists.location + "</h3>";
    content+="<p>" + artists.description + "</p>";
    if (artists.worksavailable == "Yes") 
      content+="<p><a class='btn btn-success' href='https://docs.google.com/document/d/1V6rWUJ_GpfPWhymgPNZ6iRMnzpLnKI0Zxr-aRzbbrVs/pub' target='_blank'>View Works Available</a></p> ";
    if (artists.facebookurl != "") 
      content+="<div class='dna-Social'><a target='_blank' href='" + artists.facebookurl + "'><span class='icon-facebook icon-large'></span></a></div> ";
    if (artists.twitterhandle != "") 
      content+="<div class='dna-Social'><a target='_blank' href='http://www.twitter.com/" + artists.twitterhandle + "'><span class='icon-twitter icon-large'></span></a></div> ";
    if (artists.youtubeusername != "") 
      content+="<div class='dna-Social'><a target='_blank' href='http://www.youtube.com/" + artists.youtubeusername + "'><span class='icon-youtube icon-large'></span></a></div> ";
     if (artists.websiteurl != "" ) 
      content+="<div class='website'><a target='_blank' href='" + artists.websiteurl + "'>" + artists.websiteurl + "</div>";
    content+="</div>";
    $(content).appendTo("#corner-stamp"); 
  })
  // Populate Images
  $.each( tabletop.sheets("Art").all(), function(i, art) {
    var content = "<article class='entry " + art.classname + "'>";
    content+="<a data-rel='prettyPhoto'  title='" + art.artist + " " + art.date + " - " + art.description + "' rel='prettyPhoto[" + art.classname + "]' href='" + art.imageurl + "w1200/'>";
    content+="<img src='" + art.imageurl + "w458/' alt='" + art.title + "' />";
    content+="<div class='dna-artistlink'><div><p class='line1'>" + art.artist + "</p><p class='line2'>" + art.title + ", " + art.date + "</p><p class='line3'>" + art.medium + " (" + art.size + ")</p></div></div>";
    if (art.available == "Yes") 
      content+="<div class='available'><div>Available</div></div>";
    content+="</a>";
    content+="</article>";
    $(content).appendTo("#dna-Gallery"); 
  })
  // Populate Partners Listing
  $.each( tabletop.sheets("Partners").all(), function(i, partners) {
    var content = "<a href='" + partners.partnerlink + "' target='_blank' >";
    content+= "<img src='" + partners.imageurl + "' alt='" + partners.partnername + "' />";
    content+= "</a>";
    $(content).appendTo("#partners"); 
  })

  var $container = $('#dna-Gallery');
  $container.imagesLoaded( function(){
    $container.isotope({
      filter: '.entry',
      itemSelector : 'article',
      animationOptions: {
        duration: 750,
        easing: 'linear',
        queue: false,
      },
      sortBy : 'random',
      resizeable: true,
      animationEngine : 'best-available',
      masonry: { 
        columnWidth: $container.width() / 5,
      }
    });

    var $sortedItems = $container.data('isotope').$filteredAtoms;

    $sortedItems.first().addClass('width2');
    $sortedItems.eq(11).addClass('width2');
    $sortedItems.eq(21).addClass('width2');
    $container.isotope( 'reLayout' );

    $('a[data-gal]').each(function() {
      $(this).attr('rel', jQuery(this).data('gal'));
    });   
    $("a[data-rel^='prettyPhoto']").prettyPhoto({
      animation_speed: 'fast', /* fast/slow/normal */
      slideshow: 5000, /* false OR interval time in ms */
      autoplay_slideshow: false, /* true/false */
      opacity: 0.80, /* Value between 0 and 1 */
      show_title: true, /* true/false */
      allow_resize: true, /* Resize the photos bigger than viewport. true/false */
      default_width: 500,
      default_height: 344,
      counter_separator_label: '/', /* The separator for the gallery counter 1 "of" 2 */
      theme: 'dark_square', /* pp_default / light_rounded / dark_rounded / light_square / dark_square / facebook */
      horizontal_padding: 20, /* The padding on each side of the picture */
      hideflash: false, /* Hides all the flash object on a page, set to TRUE if flash appears over prettyPhoto */
      wmode: 'opaque', /* Set the flash wmode attribute */
      autoplay: true, /* Automatically start videos: True/False */
      modal: false, /* If set to true, only the close button will close the window */
      deeplinking: true, /* Allow prettyPhoto to update the url to enable deeplinking. */
      overlay_gallery: true, /* If set to true, a gallery will overlay the fullscreen image on mouse over */
      keyboard_shortcuts: true, /* Set to false if you open forms inside prettyPhoto */
      changepicturecallback: function(){}, /* Called everytime an item is shown/changed */
      callback: function(){}, /* Called when prettyPhoto is closed */
      ie6_fallback: true,
      markup: '<div class="pp_pic_holder"> \
      <div class="ppt">&nbsp;</div> \
      <div class="pp_top"> \
      <div class="pp_left"></div> \
      <div class="pp_middle"></div> \
      <div class="pp_right"></div> \
      </div> \
      <div class="pp_content_container"> \
      <div class="pp_left"> \
      <div class="pp_right"> \
      <div class="pp_content"> \
      <div class="pp_loaderIcon"></div> \
      <div class="pp_fade"> \
      <a href="#" class="pp_expand" title="Expand the image">Expand</a> \
      <div class="pp_hoverContainer"> \
      <a class="pp_next" href="#">next</a> \
      <a class="pp_previous" href="#">previous</a> \
      </div> \
      <div id="pp_full_res"></div> \
      <div class="pp_details"> \
      <div class="pp_nav"> \
      <a href="#" class="pp_arrow_previous">Previous</a> \
      <p class="currentTextHolder">0/0</p> \
      <a href="#" class="pp_arrow_next">Next</a> \
      </div> \
      <p class="pp_description"></p> \
      {pp_social} \
      <a class="pp_close" href="#">Close</a> \
      </div> \
      </div> \
      </div> \
      </div> \
      </div> \
      </div> \
      <div class="pp_bottom"> \
      <div class="pp_left"></div> \
      <div class="pp_middle"></div> \
      <div class="pp_right"></div> \
      </div> \
      </div> \
      <div class="pp_overlay"></div>',
      gallery_markup: '<div class="pp_gallery"> \
      <a href="#" class="pp_arrow_previous">Previous</a> \
      <a href="#" class="pp_arrow_next">Next</a> \
      </div>',
      image_markup: '<img id="fullResImage" src="{path}" />',
      flash_markup: '<object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" width="{width}" height="{height}"><param name="wmode" value="{wmode}" /><param name="allowfullscreen" value="true" /><param name="allowscriptaccess" value="always" /><param name="movie" value="{path}" /><embed src="{path}" type="application/x-shockwave-flash" allowfullscreen="true" allowscriptaccess="always" width="{width}" height="{height}" wmode="{wmode}"></embed></object>',
      quicktime_markup: '<object classid="clsid:02BF25D5-8C17-4B23-BC80-D3488ABDDC6B" codebase="http://www.apple.com/qtactivex/qtplugin.cab" height="{height}" width="{width}"><param name="src" value="{path}"><param name="autoplay" value="{autoplay}"><param name="type" value="video/quicktime"><embed src="{path}" height="{height}" width="{width}" autoplay="{autoplay}" type="video/quicktime" pluginspage="http://www.apple.com/quicktime/download/"></embed></object>',
      iframe_markup: '<iframe src ="{path}" width="{width}" height="{height}" frameborder="no"></iframe>',
      inline_markup: '<div class="pp_inline">{content}</div>',
      custom_markup: '',
      social_tools: '<div class="pp_social"><div class="twitter"><a href="http://twitter.com/share" class="twitter-share-button" data-count="none">Tweet</a><script type="text/javascript" src="http://platform.twitter.com/widgets.js"></script></div><div class="facebook"><iframe src="http://www.facebook.com/plugins/like.php?locale=en_US&href='+location.href+'&amp;layout=button_count&amp;show_faces=true&amp;width=500&amp;action=like&amp;font&amp;colorscheme=light&amp;height=23" scrolling="no" frameborder="0" style="border:none; overflow:hidden; width:500px; height:23px;" allowTransparency="true"></iframe></div></div>' /* html or false to disable */
    });

    $('.dna-Artists a').click(function(){
      var selector = $(this).attr('data-filter');
      $container.isotope({
        filter: selector,
        animationOptions: {
          duration: 750,
          easing: 'linear',
          queue: false,
        },
        masonry: {
          columnWidth: $container.width() / 5,
          cornerStampSelector: '.corner-stamp'
        }
      });

      $container.isotope( 'reLayout' );
      var target_offset = $("#corner-stamp").offset();
      var target_top = target_offset.top;
      //goto that anchor by setting the body scroll top to anchor top
      $('html, body').animate({scrollTop:target_top}, 500);
      return false;
    });

    var $optionSets = $('.dna-Artists'),
    $optionLinks = $optionSets.find('a');
    $optionLinks.click(function(){
      var $this = $(this);
      var selector = $(this).attr('data-filter');
      //change sizes of randomly featured to standard size   
      $container.find('.width2').removeClass('width2');
      $('.artistbio').addClass('hide');
      $(selector).removeClass('hide');
      $container.isotope( 'reLayout' );
      // don't proceed if already selected
      if ( $this.hasClass('selected') ) {
        return false;
      }  
      var $optionSet = $this.parents('.dna-Artists');
      $optionSet.find('.selected').removeClass('selected');
      $this.addClass('selected'); 
      if ( $('.seeall').hasClass('selected') ) {
        $('.seeall').addClass('hide')
        //change sizes of randomly featured to back to double size  
        $sortedItems.first().addClass('width2');
        $sortedItems.eq(11).addClass('width2');
        $sortedItems.eq(21).addClass('width2');
        $('.artistbio').addClass('hide');
        $container.isotope( 'reLayout' );
      }else{
       $('.seeall').removeClass('hide')
      };
    });
  });
}

$(window).resize(function(){
// Resize Gallery on Window Resize
  $('#dna-Gallery').isotope({
    masonry: { 
      columnWidth: $('#dna-Gallery').width() / 5,
    }
  });
});

// Google Spreadsheet
var public_spreadsheet_url = 'https://docs.google.com/spreadsheet/pub?key=0AikF9fpgaspkdF9QNEVPYXpfZklfdjg5YTRrNHBwUmc&output=html';

Tabletop.init( { key: public_spreadsheet_url,
 callback: showInfo,
 wanted: [ "Artists", "Art" , "Events" , "Partners" , "Exhibition" ],
 debug: true } )

function blogDate(){
    moment().format("MMM, D"); 
};

// Tumblr
$(document).ready(function () {
  $('#posts')
  .tumblr({
    url:        'http://massmoca.tumblr.com',
    pagination: false,
    loading:    '#loading',
    perPage:    5,
    photoSize: 500,
    videoSize: 500,
    photoThumbSize: 75,
    photoLightboxSize: 500,
    fancybox: false,
    timeago: false
  });

});