class Mob {
    /**
     * Make a new object
     * @param {Number} width - The object's width
     * @param {Number} height - The object's height
     * @param {String} direction - The object's direction
     * @param {Number} speed - The object's speed
     */
    constructor(w, h, direction, speed) {
        direction = direction.toLowerCase();

        this.width = w;
        this.height = h;
        this.direction = direction;
        this.speed = speed;
        this.y;
        this.img;

        if (direction === "right") {
            this.x = -this.width / 2;
        } else if (direction === "left") {
            this.x = width + this.width / 2;
        } else {
            throw new Error(`${direction} is not a valid direction.`);
        }
    }

    display() {
        image(this.img, this.x, this.y, this.width, this.height);
    }

    displayHitBox() {
        rect(this.x, this.y, this.width, this.height);
    }

    move() {
        this.x += (this.direction === "right") ? this.speed : -this.speed;
    }

    /**
     * Return true if the object is out of the screen
     */
    outOfScreen() {
        return (this.x < (- this.width / 2) || this.x > (width + this.width / 2));
    }
}