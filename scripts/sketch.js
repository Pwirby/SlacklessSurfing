let waves = [];
let mines = [];
let seagulls = [];

let seaLevel = 100;
let score = 0;

let debug = false;

function setup() {
    createCanvas(windowWidth, windowHeight);
    noStroke();
    imageMode(CENTER);
    background_jpg = loadImage("images/background.jpg");
    seagull_png = loadImage("images/seagull.png");
    mine_png = loadImage("images/mine.png");
    surfer_png = loadImage("images/surfer.png");
    left_wave_png = loadImage("images/wave.png");

    player = new Surfer("YOU");
}

function draw() {
    if (waves.length < 5) {
        direction = Math.floor(random(2)) ? "left" : "right";
        waves.push(new Wave(direction, random(3, 5)));
    }
    if (mines.length < 3) {
        direction = Math.floor(random(2)) ? "left" : "right";
        mines.push(new Mine(direction, random(2, 3)));
    }
    if (seagulls.length < 2) {
        direction = Math.floor(random(2)) ? "left" : "right";
        seagulls.push(new Seagull(direction, random(3, 5)));
    }
    /* Set up background & game infos */
    image(background_jpg, width / 2, height / 2, width, height);
    fill(255, 255, 0);
    textAlign(LEFT);
    text(`Score: ${score}`, 10, 30);
    textAlign(RIGHT);
    text(`Waves: ${waves.length}`, width, 30);
    text(`Mines: ${mines.length}`, width, 50);
    text(`Seagulls: ${seagulls.length}`, width, 70);

    rectMode(CORNER);
    fill("#67daef");
    rect(0, height - seaLevel, width, seaLevel);

    rectMode(CENTER);
    /* Delete waves out of the screen and draw ones onscreen */
    waves = waves.filter(wave => !wave.outOfScreen());
    for (let wave of waves) {
        if (debug) wave.displayHitBox();
        wave.display();
        wave.move();
        player.ride(wave);
    }

    /* Delete mines out of the screen and draw ones onscreen */
    fill(255, 0, 0);
    mines = mines.filter(mines => !mines.outOfScreen());
    for (let mine of mines) {
        if (debug) mine.displayHitBox();
        mine.display();
        mine.move();
        if (player.collides(mine)) {
            loose("mine");
            return;
        }
    }

    /* Delete seagull out of the screen and draw ones onscreen */
    seagulls = seagulls.filter(seagull => !seagull.outOfScreen());
    for (let seagull of seagulls) {
        if (debug) seagull.displayHitBox();
        seagull.display();
        seagull.move();
        if (player.collides(seagull)) {
            loose("seagull");
            return;
        }
    }

    /* Surfer actions */
    player.display();
    player.move(keyCode);

    if (player.outOfScreen()) loose();
    else if (score >= 50000) win();
}

function keyPressed() {
    for (let wave of waves) {
        if (keyCode === UP_ARROW && player.collides(wave)) player.jump();
    }
}

loose = reason => {
    noLoop();
    background(0);
    fill(255, 0, 0);
    textAlign(CENTER)
    text("GAME OVER", width / 2, height / 2);
    text(`Score: ${score}`, width / 2, height - height / 2.5);
    text(`You died because of a ${reason}`, width / 2, height - height / 3);
}

win = () => {
    noLoop();
    background(255);
    fill(255, 255, 0);
    text("YOU WON !", width / 2, height / 2);
}