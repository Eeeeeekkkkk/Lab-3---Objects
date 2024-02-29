let emojis = [];
let userControlledEmoji;

function setup() {
    createCanvas(800, 400);
    
    
    for (let i = 0; i < 5; i++) {
        emojis.push(new Emoji(random(width), random(height), random(1, 3)));
    }

    
    userControlledEmoji = emojis[0];
}

function draw() {
    background(255);

    
    for (let emoji of emojis) {
        emoji.move();
        emoji.display();
    }
}

function mousePressed() {
    
    userControlledEmoji.changeState();
}

class Emoji {
    constructor(x, y, speed) {
        this.x = x;
        this.y = y;
        this.speed = speed;
        this.state = '😊'; 
    }

    move() {
        
        this.x = (this.x + this.speed) % width;
        this.y = (this.y + this.speed) % height;
    }

    display() {
        textSize(24);
        fill(random(255), random(255), random(255));
        text(this.state, this.x, this.y);
    }

    changeState() {
        
        this.state = random(['😄', '😍', '🥳', '😎', '🤓']);
    }
}
