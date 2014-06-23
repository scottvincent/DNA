// DNA Exhibitions Scripts


// Populate Data from Google Spreadsheet
function showInfo(data, tabletop) {
  var count = 0;
  // Populate Exhibition Unit Current and Past
  $.each( tabletop.sheets("Exhibitions").all(), function(i, exhibition) {
    count++;
    if (exhibition.section != "Past") {
      var content = "<div class='expoContain row'>";
      content+= "<div class='col col-lg-12 expoImg'><img src='" + exhibition.imageurl + "'/></div>";
      content+= "<div class='col col-lg-12 expoInfo'>";

      content+= "<div class='title'>" + exhibition.exhibitiontitle + "<br>" + exhibition.date + "</div>";
      content+=  exhibition.longdescription;
      if (exhibition.gallery == "Yes"){
        content+= "<a class='btn btn-primary showGallery' href='#gallery" + count + "'>View Exhibition</a>";
        content += "<div id='gallery" + count + "' class='moreInfo' style='display: none;'>";
        content+= "<div id='pastgallery" + count + "' class='carousel slide' data-ride='carousel'>";
        content+= "<a class='left carousel-control' href='#pastgallery" + count + "' data-slide='prev'>Prev</a><a class='right carousel-control' href='#pastgallery" + count + "' data-slide='next'>Next</a>";
        content+= "<a href='#pastgallery" + count + "' data-slide='next'>";
        content+= "<div class='carousel-inner' data-title='" + exhibition.exhibitiontitle + "'></div>";
        content+= "</a> <button type='button' data-toggle='modal' data-target='#contact-modal' class='btn btn-xs btn-info availability' >Availability & Pricing</button>";

        content+= "</div>";
        content+= "</div>";
      }
      content+= "</div>";
      content+="</div>";
      
      $(content).appendTo("#exhibition"); 

    }else{
      var content = "<div class='col col-md-4 col-sm-6 pastContain'>";
      content+= "<div class='pastImg hidden-xs'>";
      if (exhibition.gallery == "Yes")
        content+= "<a href='#gallery" + count + "' class='showGallery'>";
      content+= "<img src='" + exhibition.imageurl + "'/>";
      if (exhibition.gallery == "Yes")
        content+= "</a>";
      content+= "</div>";
      content+= "<div class='pastInfo'>";

      content+= "<div class='title'>";
      if (exhibition.gallery == "Yes")
        content+= "<a href='#gallery" + count + "' class='showGallery'>";
      content+= exhibition.exhibitiontitle;
      if (exhibition.gallery == "Yes")
        content+= "</a>";
      content+= "</div>";
      content+= "<div class='date'>" + exhibition.shortdate + "</div>";
      content+= "</div>";

      content+="</div>";
      $(content).appendTo("#past");
    }
    if (exhibition.gallery == "Yes" && exhibition.section == "Past") {
      var content = "<div id='gallery" + count + "' class='moreInfo' style='display: none;'><div class='row'>";
      content+= "<div class='pastInfo col col-sm-8 col-sm-push-4'>";
      content+= "<div class='title'>" + exhibition.exhibitiontitle + "</div>";
      content+= "<div class='date'>" + exhibition.date + "</div>";
      content+= exhibition.longdescription;
      content+= "<div id='pastgallery" + count + "' class='carousel slide' data-ride='carousel'>";
      content+= "<a class='left carousel-control' href='#pastgallery" + count + "' data-slide='prev'>Prev</a><a class='right carousel-control' href='#pastgallery" + count + "' data-slide='next'>Next</a>";
      content+= "<a href='#pastgallery" + count + "' data-slide='next'>";
      content+= "<div class='carousel-inner' data-title='" + exhibition.exhibitiontitle + "'></div>";
      content+= "</a>";
      content+= "</div>";
      content+= "</div>";
      content+= "<div class='pastLeft col col-sm-4 col-sm-pull-8'>";
      content+= "<img src='" + exhibition.imageurl + "'/><h4>List of Artists / Collaborators / Art Organizations:</h3>";
      content+= "<p>" + exhibition.listofartists + "</p>";
      content+= "</div>";
      content+= "</div></div>";
      $(content).appendTo("#pastGallery");


    }
  })
  $.each( tabletop.sheets("Galleries").all(), function(i, egallery) {
    var content2 = "<div class='item ";
    content2+= "'>";
    content2+= "<img src='" + egallery.imageurl + "'/>";
    if (egallery.description != '')
      content2+= "<div class='carousel-caption'>" + egallery.description + " ";  
    if (egallery.available === 'Yes')
      content2+= "";                      
    content2+= "</div>";
    $(content2).appendTo('.carousel-inner[ data-title="' + egallery.exhibition + '"]');
    $('.carousel-inner[ data-title="' + egallery.exhibition + '"] .item').first().addClass('active');
  });
  $('.showGallery').click(function(){
    $('.moreInfo').hide();
    var id = $(this).attr('href');
    $(id).show();
  });
  $('.loading').hide();
  $('.carousel').carousel({
    interval: false
  })
}
           
           

 

// Google Spreadsheet
var public_spreadsheet_url = 'https://docs.google.com/spreadsheet/pub?key=0AikF9fpgaspkdF9QNEVPYXpfZklfdjg5YTRrNHBwUmc&output=html';

Tabletop.init( { key: public_spreadsheet_url,
 callback: showInfo,
 wanted: [ "Exhibitions", "Galleries" ],
 proxy: 'https://s3.amazonaws.com/DNADATA',
 debug: false } );

