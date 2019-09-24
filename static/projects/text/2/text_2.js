// A project to create a generative 'score' for vocal performance from text.
// Vincent Giles, 2019
// Code borrowed from Allison Parish https://creative-coding.decontextualize.com/text-and-type/

// declare some global variables

var source;

// preload the files into an array of strings.
function preload() {
  source = loadStrings("sourceText.txt" );
  // console.log(source);
}

// setup the canvas
function setup() {
  createCanvas(windowWidth-30,windowHeight-30);
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
  //temp();
  renderText();
}

// render some text
function renderText() {
  background(235);
  textAlign(LEFT,TOP);
  var n = int(random(source.length -1));
  var phrases = source[n];
  var words = phrases.split(" ");
  textSize(16);
  for (var i = 0; i < source.length; i++) {
    var xPos = (50+int(random(width-rMargin)))-rMargin;
    var yPos = 50+i*70;
    var staffStartX = xPos - 10;
    var staffStartY = yPos - 33;
    var staffGap = 6;
    var rMargin = int(textWidth(words[i]));
    var staffEndX = staffStartX + rMargin + 20;
    var staffEndY = staffStartY;
    if (yPos > (height-16)) {
      var yPos = yPos - 6;
    }
    var fillFade = int(random(200));
    fill(fillFade);
    text(words[i], xPos, yPos);
    for (var p = 0; p < 5; p++) {
      stroke(fillFade);
      line(staffStartX,staffStartY+(p*staffGap),staffEndX,staffEndY+(p*staffGap));
      if (p == 4) {
        ellipseMode(CENTER);
        var noteHeadX = (staffStartX+rMargin);
        var noteHeadY = random((staffEndY+(p*staffGap))-(staffGap*5),staffEndY+(p*staffGap));
        ellipse(noteHeadX,noteHeadY,6,6);
      }
    }
  }
}

function mouseClicked() {// use mouseclick to regenerate to save refreshing
  shuffle(source, true);
  renderText();
}

function touchEnded() {// use touch-release to regenerate to save refreshing
  shuffle(source, true);
  renderText();
}
