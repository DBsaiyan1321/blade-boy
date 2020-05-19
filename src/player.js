import Controller from "./controller";

export default class Player { 
    constructor(maxHeight, maxWidth) { 
        this.height = 32;
        this.jumping = true;
        this.width = 10;
        this.x = 144; 
        this.velocityX = 0;
        this.y = 0; 
        this.velocityY = 0;
        this.maxX = maxWidth;
        this.maxY = maxHeight;

        console.log(this.maxX)
        console.log(this.maxY)

        this.controller = new Controller()
        this.loop = this.loop.bind(this);
    }

    loop() { 
        if (this.controller.up && !this.jumping) { 
            this.velocityY -= 20;
            this.jumping = true;
        }

        if (this.controller.left) { 
            this.velocityX -= 1; // If I just set it equal, it won't ease in
        }

        if (this.controller.right) {
            this.velocityX += 1;
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
    }

    draw(ctx) {
        ctx.fillStyle = "red";
        ctx.fillRect(this.x, this.y, this.width, this.height)
    }
}

// export default class Player { 
//     constructor(ctx) { 
//         this.width = 10
//         this.height = 30
//         this.position = { x: 100, y: 100}
//         this.speed = 0
//         this.maxSpeed = 5
//         this.draw(ctx)

//         // this.zombieImg = new Image();
//         // this.zombieImg.src = "./public/images/zombie.png";
//         document.addEventListener("keydown", event => {
//             this.handleInput(event)
//         })

//         document.addEventListener("keyup", event => {
//             this.handleRelease(event)
//         })

//         this.update = this.update.bind(this); 
//         this.handleInput = this.handleInput.bind(this);
//     }

//     draw(ctx) {
//         ctx.fillStyle = "red";
//         ctx.fillRect(this.position.x, this.position.y, this.width, this.height)
//     }

//     update(deltaTime) { 
//         if (!deltaTime) return 
//         // this.position.x += 5 / deltaTime
//         this.position.x += this.speed;

//         if (this.position.x < 0) this.position.x = 0
//     }

//     handleInput(event) {
//         // This switch case doesn't work properly
//         // switch (event.keyCode) {
//         //     case 65:
//         //         this.position.x -= 10 
//         //     case 68:
//         //         this.position.x += 10 
//         //     case 87: 
//         //         this.position.y += 10
//         //     default:
//         //         break;
//         // } 
//         if (event.keyCode === 65) { // a
//             // this.position.x -= 10 
//             this.speed = -this.maxSpeed
//         } else if (event.keyCode === 68) { // d
//             this.speed = this.maxSpeed 
//         } else if (event.keyCode === 87) { // w
//             this.position.y -= 10
//         } 
//     }

//     handleRelease(event) {
//         if (event.keyCode === 65 || event.keyCode === 68 || event.keyCode === 87) { 
//            this.speed = 0
//         }
//     }
// }