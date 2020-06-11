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