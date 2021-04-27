let border = 30;


class Fun {
    constructor(x, y, w, h) {
        this.x = x;
        this.y = y;
        this.width = w;
        this.height= h;
        this.alpha = random(255);
        // this.r = r;
        // this.sound = soundArray[random(soundArray.length)];
    }
    
    display() {
        rectMode(CENTER);
        var randR = Math.floor(Math.random() * 255);
        var randG = Math.floor(Math.random() * 255);
        var randB = Math.floor(Math.random() * 255);
        var randA = Math.floor(Math.random() * 255);
        var randRad = Math.floor(Math.random() * 255);
        // fill(randR, randG, randB, this.alpha);
        fill(this.alpha, 125);
        rect(this.x, this.y, this.width, this.height);
        // ellipse(this.x, this.y, this.r * 2);
    }

    move() {
        this.x = this.x + random(-5, 5);
        this.y = this.y + random(-5, 5);
      }

    clicked(px, py) {
        let d = dist(px, py, this.x, this.y);
        // let d2 = dist(this.x, this.y, this.width * 2, this.height * 2);
        // console.log(d);
        // console.log(d2);
        if (d < ???) {
            this.alpha = random(400);
        }
        // this.sound.play();
    }
}