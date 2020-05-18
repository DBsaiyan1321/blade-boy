import Player from "./player";

export default class BladeBoy { 
    constructor(canvas) { 
        this.ctx = canvas.getContext("2d");
        this.dimensions = { width: canvas.width, height: canvas.height }
        this.lastTime = 0;


        this.drawBackground(this.ctx)
        this.player = new Player(this.ctx);
        this.gameLoop = this.gameLoop.bind(this);
        this.gameLoop()

        this.backgroundImg = new Image();
        this.backgroundImg.src = "../assets/background_glacial_mountains.png"; // Doesn't work rn
    }

    gameLoop(timeStamp) { 
        let deltaTime = timeStamp - this.lastTime
        this.lastTime = timeStamp

        this.ctx.clearRect(0, 0, this.dimensions.width, this.dimensions.height);
        this.drawBackground(this.ctx)
        this.player.loop()
        this.player.draw(this.ctx)

        requestAnimationFrame(this.gameLoop)
    }

    drawBackground(ctx) {
        ctx.fillStyle = "skyblue";
        ctx.fillRect(0, 0, this.dimensions.width, this.dimensions.height);
        // ctx.drawImage(this.backgroundImg, 0, 0, this.dimensions.width, this.dimensions.height) // Doesn't work rn
    }
}