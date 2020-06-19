import Player from "./player";
import LevelFailed from "./levels/level_failed";
import Level0 from "./levels/level_0";
import Level1 from "./levels/level_1";
import Level2 from "./levels/level_2";
import Level3 from "./levels/level_3";
// import Level4 from "./levels/level_4";
import LevelComplete from "./levels/level_complete";

export default class BladeBoy { 
    constructor(canvas, sound, muteButton) { 
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
        
        this.player = new Player(this.height, this.width, this.ctx); 
        this.levels = [new LevelFailed(this.ctx), new Level0(this.ctx), new Level1(this.ctx, this.player), new Level2(this.ctx, this.player), new Level3(this.ctx, this.player), new LevelComplete(this.ctx, this.player)];
        this.currentLevel = 1;

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

        if (this.player.loop(this.ctx, this.levels[this.currentLevel].platforms, this.levels[this.currentLevel].goal_dimensions) === true) {
            this.player.x = this.levels[this.currentLevel].startingPosition.x;
            this.player.y = this.levels[this.currentLevel].startingPosition.y;
        }

        if (this.player.collidedWith(this.levels[this.currentLevel], this.levels[this.currentLevel].goal_dimensions) === true) { // Whenever I'm on the goal, it returns undefined for some reason 
            this.currentLevel++
            if (this.currentLevel === this.levels.length) { 
                this.currentLevel = 1;
                this.player.lives = 3;
            }
            this.player.x = this.levels[this.currentLevel].startingPosition.x;
            this.player.y = this.levels[this.currentLevel].startingPosition.y;
        }

        if (this.player.lives === 0) { 
            this.currentLevel = 0;
            this.player.lives = 3;
            this.player.x = this.levels[0].startingPosition.x;
            this.player.y = this.levels[0].startingPosition.y;
        }

        // Draws the goal
        this.levels[this.currentLevel].draw(this.ctx); 

        if (this.soundFlag) { 
            this.sound.play();
            this.sound.volume = 0.25;
        } else if (!this.soundFlag) { 
            this.sound.pause();
        }

        requestAnimationFrame(this.gameLoop)
    }

    drawBackground(ctx) {
        this.ctx.drawImage(this.backgroundImg, 0, 0, this.dimensions.width, this.dimensions.height);
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