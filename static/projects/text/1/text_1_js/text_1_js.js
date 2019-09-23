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
  background(255);
  textAlign(CENTER, CENTER);
  var n = int(random(loadedFile.length - 1));
  print(n);
  var sourceText = loadedFile[n];
  print(sourceText);
  var words = sourceText.split(" ");
  print(words);
  for (var i = 0; i < words.length; i++) {
    var random_times = noise(500);
    var margin = textWidth(words[i]);
    var wPoint = random_times*random(width);
    var hPoint = random_times*random(height);
    if (wPoint > (0 + margin)) {
      fill(random(255) - 100);
      textSize(random(40));
      text(words[i], wPoint, hPoint);
    } else { 
      fill(random(255) - 100);
      textSize(random(40));
      text(words[i], wPoint + margin, hPoint);
    }
  }
}

function keyPressed() {
  if (keyCode == 32) {
    save('text.jpg');
  }
}
