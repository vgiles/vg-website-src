// A project to create a generative 'score' for vocal performance from text.
// Vincent Giles, 2019
// Code borrowed from Allison Parish https://creative-coding.decontextualize.com/text-and-type/

// declare some global variables

var staffPosX, staffPosY, readTextFile;

// preload the files into an array of strings.
function preload() {
  readTextFile = loadStrings('sourcetext.txt');
}

// setup the canvas
function setup() {
  createCanvas(windowWidth-50,windowHeight-50);
  noLoop();
}

// define a temporary structure as a placeholder
function temp() {
  textAlign(CENTER,CENTER);
  fill(9);
  text('Designing now...', width/2, height/2);
}

// define the primary drawing system
function draw() {
  background(220);
  temp();
}

// draw a blank staff onto which gestures can be placed
function blank_staff() {

}

// draw some dots

// render some text
