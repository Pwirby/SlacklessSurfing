let acc = 7;
let gravity = 1.5;
let gain = 0;

class Surfer {
    /**
     * Makes the player
     * @param {String} name - The player's name
     */
    constructor(name) {
        this.name = name;
        this.dirction = "immobile";
        this.width = 400;
        this.height = 350;
        this.x = width / 2;
        this.y = height - this.height / 2;
        this.vx = 0;
        this.vy = 0;
    }

    display() {
        fill(0);
        image(surfer_png, this.x, this.y, this.width, this.height);
        text(this.name, this.x, this.y - this.height / 2);
    }

    jump() {
        this.vy = -20;
    }

    move(intent) {
        if (intent === LEFT_ARROW) {
            this.vx = -acc;
        } else if (intent === RIGHT_ARROW) {
            this.vx = acc;
        }
        this.x += this.vx;
        this.y += this.vy;
        this.vy += gravity;
        this.y = constrain(this.y, 0, height - this.height / 2)
    }

    /**
     * Return true if the player is out of the screen
     */
    outOfScreen() {
        return (
            this.x < (- this.width / 2) ||
            this.x > (width + this.width / 2) ||
            this.y < (- this.height / 2) ||
            this.y > (height + this.height / 2)
        );
    }

    collides(mob) {
        return (
            this.x + this.width / 3 > (mob.x - mob.width / 2) &&
            this.x - this.width / 3 < (mob.x + mob.width / 2) &&
            this.y + this.height / 4 > (mob.y - mob.height / 2) &&
            this.y - this.height / 4 < (mob.y + mob.height / 2)
        );
    }

    ride(mob) {
        if (this.collides(mob) && this.y < (height - this.height / 2)) {
            gain += 1;
            fill(255, 255, 0);
            text(`+${gain}`, this.x + this.width / 4, this.y - this.height / 2);
            score += gain;
            return true;
        } else {
            gain = 0;
            return false;
        }
    }
}