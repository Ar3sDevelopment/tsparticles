import {IMove} from "../../../Interfaces/Options/Particles/IMove";
import {Attract} from "./Attract";
import {MoveDirection} from "../../../Enums/MoveDirection";
import {OutMode} from "../../../Enums/OutMode";

export class Move implements IMove {
    /**
     *
     * @deprecated this property is obsolete, please use the new outMode
     */
    public get out_mode(): OutMode {
        return this.outMode;
    }

    /**
     *
     * @deprecated this property is obsolete, please use the new outMode
     * @param value
     */
    public set out_mode(value: OutMode) {
        this.outMode = value;
    }

    public attract: Attract;
    public bounce: boolean;
    public direction: MoveDirection;
    public enable: boolean;
    public outMode: OutMode;
    public random: boolean;
    public speed: number;
    public straight: boolean;

    constructor() {
        this.attract = new Attract();
        this.bounce = false;
        this.direction = MoveDirection.none;
        this.enable = true;
        this.outMode = OutMode.out;
        this.random = false;
        this.speed = 2;
        this.straight = false;
    }
}