// JavaScript Document
console.log('reading');

document.addEventListener("DOMContentLoaded", function(event) {
    console.log("DOM fully loaded and parsed");

    //capture the submit event
    document.f.onsubmit = processForm;

    //define process function
    function processForm() {

        //store user name in a variable
        var food = document.f.food.value;
        // alert('Hi ' + userName);

        //store userColor in a variable called userColor
        var pokemon = document.f.pokemon.value;

        //store userColor in a variable called userColor
        var sport = document.f.sport.value;


        //store userColor in a variable called userColor
        var car = document.f.car.value;

        //store userColor in a variable called userColor
        var song = document.f.song.value;


        // capture the my Msg element
        var myMsg = document.getElementById('myMsg');

        // calling inner HTML to concentrate a message with username and useroclor

        myMsg.innerHTML = "Have you ever heard of Nietzsche? I liken his work to " + food + ", which is also the fuel of the uncommonly brilliant Ayn Rand. She knew that feminism is a mere red herring for " + pokemon + ". Capitalism, on the other hand, is a natural process to weed out underlings that don't understand " + sport + ". Since we are in a post-racial " + car + ", there is no point in dividing the movement for " + song + " on earth.";


        //prevent page from reloading
        return false;

    }

});
