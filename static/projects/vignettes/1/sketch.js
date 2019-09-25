/* Vignette #1 for any instrument.
Vincent Giles, 2018
*/

let x = 40;
let y = 40;
function basic_staff() {
  let xStart = 40;
  let yStart = 60;
  let xEnd = xStart+920;
  let yEnd = yStart;
  let topLeft = width-40;
  // let Gap = 10;
  for (let i = 0; i < 5; i++) {
    line(xStart, yStart+(i*10), xEnd, yEnd+(i*10));
  }
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
  frameRate(5);
  composer_display();
}

function draw() {
  sploosh();
}


// want to make this much more efficient.

function newMusic() {
  let r = random(200, 255);
  let g = random(100, 255);
  let b = random(150, 200);
  let a = random(100, 200);
  let diam = random(5, 30);
  let staff = basic_staff();
  let staffXStart = 40;
  let staffYStart = 60;
  let xRand = random(5, 50);
  let yRand = random(5, 40);
  let yChange = random(-1, 1);
  let xChange = random(-1, 1);
  let timing = int(random(1, 15));

}

function circle() {
  noStroke();
  fill(r, g, b, a);
  ellipse(x, y, diam, diam);
  stroke(0); // just to make sure it doesn't interfere with other functions
}

function sploosh() {
  let r = random(200, 255);
  let g = random(100, 255);
  let b = random(150, 200);
  let a = random(100, 200);
  let diam = random(5, 30);
  let staff = basic_staff();
  let staffXStart = 40;
  let staffYStart = 60;
  let xRand = random(5, 50);
  let yRand = random(5, 40);
  let yChange = random(-1, 1);
  let xChange = random(-1, 1);
  let f = 5;
  if (x < width-40) {
    x = x + xRand;
} else if (x > width-40) {
    x = 40;
    //background(255);
    stroke(255);
    basic_staff();
    noStroke();
    composer_display();
  }
  if (y > staffYStart) {
    y = staffYStart + yRand;
  } else {
    y = staffYStart + yRand*yChange;
  }
  fill(r, g, b, a);
  ellipse(x, y, diam, diam);
  noStroke();
  basic_staff();
  f = random(1, 15);
  frameRate(f);
  background(255);
}
