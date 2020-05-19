export default class Platform { 
    constructor(maxX, maxY) { 
        this.width = 100;
        this.height = 25;
        this.x = maxX - this.width - 40;
        this.y = maxY - this.height - 10;

        this.draw = this.draw.bind(this)
    }

    draw(ctx) { 
        ctx.fillStyle = "black";
        // ctx.fillRect(this.x, this.y, this.width, this.height)
        ctx.fillRect(200, 400, this.width, this.height)
    }
}