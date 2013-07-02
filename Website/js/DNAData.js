

function showInfo(data, tabletop) {
  $.each( tabletop.sheets("Artists").all(), function(i, artists) {
    var cat_li = $("<div class='artistbio " + artists.classname + " hide'>")
    cat_li.append("<h1>" + artists.fullname + "</h1>");
    cat_li.append("<p>" + artists.description + "</p>");
    cat_li.append("</div>");
    cat_li.appendTo("#corner-stamp"); 
  })

  $.each( tabletop.sheets("Art").all(), function(i, art) {
    var cat_li = $("<article class='entry " + art.classname + "'>")
    cat_li.append("<a data-rel='prettyPhoto' href='img/gallery/" + art.imageurl + "'>");
    cat_li.append("<img src='img/gallery/" + art.imageurl + "' alt='" + art.title + "'>");
    cat_li.append("</a>");
    cat_li.append("</article>");
    cat_li.appendTo("#dna-Gallery"); 
  })
  
  $.each( tabletop.sheets("Art").all(), function(i, art) {
    var cat_li = $('<li><h4>' + art.artist + '</h4></li>')
    cat_li.append("<p>" + art.firstname + "</p>");
    cat_li.append("<p>" + art.lastname + "</p>");
    cat_li.append("<p>" + art.classname + "</p>");
    cat_li.append("<p>" + art.title + "</p>");
    cat_li.append("<p><img width='48' src='img/Gallery/" + art.imageurl + "'/></p>");
    cat_li.append("<p>" + art.available + "</p>");
    cat_li.append("<p>" + art.price + "</p>");
    cat_li.append("<p>" + art.date + "</p>");
    cat_li.append("<p>" + art.description + "</p>");
    cat_li.appendTo("#art");
  })

  $.each( tabletop.sheets("Artists").all(), function(i, artist) {
  var cat_li = $('<li><h4>' + artist.fullname + '</h4></li>')
    cat_li.append("<p>" + artist.firstname + "</p>");
    cat_li.append("<p>" + artist.lastname + "</p>");
    cat_li.append("<p>" + artist.classname + "</p>");
    cat_li.append("<p>" + artist.description + "</p>");
    cat_li.append("<p>" + artist.location + "</p>");
    cat_li.append("<p>" + artist.websiteurl + "</p>");
    cat_li.append("<p>" + artist.facebookurl + "</p>");
    cat_li.append("<p>" + artist.twitterhandle + "</p>");
    cat_li.append("<p>" + artist.youtubeusername + "</p>");
    cat_li.appendTo("#artistslisting");
  })

  $("#table_info").text("We found the tables " + tabletop.model_names.join(", "));

  $.each( tabletop.sheets(), function(i, sheet) {
   $("#table_info").append("<p>" + sheet.name + " has " + sheet.column_names.join(", ") + "</p>");
  });

}


document.write("The published spreadsheet is located at <a target='_new' href='" + public_spreadsheet_url + "'>" + public_spreadsheet_url + "</a>");    