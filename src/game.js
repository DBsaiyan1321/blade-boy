import Player from "./player";
import Platform from "./platform";

export default class BladeBoy { 
    constructor(canvas) { 
        this.ctx = canvas.getContext("2d");
        this.dimensions = { width: canvas.width, height: canvas.height }
        this.lastTime = 0;
        this.height = canvas.height
        this.width = canvas.width
        
        this.player = new Player(this.height, this.width);
        this.platform = new Platform(this.height, this.width);
        this.gameLoop = this.gameLoop.bind(this);
        this.gameLoop()

        this.backgroundImg = new Image(); 
        this.backgroundImg.src = "../assets/background_glacial_mountains.png";

        this.backgroundImg.onload = () => {
            this.ctx.drawImage(this.backgroundImg, 0, 0, this.dimensions.width, this.dimensions.height);
            this.ctx.beginPath();
        }
    }

    gameLoop(timeStamp) { 
        let deltaTime = timeStamp - this.lastTime
        this.lastTime = timeStamp

        this.ctx.clearRect(0, 0, this.dimensions.width, this.dimensions.height);
        this.drawBackground(this.ctx)
        this.player.loop()
        this.player.draw(this.ctx)
        this.platform.draw(this.ctx)

        requestAnimationFrame(this.gameLoop)
    }

    drawBackground(ctx) {
        ctx.fillStyle = "skyblue";
        ctx.fillRect(0, 0, this.dimensions.width, this.dimensions.height);
        // ctx.drawImage(this.backgroundImg, 0, 0, this.dimensions.width, this.dimensions.height) // Doesn't work rn
    }
}