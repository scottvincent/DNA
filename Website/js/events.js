// DNA Events Scripts

// Populate Data from Google Spreadsheet
function showInfo(data, tabletop) {
  // Populate Exhibition Unit
  $.each( tabletop.sheets("Exhibition").all(), function(i, exhibition) {
    var content = "<div class='col col-lg-6 expoImg'><img src='" + exhibition.imageurl + "' /><div class='expoTitle'>"; 
    if (exhibition.youtubeid != "") 
      content+="<iframe width='560' height='315' src='http://www.youtube.com/embed/" + exhibition.youtubeid + "' frameborder='0' allowfullscreen></iframe><br />";
    content+="<span class='subtitle'>Current Exhibition:</span><br>";
    content+="<div class='title'>" + exhibition.exhibitiontitle + "</div></div></div>";
    content+="<div class='col col-lg-6'><p>" + exhibition.description + "</p>";
    content+="<div class='date'>" + exhibition.startmon + "<span> " + exhibition.startdd + "</span> - " + exhibition.endmon + " <span>" + exhibition.enddd + "</span> @ <span>DNA Artspace</span></div>";
    if (exhibition.facebookurl || exhibition.twitterhandle || exhibition.youtubeusername || exhibition.websiteurl != "") 
      content+="<div class='expoSocial'>Learn More:";
    if (exhibition.facebookurl != "") 
      content+="<div class='dna-Social'><a target='_blank' href='" + exhibition.facebookurl + "'><span class='icon-facebook icon-large'></span></a></div> ";
    if (exhibition.twitterhandle != "") 
      content+="<div class='dna-Social'><a target='_blank' href='http://www.twitter.com/" + exhibition.twitterhandle + "'><span class='icon-twitter icon-large'></span></a></div> ";
    if (exhibition.youtubeusername != "") 
      content+="<div class='dna-Social'><a target='_blank' href='http://www.youtube.com/" + exhibition.youtubeusername + "'><span class='icon-youtube icon-large'></span></a></div> ";
     if (exhibition.websiteurl != "" ) 
      content+="<span class='website'><a target='_blank' href='" + exhibition.websiteurl + "'>" + exhibition.websiteurl + "</span></div>";
    $(content).appendTo("#exhibition"); 
    return false;
  })
  // Populate Event Unit
  $.each( tabletop.sheets("Events").all(), function(i, events) {
    var content = "<div class='dna-EventMargin'><div class='dna-EventCard " + events.type + "'>";
    content+="<div class='title'>" + events.title + "</div>";
    content+="<img src='" + events.imageurl + "' />";
    content+="<div class='date'>" + events.startmon + "<span> " + events.startdd + "</span>";
    if (events.endmon || events.enddd != "") 
      content+=" - ";
    content+=events.endmon + " <span>" + events.enddd + "</span>";
    if (events.time != "") 
      content+=" @ <span>" + events.time + "</span>";
    content+="</div>";
    if (events.facebookurl != "") 
      content+="<div class='dna-Social'><a target='_blank' href='" + events.facebookurl + "'><span class='icon-facebook icon-large'></span></a></div> ";
    if (events.twitterhandle != "") 
      content+="<div class='dna-Social'><a target='_blank' href='http://www.twitter.com/" + events.twitterhandle + "'><span class='icon-twitter icon-large'></span></a></div> ";
    if (events.youtubeusername != "") 
      content+="<div class='dna-Social'><a target='_blank' href='http://www.youtube.com/" + events.youtubeusername + "'><span class='icon-youtube icon-large'></span></a></div> ";
     if (events.websiteurl != "" ) 
      content+="<span class='website'><a target='_blank' href='" + events.websiteurl + "'>Website Link</span></div>";
    content+="</div></div>";
    $(content).appendTo("#EventListing"); 

  })

}


// Google Spreadsheet
var public_spreadsheet_url = 'https://docs.google.com/spreadsheet/pub?key=0AikF9fpgaspkdF9QNEVPYXpfZklfdjg5YTRrNHBwUmc&output=html';

Tabletop.init( { key: public_spreadsheet_url,
 callback: showInfo,
 wanted: [ "Artists", "Art" , "Events" , "Partners" , "Exhibition" ],
 debug: true } )


