import Platform from "../platform";

export default class Level1 { 
    constructor() { 
        // this.platforms = [
        //     // x, y, width, height
        //     new Platform(0, 475, 350, 25, this.height, this.width), new Platform(500, 475, 400, 25, this.height, this.width),

        //     new Platform(875, 400, 25, 25, this.height, this.width),

        //     new Platform(0, 300, 350, 25, this.height, this.width), new Platform(500, 300, 325, 25, this.height, this.width),

        //     new Platform(0, 225, 25, 25, this.height, this.width),

        //     new Platform(75, 125, 275, 25, this.height, this.width), new Platform(500, 125, 400, 25, this.height, this.width),
        // ];

        this.platforms = [
            // x, y, width, height
            new Platform(0, 475, 350, 25), new Platform(500, 475, 400, 25),

            new Platform(875, 400, 25, 25),

            new Platform(0, 300, 350, 25), new Platform(500, 300, 325, 25),

            new Platform(0, 225, 25, 25),

            new Platform(75, 125, 275, 25), new Platform(500, 125, 400, 25),
        ];

        this.goal = { x: 850, y: 90, width: 20, height: 20 }

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