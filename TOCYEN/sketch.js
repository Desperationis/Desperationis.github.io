/*
  sketch.js
  
  The main file of the program. Runs everything.
*/

// Declare a variable limited to block scope.
let font;

function preload() {
  // Load font from resources before setup.
  font = loadFont('assets/8bitoperator_jve.ttf');
}

function setup() {
  // Create and setup window.
  createCanvas(windowWidth, windowHeight, WEBGL);
  
  // Setup font and text origin.
  textFont(font);
  textAlign(CENTER, CENTER);
}

function draw() {
  // Change background color (also clears canvas)
  background(0);
  
  AlignMode(enumPositions.TOP);
  TextSize(18);
  AlignedText("TOCYEN", 0, 100);
  
  TextSize(3);
  AlignedText("The Only Calculator You'll Ever Need!", 0, 210);
}