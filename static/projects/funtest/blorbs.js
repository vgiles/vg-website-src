let sound0;
let blorb;
let value;
let blorbs = [];
function preload() {
    soundFormats('mp3');
    sound0 = loadSound('audio/000_Bottle.mp3');
}


function setup() {
    createCanvas(720, 400);
    frameRate(25);
    for (i = 0; i < 50; i++) {
        let x = random(width);
        let y = random(height);
        let r = random(5, 15);
        let s = sound0;
        blorb = new Blorb(x, y, r, s);
        blorbs.push(blorb);
    }
}

function draw() {
    background(220);
    for (i = 0; i < blorbs.length; i++)
    {
        blorbs[i].display();
    }
}

function mouseMoved() {
    for (i = 0; i < blorbs.length; i++) {
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
        let d = dist(px, py, this.x, this.y);
        if (d < this.r)
        {
            this.f = random(255);
            this.r = this.r + random(-2, 2);
            this.x = this.x + random(-50, 50);
            this.y = this.y + random(-50, 50);
            this.s.play();
        }
    }
}
