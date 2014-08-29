


    function toggleVisibility(selectedTab) {
        
         var content = document.getElementsByClassName('content');
         
         for(var i=0; i<content.length; i++) {
              if(content[i].id == selectedTab) {
                    content[i].style.display = 'block';
              } else {
                    content[i].style.display = 'none';
              }
         }
    
    }
