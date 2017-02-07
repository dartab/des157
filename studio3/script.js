// JavaScript Document

document.addEventListener("DOMContentLoaded", function(event) {
    console.log("DOM fully loaded and parsed");


    // ziggy id
    var ziggy = document.getElementById('ziggy');

    // hover over ziggy color
    ziggy.addEventListener('mouseover', function() {
        ziggy.style.opacity = 1;
        ziggy.src = 'images/ziggy_color.png';
        ziggy.style.cursor = "pointer";
    });

    ziggy.addEventListener('mouseout', function() {
        ziggy.style.opacity = 1;
        ziggy.src = 'images/ziggy_bw.png';
    });

    // click on ziggy for info box
    ziggy.addEventListener('click', function() {
        aboutziggy.style.display = "block";
        close.style.cursor = "pointer";
    });

    // ziggy info box that displays on click
    document.getElementById('aboutziggy');
    var close = document.getElementById('close');


    close.addEventListener('click', function() {
        aboutziggy.style.display = "none";

    });


    // ball id
    var ball = document.getElementById('ball');

    // hover over ball color
    ball.addEventListener('mouseover', function() {
        ball.style.opacity = 1;
        ball.src = 'images/ball_color.png';
        ball.style.cursor = "pointer";
    });

    ball.addEventListener('mouseout', function() {
        ball.style.opacity = 1;
        ball.src = 'images/ball_bw.png';
    });

    // click on ball for info box
    ball.addEventListener('click', function() {
        aboutball.style.display = "block";
        close1.style.cursor = "pointer";
    });

    // ball info box that displays on click
    document.getElementById('aboutball');
    var close1 = document.getElementById('close1');

    close1.addEventListener('click', function() {
    aboutball.style.display = "none";
    });


    // food id
    var food = document.getElementById('food');

    // hover over food for info box
    food.addEventListener('mouseover', function() {
        food.style.opacity = 1;
        food.src = 'images/food_color.png';
        food.style.cursor = "pointer";
    });

    food.addEventListener('mouseout', function() {
        food.style.opacity = 1;
        food.src = 'images/food_bw.png';
    });

    // click on food for info box
    food.addEventListener('click', function() {
        aboutfood.style.display = "block";
        close2.style.cursor = "pointer";
    });

    // food info box that displays on click
    document.getElementById('aboutfood');
    var close = document.getElementById('close2');

    close2.addEventListener('click', function() {
        aboutfood.style.display = "none";
    });


    // outside id
    var outside = document.getElementById('outside');

  // hover over outside for info box
    outside.addEventListener('mouseover', function() {
        outside.style.opacity = 1;
        outside.src = 'images/outside_color.png';
        outside.style.cursor = "pointer";
    });

    outside.addEventListener('mouseout', function() {
        outside.style.opacity = 1;
        outside.src = 'images/outside_bw.png';
    });

    // click on outside for info box
    outside.addEventListener('click', function() {
        aboutoutside.style.display = "block";
        close3.style.cursor = "pointer";
    });

    // outside info box that displays on click
    document.getElementById('aboutoutside');
    var close3 = document.getElementById('close3');

    close3.addEventListener('click', function() {
        aboutoutside.style.display = "none";
    });

    // picture id
    var picture = document.getElementById('picture');

  // hover over picture for info box
    picture.addEventListener('mouseover', function() {
        picture.style.opacity = 1;
        picture.src = 'images/pic_color.png';
        picture.style.cursor = "pointer";
    });

    picture.addEventListener('mouseout', function() {
        picture.style.opacity = 1;
        picture.src = 'images/pic_bw.png';
    });

    // click on picture for info box
    picture.addEventListener('click', function() {
        aboutpic.style.display = "block";
        close4.style.cursor = "pointer";
    });

    // pic info box that displays on click
    document.getElementById('aboutpic');
    var close4 = document.getElementById('close4');

    close4.addEventListener('click', function() {
        aboutpic.style.display = "none";
    });


});
