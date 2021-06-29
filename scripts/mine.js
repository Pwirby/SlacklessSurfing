class Mine extends Mob {
    /**
     * Make a new mine
     * @param {String} direction - The mine's direction
     * @param {Number} speed - The mine's speed 
     */
    constructor(direction, speed) {
        super(100, 100, direction, speed);
        this.y = height - this.height / 2;
        this.img = mine_png;
    }
}