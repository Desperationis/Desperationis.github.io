/*
  sketch.js
  
  The main file of the program. Runs everything.
*/

// Declare a variable limited to block scope.
let fps = 60;
let font;
let sceneManager;

function preload() {
  // Load font from resources before setup.
  font = loadFont('assets/8bitoperator_jve.ttf');
}

function setup() {
  // Create and setup window.
  createCanvas(windowHeight, windowHeight, WEBGL);
  
  // Setup font and text origin.
  textFont(font);
  textAlign(CENTER, CENTER);
  
  // Initialize the static constructors
  Scaler.constructor();
  Aligner.constructor();
  
  // Load scenes.
  SceneManager.constructor();
  SceneManager.AddScene(new Menu());
  SceneManager.AddScene(new Subjects());
}

function draw() {
  // Change background color (also clears canvas)
  background(0);
  
  // Draw current scene
  SceneManager.Render();
  
  // FPS counter
  fps = lerp(fps, frameRate(), 0.05);
  Scaler.TextSize(5);
  Aligner.AlignMode(enumPositions.BOTTOMRIGHT);
  Aligner.Text(str(round(fps)), createVector(-50, -50));
}




