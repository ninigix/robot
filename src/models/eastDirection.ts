import { IDirection, TurnDirection } from "../interfaces/IDirection";
import { IPosition } from "../interfaces/IPosition";
import { Position } from "./position";
import { NorthDirection } from "./northDirection";
import { SouthDirection } from "./southDirection";

export class EastDirection implements IDirection {
  getNextDirection(turnDirection: TurnDirection): IDirection {
    return turnDirection === TurnDirection.LEFT
      ? new NorthDirection()
      : new SouthDirection();
  }

  getNextPosition(position: IPosition): IPosition {
    return new Position(position.row, position.column + 1);
  }

  name(): string {
    return "East";
  }
}
