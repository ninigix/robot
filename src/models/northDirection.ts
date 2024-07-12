import { IDirection, TurnDirection } from "../interfaces/IDirection";
import { IPosition } from "../interfaces/IPosition";
import { Position } from "./position";
import { WestDirection } from "./westDirection";
import { EastDirection } from "./eastDirection";

export class NorthDirection implements IDirection {
  getNextDirection(turnDirection: TurnDirection): IDirection {
    return turnDirection === TurnDirection.LEFT
      ? new WestDirection()
      : new EastDirection();
  }

  getNextPosition(position: IPosition): IPosition {
    return new Position(position.row + 1, position.column);
  }

  name(): string {
    return "North";
  }
}
