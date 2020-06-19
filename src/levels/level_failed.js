import Level from "./level";

export default class LevelFailed extends Level {
    constructor(ctx) {
        const tiles = [
            { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 },
            { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 },
            { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 },
            { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 },
            { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 },
            { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 },
            { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 },
            { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 },
            { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 },
            { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 },
            { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 },
            { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 },
            { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 },
            { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 },
            { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 },
            { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 },
            { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 },
            { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 },
            { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 0 },
            { x: 0, y: 0 }, { x: 8, y: 0 }, { x: 16, y: 0 }, { x: 24, y: 0 }, { x: 32, y: 0 }, { x: 40, y: 0 }, { x: 48, y: 0 }, { x: 56, y: 0 }, { x: 0, y: 0 }, { x: 8, y: 0 }, { x: 16, y: 0 }, { x: 24, y: 0 }, { x: 32, y: 0 }, { x: 40, y: 0 }, { x: 48, y: 0 }, { x: 56, y: 0 }, { x: 8, y: 0 }, { x: 16, y: 0 }, { x: 24, y: 0 }, { x: 32, y: 0 }, { x: 40, y: 0 }, { x: 48, y: 0 }, { x: 8, y: 0 }, { x: 16, y: 0 }, { x: 24, y: 0 }, { x: 32, y: 0 }, { x: 40, y: 0 }, { x: 48, y: 0 }, { x: 8, y: 0 }, { x: 16, y: 0 }, { x: 24, y: 0 }, { x: 32, y: 0 }, { x: 40, y: 0 }, { x: 48, y: 0 }, { x: 32, y: 0 }, { x: 56, y: 0 },
        ];

        const goal = { x: 825, y: 440, width: 20, height: 20 };

        const startingPosition = { x: 20, y: 300 };

        super(ctx, tiles, goal, startingPosition);
    }

    draw(ctx) {
        super.draw(ctx);

        ctx.fillStyle = "black";
        ctx.font = '140px Audiowide';
        ctx.fillText('You Failed', 50, 170);

        ctx.font = '28px times new roman';
        ctx.fillText('Try Again', 770, 420);
    }
}