class Wave extends Mob {
    /**
     * Make a new wave
     * @param {String} direction - The wave's direction
     * @param {Number} speed - The wave's speed 
     */
    constructor(direction, speed) {
        super(width * 0.3, height * 0.422, direction, speed);
        this.y = height - this.height / 2 - seaLevel;
        this.img = left_wave_png;
    }
}