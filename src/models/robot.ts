import { IPosition } from "../interfaces/IPosition";
import { IActor } from "../interfaces/IActor";
import { IDirection } from "../interfaces/IDirection";
import { TurnDirection } from "./direction";
import { TableTop } from "./tabletop";
import {
  InvalidPlacementError,
  InvalidPositionError,
  TabletopNotSetError,
} from "../utils/error";

export class Robot implements IActor {
  private direction: IDirection | undefined;
  private currentPosition: IPosition | undefined;
  private tableTop: TableTop | undefined;

  constructor(tableTop: TableTop) {
    this.tableTop = tableTop;
  }

  place(
    position: IPosition | undefined,
    direction: IDirection | undefined,
  ): void {
    if (!this.tableTop) {
      throw new TabletopNotSetError("Tabletop not set");
    }

    if (position && direction) {
      if (this.tableTop.isValid(position)) {
        this.currentPosition = position;
        this.direction = direction;
      } else {
        throw new InvalidPositionError("Invalid position");
      }
    } else {
      throw new InvalidPlacementError("Invalid position or direction");
    }
  }

  move(): void {
    if (this.currentPosition) {
      const newPosition = this.direction?.getNextPosition(this.currentPosition);
      if (newPosition && this.tableTop?.isValid(newPosition)) {
        this.currentPosition = newPosition;
      } else {
        console.log("Move ignored - out of bounds.");
      }
    }
  }

  turnLeft(): void {
    this.direction = this.direction?.getNextDirection(TurnDirection.LEFT);
  }

  turnRight(): void {
    this.direction = this.direction?.getNextDirection(TurnDirection.RIGHT);
  }

  report(): string {
    if (!this.currentPosition || !this.direction) {
      return "Robot not placed";
    } else {
      return `Output: ${this.currentPosition?.column}, ${this.currentPosition?.row}, ${this.direction?.name()}`;
    }
  }
}
