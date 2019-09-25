/* Vignette #1 for any instrument.
Vincent Giles, 2018
*/

let x = 40;
let y = 40;
let composer = "Vincent Giles, 2018";
let title = "Small Vignette #1";
function basic_staff() {
  var xStart = 40;
  var yStart = 60;
  var xEnd = xStart+920;
  var yEnd = yStart;
  var topLeft = width-40;
  // var Gap = 10;
  for (var i = 0; i < 5; i++) {
  line(xStart, yStart+(i*10), xEnd, yEnd+(i*10));
}
}

function composer_display() {
  fill(0);
  textSize(24);
  text(title, width/2, 150);
  textSize(20);
  text(composer, width/2+20, 165);
  textSize(12);
  var text_instr = "Instructions: Use any instrument, assume any clef; improvise gesturally/spatially by the indicated animation.";
  text(text_instr, width/3, 12);
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
  var r = random(200, 255);
  var g = random(100, 255);
  var b = random(150, 200);
  var a = random(100, 200);
  var diam = random(5, 30);
  var staff = basic_staff();
  var staffXStart = 40;
  var staffYStart = 60;
  var xRand = random(5, 50);
  var yRand = random(5, 40);
  var yChange = random(-1, 1);
  var xChange = random(-1, 1);
  var timing = int(random(1, 15));

}

function circle() {
  noStroke();
  fill(r, g, b, a);
  ellipse(x, y, diam, diam);
  stroke(0); // just to make sure it doesn't interfere with other functions
}

function sploosh() {
  var r = random(200, 255);
  var g = random(100, 255);
  var b = random(150, 200);
  var a = random(100, 200);
  var diam = random(5, 30);
  var staff = basic_staff();
  var staffXStart = 40;
  var staffYStart = 60;
  var xRand = random(5, 50);
  var yRand = random(5, 40);
  var yChange = random(-1, 1);
  var xChange = random(-1, 1);
  var f = 5;
  if (x < width-40) {
    x = x + xRand;
} else if (x > width-40) {
    x = 40;
    background(255);
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
}
