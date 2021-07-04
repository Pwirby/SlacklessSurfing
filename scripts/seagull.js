class Seagull extends Mob {
    /**
     * Make a new seagull
     * @param {String} direction - The seagull's direction
     * @param {Number} speed - The seagull's speed 
     */
    constructor(direction, speed) {
        super(height * 0.28, height * 0.28, direction, speed);
        this.y = this.height / 2;
        this.img = seagull_png;
    }
}