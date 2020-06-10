import Player from "./player";
import Level0 from "./levels/level_0"
import Level1 from "./levels/level_1"
import Level2 from "./levels/level_2"
import Level3 from "./levels/level_3"

export default class BladeBoy { 
    constructor(canvas, sound, muteButton, platformImg) { 
        this.ctx = canvas.getContext("2d");
        this.dimensions = { width: canvas.width, height: canvas.height }
        this.lastTime = 0;
        this.height = canvas.height
        this.width = canvas.width

        this.muteButton = muteButton;
        this.sound = sound;
        this.soundFlag = false;
        this.muteButton.addEventListener("click", () => { 
            this.musicHandler()
        })
        
        // this.levels = [new Level1(), new Level2(), new Level3()];
        this.levels = [new Level0(this.ctx), new Level3(this.ctx)];
        this.currentLevel = 0
        // this.platforms = this.levels[this.currentLevel].platforms
        this.player = new Player(this.height, this.width, this.levels[this.currentLevel], this.levels[this.currentLevel].goal_dimensions, this.ctx);

        this.gameLoop = this.gameLoop.bind(this);

        this.backgroundImg = new Image();
        this.backgroundImg.src = "./assets/background_glacial_mountains.png";
        this.backgroundImg.onload = () => {
            this.gameLoop()
        }
    }

    gameLoop(timeStamp) { 
        let deltaTime = timeStamp - this.lastTime
        this.lastTime = timeStamp

        // this.ctx.clearRect(0, 0, this.dimensions.width, this.dimensions.height); // For some reason this isn't needed
        this.drawBackground(this.ctx)
        this.player.loop(this.ctx)
        
        if (this.player.collidedWith(this.levels[this.currentLevel], this.levels[this.currentLevel].goal_dimensions) === true) { // Whenever I'm on the goal, it returns undefined for some reason 
            console.log("Next Level")
            this.currentLevel++
            this.player.x = 20;
            this.player.y = this.height - 90;
        }
        // console.log(this.player.collidedWith(this.levels[this.currentLevel], this.levels[this.currentLevel].goal_dimensions))

        if (this.player.lives === 0) { 
            this.currentLevel = 0;
        }

        // Draws the goal
        this.levels[this.currentLevel].draw(this.ctx); 
        
        // for (let i = 0; i < this.platforms.length; i++) { 
        //     let platform = this.platforms[i]
        //     platform.draw(this.ctx)
        // }

        if (this.soundFlag) { 
            this.sound.play();
            this.sound.volume = 0.10;
        } else if (!this.soundFlag) { 
            this.sound.pause();
        }

        requestAnimationFrame(this.gameLoop)
    }

    drawBackground(ctx) {
        // this.backgroundImg = new Image();
        // this.backgroundImg.src = "./assets/background_glacial_mountains.png";
        // this.backgroundImg.onload = () => {
            this.ctx.drawImage(this.backgroundImg, 0, 0, this.dimensions.width, this.dimensions.height);
            // this.ctx.beginPath();
        // }
    }

    musicHandler() { 
        if (this.soundFlag) { 
            this.soundFlag = false;
        } else if (!this.soundFlag) { 
            this.soundFlag = true
        }
    }

    // getDistance(obj1, obj2) { // Pythagorean Theroem
    //     let xDistance = obj1.x - obj2.x; 
    //     let yDistance = obj1.y - obj2.y;

    //     return Math.sqrt(Math.pow(xDistance, 2) + Math.pow(yDistance, 2))
    // }
}