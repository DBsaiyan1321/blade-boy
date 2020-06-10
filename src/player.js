import Controller from "./controller";

export default class Player { 
    constructor(maxHeight, maxWidth, level, goal, ctx) { 
        this.height = 75;
        this.width = 50;
        // this.height = 100;
        // this.width = 100;
        this.ctx = ctx;

        this.lives = 3;

        this.maxHeight = maxHeight;

        this.x = 20; // Left
        this.velocityX = 0;
        this.y = maxHeight-200; // Top
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
        this.platforms = level.platforms;
        this.goal = goal;

        this.jumping = true;
        
        this.attacked = false;
        this.attackDelay = 15;
        this.attackFrame = 0;

        // The sprites are 50px are from each other horizontally on the sprite sheet
        this.idleLoop = [10, 60, 110, 160] // These are the x values on the sprite sheet. The dimensions of the sprite sheet are shown in the blue bar at the bottom right.
        this.idleFrame = 0;
        this.idleFrameCount = 0;

        this.leftLoop = [60, 110, 160, 210, 260, 310]
        this.leftFrame = 0;
        this.leftFrameCount = 0;

        this.rightLoop = [60, 110, 160, 210, 260, 310]
        this.rightFrame = 0;
        this.rightFrameCount = 0;

        this.jumpLoop = [110, 160, 210, 260, 310, 10, 60, 110]
        this.jumpFrame = 0;
        this.jumpFrameCount = 0;

        this.controller = new Controller()
        this.loop = this.loop.bind(this);
        this.collidedWith = this.collidedWith.bind(this)
        this.setBottom = this.setBottom.bind(this)
        this.setRight = this.setRight.bind(this)
        this.draw = this.draw.bind(this);
        this.drawFrame = this.drawFrame.bind(this);
    }



    loop(ctx) { 
        this.setBottom()
        this.setRight()

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

        // Lives and Bounds
        // if the player is falling below the floor line
        if (this.y > this.maxY - this.height) { 
            this.jumping = false; 
            this.velocityY = 0;

            this.y = this.maxHeight - 200; // This is working though
            this.x = 20; // This isn't working rn
            this.lives--
            console.log(this.lives)
        }

        // if the player is going off of the screen to the left or right
        if (this.x < 0) { 
            this.x = 0;
        } else if (this.x > this.maxX - this.width) { 
            this.x = this.maxX - this.width;
        }

        if (this.lives < 0) { 
            this.lives = 3;
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
        this.collidedWith(this.platforms, this.goal);

        // Set the old dimensions to the current dimensions
        this.ol = this.x;
        this.or = this.right; 
        this.ot = this.y; 
        this.ob = this.bottom;

        // Animations
        this.draw(this.ctx)

        if (this.jumping) { 
            this.jumpFrameCount++

            if (this.jumpFrameCount === 4) {
                this.jumpFrame++
                this.jumpFrameCount = 0;
            }

            if (this.jumpFrame >= this.jumpLoop.length) {
                this.jumpFrame = 7;
            }
        } else if (this.controller.right) { 
            this.rightFrameCount++

            if (this.rightFrameCount === 7) {
                this.rightFrame++
                this.rightFrameCount = 0;
            }

            if (this.rightFrame >= this.rightLoop.length) {
                this.rightFrame = 0;
            }
        } else if (this.controller.left) {
            this.leftFrameCount++

            if (this.leftFrameCount === 7) {
                this.leftFrame++
                this.leftFrameCount = 0;
            }

            if (this.leftFrame >= this.leftLoop.length) {
                this.leftFrame = 0;
            }
        } else {
            this.idleFrameCount++

            if (this.idleFrameCount === 10) {
                this.idleFrame++
                this.idleFrameCount = 0;
            }

            if (this.idleFrame >= this.idleLoop.length) {
                this.idleFrame = 0;
            }

            this.leftFrame = 0;
            this.leftFrameCount = 0;

            this.rightFrame = 0;
            this.rightFrameCount = 0;

            this.jumpFrame = 0;
            this.jumpFrameCount = 0;
        }
    }



    draw(ctx) {
        if (this.jumping) {
            if (this.jumpFrame <= 4) { 
                this.drawFrame(ctx, this.jumpLoop[this.jumpFrame], 74, 27, 37)
            } else { 
                this.drawFrame(ctx, this.jumpLoop[this.jumpFrame], 111, 27, 37)
            }
        } else if (this.controller.right) { 
            this.drawFrame(ctx, this.rightLoop[this.rightFrame], 37, 27, 37)
        } else if (this.controller.left) { 
            this.drawFrame(ctx, this.leftLoop[this.leftFrame], 37, 27, 37)
        } else { 
            this.drawFrame(ctx, this.idleLoop[this.idleFrame], 0, 27, 37);
        }
    }



    drawFrame(ctx, frameX, frameY, canvasX, canvasY, x, y) { 
        this.playerImg = new Image();
        this.playerImg.src = "./assets/adventurer-v1.5-Sheet.png"
        this.playerImg.onload = () => {
            // this.playerImg.setAttribute("id", "player");
            if (this.controller.left) {
                ctx.drawImage(this.playerImg, frameX, frameY, canvasX, canvasY, this.x, this.y, this.width, this.height);
            } else { 
                // this.playerImg.className = ""
                ctx.drawImage(this.playerImg, frameX, frameY, canvasX, canvasY, this.x, this.y, this.width, this.height);
            }
            // console.log(this.playerImg)
        }
    }



    attack(ctx) {
        ctx.fillStyle = "black";
        if (this.facing === "left") { 
            ctx.fillRect(this.x, this.y, -20, this.height)
        } else if (this.facing === "right") { 
            ctx.fillRect(this.x + this.width, this.y, 20, this.height)
        }
    }



    setBottom() { 
        this.bottom = this.y + this.height;
    }



    setRight() { 
        this.right = this.x + this.width;
    }



    collidedWith(platforms, goal) { 
        for (let i = 0; i < platforms.length; i++) { 
            let platform = platforms[i];

            // if (this.y > platform.bottom || this.bottom < platform.y || this.x > platform.right || this.right < platform.x) return;
            if (this.y > platform.bottom || this.bottom < platform.y || this.x > platform.right || this.right < platform.x) continue;

            if (this.y <= platform.bottom && this.ot > platform.bottom) {
                this.y = platform.bottom + 0.1;
                this.velocityY = 0;
            } else if (this.bottom >= platform.y && this.ob < platform.y) {
                this.y = platform.y - this.height - 0.1; // Doing this made the collider work for when the player's right side hits the platforms left side. 
                this.velocityY = 0; // Set the gravity to 0, or else it will look like the player is stuttering
                this.jumping = false;
            } else if (this.x <= platform.right && this.ol > platform.right) {
                this.x = platform.right + 0.1;
                this.velocityX = 0
            } else if (this.right >= platform.x && this.or < platform.x) {
                this.x = platform.x - this.width - 0.1; // I don't know why this stutters, but the bottom one doesn't stutter
                this.velocityX = 0;
                // this.setRight()
                // this.velocityX = 0; // Prevents the stuttering, but still gets stuck
                // this.right = platform.x // Doesn't work because yo u go right through
                // this.right = this.x; // Prevents it from stuttering, but gets stuck to the wall. I already tried setting velocityX to 0 too.
            }
        }

        if (this.y > goal.bottom || this.bottom < goal.top || this.x > goal.right || this.right < goal.left) return false;

        if (this.y <= goal.bottom && this.ot >= goal.bottom) {
            return true;
        } else if (this.bottom >= goal.top && this.ob <= goal.top) {
            return true;
        } else if (this.x <= goal.right && this.ol >= goal.right) {
            return true;
        } else if (this.right >= goal.left && this.or <= goal.left) {
            return true;
        }
    }
}