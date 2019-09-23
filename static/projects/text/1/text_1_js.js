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
    textSize(random(40));
    var random_times = noise(500);
    var margin = int(textWidth(words[i]));
    console.log(words[i], margin);
    var wPoint = int(random_times*random(width));
    var hPoint = int(random_times*random(height));
    // this logic works well, but does not stop the bleeding from the edges
    if (wPoint >= (0 + margin) && wPoint <= (width - margin)) {
      fill(random(255) - 100);
      text(words[i], wPoint + 20, hPoint + 40);
    } else if ((wPoint + margin) >= (width - margin)) {
      fill(random(255) - 100);
      text(words[i], (wPoint - margin) - 40, hPoint + 40);
    } else if (wPoint <= (0 + margin)) {
      fill(random(255) - 100);
      text(words[i], 50 + (wPoint + margin) + 40, hPoint + 40);
    } else {
      fill(random(255) - 100);
      text(words[i], wPoint + margin, hPoint + 40);
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
