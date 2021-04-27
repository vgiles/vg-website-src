// define all the sounds for individual loading

let border = 30;



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
      let s = soundArray[i];
      let bop = new Bork(x, y, w, h, s);
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
        rectangle[i].move();
    }
    // noLoop();
}

function mousePressed() {
    if (getAudioContext().state !== 'running') {
        getAudioContext().resume();
      }
    for (i = 0; i < rectangle.length; i++) {
        rectangle[i].clicked(mouseX, mouseY, mouseY);
    }
    
}



// Constructors and such

class Bork {
    constructor(x, y, w, h, s) {
        this.x = x;
        this.y = y;
        this.width = w;
        this.height= h;
        this.alpha = random(255);
        this.randR = random(255);
        this.randG = random(255);
        this.randB = random(255);
        this.sound = s;
        // this.r = r;
        // this.sound = soundArray[random(soundArray.length)];
    }
    
    display() {
        rectMode(CENTER);
        // var randR = 220;
        // var randG = 200);
        // var randB = Math.floor(Math.random() * 255);
        // var randA = Math.floor(Math.random() * 255);
        var randRad = Math.floor(Math.random() * 255);
        // fill(randR, randG, randB, this.alpha);
        fill(this.randR, this.randG, this.randB, this.alpha);
        rect(this.x, this.y, this.width, this.height);
        // ellipse(this.x, this.y, this.r * 2);
    }

    move() {
        this.x = this.x + random(-5, 5);
        this.y = this.y + random(-5, 5);
      }

    clicked(px, py, sp) {
        let d = dist(px, py, this.x, this.y);
        let playbackRate = map(mouseY, 0.1, height, 2, 0);
        playbackRate = constrain(playbackRate, 0.01, 4);
        // let d2 = dist(this.x, this.y, this.width * 2, this.height * 2);
        // console.log(d);
        // console.log(d2);
        if (d < this.width && d < this.height) {
            this.alpha = random(255);
            this.randR = random(255);
            this.randG = random(255);
            this.randB = random(255);
            this.sound.play();
            this.sound.rate(playbackRate);
        }
        // this.sound.play();
    }
}