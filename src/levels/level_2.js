import Platform from "../platform";

export default class Level2 {
    constructor() {
        this.platforms = [
            // x, y, width, height
            new Platform(0, 475, 100, 25), 
            new Platform(175, 375, 100, 25),
            new Platform(350, 275, 100, 25),
            new Platform(525, 175, 100, 25), 
            new Platform(700, 75, 100, 25),
            new Platform(725, 95, 25, 405)
        ];

        this.goal = { x: 775, y: 350, width: 20, height: 20 }

        this.goal_dimensions = {
            left: this.goal.x,
            right: this.goal.x + this.goal.width,
            top: this.goal.y,
            bottom: this.goal.y + this.goal.height
        }

        this.draw = this.draw.bind(this);
    }

    draw(ctx) {
        ctx.fillStyle = "yellow"
        ctx.fillRect(this.goal.x, this.goal.y, this.goal.width, this.goal.height)
    }
}