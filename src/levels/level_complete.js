import Platform from "../platform";

export default class LevelComplete {
    constructor(ctx, player) {
        this.rows = 20;
        this.cols = 36;
        this.tileSize = 25;
        this.tiles = [
            { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 },
            { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 },
            { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 },
            { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: 0, y: 0 }, { x: 0, y: 0 }, { x: 0, y: 0 }, { x: 0, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: 0, y: 0 }, { x: 0, y: 0 }, { x: 0, y: 0 }, { x: 0, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 },
            { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: 0, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: 0, y: 0 }, { x: -1, y: 0 }, { x: 0, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: 0, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 },
            { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: 0, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: 0, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: 0, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 },
            { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: 0, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: 0, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 },
            { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: 0, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: 0, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 },
            { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: 0, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: 0, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 },
            { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: 0, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: 0, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 },
            { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: 0, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: 0, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 },
            { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: 0, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: 0, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 },
            { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: 0, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: 0, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 },
            { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: 0, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: 0, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 },
            { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: 0, y: 0 }, { x: -1, y: 0 }, { x: 0, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 },
            { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: 0, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 },
            { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 },
            { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 },
            { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 },
            { x: 0, y: 0 }, { x: 8, y: 0 }, { x: 16, y: 0 }, { x: 24, y: 0 }, { x: 32, y: 0 }, { x: 40, y: 0 }, { x: 48, y: 0 }, { x: 56, y: 0 }, { x: 0, y: 0 }, { x: 8, y: 0 }, { x: 16, y: 0 }, { x: 24, y: 0 }, { x: 32, y: 0 }, { x: 40, y: 0 }, { x: 48, y: 0 }, { x: 56, y: 0 }, { x: 8, y: 0 }, { x: 16, y: 0 }, { x: 24, y: 0 }, { x: 32, y: 0 }, { x: 40, y: 0 }, { x: 48, y: 0 }, { x: 8, y: 0 }, { x: 16, y: 0 }, { x: 24, y: 0 }, { x: 32, y: 0 }, { x: 40, y: 0 }, { x: 48, y: 0 }, { x: 8, y: 0 }, { x: 16, y: 0 }, { x: 24, y: 0 }, { x: 32, y: 0 }, { x: 40, y: 0 }, { x: 48, y: 0 }, { x: 32, y: 0 }, { x: 56, y: 0 },
        ];

        this.platforms = [];

        this.goal = { x: 50, y: 440, width: 20, height: 20 }

        this.goal_dimensions = {
            left: this.goal.x,
            right: this.goal.x + this.goal.width,
            top: this.goal.y,
            bottom: this.goal.y + this.goal.height
        }

        this.goalLoop = [0, 16, 32, 48, 64]
        this.goalFrame = 0;
        this.goalFrameCount = 0;

        this.draw = this.draw.bind(this);
        this.getTile = this.getTile.bind(this);
        this.init = this.init.bind(this)

        this.startingPosition = { x: 860, y: 400 }

        this.player = player;

        // Images
        this.goalImg = new Image();
        this.goalImg.src = "./assets/MonedaD.png";

        this.platformImg = new Image();
        this.platformImg.src = "./assets/Tilemap.png";
        this.platformImg.onload = () => {
            this.init(ctx)
        }
    }

    init(ctx) {
        for (let c = 0; c < this.cols; c++) {
            for (let r = 0; r < this.rows; r++) {
                let tile = this.getTile(c, r);
                if (tile.x !== -1) { // 0 => empty tile
                    this.platforms.push(new Platform(
                        tile.x, // source x
                        tile.y, // source y
                        8, // source width
                        8, // source height
                        c * this.tileSize, // target x
                        r * this.tileSize, // target y
                        this.tileSize, // target width
                        this.tileSize // target height
                    ));
                }
            }
        }

    }

    draw(ctx) {
        for (let i = 0; i < this.platforms.length; i++) {
            let platform = this.platforms[i]
            ctx.drawImage(this.platformImg, platform.spriteX, platform.spriteY, platform.spriteWidth, platform.spriteHeight, platform.x, platform.y, platform.width, platform.height)
        }

        ctx.drawImage(this.goalImg, this.goalLoop[this.goalFrame], 0, 16, 16, this.goal.x, this.goal.y, this.goal.width, this.goal.height)

        this.goalFrameCount++

        if (this.goalFrameCount === 10) {
            this.goalFrame++
            this.goalFrameCount = 0;
        }

        if (this.goalFrame === 5) {
            this.goalFrame = 0;
        }

        ctx.fillStyle = "black";
        ctx.font = '40px times new roman';
        ctx.fillText('Congratulations!', 305, 60);
        ctx.fillStyle = "black";
        ctx.font = '28px times new roman';
        ctx.fillText('You can now pay rent', 310, 210);
        ctx.fillText('with your 3 gold coins!', 310, 240);
        ctx.font = '28px times new roman';
        ctx.fillText('Play Again', 25, 420);
    }

    getTile(col, row) {
        return this.tiles[row * this.cols + col] // The tiles are a 1D array, but it looks like a 2D array lol. 
    }
}