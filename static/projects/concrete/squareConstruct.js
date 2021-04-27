let border = 30;


class Fun {
    constructor(x, y, w, h) {
        this.x = x;
        this.y = y;
        this.width = w;
        this.height= h;
        // this.size = 100;
        // this.sound = soundArray[random(soundArray.length)];
    }
    
    display() {
        rectMode(CENTER);
        var randR = Math.floor(Math.random() * 255);
        var randG = Math.floor(Math.random() * 255);
        var randB = Math.floor(Math.random() * 255);
        var randA = Math.floor(Math.random() * 255);
        var randRad = Math.floor(Math.random() * 255);
        fill(randR, randG, randB, randA);
        rect(this.x, this.y, random(200), random(200), randRad);
    }

    move() {
        this.x = this.x + random(width-width, width);
        this.y = this.y + random(height-height, height);
      }

    clicked() {
        // if (getAudioContext().state !== 'running') {
        //     getAudioContext().resume();
        //   }
        this.sound.play();
    }
}