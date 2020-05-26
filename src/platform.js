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

        this.columns = this.width / 25

        console.log(this.x, this.right, this.y, this.bottom)

        this.draw = this.draw.bind(this)
    }

    draw(ctx) { 
        // ctx.fillStyle = "black";
        // // ctx.fillRect(this.x, this.y, this.width, this.height)
        // ctx.fillRect(this.x, this.y, this.width, this.height)
        
        let spot = this.x;

        this.platformImg = new Image();
        this.platformImg.src = "./assets/Tilemap.png";
        this.platformImg.onload = () => {
            for (let i = 0; i < this.columns; i++) { 
                ctx.drawImage(this.platformImg, 32, 8, 8, 8, spot, this.y, 25, this.height)
                spot += 25
            }
        }
    }
}