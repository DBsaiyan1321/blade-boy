export default class Controller { 
    constructor() { 
        this.left = false;
        this.right = false; 
        this.up = false; 

        this.inputHandler = this.inputHandler.bind(this);

        document.addEventListener("keydown", () => this.inputHandler(event))
        document.addEventListener("keyup", () => this.inputHandler(event))
    }

    inputHandler(event) { 
        let keyState = (event.type == "keydown") ? true : false 
        
        if (event.keyCode === 65) { 
            this.left = keyState;
        } else if (event.keyCode === 68) { 
            this.right = keyState;
        } else if (event.keyCode === 87) { 
            this.up = keyState;
        }
        // switch(event.keyCode) { 
        //     case 65:
        //         this.left = keyState;
        //     case 68:
        //         this.right = keyState;
        //     case 87: 
        //         this.up = keyState;
        //     default:
        //         break;
        // } 
    }
}