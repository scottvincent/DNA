// DNA About Scripts

// Populate Data from Google Spreadsheet
function showInfo(data, tabletop) {
  // Populate Partners Listing
  $.each( tabletop.sheets("Partners").all(), function(i, partners) {
    var content = "<a href='" + partners.partnerlink + "' target='_blank' >";
    content+= "<img src='" + partners.imageurl + "' alt='" + partners.partnername + "' />";
    content+= "</a>";
    $(content).appendTo("#partners"); 
  })

  

}


// Google Spreadsheet
var public_spreadsheet_url = 'https://docs.google.com/spreadsheet/pub?key=0AikF9fpgaspkdF9QNEVPYXpfZklfdjg5YTRrNHBwUmc&output=html';

Tabletop.init( { key: public_spreadsheet_url,
 callback: showInfo,
 wanted: [ "Partners" ],
 proxy: 'https://s3.amazonaws.com/DNADATA',
 debug: false } )


