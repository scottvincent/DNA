// DNA Homepage Scripts

//Format Blog Date
  function blogDate(){
      moment().format("MMM, D"); 
  };

  // Tumblr Blog Data
  $(document).ready(function () {
    $('#posts')
    .tumblr({
      url:        'http://dnaartspace.tumblr.com',
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

// Populate Data from Google Spreadsheet
/*function showInfo(data, tabletop) {
  // Populate Partners Listing
  $.each( tabletop.sheets("Partners").all(), function(i, partners) {
    var content = "<a href='" + partners.partnerlink + "' target='_blank' >";
    content+= "<img src='" + partners.imageurl + "' alt='" + partners.partnername + "' />";
    content+= "</a>";
    $(content).appendTo("#partners"); 
  })
  // Populate Exhibition Unit Current and Future
  $.each( tabletop.sheets("Exhibition").all(), function(i, exhibition) {
    var startDate = exhibition.year + " " + exhibition.startmon + " " + exhibition.startdd;
    var endDate = exhibition.year + " " + exhibition.endmon + " " + exhibition.enddd;
    var today = moment().format("YYYY MMM DD");
    var content ="<div class='expoContain row'><div class='col col-lg-12 expoTitle'>";
    if (moment(today).isBefore(endDate) && moment(today).isAfter(startDate)) 
      content+= "<span class='subtitle current'>Current Exhibition:</span><br>";
    if (moment(today).isBefore(endDate) && moment(today).isBefore(startDate)) 
      content+= "<span class='subtitle'>Upcoming Exhibition:</span><br>";
    content+= "<div class='title'>" + exhibition.exhibitiontitle + "</div></div>";
    content+= "<div class='col col-lg-2 expoImg'><img src='" + exhibition.imageurl + "' /></div>"; 
    content+="<div class='col col-lg-10 expoInfo'>";
    if (exhibition.youtubeid != "") 
      content+="<div class='col col-lg-5 col-sm-12 pull-right'><div class='vidBox'><div class='vidContent'><iframe width='560' height='315' src='http://www.youtube.com/embed/" + exhibition.youtubeid + "' frameborder='0' allowfullscreen></iframe></div></div></div>";
    content+="<div class='date'>" + exhibition.startmon + "<span> " + exhibition.startdd + "</span> - " + exhibition.endmon + " <span>" + exhibition.enddd + "</span> @ <span>DNA Artspace</span></div>";
    content+="<p>" + exhibition.description + "</p>";
    if (exhibition.facebookurl || exhibition.twitterhandle || exhibition.youtubeusername || exhibition.websiteurl != "") 
      content+="<div class='expoSocial'>Learn More:";
    if (exhibition.facebookurl != "") 
      content+="<div class='dna-Social'><a target='_blank' href='" + exhibition.facebookurl + "'><span class='icon-facebook icon-large'></span></a></div> ";
    if (exhibition.twitterhandle != "") 
      content+="<div class='dna-Social'><a target='_blank' href='http://www.twitter.com/" + exhibition.twitterhandle + "'><span class='icon-twitter icon-large'></span></a></div> ";
    if (exhibition.youtubeusername != "") 
      content+="<div class='dna-Social'><a target='_blank' href='http://www.youtube.com/" + exhibition.youtubeusername + "'><span class='icon-youtube icon-large'></span></a></div> ";
    if (exhibition.websiteurl != "" ) 
      content+="<span class='website'><a target='_blank' href='" + exhibition.websiteurl + "'>Visit Website</span></div></div>";
    if (moment(today).isBefore(endDate) || moment(today).isBefore(startDate)){
      $(content).appendTo("#exhibition"); 
    }
    
  })
  // Populate Event Unit
  $.each( tabletop.sheets("Events").all(), function(i, events) {
    var startDate = events.year + " " + events.startmon + " " + events.startdd;
    var endDate = events.year + " " + events.endmon + " " + events.enddd;
    var today = moment().format("YYYY MMM DD");
    var content ="<div class='expoContain row'><div class='col col-lg-12 expoTitle'>";
    content+= "<div class='title'>" + events.title + "</div></div>";
    content+= "<div class='col col-lg-1 col-sm-2 col-3 expoImg'><img src='" + events.imageurl + "' /></div>"; 
    content+="<div class='col col-lg-11 col-sm-10 col-9 expoInfo'>";
    content+="<div class='date'>" + events.startmon + "<span> " + events.startdd + "</span> - " + events.endmon + " <span>" + events.enddd +"</span>";
    if (events.time != "") 
      content+=" <span>" + events.time + "</span>";
    content+=" <div style='display:block' class='visible-sm'></div>@ <span>DNA Artspace</span></div>";
    content+="<p>" + events.description + "</p>";
    if (events.facebookurl || events.twitterhandle || events.youtubeusername || events.websiteurl != "") 
      content+="<div class='expoSocial'>Learn More:";
    if (events.facebookurl != "") 
      content+="<div class='dna-Social'><a target='_blank' href='" + events.facebookurl + "'><span class='icon-facebook icon-large'></span></a></div> ";
    if (events.twitterhandle != "") 
      content+="<div class='dna-Social'><a target='_blank' href='http://www.twitter.com/" + events.twitterhandle + "'><span class='icon-twitter icon-large'></span></a></div> ";
    if (events.youtubeusername != "") 
      content+="<div class='dna-Social'><a target='_blank' href='http://www.youtube.com/" + events.youtubeusername + "'><span class='icon-youtube icon-large'></span></a></div> ";
    if (events.websiteurl != "" ) 
      content+="<span class='website'><a target='_blank' href='" + events.websiteurl + "'>Visit Website</span></div></div>";
    if (moment(today).isBefore(endDate) || moment(today).isBefore(startDate)){
      $(content).appendTo("#EventListing"); 
    }
    
  })


}


// Google Spreadsheet
var public_spreadsheet_url = 'https://docs.google.com/spreadsheet/pub?key=0AikF9fpgaspkdF9QNEVPYXpfZklfdjg5YTRrNHBwUmc&output=html';

Tabletop.init( { key: public_spreadsheet_url,
 callback: showInfo,
 wanted: [ "Events" , "Partners" , "Exhibition" ],
 proxy: 'https://s3.amazonaws.com/DNADATA',
 debug: false } 
*/
