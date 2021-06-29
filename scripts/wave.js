class Wave extends Mob {
    /**
     * Make a new wave
     * @param {String} direction - The wave's direction
     * @param {Number} speed - The wave's speed 
     */
    constructor(direction, speed) {
        super(463, 300, direction, speed);
        this.y = height - this.height / 2 - seaLevel;
        this.img = left_wave_png;
    }
}