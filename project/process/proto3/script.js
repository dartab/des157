// JavaScript Document

document.addEventListener("DOMContentLoaded", function(event) {
    console.log("DOM fully loaded and parsed");


    // alienhead id
    var alienhead = document.getElementById('alienhead');

    // hover over alienhead
    alienhead.addEventListener('mouseover', function() {
        alienhead.style.opacity = 1;
        alienhead.src = 'images/alien_head.png';
        alienhead.style.cursor = "pointer";
    });

    alienhead.addEventListener('mouseout', function() {
        alienhead.style.opacity = 1;
        alienhead.src = 'images/alien_head_01.png';
    });

    // click on alienhead for info box
    alienhead.addEventListener('click', function() {
        aboutalienhead.style.display = "block";
        close.style.cursor = "pointer";
    });

    // alienhead info box that displays on click
    document.getElementById('aboutalienhead');
    var close = document.getElementById('close');


    close.addEventListener('click', function() {
        aboutalienhead.style.display = "none";

      });






      // alienbody id
      var alienbody = document.getElementById('alienbody');

      // hover over alienbody
      alienbody.addEventListener('mouseover', function() {
          alienbody.style.opacity = 1;
          alienbody.src = 'images/alien_body.png';
          alienbody.style.cursor = "pointer";
      });

      alienbody.addEventListener('mouseout', function() {
          alienbody.style.opacity = 1;
          alienbody.src = 'images/alien_body_01.png';
      });

      // click on alienbody for info box
      alienbody.addEventListener('click', function() {
          aboutalienbody.style.display = "block";
          close1.style.cursor = "pointer";
      });

      // alienbody info box that displays on click
      document.getElementById('aboutalienbody');
      var close1 = document.getElementById('close1');


      close1.addEventListener('click', function() {
          aboutalienbody.style.display = "none";

        });


    });
