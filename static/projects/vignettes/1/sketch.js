/* Vignette #1 for any instrument.
Vincent Giles, 2018*/

let x = 40;
let xStart = 40;
let y = 60;
let yStart = 60;
function basic_staff() {
  stroke(0);
  let xEnd = xStart+920;
  let yEnd = yStart;
  let topLeft = width-40;
  for (let i = 0; i < 5; i++) {
    line(xStart, yStart+(i*10), xEnd, yEnd+(i*10));
  }
  noStroke();
}
function initialise() {
  x = 40;
  y = 60;
  background(255);
  basic_staff();
  composer_display();
  frameRate(5);
}
function composer_display() {
  let composerInfo = ["Vincent Giles, 2018", "Small Vignette #1", "Instructions: Use any instrument, assume any clef; improvise gesturally/spatially by the indicated animation."]
  fill(0);
  textSize(24);
  text(composerInfo[0], width/2, 150);
  textSize(20);
  text(composerInfo[1], width/2+20, 165);
  textSize(12);
  text(composerInfo[2], width/3, 12);
}
function setup() {
  createCanvas(1000, 200);
  background(255);
  initialise();
}
function draw() {
  newMusic();
}
function newMusic() {
  let r = random(200, 255);
  let g = random(100, 255);
  let b = random(150, 200);
  let a = random(100, 200);
  let diam = random(5, 30);
  let xRand = random(5, 50);
  let yRand = random(5, 40);
  let yChange = int(random(-1, 1));
  if (x < 960) {
    x = x + xRand;
    if (y <= 60) {
      y = 60 + yRand;
    } else {
      y = 60 + (yRand*yChange);
    }
    fill(r, g, b, a);
    ellipse(x, y, diam, diam);
    let f = int(random(1,15));
    frameRate(f);
  }
  else {
    initialise();
  }
}
