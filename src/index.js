import BladeBoy from "./game";

document.addEventListener("DOMContentLoaded", () => {
    const canvas = document.getElementById("game-canvas");
    const sound = document.getElementById("sound")
    new BladeBoy(canvas, sound) 
})
