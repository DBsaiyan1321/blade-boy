import Controller from "./controller";

export default class Player { 
    constructor(maxHeight, maxWidth, platforms, ctx) { 
        this.height = 32;
        this.width = 10;
        // this.height = 100;
        // this.width = 100;

        this.x = 144; // Left
        this.velocityX = 0;
        this.y = 0; // Top
        this.velocityY = 0;

        this.facing = "right"
        this.right;
        this.bottom;

        this.ol; 
        this.or;
        this.ot;
        this.ob;

        this.maxX = maxWidth;
        this.maxY = maxHeight;
        this.platforms = platforms // When I have more platforms, the game is going to pass in an array of them

        this.jumping = true;
        
        this.attacked = false;
        this.attackDelay = 15;
        this.attackFrame = 0;

        this.controller = new Controller()
        this.loop = this.loop.bind(this);
        this.collidedWith = this.collidedWith.bind(this)
        this.setBottom = this.setBottom.bind(this)
        this.setRight = this.setRight.bind(this)
        this.draw = this.draw.bind(this);
    }

    loop(ctx) { 
        this.setBottom()
        this.setRight()
        // this.setCenter()

        // Movement
        if (this.controller.up && !this.jumping) { 
            this.velocityY -= 20;
            this.jumping = true;
        }

        if (this.controller.left) { 
            this.velocityX -= 1; // If I just set it equal, it won't ease in
            this.facing = "left";
        }

        if (this.controller.right) {
            this.velocityX += 1;
            this.facing = "right";
        }
        
        this.velocityY += 0.7; // gravity
        this.x += this.velocityX;
        this.y += this.velocityY;
        this.velocityX *= 0.8 // friction
        this.velocityY *= 0.9 // friction

        // if the player is falling below the floor line
        if (this.y > this.maxY - this.height) { 
            this.jumping = false; 
            this.y = this.maxY - this.height; 
            this.velocityY = 0;
        }

        // if the player is going off of the screen to the left 
        if (this.x < 0) { 
            this.x = 0;
        } else if (this.x > this.maxX - this.width) { 
            this.x = this.maxX - this.width;
        }

        // Attack Logic
        if (this.controller.space && (this.attacked === false)) {
            this.attack(ctx);
            this.attacked = true
            this.attackFrame += 1
        }

        if (this.attackFrame === this.attackDelay) {
            this.attackFrame = 0;
            this.attacked = false;
        }

        if (this.attacked === true) {
            this.attackFrame += 1
        }

        // Checking if I'm hitting a platform
        this.collidedWith(this.platforms)

        // Set the old dimensions to the current dimensions
        this.ol = this.x;
        this.or = this.right; 
        this.ot = this.y; 
        this.ob = this.bottom;
    }

    draw(ctx) {
        // ctx.fillStyle = "red";
        // ctx.fillRect(this.x, this.y, this.width, this.height)
        // console.log(this.width, this.height)
        this.playerImg = new Image();
        this.playerImg.src = "./assets/adventurer-v1.5-Sheet.png"
        this.playerImg.onload = () => {
            ctx.drawImage(this.playerImg, 13, 0, 20, 37, this.x, this.y, this.width, this.height);
        }
    }

    attack(ctx) {
        ctx.fillStyle = "blue";
        if (this.facing === "left") { 
            ctx.fillRect(this.x, this.y, -20, this.height)
        } else if (this.facing === "right") { 
            ctx.fillRect(this.x + this.width, this.y, 20, this.height)
        }
    }

    setBottom() { 
        this.bottom = this.y + this.height
    }

    setRight() { 
        this.right = this.x + this.width
    }

    collidedWith(platforms) { 
        for (let i = 0; i < platforms.length; i++) { 
            let platform = platforms[i];

            // I don't understand this line, but I understand everything else
            if (this.y > platform.bottom || this.bottom < platform.y || this.x > platform.right || this.right < platform.x) continue;

            if (this.y <= platform.bottom && this.ot >= platform.bottom) {
                this.y = platform.bottom
                this.velocityY = 0;
            } else if (this.bottom >= platform.y && this.ob <= platform.y) {
                this.y = platform.y - this.height;
                this.velocityY = 0; // Set the gravity to 0, or else it will look like the player is stuttering
                this.jumping = false;
            } else if (this.x <= platform.right && this.ol >= platform.right) {
                this.x = platform.right
            } else if (this.right >= platform.x && this.or <= platform.x) {
                this.x = platform.x - this.width;
                // this.right = this.x; // Prevents it from stuttering, but gets stuck to the wall. I already tried setting velocityX to 0 too.
            }
        }
    }
}