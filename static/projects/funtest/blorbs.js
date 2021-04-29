let sound0;
let blorb;
function preload() {
    soundFormats('mp3');
    sound0 = loadSound('audio/000_Bottle');
}
function setup() {
    createCanvas(720, 400);
    let x = random(width);
    let y = random(height);
    let r = random(5, 15);
    blorb = new Blorb(x, y, r);
}

function draw() {
    background(220);
    blorb.display();
}


// Constructor

class Blorb {
    constructor(x, y, r) {
        this.x = x;
        this.y = y;
        this.r = r;
    }

    display() {
        stroke(0);
        fill(150);
        ellipse(this.x, this.y, this.r * 2);
    }
}
