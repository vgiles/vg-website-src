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

function preload() {
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
  createCanvas(width, height);
  background(200);
  //text('tap here to play', 10, 20);
  soundArray = [sound0, sound1, sound2, sound3, sound4, sound5, sound6, sound7, sound8, sound9];
}

function canvasPressed() {
  arrayLen = soundArray.length; 
  soundArray[Math.floor(Math.random() * arrayLen)].play();
}