export default class Platform { 
    constructor(x, y, width, height, maxX, maxY, player) { 
        this.width = width;
        this.height = height;
        // this.x = maxX - this.width - 40;
        // this.y = maxY - this.height - 10;
        this.x = x; // Left
        this.y = y; // Top
        this.right = this.x + this.width
        this.bottom = this.y + this.height

        console.log(this.x, this.right, this.y, this.bottom)

        this.draw = this.draw.bind(this)
    }

    draw(ctx) { 
        // ctx.fillStyle = "black";
        // // ctx.fillRect(this.x, this.y, this.width, this.height)
        // ctx.fillRect(this.x, this.y, this.width, this.height)
        this.platformImg = new Image();
        this.platformImg.src = "../assets/Tilemap.png";
        this.platformImg.onload = () => {
            ctx.drawImage(this.platformImg, 0, 0, 8, 8, this.x, this.y, this.width, this.height)
        }
    }
}