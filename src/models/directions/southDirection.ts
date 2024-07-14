import { IDirection, TurnDirection } from "../../interfaces/IDirection";
import { IPosition } from "../../interfaces/IPosition";
import { Position } from "../position";
import { EastDirection } from "./eastDirection";
import { WestDirection } from "./westDirection";

export class SouthDirection implements IDirection {
  getNextDirection(turnDirection: TurnDirection): IDirection {
    return turnDirection === TurnDirection.LEFT
      ? new EastDirection()
      : new WestDirection();
  }

  getNextPosition(position: IPosition): IPosition {
    return new Position(position.row - 1, position.column);
  }

  name(): string {
    return "South";
  }
}
