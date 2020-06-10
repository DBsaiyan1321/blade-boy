import BladeBoy from "./game";

document.addEventListener("DOMContentLoaded", () => {
    const canvas = document.getElementById("game-canvas");
    const sound = document.getElementById("sound");
    const muteButton = document.getElementById("mute-button")
    const platformImg = new Image();
    platformImg.src = "./assets/Tilemap.png";
    platformImg.setAttribute("id", "platform")
    platformImg.onload = () => { 
        new BladeBoy(canvas, sound, muteButton, platformImg) 
    }
})
