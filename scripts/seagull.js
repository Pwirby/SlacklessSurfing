class Seagull extends Mob {
    /**
     * Make a new seagull
     * @param {String} direction - The seagull's direction
     * @param {Number} speed - The seagull's speed 
     */
    constructor(direction, speed) {
        super(200, 200, direction, speed);
        this.y = this.height / 2;
        this.img = seagull_png;
    }
}