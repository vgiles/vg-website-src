let sounds = [];
let blorb;
let value;
let blorbs = [];
let totalBlorbs = 50;
function preload() {
    for (i = 1; i <= 10; i++) {
        sounds[i] = loadSound('audio/' + String(i) + '.mp3');
        // console.log('audio/' + String(i) + '.mp3');
    }
}


function setup() {
    createCanvas(720, 400);
    frameRate(25);
    let soundNum = 10;
    for (i = 0; i < totalBlorbs; i++) {
        let x = random(width);
        let y = random(height);
        let r = random(5, 15);
        let randSound = Math.ceil(Math.random() * 10);
        // console.log(randSound);
        let s = sounds[randSound];
        blorb = new Blorb(x, y, r, s);
        blorbs.push(blorb);
    }
}

function draw() {
    background(220);
    for (i = 0; i < totalBlorbs; i++)
    {
        blorbs[i].display();
    }
}


function mousePressed() {
    if (getAudioContext().state !== 'running') {
        getAudioContext().resume();
      }
}
function mouseMoved() {
    for (i = 0; i < totalBlorbs; i++) {
        blorbs[i].hover(mouseX, mouseY);
    }
    
}
// Constructor

class Blorb {
    constructor(x, y, r, s) {
        this.x = x;
        this.y = y;
        this.r = r;
        this.f = random(255);
        this.s = s;
    }

    display() {
        stroke(20);
        fill(this.f);
        ellipse(this.x, this.y, this.r * 2);
    }

    hover(px, py) {
        let randNum = random(0, 2);
        let d = dist(px, py, this.x, this.y);
        if (d < this.r)
        {
            this.f = random(255);
            this.r = this.r + random(-2, 2);
            this.x = this.x + random(-50, 50);
            this.y = this.y + random(-50, 50);
            this.s.setVolume(Math.random());
            if (this.x < width - width/2)
            {
                this.s.pan(random(0,1));
            } else {
                this.s.pan(random(0,-1));
            }
            if (this.y < height - height/2)
            {
                this.s.rate(random(0, 1));
            } else {
                this.s.rate(random(1, 8));
            }
            if (randNum > 1) {
                this.s.reverseBuffer();
            }
            this.s.play();
        }
    }
}
