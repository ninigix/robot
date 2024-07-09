import {IPosition} from "./IPosition";
import {TurnDirection} from "../models/direction";

export interface IDirection {
    getNextDirection(turnDirection: TurnDirection): IDirection;
    getNextPosition(position: IPosition): IPosition;
    name(): string;
}