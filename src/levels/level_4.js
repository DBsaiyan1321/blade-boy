import Level from "./level";

export default class Level4 extends Level {
    constructor(ctx, player) {
        const tiles = [
            { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: 0, y: 0 }, { x: 0, y: 0 }, { x: 0, y: 0 }, { x: 0, y: 0 }, { x: 0, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: 0, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, 
            { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: 0, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: 0, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, 
            { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: 0, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: 0, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, 
            { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: 0, y: 0 }, { x: 0, y: 0 }, { x: 0, y: 0 }, { x: 0, y: 0 }, { x: 0, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: 0, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, 
            { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: 0, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 },
            { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: 0, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 },
            { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: 0, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 },
            { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: 0, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 },
            { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: 0, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 },
            { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: 0, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 },
            { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: 0, y: 0 }, { x: 0, y: 0 }, { x: 0, y: 0 }, { x: 0, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: 0, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 },
            { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: 0, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 },
            { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: 0, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 },
            { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: 0, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 },
            { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: 0, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 },
            { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: 0, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 },
            { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: 0, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 },
            { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: 0, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 },
            { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: 0, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 },
            { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: 0, y: 0 }, { x: 0, y: 0 }, { x: 8, y: 0 }, { x: 16, y: 0 }, { x: 24, y: 0 }, { x: 32, y: 0 }, { x: 40, y: 0 }, { x: 48, y: 0 }, { x: 56, y: 0 }, { x: 8, y: 0 }, { x: 16, y: 0 }, { x: 24, y: 0 }, { x: 32, y: 0 }, { x: 40, y: 0 }, { x: 48, y: 0 }, { x: 8, y: 0 }, { x: 16, y: 0 }, { x: 24, y: 0 }, { x: 32, y: 0 }, { x: 40, y: 0 }, { x: 48, y: 0 }, { x: 8, y: 0 }, { x: 16, y: 0 }, { x: 24, y: 0 }, { x: 32, y: 0 }, { x: 40, y: 0 }, { x: 48, y: 0 }, { x: 32, y: 0 }, { x: 56, y: 0 }
        ];

        const goal = { x: 850, y: 440, width: 20, height: 20 };

        const startingPosition = { x: 175, y: 25 };

        super(ctx, tiles, goal, startingPosition);

        this.player = player;
    }

    draw(ctx) {
        super.draw(ctx);

        ctx.fillStyle = "black";
        ctx.font = '24px arial';
        ctx.fillText(`Lives: ${this.player.lives}`, 810, 25);
    }
}