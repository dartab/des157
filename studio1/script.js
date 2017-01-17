// p5 file

// open the console window of any browser to see console.log() messages,
// like print() messages in Processing
console.log("this is a js comment");

function setup() {
  var myCanvas=createCanvas(800, 250);
  myCanvas.parent('mySketch')

}

function draw() {
  background(255);
  stroke(255);
  strokeWeight(10);

  // Depending on the mouse location, a different rectangle with different associated pattern function is displayed

  // Row One
  if (mouseX < 200 && mouseY < 125) {
    fill(203, 51, 51);
    rect(0, 0, 200, 125);
    horizontalLines();
  } else if (mouseX < 400 && mouseY < 125) {
    fill(247,188,60);
    rect(200, 0, 200, 125);
    dots();
  } else if (mouseX < 600 && mouseY < 125) {
    fill(247,242,60);
    rect(400, 0, 200, 125);
    diagonals();
  } else if (mouseX < 800 && mouseY < 125) {
    fill(135,222,65);
    rect(600, 0, 200, 125);
    verticalLines();


  // Row Two
  } else if (mouseX < 200 && mouseY < 250) {
    fill(65,222,163);
    rect(0, 125, 200, 125);
    verticalLines();
  } else if (mouseX < 400 && mouseY < 250) {
    fill(65,189,222);
    rect(200, 125, 200, 125);
    horizontalLines();
  } else if (mouseX < 600 && mouseY < 250) {
    fill(46,128,227);
    rect(400, 125, 200, 125);
    dots();
  } else if (mouseX < 800 && mouseY < 250) {
    fill(46,74,227);
    rect(600, 125, 200, 125);
    diagonals();}
}


// Vertical Lines Function
function verticalLines(){
  for (var x = 5; x <= 800; x += 26) {
    line(x, 0, x, 1024);
  }
}


// Horizontal Lines Function
function horizontalLines(){
  for (var y = 0; y <= 250; y += 24) {
    line(0, y, 1024, y);
  }
}


// Dots Function
function dots(){
  for (var y = 17; y <= 250; y += 22) {
    for (var x = 10; x <= 800; x += 22) {
    point(x, y);
    }
  }
}

// Diagonals Function
function diagonals(){
  for (var y = 17; y <= 250; y += 22) {
    for (var x = 10; x <= 800; x += 22) {
    line(x, y, x-10, y-10);
    }
  }
}
