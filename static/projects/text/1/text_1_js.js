// This code is taken from Allison Parrish with minor modifications by Vincent Giles
// Thanks, Allison. https://creative-coding.decontextualize.com/text-and-type/
var sourceText;
var words;
var loadedFile;
var n;

function preload() {
  loadedFile = loadStrings('zizek.txt');
}

function setup() {
  createCanvas(500, 500);
  noLoop();
}

function draw() {
  renderText();
}

function renderText() {
  background(220);
  textAlign(LEFT, TOP);
  var n = int(random(loadedFile.length - 1));
  var sourceText = loadedFile[n];
  var words = sourceText.split(" ");
  for (var i = 0; i < words.length; i++) {
    var random_times = noise(500);
    var wPoint = int(random_times*random(width));
    var hPoint = int(random_times*random(height));
    textSize(random(40));
    if (wPoint >= (0 + margin) && wPoint <= (width - margin)) {
      fill(random(255) - 100);
      var margin = textWidth(words[i]);
      text(words[i], wPoint, hPoint);
    } else if (wPoint > (width - margin)){
      fill(random(255) - 100);
      var margin = textWidth(words[i]);
      //textSize(random(40));
      text(words[i], wPoint - margin - 10, hPoint + 40);
    } else {
      fill(random(255) - 100);
      var margin = textWidth(words[i]);
      //textSize(random(40));
      text(words[i], wPoint + margin + 10, hPoint + 40);
    }
  }
}

function keyPressed() {
  if (keyCode == 32) {
    save('text.jpg');
  }
}

function mouseClicked() {
  renderText();
}

function touchEnded() {
  renderText();
}
