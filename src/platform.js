// export default class Platform { 
//     constructor(x, y, width, height, maxX, maxY, player) { 
//         this.width = width;
//         this.height = height;
//         // this.x = maxX - this.width - 40;
//         // this.y = maxY - this.height - 10;
//         this.x = x; // Left
//         this.y = y; // Top
//         this.right = this.x + this.width
//         this.bottom = this.y + this.height

//         this.columns = this.width / 25

//         this.draw = this.draw.bind(this)
//     }

//     draw(ctx) { 
//         let spot = this.x;

//         this.platformImg = new Image();
//         this.platformImg.src = "./assets/Tilemap.png";
//         this.platformImg.onload = () => {
//             for (let i = 0; i < this.columns; i++) { 
//                 ctx.drawImage(this.platformImg, 32, 8, 8, 8, spot, this.y, 25, this.height)
//                 spot += 25
//             }
//         }
//     }
// }

export default class Platform {
    constructor(spriteX, spriteY, spriteWidth, spriteHeight, gameX, gameY, platWidth, platHeight) {
        this.spriteX = spriteX;             // source x
        this.spriteY = spriteY;             // source y
        this.spriteWidth = spriteWidth;     // source width
        this.spriteHeight = spriteHeight;   // source height
        this.x = gameX;                     // target x / left
        this.y = gameY;                     // target y / top
        this.width = platWidth;             // target width
        this.height = platHeight;           // target height
        this.right = this.x + this.width    // target right side
        this.bottom = this.y + this.height  // target bottom 
    }
}