import Player from "./player";
import Platform from "./platform";

export default class BladeBoy { 
    constructor(canvas, sound, muteButton) { 
        this.ctx = canvas.getContext("2d");
        this.dimensions = { width: canvas.width, height: canvas.height }
        this.lastTime = 0;
        this.height = canvas.height
        this.width = canvas.width

        this.muteButton = muteButton;
        this.sound = sound;
        this.soundFlag = true;
        this.muteButton.addEventListener("click", () => { 
            this.musicHandler()
        })
        
        this.platforms = [
            // x, y, width, height
            new Platform(200, 425, 100, 25, this.height, this.width),
            new Platform(350, 425, 100, 25, this.height, this.width),
            new Platform(100, 475, 100, 25, this.height, this.width) 
        ];
        this.player = new Player(this.height, this.width, this.platforms);

        this.gameLoop = this.gameLoop.bind(this);
        this.gameLoop()
    }

    gameLoop(timeStamp) { 
        let deltaTime = timeStamp - this.lastTime
        this.lastTime = timeStamp

        // this.ctx.clearRect(0, 0, this.dimensions.width, this.dimensions.height); // For some reason this breaks the background
        this.drawBackground(this.ctx)
        this.player.loop(this.ctx)
        this.player.draw(this.ctx)
        for (let i = 0; i < this.platforms.length; i++) { 
            let platform = this.platforms[i]
            platform.draw(this.ctx)
        }

        if (this.soundFlag) { 
            this.sound.play();
            this.sound.volume = 0.25;
        } else if (!this.soundFlag) { 
            this.sound.pause();
        }

        requestAnimationFrame(this.gameLoop)
    }

    drawBackground(ctx) {
        this.backgroundImg = new Image();
        this.backgroundImg.src = "../assets/background_glacial_mountains.png";
        this.backgroundImg.onload = () => {
            this.ctx.drawImage(this.backgroundImg, 0, 0, this.dimensions.width, this.dimensions.height);
            // this.ctx.beginPath();
        }
    }

    musicHandler() { 
        if (this.soundFlag) { 
            this.soundFlag = false;
        } else if (!this.soundFlag) { 
            this.soundFlag = true
        }
    }

    getDistance(obj1, obj2) { // Pythagorean Theroem
        let xDistance = obj1.x - obj2.x; 
        let yDistance = obj1.y - obj2.y;

        return Math.sqrt(Math.pow(xDistance, 2) + Math.pow(yDistance, 2))
    }
}