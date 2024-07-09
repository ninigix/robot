export enum TurnDirection {
    LEFT,
    RIGHT
}

import {IDirection} from "../interfaces/IDirection";
import {IPosition} from "../interfaces/IPosition";
import {Position} from "./position";

export class NorthDirection implements IDirection {
    getNextDirection(turnDirection: TurnDirection): IDirection {
        return turnDirection === TurnDirection.LEFT ? new WestDirection() : new EastDirection();
    }

    getNextPosition(position: IPosition): IPosition {
        return new Position(position.row - 1, position.column);
    }

    name(): string {
        return "North";
    }
}

export class EastDirection implements IDirection {
    getNextDirection(turnDirection: TurnDirection): IDirection {
        return turnDirection === TurnDirection.LEFT ? new NorthDirection() : new SouthDirection();
    }

    getNextPosition(position: IPosition): IPosition {
        return new Position(position.row, position.column + 1);
    }

    name(): string {
        return "East"
    }
}

export class SouthDirection implements IDirection {
    getNextDirection(turnDirection: TurnDirection): IDirection {
        return turnDirection === TurnDirection.LEFT ? new EastDirection() : new WestDirection();
    }

    getNextPosition(position: IPosition): IPosition {
        return new Position(position.row + 1, position.column);
    }

    name(): string {
        return "South"
    }
}

export class WestDirection implements IDirection {
    getNextDirection(turnDirection: TurnDirection): IDirection {
        return turnDirection === TurnDirection.LEFT ? new SouthDirection() : new NorthDirection();
    }

    getNextPosition(position: IPosition): IPosition {
        return new Position(position.row, position.column - 1);
    }

    name(): string {
        return "West"
    }
}
