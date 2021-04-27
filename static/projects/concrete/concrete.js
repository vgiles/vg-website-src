// define all the sounds for individual loading




let rectPos1;
let rectPos2;
let rectSize1;
let rectSize2;

let rectangle = [];

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
let soundArray;

function preload() {
    soundFormats('mp3');
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
    soundArray = [sound0, sound1, sound2, sound3, sound4, sound5, sound6, sound7, sound8, sound9];
}

function setup() {
  createCanvas(720, 500);
  for (let i = 0; i < 10; i++) {
      let x = Math.floor(Math.random() * width);
      let y = Math.floor(Math.random() * height);
      let w = random(200);
      let h = random(200);
      let r = random(10, 50);
      let bop = new Fun(x, y, w, h);
      rectangle.push(bop);
  }
//   i = 0;
//   while (i < 10) {
//       rectangle[i] = new Fun();
//       rectangle[i].sound = soundArray[i];
//       i++;
//   }  
}

function draw() {
    background(230);
    for (i = 0; i < rectangle.length; i++) {
        // rectangle[i].move();
        rectangle[i].display();
    }
    // noLoop();
}

function mousePressed() {
    if (getAudioContext().state !== 'running') {
        getAudioContext().resume();
      }
    for (i = 0; i < rectangle.length; i++) {
        rectangle[i].clicked(mouseX, mouseY);
    }
    
}