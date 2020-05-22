export default class Controller { 
    constructor() { 
        this.left = false;
        this.right = false; 
        this.up = false; 
        this.space = false;

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
        } else if (event.keyCode === 32) { 
            event.preventDefault(); // Need this because the song will start and stop if I just clicked the button
            this.space = keyState;
        }
    }
}