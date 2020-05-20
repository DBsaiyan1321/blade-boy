export default class Platform { 
    constructor(maxX, maxY, player) { 
        this.width = 100;
        this.height = 125;
        // this.x = maxX - this.width - 40;
        // this.y = maxY - this.height - 10;
        this.x = 200; // Left
        this.y = 425; // Top
        this.right = this.x + this.width
        this.bottom = this.y + this.height
        // this.player = player;
        // this.collidedWithPlayer = false;

        console.log(this.x, this.right, this.y, this.bottom)

        this.draw = this.draw.bind(this)
        this.collidedWith = this.collidedWith.bind(this)
    }

    draw(ctx) { 
        ctx.fillStyle = "black";
        // ctx.fillRect(this.x, this.y, this.width, this.height)
        ctx.fillRect(this.x, this.y, this.width, this.height)
    }

    collidedWith(player) { 
                                // Top wall                                 // Left wall
        let playerDimensions = { xWall: Math.floor(player.x + player.width), yWall: Math.floor(player.y + player.height) }
        // console.log(playerDimensions)
        // console.log(Math.floor(player.x), Math.floor(player.y))
        // console.log(Math.floor(this.x + this.width), Math.floor(this.y + this.height))
        if (playerDimensions.xWall >= Math.floor(this.x + this.width)) this.collidedWithPlayer = true;
    }
}