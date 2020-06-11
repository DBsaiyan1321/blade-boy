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

    // Arrows or AWD
    inputHandler(event) { 
        let keyState = (event.type == "keydown") ? true : false 
        
        if (event.keyCode === 65 || event.keyCode === 37) { 
            this.left = keyState;
        } else if (event.keyCode === 68 || event.keyCode === 39) { 
            this.right = keyState;
        } else if (event.keyCode === 87 || event.keyCode === 38) { 
            this.up = keyState;
        } else if (event.keyCode === 32) { 
            event.preventDefault(); // Need this because the song will start and stop if I just clicked the button
            this.space = keyState;
        }
    }
}