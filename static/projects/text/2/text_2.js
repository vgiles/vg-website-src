// A project to create a generative 'score' for vocal performance from text.
// Vincent Giles, 2019
// Code borrowed from Allison Parish https://creative-coding.decontextualize.com/text-and-type/

// declare some global variables

var staffPosX;
var staffPosY;
var source;

// preload the files into an array of strings.
function preload() {
  source = loadStrings("sourceText.txt" );
  // console.log(source);
}

// setup the canvas
function setup() {
  createCanvas(windowWidth-50,windowHeight-50);
  noLoop();
}

// define a temporary structure as a placeholder
// function temp() {
//   textAlign(CENTER,CENTER);
//   fill(9);
//   text('Designing now...', width/2, height/2);
// }

// define the primary drawing system
function draw() {
  background(220);
  //temp();
  renderText();
}

// draw a blank staff onto which gestures can be placed
function blank_staff() {

}

// draw some dots

// render some text
function renderText() {
  textAlign(LEFT,TOP);
  var n = int(random(source.length -1));
  var phrases = source[n];
  var words = phrases.split(" ");
  textSize(16);
  for (var i = 0; i < source.length; i++) {
    var rMargin = int(textWidth(words[i]));
    fill(int(random(100)));
    text(words[i], (50+int(random(width-rMargin)))-rMargin, 50+i*70);
  }
}
