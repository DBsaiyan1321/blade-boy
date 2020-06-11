import BladeBoy from "./game";

document.addEventListener("DOMContentLoaded", () => {
    const canvas = document.getElementById("game-canvas");
    const sound = document.getElementById("sound");
    const muteButton = document.getElementById("mute-button")
    new BladeBoy(canvas, sound, muteButton);
})
