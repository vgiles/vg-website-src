// define all the sounds for individual loading
let sound0;
let sound1;
let sound2;
let sound3;
let sound4;
let sound5;
let sound6;
let sound7;
let sound9;
let sound8;
let arrayLen; // define length variable (possibly redundant if doing in-line)

// define array variable
let soundArray;
let border = 30;

let rectPos1;
let rectPos2;
let rectSize1;
let rectSize2;

let rectangle = [];

function loadAudio() {
    soundFormats('ogg', 'mp3');
    sound0 = loadSound('assets/audio/Water');
    sound1 = loadSound('assets/audio/Watercleaning');
    sound2 = loadSound('assets/audio/Switch');
    sound3 = loadSound('assets/audio/Saltrustle');
    sound4 = loadSound('assets/audio/Paperrustling');
    sound5 = loadSound('assets/audio/Panhit');
    sound6 = loadSound('assets/audio/Hanger');
    sound7 = loadSound('assets/audio/Chairdrop');
    sound8 = loadSound('assets/audio/001_Bowl');
    sound9 = loadSound('assets/audio/000_Bottle');
}

function setup() {
  createCanvas(720, 500, WEBGL);
}

function draw() {
    background(250, 200, 150);
    loadAudio();
    // getAudioContext().resume()
    soundArray = [sound0, sound1, sound2, sound3, sound4, sound5, sound6, sound7, sound8, sound9];
    var i = 0;
    while (i < 10) {
        drawSquare();
        i++;
        rectangle[i] = [rectPos1, rectPos2, rectSize1, rectSize2];
        // alert(rectangle[i]);
    }
    noLoop();
}

// function canvasPressed() {
//  AudioContext.resume();
// }

function mousePressed() {
    if (getAudioContext().state !== 'running') {
        getAudioContext().resume();
      }
    for (var i = 0; i < 10; i++) {
        var d = dist(mouseX, mouseY, rectangle[i][0]/2, rectangle[i][1]/2);
        if (d < rectangle[i][2] || d < rectangle[i][3]) {
            arrayLen = soundArray.length; 
            soundArray[Math.floor(Math.random() * arrayLen)].play();
        }
    }
}

function drawSquare() {
    rectMode(CENTER);
    var pos1 = Math.floor(Math.random() * width/2 - width/4) + border;
    var pos2 = Math.floor(Math.random() * height/2 - width/4) + border;
    var rectWidth = Math.floor(Math.random() * 200);
    var rectHeight = Math.floor(Math.random() * 200);
    var randR = Math.floor(Math.random() * 255);
    var randG = Math.floor(Math.random() * 255);
    var randB = Math.floor(Math.random() * 255);
    var randA = Math.floor(Math.random() * 255);
    fill(randR, randG, randB, randA);
    rect(pos1, pos2, rectWidth, rectHeight);
    rectPos1 = pos1;
    rectPos2 = pos2;
    rectSize1 = rectWidth;
    rectSize2 = rectHeight;
}

// function touchStarted() {

//   }