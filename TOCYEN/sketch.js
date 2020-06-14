let inconsolata;
function preload() {
  inconsolata = loadFont('assets/8bitoperator_jve.ttf');
}
function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);
  textFont(inconsolata);
  textSize(width / 3);
  textAlign(CENTER, CENTER);
}
function draw() {
  background(0);
  let time = millis();
  text('this ain\'t it chief', -(time % 6000) + 3000, 0);
  
  rotateX(time / 1000);
  rotateZ(time / 1234);
  text('p5.js', 0, 0);
  rotateX(-time / 1000);
  rotateZ(-time / 1234);

}