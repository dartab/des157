// JavaScript Document

document.addEventListener("DOMContentLoaded", function(event) {
    console.log("DOM fully loaded and parsed");

    // capture the img element by its id into a variable
    var heart=document.getElementById('heart');

    // add an eventListener for mouseover that changes the src of the
    // heart image to the image titled "love.png"
    heart.addEventListener('mouseover', function(){
      heart.src='images/love.png';
    });

    // add an eventListener for mouseout that changes the src of the
    // heart image back to "question.png"
    heart.addEventListener('mouseout', function(){
      heart.src='images/question.png';
    });

    // eventually add a preload array (wait for details in class)
    // then display random candy hearts on mouseover

    //create an array to hold images
    var imgs = ["images/bemine.png", "images/biteme.png", "images/love.png", "images/lovestinks.png", i"mages/puke.png", "images/question.png", "images/youandme.png"];

    // create an empty array to hold the images as objects
    var preload = [];

    // traverse the array for preloading images
    for(var i=0; i<imgs.length; i++){
      // create a new image at position i of the array
      preload[i] = new Image();

      //assign a source for each new image
      preload[i].src=imgs[i];
      console.log(preload[i]);
    }

});
