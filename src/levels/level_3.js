import Platform from "../platform";

export default class Level3 {
    constructor(ctx) {
        this.rows = 20;
        this.cols = 36;
        this.tileSize = 25;
        this.tiles = [
            {x:0,y:0}, {x:-1,y:0}, {x:-1,y:0}, {x:-1,y:0}, {x:-1,y:0}, {x:-1,y:0}, {x:-1,y:0}, {x:-1,y:0}, {x:-1,y:0}, {x:-1,y:0}, {x:-1,y:0}, {x:-1,y:0}, {x:-1,y:0}, {x:-1,y:0}, {x:-1,y:0}, {x:-1,y:0}, {x:-1,y:0}, {x:-1,y:0}, {x:-1,y:0}, {x:-1,y:0}, {x:-1,y:0}, {x:-1,y:0}, {x:-1,y:0}, {x:-1,y:0}, {x:-1,y:0}, {x:-1,y:0}, {x:-1,y:0}, {x:-1,y:0}, {x:-1,y:0}, {x:-1,y:0}, {x:-1,y:0}, {x:-1,y:0}, {x:-1,y:0}, {x:-1,y:0}, {x:-1,y:0}, {x:-1,y:0},
            {x:0,y:0}, {x:-1,y:0}, {x:-1,y:0}, {x:-1,y:0}, {x:-1,y:0}, {x:-1,y:0}, {x:-1,y:0}, {x:-1,y:0}, {x:-1,y:0}, {x:-1,y:0}, {x:-1,y:0}, {x:-1,y:0}, {x:-1,y:0}, {x:-1,y:0}, {x:-1,y:0}, {x:-1,y:0}, {x:-1,y:0}, {x:-1,y:0}, {x:-1,y:0}, {x:-1,y:0}, {x:-1,y:0}, {x:-1,y:0}, {x:-1,y:0}, {x:-1,y:0}, {x:-1,y:0}, {x:-1,y:0}, {x:-1,y:0}, {x:-1,y:0}, {x:-1,y:0}, {x:-1,y:0}, {x:-1,y:0}, {x:-1,y:0}, {x:-1,y:0}, {x:-1,y:0}, {x:-1,y:0}, {x:-1,y:0},
            {x:-1,y:0}, {x:-1,y:0}, {x:-1,y:0}, {x:-1,y:0}, {x:-1,y:0}, {x:-1,y:0}, {x:-1,y:0}, {x:-1,y:0}, {x:-1,y:0}, {x:-1,y:0}, {x:-1,y:0}, {x:-1,y:0}, {x:-1,y:0}, {x:-1,y:0}, {x:-1,y:0}, {x:-1,y:0}, {x:-1,y:0}, {x:-1,y:0}, {x:-1,y:0}, {x:-1,y:0}, {x:-1,y:0}, {x:-1,y:0}, {x:-1,y:0}, {x:-1,y:0}, {x:-1,y:0}, {x:-1,y:0}, {x:-1,y:0}, {x:-1,y:0}, {x:-1,y:0}, {x:-1,y:0}, {x:-1,y:0}, {x:-1,y:0}, {x:-1,y:0}, {x:-1,y:0}, {x:-1,y:0}, {x:-1,y:0},
            {x:-1,y:0}, {x:-1,y:0}, {x:-1,y:0}, {x:-1,y:0}, {x:-1,y:0}, {x:-1,y:0}, {x:-1,y:0}, {x:-1,y:0}, {x:-1,y:0}, {x:-1,y:0}, {x:-1,y:0}, {x:-1,y:0}, {x:-1,y:0}, {x:-1,y:0}, {x:-1,y:0}, {x:-1,y:0}, {x:-1,y:0}, {x:-1,y:0}, {x:-1,y:0}, {x:-1,y:0}, {x:-1,y:0}, {x:-1,y:0}, {x:-1,y:0}, {x:-1,y:0}, {x:-1,y:0}, {x:-1,y:0}, {x:-1,y:0}, {x:-1,y:0}, {x:-1,y:0}, {x:-1,y:0}, {x:-1,y:0}, {x:-1,y:0}, {x:-1,y:0}, {x:-1,y:0}, {x:-1,y:0}, {x:-1,y:0},
            {x:-1,y:0}, {x:-1,y:0}, {x:-1,y:0}, {x:-1,y:0}, {x:0,y:0}, {x:-1,y:0}, {x:-1,y:0}, {x:-1,y:0}, {x:-1,y:0}, {x:-1,y:0}, {x:-1,y:0}, {x:-1,y:0}, {x:-1,y:0}, {x:-1,y:0}, {x:-1,y:0}, {x:-1,y:0}, {x:-1,y:0}, {x:-1,y:0}, {x:-1,y:0}, {x:-1,y:0}, {x:-1,y:0}, {x:-1,y:0}, {x:-1,y:0}, {x:-1,y:0}, {x:-1,y:0}, {x:-1,y:0}, {x:-1,y:0}, {x:-1,y:0}, {x:-1,y:0}, {x:-1,y:0}, {x:-1,y:0}, {x:-1,y:0}, {x:-1,y:0}, {x:-1,y:0}, {x:-1,y:0}, {x:-1,y:0},
            {x:-1,y:0}, {x:-1,y:0}, {x:-1,y:0}, {x:-1,y:0}, {x:-1,y:0}, {x:-1,y:0}, {x:-1,y:0}, {x:-1,y:0}, {x:-1,y:0}, {x:-1,y:0}, {x:-1,y:0}, {x:-1,y:0}, {x:-1,y:0}, {x:-1,y:0}, {x:-1,y:0}, {x:-1,y:0}, {x:-1,y:0}, {x:-1,y:0}, {x:-1,y:0}, {x:-1,y:0}, {x:-1,y:0}, {x:-1,y:0}, {x:-1,y:0}, {x:-1,y:0}, {x:-1,y:0}, {x:-1,y:0}, {x:-1,y:0}, {x:-1,y:0}, {x:-1,y:0}, {x:-1,y:0}, {x:-1,y:0}, {x:-1,y:0}, {x:-1,y:0}, {x:-1,y:0}, {x:-1,y:0}, {x:-1,y:0},
            {x:-1,y:0}, {x:-1,y:0}, {x:-1,y:0}, {x:-1,y:0}, {x:-1,y:0}, {x:-1,y:0}, {x:-1,y:0}, {x:-1,y:0}, {x:-1,y:0}, {x:-1,y:0}, {x:-1,y:0}, {x:-1,y:0}, {x:-1,y:0}, {x:-1,y:0}, {x:-1,y:0}, {x:-1,y:0}, {x:-1,y:0}, {x:-1,y:0}, {x:-1,y:0}, {x:-1,y:0}, {x:-1,y:0}, {x:-1,y:0}, {x:-1,y:0}, {x:-1,y:0}, {x:-1,y:0}, {x:-1,y:0}, {x:-1,y:0}, {x:-1,y:0}, {x:-1,y:0}, {x:-1,y:0}, {x:-1,y:0}, {x:-1,y:0}, {x:-1,y:0}, {x:-1,y:0}, {x:-1,y:0}, {x:-1,y:0},
            {x:-1,y:0}, {x:-1,y:0}, {x:-1,y:0}, {x:-1,y:0}, {x:-1,y:0}, {x:-1,y:0}, {x:-1,y:0}, {x:-1,y:0}, {x:-1,y:0}, {x:-1,y:0}, {x:-1,y:0}, {x:-1,y:0}, {x:-1,y:0}, {x:-1,y:0}, {x:-1,y:0}, {x:-1,y:0}, {x:-1,y:0}, {x:-1,y:0}, {x:-1,y:0}, {x:-1,y:0}, {x:-1,y:0}, {x:-1,y:0}, {x:-1,y:0}, {x:-1,y:0}, {x:-1,y:0}, {x:-1,y:0}, {x:-1,y:0}, {x:-1,y:0}, {x:-1,y:0}, {x:-1,y:0}, {x:-1,y:0}, {x:-1,y:0}, {x:-1,y:0}, {x:-1,y:0}, {x:-1,y:0}, {x:-1,y:0},
            {x:-1,y:0}, {x:-1,y:0}, {x:-1,y:0}, {x:-1,y:0}, {x:-1,y:0}, {x:-1,y:0}, {x:-1,y:0}, {x:-1,y:0}, {x:-1,y:0}, {x:-1,y:0}, {x:-1,y:0}, {x:-1,y:0}, {x:-1,y:0}, {x:-1,y:0}, {x:-1,y:0}, {x:-1,y:0}, {x:-1,y:0}, {x:-1,y:0}, {x:-1,y:0}, {x:-1,y:0}, {x:-1,y:0}, {x:-1,y:0}, {x:-1,y:0}, {x:-1,y:0}, {x:-1,y:0}, {x:-1,y:0}, {x:-1,y:0}, {x:-1,y:0}, {x:-1,y:0}, {x:-1,y:0}, {x:-1,y:0}, {x:-1,y:0}, {x:-1,y:0}, {x:-1,y:0}, {x:-1,y:0}, {x:-1,y:0},
            {x:-1,y:0}, {x:-1,y:0}, {x:-1,y:0}, {x:-1,y:0}, {x:-1,y:0}, {x:-1,y:0}, {x:-1,y:0}, {x:-1,y:0}, {x:-1,y:0}, {x:-1,y:0}, {x:-1,y:0}, {x:-1,y:0}, {x:-1,y:0}, {x:-1,y:0}, {x:-1,y:0}, {x:-1,y:0}, {x:-1,y:0}, {x:-1,y:0}, {x:-1,y:0}, {x:-1,y:0}, {x:-1,y:0}, {x:-1,y:0}, {x:-1,y:0}, {x:-1,y:0}, {x:-1,y:0}, {x:-1,y:0}, {x:-1,y:0}, {x:-1,y:0}, {x:-1,y:0}, {x:-1,y:0}, {x:-1,y:0}, {x:-1,y:0}, {x:-1,y:0}, {x:-1,y:0}, {x:-1,y:0}, {x:-1,y:0},
            {x:-1,y:0}, {x:-1,y:0}, {x:-1,y:0}, {x:-1,y:0}, {x:-1,y:0}, {x:-1,y:0}, {x:-1,y:0}, {x:-1,y:0}, {x:-1,y:0}, {x:-1,y:0}, {x:-1,y:0}, {x:-1,y:0}, {x:-1,y:0}, {x:-1,y:0}, {x:-1,y:0}, {x:-1,y:0}, {x:-1,y:0}, {x:-1,y:0}, {x:-1,y:0}, {x:-1,y:0}, {x:-1,y:0}, {x:-1,y:0}, {x:-1,y:0}, {x:-1,y:0}, {x:-1,y:0}, {x:-1,y:0}, {x:-1,y:0}, {x:-1,y:0}, {x:-1,y:0}, {x:-1,y:0}, {x:-1,y:0}, {x:-1,y:0}, {x:-1,y:0}, {x:-1,y:0}, {x:-1,y:0}, {x:-1,y:0},
            {x:-1,y:0}, {x:-1,y:0}, {x:-1,y:0}, {x:-1,y:0}, {x:-1,y:0}, {x:-1,y:0}, {x:-1,y:0}, {x:-1,y:0}, {x:-1,y:0}, {x:-1,y:0}, {x:-1,y:0}, {x:-1,y:0}, {x:-1,y:0}, {x:-1,y:0}, {x:-1,y:0}, {x:-1,y:0}, {x:-1,y:0}, {x:-1,y:0}, {x:-1,y:0}, {x:-1,y:0}, {x:-1,y:0}, {x:-1,y:0}, {x:-1,y:0}, {x:-1,y:0}, {x:-1,y:0}, {x:-1,y:0}, {x:-1,y:0}, {x:-1,y:0}, {x:-1,y:0}, {x:-1,y:0}, {x:-1,y:0}, {x:-1,y:0}, {x:-1,y:0}, {x:-1,y:0}, {x:-1,y:0}, {x:-1,y:0},
            {x:-1,y:0}, {x:-1,y:0}, {x:-1,y:0}, {x:-1,y:0}, {x:0,y:0}, {x:-1,y:0}, {x:-1,y:0}, {x:-1,y:0}, {x:-1,y:0}, {x:-1,y:0}, {x:-1,y:0}, {x:-1,y:0}, {x:-1,y:0}, {x:-1,y:0}, {x:-1,y:0}, {x:-1,y:0}, {x:-1,y:0}, {x:-1,y:0}, {x:-1,y:0}, {x:-1,y:0}, {x:-1,y:0}, {x:-1,y:0}, {x:-1,y:0}, {x:-1,y:0}, {x:-1,y:0}, {x:-1,y:0}, {x:-1,y:0}, {x:-1,y:0}, {x:-1,y:0}, {x:-1,y:0}, {x:-1,y:0}, {x:-1,y:0}, {x:-1,y:0}, {x:-1,y:0}, {x:-1,y:0}, {x:-1,y:0},
            {x:-1,y:0}, {x:-1,y:0}, {x:-1,y:0}, {x:-1,y:0}, {x:-1,y:0}, {x:-1,y:0}, {x:-1,y:0}, {x:-1,y:0}, {x:-1,y:0}, {x:-1,y:0}, {x:-1,y:0}, {x:-1,y:0}, {x:-1,y:0}, {x:-1,y:0}, {x:-1,y:0}, {x:-1,y:0}, {x:-1,y:0}, {x:-1,y:0}, {x:-1,y:0}, {x:-1,y:0}, {x:-1,y:0}, {x:-1,y:0}, {x:-1,y:0}, {x:-1,y:0}, {x:-1,y:0}, {x:-1,y:0}, {x:-1,y:0}, {x:-1,y:0}, {x:-1,y:0}, {x:-1,y:0}, {x:-1,y:0}, {x:-1,y:0}, {x:-1,y:0}, {x:-1,y:0}, {x:-1,y:0}, {x:-1,y:0},
            {x:-1,y:0}, {x:-1,y:0}, {x:-1,y:0}, {x:-1,y:0}, {x:-1,y:0}, {x:-1,y:0}, {x:-1,y:0}, {x:-1,y:0}, {x:-1,y:0}, {x:-1,y:0}, {x:-1,y:0}, {x:-1,y:0}, {x:-1,y:0}, {x:-1,y:0}, {x:-1,y:0}, {x:-1,y:0}, {x:-1,y:0}, {x:-1,y:0}, {x:-1,y:0}, {x:-1,y:0}, {x:-1,y:0}, {x:-1,y:0}, {x:-1,y:0}, {x:-1,y:0}, {x:-1,y:0}, {x:-1,y:0}, {x:-1,y:0}, {x:-1,y:0}, {x:-1,y:0}, {x:-1,y:0}, {x:-1,y:0}, {x:-1,y:0}, {x:-1,y:0}, {x:-1,y:0}, {x:-1,y:0}, {x:-1,y:0},
            {x:-1,y:0}, {x:-1,y:0}, {x:-1,y:0}, {x:-1,y:0}, {x:-1,y:0}, {x:-1,y:0}, {x:-1,y:0}, {x:-1,y:0}, {x:-1,y:0}, {x:-1,y:0}, {x:-1,y:0}, {x:-1,y:0}, {x:-1,y:0}, {x:-1,y:0}, {x:-1,y:0}, {x:-1,y:0}, {x:-1,y:0}, {x:-1,y:0}, {x:-1,y:0}, {x:-1,y:0}, {x:-1,y:0}, {x:-1,y:0}, {x:-1,y:0}, {x:-1,y:0}, {x:-1,y:0}, {x:-1,y:0}, {x:-1,y:0}, {x:-1,y:0}, {x:-1,y:0}, {x:-1,y:0}, {x:-1,y:0}, {x:-1,y:0}, {x:-1,y:0}, {x:-1,y:0}, {x:-1,y:0}, {x:-1,y:0},
            {x:-1,y:0}, {x:-1,y:0}, {x:-1,y:0}, {x:-1,y:0}, {x:-1,y:0}, {x:-1,y:0}, {x:-1,y:0}, {x:-1,y:0}, {x:-1,y:0}, {x:-1,y:0}, {x:-1,y:0}, {x:-1,y:0}, {x:-1,y:0}, {x:-1,y:0}, {x:-1,y:0}, {x:-1,y:0}, {x:-1,y:0}, {x:-1,y:0}, {x:-1,y:0}, {x:-1,y:0}, {x:-1,y:0}, {x:-1,y:0}, {x:-1,y:0}, {x:-1,y:0}, {x:-1,y:0}, {x:-1,y:0}, {x:-1,y:0}, {x:-1,y:0}, {x:-1,y:0}, {x:-1,y:0}, {x:-1,y:0}, {x:-1,y:0}, {x:-1,y:0}, {x:-1,y:0}, {x:-1,y:0}, {x:-1,y:0},
            {x:-1,y:0}, {x:-1,y:0}, {x:-1,y:0}, {x:-1,y:0}, {x:-1,y:0}, {x:-1,y:0}, {x:-1,y:0}, {x:-1,y:0}, {x:-1,y:0}, {x:-1,y:0}, {x:-1,y:0}, {x:-1,y:0}, {x:-1,y:0}, {x:-1,y:0}, {x:-1,y:0}, {x:-1,y:0}, {x:-1,y:0}, {x:-1,y:0}, {x:-1,y:0}, {x:-1,y:0}, {x:-1,y:0}, {x:-1,y:0}, {x:-1,y:0}, {x:-1,y:0}, {x:-1,y:0}, {x:-1,y:0}, {x:-1,y:0}, {x:-1,y:0}, {x:-1,y:0}, {x:-1,y:0}, {x:-1,y:0}, {x:-1,y:0}, {x:-1,y:0}, {x:-1,y:0}, {x:-1,y:0}, {x:-1,y:0},
            {x:-1,y:0}, {x:-1,y:0}, {x:-1,y:0}, {x:-1,y:0}, {x:-1,y:0}, {x:-1,y:0}, {x:-1,y:0}, {x:-1,y:0}, {x:-1,y:0}, {x:-1,y:0}, {x:-1,y:0}, {x:-1,y:0}, {x:-1,y:0}, {x:-1,y:0}, {x:-1,y:0}, {x:-1,y:0}, {x:-1,y:0}, {x:-1,y:0}, {x:-1,y:0}, {x:-1,y:0}, {x:-1,y:0}, {x:-1,y:0}, {x:-1,y:0}, {x:-1,y:0}, {x:-1,y:0}, {x:-1,y:0}, {x:-1,y:0}, {x:-1,y:0}, {x:-1,y:0}, {x:-1,y:0}, {x:-1,y:0}, {x:-1,y:0}, {x:-1,y:0}, {x:-1,y:0}, {x:-1,y:0}, {x:-1,y:0},
            {x:0,y:0}, {x:0,y:0}, {x:0,y:0}, {x:0,y:0}, {x:0,y:0}, {x:0,y:0}, {x:0,y:0}, {x:0,y:0}, {x:-1,y:0}, {x:-1,y:0}, {x:-1,y:0}, {x:-1,y:0}, {x:-1,y:0}, {x:-1,y:0}, {x:-1,y:0}, {x:-1,y:0}, {x:-1,y:0}, {x:-1,y:0}, {x:-1,y:0}, {x:-1,y:0}, {x:-1,y:0}, {x:-1,y:0}, {x:-1,y:0}, {x:-1,y:0}, {x:-1,y:0}, {x:-1,y:0}, {x:-1,y:0}, {x:-1,y:0}, {x:-1,y:0}, {x:-1,y:0}, {x:-1,y:0}, {x:-1,y:0}, {x:-1,y:0}, {x:-1,y:0}, {x:-1,y:0}, {x:-1,y:0},
        ];

        this.platforms = [];

        this.goal = { x: 775, y: 350, width: 20, height: 20 }

        this.goal_dimensions = {
            left: this.goal.x,
            right: this.goal.x + this.goal.width,
            top: this.goal.y,
            bottom: this.goal.y + this.goal.height
        }

        this.draw = this.draw.bind(this);
        this.getTile = this.getTile.bind(this);
        this.init = this.init.bind(this)

        this.init(ctx)
    }

    init(ctx) {
            for (let c = 0; c < this.cols; c++) {
                for (let r = 0; r < this.rows; r++) {
                    let tile = this.getTile(c, r);
                    if (tile.x !== -1) { // 0 => empty tile
                        this.platforms.push(new Platform(
                            tile.x, // source x
                            tile.y, // source y
                            8, // source width
                            8, // source height
                            c * this.tileSize, // target x
                            r * this.tileSize, // target y
                            this.tileSize, // target width
                            this.tileSize // target height
                        ));
                    }
                }
            }

    }

    draw(ctx) { // I don't like how this makes a new image every single time. In my index.js, I just need to load an image on there and assign it's id to something so I can grab it. Update: I tried this and it didn't work.
        // for (let i = 0; i < this.platforms.length; i++) {
        //     let platform = this.platforms[i]
        //     platform.draw(ctx)
        // }
        this.platformImg = new Image();
        this.platformImg.src = "./assets/Tilemap.png";
        this.platformImg.onload = () => {
            for (let i = 0; i < this.platforms.length; i++) { 
                let platform = this.platforms[i]
                ctx.drawImage(this.platformImg, platform.spriteX, platform.spriteY, platform.spriteWidth, platform.spriteHeight, platform.x, platform.y, platform.width, platform.height)
            }
        }
        ctx.fillStyle = "yellow"
        ctx.fillRect(this.goal.x, this.goal.y, this.goal.width, this.goal.height)
    }

    getTile(col, row) { 
        return this.tiles[row * this.cols + col] // The tiles are a 1D array, but it looks like a 2D array lol. 
    }
}